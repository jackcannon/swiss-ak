/**<!-- DOCS: ## -->
 * Helper Types
 *
 * Some commonly used types
 */
/**<!-- DOCS: ### -->
 * Partial<T>
 *
 * - `Partial`
 *
 * Makes all properties in T optional.
 *
 * ```typescript
 * interface ITest {
 *   a: string,
 *   b: boolean
 * };
 * type PartialTest = Partial<ITest>; // { a?: string, b?: boolean }
 * ```
 */
declare type Partial$1<T> = {
    [K in keyof T]?: T[K];
};
/**<!-- DOCS: ### -->
 * KeysOnly<T>
 *
 * - `KeysOnly`
 *
 * Makes all the values equal to the keys of T
 *
 * ```typescript
 * interface ITest {
 *   a: string,
 *   b: boolean
 * };
 * type KeysOnlyTest = KeysOnly<ITest>; // { a: 'a', b: 'b' }
 * ```
 */
declare type KeysOnly<T> = {
    [K in keyof T]: K;
};
/**<!-- DOCS: ### -->
 * Numbered<T>
 *
 * - `Numbered`
 *
 * Makes all the values numbers
 *
 * ```typescript
 * interface ITest {
 *   a: string,
 *   b: boolean
 * };
 * type NumberedTest = Numbered<ITest>; // { a: number, b: number }
 * ```
 */
declare type Numbered<T> = {
    [K in keyof T]: number;
};
/**<!-- DOCS: ### -->
 * OfType<T, U>
 *
 * - `OfType`
 *
 * Makes all the properties of object T have type U
 */
declare type OfType<T, U> = {
    [K in keyof T]: U;
};
/**<!-- DOCS: ### -->
 * ObjOfType<T>
 *
 * - `ObjOfType`
 *
 * An object with any properties of type T
 */
declare type ObjOfType<T = string> = {
    [key: string]: T;
};
/**<!-- DOCS: ### -->
 * ObjOfType<T>
 *
 * - `ObjOfType`
 *
 * An object with any properties of type T
 */
declare type RemapOf<O = Object, T = string> = {
    [K in keyof O]: T;
};

declare type ms = number;
declare type second = number;
declare type minute = number;
declare type hour = number;
declare type day = number;
declare type week = number;
declare type month = number;
declare type year = number;
declare type decade = number;
declare type century = number;
declare type millennium = number;
declare const MILLISECOND = 1;
declare const SECOND: number;
declare const MINUTE: number;
declare const HOUR: number;
declare const DAY: number;
declare const WEEK: number;
declare const MONTH: number;
declare const YEAR: number;
declare const DECADE: number;
declare const CENTURY: number;
declare const MILLENNIUM: number;
declare const milliseconds: (x?: ms) => ms;
declare const seconds: (x?: second) => ms;
declare const minutes: (x?: minute) => ms;
declare const hours: (x?: hour) => ms;
declare const days: (x?: day) => ms;
declare const weeks: (x?: week) => ms;
declare const months: (x?: month) => ms;
declare const years: (x?: year) => ms;
declare const decades: (x?: decade) => ms;
declare const centuries: (x?: century) => ms;
declare const millenniums: (x?: millennium) => ms;

type times_ms = ms;
type times_second = second;
type times_minute = minute;
type times_hour = hour;
type times_day = day;
type times_week = week;
type times_month = month;
type times_year = year;
type times_decade = decade;
type times_century = century;
type times_millennium = millennium;
declare const times_MILLISECOND: typeof MILLISECOND;
declare const times_SECOND: typeof SECOND;
declare const times_MINUTE: typeof MINUTE;
declare const times_HOUR: typeof HOUR;
declare const times_DAY: typeof DAY;
declare const times_WEEK: typeof WEEK;
declare const times_MONTH: typeof MONTH;
declare const times_YEAR: typeof YEAR;
declare const times_DECADE: typeof DECADE;
declare const times_CENTURY: typeof CENTURY;
declare const times_MILLENNIUM: typeof MILLENNIUM;
declare const times_milliseconds: typeof milliseconds;
declare const times_seconds: typeof seconds;
declare const times_minutes: typeof minutes;
declare const times_hours: typeof hours;
declare const times_days: typeof days;
declare const times_weeks: typeof weeks;
declare const times_months: typeof months;
declare const times_years: typeof years;
declare const times_decades: typeof decades;
declare const times_centuries: typeof centuries;
declare const times_millenniums: typeof millenniums;
declare namespace times {
  export {
    times_ms as ms,
    times_second as second,
    times_minute as minute,
    times_hour as hour,
    times_day as day,
    times_week as week,
    times_month as month,
    times_year as year,
    times_decade as decade,
    times_century as century,
    times_millennium as millennium,
    times_MILLISECOND as MILLISECOND,
    times_SECOND as SECOND,
    times_MINUTE as MINUTE,
    times_HOUR as HOUR,
    times_DAY as DAY,
    times_WEEK as WEEK,
    times_MONTH as MONTH,
    times_YEAR as YEAR,
    times_DECADE as DECADE,
    times_CENTURY as CENTURY,
    times_MILLENNIUM as MILLENNIUM,
    times_milliseconds as milliseconds,
    times_seconds as seconds,
    times_minutes as minutes,
    times_hours as hours,
    times_days as days,
    times_weeks as weeks,
    times_months as months,
    times_years as years,
    times_decades as decades,
    times_centuries as centuries,
    times_millenniums as millenniums,
  };
}

/**<!-- DOCS: ### -->
 * wait
 *
 * - `wait`
 * - `waiters.wait`
 *
 * Standard wait promise (using setTimeout)
 *
 * ```typescript
 * import { wait } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * await wait(minutes(2));
 * console.log(new Date().toTimeString()); // 12:32:10
 * ```
 */
declare const wait: (time: ms) => Promise<unknown>;
/**<!-- DOCS: ### -->
 * waitUntil
 *
 * - `waitUntil`
 * - `waiters.waitUntil`
 *
 * Accurate (pinged) wait until given time
 *
 * ```typescript
 * import { waitUntil } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * await waitUntil(Date.now() + minutes(10));
 * console.log(new Date().toTimeString()); // 12:40:10
 * ```
 */
declare const waitUntil: (time: ms) => Promise<null>;
/**<!-- DOCS: ### -->
 * waitFor
 *
 - `waitFor`
 - `waiters.waitFor`
 *
 * Accurate (pinged) wait the given ms
 *
 * ```typescript
 * import { waitFor } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * await waitFor(minutes(5));
 * console.log(new Date().toTimeString()); // 12:35:10
 * ```
 */
declare const waitFor: (time: ms) => Promise<null>;
/**<!-- DOCS: ### -->
 * waitEvery
 *
 - `waitEvery`
 - `waiters.waitEvery`
 *
 * Accurate (pinged) wait for next 'every X' event
 *
 * ```typescript
 * import { waitEvery } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * await waitEvery(hours(2));
 * console.log(new Date().toTimeString()); // 14:00:00
 * ```
 */
declare const waitEvery: (timing: ms, offset?: ms) => Promise<null>;
/**<!-- DOCS: ### -->
 * stopInterval
 *
 - `stopInterval`
 - `waiters.stopInterval`
 *
 * ```typescript
 * import { interval, stopInterval } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * interval((intID, count) => {
 *   console.log(new Date().toTimeString()); // 13:00:00, 14:00:00, 15:00:00
 *   if (count === 3) {
 *     stopInterval(intID);
 *   }
 * }, hours(1));
 * ```
 */
declare const stopInterval: (intID: number) => number;
/**<!-- DOCS: ### -->
 * interval
 *
 - `interval`
 - `waiters.interval`
 *
 * Accurate (pinged) interval for every 'every X' event
 *
 * ```typescript
 * import { interval, stopInterval } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * interval((intID, count) => {
 *   console.log(new Date().toTimeString()); // 13:00:00, 14:00:00, 15:00:00
 *   if (count === 3) {
 *     stopInterval(intID);
 *   }
 * }, hours(1));
 * ```
 */
declare const interval: (action: (intID?: number, count?: number) => any, timing: ms) => number;

declare const waiters_wait: typeof wait;
declare const waiters_waitUntil: typeof waitUntil;
declare const waiters_waitFor: typeof waitFor;
declare const waiters_waitEvery: typeof waitEvery;
declare const waiters_stopInterval: typeof stopInterval;
declare const waiters_interval: typeof interval;
declare namespace waiters {
  export {
    waiters_wait as wait,
    waiters_waitUntil as waitUntil,
    waiters_waitFor as waitFor,
    waiters_waitEvery as waitEvery,
    waiters_stopInterval as stopInterval,
    waiters_interval as interval,
  };
}

/**<!-- DOCS: ## -->
 * timer
 *
 * A debug tool for measuring the duration of code blocks.
 */
interface INames {
    [k: string]: string;
}
declare type TimerDurations<TName> = Numbered<TName & {
    TOTAL: number;
    [label: string]: number;
}>;
declare type CustomEntryDict<T, TName> = {
    [K in keyof T]?: (durations: TimerDurations<TName>) => number;
};
interface CustomEntryObj {
    label: string;
    start?: number;
    end?: number;
    duration?: number;
}
interface ITimer<TName> {
    start(...labelArr: string[]): void;
    end(...labelArr: string[]): void;
    switch(endLabel: string | string[], startLabel: string | string[]): void;
    log(prefix?: string, customEntries?: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>): number;
    reset(): void;
    names: KeysOnly<TName>;
    displayNames: TName;
}
/**<!-- DOCS: ### -->
 * getTimer
 *
 * - `getTimer`
 *
 * Usage:
 * ```typescript
 * const timer = getTimer('Example', false, chalk.red, chalk, {
 *   TOTAL: 'TOTAL',
 *   INTRO: 'Action 1',
 *   ENDING: 'Action 2'
 * });
 * timer.start(timer.TOTAL, timer.INTRO);

 * await wait(seconds(4)); // do something async

 * timer.switch(timer.INTRO, timer.ENDING); // same as calling end(timer.INTRO) and start(timer.ENDING)

 * await wait(seconds(6)); // do something async

 * timer.end(timer.TOTAL, timer.ENDING);
 * timer.log();
 * ```
 *
 * Output:
 * ```
 * Example Times:
 * 	Action 1: 4s
 * 	Action 2: 6s
 * 	⎯⎯⎯⎯⎯⎯⎯
 * 	TOTAL:    10s
 * ```
 */
declare const getTimer: <TName extends INames>(name?: string, verbose?: boolean, wrapperFn?: any, chalk?: any, displayNames?: TName) => ITimer<TName> & KeysOnly<TName>;
/**<!-- DOCS: ### -->
 * timer
 *
 * - `timer`
 *
 * Global timer
 */
declare const timer: ITimer<INames> & KeysOnly<INames>;

/**<!-- DOCS: ## -->
 * progressBar
 *
 * A progress bar that can be used in the terminal.
 *
 * > NOTE: This is eventually be moved to `swiss-node`
 */
/**<!-- DOCS: ### -->
 * printLn
 *
 * - `printLn`
 * - `progressBar.printLn`
 *
 * Can use instead of console.log
 *
 * Overwrites the previous line if possible (i.e. node);
 *
 * Usage
 * ```javascript
 * import { printLn } from 'swiss-ak';
 *
 * printLn('A');
 * printLn('B'); // Replaces the 'A' line
 * printLn('C'); // Replaces the 'B' line
 * printLn(); // Jumps a line
 * printLn('D'); // Replaces the empty line
 * ```
 *
 * Output
 * ```
 * C
 * D
 * ```
 */
declare const printLn: (...text: any[]) => void;
interface ProgressBarOptionsFull {
    prefix: string;
    prefixWidth: number;
    maxWidth: number;
    wrapperFn: any;
    barWrapFn: any;
    barProgWrapFn: any;
    barCurrentWrapFn: any;
    barEmptyWrapFn: any;
    showCount: boolean;
    showPercent: boolean;
    countWidth: number;
    progChar: string;
    emptyChar: string;
    startChar: string;
    endChar: string;
    showCurrent: boolean;
    currentChar: string;
}
/**<!-- DOCS: ### -->
 * Options
 *
 * - `ProgressBarOptions`
 * - `progressBar.ProgressBarOptions`
 *
 * All options are optional.
 *
 * | Property         | Default                           | Description                                            |
 * | ---------------- | --------------------------------- | ------------------------------------------------------ |
 * | prefix           | `''`                              | String to show to left of progress bar                 |
 * | prefixWidth      | `1`                               | Min width of prefix - `10` => `Example˽˽˽`             |
 * | maxWidth         | `process.stdout.columns` or `100` | The maximum width the entire string may extend         |
 * | wrapperFn        | nothing                           | function to wrap the printed string (eg `chalk.cyan)`  |
 * | barWrapFn        | nothing                           | function to wrap the bar                               |
 * | barProgWrapFn    | nothing                           | function to wrap the 'complete' segment of the bar     |
 * | barCurrentWrapFn | nothing                           | function to wrap the 'current' segment of the bar      |
 * | barEmptyWrapFn   | nothing                           | function to wrap the empty/track part of the line      |
 * | showCount        | `true`                            | Show numerical values of the count - `[11 / 15]`       |
 * | showPercent      | `false`                           | Show percentage completed - `( 69%)`                   |
 * | countWidth       | `0`                               | Min width of nums for showCount - `3` => `[˽˽1 / ˽15]` |
 * | progChar         | `'█'`                             | Character to use for progress section of bar           |
 * | emptyChar        | `' '`                             | Character to use for empty (rail) section of bar       |
 * | startChar        | `'▕'`                             | Character to start the progress bar with               |
 * | endChar          | `'▏'`                             | Character to end the progress bar with                 |
 * | showCurrent      | `'▏'`                             | Show the 'current' segment of the bar seperately       |
 * | currentChar      | `'▏'`                             | Character to use the the 'current' segment             |
 */
declare type ProgressBarOptions = Partial<ProgressBarOptionsFull>;
interface ProgressBar {
    next: () => string;
    set: (newCurrent: number) => string;
    reset: () => string;
    update: () => string;
    start: () => string;
    finish: () => string;
    readonly max: number;
}
/**<!-- DOCS: ### -->
 * getProgressBar
 *
 * - `getProgressBar`
 * - `progressBar.getProgressBar`
 *
 * Usage:
 * ```typescript
 * import chalk from 'chalk'
 * import {getProgressBar} from 'swiss-ak';
 *
 * console.log('-'.repeat(20) + ' < 20 Chars');
 *
 * const progress = getProgressBar(5, {
 *   prefix: 'ABC',
 *   maxWidth: 20,
 *   chalk,
 *   wrapperFn: chalk.green
 * });
 * for (let i = 1; i <= 5; i++) {
 *   progress.set(i);
 * }
 * progress.finish();
 * ```
 *
 * Output:
 * ```
 * -------------------- < 20 Chars
 * ABC ▕      ▏ [0 / 5]
 * ABC ▕█     ▏ [1 / 5]
 * ABC ▕██    ▏ [2 / 5]
 * ABC ▕████  ▏ [3 / 5]
 * ABC ▕█████ ▏ [4 / 5]
 * ABC ▕██████▏ [5 / 5]
 * ```
 */
declare const getProgressBar: (max: number, options?: ProgressBarOptions) => ProgressBar;

declare const progressBar_printLn: typeof printLn;
type progressBar_ProgressBarOptions = ProgressBarOptions;
type progressBar_ProgressBar = ProgressBar;
declare const progressBar_getProgressBar: typeof getProgressBar;
declare namespace progressBar {
  export {
    progressBar_printLn as printLn,
    progressBar_ProgressBarOptions as ProgressBarOptions,
    progressBar_ProgressBar as ProgressBar,
    progressBar_getProgressBar as getProgressBar,
  };
}

/**<!-- DOCS: ## -->
 * Error Handling
 *
 * Functions for handling errors.
 */
/**<!-- DOCS: ### -->
 * tryOr
 *
 * - `tryOr`
 *
 * Try to execute a function and return its result if it succeeds, or return the default value if it fails.
 *
 * ```typescript
 * const result = tryOr('default', () => getSomething());
 * ```
 */
declare const tryOr: <T extends unknown, A extends unknown[]>(orValue: T, func: (...args: A) => Promise<T>, ...args: A) => Promise<T>;
/**<!-- DOCS: ### -->
 * retry
 *
 * - `retry`
 *
 * Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds.
 *
 * ```typescript
 * const result = tryOr(5, seconds(1),, true, () => getSomething());
 * ```
 */
declare const retry: <T extends unknown>(maxTries?: number, delay?: ms, suppress?: boolean, run?: (attemptNumber: any) => T) => Promise<T>;
/**<!-- DOCS: ### -->
 * retryOr
 *
 * - `retryOr`
 *
 * Combination of retry and tryOr.
 *
 * Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds. Return the default value if it fails too many times
 *
 * ```typescript
 * const result = retryOr('default', 5, seconds(1), true, () => getSomething());
 * ```
 */
declare const retryOr: <T extends unknown>(orValue: T, maxTries?: number, delay?: ms, suppress?: boolean, run?: () => T) => Promise<T>;

/**<!-- DOCS: ## -->
 * PromiseTools
 *
 * A collection of promise utilities
 */
interface DeferredPromise<T> {
    resolve: (value: T) => Promise<T>;
    reject: (value: T) => Promise<T>;
    promise: Promise<T>;
}
/**<!-- DOCS: ### -->
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
```
 */
declare const getDeferred: <T extends unknown>() => DeferredPromise<T>;
/**<!-- DOCS: ### -->
 * all
 *
 * - `all`
 * - `PromiseTools.all`
 *
 * An alias for Promise.all
 */
declare const all: <T extends unknown>(promises: Promise<T>[]) => Promise<any>;
/**<!-- DOCS: ### -->
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
declare const allLimit: <T extends unknown>(limit: number, items: ((index: number) => Promise<T>)[], noThrow?: boolean) => Promise<T[]>;
/**<!-- DOCS: ### -->
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
declare const each: <Ti extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
/**<!-- DOCS: ### -->
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
declare const eachLimit: <Ti extends unknown>(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
/**<!-- DOCS: ### -->
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
declare const map: <Ti extends unknown, To extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>) => Promise<To[]>;
/**<!-- DOCS: ### -->
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
declare const mapLimit: <Ti extends unknown, To extends unknown>(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>) => Promise<To[]>;
declare type UnWrapPromise<T> = T extends Promise<infer U> ? U : T;
declare type UnWrapPromiseObject<T> = {
    [K in keyof T]: UnWrapPromise<T[K]>;
};
/**<!-- DOCS: ### -->
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
declare const allObj: <T extends Object>(input: T) => Promise<UnWrapPromiseObject<T>>;
/**<!-- DOCS: ### -->
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
declare const allLimitObj: <T extends Object>(limit: number, input: T, noThrow?: boolean) => Promise<UnWrapPromiseObject<T>>;
declare const PromiseTools: {
    getDeferred: <T extends unknown>() => DeferredPromise<T>;
    all: <T_1 extends unknown>(promises: Promise<T_1>[]) => Promise<any>;
    allLimit: <T_2 extends unknown>(limit: number, items: ((index: number) => Promise<T_2>)[], noThrow?: boolean) => Promise<T_2[]>;
    each: <Ti extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
    eachLimit: <Ti_1 extends unknown>(limit: number, items: Ti_1[], func: (item: Ti_1, index: number, array: Ti_1[]) => Promise<any>) => Promise<any>;
    map: <Ti_2 extends unknown, To extends unknown>(items: Ti_2[], func: (item: Ti_2, index: number, array: Ti_2[]) => Promise<To>) => Promise<To[]>;
    mapLimit: <Ti_3 extends unknown, To_1 extends unknown>(limit: number, items: Ti_3[], func: (item: Ti_3, index: number, array: Ti_3[]) => Promise<To_1>) => Promise<To_1[]>;
    allObj: <T_3 extends Object>(input: T_3) => Promise<UnWrapPromiseObject<T_3>>;
    allLimitObj: <T_4 extends Object>(limit: number, input: T_4, noThrow?: boolean) => Promise<UnWrapPromiseObject<T_4>>;
};

/**<!-- DOCS: ## -->
 * ArrayTools
 *
 * A collection of useful array functions.
 */
/**<!-- DOCS: ### -->
 * range
 *
 * - `range`
 * - `ArrayTools.range`
 *
 * Returns an array of the given length, where each value is equal to it's index
 * e.g. [0, 1, 2, ..., length]
 *
 * ```typescript
 * ArrayTools.range(3);  // [0, 1, 2]
 * ArrayTools.range(5);  // [0, 1, 2, 3, 4]
 * ArrayTools.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * ArrayTools.range(3, 2);  // [0, 2, 4]
 * ArrayTools.range(5, 2);  // [0, 2, 4, 6, 8]
 * ArrayTools.range(10, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
 * ```
 */
declare const range: (length?: number, multiplier?: number, offset?: number) => number[];
declare type UnwrapArray<T> = T extends Array<infer U> ? U : T;
declare type UnwrapArrays<T extends [...any[]]> = T extends [infer Head, ...infer Tail] ? [UnwrapArray<Head>, ...UnwrapArrays<Tail>] : [];
/**<!-- DOCS: ### -->
 * zip
 *
 * - `zip`
 * - `ArrayTools.zip`
 *
 * Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.
 *
 * Limited to the length of the shortest provided array
 *
 * Inspired by python's 'zip'
 *
 * ```typescript
 * ArrayTools.zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
 * ```
 */
declare const zip: <T extends any[]>(...arrs: T) => UnwrapArrays<T>[];
/**<!-- DOCS: ### -->
 * zipMax
 *
 * - `zipMax`
 * - `ArrayTools.zipMax`
 *
 * Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.
 *
 * Unlike `zip`, it will match the length of the longest provided array, filling in any missing values with `undefined`
 *
 * Inspired by python's 'zip'
 *
 * ```typescript
 * ArrayTools.zipMax([1, 2, 3, 4], ['a', 'b', 'c']); //[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, undefined ] ]
 * ```
 */
declare const zipMax: <T extends any[]>(...arrs: T) => UnwrapArrays<T>[];
/**<!-- DOCS: ### -->
 * sortByMapped
 *
 * - `sortByMapped`
 * - `ArrayTools.sortByMapped`
 *
 * Sort an array by a mapped form of the values, but returning the initial values
 *
 * ```typescript
 * ArrayTools.sortByMapped(['2p', '3p', '1p'], (v) => Number(v.replace('p', ''))); // ['1p', '2p', '3p']
 * ArrayTools.sortByMapped(
 *   ['2p', '3p', '1p'],
 *   (v) => Number(v.replace('p', '')),
 *   (a, b) => b - a
 * ); // ['3p', '2p', '1p']
 * ```
 */
declare const sortByMapped: <T = string, M = number>(arr: T[], mapFn: (value: T, index: number, array: T[]) => M, sortFn?: (a: M, b: M) => number) => T[];
/**<!-- DOCS: ### -->
 * randomise
 *
 * - `randomise`
 * - `ArrayTools.randomise`
 *
 * Returns a clone of the provided array with it's items in a random order
 *
 * ```typescript
 * ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
 * ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
 * ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
 * ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
 * ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
 * ```
 */
declare const randomise: <T = string>(arr: T[]) => T[];
/**<!-- DOCS: ### -->
 * reverse
 *
 * - `reverse`
 * - `ArrayTools.reverse`
 *
 * Returns a new array with the order reversed without affecting original array
 *
 * ```typescript
 * const arr1 = [1, 2, 3];
 * arr1            // [1, 2, 3]
 * arr1.reverse(); // [3, 2, 1]
 * arr1            // [3, 2, 1]
 *
 * const arr2 = [1, 2, 3];
 * arr2            // [1, 2, 3]
 * ArrayTools.reverse(arr2);  // [3, 2, 1]
 * arr2            // [1, 2, 3]
 * ```
 */
declare const reverse: <T = string>(arr: T[]) => T[];
/**<!-- DOCS: ### -->
 * entries
 *
 * - `entries`
 * - `ArrayTools.entries`
 *
 * Returns array of 'tuples' of index/value pairs
 *
 * ```typescript
 * const arr = ['a', 'b', 'c'];
 * ArrayTools.entries(arr); // [ [0, 'a'], [1, 'b'], [2, 'c'] ]
 *
 * for (let [index, value] of entries(arr)) {
 *  console.log(index); // 0, 1, 2
 *  console.log(value); // 'a', 'b', 'c'
 * }
 * ```
 */
declare const entries: <T = string>(arr: T[]) => [number, T][];
/**<!-- DOCS: ### -->
 * repeat
 *
 * - `repeat`
 * - `ArrayTools.repeat`
 *
 * Returns an array with the given items repeated
 *
 * ```typescript
 * ArrayTools.repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
 * ArrayTools.repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
 * ```
 */
declare const repeat: <T = string>(maxLength: number, ...items: T[]) => T[];
/**<!-- DOCS: ### -->
 * roll
 *
 * - `roll`
 * - `ArrayTools.roll`
 *
 * 'Roll' the array by a given amount so that is has a new first item. Length and contents remain the same, but the order is changed
 *
 * ```typescript
 * ArrayTools.roll(1, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7, 0 ]
 * ArrayTools.roll(4, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 4, 5, 6, 7, 0, 1, 2, 3 ]
 * ```
 */
declare const roll: <T extends unknown>(distance: number, arr: T[]) => T[];
/**<!-- DOCS: ### -->
 * sortNumberedText
 *
 * - `sortNumberedText`
 * - `ArrayTools.sortNumberedText`
 *
 * Alphabetically sorts a list of strings, but keeps multi-digit numbers in numerical order (rather than alphabetical)
 *
 * ```typescript
 * const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
 * names.sort(); // [ 'foo10', 'foo20', 'foo9', 'name1', 'name10', 'name2' ]
 * ArrayTools.sortNumberedText(names); // [ 'foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10' ]
 * ```
 */
declare const sortNumberedText: (texts: string[], ignoreCase?: boolean) => string[];
/**<!-- DOCS: ### -->
 * partition
 *
 * - `partition`
 * - `ArrayTools.partition`
 *
 * Breaks an array into smaller arrays of a given size
 *
 * ```typescript
 * ArrayTools.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
 * ```
 */
declare const partition: <T extends unknown>(array: T[], partitionSize?: number) => T[][];
/**<!-- DOCS: ### -->
 * groupObj
 *
 * - `groupObj`
 * - `ArrayTools.groupObj`
 *
 * Group items from an array into an object of arrays, based on a given map function.
 *
 * ```typescript
 * const arr = [
 *   { group: 1, name: 'a' },
 *   { group: 2, name: 'b' },
 *   { group: 1, name: 'c' },
 * ];
 * ArrayTools.groupObj(arr, item => item.id); // {
 * //   1: [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
 * //   2: [ { group: 2, name: 'b' } ]
 * // }
 * ```
 */
declare const groupObj: <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number) => {
    [id: string]: T[];
    [id: number]: T[];
};
/**<!-- DOCS: ### -->
 * group
 *
 * - `group`
 * - `ArrayTools.group`
 *
 * Group items from an array into an array of arrays, based on a given map function.
 *
 * ```typescript
 * const arr = [
 *   { group: 1, name: 'a' },
 *   { group: 2, name: 'b' },
 *   { group: 1, name: 'c' },
 * ];
 * ArrayTools.groupObj(arr, item => item.id); // [
 * //   [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
 * //   [ { group: 2, name: 'b' } ]
 * // ]
 * ```
 */
declare const group: <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number) => T[][];
declare const ArrayTools: {
    range: (length?: number, multiplier?: number, offset?: number) => number[];
    zip: <T extends any[]>(...arrs: T) => UnwrapArrays<T>[];
    zipMax: <T_1 extends any[]>(...arrs: T_1) => UnwrapArrays<T_1>[];
    sortByMapped: <T_2 = string, M = number>(arr: T_2[], mapFn: (value: T_2, index: number, array: T_2[]) => M, sortFn?: (a: M, b: M) => number) => T_2[];
    randomise: <T_3 = string>(arr: T_3[]) => T_3[];
    reverse: <T_4 = string>(arr: T_4[]) => T_4[];
    entries: <T_5 = string>(arr: T_5[]) => [number, T_5][];
    repeat: <T_6 = string>(maxLength: number, ...items: T_6[]) => T_6[];
    roll: <T_7 extends unknown>(distance: number, arr: T_7[]) => T_7[];
    sortNumberedText: (texts: string[], ignoreCase?: boolean) => string[];
    partition: <T_8 extends unknown>(array: T_8[], partitionSize?: number) => T_8[][];
    groupObj: <T_9 extends unknown>(array: T_9[], mapFn: (item: T_9, index: number, arr: T_9[]) => string | number) => {
        [id: string]: T_9[];
        [id: number]: T_9[];
    };
    group: <T_10 extends unknown>(array: T_10[], mapFn: (item: T_10, index: number, arr: T_10[]) => string | number) => T_10[][];
    Tools: {
        isNumString: (text: string) => boolean;
        partitionNums: (ignoreCase: boolean) => (name: string) => (string | number)[];
    };
};

declare const ObjectTools: {
    remodel: <T extends Object = Object, V extends unknown = any, W extends unknown = any, O extends unknown = OfType<T, W>>(obj: T, func: (entries: [string, V][]) => [string, W][]) => O;
    remodelEach: <T_1 extends Object = Object, V_1 extends unknown = any, W_1 extends unknown = any, O_1 extends unknown = OfType<T_1, W_1>>(obj: T_1, func: (entry: [string, V_1], index: number, entries: [string, V_1][]) => [string, W_1]) => O_1;
    map: <T_2 extends Object, V_2 extends unknown, W_2 extends unknown>(obj: T_2, func: (key: string, value: V_2, index: number) => [string, W_2]) => OfType<T_2, W_2>;
    mapValues: <T_3 extends Object, V_3 extends unknown, W_3 extends unknown>(obj: T_3, func: (key: string, value: V_3, index: number) => W_3) => OfType<T_3, W_3>;
    mapKeys: <T_4 extends Object, V_4 extends unknown>(obj: T_4, func: (key: string, value: V_4, index: number) => string) => T_4;
    filter: <T_5 extends Object, V_5 extends unknown, O_2 extends Partial<T_5>>(obj: T_5, func: (key: string, value: V_5, index: number) => boolean) => O_2;
    clean: <T_6 extends Object, O_3 extends Partial<T_6>>(obj: T_6) => O_3;
};

declare const TimeTools: {
    toReadableDuration: (duration: ms, longNames?: boolean, maxUnits?: number) => string;
};

/**<!-- DOCS: ## -->
 * symbols
 *
 * - `symbols`
 *
 * A series of characters that can be used for display symbols
 *
 * | Name                    |                                   | Symbol |
 * | :---------------------- | :-------------------------------- | :----: |
 * | TAB                     | `symbols.TAB`                     |  ` `   |
 * | TICK                    | `symbols.TICK`                    |   ✔    |
 * | CROSS                   | `symbols.CROSS`                   |   ✖    |
 * | PLUS                    | `symbols.PLUS`                    |   +    |
 * | MINUS                   | `symbols.MINUS`                   |   -    |
 * | TIMES                   | `symbols.TIMES`                   |   ×    |
 * | DIVIDE                  | `symbols.DIVIDE`                  |   ÷    |
 * | ELLIPSIS                | `symbols.ELLIPSIS`                |   …    |
 * | BULLET                  | `symbols.BULLET`                  |   •    |
 * | EJECT                   | `symbols.EJECT`                   |   ⏏    |
 * | TILDE                   | `symbols.TILDE`                   |   ~    |
 * | HOME                    | `symbols.HOME`                    |   ~    |
 * | CHEV_LFT                | `symbols.CHEV_LFT`                |   ‹    |
 * | CHEV_RGT                | `symbols.CHEV_RGT`                |   ›    |
 * | TRI_UPP                 | `symbols.TRI_UPP`                 |   ▲    |
 * | TRI_DWN                 | `symbols.TRI_DWN`                 |   ▼    |
 * | TRI_RGT                 | `symbols.TRI_RGT`                 |   ▶    |
 * | TRI_LFT                 | `symbols.TRI_LFT`                 |   ◀    |
 * | ARROW_UPP               | `symbols.ARROW_UPP`               |   ↑    |
 * | ARROW_DWN               | `symbols.ARROW_DWN`               |   ↓    |
 * | ARROW_RGT               | `symbols.ARROW_RGT`               |   →    |
 * | ARROW_LFT               | `symbols.ARROW_LFT`               |   ←    |
 * | ARROW_UPP_RGT           | `symbols.ARROW_UPP_RGT`           |   ↗    |
 * | ARROW_DWN_RGT           | `symbols.ARROW_DWN_RGT`           |   ↘    |
 * | ARROW_DWN_LFT           | `symbols.ARROW_DWN_LFT`           |   ↙    |
 * | ARROW_UPP_LFT           | `symbols.ARROW_UPP_LFT`           |   ↖    |
 * | ARROW_STILL             | `symbols.ARROW_STILL`             |   •    |
 * | ARROW_FLIP_H            | `symbols.ARROW_FLIP_H`            |   ↔    |
 * | ARROW_FLIP_V            | `symbols.ARROW_FLIP_V`            |   ↕    |
 * | ARROW_ROTATE_UPP        | `symbols.ARROW_ROTATE_UPP`        |   ⤴    |
 * | ARROW_ROTATE_DWN        | `symbols.ARROW_ROTATE_DWN`        |   ⤵    |
 * | ARROW_ROTATE_LFT        | `symbols.ARROW_ROTATE_LFT`        |   ⤶    |
 * | ARROW_ROTATE_RGT        | `symbols.ARROW_ROTATE_RGT`        |   ⤷    |
 * | ARROW_ROTATE_CLOCK      | `symbols.ARROW_ROTATE_CLOCK`      |   ↻    |
 * | ARROW_ROTATE_ANTI_CLOCK | `symbols.ARROW_ROTATE_ANTI_CLOCK` |   ↺    |
 * | FRACTION_1_4            | `symbols.FRACTION_1_4`            |   ¼    |
 * | FRACTION_1_2            | `symbols.FRACTION_1_2`            |   ½    |
 * | FRACTION_3_4            | `symbols.FRACTION_3_4`            |   ¾    |
 * | SUPERSCRIPT             | `symbols.SUPERSCRIPT['1']`        |   ¹    |
 * |                         | `symbols.SUPERSCRIPT['2']`        |   ²    |
 * |                         | `symbols.SUPERSCRIPT['3']`        |   ³    |
 * |                         | `symbols.SUPERSCRIPT['4']`        |   ⁴    |
 * |                         | `symbols.SUPERSCRIPT['5']`        |   ⁵    |
 * |                         | `symbols.SUPERSCRIPT['6']`        |   ⁶    |
 * |                         | `symbols.SUPERSCRIPT['7']`        |   ⁷    |
 * |                         | `symbols.SUPERSCRIPT['8']`        |   ⁸    |
 * |                         | `symbols.SUPERSCRIPT['9']`        |   ⁹    |
 * |                         | `symbols.SUPERSCRIPT['0']`        |   ⁰    |
 * |                         | `symbols.SUPERSCRIPT['-']`        |   ⁻    |
 * |                         | `symbols.SUPERSCRIPT['+']`        |   ⁺    |
 * |                         | `symbols.SUPERSCRIPT['=']`        |   ⁼    |
 * |                         | `symbols.SUPERSCRIPT['(']`        |   ⁽    |
 * |                         | `symbols.SUPERSCRIPT[')']`        |   ⁾    |
 * |                         | `symbols.SUPERSCRIPT['i']`        |   ⁱ    |
 * |                         | `symbols.SUPERSCRIPT['n']`        |   ⁿ    |
 * |                         | `symbols.SUPERSCRIPT['o']`        |   °    |
 * |                         | `symbols.SUPERSCRIPT['*']`        |   °    |
 */
declare const symbols: {
    TAB: string;
    NBSP: string;
    TICK: string;
    CROSS: string;
    PLUS: string;
    MINUS: string;
    TIMES: string;
    DIVIDE: string;
    ELLIPSIS: string;
    BULLET: string;
    EJECT: string;
    TILDE: string;
    HOME: string;
    RADIO_EMPTY: string;
    RADIO_FULL: string;
    CURSOR: string;
    CHEV_LFT: string;
    CHEV_RGT: string;
    CHAIN: string;
    TRI_UPP: string;
    TRI_DWN: string;
    TRI_RGT: string;
    TRI_LFT: string;
    ARROW_UPP: string;
    ARROW_DWN: string;
    ARROW_RGT: string;
    ARROW_LFT: string;
    ARROW_UPP_RGT: string;
    ARROW_DWN_RGT: string;
    ARROW_DWN_LFT: string;
    ARROW_UPP_LFT: string;
    ARROW_STILL: string;
    ARROW_FLIP_H: string;
    ARROW_FLIP_V: string;
    ARROW_ROTATE_UPP: string;
    ARROW_ROTATE_DWN: string;
    ARROW_ROTATE_LFT: string;
    ARROW_ROTATE_RGT: string;
    ARROW_ROTATE_CLOCK: string;
    ARROW_ROTATE_ANTI_CLOCK: string;
    FRACTION_1_4: string;
    FRACTION_1_2: string;
    FRACTION_3_4: string;
    SUPERSCRIPT: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        0: string;
        '-': string;
        '+': string;
        '=': string;
        '(': string;
        ')': string;
        i: string;
        n: string;
        o: string;
        '*': string;
    };
};
/**<!-- DOCS: ### -->
 * superscript
 *
 * - `superscript`
 *
 * Converts a string or number to superscript (where possible)
 *
 * Known superscript characters:
 * `¹²³⁴⁵⁶⁷⁸⁹⁰⁻⁺⁼⁽⁾ⁱⁿ°`
 *
 * Characters without a superscript equivalent will be replaced with a `°`
 *
 * ```typescript
 * superscript(219) // '²¹⁹'
 * superscript(1234567890) // '¹²³⁴⁵⁶⁷⁸⁹⁰'
 * ```
 */
declare const superscript: (num: number | string) => string;

/**<!-- DOCS: ## -->
 * queue
 *
 * A way of managing queues from different parts of the code.
 */
/**<!-- DOCS: ### -->
 * QueueManager
 *
 * - `QueueManager`
 *
 * Allows you to queue up functions to be executed in order.
 *
 * Importantly, it allows you to add to the queue from another part of the code, without needing to access a promise directly.
 *
 * ```typescript
 * const printDocument = async (id: number) => {
 *   // do something
 *   await wait(seconds(5));
 * }
 *
 * const queue = new QueueManager();
 *
 * const start = Date.now();
 *
 * // happening async/concurrently
 * PromiseTools.each(range(5), async (i) => {
 *   await wait(seconds(Math.random() * 1));
 *   console.log(Date.now() - start, ' - trigger:', i, );
 *   await queue.add('printer', () => printDocument(i))
 *   console.log(Date.now() - start, ' - printed:', i);
 * })
 *
 * // Output:
 *
 * // 184 ' - trigger:' 0
 * // 355 ' - trigger:' 2
 * // 435 ' - trigger:' 4
 * // 448 ' - trigger:' 1
 * // 487 ' - trigger:' 3
 * // 5190 ' - printed:' 0
 * // 10195 ' - printed:' 2
 * // 15200 ' - printed:' 4
 * // 20205 ' - printed:' 1
 * // 25208 ' - printed:' 3
 * ```
 */
declare class QueueManager {
    promises: Map<string, Promise<any>>;
    pauseTimes: Map<string, number>;
    defaultPauseTime: number;
    constructor(defaultPauseTime?: number);
    getPromise(id: string): Promise<any>;
    /**<!-- DOCS: #### -->
     * setDefaultPauseTime
     *
     * - `queue.setDefaultPauseTime`
     * - `new QueueManager().setDefaultPauseTime`
     *
     * Sets the default pause time for pauses between queue items.
     */
    setDefaultPauseTime(time: number): void;
    /**<!-- DOCS: #### -->
     * setPauseTime
     *
     * - `queue.setPauseTime`
     * - `new QueueManager().setPauseTime`
     *
     * Sets the pause time for pauses between queue items for the specified queue.
     */
    setPauseTime(id: string, time: number): void;
    /**<!-- DOCS: #### -->
     * add
     *
     * - `queue.add`
     * - `new QueueManager().add`
     *
     * Adds a function to the queue.
     */
    add<T>(id: string, fn: () => Promise<T>): Promise<T>;
    /**<!-- DOCS: #### -->
     * new
     *
     * - `queue.new`
     * - `new QueueManager().new`
     *
     * Creates a new QueueManager instance.
     */
    new(defaultPauseTime?: number): QueueManager;
}
/**<!-- DOCS: ### -->
 * queue
 *
 * - `queue`
 *
 * An instance of QueueManager
 *
 * See QueueManager for more information.
 */
declare const queue: QueueManager;

/**<!-- DOCS: ## -->
 * ColourTools
 *
 * A collection of functions for working with colours.
 */
/**<!-- DOCS: ### -->
 * ColourValues
 *
 * - `ColourTools.ColourValues`
 *
 * A type with 3 numbers:
 * - red [0-255]
 * - green [0-255]
 * - blue [0-255]
 */
declare type ColourValues = [number, number, number];
/**<!-- DOCS: ### -->
 * HSLValues
 *
 * - `ColourTools.HSLValues`
 *
 * A type with 3 numbers:
 * - hue [0-360]
 * - saturation [0-100]
 * - lightness [0-100]
 */
declare type HSLValues = [number, number, number];
/**<!-- DOCS: ### -->
 * namedColours
 *
 * - `ColourTools.namedColours`
 *
 * A dictionary of different colour names and their RGB values
 *
 * ```typescript
 * ColourTools.namedColours.blue // [0, 0, 255]
 * ColourTools.namedColours.red // [255, 0, 0]
 * ColourTools.namedColours.green // [0, 255, 0]
 *
 * ColourTools.namedColours.azure // [240, 255, 255]
 * ColourTools.namedColours.darkorange // [255, 140, 0]
 * ColourTools.namedColours.dodgerblue // [30, 144, 255]
 * ```
 */
declare const namedColours: {
    aliceblue: number[];
    antiquewhite: number[];
    aqua: number[];
    aquamarine: number[];
    azure: number[];
    beige: number[];
    bisque: number[];
    black: number[];
    blanchedalmond: number[];
    blue: number[];
    blueviolet: number[];
    brown: number[];
    burlywood: number[];
    cadetblue: number[];
    chartreuse: number[];
    chocolate: number[];
    coral: number[];
    cornflowerblue: number[];
    cornsilk: number[];
    crimson: number[];
    cyan: number[];
    darkblue: number[];
    darkcyan: number[];
    darkgoldenrod: number[];
    darkgray: number[];
    darkgreen: number[];
    darkgrey: number[];
    darkkhaki: number[];
    darkmagenta: number[];
    darkolivegreen: number[];
    darkorange: number[];
    darkorchid: number[];
    darkred: number[];
    darksalmon: number[];
    darkseagreen: number[];
    darkslateblue: number[];
    darkslategray: number[];
    darkslategrey: number[];
    darkturquoise: number[];
    darkviolet: number[];
    deeppink: number[];
    deepskyblue: number[];
    dimgray: number[];
    dimgrey: number[];
    dodgerblue: number[];
    firebrick: number[];
    floralwhite: number[];
    forestgreen: number[];
    fractal: number[];
    fuchsia: number[];
    gainsboro: number[];
    ghostwhite: number[];
    gold: number[];
    goldenrod: number[];
    gray0: number[];
    gray1: number[];
    gray2: number[];
    gray3: number[];
    gray4: number[];
    gray5: number[];
    gray6: number[];
    gray7: number[];
    gray8: number[];
    gray9: number[];
    gray10: number[];
    gray11: number[];
    gray12: number[];
    gray13: number[];
    gray14: number[];
    gray15: number[];
    gray16: number[];
    gray17: number[];
    gray18: number[];
    gray19: number[];
    gray20: number[];
    gray21: number[];
    gray22: number[];
    gray23: number[];
    gray24: number[];
    gray25: number[];
    gray26: number[];
    gray27: number[];
    gray28: number[];
    gray29: number[];
    gray30: number[];
    gray31: number[];
    gray32: number[];
    gray33: number[];
    gray34: number[];
    gray35: number[];
    gray36: number[];
    gray37: number[];
    gray38: number[];
    gray39: number[];
    gray40: number[];
    gray41: number[];
    gray42: number[];
    gray43: number[];
    gray44: number[];
    gray45: number[];
    gray46: number[];
    gray47: number[];
    gray48: number[];
    gray49: number[];
    gray50: number[];
    gray51: number[];
    gray52: number[];
    gray53: number[];
    gray54: number[];
    gray55: number[];
    gray56: number[];
    gray57: number[];
    gray58: number[];
    gray59: number[];
    gray60: number[];
    gray61: number[];
    gray62: number[];
    gray63: number[];
    gray64: number[];
    gray65: number[];
    gray66: number[];
    gray67: number[];
    gray68: number[];
    gray69: number[];
    gray70: number[];
    gray71: number[];
    gray72: number[];
    gray73: number[];
    gray74: number[];
    gray75: number[];
    gray76: number[];
    gray77: number[];
    gray78: number[];
    gray79: number[];
    gray80: number[];
    gray81: number[];
    gray82: number[];
    gray83: number[];
    gray84: number[];
    gray85: number[];
    gray86: number[];
    gray87: number[];
    gray88: number[];
    gray89: number[];
    gray90: number[];
    gray91: number[];
    gray92: number[];
    gray93: number[];
    gray94: number[];
    gray95: number[];
    gray96: number[];
    gray97: number[];
    gray98: number[];
    gray99: number[];
    gray100: number[];
    gray: number[];
    green: number[];
    greenyellow: number[];
    grey: number[];
    honeydew: number[];
    hotpink: number[];
    indianred: number[];
    indigo: number[];
    ivory: number[];
    khaki: number[];
    lavender: number[];
    lavenderblush: number[];
    lawngreen: number[];
    lemonchiffon: number[];
    lightblue: number[];
    lightcoral: number[];
    lightcyan: number[];
    lightgoldenrodyellow: number[];
    lightgray: number[];
    lightgreen: number[];
    lightgrey: number[];
    lightpink: number[];
    lightsalmon: number[];
    lightseagreen: number[];
    lightskyblue: number[];
    lightslategray: number[];
    lightslategrey: number[];
    lightsteelblue: number[];
    lightyellow: number[];
    lime: number[];
    limegreen: number[];
    linen: number[];
    magenta: number[];
    maroon: number[];
    mediumaquamarine: number[];
    mediumblue: number[];
    mediumorchid: number[];
    mediumpurple: number[];
    mediumseagreen: number[];
    mediumslateblue: number[];
    mediumspringgreen: number[];
    mediumturquoise: number[];
    mediumvioletred: number[];
    midnightblue: number[];
    mintcream: number[];
    mistyrose: number[];
    moccasin: number[];
    navajowhite: number[];
    navy: number[];
    none: number[];
    oldlace: number[];
    olive: number[];
    olivedrab: number[];
    orange: number[];
    orangered: number[];
    orchid: number[];
    palegoldenrod: number[];
    palegreen: number[];
    paleturquoise: number[];
    palevioletred: number[];
    papayawhip: number[];
    peachpuff: number[];
    peru: number[];
    pink: number[];
    plum: number[];
    powderblue: number[];
    purple: number[];
    red: number[];
    rosybrown: number[];
    royalblue: number[];
    saddlebrown: number[];
    salmon: number[];
    sandybrown: number[];
    seagreen: number[];
    seashell: number[];
    sienna: number[];
    silver: number[];
    skyblue: number[];
    slateblue: number[];
    slategray: number[];
    slategrey: number[];
    snow: number[];
    springgreen: number[];
    steelblue: number[];
    tan: number[];
    teal: number[];
    thistle: number[];
    tomato: number[];
    turquoise: number[];
    violet: number[];
    wheat: number[];
    white: number[];
    whitesmoke: number[];
    yellow: number[];
    yellowgreen: number[];
};
/**<!-- DOCS: ### -->
 * parse
 *
 * - `ColourTools.parse`
 *
 * Parse a string into a colour object (RGB array)
 * Not extensive. Currently limited to:
 * - 3 char hexes
 * - 6 char hexes
 * - comma separated RGB values
 * - named colours (from namedColours dictionary)
 *
 * ```typescript
 * ColourTools.parse('#FF0000') // [255, 0, 0]
 * ColourTools.parse('rgb(255, 0, 0)') // [255, 0, 0]
 * ColourTools.parse('red') // [255, 0, 0]
 * ```
 */
declare const parse: (input: string) => ColourValues;
/**<!-- DOCS: ### -->
 * toHex
 *
 * - `ColourTools.toHex`
 *
 * Convert a colour object (RGB array) to a hex string
 *
 * ```typescript
 * ColourTools.toHex([255, 0, 0]) // '#FF0000'
 * ```
 */
declare const toHex: (colour: ColourValues) => string;
/**<!-- DOCS: ### -->
 * getLuminance
 *
 * - `ColourTools.getLuminance`
 *
 * IMPORTANT: This is not the same as the HSL luminance value.
 *
 * Get the luminance value of a given colour.
 *
 * Between 0 and 255. Calculated using the formula:
 *  (RED × 0.299) + (GREEN × 0.587) + (BLUE × 0.114)
 *
 * Is the Y (Luma) component of the YUV444 color model.
 *
 * ```typescript
 * ColourTools.getLuminance([255, 0, 0]); // 76.245
 * ColourTools.getLuminance([0, 255, 0]); // 149.685
 * ColourTools.getLuminance([0, 0, 255]); // 29.07
 * ```
 */
declare const getLuminance: ([r, g, b]: ColourValues) => number;
/**<!-- DOCS: ### -->
 * toYUV
 *
 * - `ColourTools.toYUV`
 *
 * Convert a colour object (RGB array) to a YUV array.
 *
 * See https://en.wikipedia.org/wiki/YUV#Y%E2%80%B2UV444_to_RGB888_conversion
 *
 * ```typescript
 * ColourTools.toYUV([255, 0, 0]); // [76.245, 112.439, -38.094]
 * ```
 */
declare const toYUV: ([r, g, b]: ColourValues) => ColourValues;
/**<!-- DOCS: ### -->
 * toHSL
 *
 * - `ColourTools.toHSL`
 *
 * Convert a RGB array to a HSL array.
 *
 * Adapted from https://www.30secondsofcode.org/js/s/rgb-to-hsl
 *
 * ```typescript
 * ColourTools.toHSL([255, 0, 0]); // [0, 100, 50]
 * ColourTools.toHSL([0, 255, 0]); // [120, 100, 50]
 * ```
 */
declare const toHSL: (colour: ColourValues, round?: boolean) => HSLValues;
/**<!-- DOCS: ### -->
 * fromHSL
 *
 * - `ColourTools.fromHSL`
 *
 * Convert a HSL array to a RGB array.
 *
 * Adapted from https://www.30secondsofcode.org/js/s/hsl-to-rgb
 *
 * ```typescript
 * ColourTools.fromHSL([0, 100, 50]); // [255, 0, 0]
 * ColourTools.fromHSL([120, 100, 50]); // [0, 255, 0]
 * ```
 */
declare const fromHSL: (hsl: HSLValues, round?: boolean) => ColourValues;
/**<!-- DOCS: ### -->
 * invertColour
 *
 * - `ColourTools.invertColour`
 *
 * Get the opposite colour of a given colour.
 *
 * ```typescript
 * ColourTools.invertColour([255, 0, 0]); // [0, 255, 255]
 * ColourTools.invertColour([0, 255, 0]); // [ 255, 0, 255 ]
 * ColourTools.invertColour([0, 0, 255]); // [ 255, 255, 0 ]
 * ```
 */
declare const invertColour: ([r, g, b]: ColourValues) => ColourValues;
/**<!-- DOCS: ### -->
 * getContrastedColour
 *
 * - `ColourTools.getContrastedColour`
 *
 * Get the colour that contrasts the most with a given colour. (White or black)
 *
 * Returned colour can be used as a text colour on top of the provided colour
 *
 * ```typescript
 * ColourTools.getContrastedColour([255, 0, 0]); // [255, 255, 255]
 * ColourTools.getContrastedColour([255, 255, 0]); // [0, 0, 0]
 * ```
 */
declare const getContrastedColour: (colour: ColourValues) => ColourValues;
/**<!-- DOCS: ### -->
 * getLimitedColour
 *
 * - `ColourTools.getLimitedColour`
 *
 * Adjust a colour if a certain condition is met.
 * Used for lightening/darkening colours that are too light/dark
 *
 * All values in functions are HSL
 *
 * ```typescript
 * ColourTools.getLimitedColour([255, 255, 255], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 230, 230, 230 ]
 * ColourTools.getLimitedColour([128, 128, 128], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 128, 128, 128 ]
 * ```
 */
declare const getLimitedColour: (colour: ColourValues, checkFn: (hsl: HSLValues) => boolean, adjustFn: (hsl: HSLValues) => HSLValues) => ColourValues;

type ColourTools_ColourValues = ColourValues;
type ColourTools_HSLValues = HSLValues;
declare const ColourTools_namedColours: typeof namedColours;
declare const ColourTools_parse: typeof parse;
declare const ColourTools_toHex: typeof toHex;
declare const ColourTools_getLuminance: typeof getLuminance;
declare const ColourTools_toYUV: typeof toYUV;
declare const ColourTools_toHSL: typeof toHSL;
declare const ColourTools_fromHSL: typeof fromHSL;
declare const ColourTools_invertColour: typeof invertColour;
declare const ColourTools_getContrastedColour: typeof getContrastedColour;
declare const ColourTools_getLimitedColour: typeof getLimitedColour;
declare namespace ColourTools {
  export {
    ColourTools_ColourValues as ColourValues,
    ColourTools_HSLValues as HSLValues,
    ColourTools_namedColours as namedColours,
    ColourTools_parse as parse,
    ColourTools_toHex as toHex,
    ColourTools_getLuminance as getLuminance,
    ColourTools_toYUV as toYUV,
    ColourTools_toHSL as toHSL,
    ColourTools_fromHSL as fromHSL,
    ColourTools_invertColour as invertColour,
    ColourTools_getContrastedColour as getContrastedColour,
    ColourTools_getLimitedColour as getLimitedColour,
  };
}

/**<!-- DOCS: ## -->
 * StringTools
 *
 * A collection of string utilities
 */
/**<!-- DOCS: ### -->
 * capitalise
 *
 * - `StringTools.capitalise`
 *
 * Capitalises the first letter of each word in a string
 *
 * ```typescript
 * StringTools.capitalise('hello world'); // 'Hello World'
 * ```
 */
declare const capitalise: (input?: string) => string;
/**<!-- DOCS: ### -->
 * angloise
 *
 * - `StringTools.angloise`
 *
 * Remove accents from a string
 *
 * ```typescript
 * StringTools.angloise('éèêë'); // 'eeee'
 * ```
 */
declare const angloise: (input: string) => string;
/**<!-- DOCS: ### -->
 * clean
 *
 * - `StringTools.clean`
 *
 * Remove accents and non alphanumerics from a string
 *
 * ```typescript
 * StringTools.clean('éèêë_--ab0'); // 'eeeeab0'
 * ```
 */
declare const clean: (input?: string) => string;
declare type CaseInput = string | string[];
/**<!-- DOCS: ### -->
 * StringCaseHandler
 */
interface StringCaseHandler {
    /**<!-- DOCS: #### -->
     * toLowerCamelCase
     *
     * - `StringTools.toLowerCamelCase`
     * - `StringTools.fromSlugCase.toLowerCamelCase`
     * - `StringTools.fromSnakeCase.toLowerCamelCase`
     * - `StringTools.fromSpaced.toLowerCamelCase`
     * - `StringTools.fromCamelCase.toLowerCamelCase`
     *
     * Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)
     */
    toLowerCamelCase(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toUpperCamelCase
     *
     * - `StringTools.toUpperCamelCase`
     * - `StringTools.fromSlugCase.toUpperCamelCase`
     * - `StringTools.fromSnakeCase.toUpperCamelCase`
     * - `StringTools.fromSpaced.toUpperCamelCase`
     * - `StringTools.fromCamelCase.toUpperCamelCase`
     *
     * Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)
     */
    toUpperCamelCase(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toCamelCase
     *
     * - `StringTools.toCamelCase`
     * - `StringTools.fromSlugCase.toCamelCase`
     * - `StringTools.fromSnakeCase.toCamelCase`
     * - `StringTools.fromSpaced.toCamelCase`
     * - `StringTools.fromCamelCase.toCamelCase`
     *
     * Convert a string to camel case (e.g. `thisIsCamelCase`)
     */
    toCamelCase(input: CaseInput, capitaliseFirst?: boolean): string;
    /**<!-- DOCS: #### -->
     * toLowerSlugCase
     *
     * - `StringTools.toLowerSlugCase`
     * - `StringTools.fromSlugCase.toLowerSlugCase`
     * - `StringTools.fromSnakeCase.toLowerSlugCase`
     * - `StringTools.fromSpaced.toLowerSlugCase`
     * - `StringTools.fromCamelCase.toLowerSlugCase`
     *
     * Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)
     */
    toLowerSlugCase(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toUpperSlugCase
     *
     * - `StringTools.toUpperSlugCase`
     * - `StringTools.fromSlugCase.toUpperSlugCase`
     * - `StringTools.fromSnakeCase.toUpperSlugCase`
     * - `StringTools.fromSpaced.toUpperSlugCase`
     * - `StringTools.fromCamelCase.toUpperSlugCase`
     *
     * Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)
     */
    toUpperSlugCase(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toSlugCase
     *
     * - `StringTools.toSlugCase`
     * - `StringTools.fromSlugCase.toSlugCase`
     * - `StringTools.fromSnakeCase.toSlugCase`
     * - `StringTools.fromSpaced.toSlugCase`
     * - `StringTools.fromCamelCase.toSlugCase`
     *
     * Convert a string to camel case (e.g. `this-is-slug-case`)
     */
    toSlugCase(input: CaseInput, toUpper?: boolean): string;
    /**<!-- DOCS: #### -->
     * toLowerSnakeCase
     *
     * - `StringTools.toLowerSnakeCase`
     * - `StringTools.fromSlugCase.toLowerSnakeCase`
     * - `StringTools.fromSnakeCase.toLowerSnakeCase`
     * - `StringTools.fromSpaced.toLowerSnakeCase`
     * - `StringTools.fromCamelCase.toLowerSnakeCase`
     *
     * Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)
     */
    toLowerSnakeCase(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toUpperSnakeCase
     *
     * - `StringTools.toUpperSnakeCase`
     * - `StringTools.fromSlugCase.toUpperSnakeCase`
     * - `StringTools.fromSnakeCase.toUpperSnakeCase`
     * - `StringTools.fromSpaced.toUpperSnakeCase`
     * - `StringTools.fromCamelCase.toUpperSnakeCase`
     *
     * Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)
     */
    toUpperSnakeCase(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toSnakeCase
     *
     * - `StringTools.toSnakeCase`
     * - `StringTools.fromSlugCase.toSnakeCase`
     * - `StringTools.fromSnakeCase.toSnakeCase`
     * - `StringTools.fromSpaced.toSnakeCase`
     * - `StringTools.fromCamelCase.toSnakeCase`
     *
     * Convert a string to snake case (e.g. `this_is_snake_case`)
     */
    toSnakeCase(input: CaseInput, toUpper?: boolean): string;
    /**<!-- DOCS: #### -->
     * toLowerSpaced
     *
     * - `StringTools.toLowerSpaced`
     * - `StringTools.fromSlugCase.toLowerSpaced`
     * - `StringTools.fromSnakeCase.toLowerSpaced`
     * - `StringTools.fromSpaced.toLowerSpaced`
     * - `StringTools.fromCamelCase.toLowerSpaced`
     *
     * Convert a string to lower spaced case (e.g. `this is lower spaced case`)
     */
    toLowerSpaced(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toUpperSpaced
     *
     * - `StringTools.toUpperSpaced`
     * - `StringTools.fromSlugCase.toUpperSpaced`
     * - `StringTools.fromSnakeCase.toUpperSpaced`
     * - `StringTools.fromSpaced.toUpperSpaced`
     * - `StringTools.fromCamelCase.toUpperSpaced`
     *
     * Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)
     */
    toUpperSpaced(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toCapitalisedSpaced
     *
     * - `StringTools.toCapitalisedSpaced`
     * - `StringTools.fromSlugCase.toCapitalisedSpaced`
     * - `StringTools.fromSnakeCase.toCapitalisedSpaced`
     * - `StringTools.fromSpaced.toCapitalisedSpaced`
     * - `StringTools.fromCamelCase.toCapitalisedSpaced`
     *
     * Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)
     */
    toCapitalisedSpaced(input: CaseInput): string;
    /**<!-- DOCS: #### -->
     * toSpaced
     *
     * - `StringTools.toSpaced`
     * - `StringTools.fromSlugCase.toSpaced`
     * - `StringTools.fromSnakeCase.toSpaced`
     * - `StringTools.fromSpaced.toSpaced`
     * - `StringTools.fromCamelCase.toSpaced`
     *
     * Convert a string to spaced case (e.g. `this is spaced case`)
     */
    toSpaced(input: CaseInput, toUpper?: boolean): string;
    /**<!-- DOCS: #### -->
     * toCharacterSeparated
     *
     * - `StringTools.toCharacterSeparated`
     * - `StringTools.fromSlugCase.toCharacterSeparated`
     * - `StringTools.fromSnakeCase.toCharacterSeparated`
     * - `StringTools.fromSpaced.toCharacterSeparated`
     * - `StringTools.fromCamelCase.toCharacterSeparated`
     *
     * Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)
     */
    toCharacterSeparated(input: CaseInput, char: string, toUpper?: boolean): string;
}
declare const toLowerCamelCase: (input: CaseInput) => string;
declare const toUpperCamelCase: (input: CaseInput) => string;
declare const toCamelCase: (input: CaseInput, capitaliseFirst?: boolean) => string;
declare const toLowerSlugCase: (input: CaseInput) => string;
declare const toUpperSlugCase: (input: CaseInput) => string;
declare const toSlugCase: (input: CaseInput, toUpper?: boolean) => string;
declare const toLowerSnakeCase: (input: CaseInput) => string;
declare const toUpperSnakeCase: (input: CaseInput) => string;
declare const toSnakeCase: (input: CaseInput, toUpper?: boolean) => string;
declare const toLowerSpaced: (input: CaseInput) => string;
declare const toUpperSpaced: (input: CaseInput) => string;
declare const toCapitalisedSpaced: (input: CaseInput) => string;
declare const toSpaced: (input: CaseInput, toUpper?: boolean) => string;
declare const toCharacterSeparated: (input: CaseInput, char: string, toUpper?: boolean) => string;
/**<!-- DOCS: ### -->
 * fromSlugCase
 *
 * Has the following methods:
 * - `StringTools.fromSlugCase.toLowerCamelCase`
 * - `StringTools.fromSlugCase.toUpperCamelCase`
 * - `StringTools.fromSlugCase.toCamelCase`
 * - `StringTools.fromSlugCase.toLowerSlugCase`
 * - `StringTools.fromSlugCase.toUpperSlugCase`
 * - `StringTools.fromSlugCase.toSlugCase`
 * - `StringTools.fromSlugCase.toLowerSnakeCase`
 * - `StringTools.fromSlugCase.toUpperSnakeCase`
 * - `StringTools.fromSlugCase.toSnakeCase`
 * - `StringTools.fromSlugCase.toLowerSpaced`
 * - `StringTools.fromSlugCase.toUpperSpaced`
 * - `StringTools.fromSlugCase.toCapitalisedSpaced`
 * - `StringTools.fromSlugCase.toSpaced`
 * - `StringTools.fromSlugCase.toCharacterSeparated`
 */
declare const fromSlugCase: StringCaseHandler;
/**<!-- DOCS: ### -->
 * fromSnakeCase
 *
 * Has the following methods:
 * - `StringTools.fromSnakeCase.toLowerCamelCase`
 * - `StringTools.fromSnakeCase.toUpperCamelCase`
 * - `StringTools.fromSnakeCase.toCamelCase`
 * - `StringTools.fromSnakeCase.toLowerSlugCase`
 * - `StringTools.fromSnakeCase.toUpperSlugCase`
 * - `StringTools.fromSnakeCase.toSlugCase`
 * - `StringTools.fromSnakeCase.toLowerSnakeCase`
 * - `StringTools.fromSnakeCase.toUpperSnakeCase`
 * - `StringTools.fromSnakeCase.toSnakeCase`
 * - `StringTools.fromSnakeCase.toLowerSpaced`
 * - `StringTools.fromSnakeCase.toUpperSpaced`
 * - `StringTools.fromSnakeCase.toCapitalisedSpaced`
 * - `StringTools.fromSnakeCase.toSpaced`
 * - `StringTools.fromSnakeCase.toCharacterSeparated`
 */
declare const fromSnakeCase: StringCaseHandler;
/**<!-- DOCS: ### -->
 * fromSpaced
 *
 * Has the following methods:
 * - `StringTools.fromSpaced.toLowerCamelCase`
 * - `StringTools.fromSpaced.toUpperCamelCase`
 * - `StringTools.fromSpaced.toCamelCase`
 * - `StringTools.fromSpaced.toLowerSlugCase`
 * - `StringTools.fromSpaced.toUpperSlugCase`
 * - `StringTools.fromSpaced.toSlugCase`
 * - `StringTools.fromSpaced.toLowerSnakeCase`
 * - `StringTools.fromSpaced.toUpperSnakeCase`
 * - `StringTools.fromSpaced.toSnakeCase`
 * - `StringTools.fromSpaced.toLowerSpaced`
 * - `StringTools.fromSpaced.toUpperSpaced`
 * - `StringTools.fromSpaced.toCapitalisedSpaced`
 * - `StringTools.fromSpaced.toSpaced`
 * - `StringTools.fromSpaced.toCharacterSeparated`
 */
declare const fromSpaced: StringCaseHandler;
/**<!-- DOCS: ### -->
 * fromCamelCase
 *
 * Has the following methods:
 * - `StringTools.fromCamelCase.toLowerCamelCase`
 * - `StringTools.fromCamelCase.toUpperCamelCase`
 * - `StringTools.fromCamelCase.toCamelCase`
 * - `StringTools.fromCamelCase.toLowerSlugCase`
 * - `StringTools.fromCamelCase.toUpperSlugCase`
 * - `StringTools.fromCamelCase.toSlugCase`
 * - `StringTools.fromCamelCase.toLowerSnakeCase`
 * - `StringTools.fromCamelCase.toUpperSnakeCase`
 * - `StringTools.fromCamelCase.toSnakeCase`
 * - `StringTools.fromCamelCase.toLowerSpaced`
 * - `StringTools.fromCamelCase.toUpperSpaced`
 * - `StringTools.fromCamelCase.toCapitalisedSpaced`
 * - `StringTools.fromCamelCase.toSpaced`
 * - `StringTools.fromCamelCase.toCharacterSeparated`
 */
declare const fromCamelCase: StringCaseHandler;
declare type ClxType = string | boolean | {
    [key: string]: boolean;
} | ClxType[];
/**<!-- DOCS: ### -->
 * clx
 *
 * - `clx`
 * - `StringTools.clx`
 *
 * Composes a className from a list of strings, conditional objects and arrays.
 *
 * Accepts the different ways of supplying classes in AngularJS (ng-class) and returns a single string (so suitable for React).
 *
 * ```typescript
 * clx('hello') // 'hello'
 * clx('foo', 'bar') // 'foo bar'
 * clx('foo', conditionA && 'bar') // 'foo'
 * clx('abc', conditionB && 'def') // 'abc def'
 * clx({'lorem': conditionA, 'ipsum': conditionB}) // 'ipsum'
 * ```
 */
declare const clx: (...args: ClxType[]) => string;

declare const StringTools_capitalise: typeof capitalise;
declare const StringTools_angloise: typeof angloise;
declare const StringTools_clean: typeof clean;
type StringTools_CaseInput = CaseInput;
type StringTools_StringCaseHandler = StringCaseHandler;
declare const StringTools_toLowerCamelCase: typeof toLowerCamelCase;
declare const StringTools_toUpperCamelCase: typeof toUpperCamelCase;
declare const StringTools_toCamelCase: typeof toCamelCase;
declare const StringTools_toLowerSlugCase: typeof toLowerSlugCase;
declare const StringTools_toUpperSlugCase: typeof toUpperSlugCase;
declare const StringTools_toSlugCase: typeof toSlugCase;
declare const StringTools_toLowerSnakeCase: typeof toLowerSnakeCase;
declare const StringTools_toUpperSnakeCase: typeof toUpperSnakeCase;
declare const StringTools_toSnakeCase: typeof toSnakeCase;
declare const StringTools_toLowerSpaced: typeof toLowerSpaced;
declare const StringTools_toUpperSpaced: typeof toUpperSpaced;
declare const StringTools_toCapitalisedSpaced: typeof toCapitalisedSpaced;
declare const StringTools_toSpaced: typeof toSpaced;
declare const StringTools_toCharacterSeparated: typeof toCharacterSeparated;
declare const StringTools_fromSlugCase: typeof fromSlugCase;
declare const StringTools_fromSnakeCase: typeof fromSnakeCase;
declare const StringTools_fromSpaced: typeof fromSpaced;
declare const StringTools_fromCamelCase: typeof fromCamelCase;
type StringTools_ClxType = ClxType;
declare const StringTools_clx: typeof clx;
declare namespace StringTools {
  export {
    StringTools_capitalise as capitalise,
    StringTools_angloise as angloise,
    StringTools_clean as clean,
    StringTools_CaseInput as CaseInput,
    StringTools_StringCaseHandler as StringCaseHandler,
    StringTools_toLowerCamelCase as toLowerCamelCase,
    StringTools_toUpperCamelCase as toUpperCamelCase,
    StringTools_toCamelCase as toCamelCase,
    StringTools_toLowerSlugCase as toLowerSlugCase,
    StringTools_toUpperSlugCase as toUpperSlugCase,
    StringTools_toSlugCase as toSlugCase,
    StringTools_toLowerSnakeCase as toLowerSnakeCase,
    StringTools_toUpperSnakeCase as toUpperSnakeCase,
    StringTools_toSnakeCase as toSnakeCase,
    StringTools_toLowerSpaced as toLowerSpaced,
    StringTools_toUpperSpaced as toUpperSpaced,
    StringTools_toCapitalisedSpaced as toCapitalisedSpaced,
    StringTools_toSpaced as toSpaced,
    StringTools_toCharacterSeparated as toCharacterSeparated,
    StringTools_fromSlugCase as fromSlugCase,
    StringTools_fromSnakeCase as fromSnakeCase,
    StringTools_fromSpaced as fromSpaced,
    StringTools_fromCamelCase as fromCamelCase,
    StringTools_ClxType as ClxType,
    StringTools_clx as clx,
  };
}

/**<!-- DOCS: ## -->
 * MathsTools
 *
 * A collection of mathematical functions.
 *
 * > Note: The field is 'Mathematics', and so it is 'MathsTools' not ~'MathTools'~
 */
/**<!-- DOCS: ### -->
 * fixFloat
 *
 * - `MathsTools.fixFloat`
 *
 * Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers
 *
 * Can also be used to round numbers to a given precision
 *
 * > Note: It's not a great name, but it's what I've always called it, so I'm sticking with it. May create an alias
 *
 * ```typescript
 * 0.1 + 0.2 // 0.30000000000000004
 * MathsTools.fixFloat(0.1 + 0.2) // 0.3
 * ```
 */
declare const fixFloat: (num: number, precision?: number) => number;
/**<!-- DOCS: ### -->
 * addAll
 *
 * - `MathsTools.addAll`
 *
 * Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max
 *
 * ```typescript
 * MathsTools.addAll(1, 2, 3, 4, 5); // 15
 * ```
 */
declare const addAll: (...args: number[]) => number;
/**<!-- DOCS: ### -->
 * round
 */
/**<!-- DOCS: #### -->
 * floorTo
 *
 * - `MathsTools.floorTo`
 * - `MathsTools.round.floorTo`
 *
 * Floors a number down to the nearest multiple of the given number.
 *
 * ```typescript
 * MathsTools.round.floorTo(10, 102); // 100
 * MathsTools.round.floorTo(5, 53); // 50
 * MathsTools.round.floorTo(0.1, 0.25); // 0.2
 * ```
 */
declare const floorTo: (to: number, value: number) => number;
/**<!-- DOCS: #### -->
 * roundTo
 *
 * - `MathsTools.round.to`
 * - `MathsTools.roundTo`
 * - `MathsTools.round.roundTo`
 *
 * Floors a number down to the nearest multiple of the given number.
 *
 * ```typescript
 * MathsTools.round.to(10, 102); // 100
 * MathsTools.round.to(5, 53); // 55
 * MathsTools.round.to(0.1, 0.25); // 0.3
 * ```
 */
declare const roundTo: (to: number, value: number) => number;
/**<!-- DOCS: #### -->
 * ceilTo
 *
 * - `MathsTools.ceilTo`
 * - `MathsTools.round.ceilTo`
 *
 * Floors a number down to the nearest multiple of the given number.
 *
 * ```typescript
 * MathsTools.round.ceilTo(10, 102); // 110
 * MathsTools.round.ceilTo(5, 53); // 55
 * MathsTools.round.ceilTo(0.1, 0.25); // 0.3
 * ```
 */
declare const ceilTo: (to: number, value: number) => number;
declare const round: {
    floorTo: (to: number, value: number) => number;
    roundTo: (to: number, value: number) => number;
    ceilTo: (to: number, value: number) => number;
    to: (to: number, value: number) => number;
};
/**<!-- DOCS: ### -->
 * lerp
 *
 * - `MathsTools.lerp`
 *
 * Linearly interpolates between two values.
 *
 * ```typescript
 * MathsTools.lerp(0.5, 0, 10); // 5
 * ```
 */
declare const lerp: (progress: number, fromVal: number, toVal: number) => number;
/**<!-- DOCS: ### -->
 * lerpArray
 *
 * - `MathsTools.lerpArray`
 *
 * Linearly interpolates between the values of 2 arrays.
 *
 * ```typescript
 * MathsTools.lerpArray(0.5, [0, 0, 0], [10, 100, 1000]) // [5, 50, 500]
 * ```
 */
declare const lerpArray: (progress: number, fromArr: number[], toArr: number[]) => number[];
/**<!-- DOCS: ### -->
 * lerpObj
 *
 * - `MathsTools.lerpObj`
 *
 * Linearly interpolates between the values of 2 arrays.
 *
 * ```typescript
 * MathsTools.lerpObj(0.5, {'ARS': 0, 'CHE': 0, 'FUL': 0}, {'ARS': 100, 'CHE': 10, 'FUL': 20}) // {'ARS': 50, 'CHE': 5, 'FUL': 10}
 * ```
 */
declare const lerpObj: <T extends object>(progress: number, fromObj: T, toObj: T) => T;
/**<!-- DOCS: ### -->
 * clamp
 *
 * - `MathsTools.clamp`
 *
 * Clamps a value between a min and max.
 *
 * ```typescript
 * MathsTools.clamp(5, 0, 10); // 5
 * MathsTools.clamp(-5, 0, 10); // 0
 * ```
 */
declare const clamp: (value: number, min: number, max: number) => number;
/**<!-- DOCS: ### -->
 * getOridinal
 *
 * - `MathsTools.getOridinal`
 *
 * Gets the ordinal suffix for a number.
 *
 * ```typescript
 * MathsTools.getOridinal(1); // 'st'
 * MathsTools.getOridinal(2); // 'nd'
 * MathsTools.getOridinal(3); // 'rd'
 * MathsTools.getOridinal(4); // 'th'
 *
 * MathsTools.getOridinal(11); // 'th'
 * MathsTools.getOridinal(12); // 'th'
 * MathsTools.getOridinal(13); // 'th'
 * MathsTools.getOridinal(14); // 'th'
 *
 * MathsTools.getOridinal(21); // 'st'
 * MathsTools.getOridinal(22); // 'nd'
 * MathsTools.getOridinal(23); // 'rd'
 * MathsTools.getOridinal(24); // 'th'
 * ```
 */
declare const getOrdinal: (num?: number) => "th" | "st" | "nd" | "rd";

declare const MathsTools_fixFloat: typeof fixFloat;
declare const MathsTools_addAll: typeof addAll;
declare const MathsTools_floorTo: typeof floorTo;
declare const MathsTools_roundTo: typeof roundTo;
declare const MathsTools_ceilTo: typeof ceilTo;
declare const MathsTools_round: typeof round;
declare const MathsTools_lerp: typeof lerp;
declare const MathsTools_lerpArray: typeof lerpArray;
declare const MathsTools_lerpObj: typeof lerpObj;
declare const MathsTools_clamp: typeof clamp;
declare const MathsTools_getOrdinal: typeof getOrdinal;
declare namespace MathsTools {
  export {
    MathsTools_fixFloat as fixFloat,
    MathsTools_addAll as addAll,
    MathsTools_floorTo as floorTo,
    MathsTools_roundTo as roundTo,
    MathsTools_ceilTo as ceilTo,
    MathsTools_round as round,
    MathsTools_lerp as lerp,
    MathsTools_lerpArray as lerpArray,
    MathsTools_lerpObj as lerpObj,
    MathsTools_clamp as clamp,
    MathsTools_getOrdinal as getOrdinal,
  };
}

/**<!-- DOCS: ## -->
 * fn
 *
 * A collection of useful higher-order functions.
 */
/**<!-- DOCS: ### -->
 * noop
 *
 * - `fn.noop`
 *
 * No operation. Do nothing, return nothing.
 *
 * ```typescript
 * const run = condition ? doSomething : fn.noop;
 * run();
 * ```
 */
declare const noop: () => void;
/**<!-- DOCS: ### -->
 * noact
 *
 * - `fn.noact`
 *
 * No action. Returns the first argument it receives.
 *
 * ```typescript
 * const items = stuff
 *   .map(condition ? mapSomething : fn.noact)
 * ```
 */
declare const noact: <T = any>(item: T) => T;
/**<!-- DOCS: ### -->
 * result
 *
 * - `fn.result`
 *
 * Returns a function that returns a function that returns the first argument.
 *
 * ```typescript
 * const items = stuff
 *   .filter(condition ? mapSomething : fn.result(true))
 * ```
 */
declare const result: <T = any>(item: T) => () => T;
/**<!-- DOCS: ### -->
 * resolve
 *
 * - `fn.resolve`
 *
 * Returns an async function that resolves to the first argument
 *
 * Like fn.result, but wrapped in a Promise
 */
declare const resolve: <T = any>(item: T) => () => Promise<T>;
/**<!-- DOCS: ### -->
 * reject
 *
 * - `fn.reject`
 *
 * Returns an async function that rejects with the first argument
 */
declare const reject: <T = any>(item: T) => () => Promise<T>;
/**<!-- DOCS: ### -->
 * filters
 */
/**<!-- DOCS: #### -->
 * exists
 *
 * - `fn.exists`
 * - `fn.filters.exists`
 *
 * Returns true if item isn't null or undefined.
 *
 * ```typescript
 * [null, 1, undefined, 2].filter(fn.exists); // [1, 2]
 * ```
 */
declare const exists: <T = any>(item: T) => boolean;
/**<!-- DOCS: #### -->
 * isTruthy
 *
 * - `fn.isTruthy`
 * - `fn.filters.isTruthy`
 *
 * Returns true if item is truthy.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isTruthy); // [1, 2]
 * ['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
 * ```
 */
declare const isTruthy: <T = any>(item: T) => boolean;
/**<!-- DOCS: #### -->
 * isFalsy
 *
 * - `fn.isFalsy`
 * - `fn.filters.isFalsy`
 *
 * Returns true if item is falsy.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isFalsy); // [0]
 * ['', 'a', 'b'].filter(fn.isFalsy); // ['']
 * ```
 */
declare const isFalsy: <T = any>(item: T) => boolean;
/**<!-- DOCS: #### -->
 * isEmpty
 *
 * - `fn.isEmpty`
 * - `fn.filters.isEmpty`
 *
 * Returns true if item's length is 0
 *
 * ```typescript
 * ['', 'a', 'b'].filter(fn.isEmpty); // ['']
 * [[], [1], [2]].filter(fn.isEmpty); // [[]]
 * ```
 */
declare const isEmpty: <T = any>(item: string | T[]) => boolean;
/**<!-- DOCS: #### -->
 * isNotEmpty
 *
 * - `fn.isNotEmpty`
 * - `fn.filters.isNotEmpty`
 *
 * Returns true if item's length is 1 or more
 *
 * ```typescript
 * ['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
 * [[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
 * ```
 */
declare const isNotEmpty: <T = any>(item: string | T[]) => boolean;
/**<!-- DOCS: #### -->
 * isEqual
 *
 * - `fn.isEqual`
 * - `fn.filters.isEqual`
 *
 * Returns a function that returns true if the item is equal to provided value.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isEqual(1)); // [1]
 * ```
 */
declare const isEqual: <T = any>(item: T) => (other: T) => boolean;
/**<!-- DOCS: #### -->
 * isNotEqual
 *
 * - `fn.isNotEqual`
 * - `fn.filters.isNotEqual`
 *
 * Returns a function that returns true if the item is not equal to provided value.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
 * ```
 */
declare const isNotEqual: <T = any>(item: T) => (other: T) => boolean;
/**<!-- DOCS: #### -->
 * dedupe
 *
 * - `fn.dedupe`
 * - `fn.filters.dedupe`
 *
 * Removes duplicate items from an array.
 *
 * ```typescript
 * [0, 1, 2, 1, 0].filter(fn.dedupe); // [0, 1, 2]
 * ```
 */
declare const dedupe: <T extends unknown>(item: T, index: number, array: T[]) => boolean;
/**<!-- DOCS: #### -->
 * dedupeMapped
 *
 * - `fn.dedupeMapped`
 * - `fn.filters.dedupeMapped`
 *
 * Removes duplicate items from an array based on a mapped value.
 *
 * ```typescript
 * [2, 4, 6, 8, 10, 12].filter(fn.dedupeMapped((v) => v % 3)); // [ 2, 4, 6 ] (maps to [ 2, 1, 0, 2, 1, 0 ])
 * ```
 */
declare const dedupeMapped: <T extends unknown, U extends unknown>(mapFn: (value: T, index: number, array: T[]) => U) => (item: T, index: number, array: T[]) => boolean;
declare const filters$1: {
    exists: <T = any>(item: T) => boolean;
    isTruthy: <T_1 = any>(item: T_1) => boolean;
    isFalsy: <T_2 = any>(item: T_2) => boolean;
    isEmpty: <T_3 = any>(item: string | T_3[]) => boolean;
    isNotEmpty: <T_4 = any>(item: string | T_4[]) => boolean;
    isEqual: <T_5 = any>(item: T_5) => (other: T_5) => boolean;
    isNotEqual: <T_6 = any>(item: T_6) => (other: T_6) => boolean;
    dedupe: <T_7 extends unknown>(item: T_7, index: number, array: T_7[]) => boolean;
    dedupeMapped: <T_8 extends unknown, U extends unknown>(mapFn: (value: T_8, index: number, array: T_8[]) => U) => (item: T_8, index: number, array: T_8[]) => boolean;
};
/**<!-- DOCS: ### -->
 * maps
 */
/**<!-- DOCS: #### -->
 * toString
 *
 * - `fn.toString`
 * - `fn.maps.toString`
 *
 * Maps the item to a string.
 *
 * ```typescript
 * [0, 1, 2].map(fn.toString); // ['0', '1', '2']
 * ```
 */
declare const toString: <T = any>(item: T) => string;
/**<!-- DOCS: #### -->
 * toNumber
 *
 * - `fn.toNumber`
 * - `fn.maps.toNumber`
 *
 * Maps the item to a number.
 *
 * ```typescript
 * ['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
 * ```
 */
declare const toNumber: <T = any>(item: T) => number;
/**<!-- DOCS: #### -->
 * toBool
 *
 * - `fn.toBool`
 * - `fn.maps.toBool`
 *
 * Maps the item to a boolean.
 *
 * ```typescript
 * [0, 1, 2].map(fn.toBool); // [false, true, true]
 * ['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
 * ```
 */
declare const toBool: <T = any>(item: T) => boolean;
/**<!-- DOCS: #### -->
 * toProp
 *
 * - `fn.toProp`
 * - `fn.maps.toProp`
 *
 * Maps the item to a given property of the item
 *
 * ```typescript
 * [{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
 * ```
 */
declare const toProp: <P = string, O = Object>(prop: string) => (item: O) => P;
/**<!-- DOCS: #### -->
 * toFixed
 *
 * - `fn.toFixed`
 * - `fn.maps.toFixed`
 *
 * Map the items (numbers) of an array to a fixed precision.
 *
 * ```typescript
 * [1.234, 5.678, 9.012].map(fn.toFixed(2)); // [1.23, 5.68, 9.01]
 * ```
 */
declare const toFixed: (precision: number) => (num: number) => number;
declare const maps$1: {
    toString: <T = any>(item: T) => string;
    toNumber: <T_1 = any>(item: T_1) => number;
    toBool: <T_2 = any>(item: T_2) => boolean;
    toProp: <P = string, O = Object>(prop: string) => (item: O) => P;
    toFixed: (precision: number) => (num: number) => number;
};
/**<!-- DOCS: ### -->
 * sorts
 */
/**<!-- DOCS: #### -->
 * asc
 *
 * - `fn.asc`
 * - `fn.sorts.asc`
 *
 * Sort ascending.
 *
 * ```typescript
 * [2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
 * ```
 */
declare const asc: (a: any, b: any) => number;
/**<!-- DOCS: #### -->
 * desc
 *
 * - `fn.desc`
 * - `fn.sorts.desc`
 *
 * Sort descending.
 *
 * ```typescript
 * [2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
 * ```
 */
declare const desc: (a: any, b: any) => number;
declare type SortFn<T = number> = (a: T, b: T) => number;
/**<!-- DOCS: #### -->
 * byProp
 *
 * - `fn.byProp`
 * - `fn.sorts.byProp`
 *
 * Sort by a given property.
 *
 * ```typescript
 * const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
 * people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
 * ```
 */
declare const byProp: <T = number, O = Object>(propName: string, sortFn?: SortFn<T>) => SortFn<O>;
/**<!-- DOCS: #### -->
 * nearestTo
 *
 * - `fn.nearestTo`
 * - `fn.sorts.nearestTo`
 *
 * Sort by the nearest value to the given value.
 *
 * ```typescript
 * const people = [2, 4, 3, 1];
 * people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
 * ```
 */
declare const nearestTo: <T = number>(target: T) => (a: any, b: any) => number;
/**<!-- DOCS: #### -->
 * furthestFrom
 *
 * - `fn.furthestFrom`
 * - `fn.sorts.furthestFrom`
 *
 * Sort by the furthest value to the given value.
 *
 * ```typescript
 * const people = [2, 4, 3, 1];
 * people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
 * ```
 */
declare const furthestFrom: <T = number>(target: T) => (a: any, b: any) => number;
/**<!-- DOCS: #### -->
 * arrayAsc
 *
 * - `fn.arrayAsc`
 * - `fn.sorts.arrayAsc`
 *
 * Sort an array of arrays in ascending order
 */
declare const arrayAsc: (a: any[], b: any[]) => number;
/**<!-- DOCS: #### -->
 * arrayDesc
 *
 * - `fn.arrayDesc`
 * - `fn.sorts.arrayDesc`
 *
 * Sort an array of arrays in descending order
 */
declare const arrayDesc: (a: any[], b: any[]) => number;
declare const sorts$1: {
    asc: (a: any, b: any) => number;
    desc: (a: any, b: any) => number;
    byProp: <T = number, O = Object>(propName: string, sortFn?: SortFn<T>) => SortFn<O>;
    nearestTo: <T_1 = number>(target: T_1) => (a: any, b: any) => number;
    furthestFrom: <T_2 = number>(target: T_2) => (a: any, b: any) => number;
    arrayAsc: (a: any[], b: any[]) => number;
    arrayDesc: (a: any[], b: any[]) => number;
};
/**<!-- DOCS: ### -->
 * reduces
 */
/**<!-- DOCS: #### -->
 * combine
 *
 * - `fn.combine`
 * - `fn.reduces.combine`
 *
 * Adds or concats the items
 *
 * ```typescript
 * [1, 2, 3].reduce(fn.combine); // 6
 * ['a', 'b', 'c'].reduce(fn.combine); // 'abc'
 * ```
 */
declare const combine: (a: any, b: any) => any;
/**<!-- DOCS: #### -->
 * combineProp
 *
 * - `fn.combineProp`
 * - `fn.reduces.combineProp`
 *
 * Adds or concats the given property of the items
 *
 * ```typescript
 * const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
 * people.reduce(fn.combineProp('age')); // 6
 * people.reduce(fn.combineProp('name')); // 'abc'
 * ```
 */
declare const combineProp: (propName: string) => (a: any, b: any) => any;
/**<!-- DOCS: #### -->
 * mode
 *
 * - `fn.mode`
 * - `fn.reduces.mode`
 *
 * Returns the most common value in an array.
 *
 * ```typescript
 * [1, 2, 3, 2, 1, 1].reduce(fn.mode); // 1
 * ```
 */
declare const mode: <T extends unknown>(prev: T, curr: T, index: number, arr: T[]) => T;
/**<!-- DOCS: #### -->
 * modeMapped
 *
 * - `fn.modeMapped`
 * - `fn.reduces.modeMapped`
 *
 * Returns the most common value in an array, based on a given map function.
 *
 * ```typescript
 * [2, 4, 6, 8, 9, 12].reduce(fn.modeMapped((v) => v % 3)); // 6 (maps to [ 2, 1, 0, 2, 0, 0 ])
 * ```
 */
declare const modeMapped: <T extends unknown, U extends unknown>(mapFn: (value: T, index: number, array: T[]) => U) => (prev: T, curr: T, index: number, arr: T[]) => T;
declare const reduces$1: {
    combine: (a: any, b: any) => any;
    combineProp: (propName: string) => (a: any, b: any) => any;
    mode: <T extends unknown>(prev: T, curr: T, index: number, arr: T[]) => T;
    modeMapped: <T_1 extends unknown, U extends unknown>(mapFn: (value: T_1, index: number, array: T_1[]) => U) => (prev: T_1, curr: T_1, index: number, arr: T_1[]) => T_1;
};
/**<!-- DOCS: ### -->
 * everys
 */
/**<!-- DOCS: #### -->
 * isAllEqual
 *
 * - `fn.isAllEqual`
 * - `fn.everys.isAllEqual`
 *
 * Returns if all the items are equal to one another.
 *
 * ```typescript
 * [1, 1, 1].every(fn.isAllEqual); // true
 * [1, 2, 1].every(fn.isAllEqual); // false
 * ```
 */
declare const isAllEqual: <T = any>(val: T, i: any, arr: T[]) => boolean;
declare const everys$1: {
    isAllEqual: <T = any>(val: T, i: any, arr: T[]) => boolean;
};

declare const fn_noop: typeof noop;
declare const fn_noact: typeof noact;
declare const fn_result: typeof result;
declare const fn_resolve: typeof resolve;
declare const fn_reject: typeof reject;
declare const fn_exists: typeof exists;
declare const fn_isTruthy: typeof isTruthy;
declare const fn_isFalsy: typeof isFalsy;
declare const fn_isEmpty: typeof isEmpty;
declare const fn_isNotEmpty: typeof isNotEmpty;
declare const fn_isEqual: typeof isEqual;
declare const fn_isNotEqual: typeof isNotEqual;
declare const fn_dedupe: typeof dedupe;
declare const fn_dedupeMapped: typeof dedupeMapped;
declare const fn_toString: typeof toString;
declare const fn_toNumber: typeof toNumber;
declare const fn_toBool: typeof toBool;
declare const fn_toProp: typeof toProp;
declare const fn_toFixed: typeof toFixed;
declare const fn_asc: typeof asc;
declare const fn_desc: typeof desc;
declare const fn_byProp: typeof byProp;
declare const fn_nearestTo: typeof nearestTo;
declare const fn_furthestFrom: typeof furthestFrom;
declare const fn_arrayAsc: typeof arrayAsc;
declare const fn_arrayDesc: typeof arrayDesc;
declare const fn_combine: typeof combine;
declare const fn_combineProp: typeof combineProp;
declare const fn_mode: typeof mode;
declare const fn_modeMapped: typeof modeMapped;
declare const fn_isAllEqual: typeof isAllEqual;
declare namespace fn {
  export {
    fn_noop as noop,
    fn_noact as noact,
    fn_result as result,
    fn_resolve as resolve,
    fn_reject as reject,
    fn_exists as exists,
    fn_isTruthy as isTruthy,
    fn_isFalsy as isFalsy,
    fn_isEmpty as isEmpty,
    fn_isNotEmpty as isNotEmpty,
    fn_isEqual as isEqual,
    fn_isNotEqual as isNotEqual,
    fn_dedupe as dedupe,
    fn_dedupeMapped as dedupeMapped,
    filters$1 as filters,
    fn_toString as toString,
    fn_toNumber as toNumber,
    fn_toBool as toBool,
    fn_toProp as toProp,
    fn_toFixed as toFixed,
    maps$1 as maps,
    fn_asc as asc,
    fn_desc as desc,
    fn_byProp as byProp,
    fn_nearestTo as nearestTo,
    fn_furthestFrom as furthestFrom,
    fn_arrayAsc as arrayAsc,
    fn_arrayDesc as arrayDesc,
    sorts$1 as sorts,
    fn_combine as combine,
    fn_combineProp as combineProp,
    fn_mode as mode,
    fn_modeMapped as modeMapped,
    reduces$1 as reduces,
    fn_isAllEqual as isAllEqual,
    everys$1 as everys,
  };
}

declare const MathTools: typeof MathsTools;

declare const filters: {
    exists: <T = any>(item: T) => boolean;
    isTruthy: <T_1 = any>(item: T_1) => boolean;
    isFalsy: <T_2 = any>(item: T_2) => boolean;
    isEmpty: <T_3 = any>(item: string | T_3[]) => boolean;
    isNotEmpty: <T_4 = any>(item: string | T_4[]) => boolean;
    isEqual: <T_5 = any>(item: T_5) => (other: T_5) => boolean;
    isNotEqual: <T_6 = any>(item: T_6) => (other: T_6) => boolean;
    dedupe: <T_7 extends unknown>(item: T_7, index: number, array: T_7[]) => boolean;
    dedupeMapped: <T_8 extends unknown, U extends unknown>(mapFn: (value: T_8, index: number, array: T_8[]) => U) => (item: T_8, index: number, array: T_8[]) => boolean;
};
declare const maps: {
    toString: <T = any>(item: T) => string;
    toNumber: <T_1 = any>(item: T_1) => number;
    toBool: <T_2 = any>(item: T_2) => boolean;
    toProp: <P = string, O = Object>(prop: string) => (item: O) => P;
    toFixed: (precision: number) => (num: number) => number;
};
declare const sorts: {
    asc: (a: any, b: any) => number;
    desc: (a: any, b: any) => number;
    byProp: <T = number, O = Object>(propName: string, sortFn?: (a: T, b: T) => number) => (a: O, b: O) => number;
    nearestTo: <T_1 = number>(target: T_1) => (a: any, b: any) => number;
    furthestFrom: <T_2 = number>(target: T_2) => (a: any, b: any) => number;
    arrayAsc: (a: any[], b: any[]) => number;
    arrayDesc: (a: any[], b: any[]) => number;
};
declare const reduces: {
    combine: (a: any, b: any) => any;
    combineProp: (propName: string) => (a: any, b: any) => any;
    mode: <T extends unknown>(prev: T, curr: T, index: number, arr: T[]) => T;
    modeMapped: <T_1 extends unknown, U extends unknown>(mapFn: (value: T_1, index: number, array: T_1[]) => U) => (prev: T_1, curr: T_1, index: number, arr: T_1[]) => T_1;
};
declare const everys: {
    isAllEqual: <T = any>(val: T, i: any, arr: T[]) => boolean;
};

export { ArrayTools, CENTURY, ClxType, ColourTools, CustomEntryDict, DAY, DECADE, DeferredPromise, HOUR, ITimer, KeysOnly, MILLENNIUM, MILLISECOND, MINUTE, MONTH, MathTools, MathsTools, Numbered, ObjOfType, ObjectTools, OfType, Partial$1 as Partial, ProgressBar, ProgressBarOptions, PromiseTools, QueueManager, RemapOf, SECOND, StringTools, TimeTools, WEEK, YEAR, all, allLimit, allLimitObj, allObj, centuries, century, clx, day, days, decade, decades, each, eachLimit, entries, everys, filters, fn, getDeferred, getProgressBar, getTimer, group, groupObj, hour, hours, interval, map, mapLimit, maps, millennium, millenniums, milliseconds, minute, minutes, month, months, ms, partition, printLn, progressBar, queue, randomise, range, reduces, repeat, retry, retryOr, reverse, roll, second, seconds, sortByMapped, sortNumberedText, sorts, stopInterval, superscript, symbols, timer, times, tryOr, wait, waitEvery, waitFor, waitUntil, waiters, week, weeks, year, years, zip, zipMax };
