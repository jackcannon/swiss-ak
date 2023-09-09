import * as swissak from '../';
import { register, multiTest } from './test-utils';

register({ describe, it });

describe('ErrorTools', () => {
  describe('tryOr', () => {
    multiTest(
      [
        [swissak.tryOr, 'tryOr'],
        [swissak.ErrorTools.tryOr, 'ErrorTools.tryOr']
      ],
      (tryOr, name) => {
        it(`exists as '${name}'`, () => {
          expect(tryOr).toBeDefined();
        });

        it(`delivers the original if no error is thrown`, async () => {
          const action = async () => {
            return 'foo';
          };
          const result = await tryOr('bar', action);
          expect(result).toBe('foo');
        });
        it(`delivers the orValue if error is thrown`, async () => {
          const action = async () => {
            throw new Error('Some Error');
          };
          const result = await tryOr('bar', action);
          expect(result).toBe('bar');
        });

        it(`handles func being a non-function`, async () => {
          const result = await tryOr('bar', 'foo' as any);
          expect(result).toBe('bar');
        });

        // TODO passing args
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
        it(`exists as '${name}'`, () => {
          expect(retry).toBeDefined();
        });
        it(`works first time`, async () => {
          const action = async () => {
            return 'foo';
          };
          const result = await retry(5, 0, true, action);
          expect(result).toBe('foo');
        });
        it(`works on nth time`, async () => {
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
        it(`returns undefined if no success`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error('An Error happened');
          };
          const result = await retry(5, 0, true, action);
          expect(result).toBe(undefined);
          expect(count).toBe(5);
        });
        it(`throws error if suppress is false`, async () => {
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
        it(`waits between attempts`, async () => {
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
        it(`handles maxTries being zero`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error(`Error ${count}`);
          };
          const result = await retry(0, 0, true, action);
          expect(result).toBe(undefined);
          expect(count).toBe(1);
        });
        it(`handles maxTries being a decimal`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error(`Error ${count}`);
          };
          const result = await retry(3.5, 0, true, action);
          expect(result).toBe(undefined);
          expect(count).toBe(3);
        });
        it(`handles maxTries being negative`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error(`Error ${count}`);
          };
          const result = await retry(-1, 0, true, action);
          expect(result).toBe(undefined);
          expect(count).toBe(1);
        });
        it(`handles maxTries being NaN`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error(`Error ${count}`);
          };
          const result = await retry(NaN, 0, true, action);
          expect(result).toBe(undefined);
          expect(count).toBe(10);
        });
        it(`handles maxTries being undefined`, async () => {
          let count = 0;
          const action = async () => {
            count++;
            throw new Error(`Error ${count}`);
          };
          const result = await retry(undefined, 0, true, action);
          expect(result).toBe(undefined);
          expect(count).toBe(10);
        });

        // delay
        it(`handles delay being zero`, async () => {
          const start = Date.now();
          let count = 0;
          const action = async () => {
            throw new Error(`Error ${++count}`);
          };
          const result = await retry(5, 0, true, action);
          const duration = Date.now() - start;
          expect(duration).toBeLessThan(10);
          expect(result).toBe(undefined);
          expect(count).toBe(5);
        });
        // TODO test delay being decimal, negative, NaN, undefined
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
        it(`exists as '${name}'`, () => {
          expect(retryOr).toBeDefined();
        });
      }
    );
  });
});
