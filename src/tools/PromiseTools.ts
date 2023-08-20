//<!-- DOCS: 140 -->
/**<!-- DOCS: PromiseTools ## -->
 * PromiseTools
 *
 * A collection of promise utilities
 */
export namespace PromiseTools {
  /**<!-- DOCS: PromiseTools.DeferredPromise 141 ### -->
   * DeferredPromise
   *
   * - `DeferredPromise`
   * - `PromiseTools.DeferredPromise`
   *
   * A deferred promise
   */
  export interface DeferredPromise<T> {
    resolve: (value: T) => Promise<T>;
    reject: (value: T) => Promise<T>;
    promise: Promise<T>;
  }
  /**<!-- DOCS: PromiseTools.getDeferred ### -->
   * getDeferred
   *
   * - `getDeferred`
   * - `PromiseTools.getDeferred`
   *
   * A deferred promise
   *
   * ```typescript
   * import { getDeferred } from 'swiss-ak';
   *
   * const run = () => {
   *   const deferred = getDeferred<number>();
   *
   *   doSomethingWithACallback('a', 'b', (err: Error, result: number) => {
   *     // callback (just an example - don't actually do this this way)
   *     if (err) return deferred.reject(err);
   *     deferred.resolve(result);
   *   });
   *
   *   return deferred.promise;
   * };
   *
   * const luckyNumber: number = await run();
   * ```
   */
  export const getDeferred = <T extends unknown>(): DeferredPromise<T> => {
    let resolve, reject;
    const promise = new Promise<T>((res, rej) => {
      resolve = (arg) => {
        res(arg);
        return promise;
      };
      reject = (...args) => {
        rej(...args);
        return promise;
      };
    });
    return {
      resolve,
      reject,
      promise
    };
  };

  /**<!-- DOCS: PromiseTools.all ### -->
   * all
   *
   * - `all`
   * - `PromiseTools.all`
   *
   * An alias for Promise.all
   */
  export const all = async <T extends unknown>(promises: Promise<T>[]): Promise<any> => {
    await Promise.all(promises);
  };

  /**<!-- DOCS: PromiseTools.allLimit ### -->
   * allLimit
   *
   * - `allLimit`
   * - `PromiseTools.allLimit`
   *
   * Like Promise.all, but limits the numbers of concurrently running items.
   *
   * Takes an array of functions (that return Promises), rather than an array of Promises
   *
   * ```typescript
   * import { PromiseTools, timer, ms, seconds } from 'swiss-ak';
   *
   * const give = async (delay: ms, result: number, label: string) => {
   *   await waitFor(delay);
   *   timer.end(label);
   *   return result;
   * };
   *
   * timer.start('allLimit', 'a', 'b', 'c', 'd');
   *
   * const results = PromiseTools.allLimit<number>(2, [
   *   give(seconds(5), 1, 'a'),
   *   give(seconds(5), 2, 'b'),
   *   give(seconds(5), 3, 'c'),
   *   give(seconds(5), 4, 'd')
   * ]);
   *
   * timer.end('allLimit');
   *
   * console.log(results); // [ 1, 2, 3, 4 ]
   *
   * timer.log();
   * // Times:
   * // 	allLimit: 10s
   * // 	a: 5s
   * // 	b: 5s
   * // 	c: 10s
   * // 	d: 10s
   * ```
   */
  export const allLimit = <T extends unknown>(limit: number, items: ((index: number) => Promise<T>)[], noThrow: boolean = false): Promise<T[]> => {
    let runningCount: number = 0;
    let errors: any[] = [];
    let remaining: ((index: number) => Promise<T>)[] = [...items];
    const result: T[] = [];
    const deferred = getDeferred<T[]>();

    const update = () => {
      if (remaining.length === 0 && runningCount === 0) {
        if (errors.length && !noThrow) {
          deferred.reject(errors);
          return;
        }
        deferred.resolve(result);
        return;
      }
      if (runningCount < limit && remaining.length) {
        const next = remaining.shift() as (index: number) => Promise<T>;
        const index = items.indexOf(next);
        run(next, index);
      }
    };
    const run = async (prom: (index: number) => Promise<T>, index: number) => {
      runningCount++;
      try {
        result[index] = await prom(index);
      } catch (err) {
        errors.push(err);
      }
      runningCount--;
      update();
    };

    for (let i = 0; i < Math.min(limit, items.length); i++) {
      update();
    }

    if (!items || items.length === 0) {
      deferred.resolve(result);
    }

    return deferred.promise;
  };

  /**<!-- DOCS: PromiseTools.each ### -->
   * each
   *
   * - `each`
   * - `PromiseTools.each`
   *
   * Run an async function against each item in an array
   *
   * ```typescript
   * import { PromiseTools, ms, seconds, wait } from 'swiss-ak';
   *
   * const arr = [1, 2, 3, 4];
   *
   * await PromiseTools.each<number>(arr, async (val: number) => {
   *   await wait(seconds(2));
   *   sendToSomewhere(val);
   * });
   * console.log(''); // after 2 seconds
   * ```
   */
  export const each = async <Ti extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<any> => {
    await Promise.all(items.map((item: Ti, index: number, array: Ti[]) => func(item, index, array)));
  };

  /**<!-- DOCS: PromiseTools.eachLimit ### -->
   * eachLimit
   *
   * - `eachLimit`
   * - `PromiseTools.eachLimit`
   *
   * Run an async function against each item in an array, limiting the number of items that can run concurrently.
   *
   * See PromiseTools.allLimit for information about limited functions.
   *
   * ```typescript
   * import { PromiseTools, ms, seconds, wait } from 'swiss-ak';
   *
   * const arr = [1, 2, 3, 4];
   *
   * await PromiseTools.eachLimit<number>(2, arr, async (val: number) => {
   *   await wait(seconds(2));
   *   sendToSomewhere(val);
   * });
   * console.log(''); // after 4 seconds
   * ```
   */
  export const eachLimit = async <Ti extends unknown>(
    limit: number,
    items: Ti[],
    func: (item: Ti, index: number, array: Ti[]) => Promise<any>
  ): Promise<any> => {
    await allLimit(
      limit,
      items.map((item: Ti, index: number, array: Ti[]) => () => func(item, index, array))
    );
  };

  /**<!-- DOCS: PromiseTools.map ### -->
   * map
   *
   * - `map`
   * - `PromiseTools.map`
   *
   * Run an async map function against each item in an array, mapping the results to a returned array
   *
   * ```typescript
   * import { PromiseTools, ms, seconds, wait } from 'swiss-ak';
   *
   * const arr = [1, 2, 3, 4];
   *
   * const mapped = await PromiseTools.map<number>(arr, async (val: number) => {
   *   await wait(seconds(2));
   *   return val * 2;
   * });
   *
   * console.log(mapped); // [2, 4, 6, 8] (after 2 seconds)
   * ```
   */
  export const map = async <Ti extends unknown, To extends unknown>(
    items: Ti[],
    func: (item: Ti, index: number, array: Ti[]) => Promise<To>
  ): Promise<To[]> => {
    const result: To[] = [];

    await Promise.all(
      items.map(async (item: Ti, index: number, array: Ti[]) => {
        const res = await func(item, index, array);
        result[index] = res;
      })
    );

    return result;
  };

  /**<!-- DOCS: PromiseTools.mapLimit ### -->
   * mapLimit
   *
   * - `mapLimit`
   * - `PromiseTools.mapLimit`
   *
   * Run an async map function against each item in an array, mapping the results to a returned array, and limiting the number of items that can run concurrently.
   *
   * See PromiseTools.allLimit for information about limited functions.
   *
   * ```typescript
   * import { PromiseTools, ms, seconds, wait } from 'swiss-ak';
   *
   * const arr = [1, 2, 3, 4];
   *
   * const mapped = await PromiseTools.mapLimit<number>(2, arr, async (val: number) => {
   *   await wait(seconds(2));
   *   return val * 2;
   * });
   *
   * console.log(mapped); // [2, 4, 6, 8] (after 4 seconds)
   * ```
   */
  export const mapLimit = async <Ti extends unknown, To extends unknown>(
    limit: number,
    items: Ti[],
    func: (item: Ti, index: number, array: Ti[]) => Promise<To>
  ): Promise<To[]> =>
    await allLimit(
      limit,
      items.map((item: Ti, index: number, array: Ti[]) => () => {
        const res = func(item, index, array);
        return res;
      })
    );

  const objectify = async <T extends Object>(func: Function, input: T): Promise<UnWrapPromiseObject<T>> => {
    const keys = Object.keys(input);
    const results = await func(Object.values(input));
    return Object.fromEntries(keys.map((key, index) => [key, results[index]])) as UnWrapPromiseObject<T>;
  };

  type UnWrapPromise<T> = T extends Promise<infer U> ? U : T;
  type UnWrapPromiseObject<T> = { [K in keyof T]: UnWrapPromise<T[K]> };
  /**<!-- DOCS: PromiseTools.allObj ### -->
   * allObj
   *
   * - `allObj`
   * - `PromiseTools.allObj`
   *
   * Like Promise.all, but pass/receive objects rather than arrays
   *
   * ```typescript
   * import { PromiseTools, timer, ms, seconds } from 'swiss-ak';
   *
   * const give = async (delay: ms, result: number, label: string) => {
   *   await waitFor(delay);
   *   timer.end(label);
   *   return result;
   * };
   *
   * timer.start('allObj', 'a', 'b', 'c');
   *
   * const results = PromiseTools.allObj<number>({
   *   a: give(seconds(10), 1, 'a'),
   *   b: give(seconds(15), 2, 'b'),
   *   c: give(seconds(20), 3, 'c')
   * });
   *
   * timer.end('allObj');
   *
   * console.log(results); // { a: 1, b: 2, c: 3 }
   *
   * timer.log();
   * // Times:
   * // 	allObj: 20s
   * // 	a: 10s
   * // 	b: 15s
   * // 	c: 20s
   * ```
   */
  export const allObj = async <T extends Object>(input: T): Promise<UnWrapPromiseObject<T>> => {
    return objectify((arr) => Promise.all(arr), input);
  };

  /**<!-- DOCS: PromiseTools.allLimitObj ### -->
   * allLimitObj
   *
   * - `allLimitObj`
   * - `PromiseTools.allLimitObj`
   *
   * A mix of allObj and allLimit.
   *
   * Takes an array of functions (that return Promises), and limits the numbers of concurrently running items.
   *
   * ```typescript
   * import { PromiseTools, timer, ms, seconds } from 'swiss-ak';
   *
   * const give = async (delay: ms, result: number, label: string) => {
   *   await waitFor(delay);
   *   timer.end(label);
   *   return result;
   * };
   *
   * timer.start('allLimitObj', 'a', 'b', 'c', 'd');
   *
   * const results = PromiseTools.allLimitObj<number>(2, {
   *   a: give(seconds(5), 1, 'a'),
   *   b: give(seconds(5), 2, 'b'),
   *   c: give(seconds(5), 3, 'c'),
   *   d: give(seconds(5), 4, 'd')
   * });
   *
   * timer.end('allLimitObj');
   *
   * console.log(results); // { a: 1, b: 2, c: 3, d: 4 }
   *
   * timer.log();
   * // Times:
   * // 	allLimitObj: 10s
   * // 	a: 5s
   * // 	b: 5s
   * // 	c: 10s
   * // 	d: 10s
   * ```
   */
  export const allLimitObj = async <T extends Object>(limit: number, input: T, noThrow: boolean = false): Promise<UnWrapPromiseObject<T>> => {
    return objectify((items: ((index: number) => Promise<T>)[]) => {
      return allLimit(limit, items, noThrow);
    }, input);
  };
}

/** <!-- DOCS-ALIAS: PromiseTools.DeferredPromise  --> */
export type DeferredPromise<T> = PromiseTools.DeferredPromise<T>;
/** <!-- DOCS-ALIAS: PromiseTools.getDeferred  --> */
export const getDeferred = PromiseTools.getDeferred;
/** <!-- DOCS-ALIAS: PromiseTools.all  --> */
export const all = PromiseTools.all;
/** <!-- DOCS-ALIAS: PromiseTools.allLimit  --> */
export const allLimit = PromiseTools.allLimit;
/** <!-- DOCS-ALIAS: PromiseTools.each  --> */
export const each = PromiseTools.each;
/** <!-- DOCS-ALIAS: PromiseTools.eachLimit  --> */
export const eachLimit = PromiseTools.eachLimit;
/** <!-- DOCS-ALIAS: PromiseTools.map  --> */
export const map = PromiseTools.map;
/** <!-- DOCS-ALIAS: PromiseTools.mapLimit  --> */
export const mapLimit = PromiseTools.mapLimit;
/** <!-- DOCS-ALIAS: PromiseTools.allObj  --> */
export const allObj = PromiseTools.allObj;
/** <!-- DOCS-ALIAS: PromiseTools.allLimitObj  --> */
export const allLimitObj = PromiseTools.allLimitObj;
