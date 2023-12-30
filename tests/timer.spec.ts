import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink, testTimer } from './test-utils';

register({ describe, it, expect });

const timingUnit = 100; // milliseconds
const timingErrorRange = 30; // milliseconds
const timingErrorRangeSmall = 20; // milliseconds

describe('timer', () => {
  describe('timer', () => {
    singleTest(swissak.timer, 'timer', (timer, name) => {
      it(should` exist as ${name}`, () => {
        expect(timer).toBeDefined();
      });

      it('should have the correct methods', () => {
        expect(timer.start).toBeDefined();
        expect(typeof timer.start).toBe('function');

        expect(timer.end).toBeDefined();
        expect(typeof timer.end).toBe('function');

        expect(timer.switch).toBeDefined();
        expect(typeof timer.switch).toBe('function');

        expect(timer.log).toBeDefined();
        expect(typeof timer.log).toBe('function');

        expect(timer.reset).toBeDefined();
        expect(typeof timer.reset).toBe('function');
      });
    });
  });
  describe('getTimer', () => {
    singleTest(swissak.getTimer, 'getTimer', (getTimer, name) => {
      it(should` exist as ${name}`, () => {
        expect(getTimer).toBeDefined();
      });

      it('should have the correct methods', () => {
        const timer = getTimer();

        expect(timer.start).toBeDefined();
        expect(typeof timer.start).toBe('function');

        expect(timer.end).toBeDefined();
        expect(typeof timer.end).toBe('function');

        expect(timer.switch).toBeDefined();
        expect(typeof timer.switch).toBe('function');

        expect(timer.log).toBeDefined();
        expect(typeof timer.log).toBe('function');

        expect(timer.reset).toBeDefined();
        expect(typeof timer.reset).toBe('function');
      });

      kitchenSink.toEqual('name', (v) => getTimer(v as any).names, kitchenSink.safe.str(undefined), kitchenSink.general);
      kitchenSink.toEqual('verbose', (v) => getTimer(undefined, v as any).names, kitchenSink.safe.bool(false), kitchenSink.general);
      kitchenSink.toEqual(
        'wrapperFn',
        (v) => getTimer(undefined, undefined, v as any).names,
        kitchenSink.safe.func(undefined, (x) => x),
        kitchenSink.general
      );
      kitchenSink.toEqual(
        'chalk',
        (v) => getTimer(undefined, undefined, undefined, v as any).names,
        kitchenSink.safe.objWith(
          undefined,
          {
            bold: {
              fallback: (x) => x,
              safeFn: (v, f) => kitchenSink.safe.func(undefined, f)(v)
            },
            dim: {
              fallback: (x) => x,
              safeFn: (v, f) => kitchenSink.safe.func(undefined, f)(v)
            }
          },
          false
        ),
        kitchenSink.general
      );
      kitchenSink.toEqual(
        'displayNames',
        (v) => getTimer(undefined, undefined, undefined, undefined, v as any).names,
        kitchenSink.safe.obj(undefined, false, {} as any),
        kitchenSink.general
      );
    });

    describe('start', () => {
      multiTest(
        [
          [swissak.timer, 'timer'],
          [swissak.getTimer(), 'getTimer']
        ],
        (timer, name) => {
          it(should` exist as ${name + '.start'}`, () => {
            expect(timer.start).toBeDefined();
            expect(typeof timer.start).toBe('function');
          });

          it('should start a timer', async () => {
            const id = name + '-start-test1';
            const { duration, diff } = await testTimer(timingUnit, async (target) => {
              timer.start(id);
              await swissak.waitFor(target);
              timer.end(id);
            });

            const result = timer.getDuration(id);
            expect(diff).toBeLessThanOrEqual(timingErrorRange);
            expect(Math.abs(result - duration)).toBeLessThanOrEqual(timingErrorRangeSmall);
            expect(result).toBeGreaterThanOrEqual(timingUnit - 2);
          });

          it('should start multiple timers', async () => {
            const id = (suffix) => name + '-start-test2' + suffix;
            const { diff } = await testTimer(timingUnit * 2, async (target) => {
              timer.start(id('a'));
              await swissak.waitFor(timingUnit);
              timer.start(id('b'));
              await swissak.waitFor(timingUnit);
              timer.end(id('a'), id('b'));
            });

            expect(diff).toBeLessThanOrEqual(timingErrorRange);

            const resultA = timer.getDuration(id('a'));
            const targetA = timingUnit * 2;
            expect(resultA).toBeGreaterThanOrEqual(targetA - 2);
            expect(Math.abs(resultA - targetA)).toBeLessThanOrEqual(timingErrorRangeSmall);

            const resultB = timer.getDuration(id('b'));
            const targetB = timingUnit;
            expect(resultB).toBeGreaterThanOrEqual(targetB - 2);
            expect(Math.abs(resultB - targetB)).toBeLessThanOrEqual(timingErrorRangeSmall);
          });

          kitchenSink.toEqual(
            'labels - 0',
            (v) => {
              timer.start(v as any);
              return timer.names;
            },
            kitchenSink.safe.str(undefined),
            kitchenSink.general
          );
          kitchenSink.toEqual(
            'labels - 1',
            (v) => {
              timer.start('example', v as any);
              return timer.names;
            },
            kitchenSink.safe.str(undefined),
            kitchenSink.general
          );
        }
      );
    });
    describe('end', () => {
      multiTest(
        [
          [swissak.timer, 'timer'],
          [swissak.getTimer(), 'getTimer']
        ],
        (timer, name) => {
          it(should` exist as ${name + '.end'}`, () => {
            expect(timer.end).toBeDefined();
            expect(typeof timer.end).toBe('function');
          });

          it('should end a timer', async () => {
            const id = name + '-end-test1';
            const { duration, diff } = await testTimer(timingUnit, async (target) => {
              timer.start(id);
              await swissak.waitFor(target);
              timer.end(id);
            });

            const result = timer.getDuration(id);
            expect(diff).toBeLessThanOrEqual(timingErrorRange);
            expect(Math.abs(result - duration)).toBeLessThanOrEqual(timingErrorRangeSmall);
            expect(result).toBeGreaterThanOrEqual(timingUnit - 2);
          });

          it('should end multiple timers', async () => {
            const id = (suffix) => name + '-end-test2' + suffix;
            const { diff } = await testTimer(timingUnit * 2, async (target) => {
              timer.start(id('a'));
              await swissak.waitFor(timingUnit);
              timer.start(id('b'));
              await swissak.waitFor(timingUnit);
              timer.end(id('a'), id('b'));
            });

            expect(diff).toBeLessThanOrEqual(timingErrorRange);

            const resultA = timer.getDuration(id('a'));
            const targetA = timingUnit * 2;
            expect(resultA).toBeGreaterThanOrEqual(targetA - 2);
            expect(Math.abs(resultA - targetA)).toBeLessThanOrEqual(timingErrorRangeSmall);

            const resultB = timer.getDuration(id('b'));
            const targetB = timingUnit;
            expect(resultB).toBeGreaterThanOrEqual(targetB - 2);
            expect(Math.abs(resultB - targetB)).toBeLessThanOrEqual(timingErrorRangeSmall);
          });

          kitchenSink.toEqual(
            'labels - 0',
            (v) => {
              timer.end(v as any);
              return timer.names;
            },
            kitchenSink.safe.str(undefined),
            kitchenSink.general
          );
          kitchenSink.toEqual(
            'labels - 1',
            (v) => {
              timer.end('example', v as any);
              return timer.names;
            },
            kitchenSink.safe.str(undefined),
            kitchenSink.general
          );
        }
      );
    });
    describe('switch', () => {
      multiTest(
        [
          [swissak.timer, 'timer'],
          [swissak.getTimer(), 'getTimer']
        ],
        (timer, name) => {
          it(should` exist as ${name + '.switch'}`, () => {
            expect(timer.switch).toBeDefined();
            expect(typeof timer.switch).toBe('function');
          });

          it('should switch between 2 timers', async () => {
            const id = (suffix) => name + '-switch-test1' + suffix;
            const { diff } = await testTimer(timingUnit * 2, async (target) => {
              timer.start(id('a'));
              await swissak.waitFor(timingUnit);
              timer.switch(id('a'), id('b'));
              await swissak.waitFor(timingUnit);
              timer.end(id('b'));
            });

            expect(diff).toBeLessThanOrEqual(timingErrorRange);

            const resultA = timer.getDuration(id('a'));
            const targetA = timingUnit;
            expect(resultA).toBeGreaterThanOrEqual(targetA - 2);
            expect(Math.abs(resultA - targetA)).toBeLessThanOrEqual(timingErrorRangeSmall);

            const resultB = timer.getDuration(id('b'));
            const targetB = timingUnit;
            expect(resultB).toBeGreaterThanOrEqual(targetB - 2);
            expect(Math.abs(resultB - targetB)).toBeLessThanOrEqual(timingErrorRangeSmall);
          });

          it('should switch between 2 timers - using arrays', async () => {
            const id = (suffix) => name + '-switch-test2' + suffix;
            const { diff } = await testTimer(timingUnit * 2, async (target) => {
              timer.start(id('a'));
              await swissak.waitFor(timingUnit);
              timer.switch([id('a')], [id('b')]);
              await swissak.waitFor(timingUnit);
              timer.end(id('b'));
            });

            expect(diff).toBeLessThanOrEqual(timingErrorRange);

            const resultA = timer.getDuration(id('a'));
            const targetA = timingUnit;
            expect(resultA).toBeGreaterThanOrEqual(targetA - 2);
            expect(Math.abs(resultA - targetA)).toBeLessThanOrEqual(timingErrorRangeSmall);

            const resultB = timer.getDuration(id('b'));
            const targetB = timingUnit;
            expect(resultB).toBeGreaterThanOrEqual(targetB - 2);
            expect(Math.abs(resultB - targetB)).toBeLessThanOrEqual(timingErrorRangeSmall);
          });

          kitchenSink.toEqual(
            'endLabel',
            (v) => {
              timer.switch(v as any, 'example');
              return timer.names;
            },
            kitchenSink.safe.str(undefined),
            kitchenSink.general
          );
          kitchenSink.toEqual(
            'startLabel',
            (v) => {
              timer.switch('example', v as any);
              return timer.names;
            },
            kitchenSink.safe.str(undefined),
            kitchenSink.general
          );
        }
      );
    });
    describe('getTable', () => {
      multiTest(
        [
          [swissak.timer, 'timer'],
          [swissak.getTimer(), 'getTimer']
        ],
        (timer, name) => {
          it(should` exist as ${name + '.getTable'}`, () => {
            expect(timer.getTable).toBeDefined();
            expect(typeof timer.getTable).toBe('function');
          });

          it('should return a table', async () => {
            timer.reset();
            const result = timer.getTable();

            const normalised = result.substring(0, 6);

            expect(JSON.stringify(normalised)).toEqual('"\\nTimes"');
          });

          it('should contain the timer info', async () => {
            const id = name + '-getTable-test2';
            const {} = await testTimer(timingUnit, async (target) => {
              timer.start(id);
              await swissak.waitFor(target);
              timer.end(id);
            });

            const result = timer.getTable();
            const lines = result.split('\n');

            expect(lines.filter((l) => l.includes(`\t${id}:`)).length).toEqual(1);
          });

          it('should contain the info for multiple timers', async () => {
            const id = (suffix) => name + '-getTable-test3' + suffix;
            const {} = await testTimer(timingUnit * 2, async (target) => {
              timer.start(id('a'));
              await swissak.waitFor(timingUnit);
              timer.start(id('b'));
              await swissak.waitFor(timingUnit);
              timer.end(id('a'), id('b'));
            });

            const result = timer.getTable();
            const lines = result.split('\n');

            expect(lines.filter((l) => l.includes(`\t${id('a')}:`)).length).toEqual(1);
            expect(lines.filter((l) => l.includes(`\t${id('b')}:`)).length).toEqual(1);
          });

          kitchenSink.toEqual(
            'prefix',
            (v) => {
              timer.reset();
              return timer.getTable(v as any).substring(0, 10);
            },
            kitchenSink.safe.str(undefined),
            kitchenSink.general
          );
          // skip customEntries
        }
      );
    });
    describe('log', () => {
      multiTest(
        [
          [swissak.timer, 'timer'],
          [swissak.getTimer(), 'getTimer']
        ],
        (timer, name) => {
          it(should` exist as ${name + '.log'}`, () => {
            expect(timer.log).toBeDefined();
            expect(typeof timer.log).toBe('function');
          });

          // skip tests as they are covered by getTable
        }
      );
    });
    describe('reset', () => {
      multiTest(
        [
          [swissak.timer, 'timer'],
          [swissak.getTimer(), 'getTimer']
        ],
        (timer, name) => {
          it(should` exist as ${name + '.reset'}`, () => {
            expect(timer.reset).toBeDefined();
            expect(typeof timer.reset).toBe('function');
          });

          it('should reset after timer', async () => {
            const id = name + '-reset-test1';
            timer.reset();
            const {} = await testTimer(timingUnit, async (target) => {
              timer.start(id);
              await swissak.waitFor(target);
              timer.end(id);
            });

            expect(Object.keys(timer.startTimes).length).toBeGreaterThanOrEqual(2);
            timer.reset();
            expect(Object.keys(timer.startTimes).length).toEqual(1); // only the total timer should remain
          });
        }
      );
    });
    describe('getDuration', () => {
      multiTest(
        [
          [swissak.timer, 'timer'],
          [swissak.getTimer(), 'getTimer']
        ],
        (timer, name) => {
          it(should` exist as ${name + '.getDuration'}`, () => {
            expect(timer.getDuration).toBeDefined();
            expect(typeof timer.getDuration).toBe('function');
          });

          it('should get the duration of a timer', async () => {
            const id = name + '-getDuration-test1';
            const { duration, diff } = await testTimer(timingUnit, async (target) => {
              timer.start(id);
              await swissak.waitFor(target);
              timer.end(id);
            });

            const result = timer.getDuration(id);
            expect(diff).toBeLessThanOrEqual(timingErrorRange);
            expect(Math.abs(result - duration)).toBeLessThanOrEqual(timingErrorRangeSmall);
            expect(result).toBeGreaterThanOrEqual(timingUnit - 2);
          });

          it('should get the duration of multiple timers', async () => {
            const id = (suffix) => name + '-getDuration-test2' + suffix;
            const { diff } = await testTimer(timingUnit * 2, async (target) => {
              timer.start(id('a'));
              await swissak.waitFor(timingUnit);
              timer.start(id('b'));
              await swissak.waitFor(timingUnit);
              timer.end(id('a'), id('b'));
            });

            expect(diff).toBeLessThanOrEqual(timingErrorRange);

            const resultA = timer.getDuration(id('a'));
            const targetA = timingUnit * 2;
            expect(resultA).toBeGreaterThanOrEqual(targetA - 2);
            expect(Math.abs(resultA - targetA)).toBeLessThanOrEqual(timingErrorRangeSmall);

            const resultB = timer.getDuration(id('b'));
            const targetB = timingUnit;
            expect(resultB).toBeGreaterThanOrEqual(targetB - 2);
            expect(Math.abs(resultB - targetB)).toBeLessThanOrEqual(timingErrorRangeSmall);
          });
        }
      );
    });
  });
});
