import { safe } from './safe';

/**<!-- DOCS: times ##! 10 -->
 * times
 *
 * A collection of Tools for calculating simple times.
 * Each unit (e.g. second) has: a type (`second`), a constant (`SECOND`) and a function for getting multiples (`seconds(x: second) => ms`)
 *
 * | unit        | type         | constant      | function                           |
 * | ----------- | ------------ | ------------- | ---------------------------------- |
 * | millisecond | `ms`         | `MILLISECOND` | `milliseconds(x: ms) => ms`        |
 * | second      | `second`     | `SECOND`      | `seconds(x: second) => ms`         |
 * | minute      | `minute`     | `MINUTE`      | `minutes(x: minute) => ms`         |
 * | hour        | `hour`       | `HOUR`        | `hours(x: hour) => ms`             |
 * | day         | `day`        | `DAY`         | `days(x: day) => ms`               |
 * | week        | `week`       | `WEEK`        | `weeks(x: week) => ms`             |
 * | month       | `month`      | `MONTH`       | `months(x: month) => ms`           |
 * | year        | `year`       | `YEAR`        | `years(x: year) => ms`             |
 * | decade      | `decade`     | `DECADE`      | `decades(x: decade) => ms`         |
 * | century     | `century`    | `CENTURY`     | `centuries(x: century) => ms`      |
 * | millennium  | `millennium` | `MILLENNIUM`  | `millenniums(x: millennium) => ms` |
 */
export namespace times {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: times.ms ### -1 -->
   * ms
   *
   * - `ms`
   * - `times.ms`
   *
   * Type for number values in millisecond units
   */
  export type ms = number;

  /**<!-- DOCS: times.second ### -1 -->
   * second
   *
   * - `second`
   * - `times.second`
   *
   * Type for number values in second units
   */
  export type second = number;

  /**<!-- DOCS: times.minute ### -1 -->
   * minute
   *
   * - `minute`
   * - `times.minute`
   *
   * Type for number values in minute units
   */
  export type minute = number;

  /**<!-- DOCS: times.hour ### -1 -->
   * hour
   *
   * - `hour`
   * - `times.hour`
   *
   * Type for number values in hour units
   */
  export type hour = number;

  /**<!-- DOCS: times.day ### -1 -->
   * day
   *
   * - `day`
   * - `times.day`
   *
   * Type for number values in day units
   */
  export type day = number;

  /**<!-- DOCS: times.week ### -1 -->
   * week
   *
   * - `week`
   * - `times.week`
   *
   * Type for number values in week units
   */
  export type week = number;

  /**<!-- DOCS: times.month ### -1 -->
   * month
   *
   * - `month`
   * - `times.month`
   *
   * Type for number values in month units
   */
  export type month = number;

  /**<!-- DOCS: times.year ### -1 -->
   * year
   *
   * - `year`
   * - `times.year`
   *
   * Type for number values in year units
   */
  export type year = number;

  /**<!-- DOCS: times.decade ### -1 -->
   * decade
   *
   * - `decade`
   * - `times.decade`
   *
   * Type for number values in decade units
   */
  export type decade = number;

  /**<!-- DOCS: times.century ### -1 -->
   * century
   *
   * - `century`
   * - `times.century`
   *
   * Type for number values in century units
   */
  export type century = number;

  /**<!-- DOCS: times.millennium ### -1 -->
   * millennium
   *
   * - `millennium`
   * - `times.millennium`
   *
   * Type for number values in millennium units
   */
  export type millennium = number;

  /**<!-- DOCS: times.MILLISECOND ### -1 -->
   * MILLISECOND
   *
   * - `MILLISECOND`
   * - `times.MILLISECOND`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `1` (1 millisecond)
   */
  export const MILLISECOND = 1;

  /**<!-- DOCS: times.SECOND ### -1 -->
   * SECOND
   *
   * - `SECOND`
   * - `times.SECOND`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `1000` (1,000 milliseconds)
   */
  export const SECOND = 1000 * MILLISECOND;

  /**<!-- DOCS: times.MINUTE ### -1 -->
   * MINUTE
   *
   * - `MINUTE`
   * - `times.MINUTE`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `60_000` (60 seconds)
   */
  export const MINUTE = 60 * SECOND;

  /**<!-- DOCS: times.HOUR ### -1 -->
   * HOUR
   *
   * - `HOUR`
   * - `times.HOUR`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `3_600_000` (60 minutes)
   */
  export const HOUR = 60 * MINUTE;

  /**<!-- DOCS: times.DAY ### -1 -->
   * DAY
   *
   * - `DAY`
   * - `times.DAY`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `86_400_000` (24 hours)
   */
  export const DAY = 24 * HOUR;

  /**<!-- DOCS: times.WEEK ### -1 -->
   * WEEK
   *
   * - `WEEK`
   * - `times.WEEK`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `604_800_000` (7 days)
   */
  export const WEEK = 7 * DAY;

  /**<!-- DOCS: times.MONTH ### -1 -->
   * MONTH
   *
   * - `MONTH`
   * - `times.MONTH`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `2_592_000_000` (30 days)
   */
  export const MONTH = 30 * DAY;

  /**<!-- DOCS: times.YEAR ### -1 -->
   * YEAR
   *
   * - `YEAR`
   * - `times.YEAR`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `31_557_600_000` (365.25 days)
   */
  export const YEAR = 365.25 * DAY;

  /**<!-- DOCS: times.DECADE ### -1 -->
   * DECADE
   *
   * - `DECADE`
   * - `times.DECADE`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `315_576_000_000` (10 years / 3,652.5 days)
   */
  export const DECADE = 10 * YEAR;

  /**<!-- DOCS: times.CENTURY ### -1 -->
   * CENTURY
   *
   * - `CENTURY`
   * - `times.CENTURY`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `3_155_760_000_000` (100 years / 36,525 days)
   */
  export const CENTURY = 100 * YEAR;

  /**<!-- DOCS: times.MILLENNIUM ### -1 -->
   * MILLENNIUM
   *
   * - `MILLENNIUM`
   * - `times.MILLENNIUM`
   *
   * Constant in ms (millisecond) units
   *
   * Equal to `31_557_600_000_000` (1000 years / 365,250 days)
   */
  export const MILLENNIUM = 1000 * YEAR;

  /**<!-- DOCS: times.milliseconds ### -1 @ -->
   * milliseconds
   *
   * - `milliseconds`
   * - `times.milliseconds`
   *
   * Function that returns the number of milliseconds equal to a multiple of milliseconds
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * milliseconds(); // 1 (1 milliseconds)
   * milliseconds(1); // 1 (1 milliseconds)
   * milliseconds(2); // 2 (2 milliseconds)
   * milliseconds(5); // 5 (5 milliseconds)
   * ```
   * @param {ms} [x=1]
   * @returns {number}
   */
  export const milliseconds = (x: ms = 1): ms => safe.num(x, true);

  /**<!-- DOCS: times.seconds ### -1 @ -->
   * seconds
   *
   * - `seconds`
   * - `times.seconds`
   *
   * Function that returns the number of milliseconds equal to a multiple of seconds
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * seconds(); // 1_000 (1 second)
   * seconds(1); // 1_000 (1 second)
   * seconds(2); // 2_000 (2 seconds)
   * seconds(5); // 5_000 (5 seconds)
   * ```
   * @param {second} [x=1]
   * @returns {number}
   */
  export const seconds = (x: second = 1): ms => Math.round(safe.num(x) * SECOND);

  /**<!-- DOCS: times.minutes ### -1 @ -->
   * minutes
   *
   * - `minutes`
   * - `times.minutes`
   *
   * Function that returns the number of milliseconds equal to a multiple of minutes
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * minutes(); // 60_000 (60 seconds)
   * minutes(1); // 60_000 (60 seconds)
   * minutes(2); // 120_000 (120 seconds)
   * minutes(5); // 300_000 (300 seconds)
   * ```
   * @param {minute} [x=1]
   * @returns {number}
   */
  export const minutes = (x: minute = 1): ms => Math.round(safe.num(x) * MINUTE);

  /**<!-- DOCS: times.hours ### -1 @ -->
   * hours
   *
   * - `hours`
   * - `times.hours`
   *
   * Function that returns the number of milliseconds equal to a multiple of hours
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * hours(); // 3_600_000 (1 hour / 60 minutes)
   * hours(1); // 3_600_000 (1 hour / 60 minutes)
   * hours(2); // 7_200_000 (2 hours / 120 minutes)
   * hours(5); // 18_000_000 (5 hours / 300 minutes)
   * ```
   * @param {hour} [x=1]
   * @returns {number}
   */
  export const hours = (x: hour = 1): ms => Math.round(safe.num(x) * HOUR);

  /**<!-- DOCS: times.days ### -1 @ -->
   * days
   *
   * - `days`
   * - `times.days`
   *
   * Function that returns the number of milliseconds equal to a multiple of days
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * days(); // 86_400_000 (1 day / 24 hours)
   * days(1); // 86_400_000 (1 day / 24 hours)
   * days(2); // 172_800_000 (2 days / 48 hours)
   * days(5); // 432_000_000 (5 days / 120 hours)
   * ```
   * @param {day} [x=1]
   * @returns {number}
   */
  export const days = (x: day = 1): ms => Math.round(safe.num(x) * DAY);

  /**<!-- DOCS: times.weeks ### -1 @ -->
   * weeks
   *
   * - `weeks`
   * - `times.weeks`
   *
   * Function that returns the number of milliseconds equal to a multiple of weeks
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * weeks(); // 604_800_000 (7 days / 168 hours)
   * weeks(1); // 604_800_000 (7 days / 168 hours)
   * weeks(2); // 1_209_600_000 (14 days / 336 hours)
   * weeks(5); // 3_024_000_000 (35 days / 840 hours)
   * ```
   * @param {week} [x=1]
   * @returns {number}
   */
  export const weeks = (x: week = 1): ms => Math.round(safe.num(x) * WEEK);

  /**<!-- DOCS: times.months ### -1 @ -->
   * months
   *
   * - `months`
   * - `times.months`
   *
   * Function that returns the number of milliseconds equal to a multiple of months
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * months(); // 2_592_000_000 (30 days)
   * months(1); // 2_592_000_000 (30 days)
   * months(2); // 5_184_000_000 (60 days)
   * months(5); // 12_960_000_000 (150 days)
   * ```
   * @param {month} [x=1]
   * @returns {number}
   */
  export const months = (x: month = 1): ms => Math.round(safe.num(x) * MONTH);

  /**<!-- DOCS: times.years ### -1 @ -->
   * years
   *
   * - `years`
   * - `times.years`
   *
   * Function that returns the number of milliseconds equal to a multiple of years
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * years(); // 31_557_600_000 (1 year / 365.25 days)
   * years(1); // 31_557_600_000 (1 year / 365.25 days)
   * years(2); // 63_115_200_000 (2 years / 730.5 days)
   * years(5); // 157_788_000_000 (5 years / 1,826.25 days)
   * ```
   * @param {year} [x=1]
   * @returns {number}
   */
  export const years = (x: year = 1): ms => Math.round(safe.num(x) * YEAR);

  /**<!-- DOCS: times.decades ### -1 @ -->
   * decades
   *
   * - `decades`
   * - `times.decades`
   *
   * Function that returns the number of milliseconds equal to a multiple of decades
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * decades(); // 315_576_000_000 (10 years / 3,652.5 days)
   * decades(1); // 315_576_000_000 (10 years / 3,652.5 days)
   * decades(2); // 631_152_000_000 (20 years / 7,305 days)
   * decades(5); // 1_577_880_000_000 (50 years / 18,262.5 days)
   * ```
   * @param {decade} [x=1]
   * @returns {number}
   */
  export const decades = (x: decade = 1): ms => Math.round(safe.num(x) * DECADE);

  /**<!-- DOCS: times.centuries ### -1 @ -->
   * centuries
   *
   * - `centuries`
   * - `times.centuries`
   *
   * Function that returns the number of milliseconds equal to a multiple of centuries
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * centuries(); // 3_155_760_000_000 (100 years / 36,525 days)
   * centuries(1); // 3_155_760_000_000 (100 years / 36,525 days)
   * centuries(2); // 6_311_520_000_000 (200 years / 73,050 days)
   * centuries(5); // 15_778_800_000_000 (500 years / 182,625 days)
   * ```
   * @param {century} [x=1]
   * @returns {number}
   */
  export const centuries = (x: century = 1): ms => Math.round(safe.num(x) * CENTURY);

  /**<!-- DOCS: times.millenniums ### -1 @ -->
   * millenniums
   *
   * - `millenniums`
   * - `times.millenniums`
   *
   * Function that returns the number of milliseconds equal to a multiple of millenniums
   *
   * Note: Rounds to nearest millisecond
   *
   * ```typescript
   * millenniums(); // 31_557_600_000_000 (1000 years / 365,250 days)
   * millenniums(1); // 31_557_600_000_000 (1000 years / 365,250 days)
   * millenniums(2); // 63_115_200_000_000 (2000 years / 730,500 days)
   * millenniums(5); // 157_788_000_000_000 (5000 years / 1,826,250 days)
   * ```
   * @param {millennium} [x=1]
   * @returns {number}
   */
  export const millenniums = (x: millennium = 1): ms => Math.round(safe.num(x) * MILLENNIUM);
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: times.ms  --> */
export type ms = number;
/** <!-- DOCS-ALIAS: times.second  --> */
export type second = number;
/** <!-- DOCS-ALIAS: times.minute  --> */
export type minute = number;
/** <!-- DOCS-ALIAS: times.hour  --> */
export type hour = number;
/** <!-- DOCS-ALIAS: times.day  --> */
export type day = number;
/** <!-- DOCS-ALIAS: times.week --> */
export type week = number;
/** <!-- DOCS-ALIAS: times.month  --> */
export type month = number;
/** <!-- DOCS-ALIAS: times.year  --> */
export type year = number;
/** <!-- DOCS-ALIAS: times.decade  --> */
export type decade = number;
/** <!-- DOCS-ALIAS: times.century  --> */
export type century = number;
/** <!-- DOCS-ALIAS: times.millennium  --> */
export type millennium = number;
/** <!-- DOCS-ALIAS: times.MILLISECOND  --> */
export const MILLISECOND = times.MILLISECOND;
/** <!-- DOCS-ALIAS: times.SECOND  --> */
export const SECOND = times.SECOND;
/** <!-- DOCS-ALIAS: times.MINUTE  --> */
export const MINUTE = times.MINUTE;
/** <!-- DOCS-ALIAS: times.HOUR  --> */
export const HOUR = times.HOUR;
/** <!-- DOCS-ALIAS: times.DAY  --> */
export const DAY = times.DAY;
/** <!-- DOCS-ALIAS: times.WEEK  --> */
export const WEEK = times.WEEK;
/** <!-- DOCS-ALIAS: times.MONTH  --> */
export const MONTH = times.MONTH;
/** <!-- DOCS-ALIAS: times.YEAR  --> */
export const YEAR = times.YEAR;
/** <!-- DOCS-ALIAS: times.DECADE  --> */
export const DECADE = times.DECADE;
/** <!-- DOCS-ALIAS: times.CENTURY  --> */
export const CENTURY = times.CENTURY;
/** <!-- DOCS-ALIAS: times.MILLENNIUM  --> */
export const MILLENNIUM = times.MILLENNIUM;
/** <!-- DOCS-ALIAS: times.milliseconds  --> */
export const milliseconds = times.milliseconds;
/** <!-- DOCS-ALIAS: times.seconds  --> */
export const seconds = times.seconds;
/** <!-- DOCS-ALIAS: times.minutes  --> */
export const minutes = times.minutes;
/** <!-- DOCS-ALIAS: times.hours  --> */
export const hours = times.hours;
/** <!-- DOCS-ALIAS: times.days  --> */
export const days = times.days;
/** <!-- DOCS-ALIAS: times.weeks  --> */
export const weeks = times.weeks;
/** <!-- DOCS-ALIAS: times.months  --> */
export const months = times.months;
/** <!-- DOCS-ALIAS: times.years  --> */
export const years = times.years;
/** <!-- DOCS-ALIAS: times.decades  --> */
export const decades = times.decades;
/** <!-- DOCS-ALIAS: times.centuries  --> */
export const centuries = times.centuries;
/** <!-- DOCS-ALIAS: times.millenniums  --> */
export const millenniums = times.millenniums;
