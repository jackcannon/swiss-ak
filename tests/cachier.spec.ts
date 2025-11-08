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

        it(should` return undefined for expired items by default`, async () => {
          const cache = cachier.create();
          cache.save('expired', 'value', 100);
          expect(cache.get('expired')).toBe('value');
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.get('expired')).toBeUndefined();
        });

        it(should` return undefined for expired items when ignoreExpiry is false`, async () => {
          const cache = cachier.create();
          cache.save('expired', 'value', 100);
          expect(cache.get('expired', false)).toBe('value');
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.get('expired', false)).toBeUndefined();
        });

        it(should` return expired items when ignoreExpiry is true`, async () => {
          const cache = cachier.create();
          cache.save('expired', 'value', 100);
          expect(cache.get('expired', true)).toBe('value');
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.get('expired', true)).toBe('value');
        });

        it(should` not affect non-expired items when ignoreExpiry is used`, () => {
          const cache = cachier.create();
          cache.save('nonexpired', 'value');
          expect(cache.get('nonexpired', false)).toBe('value');
          expect(cache.get('nonexpired', true)).toBe('value');
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
          cache.getOrSave('temp', 'value', 100);
          expect(cache.get('temp')).toBe('value');
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.get('temp')).toBeUndefined();
          expect(cache.getOrSave('temp', 'new value')).toBe('new value');
        });

        it(should` return cached items when ignoreExpiry is false on expired items`, async () => {
          const cache = cachier.create();
          cache.save('expired', 'original', 100);
          expect(cache.getOrSave('expired', 'fallback', Infinity, false)).toBe('original');
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.getOrSave('expired', 'fallback', Infinity, false)).toBe('fallback');
        });

        it(should` return expired items when ignoreExpiry is true`, async () => {
          const cache = cachier.create();
          cache.save('expired', 'original', 100);
          expect(cache.getOrSave('expired', 'fallback', Infinity, true)).toBe('original');
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.getOrSave('expired', 'fallback', Infinity, true)).toBe('original');
        });

        it(should` not affect non-expired items when ignoreExpiry is used`, () => {
          const cache = cachier.create();
          cache.save('nonexpired', 'original');
          expect(cache.getOrSave('nonexpired', 'fallback', Infinity, false)).toBe('original');
          expect(cache.getOrSave('nonexpired', 'fallback', Infinity, true)).toBe('original');
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
          kitchenSink.samples.num.filter((v) => v !== 0)
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

          expect(cache.getOrRun('temp', getValue, 100)).toBe('value1');
          expect(runCount).toBe(1);

          expect(cache.getOrRun('temp', getValue, 100)).toBe('value1');
          expect(runCount).toBe(1);

          await new Promise((resolve) => setTimeout(resolve, 200));

          expect(cache.getOrRun('temp', getValue, 100)).toBe('value2');
          expect(runCount).toBe(2);
        });

        it(should` return cached items when ignoreExpiry is false on expired items`, async () => {
          const cache = cachier.create();

          cache.save('expired', 'original', 100);

          expect(cache.getOrRun('expired', () => 'fallback', Infinity, false)).toBe('original');

          await new Promise((resolve) => setTimeout(resolve, 200));

          expect(cache.getOrRun('expired', () => 'fallback', Infinity, false)).toBe('fallback');
        });

        it(should` return expired items when ignoreExpiry is true`, async () => {
          const cache = cachier.create();

          cache.save('expired', 'original', 100);

          expect(cache.getOrRun('expired', () => 'fallback', Infinity, true)).toBe('original');

          await new Promise((resolve) => setTimeout(resolve, 200));

          expect(cache.getOrRun('expired', () => 'fallback', Infinity, true)).toBe('original');
        });

        it(should` not affect non-expired items when ignoreExpiry is used`, () => {
          const cache = cachier.create();

          cache.save('nonexpired', 'original');

          expect(cache.getOrRun('nonexpired', () => 'fallback', Infinity, false)).toBe('original');
          expect(cache.getOrRun('nonexpired', () => 'fallback', Infinity, true)).toBe('original');
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
          kitchenSink.samples.num.filter((v) => v !== 0)
        );
      }
    );
  });

  describe('getOrRunAsync', () => {
    multiTest(
      [
        [swissak.cachier, 'cachier'],
        [swissak.cachier.create(), 'cachier.create()']
      ],
      (cachier, name) => {
        it(should` exist as ${name + '.getOrRunAsync'}`, () => {
          expect(cachier.getOrRunAsync).toBeDefined();
        });

        it(should` return the item if it exists`, async () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });
          expect(await cache.getOrRunAsync('foo', async () => ({ name: 'BAR' }))).toEqual({ name: 'foo' });
        });

        it(should` run the function if the item does not exist`, async () => {
          const cache = cachier.create();
          expect(await cache.getOrRunAsync('foo', async () => ({ name: 'BAR' }))).toEqual({ name: 'BAR' });
          expect(cache.get('foo')).toEqual({ name: 'BAR' });
        });

        it(should` handle async functions correctly`, async () => {
          const cache = cachier.create();
          const asyncFn = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            return { name: 'ASYNC' };
          };

          expect(await cache.getOrRunAsync('foo', asyncFn)).toEqual({ name: 'ASYNC' });
          expect(cache.get('foo')).toEqual({ name: 'ASYNC' });
        });

        it(should` respect the expiresIn parameter`, async () => {
          const cache = cachier.create();
          let runCount = 0;

          const getValue = async () => {
            runCount++;
            return `value${runCount}`;
          };

          expect(await cache.getOrRunAsync('temp', getValue, 100)).toBe('value1');
          expect(runCount).toBe(1);

          expect(await cache.getOrRunAsync('temp', getValue, 100)).toBe('value1');
          expect(runCount).toBe(1);

          await new Promise((resolve) => setTimeout(resolve, 200));

          expect(await cache.getOrRunAsync('temp', getValue, 100)).toBe('value2');
          expect(runCount).toBe(2);
        });

        it(should` return cached items when ignoreExpiry is false on expired items`, async () => {
          const cache = cachier.create();

          cache.save('expired', 'original', 100);

          expect(await cache.getOrRunAsync('expired', async () => 'fallback', Infinity, false)).toBe('original');

          await new Promise((resolve) => setTimeout(resolve, 200));

          expect(await cache.getOrRunAsync('expired', async () => 'fallback', Infinity, false)).toBe('fallback');
        });

        it(should` return expired items when ignoreExpiry is true`, async () => {
          const cache = cachier.create();

          cache.save('expired', 'original', 100);

          expect(await cache.getOrRunAsync('expired', async () => 'fallback', Infinity, true)).toBe('original');

          await new Promise((resolve) => setTimeout(resolve, 200));

          expect(await cache.getOrRunAsync('expired', async () => 'fallback', Infinity, true)).toBe('original');
        });

        it(should` not affect non-expired items when ignoreExpiry is used`, async () => {
          const cache = cachier.create();

          cache.save('nonexpired', 'original');

          expect(await cache.getOrRunAsync('nonexpired', async () => 'fallback', Infinity, false)).toBe('original');
          expect(await cache.getOrRunAsync('nonexpired', async () => 'fallback', Infinity, true)).toBe('original');
        });

        kitchenSink.toEqual(
          'id',
          async (v: any) => {
            const cache = cachier.create();
            cache.save('NO-ID', { name: 'foo' });
            return await cache.getOrRunAsync(v, async () => ({ name: 'BAR' }));
          },
          kitchenSink.safe.str(undefined, false, 'NO-ID'),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'orFunc',
          async (v: any) => {
            const cache = cachier.create();
            cache.save('foo', { name: 'foo' });
            return await cache.getOrRunAsync('foo', v);
          },
          kitchenSink.safe.func(undefined),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'expiresIn',
          async (v: any) => {
            const cache = cachier.create();
            await cache.getOrRunAsync('foo', async () => 'value', v);
            return cache.get('foo');
          },
          kitchenSink.safe.num(undefined, true, undefined, undefined, Infinity),
          kitchenSink.samples.num.filter((v) => v !== 0)
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
          cache.save('temp', 'value', 100);
          expect(cache.get('temp')).toBe('value');
          await new Promise((resolve) => setTimeout(resolve, 200));
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
          kitchenSink.samples.num.filter((v) => v !== 0)
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

        it(should` exclude expired items by default`, async () => {
          const cache = cachier.create();

          cache.save('permanent', 'value1');
          cache.save('temp', 'value2', 100);

          expect(cache.getAll()).toEqual({ permanent: 'value1', temp: 'value2' });
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.getAll()).toEqual({ permanent: 'value1' });
        });

        it(should` exclude expired items when ignoreExpiry is false`, async () => {
          const cache = cachier.create();

          cache.save('permanent', 'value1');
          cache.save('temp', 'value2', 100);

          expect(cache.getAll(false)).toEqual({ permanent: 'value1', temp: 'value2' });
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.getAll(false)).toEqual({ permanent: 'value1' });
        });

        it(should` include expired items when ignoreExpiry is true`, async () => {
          const cache = cachier.create();

          cache.save('permanent', 'value1');
          cache.save('temp', 'value2', 100);

          expect(cache.getAll(true)).toEqual({ permanent: 'value1', temp: 'value2' });
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.getAll(true)).toEqual({ permanent: 'value1', temp: 'value2' });
        });

        it(should` not affect non-expired items when ignoreExpiry is used`, () => {
          const cache = cachier.create();

          cache.save('item1', 'value1');
          cache.save('item2', 'value2');

          expect(cache.getAll(false)).toEqual({ item1: 'value1', item2: 'value2' });
          expect(cache.getAll(true)).toEqual({ item1: 'value1', item2: 'value2' });
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
          cache.save('temp', 'value');
          expect(cache.get('temp')).toBe('value');
          await new Promise((resolve) => setTimeout(resolve, 200));
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

          cache.save('infinite', 'value');
          cache.setDefaultExpiresIn(100);
          cache.save('temporary', 'value');
          await new Promise((resolve) => setTimeout(resolve, 200));
          expect(cache.get('infinite')).toBe('value');
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
          kitchenSink.samples.num.filter((v) => v !== 0)
        );
      }
    );
  });
});
