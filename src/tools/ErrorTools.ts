// import { ms, wait, fn }

import { fn } from './fn';
import { safe } from './safe';
import { ms } from './times';
import { wait } from './waiters';

//<!-- DOCS: 500 -->
/**<!-- DOCS: ErrorTools ##! -->
 * ErrorTools
 *
 * Functions for handling errors.
 */
export namespace ErrorTools {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: ErrorTools.tryOr ### @ -->
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
   * @param {(...args: A[]) => Promise<T>} func
   * @param {...A} [args]
   * @returns {Promise<T>}
   */
  export const tryOr = async <T, A>(orValue: T, func: (...args: A[]) => Promise<T>, ...args: A[]): Promise<T> => {
    try {
      return await func(...args);
    } catch (err) {
      return orValue;
    }
  };

  /**<!-- DOCS: ErrorTools.retry ### @ -->
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
  export const retry = async <T>(
    maxTries: number = 10,
    delay: ms = 0,
    suppress: boolean = true,
    run: (attemptNumber) => T = fn.result(undefined as T)
  ): Promise<T> => {
    const args = {
      maxTries: safe.num(maxTries, true, 1, undefined, 10),
      delay: safe.num(delay, true, 0),
      suppress: safe.bool(suppress, true),
      run: safe.func(run, fn.result(undefined as T))
    };

    const loop = async (attempt: number, lastErr?: Error): Promise<T> => {
      if (attempt >= args.maxTries) {
        if (!args.suppress) throw lastErr;
        return undefined as T;
      }
      try {
        const result = await args.run(attempt);
        return result;
      } catch (err) {
        if (args.delay) await wait(args.delay);
        return await loop(attempt + 1, err);
      }
    };
    return await loop(0);
  };

  /**<!-- DOCS: ErrorTools.retryOr ### @ -->
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
   * const result = retryOr('default', 5, seconds(1), () => getSomething());
   * ```
   * @param {T} orValue
   * @param {number} [maxTries=10]
   * @param {ms} [delay=0]
   * @param {() => T | Promise<T>} [run=fn.result(orValue)]
   * @returns {Promise<T>}
   */
  export const retryOr = async <T>(orValue: T, maxTries: number = 10, delay: ms = 0, run: () => T | Promise<T> = fn.result(orValue)): Promise<T> => {
    const args = {
      orValue,
      maxTries: safe.num(maxTries, true, 1),
      delay: safe.num(delay, true, 0),
      run: safe.func(run, fn.result(orValue))
    };

    return tryOr(args.orValue, () => retry(args.maxTries, args.delay, false, args.run));
  };

  type TryCatchResult<T, E = Error> =
    | {
        result: T;
        error: null;
      }
    | {
        result: null;
        error: E;
      };

  /**<!-- DOCS: ErrorTools.tryCatch ### @ -->
   * tryCatch
   *
   * - `tryCatch`
   * - `ErrorTools.tryCatch`
   *
   * Inspired by the `tryCatch` function [by t3dotgg](https://gist.github.com/t3dotgg/a486c4ae66d32bf17c09c73609dacc5b).
   *
   * ```typescript
   * const getFoo = async () => {
   *   return 'foo';
   * };
   * const example1 = await tryCatch(getFoo()); // { result: 'foo', error: null }
   *
   * const getError = async () => {
   *   throw new Error('foo');
   * };
   * const example2 = await tryCatch(getError()); // { result: null, error: Error }
   *
   * const example3 = await tryCatch(() => {
   *   return 'bar';
   * }); // { result: 'bar', error: null }
   * ```
   * @param {Promise<T> | (() => T | Promise<T>)} promiseOrFunc
   * @returns {Promise<TryCatchResult<T, E>>}
   */
  export async function tryCatch<T, E = Error>(promiseOrFunc: Promise<T> | (() => T | Promise<T>)): Promise<TryCatchResult<T, E>> {
    try {
      const result = await (typeof promiseOrFunc === 'function' ? promiseOrFunc() : promiseOrFunc);
      return { result, error: null };
    } catch (error) {
      return { result: null, error: error as E };
    }
  }
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: ErrorTools.tryOr  --> */
export const tryOr = ErrorTools.tryOr;
/** <!-- DOCS-ALIAS: ErrorTools.retry  --> */
export const retry = ErrorTools.retry;
/** <!-- DOCS-ALIAS: ErrorTools.retryOr  --> */
export const retryOr = ErrorTools.retryOr;
/** <!-- DOCS-ALIAS: ErrorTools.tryCatch  --> */
export const tryCatch = ErrorTools.tryCatch;
