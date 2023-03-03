/*<!-- DOCS: ## 10 -->
 * times
 *
 * A collection of utils for calculating simple times.
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

export type ms = number;
export type second = number;
export type minute = number;
export type hour = number;
export type day = number;
export type week = number;
export type month = number;
export type year = number;
export type decade = number;
export type century = number;
export type millennium = number;

export const MILLISECOND = 1;
export const SECOND = 1000 * MILLISECOND;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;
export const MONTH = 30 * DAY;
export const YEAR = 365.25 * DAY;
export const DECADE = 10 * YEAR;
export const CENTURY = 100 * YEAR;
export const MILLENNIUM = 1000 * YEAR;

export const milliseconds = (x: ms = 1): ms => x;
export const seconds = (x: second = 1): ms => x * SECOND;
export const minutes = (x: minute = 1): ms => x * MINUTE;
export const hours = (x: hour = 1): ms => x * HOUR;
export const days = (x: day = 1): ms => x * DAY;
export const weeks = (x: week = 1): ms => x * WEEK;
export const months = (x: month = 1): ms => x * MONTH;
export const years = (x: year = 1): ms => x * YEAR;
export const decades = (x: decade = 1): ms => x * DECADE;
export const centuries = (x: century = 1): ms => x * CENTURY;
export const millenniums = (x: millennium = 1): ms => x * MILLENNIUM;
