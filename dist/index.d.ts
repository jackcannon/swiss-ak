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
    log(prefix?: string, customEntries?: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>): number;
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
declare type UnWrapPromise<T> = T extends Promise<infer U> ? U : T;
declare type UnWrapPromiseObject<T> = {
    [K in keyof T]: UnWrapPromise<T[K]>;
};
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
declare const allObj: <T extends Object>(input: T) => Promise<UnWrapPromiseObject<T>>;
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
declare const allLimitObj: <T extends Object>(limit: number, input: T, noThrow?: boolean) => Promise<UnWrapPromiseObject<T>>;
declare const PromiseUtils: {
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

/**
 * Returns an array of the given length, where each value is equal to it's index
 * e.g. [0, 1, 2, ..., length]
 *
 * ```typescript
 * range(3);  // [0, 1, 2]
 * range(5);  // [0, 1, 2, 3, 4]
 * range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * range(3, 2);  // [0, 2, 4]
 * range(5, 2);  // [0, 2, 4, 6, 8]
 * range(10, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
 * ```
 */
declare const range: (length?: number, multiplier?: number, offset?: number) => number[];
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
declare const zipMax: <T extends any[]>(...arrs: T) => UnwrapArrays<T>[];
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
 * ArrayUtils.repeat
 *
 * Returns an array with the given items repeated
 *
 * ```typescript
 * repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
 * repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
 * ```
 */
declare const repeat: <T = string>(maxLength: number, ...items: T[]) => T[];
/**
 * ArrayUtils.roll
 *
 * 'Roll' the array by a given amount so that is has a new first item. Length and contents remain the same, but the order is changed
 *
 * ```typescript
 * roll(1, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7, 0 ]
 * roll(4, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 4, 5, 6, 7, 0, 1, 2, 3 ]
 * ```
 */
declare const roll: <T extends unknown>(distance: number, arr: T[]) => T[];
/**
 * ArrayUtils.sortNumberedText
 *
 * Alphabetically sorts a list of strings, but keeps multi-digit numbers in numerical order (rather than alphabetical)
 *
 * ```typescript
 * const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
 * names.sort(); // [ 'foo10', 'foo20', 'foo9', 'name1', 'name10', 'name2' ]
 * sortNumberedText(names); // [ 'foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10' ]
 * ```
 */
declare const sortNumberedText: (texts: string[], ignoreCase?: boolean) => string[];
/**
 * To equal size 2d array
 */
declare const partition: <T extends unknown>(array: T[], partitionSize?: number) => T[][];
/**
 * group items into an object of arrays, based on a given map function.
 */
declare const groupObj: <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number) => {
    [id: string]: T[];
    [id: number]: T[];
};
/**
 * group items into an array of arrays, based on a given map function.
 */
declare const group: <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number) => T[][];
declare const ArrayUtils: {
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
    utils: {
        isNumString: (text: string) => boolean;
        partitionNums: (ignoreCase: boolean) => (name: string) => (string | number)[];
    };
};

declare const ObjectUtils: {
    remodel: <T extends Object = Object, V extends unknown = any, W extends unknown = any, O extends unknown = OfType<T, W>>(obj: T, func: (entries: [string, V][]) => [string, W][]) => O;
    remodelEach: <T_1 extends Object = Object, V_1 extends unknown = any, W_1 extends unknown = any, O_1 extends unknown = OfType<T_1, W_1>>(obj: T_1, func: (entry: [string, V_1], index: number, entries: [string, V_1][]) => [string, W_1]) => O_1;
    map: <T_2 extends Object, V_2 extends unknown, W_2 extends unknown>(obj: T_2, func: (key: string, value: V_2, index: number) => [string, W_2]) => OfType<T_2, W_2>;
    mapValues: <T_3 extends Object, V_3 extends unknown, W_3 extends unknown>(obj: T_3, func: (key: string, value: V_3, index: number) => W_3) => OfType<T_3, W_3>;
    mapKeys: <T_4 extends Object, V_4 extends unknown>(obj: T_4, func: (key: string, value: V_4, index: number) => string) => T_4;
    filter: <T_5 extends Object, V_5 extends unknown, O_2 extends Partial<T_5>>(obj: T_5, func: (key: string, value: V_5, index: number) => boolean) => O_2;
    clean: <T_6 extends Object, O_3 extends Partial<T_6>>(obj: T_6) => O_3;
};

declare const TimeUtils: {
    toReadableDuration: (duration: ms, longNames?: boolean, maxUnits?: number) => string;
};

declare type CaseInput = string | string[];
interface StringCaseHandler {
    toLowerCamelCase(input: CaseInput): string;
    toUpperCamelCase(input: CaseInput): string;
    toCamelCase(input: CaseInput, capitaliseFirst?: boolean): string;
    toLowerSlugCase(input: CaseInput): string;
    toUpperSlugCase(input: CaseInput): string;
    toSlugCase(input: CaseInput, toUpper?: boolean): string;
    toLowerSnakeCase(input: CaseInput): string;
    toUpperSnakeCase(input: CaseInput): string;
    toSnakeCase(input: CaseInput, toUpper?: boolean): string;
    toLowerSpaced(input: CaseInput): string;
    toUpperSpaced(input: CaseInput): string;
    toCapitalisedSpaced(input: CaseInput): string;
    toSpaced(input: CaseInput, toUpper?: boolean): string;
    toCharacterSeparated(input: CaseInput, char: string, toUpper?: boolean): string;
}
declare const StringUtils: {
    fromSlugCase: StringCaseHandler;
    fromSnakeCase: StringCaseHandler;
    fromSpaced: StringCaseHandler;
    fromCamelCase: StringCaseHandler;
    toLowerCamelCase(input: CaseInput): string;
    toUpperCamelCase(input: CaseInput): string;
    toCamelCase(input: CaseInput, capitaliseFirst?: boolean): string;
    toLowerSlugCase(input: CaseInput): string;
    toUpperSlugCase(input: CaseInput): string;
    toSlugCase(input: CaseInput, toUpper?: boolean): string;
    toLowerSnakeCase(input: CaseInput): string;
    toUpperSnakeCase(input: CaseInput): string;
    toSnakeCase(input: CaseInput, toUpper?: boolean): string;
    toLowerSpaced(input: CaseInput): string;
    toUpperSpaced(input: CaseInput): string;
    toCapitalisedSpaced(input: CaseInput): string;
    toSpaced(input: CaseInput, toUpper?: boolean): string;
    toCharacterSeparated(input: CaseInput, char: string, toUpper?: boolean): string;
    capitalise: (input?: string) => string;
    angloise: (input: string) => string;
    clean: (input?: string) => string;
};

/**
 * symbols
 *
 * A series of characters that can be used for display symbols
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
declare const superscript: (num: any) => any;

/**
 * TODO docs
 */
declare class QueueManager {
    promises: Map<string, Promise<any>>;
    pauseTimes: Map<string, number>;
    defaultPauseTime: number;
    constructor(defaultPauseTime?: number);
    getPromise(id: string): Promise<any>;
    /**
     * TODO docs
     */
    setDefaultPauseTime(time: number): void;
    /**
     * TODO docs
     */
    setPauseTime(id: string, time: number): void;
    /**
     * TODO docs
     */
    add<T>(id: string, fn: () => Promise<T>): Promise<T>;
    /**
     * TODO docs
     */
    new(defaultPauseTime?: number): QueueManager;
}
/**
 * TODO docs
 */
declare const queue: QueueManager;

declare type ColourValues = [number, number, number];
declare type HSLValues = [number, number, number];
/**
 * ColourUtils.namedColours
 *
 * A dictionary of different colour names and their RGB values
 *
 * ```typescript
 * ColourUtils.namedColours.blue // [0, 0, 255]
 * ColourUtils.namedColours.red // [255, 0, 0]
 * ColourUtils.namedColours.green // [0, 255, 0]
 *
 * ColourUtils.namedColours.azure // [240, 255, 255]
 * ColourUtils.namedColours.darkorange // [255, 140, 0]
 * ColourUtils.namedColours.dodgerblue // [30, 144, 255]
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
/**
 * ColourUtils.parse
 *
 * Parse a string into a colour object (RGB array)
 * Not extensive. Currently limited to:
 * - 3 char hexes
 * - 6 char hexes
 * - comma separated RGB values
 * - named colours (from namedColours dictionary)
 *
 * ```typescript
 * ColourUtils.parse('#FF0000') // [255, 0, 0]
 * ColourUtils.parse('rgb(255, 0, 0)') // [255, 0, 0]
 * ColourUtils.parse('red') // [255, 0, 0]
 * ```
 */
declare const parse: (input: string) => ColourValues;
/**
 * ColourUtils.toHex
 *
 * Convert a colour object (RGB array) to a hex string
 *
 * ```typescript
 * ColourUtils.toHex([255, 0, 0]) // '#FF0000'
 * ```
 */
declare const toHex: (colour: ColourValues) => string;
/**
 * ColourUtils.getLuminance
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
 * getLuminance([255, 0, 0]); // 76.245
 * getLuminance([0, 255, 0]); // 149.685
 * getLuminance([0, 0, 255]); // 29.07
 * ```
 */
declare const getLuminance: ([r, g, b]: ColourValues) => number;
declare const toYUV: ([r, g, b]: ColourValues) => ColourValues;
declare const toHSL: (colour: ColourValues, round?: boolean) => HSLValues;
declare const fromHSL: (hsl: HSLValues, round?: boolean) => ColourValues;
/**
 * ColourUtils.invertColour
 *
 * Get the opposite colour of a given colour.
 *
 * ```typescript
 * invertColour([255, 0, 0]); // [0, 255, 255]
 * invertColour([0, 255, 0]); // [ 255, 0, 255 ]
 * invertColour([0, 0, 255]); // [ 255, 255, 0 ]
 * ```
 */
declare const invertColour: ([r, g, b]: ColourValues) => ColourValues;
/**
 * ColourUtils.getContrastedColour
 *
 * Get the colour that contrasts the most with a given colour. (White or black)
 *
 * Returned colour can be used as a text colour on top of the provided colour
 *
 * ```typescript
 * getContrastedColour([255, 0, 0]); // [255, 255, 255]
 * getContrastedColour([255, 255, 0]); // [0, 0, 0]
 * ```
 */
declare const getContrastedColour: (colour: ColourValues) => ColourValues;
declare const getLimitedColour: (colour: ColourValues, checkFn: (hsl: HSLValues) => boolean, adjustFn: (hsl: HSLValues) => HSLValues) => ColourValues;

type ColourUtils_ColourValues = ColourValues;
type ColourUtils_HSLValues = HSLValues;
declare const ColourUtils_namedColours: typeof namedColours;
declare const ColourUtils_parse: typeof parse;
declare const ColourUtils_toHex: typeof toHex;
declare const ColourUtils_getLuminance: typeof getLuminance;
declare const ColourUtils_toYUV: typeof toYUV;
declare const ColourUtils_toHSL: typeof toHSL;
declare const ColourUtils_fromHSL: typeof fromHSL;
declare const ColourUtils_invertColour: typeof invertColour;
declare const ColourUtils_getContrastedColour: typeof getContrastedColour;
declare const ColourUtils_getLimitedColour: typeof getLimitedColour;
declare namespace ColourUtils {
  export {
    ColourUtils_ColourValues as ColourValues,
    ColourUtils_HSLValues as HSLValues,
    ColourUtils_namedColours as namedColours,
    ColourUtils_parse as parse,
    ColourUtils_toHex as toHex,
    ColourUtils_getLuminance as getLuminance,
    ColourUtils_toYUV as toYUV,
    ColourUtils_toHSL as toHSL,
    ColourUtils_fromHSL as fromHSL,
    ColourUtils_invertColour as invertColour,
    ColourUtils_getContrastedColour as getContrastedColour,
    ColourUtils_getLimitedColour as getLimitedColour,
  };
}

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
 * fn.fixFloat
 *
 * Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers
 *
 * ```typescript
 * 0.1 + 0.2 // 0.30000000000000004
 * fixFloat(0.1 + 0.2) // 0.3
 * ```
 */
declare const fixFloat: (num: number, precision?: number) => number;
/**
 * fn.addAll
 *
 * Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max
 *
 * ```typescript
 * addAll(1, 2, 3, 4, 5); // 15
 * ```
 */
declare const addAll: (...args: number[]) => number;
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
declare const dedupe: <T extends unknown>(item: T, index: number, array: T[]) => boolean;
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
declare const toFixed: (precision: number) => (num: number) => number;
declare const maps$1: {
    toString: <T = any>(item: T) => string;
    toNumber: <T_1 = any>(item: T_1) => number;
    toBool: <T_2 = any>(item: T_2) => boolean;
    toProp: <P = string, O = Object>(prop: string) => (item: O) => P;
    toFixed: (precision: number) => (num: number) => number;
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
/**
 * fn.sorts.arrayAsc / fn.arrayAsc
 *
 * Sort an array of arrays in ascending order
 */
declare const arrayAsc: (a: any[], b: any[]) => number;
/**
 * fn.sorts.arrayDesc/ fn.arrayDesc
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
/**
 * fn.reduces.mode / fn.mode
 *
 * Returns the most common value in an array.
 */
declare const mode: <T extends unknown>(prev: T, curr: T, index: number, arr: T[]) => T;
/**
 * fn.reduces.modeMapped / fn.modeMapped
 *
 * Returns the most common value in an array, based on a given map function.
 */
declare const modeMapped: <T extends unknown, U extends unknown>(mapFn: (value: T, index: number, array: T[]) => U) => (prev: T, curr: T, index: number, arr: T[]) => T;
declare const reduces$1: {
    combine: (a: any, b: any) => any;
    combineProp: (propName: string) => (a: any, b: any) => any;
    mode: <T extends unknown>(prev: T, curr: T, index: number, arr: T[]) => T;
    modeMapped: <T_1 extends unknown, U extends unknown>(mapFn: (value: T_1, index: number, array: T_1[]) => U) => (prev: T_1, curr: T_1, index: number, arr: T_1[]) => T_1;
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
/**
 * fn.round.floorTo / fn.floorTo
 *
 * Floors a number down to the nearest multiple of the given number.
 *
 * ```typescript
 * fn.round.floorTo(10, 102); // 100
 * fn.round.floorTo(5, 53); // 50
 * fn.round.floorTo(0.1, 0.25); // 0.2
 * ```
 */
declare const floorTo: (to: number, value: number) => number;
/**
 * fn.round.to / fn.round.roundTo / fn.roundTo
 *
 * Floors a number down to the nearest multiple of the given number.
 *
 * ```typescript
 * fn.round.to(10, 102); // 100
 * fn.round.to(5, 53); // 55
 * fn.round.to(0.1, 0.25); // 0.3
 * ```
 */
declare const roundTo: (to: number, value: number) => number;
/**
 * fn.round.ceilTo / fn.ceilTo
 *
 * Floors a number down to the nearest multiple of the given number.
 *
 * ```typescript
 * fn.round.ceilTo(10, 102); // 110
 * fn.round.ceilTo(5, 53); // 55
 * fn.round.ceilTo(0.1, 0.25); // 0.3
 * ```
 */
declare const ceilTo: (to: number, value: number) => number;
declare const round: {
    floorTo: (to: number, value: number) => number;
    roundTo: (to: number, value: number) => number;
    ceilTo: (to: number, value: number) => number;
    to: (to: number, value: number) => number;
};
declare const lerp: (progress: number, fromVal: number, toVal: number) => number;
declare const lerpArray: (progress: number, fromArr: number[], toArr: number[]) => number[];
declare const lerpObj: <T extends object>(progress: number, fromObj: T, toObj: T) => T;
declare const clamp: (value: number, a: number, b: number) => number;
declare const capitalise: (str: string) => string;

declare const fn_noop: typeof noop;
declare const fn_noact: typeof noact;
declare const fn_result: typeof result;
declare const fn_resolve: typeof resolve;
declare const fn_reject: typeof reject;
declare const fn_fixFloat: typeof fixFloat;
declare const fn_addAll: typeof addAll;
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
declare const fn_floorTo: typeof floorTo;
declare const fn_roundTo: typeof roundTo;
declare const fn_ceilTo: typeof ceilTo;
declare const fn_round: typeof round;
declare const fn_lerp: typeof lerp;
declare const fn_lerpArray: typeof lerpArray;
declare const fn_lerpObj: typeof lerpObj;
declare const fn_clamp: typeof clamp;
declare const fn_capitalise: typeof capitalise;
declare namespace fn {
  export {
    fn_noop as noop,
    fn_noact as noact,
    fn_result as result,
    fn_resolve as resolve,
    fn_reject as reject,
    fn_fixFloat as fixFloat,
    fn_addAll as addAll,
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
    fn_floorTo as floorTo,
    fn_roundTo as roundTo,
    fn_ceilTo as ceilTo,
    fn_round as round,
    fn_lerp as lerp,
    fn_lerpArray as lerpArray,
    fn_lerpObj as lerpObj,
    fn_clamp as clamp,
    fn_capitalise as capitalise,
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

export { ArrayUtils, CENTURY, CaseInput, ColourUtils, CustomEntryDict, DAY, DECADE, DeferredPromise, HOUR, ITimer, KeysOnly, MILLENNIUM, MILLISECOND, MINUTE, MONTH, Numbered, ObjOfType, ObjectUtils, OfType, Partial$1 as Partial, ProgressBar, ProgressBarOptions, PromiseUtils, QueueManager, RemapOf, SECOND, StringCaseHandler, StringUtils, TimeUtils, WEEK, YEAR, all, allLimit, allLimitObj, allObj, centuries, century, day, days, decade, decades, each, eachLimit, entries, everys, filters, fn, getDeferred, getProgressBar, getTimer, group, groupObj, hour, hours, interval, map, mapLimit, maps, millennium, millenniums, milliseconds, minute, minutes, month, months, ms, partition, printLn, progressBar, queue, randomise, range, reduces, repeat, retry, retryOr, reverse, roll, second, seconds, sortByMapped, sortNumberedText, sorts, stopInterval, superscript, symbols, timer, times, tryOr, wait, waitEvery, waitFor, waitUntil, waiters, week, weeks, year, years, zip, zipMax };
