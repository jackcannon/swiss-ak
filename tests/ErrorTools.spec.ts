import * as swissak from '../';
import { register, multiTest, kitchenSink, should } from './test-utils';

register({ describe, it, expect });

describe('ErrorTools', () => {
  describe('tryOr', () => {
    multiTest(
      [
        [swissak.tryOr, 'tryOr'],
        [swissak.ErrorTools.tryOr, 'ErrorTools.tryOr']
      ],
      (tryOr, name) => {
        it(should` exist as ${name}`, () => {
          expect(tryOr).toBeDefined();
        });

        it(should` deliver the original if no error is thrown`, async () => {
          const action = async () => {
            return 'foo';
          };
          const result = await tryOr('bar', action);
          expect(result).toBe('foo');
        });
        it(should` deliver the orValue if error is thrown`, async () => {
          const action = async () => {
            throw new Error('Some Error');
          };
          const result = await tryOr('bar', action);
          expect(result).toBe('bar');
        });

        it(should` handle func being a non-function`, async () => {
          const result = await tryOr('bar', 'foo' as any);
          expect(result).toBe('bar');
        });

        it(should` pass args to the function`, async () => {
          let args = undefined;
          const action = async (...newArgs) => {
            args = newArgs;
            return 'foo';
          };
          const result = await tryOr('bar', action, 'a', 'b', 'c');
          expect(result).toBe('foo');
          expect(args).toEqual(['a', 'b', 'c']);
        });
      }
    );
  });
  describe('retry', () => {
    multiTest(
      [
        [swissak.retry, 'retry'],
        [swissak.ErrorTools.retry, 'ErrorTools.retry']
      ],
      (retry, name) => {
        it(should` exist as ${name}`, () => {
          expect(retry).toBeDefined();
        });
        it(should` work first time`, async () => {
          const action = async () => {
            return 'foo';
          };
          const result = await retry(5, 0, true, action);
          expect(result).toBe('foo');
        });
        it(should` work on nth time`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            if (count === 4) {
              return 'foo';
            }
            throw new Error('An Error happened');
          };
          const result = await retry(5, 0, true, action);
          expect(result).toBe('foo');
          expect(count).toBe(4);
        });
        it(should` return undefined if no success`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error('An Error happened');
          };
          const result = await retry(5, 0, true, action);
          expect(result).toBe(undefined);
          expect(count).toBe(5);
        });
        it(should` throw error if suppress is false`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error('An Error happened');
          };
          let didSucceed = undefined;
          let result;
          try {
            result = await retry(5, 0, false, action);
            didSucceed = true;
          } catch (e) {
            didSucceed = false;
          }
          expect(result).toBe(undefined);
          expect(didSucceed).toBe(false);
          expect(count).toBe(5);
        });
        it(should` wait between attempts`, async () => {
          const start = Date.now();
          let count = 0;
          const action = async () => {
            count++;
            throw new Error('An Error happened');
          };
          const result = await retry(5, 10, true, action);

          const duration = Date.now() - start;
          expect(duration).toBeGreaterThanOrEqual(50);
          expect(result).toBe(undefined);
          expect(count).toBe(5);
        });

        // handles bad inputs
        // maxTries
        kitchenSink.toEqual(
          'maxTries',
          async (v) => {
            let count = 0;
            const action = async () => {
              count++;
              throw new Error(`Error ${count}`);
            };
            const result = await retry(v, 0, true, action);
            expect(result).toBe(undefined);
            return count;
          },
          kitchenSink.safe.num(10, true, 1, undefined, 10),
          kitchenSink.num
        );

        // delay
        kitchenSink.toEqual(
          'delay',
          async (v) => {
            const action = async () => {
              throw new Error(`Error`);
            };
            return retry(5, v, true, action);
          },
          kitchenSink.safe.num(0, true, 0),
          kitchenSink.num
        );
      }
    );
  });
  describe('retryOr', () => {
    multiTest(
      [
        [swissak.retryOr, 'retryOr'],
        [swissak.ErrorTools.retryOr, 'ErrorTools.retryOr']
      ],
      (retryOr, name) => {
        it(should` exist as ${name}`, () => {
          expect(retryOr).toBeDefined();
        });

        it(should` work first time`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            return 'foo';
          };
          const result = await retryOr<string>('bar', 5, 0, action);
          expect(result).toBe('foo');
          expect(count).toBe(1);
        });

        it(should` work on nth time`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            if (count === 4) {
              return 'foo';
            }
            throw new Error('An Error happened');
          };
          const result = await retryOr('bar', 5, 0, action);
          expect(result).toBe('foo');
          expect(count).toBe(4);
        });

        it(should` return orValue if no success`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error('An Error happened');
          };
          const result = await retryOr('bar', 5, 0, action);
          expect(result).toBe('bar');
          expect(count).toBe(5);
        });
        it(should` not throw error`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error('An Error happened');
          };
          let didSucceed = undefined;
          let result;
          try {
            result = await retryOr('bar', 5, 0, action);
            didSucceed = true;
          } catch (e) {
            didSucceed = false;
          }
          expect(result).toBe('bar');
          expect(didSucceed).toBe(true);
          expect(count).toBe(5);
        });
        it(should` wait between attempts`, async () => {
          const start = Date.now();
          let count = 0;
          const action = async () => {
            count++;
            throw new Error('An Error happened');
          };
          const result = await retryOr('bar', 5, 10, action);

          const duration = Date.now() - start;
          expect(duration).toBeGreaterThanOrEqual(50);
          expect(result).toBe('bar');
          expect(count).toBe(5);
        });

        kitchenSink.toBe(
          'maxTries',
          async (v) => {
            let count = 0;
            const action = async () => {
              count++;
              throw new Error('An Error happened');
            };
            const result = await retryOr('bar', v, 0, action);
            expect(result).toBe('bar');
            return count;
          },
          kitchenSink.safe.num(10, true, 1),
          kitchenSink.num
        );

        kitchenSink.toBe(
          'delay',
          async (v) => {
            let count = 0;
            const action = async () => {
              count++;
              throw new Error('An Error happened');
            };
            const result = await retryOr('bar', 5, v, action);

            expect(result).toBe('bar');
            return count;
          },
          kitchenSink.safe.num(0, true, 0),
          kitchenSink.num
        );
      }
    );
  });
});
