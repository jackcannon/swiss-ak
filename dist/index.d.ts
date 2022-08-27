/**
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
/**
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
/**
 * Makes all the values numbers
 *
 * ```typescript
 * interface ITest {
 *   a: string,
 *   b: boolean
 * };
 * type NumberedTest = Numbered<ITest>; // { a: number, b: number }
 */
declare type Numbered<T> = {
    [K in keyof T]: number;
};
/**
 * OfType<T, U>
 *
 * Makes all the properties of object T have type U
 */
declare type OfType<T, U> = {
    [K in keyof T]: U;
};
/**
 * ObjOfType<T>
 *
 * An object with any properties of type T
 */
declare type ObjOfType<T = string> = {
    [key: string]: T;
};
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
    prefixWidth: number;
    maxWidth: number;
    wrapperFn: any;
    showCount: boolean;
    showPercent: boolean;
    countWidth: number;
    progChar: string;
    emptyChar: string;
    startChar: string;
    endChar: string;
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
    start: () => string;
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

/**
 * tryOr
 *
 * Try to execute a function and return its result if it succeeds, or return the default value if it fails.
 *
 * ```typescript
 * const result = tryOr('default', () => getSomething());
 * ```
 */
declare const tryOr: <T extends unknown, A extends unknown[]>(orValue: T, func: (...args: A) => Promise<T>, ...args: A) => Promise<T>;
/**
 * retry
 *
 * Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds.
 *
 * ```typescript
 * const result = tryOr(5, seconds(1),, true, () => getSomething());
 * ```
 */
declare const retry: <T extends unknown>(maxTries?: number, delay?: ms, suppress?: boolean, run?: (attemptNumber: any) => T) => Promise<T>;
/**
 * retryOr
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
declare const eachLimit: <Ti extends unknown>(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
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
declare const map: <Ti extends unknown, To extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>) => Promise<To[]>;
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
declare const mapLimit: <Ti extends unknown, To extends unknown>(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>) => Promise<To[]>;
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
    eachLimit: <Ti_1 extends unknown>(limit: number, items: Ti_1[], func: (item: Ti_1, index: number, array: Ti_1[]) => Promise<any>) => Promise<any>;
    map: <Ti_2 extends unknown, To extends unknown>(items: Ti_2[], func: (item: Ti_2, index: number, array: Ti_2[]) => Promise<To>) => Promise<To[]>;
    mapLimit: <Ti_3 extends unknown, To_1 extends unknown>(limit: number, items: Ti_3[], func: (item: Ti_3, index: number, array: Ti_3[]) => Promise<To_1>) => Promise<To_1[]>;
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
declare type UnwrapArray<T> = T extends Array<infer U> ? U : T;
declare type UnwrapArrays<T extends [...any[]]> = T extends [infer Head, ...infer Tail] ? [UnwrapArray<Head>, ...UnwrapArrays<Tail>] : [];
/**
 * Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.
 *
 * Limited to the length of the shortest provided array
 *
 * Inspired by python's 'zip'
 *
 * ```typescript
 * zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
 * ```
 */
declare const zip: <T extends any[]>(...arrs: T) => UnwrapArrays<T>[];
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
declare const sortByMapped: <T = string, M = number>(arr: T[], mapFn: (value: T, index: number, array: T[]) => M, sortFn?: (a: M, b: M) => number) => T[];
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
declare const randomise: <T = string>(arr: T[]) => T[];
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
declare const reverse: <T = string>(arr: T[]) => T[];
/**
 * Returns array of 'tuples' of index/value pairs
 *
 * ```typescript
 * const arr = ['a', 'b', 'c'];
 * entries(arr); // [ [0, 'a'], [1, 'b'], [2, 'c'] ]
 *
 * for (let [index, value] of entries(arr)) {
 *  console.log(index); // 0, 1, 2
 *  console.log(value); // 'a', 'b', 'c'
 * }
 * ```
 */
declare const entries: <T = string>(arr: T[]) => [number, T][];
/**
 * Returns an array with the given items repeated
 *
 * ```typescript
 * repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
 * repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
 * ```
 */
declare const repeat: <T = string>(maxLength: number, ...items: T[]) => T[];

declare const ArrayUtils_range: typeof range;
declare const ArrayUtils_zip: typeof zip;
declare const ArrayUtils_sortByMapped: typeof sortByMapped;
declare const ArrayUtils_randomise: typeof randomise;
declare const ArrayUtils_reverse: typeof reverse;
declare const ArrayUtils_entries: typeof entries;
declare const ArrayUtils_repeat: typeof repeat;
declare namespace ArrayUtils {
  export {
    ArrayUtils_range as range,
    ArrayUtils_zip as zip,
    ArrayUtils_sortByMapped as sortByMapped,
    ArrayUtils_randomise as randomise,
    ArrayUtils_reverse as reverse,
    ArrayUtils_entries as entries,
    ArrayUtils_repeat as repeat,
  };
}

declare const ObjectUtils: {
    map: <T extends Object, V extends unknown, W extends unknown>(obj: T, func: (key: string, value: V) => [string, W]) => OfType<T, W>;
    mapValues: <T_1 extends Object, V_1 extends unknown, W_1 extends unknown>(obj: T_1, func: (key: string, value: V_1) => W_1) => OfType<T_1, W_1>;
    mapKeys: <T_2 extends Object, V_2 extends unknown>(obj: T_2, func: (key: string, value: V_2) => string) => T_2;
};

/**
 * symbols
 *
 * A series of characters that can be used for display symbols
 */
declare const symbols: {
    TAB: string;
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
    CHEV_LFT: string;
    CHEV_RGT: string;
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
declare const superscript: (num: any) => any;

/**
 * fn.noop
 *
 * No operation. Do nothing, return nothing.
 *
 * ```typescript
 * const run = condition ? doSomething : fn.noop;
 * run();
 * ```
 */
declare const noop: () => void;
/**
 * fn.noact
 *
 * No action. Returns the first argument it receives.
 *
 * ```typescript
 * const items = stuff
 *   .map(condition ? mapSomething : fn.noact)
 * ```
 */
declare const noact: <T = any>(item: T) => T;
/**
 * fn.result
 *
 * Returns a function that returns a function that returns the first argument.
 *
 * ```typescript
 * const items = stuff
 *   .filter(condition ? mapSomething : fn.result(true))
 * ```
 */
declare const result: <T = any>(item: T) => () => T;
/**
 * fn.resolve
 *
 * Returns an async function that resolves to the first argument
 *
 * Like fn.result, but wrapped in a Promise
 */
declare const resolve: <T = any>(item: T) => () => Promise<T>;
/**
 * fn.reject
 *
 * Returns an async function that rejects with the first argument
 */
declare const reject: <T = any>(item: T) => () => Promise<T>;
/**
 * fn.filters.exists / fn.exists
 *
 * Returns true if item isn't null or undefined.
 *
 * ```typescript
 * [null, 1, undefined, 2].filter(fn.exists); // [1, 2]
 * ```
 */
declare const exists: <T = any>(item: T) => boolean;
/**
 * fn.filters.isTruthy / fn.isTruthy
 *
 * Returns true if item is truthy.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isTruthy); // [1, 2]
 * ['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
 * ```
 */
declare const isTruthy: <T = any>(item: T) => boolean;
/**
 * fn.filters.isFalsy / fn.isFalsy
 *
 * Returns true if item is falsy.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isFalsy); // [0]
 * ['', 'a', 'b'].filter(fn.isFalsy); // ['']
 * ```
 */
declare const isFalsy: <T = any>(item: T) => boolean;
/**
 * fn.filters.isEmpty / fn.isEmpty
 *
 * Returns true if item's length is 0
 *
 * ```typescript
 * ['', 'a', 'b'].filter(fn.isEmpty); // ['']
 * [[], [1], [2]].filter(fn.isEmpty); // [[]]
 * ```
 */
declare const isEmpty: <T = any>(item: string | T[]) => boolean;
/**
 * fn.filters.isNotEmpty / fn.isNotEmpty
 *
 * Returns true if item's length is 1 or more
 *
 * ```typescript
 * ['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
 * [[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
 * ```
 */
declare const isNotEmpty: <T = any>(item: string | T[]) => boolean;
/**
 * fn.filters.isEqual / fn.isEqual
 *
 * Returns a function that returns true if the item is equal to provided value.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isEqual(1)); // [1]
 * ```
 */
declare const isEqual: <T = any>(item: T) => (other: T) => boolean;
/**
 * fn.filters.isNotEqual / fn.isNotEqual
 *
 * Returns a function that returns true if the item is not equal to provided value.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
 * ```
 */
declare const isNotEqual: <T = any>(item: T) => (other: T) => boolean;
declare const filters$1: {
    exists: <T = any>(item: T) => boolean;
    isTruthy: <T_1 = any>(item: T_1) => boolean;
    isFalsy: <T_2 = any>(item: T_2) => boolean;
    isEmpty: <T_3 = any>(item: string | T_3[]) => boolean;
    isNotEmpty: <T_4 = any>(item: string | T_4[]) => boolean;
    isEqual: <T_5 = any>(item: T_5) => (other: T_5) => boolean;
    isNotEqual: <T_6 = any>(item: T_6) => (other: T_6) => boolean;
};
/**
 * fn.maps.toString / fn.toString
 *
 * Maps the item to a string.
 *
 * ```typescript
 * [0, 1, 2].map(fn.toString); // ['0', '1', '2']
 * ```
 */
declare const toString: <T = any>(item: T) => string;
/**
 * fn.maps.toNumber / fn.toNumber
 *
 * Maps the item to a number.
 *
 * ```typescript
 * ['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
 * ```
 */
declare const toNumber: <T = any>(item: T) => number;
/**
 * fn.maps.toBool / fn.toBool
 *
 * Maps the item to a boolean.
 *
 * ```typescript
 * [0, 1, 2].map(fn.toBool); // [false, true, true]
 * ['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
 * ```
 */
declare const toBool: <T = any>(item: T) => boolean;
/**
 * fn.maps.toProp / fn.toProp
 *
 * Maps the item to a given property of the item
 *
 * ```typescript
 * [{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
 * ```
 */
declare const toProp: <P = string, O = Object>(prop: string) => (item: O) => P;
declare const maps$1: {
    toString: <T = any>(item: T) => string;
    toNumber: <T_1 = any>(item: T_1) => number;
    toBool: <T_2 = any>(item: T_2) => boolean;
    toProp: <P = string, O = Object>(prop: string) => (item: O) => P;
};
/**
 * fn.sorts.asc / fn.asc
 *
 * Sort ascending.
 *
 * ```typescript
 * [2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
 * ```
 */
declare const asc: (a: any, b: any) => number;
/**
 * fn.sorts.desc / fn.desc
 *
 * Sort descending.
 *
 * ```typescript
 * [2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
 * ```
 */
declare const desc: (a: any, b: any) => number;
declare type SortFn<T = number> = (a: T, b: T) => number;
/**
 * fn.sorts.byProp / fn.byProp
 *
 * Sort by a given property.
 *
 * ```typescript
 * const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
 * people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
 * ```
 */
declare const byProp: <T = number, O = Object>(propName: string, sortFn?: SortFn<T>) => SortFn<O>;
/**
 * fn.sorts.nearestTo / fn.nearestTo
 *
 * Sort by the nearest value to the given value.
 *
 * ```typescript
 * const people = [2, 4, 3, 1];
 * people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
 * ```
 */
declare const nearestTo: <T = number>(target: T) => (a: any, b: any) => number;
/**
 * fn.sorts.furthestFrom / fn.furthestFrom
 *
 * Sort by the furthest value to the given value.
 *
 * ```typescript
 * const people = [2, 4, 3, 1];
 * people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
 * ```
 */
declare const furthestFrom: <T = number>(target: T) => (a: any, b: any) => number;
declare const sorts$1: {
    asc: (a: any, b: any) => number;
    desc: (a: any, b: any) => number;
    byProp: <T = number, O = Object>(propName: string, sortFn?: SortFn<T>) => SortFn<O>;
    nearestTo: <T_1 = number>(target: T_1) => (a: any, b: any) => number;
    furthestFrom: <T_2 = number>(target: T_2) => (a: any, b: any) => number;
};
/**
 * fn.reduces.combine / fn.combine
 *
 * Adds or concats the items
 *
 * ```typescript
 * [1, 2, 3].reduce(fn.combine); // 6
 * ['a', 'b', 'c'].reduce(fn.combine); // 'abc'
 * ```
 */
declare const combine: (a: any, b: any) => any;
/**
 * fn.reduces.combineProp / fn.combineProp
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
declare const reduces$1: {
    combine: (a: any, b: any) => any;
    combineProp: (propName: string) => (a: any, b: any) => any;
};
/**
 * fn.everys.isAllEqual / fn.isAllEqual
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
declare const fn_toString: typeof toString;
declare const fn_toNumber: typeof toNumber;
declare const fn_toBool: typeof toBool;
declare const fn_toProp: typeof toProp;
declare const fn_asc: typeof asc;
declare const fn_desc: typeof desc;
declare const fn_byProp: typeof byProp;
declare const fn_nearestTo: typeof nearestTo;
declare const fn_furthestFrom: typeof furthestFrom;
declare const fn_combine: typeof combine;
declare const fn_combineProp: typeof combineProp;
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
    filters$1 as filters,
    fn_toString as toString,
    fn_toNumber as toNumber,
    fn_toBool as toBool,
    fn_toProp as toProp,
    maps$1 as maps,
    fn_asc as asc,
    fn_desc as desc,
    fn_byProp as byProp,
    fn_nearestTo as nearestTo,
    fn_furthestFrom as furthestFrom,
    sorts$1 as sorts,
    fn_combine as combine,
    fn_combineProp as combineProp,
    reduces$1 as reduces,
    fn_isAllEqual as isAllEqual,
    everys$1 as everys,
  };
}

declare const filters: {
    exists: <T = any>(item: T) => boolean;
    isTruthy: <T_1 = any>(item: T_1) => boolean;
    isFalsy: <T_2 = any>(item: T_2) => boolean;
    isEmpty: <T_3 = any>(item: string | T_3[]) => boolean;
    isNotEmpty: <T_4 = any>(item: string | T_4[]) => boolean;
    isEqual: <T_5 = any>(item: T_5) => (other: T_5) => boolean;
    isNotEqual: <T_6 = any>(item: T_6) => (other: T_6) => boolean;
};
declare const maps: {
    toString: <T = any>(item: T) => string;
    toNumber: <T_1 = any>(item: T_1) => number;
    toBool: <T_2 = any>(item: T_2) => boolean;
    toProp: <P = string, O = Object>(prop: string) => (item: O) => P;
};
declare const sorts: {
    asc: (a: any, b: any) => number;
    desc: (a: any, b: any) => number;
    byProp: <T = number, O = Object>(propName: string, sortFn?: (a: T, b: T) => number) => (a: O, b: O) => number;
    nearestTo: <T_1 = number>(target: T_1) => (a: any, b: any) => number;
    furthestFrom: <T_2 = number>(target: T_2) => (a: any, b: any) => number;
};
declare const reduces: {
    combine: (a: any, b: any) => any;
    combineProp: (propName: string) => (a: any, b: any) => any;
};
declare const everys: {
    isAllEqual: <T = any>(val: T, i: any, arr: T[]) => boolean;
};

export { ArrayUtils, CENTURY, CustomEntryDict, DAY, DECADE, DeferredPromise, HOUR, ITimer, KeysOnly, MILLENNIUM, MILLISECOND, MINUTE, MONTH, Numbered, ObjOfType, ObjectUtils, OfType, Partial$1 as Partial, ProgressBarOptions, PromiseUtils, RemapOf, SECOND, WEEK, YEAR, all, allLimit, allLimitObj, allObj, centuries, century, day, days, decade, decades, each, eachLimit, entries, everys, filters, fn, getDeferred, getProgressBar, getTimer, hour, hours, interval, map, mapLimit, maps, millennium, millenniums, milliseconds, minute, minutes, month, months, ms, printLn, progressBar, randomise, range, reduces, repeat, retry, retryOr, reverse, second, seconds, sortByMapped, sorts, stopInterval, superscript, symbols, timer, times, tryOr, wait, waitEvery, waitFor, waitUntil, waiters, week, weeks, year, years, zip };
