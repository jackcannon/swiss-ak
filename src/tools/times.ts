/**<!-- DOCS: ## 10 -->
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
  /**<!-- DOCS: ### -1 -->
   * ms
   *
   * - `ms`
   * - `times.ms`
   *
   * Type for number values in millisecond units
   */
  export type ms = number;

  /**<!-- DOCS: ### -1 -->
   * second
   *
   * - `second`
   * - `times.second`
   *
   * Type for number values in second units
   */
  export type second = number;

  /**<!-- DOCS: ### -1 -->
   * minute
   *
   * - `minute`
   * - `times.minute`
   *
   * Type for number values in minute units
   */
  export type minute = number;

  /**<!-- DOCS: ### -1 -->
   * hour
   *
   * - `hour`
   * - `times.hour`
   *
   * Type for number values in hour units
   */
  export type hour = number;

  /**<!-- DOCS: ### -1 -->
   * day
   *
   * - `day`
   * - `times.day`
   *
   * Type for number values in day units
   */
  export type day = number;

  /**<!-- DOCS: ### -1 -->
   * week
   *
   * - `week`
   * - `times.week`
   *
   * Type for number values in week units
   */
  export type week = number;

  /**<!-- DOCS: ### -1 -->
   * month
   *
   * - `month`
   * - `times.month`
   *
   * Type for number values in month units
   */
  export type month = number;

  /**<!-- DOCS: ### -1 -->
   * year
   *
   * - `year`
   * - `times.year`
   *
   * Type for number values in year units
   */
  export type year = number;

  /**<!-- DOCS: ### -1 -->
   * decade
   *
   * - `decade`
   * - `times.decade`
   *
   * Type for number values in decade units
   */
  export type decade = number;

  /**<!-- DOCS: ### -1 -->
   * century
   *
   * - `century`
   * - `times.century`
   *
   * Type for number values in century units
   */
  export type century = number;

  /**<!-- DOCS: ### -1 -->
   * millennium
   *
   * - `millennium`
   * - `times.millennium`
   *
   * Type for number values in millennium units
   */
  export type millennium = number;

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
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

  /**<!-- DOCS: ### -1 -->
   * milliseconds
   *
   * - `milliseconds`
   * - `times.milliseconds`
   *
   * Function that returns the number of milliseconds equal to a multiple of milliseconds
   *
   * ```typescript
   * milliseconds(); // 1 (1 milliseconds)
   * milliseconds(1); // 1 (1 milliseconds)
   * milliseconds(2); // 2 (2 milliseconds)
   * milliseconds(5); // 5 (5 milliseconds)
   * ```
   */
  export const milliseconds = (x: ms = 1): ms => x;

  /**<!-- DOCS: ### -1 -->
   * seconds
   *
   * - `seconds`
   * - `times.seconds`
   *
   * Function that returns the number of milliseconds equal to a multiple of seconds
   *
   * ```typescript
   * seconds(); // 1_000 (1 second)
   * seconds(1); // 1_000 (1 second)
   * seconds(2); // 2_000 (2 seconds)
   * seconds(5); // 5_000 (5 seconds)
   * ```
   */
  export const seconds = (x: second = 1): ms => x * SECOND;

  /**<!-- DOCS: ### -1 -->
   * minutes
   *
   * - `minutes`
   * - `times.minutes`
   *
   * Function that returns the number of milliseconds equal to a multiple of minutes
   *
   * ```typescript
   * minutes(); // 60_000 (60 seconds)
   * minutes(1); // 60_000 (60 seconds)
   * minutes(2); // 120_000 (120 seconds)
   * minutes(5); // 300_000 (300 seconds)
   * ```
   */
  export const minutes = (x: minute = 1): ms => x * MINUTE;

  /**<!-- DOCS: ### -1 -->
   * hours
   *
   * - `hours`
   * - `times.hours`
   *
   * Function that returns the number of milliseconds equal to a multiple of hours
   *
   * ```typescript
   * hours(); // 3_600_000 (1 hour / 60 minutes)
   * hours(1); // 3_600_000 (1 hour / 60 minutes)
   * hours(2); // 7_200_000 (2 hours / 120 minutes)
   * hours(5); // 18_000_000 (5 hours / 300 minutes)
   * ```
   */
  export const hours = (x: hour = 1): ms => x * HOUR;

  /**<!-- DOCS: ### -1 -->
   * days
   *
   * - `days`
   * - `times.days`
   *
   * Function that returns the number of milliseconds equal to a multiple of days
   *
   * ```typescript
   * days(); // 86_400_000 (1 day / 24 hours)
   * days(1); // 86_400_000 (1 day / 24 hours)
   * days(2); // 172_800_000 (2 days / 48 hours)
   * days(5); // 432_000_000 (5 days / 120 hours)
   * ```
   */
  export const days = (x: day = 1): ms => x * DAY;

  /**<!-- DOCS: ### -1 -->
   * weeks
   *
   * - `weeks`
   * - `times.weeks`
   *
   * Function that returns the number of milliseconds equal to a multiple of weeks
   *
   * ```typescript
   * weeks(); // 604_800_000 (7 days / 168 hours)
   * weeks(1); // 604_800_000 (7 days / 168 hours)
   * weeks(2); // 1_209_600_000 (14 days / 336 hours)
   * weeks(5); // 3_024_000_000 (35 days / 840 hours)
   * ```
   */
  export const weeks = (x: week = 1): ms => x * WEEK;

  /**<!-- DOCS: ### -1 -->
   * months
   *
   * - `months`
   * - `times.months`
   *
   * Function that returns the number of milliseconds equal to a multiple of months
   *
   * ```typescript
   * months(); // 2_592_000_000 (30 days)
   * months(1); // 2_592_000_000 (30 days)
   * months(2); // 5_184_000_000 (60 days)
   * months(5); // 12_960_000_000 (150 days)
   * ```
   */
  export const months = (x: month = 1): ms => x * MONTH;

  /**<!-- DOCS: ### -1 -->
   * years
   *
   * - `years`
   * - `times.years`
   *
   * Function that returns the number of milliseconds equal to a multiple of years
   *
   * ```typescript
   * years(); // 31_557_600_000 (1 year / 365.25 days)
   * years(1); // 31_557_600_000 (1 year / 365.25 days)
   * years(2); // 63_115_200_000 (2 years / 730.5 days)
   * years(5); // 157_788_000_000 (5 years / 1,826.25 days)
   * ```
   */
  export const years = (x: year = 1): ms => x * YEAR;

  /**<!-- DOCS: ### -1 -->
   * decades
   *
   * - `decades`
   * - `times.decades`
   *
   * Function that returns the number of milliseconds equal to a multiple of decades
   *
   * ```typescript
   * decades(); // 315_576_000_000 (10 years / 3,652.5 days)
   * decades(1); // 315_576_000_000 (10 years / 3,652.5 days)
   * decades(2); // 631_152_000_000 (20 years / 7,305 days)
   * decades(5); // 1_577_880_000_000 (50 years / 18,262.5 days)
   * ```
   */
  export const decades = (x: decade = 1): ms => x * DECADE;

  /**<!-- DOCS: ### -1 -->
   * centuries
   *
   * - `centuries`
   * - `times.centuries`
   *
   * Function that returns the number of milliseconds equal to a multiple of centuries
   *
   * ```typescript
   * centuries(); // 3_155_760_000_000 (100 years / 36,525 days)
   * centuries(1); // 3_155_760_000_000 (100 years / 36,525 days)
   * centuries(2); // 6_311_520_000_000 (200 years / 73,050 days)
   * centuries(5); // 15_778_800_000_000 (500 years / 182,625 days)
   * ```
   */
  export const centuries = (x: century = 1): ms => x * CENTURY;

  /**<!-- DOCS: ### -1 -->
   * millenniums
   *
   * - `millenniums`
   * - `times.millenniums`
   *
   * Function that returns the number of milliseconds equal to a multiple of millenniums
   *
   * ```typescript
   * millenniums(); // 31_557_600_000_000 (1000 years / 365,250 days)
   * millenniums(1); // 31_557_600_000_000 (1000 years / 365,250 days)
   * millenniums(2); // 63_115_200_000_000 (2000 years / 730,500 days)
   * millenniums(5); // 157_788_000_000_000 (5000 years / 1,826,250 days)
   * ```
   */
  export const millenniums = (x: millennium = 1): ms => x * MILLENNIUM;
}

/** ALIAS - ms */
export type ms = number;
/** ALIAS - second */
export type second = number;
/** ALIAS - minute */
export type minute = number;
/** ALIAS - hour */
export type hour = number;
/** ALIAS - day */
export type day = number;
/** ALIAS - week */
export type week = number;
/** ALIAS - month */
export type month = number;
/** ALIAS - year */
export type year = number;
/** ALIAS - decade */
export type decade = number;
/** ALIAS - century */
export type century = number;
/** ALIAS - millennium */
export type millennium = number;
/** ALIAS - MILLISECOND */
export const MILLISECOND = times.MILLISECOND;
/** ALIAS - SECOND */
export const SECOND = times.SECOND;
/** ALIAS - MINUTE */
export const MINUTE = times.MINUTE;
/** ALIAS - HOUR */
export const HOUR = times.HOUR;
/** ALIAS - DAY */
export const DAY = times.DAY;
/** ALIAS - WEEK */
export const WEEK = times.WEEK;
/** ALIAS - MONTH */
export const MONTH = times.MONTH;
/** ALIAS - YEAR */
export const YEAR = times.YEAR;
/** ALIAS - DECADE */
export const DECADE = times.DECADE;
/** ALIAS - CENTURY */
export const CENTURY = times.CENTURY;
/** ALIAS - MILLENNIUM */
export const MILLENNIUM = times.MILLENNIUM;
/** ALIAS - milliseconds */
export const milliseconds = times.milliseconds;
/** ALIAS - seconds */
export const seconds = times.seconds;
/** ALIAS - minutes */
export const minutes = times.minutes;
/** ALIAS - hours */
export const hours = times.hours;
/** ALIAS - days */
export const days = times.days;
/** ALIAS - weeks */
export const weeks = times.weeks;
/** ALIAS - months */
export const months = times.months;
/** ALIAS - years */
export const years = times.years;
/** ALIAS - decades */
export const decades = times.decades;
/** ALIAS - centuries */
export const centuries = times.centuries;
/** ALIAS - millenniums */
export const millenniums = times.millenniums;
