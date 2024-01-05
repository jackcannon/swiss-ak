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

        it(should` have seperate entries`, () => {
          const cache = cachier.create();
          cache.save('foo', { name: 'foo' });

          const cache2 = cache.create();
          cache2.save('foo', { name: 'BAR' });

          expect(cache.getAll()).toEqual({ foo: { name: 'foo' } });
          expect(cache2.getAll()).toEqual({ foo: { name: 'BAR' } });
        });
      }
    );
  });
});
