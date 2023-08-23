// import { ms, wait, fn }

import { fn } from './fn';
import { ms } from './times';
import { wait } from './waiters';

//<!-- DOCS: 500 -->
/**<!-- DOCS: ErrorTools ## -->
 * ErrorTools
 *
 * Functions for handling errors.
 */
export namespace ErrorTools {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: ErrorTools.tryOr ### -->
   * tryOr
   *
   * - `tryOr`
   * - `ErrorTools.tryOr`
   *
   * Try to execute a function and return its result if it succeeds, or return the default value if it fails.
   *
   * ```typescript
   * const result = tryOr('default', () => getSomething());
   * ```
   * @param {T} orValue
   * @param {(...args: A) => Promise<T>} func
   * @param {...A} [args]
   * @returns {Promise<T>}
   */
  export const tryOr = async <T extends unknown, A extends unknown[]>(orValue: T, func: (...args: A) => Promise<T>, ...args: A): Promise<T> => {
    try {
      return await func(...args);
    } catch (err) {
      return orValue;
    }
  };

  /**<!-- DOCS: ErrorTools.retry ### -->
   * retry
   *
   * - `retry`
   * - `ErrorTools.retry`
   *
   * Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds.
   *
   * ```typescript
   * const result = tryOr(5, seconds(1), true, () => getSomething());
   * ```
   * @param {number} [maxTries=10]
   * @param {ms} [delay=0]
   * @param {boolean} [suppress=true]
   * @param {(attemptNumber) => T} [run=fn.result(undefined as T)]
   * @returns {Promise<T>}
   */
  export const retry = async <T extends unknown>(
    maxTries: number = 10,
    delay: ms = 0,
    suppress: boolean = true,
    run: (attemptNumber) => T = fn.result(undefined as T)
  ): Promise<T> => {
    const loop = async (attempt: number, lastErr?: Error): Promise<T> => {
      if (attempt >= maxTries) {
        if (!suppress) throw lastErr;
        return undefined as T;
      }
      try {
        const result = await run(attempt);
        return result;
      } catch (err) {
        if (delay) await wait(delay);
        return await loop(attempt + 1, err);
      }
    };
    return await loop(0);
  };

  /**<!-- DOCS: ErrorTools.retryOr ### -->
   * retryOr
   *
   * - `retryOr`
   * - `ErrorTools.retryOr`
   *
   * Combination of retry and tryOr.
   *
   * Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds. Return the default value if it fails too many times
   *
   * ```typescript
   * const result = retryOr('default', 5, seconds(1), true, () => getSomething());
   * ```
   * @param {T} orValue
   * @param {number} [maxTries=10]
   * @param {ms} [delay=0]
   * @param {boolean} [suppress=true]
   * @param {() => T} [run=fn.result(orValue)]
   * @returns {Promise<T>}
   */
  export const retryOr = async <T extends unknown>(
    orValue: T,
    maxTries: number = 10,
    delay: ms = 0,
    suppress: boolean = true,
    run: () => T = fn.result(orValue)
  ): Promise<T> => tryOr(orValue, () => retry(maxTries, delay, suppress, run));
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: ErrorTools.tryOr  --> */
export const tryOr = ErrorTools.tryOr;
/** <!-- DOCS-ALIAS: ErrorTools.retry  --> */
export const retry = ErrorTools.retry;
/** <!-- DOCS-ALIAS: ErrorTools.retryOr  --> */
export const retryOr = ErrorTools.retryOr;
