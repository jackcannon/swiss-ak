import * as swissak from '../dist';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('cachier', () => {
  multiTest(
    [
      [swissak.cachier, 'cachier'],
      [swissak.cachier.create(), 'cachier.create()']
    ],
    (cachier, name) => {
      it(should` exist as ${name}`, () => {
        expect(cachier).toBeDefined();
      });
    }
  );

  describe('get', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.get'}`, () => {
          expect(cachier.get).toBeDefined();
        });

        it(should` return undefined if the item does not exist`, () => {
          const cache = cachier.create();
          expect(cache.get('foo')).toEqual(undefined);
        });
        it(should` return the item if it exists`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          expect(cache.get('foo')).toEqual({ name: 'foo' });
        });

        kitchenSink.toEqual(
          'id',
          (v: any) => {
            const cache = cachier.create();
            cache.save('NO-ID', { name: 'foo' });
            return cache.get(v);
          },
          kitchenSink.safe.str(undefined, false, 'NO-ID'),
          kitchenSink.samples.general
        );
      }
    );
  });

  describe('getOrSave', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.getOrSave'}`, () => {
          expect(cachier.getOrSave).toBeDefined();
        });

        it(should` return the item if it exists`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          expect(cache.getOrSave('foo', { name: 'BAR' })).toEqual({ name: 'foo' });
        });
        it(should` save the item if it does not exist`, () => {
          const cache = cachier.create();
          expect(cache.getOrSave('foo', { name: 'BAR' })).toEqual({ name: 'BAR' });
          expect(cache.get('foo')).toEqual({ name: 'BAR' });
        });

        it(should` respect the expiresIn parameter`, async () => {
          const cache = cachier.create();

          // Save with 100ms expiry
          cache.getOrSave('temp', 'value', 100);

          // Should exist initially
          expect(cache.get('temp')).toBe('value');

          // Wait 200ms (longer than expiry)
          await new Promise((resolve) => setTimeout(resolve, 200));

          // Should be gone
          expect(cache.get('temp')).toBeUndefined();

          // Should save new value when expired
          expect(cache.getOrSave('temp', 'new value')).toBe('new value');
        });

        kitchenSink.toEqual(
          'id',
          (v: any) => {
            const cache = cachier.create();
            cache.save('NO-ID', { name: 'foo' });
            return cache.getOrSave(v, { name: 'BAR' });
          },
          kitchenSink.safe.str(undefined, false, 'NO-ID'),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'orValue',
          (v: any) => {
            const cache = cachier.create();
            cache.save('foo', { name: 'foo' });
            return cache.getOrSave('foo', v);
          },
          (v) => v,
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'expiresIn',
          (v: any) => {
            const cache = cachier.create();
            cache.getOrSave('foo', 'value', v);
            return cache.get('foo');
          },
          kitchenSink.safe.num(undefined, true, undefined, undefined, Infinity),
          kitchenSink.samples.num
        );
      }
    );
  });

  describe('getOrRun', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.getOrRun'}`, () => {
          expect(cachier.getOrRun).toBeDefined();
        });

        it(should` return the item if it exists`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          expect(cache.getOrRun('foo', () => ({ name: 'BAR' }))).toEqual({ name: 'foo' });
        });

        it(should` run the function if the item does not exist`, () => {
          const cache = cachier.create();
          expect(cache.getOrRun('foo', () => ({ name: 'BAR' }))).toEqual({ name: 'BAR' });
          expect(cache.get('foo')).toEqual({ name: 'BAR' });
        });

        it(should` respect the expiresIn parameter`, async () => {
          const cache = cachier.create();
          let runCount = 0;

          const getValue = () => {
            runCount++;
            return `value${runCount}`;
          };

          // Save with 100ms expiry
          expect(cache.getOrRun('temp', getValue, 100)).toBe('value1');
          expect(runCount).toBe(1);

          // Should return cached value
          expect(cache.getOrRun('temp', getValue, 100)).toBe('value1');
          expect(runCount).toBe(1);

          // Wait 200ms (longer than expiry)
          await new Promise((resolve) => setTimeout(resolve, 200));

          // Should run function again after expiry
          expect(cache.getOrRun('temp', getValue, 100)).toBe('value2');
          expect(runCount).toBe(2);
        });

        kitchenSink.toEqual(
          'id',
          (v: any) => {
            const cache = cachier.create();
            cache.save('NO-ID', { name: 'foo' });
            return cache.getOrRun(v, () => ({ name: 'BAR' }));
          },
          kitchenSink.safe.str(undefined, false, 'NO-ID'),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'orFunc',
          (v: any) => {
            const cache = cachier.create();
            cache.save('foo', { name: 'foo' });
            return cache.getOrRun('foo', v);
          },
          kitchenSink.safe.func(undefined),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'expiresIn',
          (v: any) => {
            const cache = cachier.create();
            cache.getOrRun('foo', () => 'value', v);
            return cache.get('foo');
          },
          kitchenSink.safe.num(undefined, true, undefined, undefined, Infinity),
          kitchenSink.samples.num
        );
      }
    );
  });

  describe('save', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.save'}`, () => {
          expect(cachier.save).toBeDefined();
        });

        it(should` save the item`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          expect(cache.get('foo')).toEqual({ name: 'foo' });
        });

        it(should` overwrite the item if it already exists`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          cache.save('foo', { name: 'BAR' });
          expect(cache.get('foo')).toEqual({ name: 'BAR' });
        });

        it(should` respect the expiresIn parameter`, async () => {
          const cache = cachier.create();

          // Save with 100ms expiry
          cache.save('temp', 'value', 100);

          // Should exist initially
          expect(cache.get('temp')).toBe('value');

          // Wait 200ms (longer than expiry)
          await new Promise((resolve) => setTimeout(resolve, 200));

          // Should be gone
          expect(cache.get('temp')).toBeUndefined();
        });

        kitchenSink.toEqual(
          'id',
          (v: any) => {
            const cache = cachier.create();
            return cache.save(v, { name: 'foo' });
          },
          kitchenSink.safe.str(undefined, false, 'NO-ID'),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'item',
          (v: any) => {
            const cache = cachier.create();
            return cache.save('foo', v);
          },
          (v) => v,
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'expiresIn',
          (v: any) => {
            const cache = cachier.create();
            cache.save('foo', 'value', v);
            return cache.get('foo');
          },
          kitchenSink.safe.num(undefined, true, undefined, undefined, Infinity),
          kitchenSink.samples.num
        );
      }
    );
  });

  describe('remove', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.remove'}`, () => {
          expect(cachier.remove).toBeDefined();
        });

        it(should` remove the item`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          expect(cache.get('foo')).toEqual({ name: 'foo' });
          cache.remove('foo');
          expect(cache.get('foo')).toEqual(undefined);
        });

        kitchenSink.toEqual(
          'id',
          (v: any) => {
            const cache = cachier.create();
            cache.save('foo', { name: 'foo' });
            cache.remove(v);
            return cache.get('foo');
          },
          kitchenSink.safe.str(undefined, false, 'NO-ID'),
          kitchenSink.samples.general
        );
      }
    );
  });

  describe('clear', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.clear'}`, () => {
          expect(cachier.clear).toBeDefined();
        });

        it(should` remove all items`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          cache.save('bar', { name: 'BAR' });
          expect(cache.getAll()).toEqual({ foo: { name: 'foo' }, bar: { name: 'BAR' } });
          cache.clear();
          expect(cache.getAll()).toEqual({});
        });
      }
    );
  });

  describe('getAll', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.getAll'}`, () => {
          expect(cachier.getAll).toBeDefined();
        });

        it(should` get all items`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          cache.save('bar', { name: 'BAR' });
          cache.save('baz', { name: 'baz' });
          expect(cache.getAll()).toEqual({ foo: { name: 'foo' }, bar: { name: 'BAR' }, baz: { name: 'baz' } });
        });
      }
    );
  });

  describe('create', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.create'}`, () => {
          expect(cachier.create).toBeDefined();
        });

        it(should` create a new instance`, () => {
          const cache = cachier.create();
          expect(cache).not.toBe(cachier);
        });

        it(should` have separate entries`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });

          const cache2 = cache.create();
          cache2.save('foo', { name: 'BAR' });

          expect(cache.getAll()).toEqual({ foo: { name: 'foo' } });
          expect(cache2.getAll()).toEqual({ foo: { name: 'BAR' } });
        });

        it(should` respect the defaultExpiresIn parameter`, async () => {
          const cache = cachier.create(100); // Create with 100ms default expiry

          // Save without explicit expiry - should use default
          cache.save('temp', 'value');

          // Should exist initially
          expect(cache.get('temp')).toBe('value');

          // Wait 200ms (longer than expiry)
          await new Promise((resolve) => setTimeout(resolve, 200));

          // Should be gone
          expect(cache.get('temp')).toBeUndefined();
        });

        it(should` always default to Infinity for nested creates`, () => {
          const cache = cachier.create(1000);
          expect(cache.getDefaultExpiresIn()).toBe(1000);

          const nestedCache = cache.create();
          expect(nestedCache.getDefaultExpiresIn()).toBe(Infinity);
        });

        it(should` respect new defaultExpiresIn when specified in nested creates`, () => {
          const cache = cachier.create(1000);
          expect(cache.getDefaultExpiresIn()).toBe(1000);

          const nestedCache = cache.create(2000);
          expect(nestedCache.getDefaultExpiresIn()).toBe(2000);
        });

        kitchenSink.toEqual(
          'defaultExpiresIn',
          (v: any) => {
            const cache = cachier.create(v);
            return cache.getDefaultExpiresIn();
          },
          kitchenSink.safe.num(undefined, true, undefined, undefined, Infinity),
          kitchenSink.samples.num
        );
      }
    );
  });

  describe('getDefaultExpiresIn', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.getDefaultExpiresIn'}`, () => {
          expect(cachier.getDefaultExpiresIn).toBeDefined();
        });

        it(should` return Infinity by default`, () => {
          const cache = cachier.create();
          expect(cache.getDefaultExpiresIn()).toBe(Infinity);
        });

        it(should` return the value set by setDefaultExpiresIn`, () => {
          const cache = cachier.create();
          cache.setDefaultExpiresIn(1000);
          expect(cache.getDefaultExpiresIn()).toBe(1000);
        });
      }
    );
  });

  describe('setDefaultExpiresIn', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.setDefaultExpiresIn'}`, () => {
          expect(cachier.setDefaultExpiresIn).toBeDefined();
        });

        it(should` set the default expiration time`, () => {
          const cache = cachier.create();
          cache.setDefaultExpiresIn(1000);
          expect(cache.getDefaultExpiresIn()).toBe(1000);
        });

        it(should` affect new items but not existing ones`, async () => {
          const cache = cachier.create();

          // Save with default (Infinity)
          cache.save('infinite', 'value');

          // Change default to 100ms
          cache.setDefaultExpiresIn(100);

          // Save with new default
          cache.save('temporary', 'value');

          // Wait 200ms (longer than expiry)
          await new Promise((resolve) => setTimeout(resolve, 200));

          // Infinite item should still exist
          expect(cache.get('infinite')).toBe('value');

          // Temporary item should be gone
          expect(cache.get('temporary')).toBeUndefined();
        });

        kitchenSink.toEqual(
          'expiresIn',
          (v: any) => {
            const cache = cachier.create();
            cache.setDefaultExpiresIn(v);
            return cache.getDefaultExpiresIn();
          },
          kitchenSink.safe.num(undefined, true, undefined, undefined, Infinity),
          kitchenSink.samples.num
        );
      }
    );
  });
});
