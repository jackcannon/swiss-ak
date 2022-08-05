declare type Partial$1<T> = {
    [K in keyof T]?: T[K];
};
declare type KeysOnly<T> = {
    [K in keyof T]: K;
};
declare type Numbered<T> = {
    [K in keyof T]: number;
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

/**
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
/**
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
/**
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
/**
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
/**
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
/**
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
    log(prefix?: string, customEntries?: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>): void;
    reset(): void;
    names: KeysOnly<TName>;
    displayNames: TName;
}
/**
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
/**
 * Global timer
 */
declare const timer: ITimer<INames> & KeysOnly<INames>;

/**
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
    maxWidth: number;
    chalk: any;
    wrapperFn: any;
    showCount: boolean;
    showPercent: boolean;
    progChar: string;
    emptyChar: string;
    prefixChar: string;
    suffixChar: string;
}
declare type ProgressBarOptions = Partial<ProgressBarOptionsFull>;
/**
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
declare const getProgressBar: (max: number, options?: ProgressBarOptions) => {
    next: () => string;
    set: (newCurrent: number) => string;
    reset: () => string;
    update: () => string;
    finish: () => string;
};

declare const progressBar_printLn: typeof printLn;
type progressBar_ProgressBarOptions = ProgressBarOptions;
declare const progressBar_getProgressBar: typeof getProgressBar;
declare namespace progressBar {
  export {
    progressBar_printLn as printLn,
    progressBar_ProgressBarOptions as ProgressBarOptions,
    progressBar_getProgressBar as getProgressBar,
  };
}

interface DeferredPromise<T> {
    resolve: (value: T) => Promise<T>;
    reject: (value: T) => Promise<T>;
    promise: Promise<T>;
}
/**
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
/**
 * An alias for Promise.all
 */
declare const all: <T extends unknown>(promises: Promise<T>[]) => Promise<any>;
/**
 * Like Promise.all, but limits the numbers of concurrently running items.
 *
 * Takes an array of functions (that return Promises), rather than an array of Promises
 *
 * ```typescript
 * import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';
 *
 * const give = async (delay: ms, result: number, label: string) => {
 *   await waitFor(delay);
 *   timer.end(label);
 *   return result;
 * };
 *
 * timer.start('allLimit', 'a', 'b', 'c', 'd');
 *
 * const results = PromiseUtils.allLimit<number>(2, [
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
/**
 * Run an async function against each item in an array
 *
 * ```typescript
 * import { PromiseUtils, ms, seconds, wait } from 'swiss-ak';
 *
 * const arr = [1, 2, 3, 4];
 *
 * await PromiseUtils.each<number>(arr, async (val: number) => {
 *   await wait(seconds(2));
 *   sendToSomewhere(val);
 * });
 * console.log(''); // after 2 seconds
 * ```
 */
declare const each: <Ti extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
/**
 * Run an async function against each item in an array, limiting the number of items that can run concurrently.
 *
 * See PromiseUtils.allLimit for information about limited functions.
 *
 * ```typescript
 * import { PromiseUtils, ms, seconds, wait } from 'swiss-ak';
 *
 * const arr = [1, 2, 3, 4];
 *
 * await PromiseUtils.eachLimit<number>(2, arr, async (val: number) => {
 *   await wait(seconds(2));
 *   sendToSomewhere(val);
 * });
 * console.log(''); // after 4 seconds
 * ```
 */
declare const eachLimit: <Ti extends unknown>(limit: number, items: Ti[], func: (item?: Ti, index?: number, array?: Ti[]) => Promise<any>) => Promise<any>;
/**
 * Run an async map function against each item in an array, mapping the results to a returned array
 *
 * ```typescript
 * import { PromiseUtils, ms, seconds, wait } from 'swiss-ak';
 *
 * const arr = [1, 2, 3, 4];
 *
 * const mapped = await PromiseUtils.map<number>(arr, async (val: number) => {
 *   await wait(seconds(2));
 *   return val * 2;
 * });
 *
 * console.log(mapped); // [2, 4, 6, 8] (after 2 seconds)
 * ```
 */
declare const map: <Ti extends unknown, To extends unknown>(items: Ti[], func: (item?: Ti, index?: number, array?: Ti[]) => Promise<To>) => Promise<To[]>;
/**
 * Run an async map function against each item in an array, mapping the results to a returned array, and limiting the number of items that can run concurrently.
 *
 * See PromiseUtils.allLimit for information about limited functions.
 *
 * ```typescript
 * import { PromiseUtils, ms, seconds, wait } from 'swiss-ak';
 *
 * const arr = [1, 2, 3, 4];
 *
 * const mapped = await PromiseUtils.mapLimit<number>(2, arr, async (val: number) => {
 *   await wait(seconds(2));
 *   return val * 2;
 * });
 *
 * console.log(mapped); // [2, 4, 6, 8] (after 4 seconds)
 * ```
 */
declare const mapLimit: <Ti extends unknown, To extends unknown>(limit: number, items: Ti[], func: (item?: Ti, index?: number, array?: Ti[]) => Promise<To>) => Promise<To[]>;
/**
 * Like Promise.all, but pass/receive objects rather than arrays
 *
 * ```typescript
 * import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';
 *
 * const give = async (delay: ms, result: number, label: string) => {
 *   await waitFor(delay);
 *   timer.end(label);
 *   return result;
 * };
 *
 * timer.start('allObj', 'a', 'b', 'c');
 *
 * const results = PromiseUtils.allObj<number>({
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
declare const allObj: <T extends unknown>(input: {
    [key: string]: Promise<T>;
}) => Promise<{
    [key: string]: T;
}>;
/**
 * A mix of allObj and allLimit.
 *
 * Takes an array of functions (that return Promises), and limits the numbers of concurrently running items.
 *
 * ```typescript
 * import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';
 *
 * const give = async (delay: ms, result: number, label: string) => {
 *   await waitFor(delay);
 *   timer.end(label);
 *   return result;
 * };
 *
 * timer.start('allLimitObj', 'a', 'b', 'c', 'd');
 *
 * const results = PromiseUtils.allLimitObj<number>(2, {
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
declare const allLimitObj: <T extends unknown>(limit: number, input: {
    [key: string]: (index: number) => Promise<T>;
}, noThrow?: boolean) => Promise<{
    [key: string]: T;
}>;
declare const PromiseUtils: {
    getDeferred: <T extends unknown>() => DeferredPromise<T>;
    all: <T_1 extends unknown>(promises: Promise<T_1>[]) => Promise<any>;
    allLimit: <T_2 extends unknown>(limit: number, items: ((index: number) => Promise<T_2>)[], noThrow?: boolean) => Promise<T_2[]>;
    each: <Ti extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
    eachLimit: <Ti_1 extends unknown>(limit: number, items: Ti_1[], func: (item?: Ti_1, index?: number, array?: Ti_1[]) => Promise<any>) => Promise<any>;
    map: <Ti_2 extends unknown, To extends unknown>(items: Ti_2[], func: (item?: Ti_2, index?: number, array?: Ti_2[]) => Promise<To>) => Promise<To[]>;
    mapLimit: <Ti_3 extends unknown, To_1 extends unknown>(limit: number, items: Ti_3[], func: (item?: Ti_3, index?: number, array?: Ti_3[]) => Promise<To_1>) => Promise<To_1[]>;
    allObj: <T_3 extends unknown>(input: {
        [key: string]: Promise<T_3>;
    }) => Promise<{
        [key: string]: T_3;
    }>;
    allLimitObj: <T_4 extends unknown>(limit: number, input: {
        [key: string]: (index: number) => Promise<T>;
    }, noThrow?: boolean) => Promise<{
        [key: string]: T_4;
    }>;
};

/**
 * Returns an array of the given length, where each value is equal to it's index
 * e.g. [0, 1, 2, ..., length]
 *
 * ```typescript
 * range(3);  // [0, 1, 2]
 * range(5);  // [0, 1, 2, 3, 4]
 * range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 */
declare const range: (length?: number) => number[];
/**
 * Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.
 *
 * Limited to the length of the shortest provided array
 *
 * Inspired by python's 'zip'
 *
 * > Note: The typing of this is messy - needs improvement
 *
 * ```typescript
 * zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
 * ```
 */
declare const zip: <T1 = undefined, T2 = undefined, T3 = undefined, T4 = undefined, T5 = undefined>(arrs_0?: T1[], arrs_1?: T2[], arrs_2?: T3[], arrs_3?: T4[], arrs_4?: T5[]) => [T1, T2, T3, T4, T5][];
/**
 * Sort an array by a mapped form of the values, but returning the initial values
 *
 * ```typescript
 * sortByMapped(['2p', '3p', '1p'], (v) => Number(v.replace('p', ''))); // ['1p', '2p', '3p']
 * sortByMapped(
 *   ['2p', '3p', '1p'],
 *   (v) => Number(v.replace('p', '')),
 *   (a, b) => b - a
 * ); // ['3p', '2p', '1p']
 * ```
 */
declare const sortByMapped: <T, M>(arr: T[], mapFn: (value: T, index: number, array: T[]) => M, sortFn?: (a: M, b: M) => number) => T[];
/**
 * Returns a clone of the provided array with it's items in a random order
 *
 * ```typescript
 * randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
 * randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
 * randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
 * randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
 * randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
 * ```
 */
declare const randomise: <T>(arr: T[]) => T[];
/**
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
 * reverse(arr2);  // [3, 2, 1]
 * arr2            // [1, 2, 3]
 * ```
 */
declare const reverse: <T>(arr: T[]) => T[];

declare const ArrayUtils_range: typeof range;
declare const ArrayUtils_zip: typeof zip;
declare const ArrayUtils_sortByMapped: typeof sortByMapped;
declare const ArrayUtils_randomise: typeof randomise;
declare const ArrayUtils_reverse: typeof reverse;
declare namespace ArrayUtils {
  export {
    ArrayUtils_range as range,
    ArrayUtils_zip as zip,
    ArrayUtils_sortByMapped as sortByMapped,
    ArrayUtils_randomise as randomise,
    ArrayUtils_reverse as reverse,
  };
}

export { ArrayUtils, CENTURY, CustomEntryDict, DAY, DECADE, DeferredPromise, HOUR, KeysOnly, MILLENNIUM, MILLISECOND, MINUTE, MONTH, Numbered, Partial$1 as Partial, ProgressBarOptions, PromiseUtils, SECOND, WEEK, YEAR, all, allLimit, allLimitObj, allObj, centuries, century, day, days, decade, decades, each, eachLimit, getDeferred, getProgressBar, getTimer, hour, hours, interval, map, mapLimit, millennium, millenniums, milliseconds, minute, minutes, month, months, ms, printLn, progressBar, randomise, range, reverse, second, seconds, sortByMapped, stopInterval, timer, times, wait, waitEvery, waitFor, waitUntil, waiters, week, weeks, year, years, zip };
