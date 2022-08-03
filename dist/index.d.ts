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
    [K in keyof T]: (durations: TimerDurations<TName>) => number;
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
        [key: string]: (index: number) => Promise<T_4>;
    }, noThrow?: boolean) => Promise<{
        [key: string]: T_4;
    }>;
};

export { CENTURY, CustomEntryDict, DAY, DECADE, DeferredPromise, HOUR, KeysOnly, MILLENNIUM, MILLISECOND, MINUTE, MONTH, Numbered, Partial$1 as Partial, ProgressBarOptions, PromiseUtils, SECOND, WEEK, YEAR, centuries, century, day, days, decade, decades, getDeferred, getProgressBar, getTimer, hour, hours, interval, millennium, millenniums, milliseconds, minute, minutes, month, months, ms, printLn, progressBar, second, seconds, stopInterval, timer, times, wait, waitEvery, waitFor, waitUntil, waiters, week, weeks, year, years };
