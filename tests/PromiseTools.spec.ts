import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink, testTimer } from './test-utils';

register({ describe, it, expect });

const timingUnit = 100; // milliseconds
const timingErrorRange = 30; // milliseconds

describe('PromiseTools', () => {
  describe('getDeferred', () => {
    multiTest(
      [
        [swissak.getDeferred, 'getDeferred'],
        [swissak.PromiseTools.getDeferred, 'PromiseTools.getDeferred']
      ],
      (getDeferred, name) => {
        it(should` exist as ${name}`, () => {
          expect(getDeferred).toBeDefined();
        });

        it('should return a deferred', () => {
          const deferred = getDeferred();
          expect(deferred.promise).toBeDefined();
          expect(deferred.promise).toBeInstanceOf(Promise);

          expect(deferred.resolve).toBeDefined();
          expect(typeof deferred.resolve).toBe('function');

          expect(deferred.reject).toBeDefined();
          expect(typeof deferred.reject).toBe('function');
        });

        it('should resolve the promise', async () => {
          const deferred = getDeferred();
          deferred.resolve('foo');
          expect(await deferred.promise).toBe('foo');
        });

        it('should reject the promise', async () => {
          const deferred = getDeferred();
          deferred.reject('foo');
          try {
            await deferred.promise;
            throw new Error('Promise should have rejected');
          } catch (err) {
            expect(err).toBe('foo');
          }
        });
      }
    );
  });
  describe('all', () => {
    multiTest(
      [
        [swissak.all, 'all'],
        [swissak.PromiseTools.all, 'PromiseTools.all']
      ],
      (all, name) => {
        it(should` exist as ${name}`, () => {
          expect(all).toBeDefined();
        });

        it('should resolve when all are resolved - with promises', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = [
              Promise.resolve(1),
              swissak.wait(timingUnit),
              Promise.resolve(3)
              //
            ];
            return await all(input);
          });

          expect(result).toEqual([1, undefined, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should resolve when all are resolved - with functions', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = [
              () => Promise.resolve(1),
              () => swissak.wait(timingUnit),
              () => Promise.resolve(3)
              //
            ];
            return await all(input);
          });

          expect(result).toEqual([1, undefined, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should resolve when all are resolved - with values', async () => {
          const { result, diff } = await testTimer(0, async (target) => {
            const input = [
              1,
              undefined,
              3
              //
            ];
            return await all(input);
          });

          expect(result).toEqual([1, undefined, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual('promises', async (v: any) => await all(v), kitchenSink.safe.arr(undefined, []), kitchenSink.general);
      }
    );
  });
  describe('allLimit', () => {
    multiTest(
      [
        [swissak.allLimit, 'allLimit'],
        [swissak.PromiseTools.allLimit, 'PromiseTools.allLimit']
      ],
      (allLimit, name) => {
        it(should` exist as ${name}`, () => {
          expect(allLimit).toBeDefined();
        });

        it('should resolve when all the promises are resolved - with promises', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = [
              Promise.resolve(1),
              swissak.wait(target).then(() => 2),
              Promise.resolve(3)
              //
            ];
            return await allLimit(2, input);
          });

          expect(result).toEqual([1, 2, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should resolve when all the promises are resolved - with functions', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = [
              () => Promise.resolve(1),
              () => swissak.wait(target).then(() => 2),
              () => Promise.resolve(3)
              //
            ];
            return await allLimit(2, input);
          });

          expect(result).toEqual([1, 2, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should resolve when all the promises are resolved - with values', async () => {
          const { result, diff } = await testTimer(0, async (target) => {
            const input = [1, 2, 3];
            return await allLimit(2, input);
          });

          expect(result).toEqual([1, 2, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        it('should limit to number of simultaneous promises - with promises', async () => {
          // Note: as they aren't functions, the promises 'start' at the same time, and so they'll finish at the same time, even if they're limited to 1
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = [
              swissak.wait(timingUnit).then(() => 1),
              swissak.wait(timingUnit).then(() => 2),
              swissak.wait(timingUnit).then(() => 3)
              //
            ];
            return await allLimit(1, input);
          });

          expect(result).toEqual([1, 2, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should limit to number of simultaneous promises - with functions', async () => {
          const { result, diff } = await testTimer(timingUnit * 3, async (target) => {
            const input = [
              () => swissak.wait(timingUnit).then(() => 1),
              () => swissak.wait(timingUnit).then(() => 2),
              () => swissak.wait(timingUnit).then(() => 3)
              //
            ];
            return await allLimit(1, input);
          });

          expect(result).toEqual([1, 2, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should limit to number of simultaneous promises - with values', async () => {
          const { result, diff } = await testTimer(0, async (target) => {
            const input = [1, 2, 3];
            return await allLimit(1, input);
          });

          expect(result).toEqual([1, 2, 3]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        it(should` resolve even when one of the promises rejects (with noThrow)`, async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = [
              () => Promise.resolve(1),
              () => swissak.wait(target).then(() => 2),
              () => Promise.reject(3)
              //
            ];
            return await allLimit(2, input, true);
          });

          expect(result).toEqual([1, 2]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it(should` error when one of the promises rejects (with noThrow false)`, async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            try {
              const input = [
                () => Promise.resolve(1),
                () => swissak.wait(target).then(() => 2),
                () => Promise.reject(3)
                //
              ];
              return await allLimit(2, input, false);
            } catch (err) {
              return 'ERROR';
            }
          });

          expect(result).toEqual('ERROR');
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'limit',
          async (v: any) => await allLimit(v, [() => Promise.resolve(1)]),
          kitchenSink.safe.num(undefined, true, 1, undefined, 1),
          kitchenSink.general
        );
        kitchenSink.toEqual(
          'items',
          async (v: any) => await allLimit(1, v),
          (v: any) =>
            kitchenSink.safe
              .arr(undefined)(v)
              .map((item) => kitchenSink.safe.func(undefined, async () => item)(item as any)),
          kitchenSink.general
        );
        kitchenSink.toEqual(
          'noThrow',
          async (v: any) => await allLimit(1, [() => Promise.resolve(1)], v),
          kitchenSink.safe.bool(false, false),
          kitchenSink.general
        );
      }
    );
  });
  describe('each', () => {
    multiTest(
      [
        [swissak.each, 'each'],
        [swissak.PromiseTools.each, 'PromiseTools.each']
      ],
      (each, name) => {
        it(should` exist as ${name}`, () => {
          expect(each).toBeDefined();
        });

        it('should resolve when all the promises are resolved', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = [1, 2, 3];
            return await each(input, (item) => swissak.wait(target).then(() => item * 2));
          });

          expect(result).toEqual(undefined);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'items',
          async (v: any) => await each(v, (item) => Promise.resolve(item)),
          kitchenSink.safe.arr(undefined, []),
          kitchenSink.general
        );
        kitchenSink.toEqual(
          'func',
          async (v: any) => await each([1, 2, 3], v),
          kitchenSink.safe.func(undefined, () => Promise.resolve()),
          kitchenSink.general
        );
      }
    );
  });
  describe('eachLimit', () => {
    multiTest(
      [
        [swissak.eachLimit, 'eachLimit'],
        [swissak.PromiseTools.eachLimit, 'PromiseTools.eachLimit']
      ],
      (eachLimit, name) => {
        it(should` exist as ${name}`, () => {
          expect(eachLimit).toBeDefined();
        });

        it('should should limit to number of simultaneous promises', async () => {
          const { result, diff } = await testTimer(timingUnit * 3, async (target) => {
            const input = [1, 2, 3];
            return await eachLimit(1, input, (item) => swissak.wait(timingUnit).then(() => item * 2));
          });

          expect(result).toEqual(undefined);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'limit',
          async (v: any) => await eachLimit(v, [1, 2, 3], (item) => Promise.resolve(item)),
          kitchenSink.safe.num(undefined, true, 1, undefined, 1),
          kitchenSink.num
        );
        kitchenSink.toEqual(
          'items',
          async (v: any) => await eachLimit(2, v, (item) => Promise.resolve(item)),
          kitchenSink.safe.arr(undefined, []),
          kitchenSink.general
        );
        kitchenSink.toEqual(
          'func',
          async (v: any) => await eachLimit(2, [1, 2, 3], v),
          kitchenSink.safe.func(undefined, () => Promise.resolve()),
          kitchenSink.general
        );
      }
    );
  });
  describe('map', () => {
    multiTest(
      [
        [swissak.map, 'map'],
        [swissak.PromiseTools.map, 'PromiseTools.map']
      ],
      (map, name) => {
        it(should` exist as ${name}`, () => {
          expect(map).toBeDefined();
        });

        it('should resolve when all the promises are resolved', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = [1, 2, 3];
            return await map(input, (item) => swissak.wait(timingUnit).then(() => item * 2));
          });

          expect(result).toEqual([2, 4, 6]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'items',
          async (v: any) => await map(v, (item) => Promise.resolve(item)),
          kitchenSink.safe.arr(undefined, []),
          kitchenSink.general
        );
        kitchenSink.toEqual(
          'func',
          async (v: any) => await map([1, 2, 3], v),
          kitchenSink.safe.func(undefined, (v) => Promise.resolve(v)),
          kitchenSink.general
        );
      }
    );
  });
  describe('mapLimit', () => {
    multiTest(
      [
        [swissak.mapLimit, 'mapLimit'],
        [swissak.PromiseTools.mapLimit, 'PromiseTools.mapLimit']
      ],
      (mapLimit, name) => {
        it(should` exist as ${name}`, () => {
          expect(mapLimit).toBeDefined();
        });

        it('should limit to number of simultaneous promises', async () => {
          const { result, diff } = await testTimer(timingUnit * 3, async (target) => {
            const input = [1, 2, 3];
            return await mapLimit(1, input, (item) => swissak.wait(timingUnit).then(() => item * 2));
          });

          expect(result).toEqual([2, 4, 6]);
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'limit',
          async (v: any) => await mapLimit(v, [1, 2, 3], (item) => Promise.resolve(item)),
          kitchenSink.safe.num(undefined, true, 1, undefined, 1),
          kitchenSink.num
        );
        kitchenSink.toEqual(
          'items',
          async (v: any) => await mapLimit(2, v, (item) => Promise.resolve(item)),
          kitchenSink.safe.arr(undefined, []),
          kitchenSink.general
        );
        kitchenSink.toEqual(
          'func',
          async (v: any) => await mapLimit(2, [1, 2, 3], v),
          kitchenSink.safe.func(undefined, (v) => Promise.resolve(v)),
          kitchenSink.general
        );
      }
    );
  });
  describe('allObj', () => {
    multiTest(
      [
        [swissak.allObj, 'allObj'],
        [swissak.PromiseTools.allObj as any, 'PromiseTools.allObj']
      ],
      (allObj: typeof swissak.allObj, name) => {
        it(should` exist as ${name}`, () => {
          expect(allObj).toBeDefined();
        });

        it('should resolve when all the promises are resolved - with promises', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = {
              foo: Promise.resolve(1),
              bar: swissak.wait(timingUnit).then(() => 2),
              baz: Promise.resolve(3)
              //
            };
            return await allObj(input);
          });

          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should resolve when all the promises are resolved - with functions', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = {
              foo: () => Promise.resolve(1),
              bar: () => swissak.wait(timingUnit).then(() => 2),
              baz: () => Promise.resolve(3)
              //
            };
            return await allObj(input);
          });

          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should resolve when all the promises are resolved - with values', async () => {
          const { result, diff } = await testTimer(0, async (target) => {
            const input = {
              foo: () => 1,
              bar: () => 2,
              baz: () => 3
              //
            };
            return await allObj(input);
          });

          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual('input', async (v: any) => await allObj(v), kitchenSink.safe.obj(undefined, false, {}), kitchenSink.general);
      }
    );
  });
  describe('allLimitObj', () => {
    multiTest(
      [
        [swissak.allLimitObj, 'allLimitObj'],
        [swissak.PromiseTools.allLimitObj as any, 'PromiseTools.allLimitObj']
      ],
      (allLimitObj: typeof swissak.allLimitObj, name) => {
        it(should` exist as ${name}`, () => {
          expect(allLimitObj).toBeDefined();
        });

        it('should resolve when all the promises are resolved - with promises', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = {
              foo: Promise.resolve(1),
              bar: swissak.wait(timingUnit).then(() => 2),
              baz: Promise.resolve(3)
              //
            };
            return await allLimitObj(1, input);
          });
          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should resolve when all the promises are resolved - with functions', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = {
              foo: () => Promise.resolve(1),
              bar: () => swissak.wait(timingUnit).then(() => 2),
              baz: () => Promise.resolve(3)
              //
            };
            return await allLimitObj(1, input);
          });
          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should resolve when all the promises are resolved - with values', async () => {
          const { result, diff } = await testTimer(0, async (target) => {
            const input = { foo: 1, bar: 2, baz: 3 };
            return await allLimitObj(1, input);
          });
          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        it('should limit to number of simultaneous promises - with promises', async () => {
          // Note: as they aren't functions, the promises 'start' at the same time, and so they'll finish at the same time, even if they're limited to 1
          const { result, diff, duration } = await testTimer(timingUnit, async (target) => {
            const input = {
              foo: swissak.wait(timingUnit).then(() => 1),
              bar: swissak.wait(timingUnit).then(() => 2),
              baz: swissak.wait(timingUnit).then(() => 3)
              //
            };
            return await allLimitObj(1, input);
          });

          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should limit to number of simultaneous promises - with functions', async () => {
          const { result, diff } = await testTimer(timingUnit * 3, async (target) => {
            const input = {
              foo: () => swissak.wait(timingUnit).then(() => 1),
              bar: () => swissak.wait(timingUnit).then(() => 2),
              baz: () => swissak.wait(timingUnit).then(() => 3)
              //
            };
            return await allLimitObj(1, input);
          });

          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('should limit to number of simultaneous promises - with values', async () => {
          const { result, diff } = await testTimer(0, async (target) => {
            const input = { foo: 1, bar: 2, baz: 3 };
            return await allLimitObj(1, input);
          });

          expect(result).toEqual({ foo: 1, bar: 2, baz: 3 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        it('handle one of the promises rejecting (when noThrow is true) - with promises', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = {
              foo: Promise.resolve(1),
              bar: swissak.wait(target).then(() => 2),
              baz: Promise.reject(3)
              //
            };
            return await allLimitObj(2, input, true);
          });

          expect(result).toEqual({ foo: 1, bar: 2 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('handle one of the promises rejecting (when noThrow is true) - with functions', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            const input = {
              foo: () => Promise.resolve(1),
              bar: () => swissak.wait(target).then(() => 2),
              baz: () => Promise.reject(3)
              //
            };
            return await allLimitObj(2, input, true);
          });

          expect(result).toEqual({ foo: 1, bar: 2 });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        it('error when one of the promises is rejecting (when noThrow is false) - with promises', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            try {
              const input = {
                foo: Promise.resolve(1),
                bar: swissak.wait(target).then(() => 2),
                baz: Promise.reject(3)
                //
              };
              const result = await allLimitObj(2, input, false);
              return result;
            } catch (err) {
              return 'ERROR';
            }
          });

          expect(result).toEqual('ERROR');
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });
        it('error when one of the promises is rejecting (when noThrow is false) - with functions', async () => {
          const { result, diff } = await testTimer(timingUnit, async (target) => {
            try {
              const input = {
                foo: () => Promise.resolve(1),
                bar: () => swissak.wait(target).then(() => 2),
                baz: () => Promise.reject(3)
                //
              };
              const result = await allLimitObj(2, input, false);
              return result;
            } catch (err) {
              return 'ERROR';
            }
          });

          expect(result).toEqual('ERROR');
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'limit',
          async (v: any) => await allLimitObj(v, {}),
          kitchenSink.safe.num(undefined, true, 1, undefined, 1),
          kitchenSink.num
        );
        kitchenSink.toEqual('input', async (v: any) => await allLimitObj(1, v), kitchenSink.safe.obj(undefined, false, {}), kitchenSink.general);
        kitchenSink.toEqual('noThrow', async (v: any) => await allLimitObj(1, {}, v), kitchenSink.safe.bool(false, false), kitchenSink.general);
      }
    );
  });
});
