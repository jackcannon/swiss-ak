import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink, testTimer } from './test-utils';

register({ describe, it, expect });

const timingUnit = 100; // milliseconds
const timingErrorRange = 50; // milliseconds

describe('waiters', () => {
  describe('wait', () => {
    multiTest(
      [
        [swissak.wait, 'wait'],
        [swissak.waiters.wait, 'waiters.wait']
      ],
      (wait, name) => {
        it(should` exist as ${name}`, () => {
          expect(wait).toBeDefined();
        });

        it(should` wait the given time`, async () => {
          const { diff } = await testTimer(timingUnit, async (target) => {
            await wait(target);
          });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual('time', (v) => wait(v as any).then(() => 123), kitchenSink.safe.num(undefined, true, 0), kitchenSink.samples.num);
      }
    );
  });
  describe('waitUntil', () => {
    multiTest(
      [
        [swissak.waitUntil, 'waitUntil'],
        [swissak.waiters.waitUntil, 'waiters.waitUntil']
      ],
      (waitUntil, name) => {
        it(should` exist as ${name}`, () => {
          expect(waitUntil).toBeDefined();
        });

        it(should` wait until the given time`, async () => {
          const { diff } = await testTimer(timingUnit, async (target) => {
            await waitUntil(Date.now() + target);
          });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual('time', (v) => waitUntil(v as any).then(() => 123), kitchenSink.safe.num(undefined, true, 0), kitchenSink.samples.num);
      }
    );
  });
  describe('waitFor', () => {
    multiTest(
      [
        [swissak.waitFor, 'waitFor'],
        [swissak.waiters.waitFor, 'waiters.waitFor']
      ],
      (waitFor, name) => {
        it(should` exist as ${name}`, () => {
          expect(waitFor).toBeDefined();
        });

        it(should` wait the given time`, async () => {
          const { diff } = await testTimer(timingUnit, async (target) => {
            await waitFor(target);
          });
          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual('time', (v) => waitFor(v as any).then(() => 123), kitchenSink.safe.num(undefined, true, 0), kitchenSink.samples.num);
      }
    );
  });
  describe('waitEvery', () => {
    multiTest(
      [
        [swissak.waitEvery, 'waitEvery'],
        [swissak.waiters.waitEvery, 'waiters.waitEvery']
      ],
      (waitEvery, name) => {
        it(should` exist as ${name}`, () => {
          expect(waitEvery).toBeDefined();
        });

        it(should` wait the given time`, async () => {
          const timingLength = timingUnit * 4;

          // Due to the nature of the way the tests are run, it can be unreliable when too near the end of the timing cycle, so we delay a little if that's the case
          const proposedIdealDuration = timingLength - (Date.now() % timingLength);
          if (proposedIdealDuration < 15) {
            await swissak.wait(proposedIdealDuration + 10);
          }

          const { start, duration } = await testTimer(timingLength, async (target) => {
            await waitEvery(target);
          });
          const idealDuration = timingLength - (start % timingLength);

          expect(Math.abs(idealDuration - duration)).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual('time', (v) => waitEvery(v as any).then(() => 123), kitchenSink.safe.num(undefined, true, 0), kitchenSink.samples.num);
        kitchenSink.toEqual(
          'offset',
          (v) => waitEvery(10, v as any).then(() => 123),
          kitchenSink.safe.num(undefined, true, 0),
          kitchenSink.samples.num
        );
      }
    );
  });
  describe('interval', () => {
    multiTest(
      [
        [swissak, 'interval'],
        [swissak.waiters, 'waiters.interval']
      ],
      (origin, name) => {
        const interval = origin.interval;
        const stopInterval = origin.stopInterval;

        it(should` exist as ${name}`, () => {
          expect(interval).toBeDefined();
        });

        it(should` wait the given time`, async () => {
          const timingLength = timingUnit * 3;
          const { diff, duration, result } = await testTimer(
            timingLength,
            (target) =>
              new Promise<void>((resolve) => {
                const intID = interval((id, count) => {
                  if (count === 3) {
                    stopInterval(intID);
                    resolve();
                  }
                }, timingUnit);
              })
          );

          expect(diff).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'action',
          async (v) => {
            try {
              const intID = interval(v as any, 1);
              await swissak.wait(5);
              stopInterval(intID);
              return true;
            } catch (err) {
              return err;
            }
          },
          kitchenSink.safe.func(undefined),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'timing',
          async (v) => {
            try {
              const intID = interval(() => {}, v);
              await swissak.wait(5);
              stopInterval(intID);
              return true;
            } catch (err) {
              return err;
            }
          },
          kitchenSink.safe.num(undefined, true, 1, undefined, 1),
          kitchenSink.samples.num
        );
      }
    );
  });
  describe('stopInterval', () => {
    multiTest(
      [
        [swissak.stopInterval, 'stopInterval'],
        [swissak.waiters.stopInterval, 'waiters.stopInterval']
      ],
      (stopInterval, name) => {
        it(should` exist as ${name}`, () => {
          expect(stopInterval).toBeDefined();
        });

        kitchenSink.toEqual('intID', (v) => stopInterval(v as any), kitchenSink.safe.num(undefined, true, 0), kitchenSink.samples.num);
      }
    );
  });
});
