/**<!-- DOCS: types ##! -->
 * Types
 *
 * Some commonly used typescript types
 */
/**<!-- DOCS: types.Partial ### -->
 * Partial<T>
 *
 * - `Partial<T>`
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
/**<!-- DOCS: types.KeysOnly ### -->
 * KeysOnly<T>
 *
 * - `KeysOnly<T>`
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
/**<!-- DOCS: types.Numbered ### -->
 * Numbered<T>
 *
 * - `Numbered<T>`
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
/**<!-- DOCS: types.OfType ### -->
 * OfType<O, T>
 *
 * - `OfType<O, T>`
 *
 * Makes all the properties of object O have type T
 *
 * > **Note:** This is the same as `RemapOf<O, T>`
 *
 * ```typescript
 * interface IExample {
 *   a: string;
 *   b: boolean;
 * }
 * OfType<IExample, number>; // { a: number; b: number; }
 * ```
 */
declare type OfType<O, T> = {
    [K in keyof O]: T;
};
/**<!-- DOCS: types.ObjOfType ### -->
 * ObjOfType<T>
 *
 * - `ObjOfType<T>`
 *
 * An object with any properties of type T
 *
 * ```typescript
 * type Example = [number, number];
 * ObjOfType<Example>; // { [key: string]: Example; }
 * ```
 */
declare type ObjOfType<T = string> = {
    [key: string]: T;
};
/**<!-- DOCS: types.RemapOf ### -->
 * RemapOf<O, T>
 *
 * - `RemapOf<O, T>`
 *
 * Remap a given interface (O) with all properties of type T
 *
 * > **Note:** This is the same as `OfType<O, T>`
 *
 * ```typescript
 * interface IExample {
 *   a: string;
 *   b: boolean;
 * }
 * RemapOf<IExample, number>; // { a: number; b: number; }
 * ```
 */
declare type RemapOf<O = Object, T = string> = {
    [K in keyof O]: T;
};

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
declare namespace times {
    /**<!-- DOCS: times.ms ### -1 -->
     * ms
     *
     * - `ms`
     * - `times.ms`
     *
     * Type for number values in millisecond units
     */
    type ms = number;
    /**<!-- DOCS: times.second ### -1 -->
     * second
     *
     * - `second`
     * - `times.second`
     *
     * Type for number values in second units
     */
    type second = number;
    /**<!-- DOCS: times.minute ### -1 -->
     * minute
     *
     * - `minute`
     * - `times.minute`
     *
     * Type for number values in minute units
     */
    type minute = number;
    /**<!-- DOCS: times.hour ### -1 -->
     * hour
     *
     * - `hour`
     * - `times.hour`
     *
     * Type for number values in hour units
     */
    type hour = number;
    /**<!-- DOCS: times.day ### -1 -->
     * day
     *
     * - `day`
     * - `times.day`
     *
     * Type for number values in day units
     */
    type day = number;
    /**<!-- DOCS: times.week ### -1 -->
     * week
     *
     * - `week`
     * - `times.week`
     *
     * Type for number values in week units
     */
    type week = number;
    /**<!-- DOCS: times.month ### -1 -->
     * month
     *
     * - `month`
     * - `times.month`
     *
     * Type for number values in month units
     */
    type month = number;
    /**<!-- DOCS: times.year ### -1 -->
     * year
     *
     * - `year`
     * - `times.year`
     *
     * Type for number values in year units
     */
    type year = number;
    /**<!-- DOCS: times.decade ### -1 -->
     * decade
     *
     * - `decade`
     * - `times.decade`
     *
     * Type for number values in decade units
     */
    type decade = number;
    /**<!-- DOCS: times.century ### -1 -->
     * century
     *
     * - `century`
     * - `times.century`
     *
     * Type for number values in century units
     */
    type century = number;
    /**<!-- DOCS: times.millennium ### -1 -->
     * millennium
     *
     * - `millennium`
     * - `times.millennium`
     *
     * Type for number values in millennium units
     */
    type millennium = number;
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
    const MILLISECOND = 1;
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
    const SECOND: number;
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
    const MINUTE: number;
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
    const HOUR: number;
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
    const DAY: number;
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
    const WEEK: number;
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
    const MONTH: number;
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
    const YEAR: number;
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
    const DECADE: number;
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
    const CENTURY: number;
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
    const MILLENNIUM: number;
    /**<!-- DOCS: times.milliseconds ### -1 @ -->
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
     * @param {ms} [x=1]
     * @returns {number}
     */
    const milliseconds: (x?: ms) => ms;
    /**<!-- DOCS: times.seconds ### -1 @ -->
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
     * @param {second} [x=1]
     * @returns {number}
     */
    const seconds: (x?: second) => ms;
    /**<!-- DOCS: times.minutes ### -1 @ -->
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
     * @param {minute} [x=1]
     * @returns {number}
     */
    const minutes: (x?: minute) => ms;
    /**<!-- DOCS: times.hours ### -1 @ -->
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
     * @param {hour} [x=1]
     * @returns {number}
     */
    const hours: (x?: hour) => ms;
    /**<!-- DOCS: times.days ### -1 @ -->
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
     * @param {day} [x=1]
     * @returns {number}
     */
    const days: (x?: day) => ms;
    /**<!-- DOCS: times.weeks ### -1 @ -->
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
     * @param {week} [x=1]
     * @returns {number}
     */
    const weeks: (x?: week) => ms;
    /**<!-- DOCS: times.months ### -1 @ -->
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
     * @param {month} [x=1]
     * @returns {number}
     */
    const months: (x?: month) => ms;
    /**<!-- DOCS: times.years ### -1 @ -->
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
     * @param {year} [x=1]
     * @returns {number}
     */
    const years: (x?: year) => ms;
    /**<!-- DOCS: times.decades ### -1 @ -->
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
     * @param {decade} [x=1]
     * @returns {number}
     */
    const decades: (x?: decade) => ms;
    /**<!-- DOCS: times.centuries ### -1 @ -->
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
     * @param {century} [x=1]
     * @returns {number}
     */
    const centuries: (x?: century) => ms;
    /**<!-- DOCS: times.millenniums ### -1 @ -->
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
     * @param {millennium} [x=1]
     * @returns {number}
     */
    const millenniums: (x?: millennium) => ms;
}
/**<!-- DOCS-ALIAS: times.ms -->
 * ms
 * 
 * - `ms`
 * - `times.ms`
 * 
 * Type for number values in millisecond units
 */
declare type ms = number;
/**<!-- DOCS-ALIAS: times.second -->
 * second
 * 
 * - `second`
 * - `times.second`
 * 
 * Type for number values in second units
 */
declare type second = number;
/**<!-- DOCS-ALIAS: times.minute -->
 * minute
 * 
 * - `minute`
 * - `times.minute`
 * 
 * Type for number values in minute units
 */
declare type minute = number;
/**<!-- DOCS-ALIAS: times.hour -->
 * hour
 * 
 * - `hour`
 * - `times.hour`
 * 
 * Type for number values in hour units
 */
declare type hour = number;
/**<!-- DOCS-ALIAS: times.day -->
 * day
 * 
 * - `day`
 * - `times.day`
 * 
 * Type for number values in day units
 */
declare type day = number;
/**<!-- DOCS-ALIAS: times.week -->
 * week
 * 
 * - `week`
 * - `times.week`
 * 
 * Type for number values in week units
 */
declare type week = number;
/**<!-- DOCS-ALIAS: times.month -->
 * month
 * 
 * - `month`
 * - `times.month`
 * 
 * Type for number values in month units
 */
declare type month = number;
/**<!-- DOCS-ALIAS: times.year -->
 * year
 * 
 * - `year`
 * - `times.year`
 * 
 * Type for number values in year units
 */
declare type year = number;
/**<!-- DOCS-ALIAS: times.decade -->
 * decade
 * 
 * - `decade`
 * - `times.decade`
 * 
 * Type for number values in decade units
 */
declare type decade = number;
/**<!-- DOCS-ALIAS: times.century -->
 * century
 * 
 * - `century`
 * - `times.century`
 * 
 * Type for number values in century units
 */
declare type century = number;
/**<!-- DOCS-ALIAS: times.millennium -->
 * millennium
 * 
 * - `millennium`
 * - `times.millennium`
 * 
 * Type for number values in millennium units
 */
declare type millennium = number;
/**<!-- DOCS-ALIAS: times.MILLISECOND -->
 * MILLISECOND
 * 
 * - `MILLISECOND`
 * - `times.MILLISECOND`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `1` (1 millisecond)
 */
declare const MILLISECOND = 1;
/**<!-- DOCS-ALIAS: times.SECOND -->
 * SECOND
 * 
 * - `SECOND`
 * - `times.SECOND`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `1000` (1,000 milliseconds)
 */
declare const SECOND: number;
/**<!-- DOCS-ALIAS: times.MINUTE -->
 * MINUTE
 * 
 * - `MINUTE`
 * - `times.MINUTE`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `60_000` (60 seconds)
 */
declare const MINUTE: number;
/**<!-- DOCS-ALIAS: times.HOUR -->
 * HOUR
 * 
 * - `HOUR`
 * - `times.HOUR`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `3_600_000` (60 minutes)
 */
declare const HOUR: number;
/**<!-- DOCS-ALIAS: times.DAY -->
 * DAY
 * 
 * - `DAY`
 * - `times.DAY`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `86_400_000` (24 hours)
 */
declare const DAY: number;
/**<!-- DOCS-ALIAS: times.WEEK -->
 * WEEK
 * 
 * - `WEEK`
 * - `times.WEEK`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `604_800_000` (7 days)
 */
declare const WEEK: number;
/**<!-- DOCS-ALIAS: times.MONTH -->
 * MONTH
 * 
 * - `MONTH`
 * - `times.MONTH`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `2_592_000_000` (30 days)
 */
declare const MONTH: number;
/**<!-- DOCS-ALIAS: times.YEAR -->
 * YEAR
 * 
 * - `YEAR`
 * - `times.YEAR`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `31_557_600_000` (365.25 days)
 */
declare const YEAR: number;
/**<!-- DOCS-ALIAS: times.DECADE -->
 * DECADE
 * 
 * - `DECADE`
 * - `times.DECADE`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `315_576_000_000` (10 years / 3,652.5 days)
 */
declare const DECADE: number;
/**<!-- DOCS-ALIAS: times.CENTURY -->
 * CENTURY
 * 
 * - `CENTURY`
 * - `times.CENTURY`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `3_155_760_000_000` (100 years / 36,525 days)
 */
declare const CENTURY: number;
/**<!-- DOCS-ALIAS: times.MILLENNIUM -->
 * MILLENNIUM
 * 
 * - `MILLENNIUM`
 * - `times.MILLENNIUM`
 * 
 * Constant in ms (millisecond) units
 * 
 * Equal to `31_557_600_000_000` (1000 years / 365,250 days)
 */
declare const MILLENNIUM: number;
/**<!-- DOCS-ALIAS: times.milliseconds -->
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
 * @param {ms} [x=1]
 * @returns {number}
 */
declare const milliseconds: (x?: ms) => ms;
/**<!-- DOCS-ALIAS: times.seconds -->
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
 * @param {second} [x=1]
 * @returns {number}
 */
declare const seconds: (x?: second) => ms;
/**<!-- DOCS-ALIAS: times.minutes -->
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
 * @param {minute} [x=1]
 * @returns {number}
 */
declare const minutes: (x?: minute) => ms;
/**<!-- DOCS-ALIAS: times.hours -->
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
 * @param {hour} [x=1]
 * @returns {number}
 */
declare const hours: (x?: hour) => ms;
/**<!-- DOCS-ALIAS: times.days -->
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
 * @param {day} [x=1]
 * @returns {number}
 */
declare const days: (x?: day) => ms;
/**<!-- DOCS-ALIAS: times.weeks -->
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
 * @param {week} [x=1]
 * @returns {number}
 */
declare const weeks: (x?: week) => ms;
/**<!-- DOCS-ALIAS: times.months -->
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
 * @param {month} [x=1]
 * @returns {number}
 */
declare const months: (x?: month) => ms;
/**<!-- DOCS-ALIAS: times.years -->
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
 * @param {year} [x=1]
 * @returns {number}
 */
declare const years: (x?: year) => ms;
/**<!-- DOCS-ALIAS: times.decades -->
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
 * @param {decade} [x=1]
 * @returns {number}
 */
declare const decades: (x?: decade) => ms;
/**<!-- DOCS-ALIAS: times.centuries -->
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
 * @param {century} [x=1]
 * @returns {number}
 */
declare const centuries: (x?: century) => ms;
/**<!-- DOCS-ALIAS: times.millenniums -->
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
 * @param {millennium} [x=1]
 * @returns {number}
 */
declare const millenniums: (x?: millennium) => ms;

/**<!-- DOCS: waiters ##! -->
 * waiters
 *
 * Async functions that return promises at or after a given time.
 *
 * 'Accurate/pinged' waiters ping at intermediary points to resolve at a more accurate time.
 *
 * | Name      | Description                                          | Example                                         |
 * | --------- | ---------------------------------------------------- | ----------------------------------------------- |
 * | wait      | Standard wait promise (using setTimeout)             | `minutes(2)` = in 2 minutes                     |
 * | waitFor   | Accurate (pinged) wait the given ms                  | `minutes(2)` = in 2 minutes                     |
 * | waitUntil | Accurate (pinged) wait until given time              | `Date.now() + minutes(2)` = in 2 minutes        |
 * | waitEvery | Accurate (pinged) wait for next 'every X' event      | `hours(1)` = next full hour (e.g. 17:00, 22:00) |
 * | interval  | Accurate (pinged) interval for every 'every X' event | `hours(1)` = every hour, on the hour            |
 */
declare namespace waiters {
    /**<!-- DOCS: waiters.wait ### @ -->
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
     * @param {ms} time
     * @returns {Promise<unknown>}
     */
    const wait: (time: ms) => Promise<unknown>;
    /**<!-- DOCS: waiters.waitUntil ### @ -->
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
     * @param {ms} time
     * @returns {Promise<null>}
     */
    const waitUntil: (time: ms) => Promise<null>;
    /**<!-- DOCS: waiters.waitFor ### @ -->
     * waitFor
     *
     * - `waitFor`
     * - `waiters.waitFor`
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
     * @param {ms} time
     * @returns {Promise<null>}
     */
    const waitFor: (time: ms) => Promise<null>;
    /**<!-- DOCS: waiters.waitEvery ### @ -->
     * waitEvery
     *
     * - `waitEvery`
     * - `waiters.waitEvery`
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
     * @param {ms} timing
     * @param {ms} [offset]
     * @returns {Promise<null>}
     */
    const waitEvery: (timing: ms, offset?: ms) => Promise<null>;
    /**<!-- DOCS: waiters.stopInterval ### @ -->
     * stopInterval
     *
     * - `stopInterval`
     * - `waiters.stopInterval`
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
     * @param {number} intID
     * @returns {number}
     */
    const stopInterval: (intID: number) => number;
    /**<!-- DOCS: waiters.interval ### @ -->
     * interval
     *
     * - `interval`
     * - `waiters.interval`
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
     * @param {(intID?: number, count?: number) => any} action
     * @param {ms} timing
     * @returns {number}
     */
    const interval: (action: (intID?: number, count?: number) => any, timing: ms) => number;
}
/**<!-- DOCS-ALIAS: waiters.wait -->
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
 * @param {ms} time
 * @returns {Promise<unknown>}
 */
declare const wait: (time: ms) => Promise<unknown>;
/**<!-- DOCS-ALIAS: waiters.waitUntil -->
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
 * @param {ms} time
 * @returns {Promise<null>}
 */
declare const waitUntil: (time: ms) => Promise<null>;
/**<!-- DOCS-ALIAS: waiters.waitFor -->
 * waitFor
 * 
 * - `waitFor`
 * - `waiters.waitFor`
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
 * @param {ms} time
 * @returns {Promise<null>}
 */
declare const waitFor: (time: ms) => Promise<null>;
/**<!-- DOCS-ALIAS: waiters.waitEvery -->
 * waitEvery
 * 
 * - `waitEvery`
 * - `waiters.waitEvery`
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
 * @param {ms} timing
 * @param {ms} [offset]
 * @returns {Promise<null>}
 */
declare const waitEvery: (timing: ms, offset?: ms) => Promise<null>;
/**<!-- DOCS-ALIAS: waiters.stopInterval -->
 * stopInterval
 * 
 * - `stopInterval`
 * - `waiters.stopInterval`
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
 * @param {number} intID
 * @returns {number}
 */
declare const stopInterval: (intID: number) => number;
/**<!-- DOCS-ALIAS: waiters.interval -->
 * interval
 * 
 * - `interval`
 * - `waiters.interval`
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
 * @param {(intID?: number, count?: number) => any} action
 * @param {ms} timing
 * @returns {number}
 */
declare const interval: (action: (intID?: number, count?: number) => any, timing: ms) => number;

/**<!-- DOCS: fn ##! -->
 * fn
 *
 * A collection of useful higher-order functions.
 */
declare namespace fn {
    /**<!-- DOCS: fn.noop ### @ -->
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
     * @returns {void}
     */
    export const noop: () => void;
    /**<!-- DOCS: fn.noact ### @ -->
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
     * @param {T} [item]
     * @returns {T}
     */
    export const noact: <T = any>(item?: T) => T;
    /**<!-- DOCS: fn.result ### @ -->
     * result
     *
     * - `fn.result`
     *
     * Returns a function that returns the first argument.
     *
     * ```typescript
     * const items = stuff
     *   .filter(condition ? mapSomething : fn.result(true))
     * ```
     * @param {T} [item]
     * @returns {() => T}
     */
    export const result: <T = any>(item?: T) => () => T;
    /**<!-- DOCS: fn.resolve ### @ -->
     * resolve
     *
     * - `fn.resolve`
     *
     * Returns an async function that resolves to the first argument
     *
     * Like fn.result, but wrapped in a Promise
     * @param {T} [item]
     * @returns {() => Promise<T>}
     */
    export const resolve: <T = any>(item?: T) => () => Promise<T>;
    /**<!-- DOCS: fn.reject ### @ -->
     * reject
     *
     * - `fn.reject`
     *
     * Returns an async function that rejects with the first argument
     * @param {T} [item]
     * @returns {() => Promise<T>}
     */
    export const reject: <T = any>(item?: T) => () => Promise<T>;
    /**<!-- DOCS: fn.filters ### -->
     * filters
     *
     * - `fn.filters`
     *
     * Collection of functions that can be used with Array.filter
     */
    /**<!-- DOCS: fn.exists #### @ -->
     * exists
     *
     * - `fn.exists`
     * - `fn.filters.exists`
     * - `filters.exists`
     *
     * Returns true if item isn't null or undefined.
     *
     * ```typescript
     * [null, 1, undefined, 2].filter(fn.exists); // [1, 2]
     * ```
     * @param {T} item
     * @returns {boolean}
     */
    export const exists: <T = any>(item: T) => boolean;
    /**<!-- DOCS: fn.isTruthy #### @ -->
     * isTruthy
     *
     * - `fn.isTruthy`
     * - `fn.filters.isTruthy`
     * - `filters.isTruthy`
     *
     * Returns true if item is truthy.
     *
     * ```typescript
     * [0, 1, 2].filter(fn.isTruthy); // [1, 2]
     * ['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
     * ```
     * @param {T} item
     * @returns {boolean}
     */
    export const isTruthy: <T = any>(item: T) => boolean;
    /**<!-- DOCS: fn.isFalsy #### @ -->
     * isFalsy
     *
     * - `fn.isFalsy`
     * - `fn.filters.isFalsy`
     * - `filters.isFalsy`
     *
     * Returns true if item is falsy.
     *
     * ```typescript
     * [0, 1, 2].filter(fn.isFalsy); // [0]
     * ['', 'a', 'b'].filter(fn.isFalsy); // ['']
     * ```
     * @param {T} item
     * @returns {boolean}
     */
    export const isFalsy: <T = any>(item: T) => boolean;
    /**<!-- DOCS: fn.isEmpty #### @ -->
     * isEmpty
     *
     * - `fn.isEmpty`
     * - `fn.filters.isEmpty`
     * - `filters.isEmpty`
     *
     * Returns true if item's length is 0
     *
     * ```typescript
     * ['', 'a', 'b'].filter(fn.isEmpty); // ['']
     * [[], [1], [2]].filter(fn.isEmpty); // [[]]
     * ```
     * @param {T[] | string} item
     * @returns {boolean}
     */
    export const isEmpty: <T = any>(item: string | T[]) => boolean;
    /**<!-- DOCS: fn.isNotEmpty #### @ -->
     * isNotEmpty
     *
     * - `fn.isNotEmpty`
     * - `fn.filters.isNotEmpty`
     * - `filters.isNotEmpty`
     *
     * Returns true if item's length is 1 or more
     *
     * ```typescript
     * ['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
     * [[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
     * ```
     * @param {T[] | string} item
     * @returns {boolean}
     */
    export const isNotEmpty: <T = any>(item: string | T[]) => boolean;
    /**<!-- DOCS: fn.isEqual #### @ -->
     * isEqual
     *
     * - `fn.isEqual`
     * - `fn.filters.isEqual`
     * - `filters.isEqual`
     *
     * Returns a function that returns true if the item is equal to provided value.
     *
     * ```typescript
     * [0, 1, 2].filter(fn.isEqual(1)); // [1]
     * ```
     * @param {T} item
     * @returns {(other: T) => boolean}
     */
    export const isEqual: <T = any>(item: T) => (other: T) => boolean;
    /**<!-- DOCS: fn.isNotEqual #### @ -->
     * isNotEqual
     *
     * - `fn.isNotEqual`
     * - `fn.filters.isNotEqual`
     * - `filters.isNotEqual`
     *
     * Returns a function that returns true if the item is not equal to provided value.
     *
     * ```typescript
     * [0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
     * ```
     * @param {T} item
     * @returns {(other: T) => boolean}
     */
    export const isNotEqual: <T = any>(item: T) => (other: T) => boolean;
    /**<!-- DOCS: fn.dedupe #### @ -->
     * dedupe
     *
     * - `fn.dedupe`
     * - `fn.filters.dedupe`
     * - `filters.dedupe`
     *
     * Removes duplicate items from an array.
     *
     * ```typescript
     * [0, 1, 2, 1, 0].filter(fn.dedupe); // [0, 1, 2]
     * ```
     * @param {T} item
     * @param {number} index
     * @param {T[]} array
     * @returns {boolean}
     */
    export const dedupe: <T extends unknown>(item: T, index: number, array: T[]) => boolean;
    /**<!-- DOCS: fn.dedupeMapped #### @ -->
     * dedupeMapped
     *
     * - `fn.dedupeMapped`
     * - `fn.filters.dedupeMapped`
     * - `filters.dedupeMapped`
     *
     * Removes duplicate items from an array based on a mapped value.
     *
     * ```typescript
     * [2, 4, 6, 8, 10, 12].filter(fn.dedupeMapped((v) => v % 3)); // [ 2, 4, 6 ] (maps to [ 2, 1, 0, 2, 1, 0 ])
     * ```
     * @param {(value?: T, index?: number, array?: T[]) => U} mapFn
     * @returns {(item: T, index: number, array: T[]) => boolean}
     */
    export const dedupeMapped: <T extends unknown, U extends unknown>(mapFn: (value?: T, index?: number, array?: T[]) => U) => (item: T, index: number, array: T[]) => boolean;
    /**<!-- DOCS: fn.maps ### -->
     * maps
     *
     * - `fn.maps`
     *
     * Collection of functions that can be used with Array.map
     */
    /**<!-- DOCS: fn.toString #### @ -->
     * toString
     *
     * - `fn.toString`
     * - `fn.maps.toString`
     * - `maps.toString`
     *
     * Maps the item to a string.
     *
     * ```typescript
     * [0, 1, 2].map(fn.toString); // ['0', '1', '2']
     * ```
     * @param {T} item
     * @returns {string}
     */
    export const toString: <T = any>(item: T) => string;
    /**<!-- DOCS: fn.toNumber #### @ -->
     * toNumber
     *
     * - `fn.toNumber`
     * - `fn.maps.toNumber`
     * - `maps.toNumber`
     *
     * Maps the item to a number.
     *
     * ```typescript
     * ['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
     * ```
     * @param {T} item
     * @returns {number}
     */
    export const toNumber: <T = any>(item: T) => number;
    /**<!-- DOCS: fn.toBool #### @ -->
     * toBool
     *
     * - `fn.toBool`
     * - `fn.maps.toBool`
     * - `maps.toBool`
     *
     * Maps the item to a boolean.
     *
     * ```typescript
     * [0, 1, 2].map(fn.toBool); // [false, true, true]
     * ['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
     * ```
     * @param {T} item
     * @returns {boolean}
     */
    export const toBool: <T = any>(item: T) => boolean;
    /**<!-- DOCS: fn.toProp #### @ -->
     * toProp
     *
     * - `fn.toProp`
     * - `fn.maps.toProp`
     * - `maps.toProp`
     *
     * Maps the item to a given property of the item
     *
     * ```typescript
     * [{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
     * ```
     * @param {string | number} prop
     * @returns {(item: O) => P}
     */
    export const toProp: <P = string, O = Object>(prop: string | number) => (item: O) => P;
    /**<!-- DOCS: fn.toFixed #### @ -->
     * toFixed
     *
     * - `fn.toFixed`
     * - `fn.maps.toFixed`
     * - `maps.toFixed`
     *
     * Map the items (numbers) of an array to a fixed precision.
     *
     * ```typescript
     * [1.234, 5.678, 9.012].map(fn.toFixed(2)); // [1.23, 5.68, 9.01]
     * ```
     * @param {number} precision
     * @returns {(num: number) => number}
     */
    export const toFixed: (precision: number) => (num: number) => number;
    /**<!-- DOCS: fn.sorts ### -->
     * sorts
     *
     * - `fn.sorts`
     *
     * Collection of functions that can be used with Array.sort
     */
    /**<!-- DOCS: fn.asc #### @ -->
     * asc
     *
     * - `fn.asc`
     * - `fn.sorts.asc`
     * - `sorts.asc`
     *
     * Sort ascending.
     *
     * ```typescript
     * [2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
     * ```
     * @param {any} a
     * @param {any} b
     * @returns {number}
     */
    export const asc: (a: any, b: any) => number;
    /**<!-- DOCS: fn.desc #### @ -->
     * desc
     *
     * - `fn.desc`
     * - `fn.sorts.desc`
     * - `sorts.desc`
     *
     * Sort descending.
     *
     * ```typescript
     * [2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
     * ```
     * @param {any} a
     * @param {any} b
     * @returns {number}
     */
    export const desc: (a: any, b: any) => number;
    type SortFn<T = number> = (a: T, b: T) => number;
    /**<!-- DOCS: fn.byProp #### @ -->
     * byProp
     *
     * - `fn.byProp`
     * - `fn.sorts.byProp`
     * - `sorts.byProp`
     *
     * Sort by a given property.
     *
     * ```typescript
     * const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
     * people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
     * ```
     * @param {string | number} propName
     * @param {SortFn<T>} [sortFn=asc]
     * @returns {SortFn<O>}
     */
    export const byProp: <T = number, O = Object>(propName: string | number, sortFn?: SortFn<T>) => SortFn<O>;
    /**<!-- DOCS: fn.nearestTo #### @ -->
     * nearestTo
     *
     * - `fn.nearestTo`
     * - `fn.sorts.nearestTo`
     * - `sorts.nearestTo`
     *
     * Sort by the nearest value to the given value.
     *
     * Values get converted to numbers before comparison.
     *
     * ```typescript
     * const people = [2, 4, 3, 1];
     * people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
     * ```
     * @param {T} target
     * @returns {(a: any, b: any) => number}
     */
    export const nearestTo: <T = number>(target: T) => (a: any, b: any) => number;
    /**<!-- DOCS: fn.furthestFrom #### @ -->
     * furthestFrom
     *
     * - `fn.furthestFrom`
     * - `fn.sorts.furthestFrom`
     * - `sorts.furthestFrom`
     *
     * Sort by the furthest value to the given value.
     *
     * ```typescript
     * const people = [2, 4, 3, 1];
     * people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
     * ```
     * @param {T} target
     * @returns {(a: any, b: any) => number}
     */
    export const furthestFrom: <T = number>(target: T) => (a: any, b: any) => number;
    /**<!-- DOCS: fn.array #### @ -->
     * array
     *
     * - `fn.array`
     * - `fn.sorts.array`
     * - `sorts.array`
     *
     * Sort an array of arrays by the given sort function.
     *
     * Sorts by the first item in the array, then the second, etc. until a non-zero result is found.
     * @param {SortFn<T>} [sortFn=asc]
     * @returns {(a: T[], b: T[]) => number}
     */
    export const array: <T extends unknown>(sortFn?: SortFn<T>) => (a: T[], b: T[]) => number;
    /**<!-- DOCS: fn.arrayAsc #### @ -->
     * arrayAsc
     *
     * - `fn.arrayAsc`
     * - `fn.sorts.arrayAsc`
     * - `sorts.arrayAsc`
     *
     * Sort an array of arrays in ascending order
     *
     * Sorts by the first item in the array, then the second, etc. until a non-zero result is found.
     */
    export const arrayAsc: (a: any[], b: any[]) => number;
    /**<!-- DOCS: fn.arrayDesc #### @ -->
     * arrayDesc
     *
     * - `fn.arrayDesc`
     * - `fn.sorts.arrayDesc`
     * - `sorts.arrayDesc`
     *
     * Sort an array of arrays in descending order
     *
     * Sorts by the first item in the array, then the second, etc. until a non-zero result is found.
     */
    export const arrayDesc: (a: any[], b: any[]) => number;
    /**<!-- DOCS: fn.reduces ### -->
     * reduces
     *
     * - `fn.reduces`
     *
     * Collection of functions that can be used with Array.reduce
     */
    /**<!-- DOCS: fn.combine #### @ -->
     * combine
     *
     * - `fn.combine`
     * - `fn.reduces.combine`
     * - `reduces.combine`
     *
     * Adds or concats the items
     *
     * ```typescript
     * [1, 2, 3].reduce(fn.combine); // 6
     * ['a', 'b', 'c'].reduce(fn.combine); // 'abc'
     * ```
     * @param {T} a
     * @param {T} b
     * @returns {T}
     */
    export const combine: <T extends unknown = number>(a: T, b: T) => T;
    /**<!-- DOCS: fn.combineProp #### @ -->
     * combineProp
     *
     * - `fn.combineProp`
     * - `fn.reduces.combineProp`
     * - `reduces.combineProp`
     *
     * Adds or concats the given property of the items
     *
     * ```typescript
     * const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
     * people.reduce(fn.combineProp('age')); // 6
     * people.reduce(fn.combineProp('name')); // 'abc'
     * ```
     * @param {string | number} propName
     * @returns {(a: O | T, b: O) => T}
     */
    export const combineProp: <O extends unknown, T extends unknown = number>(propName: string | number) => (a: O | T, b: O) => T;
    /**<!-- DOCS: fn.mode #### @ -->
     * mode
     *
     * - `fn.mode`
     * - `fn.reduces.mode`
     * - `reduces.mode`
     *
     * Returns the most common value in an array.
     *
     * ```typescript
     * [1, 2, 3, 2, 1, 1].reduce(fn.mode); // 1
     * ```
     * @param {T} prev
     * @param {T} curr
     * @param {number} index
     * @param {T[]} arr
     * @returns {T}
     */
    export const mode: <T extends unknown>(prev: T, curr: T, index: number, arr: T[]) => T;
    /**<!-- DOCS: fn.modeMapped #### @ -->
     * modeMapped
     *
     * - `fn.modeMapped`
     * - `fn.reduces.modeMapped`
     * - `reduces.modeMapped`
     *
     * Returns the most common value in an array, based on a given map function.
     *
     * ```typescript
     * [2, 4, 6, 8, 9, 12].reduce(fn.modeMapped((v) => v % 3)); // 6 (maps to [ 2, 1, 0, 2, 0, 0 ])
     * ```
     * @param {(value: T, index: number, array: T[]) => U} mapFn
     * @returns {(prev: T, curr: T, index: number, arr: T[]) => T}
     */
    export const modeMapped: <T extends unknown, U extends unknown>(mapFn: (value: T, index: number, array: T[]) => U) => (prev: T, curr: T, index: number, arr: T[]) => T;
    /**<!-- DOCS: fn.everys ### -->
     * everys
     *
     * - `fn.everys`
     *
     * Collection of functions that can be used with Array.every
     */
    /**<!-- DOCS: fn.isAllEqual #### @ -->
     * isAllEqual
     *
     * - `fn.isAllEqual`
     * - `fn.everys.isAllEqual`
     * - `everys.isAllEqual`
     *
     * Returns if all the items are equal to one another.
     *
     * ```typescript
     * [1, 1, 1].every(fn.isAllEqual); // true
     * [1, 2, 1].every(fn.isAllEqual); // false
     * ```
     * @param {T} val
     * @param {T[]} arr
     * @returns {boolean}
     */
    export const isAllEqual: <T = any>(val: T, i: any, arr: T[]) => boolean;
    /**<!-- DOCS-ALIAS: fn.filters -->
     * filters
     * 
     * - `fn.filters`
     * 
     * Collection of functions that can be used with Array.filter
     */
    export namespace filters {
        /**<!-- DOCS-ALIAS: fn.exists -->
         * exists
         * 
         * - `fn.exists`
         * - `fn.filters.exists`
         * - `filters.exists`
         * 
         * Returns true if item isn't null or undefined.
         * 
         * ```typescript
         * [null, 1, undefined, 2].filter(fn.exists); // [1, 2]
         * ```
         * @param {T} item
         * @returns {boolean}
         */
        const exists: <T = any>(item: T) => boolean;
        /**<!-- DOCS-ALIAS: fn.isTruthy -->
         * isTruthy
         * 
         * - `fn.isTruthy`
         * - `fn.filters.isTruthy`
         * - `filters.isTruthy`
         * 
         * Returns true if item is truthy.
         * 
         * ```typescript
         * [0, 1, 2].filter(fn.isTruthy); // [1, 2]
         * ['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
         * ```
         * @param {T} item
         * @returns {boolean}
         */
        const isTruthy: <T = any>(item: T) => boolean;
        /**<!-- DOCS-ALIAS: fn.isFalsy -->
         * isFalsy
         * 
         * - `fn.isFalsy`
         * - `fn.filters.isFalsy`
         * - `filters.isFalsy`
         * 
         * Returns true if item is falsy.
         * 
         * ```typescript
         * [0, 1, 2].filter(fn.isFalsy); // [0]
         * ['', 'a', 'b'].filter(fn.isFalsy); // ['']
         * ```
         * @param {T} item
         * @returns {boolean}
         */
        const isFalsy: <T = any>(item: T) => boolean;
        /**<!-- DOCS-ALIAS: fn.isEmpty -->
         * isEmpty
         * 
         * - `fn.isEmpty`
         * - `fn.filters.isEmpty`
         * - `filters.isEmpty`
         * 
         * Returns true if item's length is 0
         * 
         * ```typescript
         * ['', 'a', 'b'].filter(fn.isEmpty); // ['']
         * [[], [1], [2]].filter(fn.isEmpty); // [[]]
         * ```
         * @param {T[] | string} item
         * @returns {boolean}
         */
        const isEmpty: <T = any>(item: string | T[]) => boolean;
        /**<!-- DOCS-ALIAS: fn.isNotEmpty -->
         * isNotEmpty
         * 
         * - `fn.isNotEmpty`
         * - `fn.filters.isNotEmpty`
         * - `filters.isNotEmpty`
         * 
         * Returns true if item's length is 1 or more
         * 
         * ```typescript
         * ['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
         * [[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
         * ```
         * @param {T[] | string} item
         * @returns {boolean}
         */
        const isNotEmpty: <T = any>(item: string | T[]) => boolean;
        /**<!-- DOCS-ALIAS: fn.isEqual -->
         * isEqual
         * 
         * - `fn.isEqual`
         * - `fn.filters.isEqual`
         * - `filters.isEqual`
         * 
         * Returns a function that returns true if the item is equal to provided value.
         * 
         * ```typescript
         * [0, 1, 2].filter(fn.isEqual(1)); // [1]
         * ```
         * @param {T} item
         * @returns {(other: T) => boolean}
         */
        const isEqual: <T = any>(item: T) => (other: T) => boolean;
        /**<!-- DOCS-ALIAS: fn.isNotEqual -->
         * isNotEqual
         * 
         * - `fn.isNotEqual`
         * - `fn.filters.isNotEqual`
         * - `filters.isNotEqual`
         * 
         * Returns a function that returns true if the item is not equal to provided value.
         * 
         * ```typescript
         * [0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
         * ```
         * @param {T} item
         * @returns {(other: T) => boolean}
         */
        const isNotEqual: <T = any>(item: T) => (other: T) => boolean;
        /**<!-- DOCS-ALIAS: fn.dedupe -->
         * dedupe
         * 
         * - `fn.dedupe`
         * - `fn.filters.dedupe`
         * - `filters.dedupe`
         * 
         * Removes duplicate items from an array.
         * 
         * ```typescript
         * [0, 1, 2, 1, 0].filter(fn.dedupe); // [0, 1, 2]
         * ```
         * @param {T} item
         * @param {number} index
         * @param {T[]} array
         * @returns {boolean}
         */
        const dedupe: <T extends unknown>(item: T, index: number, array: T[]) => boolean;
        /**<!-- DOCS-ALIAS: fn.dedupeMapped -->
         * dedupeMapped
         * 
         * - `fn.dedupeMapped`
         * - `fn.filters.dedupeMapped`
         * - `filters.dedupeMapped`
         * 
         * Removes duplicate items from an array based on a mapped value.
         * 
         * ```typescript
         * [2, 4, 6, 8, 10, 12].filter(fn.dedupeMapped((v) => v % 3)); // [ 2, 4, 6 ] (maps to [ 2, 1, 0, 2, 1, 0 ])
         * ```
         * @param {(value?: T, index?: number, array?: T[]) => U} mapFn
         * @returns {(item: T, index: number, array: T[]) => boolean}
         */
        const dedupeMapped: <T extends unknown, U extends unknown>(mapFn: (value?: T, index?: number, array?: T[]) => U) => (item: T, index: number, array: T[]) => boolean;
    }
    /**<!-- DOCS-ALIAS: fn.maps -->
     * maps
     * 
     * - `fn.maps`
     * 
     * Collection of functions that can be used with Array.map
     */
    export namespace maps {
        /**<!-- DOCS-ALIAS: fn.toString -->
         * toString
         * 
         * - `fn.toString`
         * - `fn.maps.toString`
         * - `maps.toString`
         * 
         * Maps the item to a string.
         * 
         * ```typescript
         * [0, 1, 2].map(fn.toString); // ['0', '1', '2']
         * ```
         * @param {T} item
         * @returns {string}
         */
        const toString: <T = any>(item: T) => string;
        /**<!-- DOCS-ALIAS: fn.toNumber -->
         * toNumber
         * 
         * - `fn.toNumber`
         * - `fn.maps.toNumber`
         * - `maps.toNumber`
         * 
         * Maps the item to a number.
         * 
         * ```typescript
         * ['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
         * ```
         * @param {T} item
         * @returns {number}
         */
        const toNumber: <T = any>(item: T) => number;
        /**<!-- DOCS-ALIAS: fn.toBool -->
         * toBool
         * 
         * - `fn.toBool`
         * - `fn.maps.toBool`
         * - `maps.toBool`
         * 
         * Maps the item to a boolean.
         * 
         * ```typescript
         * [0, 1, 2].map(fn.toBool); // [false, true, true]
         * ['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
         * ```
         * @param {T} item
         * @returns {boolean}
         */
        const toBool: <T = any>(item: T) => boolean;
        /**<!-- DOCS-ALIAS: fn.toProp -->
         * toProp
         * 
         * - `fn.toProp`
         * - `fn.maps.toProp`
         * - `maps.toProp`
         * 
         * Maps the item to a given property of the item
         * 
         * ```typescript
         * [{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
         * ```
         * @param {string | number} prop
         * @returns {(item: O) => P}
         */
        const toProp: <P = string, O = Object>(prop: string | number) => (item: O) => P;
        /**<!-- DOCS-ALIAS: fn.toFixed -->
         * toFixed
         * 
         * - `fn.toFixed`
         * - `fn.maps.toFixed`
         * - `maps.toFixed`
         * 
         * Map the items (numbers) of an array to a fixed precision.
         * 
         * ```typescript
         * [1.234, 5.678, 9.012].map(fn.toFixed(2)); // [1.23, 5.68, 9.01]
         * ```
         * @param {number} precision
         * @returns {(num: number) => number}
         */
        const toFixed: (precision: number) => (num: number) => number;
    }
    /**<!-- DOCS-ALIAS: fn.sorts -->
     * sorts
     * 
     * - `fn.sorts`
     * 
     * Collection of functions that can be used with Array.sort
     */
    export namespace sorts {
        /**<!-- DOCS-ALIAS: fn.asc -->
         * asc
         * 
         * - `fn.asc`
         * - `fn.sorts.asc`
         * - `sorts.asc`
         * 
         * Sort ascending.
         * 
         * ```typescript
         * [2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
         * ```
         * @param {any} a
         * @param {any} b
         * @returns {number}
         */
        const asc: (a: any, b: any) => number;
        /**<!-- DOCS-ALIAS: fn.desc -->
         * desc
         * 
         * - `fn.desc`
         * - `fn.sorts.desc`
         * - `sorts.desc`
         * 
         * Sort descending.
         * 
         * ```typescript
         * [2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
         * ```
         * @param {any} a
         * @param {any} b
         * @returns {number}
         */
        const desc: (a: any, b: any) => number;
        /**<!-- DOCS-ALIAS: fn.byProp -->
         * byProp
         * 
         * - `fn.byProp`
         * - `fn.sorts.byProp`
         * - `sorts.byProp`
         * 
         * Sort by a given property.
         * 
         * ```typescript
         * const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
         * people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
         * ```
         * @param {string | number} propName
         * @param {SortFn<T>} [sortFn=asc]
         * @returns {SortFn<O>}
         */
        const byProp: <T = number, O = Object>(propName: string | number, sortFn?: SortFn<T>) => SortFn<O>;
        /**<!-- DOCS-ALIAS: fn.nearestTo -->
         * nearestTo
         * 
         * - `fn.nearestTo`
         * - `fn.sorts.nearestTo`
         * - `sorts.nearestTo`
         * 
         * Sort by the nearest value to the given value.
         * 
         * Values get converted to numbers before comparison.
         * 
         * ```typescript
         * const people = [2, 4, 3, 1];
         * people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
         * ```
         * @param {T} target
         * @returns {(a: any, b: any) => number}
         */
        const nearestTo: <T = number>(target: T) => (a: any, b: any) => number;
        /**<!-- DOCS-ALIAS: fn.furthestFrom -->
         * furthestFrom
         * 
         * - `fn.furthestFrom`
         * - `fn.sorts.furthestFrom`
         * - `sorts.furthestFrom`
         * 
         * Sort by the furthest value to the given value.
         * 
         * ```typescript
         * const people = [2, 4, 3, 1];
         * people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
         * ```
         * @param {T} target
         * @returns {(a: any, b: any) => number}
         */
        const furthestFrom: <T = number>(target: T) => (a: any, b: any) => number;
        /**<!-- DOCS-ALIAS: fn.array -->
         * array
         * 
         * - `fn.array`
         * - `fn.sorts.array`
         * - `sorts.array`
         * 
         * Sort an array of arrays by the given sort function.
         * 
         * Sorts by the first item in the array, then the second, etc. until a non-zero result is found.
         * @param {SortFn<T>} [sortFn=asc]
         * @returns {(a: T[], b: T[]) => number}
         */
        const array: <T extends unknown>(sortFn?: SortFn<T>) => (a: T[], b: T[]) => number;
        /**<!-- DOCS-ALIAS: fn.arrayAsc -->
         * arrayAsc
         * 
         * - `fn.arrayAsc`
         * - `fn.sorts.arrayAsc`
         * - `sorts.arrayAsc`
         * 
         * Sort an array of arrays in ascending order
         * 
         * Sorts by the first item in the array, then the second, etc. until a non-zero result is found.
         */
        const arrayAsc: (a: any[], b: any[]) => number;
        /**<!-- DOCS-ALIAS: fn.arrayDesc -->
         * arrayDesc
         * 
         * - `fn.arrayDesc`
         * - `fn.sorts.arrayDesc`
         * - `sorts.arrayDesc`
         * 
         * Sort an array of arrays in descending order
         * 
         * Sorts by the first item in the array, then the second, etc. until a non-zero result is found.
         */
        const arrayDesc: (a: any[], b: any[]) => number;
    }
    /**<!-- DOCS-ALIAS: fn.reduces -->
     * reduces
     * 
     * - `fn.reduces`
     * 
     * Collection of functions that can be used with Array.reduce
     */
    export namespace reduces {
        /**<!-- DOCS-ALIAS: fn.combine -->
         * combine
         * 
         * - `fn.combine`
         * - `fn.reduces.combine`
         * - `reduces.combine`
         * 
         * Adds or concats the items
         * 
         * ```typescript
         * [1, 2, 3].reduce(fn.combine); // 6
         * ['a', 'b', 'c'].reduce(fn.combine); // 'abc'
         * ```
         * @param {T} a
         * @param {T} b
         * @returns {T}
         */
        const combine: <T extends unknown = number>(a: T, b: T) => T;
        /**<!-- DOCS-ALIAS: fn.combineProp -->
         * combineProp
         * 
         * - `fn.combineProp`
         * - `fn.reduces.combineProp`
         * - `reduces.combineProp`
         * 
         * Adds or concats the given property of the items
         * 
         * ```typescript
         * const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
         * people.reduce(fn.combineProp('age')); // 6
         * people.reduce(fn.combineProp('name')); // 'abc'
         * ```
         * @param {string | number} propName
         * @returns {(a: O | T, b: O) => T}
         */
        const combineProp: <O extends unknown, T extends unknown = number>(propName: string | number) => (a: O | T, b: O) => T;
        /**<!-- DOCS-ALIAS: fn.mode -->
         * mode
         * 
         * - `fn.mode`
         * - `fn.reduces.mode`
         * - `reduces.mode`
         * 
         * Returns the most common value in an array.
         * 
         * ```typescript
         * [1, 2, 3, 2, 1, 1].reduce(fn.mode); // 1
         * ```
         * @param {T} prev
         * @param {T} curr
         * @param {number} index
         * @param {T[]} arr
         * @returns {T}
         */
        const mode: <T extends unknown>(prev: T, curr: T, index: number, arr: T[]) => T;
        /**<!-- DOCS-ALIAS: fn.modeMapped -->
         * modeMapped
         * 
         * - `fn.modeMapped`
         * - `fn.reduces.modeMapped`
         * - `reduces.modeMapped`
         * 
         * Returns the most common value in an array, based on a given map function.
         * 
         * ```typescript
         * [2, 4, 6, 8, 9, 12].reduce(fn.modeMapped((v) => v % 3)); // 6 (maps to [ 2, 1, 0, 2, 0, 0 ])
         * ```
         * @param {(value: T, index: number, array: T[]) => U} mapFn
         * @returns {(prev: T, curr: T, index: number, arr: T[]) => T}
         */
        const modeMapped: <T extends unknown, U extends unknown>(mapFn: (value: T, index: number, array: T[]) => U) => (prev: T, curr: T, index: number, arr: T[]) => T;
    }
    /**<!-- DOCS-ALIAS: fn.everys -->
     * everys
     * 
     * - `fn.everys`
     * 
     * Collection of functions that can be used with Array.every
     */
    export namespace everys {
        /**<!-- DOCS-ALIAS: fn.isAllEqual -->
         * isAllEqual
         * 
         * - `fn.isAllEqual`
         * - `fn.everys.isAllEqual`
         * - `everys.isAllEqual`
         * 
         * Returns if all the items are equal to one another.
         * 
         * ```typescript
         * [1, 1, 1].every(fn.isAllEqual); // true
         * [1, 2, 1].every(fn.isAllEqual); // false
         * ```
         * @param {T} val
         * @param {T[]} arr
         * @returns {boolean}
         */
        const isAllEqual: <T = any>(val: T, i: any, arr: T[]) => boolean;
    }
    export {};
}
/**<!-- DOCS-ALIAS: fn -->
 * fn
 * 
 * A collection of useful higher-order functions.
 */
declare const filters: typeof fn.filters;
/**<!-- DOCS-ALIAS: fn.maps -->
 * maps
 * 
 * - `fn.maps`
 * 
 * Collection of functions that can be used with Array.map
 */
declare const maps: typeof fn.maps;
/**<!-- DOCS-ALIAS: fn.sorts -->
 * sorts
 * 
 * - `fn.sorts`
 * 
 * Collection of functions that can be used with Array.sort
 */
declare const sorts: typeof fn.sorts;
/**<!-- DOCS-ALIAS: fn.reduces -->
 * reduces
 * 
 * - `fn.reduces`
 * 
 * Collection of functions that can be used with Array.reduce
 */
declare const reduces: typeof fn.reduces;
/**<!-- DOCS-ALIAS: fn.everys -->
 * everys
 * 
 * - `fn.everys`
 * 
 * Collection of functions that can be used with Array.every
 */
declare const everys: typeof fn.everys;

/**<!-- DOCS: timer ##! -->
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
/**<!-- DOCS: timer.getTimer ### @ -->
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
 *
 * await wait(seconds(4)); // do something async
 *
 * timer.switch(timer.INTRO, timer.ENDING); // same as calling end(timer.INTRO) and start(timer.ENDING)
 *
 * await wait(seconds(6)); // do something async
 *
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
 * @param {string} [name]
 * @param {boolean} [verbose=false]
 * @param {any} [wrapperFn=noWrap]
 * @param {any} [chalk=noChalk]
 * @param {TName} [displayNames]
 * @returns {any}
 */
declare const getTimer: <TName extends INames>(name?: string, verbose?: boolean, wrapperFn?: any, chalk?: any, displayNames?: TName) => ITimer<TName> & KeysOnly<TName>;
/**<!-- DOCS: timer.timer ### -->
 * timer
 *
 * - `timer`
 *
 * Global timer
 */
declare const timer: ITimer<INames> & KeysOnly<INames>;

interface ProgressBar {
    /**<!-- DOCS-ALIAS: progressBar.next -->
     * next
     * 
     * - `getProgressBar().next`
     * 
     * Set the progress bar to the next value
     * @returns {string} The output string
     */
    next: () => string;
    /**<!-- DOCS-ALIAS: progressBar.set -->
     * set
     * 
     * - `getProgressBar().set`
     * 
     * Set the progress bar to a specific value
     * @param {number} newCurrent
     * @returns {string} The output string
     */
    set: (newCurrent: number) => string;
    /**<!-- DOCS-ALIAS: progressBar.reset -->
     * reset
     * 
     * - `getProgressBar().reset`
     * 
     * Set the progress bar to 0
     * @returns {string} The output string
     */
    reset: () => string;
    /**<!-- DOCS-ALIAS: progressBar.update -->
     * update
     * 
     * - `getProgressBar().update`
     * 
     * Trigger the progress bar to update/rerender
     * @returns {string} The output string
     */
    update: () => string;
    /**<!-- DOCS-ALIAS: progressBar.start -->
     * start
     * 
     * - `getProgressBar().start`
     * 
     * Start displaying the progress bar
     * @returns {string} The output string
     */
    start: () => string;
    /**<!-- DOCS-ALIAS: progressBar.finish -->
     * finish
     * 
     * - `getProgressBar().finish`
     * 
     * Stop displaying the progress bar
     * @returns {string} The output string
     */
    finish: () => string;
    /**<!-- DOCS-ALIAS: progressBar.max -->
     * max
     * 
     * - `getProgressBar().max`
     * 
     * Readonly number value of the max value (provided to getProgressBar as first argument)
     */
    readonly max: number;
}
/**<!-- DOCS: progressBar ##! -->
 * progressBar
 *
 * A progress bar that can be used in the terminal.
 *
 * > NOTE: This is eventually be moved to `swiss-node`
 */
declare namespace progressBar {
    /**<!-- DOCS: progressBar.printLn ### @ -->
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
     * @param {...any} [text]
     * @returns {void}
     */
    export const printLn: (...text: any[]) => void;
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
        print: boolean;
        printFn: any;
    }
    /**<!-- DOCS: progressBar.ProgressBarOptions ### -->
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
     * | prefixWidth      | `0`                               | Min width of prefix - `10` => `Example˽˽˽`             |
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
     * | print            | `true`                            | Whether or not to print/output/log the progress bar    |
     * | printFn          | progressBar.printLn               | Function to use to print the progress bar              |
     */
    export type ProgressBarOptions = Partial<ProgressBarOptionsFull>;
    export const getFullOptions: (opts?: ProgressBarOptions) => ProgressBarOptionsFull;
    /**<!-- DOCS: progressBar.getProgressBar ### @ -->
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
     * @param {number} [max]
     * @param {ProgressBarOptions} [options={}]
     * @returns {ProgressBar}
     */
    export const getProgressBar: (max?: number, options?: ProgressBarOptions) => ProgressBar;
    export {};
}
/**<!-- DOCS-ALIAS: progressBar.ProgressBarOptions -->
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
 * | prefixWidth      | `0`                               | Min width of prefix - `10` => `Example˽˽˽`             |
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
 * | print            | `true`                            | Whether or not to print/output/log the progress bar    |
 * | printFn          | progressBar.printLn               | Function to use to print the progress bar              |
 */
declare type ProgressBarOptions = progressBar.ProgressBarOptions;
/**<!-- DOCS-ALIAS: progressBar.printLn -->
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
 * @param {...any} [text]
 * @returns {void}
 */
declare const printLn: (...text: any[]) => void;
/**<!-- DOCS-ALIAS: progressBar.getProgressBar -->
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
 * @param {number} [max]
 * @param {ProgressBarOptions} [options={}]
 * @returns {ProgressBar}
 */
declare const getProgressBar: (max?: number, options?: ProgressBarOptions) => ProgressBar;

/**<!-- DOCS: ArrayTools ##! -->
 * ArrayTools
 *
 * A collection of useful array functions.
 */
declare namespace ArrayTools {
    /**<!-- DOCS: ArrayTools.create ### @ -->
     * create
     *
     * - `create`
     * - `ArrayTools.create`
     * - `filled`
     * - `ArrayTools.filled`
     *
     * Create an array of the given length, where each value is the given value
     * @param {number} [length=1]
     * @param {T} [value=1 as T]
     * @returns {T[]}
     */
    export const create: <T extends unknown = number>(length?: number, value?: T) => T[];
    /**<!-- DOCS-ALIAS: ArrayTools.create -->
     * create
     * 
     * - `create`
     * - `ArrayTools.create`
     * - `filled`
     * - `ArrayTools.filled`
     * 
     * Create an array of the given length, where each value is the given value
     * @param {number} [length=1]
     * @param {T} [value=1 as T]
     * @returns {T[]}
     */
    export const filled: <T extends unknown = number>(length?: number, value?: T) => T[];
    /**<!-- DOCS: ArrayTools.range ### @ -->
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
     * @param {number} [length=1]
     * @param {number} [multiplier=1]
     * @param {number} [offset=0]
     * @returns {number[]}
     */
    export const range: (length?: number, multiplier?: number, offset?: number) => number[];
    type UnwrapArray<T> = T extends Array<infer U> ? U : T;
    type ZippedArrays<T extends [...any[]]> = T extends [infer Head, ...infer Tail] ? [UnwrapArray<Head>, ...ZippedArrays<Tail>] : [];
    /**<!-- DOCS: ArrayTools.zip ### @ -->
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
     * @param {...T} [arrs]
     * @returns {ZippedArrays<T>[]}
     */
    export const zip: <T extends any[]>(...arrs: T) => ZippedArrays<T>[];
    /**<!-- DOCS: ArrayTools.zipMax ### @ -->
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
     * @param {...T} [arrs]
     * @returns {ZippedArrays<T>[]}
     */
    export const zipMax: <T extends any[]>(...arrs: T) => ZippedArrays<T>[];
    /**<!-- DOCS: ArrayTools.sortByMapped ### @ -->
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
     * @param {T[]} arr
     * @param {(value: T, index: number, array: T[]) => M} mapFn
     * @param {(a: M, b: M) => number} [sortFn=fn.asc]
     * @returns {T[]}
     */
    export const sortByMapped: <T = string, M = number>(arr: T[], mapFn: (value: T, index: number, array: T[]) => M, sortFn?: (a: M, b: M) => number) => T[];
    /**<!-- DOCS: ArrayTools.randomise ### @ -->
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
     * @param {T[]} arr
     * @returns {T[]}
     */
    export const randomise: <T = string>(arr: T[]) => T[];
    /**<!-- DOCS: ArrayTools.reverse ### @ -->
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
     * @param {T[]} arr
     * @returns {T[]}
     */
    export const reverse: <T = string>(arr: T[]) => T[];
    /**<!-- DOCS: ArrayTools.entries ### @ -->
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
     * @param {T[]} arr
     * @returns {[number, T][]}
     */
    export const entries: <T = string>(arr: T[]) => [number, T][];
    /**<!-- DOCS: ArrayTools.repeat ### @ -->
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
     * @param {number} maxLength
     * @param {...T} [items]
     * @returns {T[]}
     */
    export const repeat: <T = string>(maxLength: number, ...items: T[]) => T[];
    /**<!-- DOCS: ArrayTools.roll ### @ -->
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
     * @param {number} distance
     * @param {T[]} arr
     * @returns {T[]}
     */
    export const roll: <T extends unknown>(distance: number, arr: T[]) => T[];
    /**<!-- DOCS: ArrayTools.sortNumberedText ### @ -->
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
     * @param {string[]} texts
     * @param {boolean} [ignoreCase=true]
     * @returns {string[]}
     */
    export const sortNumberedText: (texts: string[], ignoreCase?: boolean) => string[];
    /**<!-- DOCS: ArrayTools.partition ### @ -->
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
     * @param {T[]} array
     * @param {number} [partitionSize=Math.ceil(array.length / 2)]
     * @returns {T[][]}
     */
    export const partition: <T extends unknown>(array: T[], partitionSize?: number) => T[][];
    /**<!-- DOCS: ArrayTools.groupObj ### @ -->
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
     * ArrayTools.groupObj(arr, item => item.group); // {
     * //   1: [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
     * //   2: [ { group: 2, name: 'b' } ]
     * // }
     * ```
     * @param {T[]} array
     * @param {(item: T, index: number, arr: T[]) => string | number} mapFn
     * @returns {{ [id: string]: T[]; [id: number]: T[]; }}
     */
    export const groupObj: <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number) => {
        [id: string]: T[];
        [id: number]: T[];
    };
    /**<!-- DOCS: ArrayTools.group ### @ -->
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
     * ArrayTools.group(arr, item => item.group); // [
     * //   [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
     * //   [ { group: 2, name: 'b' } ]
     * // ]
     * ```
     * @param {T[]} array
     * @param {(item: T, index: number, arr: T[]) => string | number} mapFn
     * @returns {T[][]}
     */
    export const group: <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number) => T[][];
    /**<!-- DOCS: ArrayTools.findAndRemove ### @ -->
     * findAndRemove
     *
     * - `ArrayTools.findAndRemove`
     *
     * Find the first item in an array that matches a given predicate, and remove it from the array
     *
     * > **Note:** This function mutates the provided array
     * @param {T[]} array the array to mutate
     * @param {(item: T, index: number, arr: T[]) => any} predicate a function that returns true/truthy if the item should be removed
     * @param {...T} [insertItems] items to insert in place of the removed item
     * @returns {T} the removed item (undefined if not found)
     */
    export const findAndRemove: <T extends unknown>(array: T[], predicate: (item: T, index: number, arr: T[]) => any, ...insertItems: T[]) => T;
    /**<!-- DOCS: ArrayTools.findLastAndRemove ### @ -->
     * findLastAndRemove
     *
     * - `ArrayTools.findLastAndRemove`
     *
     * Find the last item in an array that matches a given predicate, and remove it from the array
     *
     * > **Note:** This function mutates the provided array
     * @param {T[]} array the array to mutate
     * @param {(item: T, index: number, arr: T[]) => any} predicate a function that returns true/truthy if the item should be removed
     * @param {...T} [insertItems] items to insert in place of the removed item
     * @returns {T} the removed item (undefined if not found)
     */
    export const findLastAndRemove: <T extends unknown>(array: T[], predicate: (item: T, index: number, arr: T[]) => any, ...insertItems: T[]) => T;
    /**<!-- DOCS: ArrayTools.filterAndRemove ### @ -->
     * filterAndRemove
     *
     * - `ArrayTools.filterAndRemove`
     *
     * Find the items in an array that matches a given predicate, and remove them from the array
     *
     * > **Note:** This function mutates the provided array
     * @param {T[]} array the array to mutate
     * @param {(item: T, index: number, arr: T[]) => any} predicate a function that returns true/truthy if the item should be removed
     * @returns {T[]} the removed items
     */
    export const filterAndRemove: <T extends unknown>(array: T[], predicate: (item: T, index: number, arr: T[]) => any) => T[];
    /**<!-- DOCS: ArrayTools.utils ### @ -->
     * utils
     *
     * - `ArrayTools.utils`
     *
     * Small helper functions that may help, but aren't important enough to be in ArrayTools directly
     */
    export namespace utils {
        /**<!-- DOCS: ArrayTools.utils.isNumString #### @ -->
         * isNumString
         *
         * - `ArrayTools.utils.isNumString`
         *
         * Returns true if the given string is a number
         * @param {string} text
         * @returns {boolean}
         */
        const isNumString: (text: string) => boolean;
        /**<!-- DOCS: ArrayTools.utils.partitionNums #### @ -->
         * partitionNums
         *
         * - `ArrayTools.utils.partitionNums`
         *
         * Splits a string into an array of strings and numbers
         * @param {boolean} ignoreCase
         * @returns {(name: string) => (string | number)[]}
         */
        const partitionNums: (ignoreCase: boolean) => (name: string) => (string | number)[];
    }
    export {};
}
/**<!-- DOCS-ALIAS: ArrayTools.create -->
 * create
 * 
 * - `create`
 * - `ArrayTools.create`
 * - `filled`
 * - `ArrayTools.filled`
 * 
 * Create an array of the given length, where each value is the given value
 * @param {number} [length=1]
 * @param {T} [value=1 as T]
 * @returns {T[]}
 */
declare const create: <T extends unknown = number>(length?: number, value?: T) => T[];
/**<!-- DOCS-ALIAS: ArrayTools.create -->
 * create
 * 
 * - `create`
 * - `ArrayTools.create`
 * - `filled`
 * - `ArrayTools.filled`
 * 
 * Create an array of the given length, where each value is the given value
 * @param {number} [length=1]
 * @param {T} [value=1 as T]
 * @returns {T[]}
 */
declare const filled: <T extends unknown = number>(length?: number, value?: T) => T[];
/**<!-- DOCS-ALIAS: ArrayTools.range -->
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
 * @param {number} [length=1]
 * @param {number} [multiplier=1]
 * @param {number} [offset=0]
 * @returns {number[]}
 */
declare const range: (length?: number, multiplier?: number, offset?: number) => number[];
/**<!-- DOCS-ALIAS: ArrayTools.zip -->
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
 * @param {...T} [arrs]
 * @returns {ZippedArrays<T>[]}
 */
declare const zip: <T extends any[]>(...arrs: T) => (T extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[];
/**<!-- DOCS-ALIAS: ArrayTools.zipMax -->
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
 * @param {...T} [arrs]
 * @returns {ZippedArrays<T>[]}
 */
declare const zipMax: <T extends any[]>(...arrs: T) => (T extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...Tail extends [infer Head, ...infer Tail] ? [Head extends (infer U)[] ? U : Head, ...any] : []] : []] : []] : []] : []] : []] : []] : []] : []] : []] : [])[];
/**<!-- DOCS-ALIAS: ArrayTools.sortByMapped -->
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
 * @param {T[]} arr
 * @param {(value: T, index: number, array: T[]) => M} mapFn
 * @param {(a: M, b: M) => number} [sortFn=fn.asc]
 * @returns {T[]}
 */
declare const sortByMapped: <T = string, M = number>(arr: T[], mapFn: (value: T, index: number, array: T[]) => M, sortFn?: (a: M, b: M) => number) => T[];
/**<!-- DOCS-ALIAS: ArrayTools.randomise -->
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
 * @param {T[]} arr
 * @returns {T[]}
 */
declare const randomise: <T = string>(arr: T[]) => T[];
/**<!-- DOCS-ALIAS: ArrayTools.reverse -->
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
 * @param {T[]} arr
 * @returns {T[]}
 */
declare const reverse: <T = string>(arr: T[]) => T[];
/**<!-- DOCS-ALIAS: ArrayTools.entries -->
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
 * @param {T[]} arr
 * @returns {[number, T][]}
 */
declare const entries: <T = string>(arr: T[]) => [number, T][];
/**<!-- DOCS-ALIAS: ArrayTools.repeat -->
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
 * @param {number} maxLength
 * @param {...T} [items]
 * @returns {T[]}
 */
declare const repeat: <T = string>(maxLength: number, ...items: T[]) => T[];
/**<!-- DOCS-ALIAS: ArrayTools.roll -->
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
 * @param {number} distance
 * @param {T[]} arr
 * @returns {T[]}
 */
declare const roll: <T extends unknown>(distance: number, arr: T[]) => T[];
/**<!-- DOCS-ALIAS: ArrayTools.sortNumberedText -->
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
 * @param {string[]} texts
 * @param {boolean} [ignoreCase=true]
 * @returns {string[]}
 */
declare const sortNumberedText: (texts: string[], ignoreCase?: boolean) => string[];
/**<!-- DOCS-ALIAS: ArrayTools.partition -->
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
 * @param {T[]} array
 * @param {number} [partitionSize=Math.ceil(array.length / 2)]
 * @returns {T[][]}
 */
declare const partition: <T extends unknown>(array: T[], partitionSize?: number) => T[][];
/**<!-- DOCS-ALIAS: ArrayTools.groupObj -->
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
 * ArrayTools.groupObj(arr, item => item.group); // {
 * //   1: [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
 * //   2: [ { group: 2, name: 'b' } ]
 * // }
 * ```
 * @param {T[]} array
 * @param {(item: T, index: number, arr: T[]) => string | number} mapFn
 * @returns {{ [id: string]: T[]; [id: number]: T[]; }}
 */
declare const groupObj: <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number) => {
    [id: string]: T[];
    [id: number]: T[];
};
/**<!-- DOCS-ALIAS: ArrayTools.group -->
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
 * ArrayTools.group(arr, item => item.group); // [
 * //   [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
 * //   [ { group: 2, name: 'b' } ]
 * // ]
 * ```
 * @param {T[]} array
 * @param {(item: T, index: number, arr: T[]) => string | number} mapFn
 * @returns {T[][]}
 */
declare const group: <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number) => T[][];

/**<!-- DOCS: ObjectTools ##! -->
 * ObjectTools
 *
 * A collection of functions for working with objects
 */
declare namespace ObjectTools {
    /**<!-- DOCS: ObjectTools.remodel ### @ -->
     * remodel
     *
     * - `ObjectTools.remodel`
     *
     * Apply a function to the entries of an object
     *
     * ```typescript
     * const input = {'foo': 2, 'bar': 1, 'baz': 4}
     * ObjectTools.remodel(input, (entries) => entries.filter(([k, v]) => v % 2 === 0)) // { foo: 2, baz: 4 }
     * ```
     * @param {T} obj
     * @param {(entries: [string, V][]) => [string, W][]} func
     * @returns {O}
     */
    const remodel: <T extends Object = Object, V extends unknown = any, W extends unknown = any, O extends unknown = OfType<T, W>>(obj: T, func: (entries: [string, V][]) => [string, W][]) => O;
    /**<!-- DOCS: ObjectTools.remodelEach ### @ -->
     * remodelEach
     *
     * - `ObjectTools.remodelEach`
     *
     * Apply a function to each of the entries of an object
     *
     * Note: similar to ObjectTools.map, but the function parameters are different. Prefer ObjectTools.map where possible.
     *
     * ```typescript
     * const input = {'foo': 2, 'bar': 1, 'baz': 4}
     * ObjectTools.remodelEach(input, ([k, v]) => [k, v * 2]) // { foo: 4, bar: 2, baz: 8 }
     * ```
     * @param {T} obj
     * @param {(entry: [string, V], index: number, entries: [string, V][]) => [string, W]} func
     * @returns {O}
     */
    const remodelEach: <T extends Object = Object, V extends unknown = any, W extends unknown = any, O extends unknown = OfType<T, W>>(obj: T, func: (entry: [string, V], index: number, entries: [string, V][]) => [string, W]) => O;
    /**<!-- DOCS: ObjectTools.map ### @ -->
     * map
     *
     * - `ObjectTools.map`
     *
     * Maps the keys and values of an object in a similar way to Array.map
     *
     * ```typescript
     * ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => [key, key + value]); // {a: 'a1', b: 'b2', c: 'c3'}
     * ```
     * @param {T} obj
     * @param {(key: string, value: V, index: number) => [string, W]} func
     * @returns {any}
     */
    const map: <T extends Object, V extends unknown, W extends unknown>(obj: T, func: (key: string, value: V, index: number) => [string, W]) => OfType<T, W>;
    /**<!-- DOCS: ObjectTools.mapValues ### @ -->
     * mapValues
     *
     * - `ObjectTools.mapValues`
     *
     * Maps the values of an object in a similar way to Array.map
     *
     * ```typescript
     * ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
     * ```
     * @param {T} obj
     * @param {(key: string, value: V, index: number) => W} func
     * @returns {any}
     */
    const mapValues: <T extends Object, V extends unknown, W extends unknown>(obj: T, func: (key: string, value: V, index: number) => W) => OfType<T, W>;
    /**<!-- DOCS: ObjectTools.mapKeys ### @ -->
     * mapKeys
     *
     * - `ObjectTools.mapKeys`
     *
     * Maps the values of an object in a similar way to Array.map
     *
     * ```typescript
     * ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
     * ```
     * @param {T} obj
     * @param {(key: string, value: V, index: number) => string} func
     * @returns {T}
     */
    const mapKeys: <T extends Object, V extends unknown>(obj: T, func: (key: string, value: V, index: number) => string) => T;
    /**<!-- DOCS: ObjectTools.filter ### @ -->
     * filter
     *
     * - `ObjectTools.filter`
     *
     * Removes entries from an object based on a predicate function
     *
     * ```typescript
     * ObjectTools.filter({a: 1, b: 2, c: 3}, (k, v) => v % 2 === 0) // { b: 2 }
     * ```
     * @param {T} obj
     * @param {(key: string, value: V, index: number) => boolean} func
     * @returns {O}
     */
    const filter: <T extends Object, V extends unknown, O extends Partial<T>>(obj: T, func: (key: string, value: V, index: number) => boolean) => O;
    /**<!-- DOCS: ObjectTools.clean ### @ -->
     * clean
     *
     * - `ObjectTools.clean`
     *
     * Removes properties with undefined values
     *
     * ```typescript
     * ObjectTools.clean({a: 1, b: undefined, c: 3}) // { a: 1, c: 3 }
     * ```
     * @param {T} obj
     * @returns {O}
     */
    const clean: <T extends Object, O extends Partial<T>>(obj: T) => O;
    /**<!-- DOCS: ObjectTools.invert ### @ -->
     * invert
     *
     * - `ObjectTools.invert`
     *
     * Inverts the keys and values of an object
     *
     * ```typescript
     * ObjectTools.invert({ a: 'foo', b: 'bar' }); // { foo: 'a', bar: 'b'}
     * ```
     * @param {Ti} obj
     * @returns {To}
     */
    const invert: <Ti extends Object, To extends ObjOfType<string>>(obj: Ti) => To;
}

declare type ClxType = string | boolean | {
    [key: string]: boolean;
} | ClxType[];
/**<!-- DOCS: StringTools ##! -->
 * StringTools
 *
 * A collection of string utilities
 */
declare namespace StringTools {
    /**<!-- DOCS: StringTools.capitalise ### @ -->
     * capitalise
     *
     * - `StringTools.capitalise`
     *
     * Capitalises the first letter of each word in a string
     *
     * ```typescript
     * StringTools.capitalise('hello world'); // 'Hello World'
     * ```
     * @param {string} [input='']
     * @returns {string}
     */
    const capitalise: (input?: string) => string;
    /**<!-- DOCS: StringTools.angloise ### @ -->
     * angloise
     *
     * - `StringTools.angloise`
     *
     * Remove accents from a string
     *
     * ```typescript
     * StringTools.angloise('éèêë'); // 'eeee'
     * ```
     * @param {string} input
     * @returns {string}
     */
    const angloise: (input: string) => string;
    /**<!-- DOCS: StringTools.clean ### @ -->
     * clean
     *
     * - `StringTools.clean`
     *
     * Remove accents and non alphanumerics from a string
     *
     * ```typescript
     * StringTools.clean('éèêë_--ab0'); // 'eeeeab0'
     * ```
     * @param {string} [input='']
     * @returns {string}
     */
    const clean: (input?: string) => string;
    /**<!-- DOCS: StringTools.repeat ### @ -->
     * repeat
     *
     * - `StringTools.repeat`
     *
     * Repeat the given string n times
     *
     * ```typescript
     * StringTools.repeat(5, '-') // '-----'
     * StringTools.repeat(1, '-') // '-'
     * StringTools.repeat(0, '-') // ''
     * StringTools.repeat(-1, '-') // ''
     * ```
     * @param {number} maxLength
     * @param {string} repeated
     * @returns {string}
     */
    const repeat: (maxLength: number, repeated: string) => string;
    /**<!-- DOCS: StringTools.clx ### @ -->
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
     * @param {...ClxType} [args]
     * @returns {string}
     */
    const clx: (...args: ClxType[]) => string;
    /**<!-- DOCS: StringTools.Case_Manipulators ### -->
     * Case Manipulators
     */
    interface StringCaseHandler {
        /**<!-- DOCS-ALIAS: StringTools.toLowerCamelCase -->
         * toLowerCamelCase
         * 
         * - `StringTools.toLowerCamelCase`
         * - `StringTools.fromSlugCase.toLowerCamelCase`
         * - `StringTools.fromSnakeCase.toLowerCamelCase`
         * - `StringTools.fromSpaced.toLowerCamelCase`
         * - `StringTools.fromCamelCase.toLowerCamelCase`
         * 
         * Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toLowerCamelCase(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toUpperCamelCase -->
         * toUpperCamelCase
         * 
         * - `StringTools.toUpperCamelCase`
         * - `StringTools.fromSlugCase.toUpperCamelCase`
         * - `StringTools.fromSnakeCase.toUpperCamelCase`
         * - `StringTools.fromSpaced.toUpperCamelCase`
         * - `StringTools.fromCamelCase.toUpperCamelCase`
         * 
         * Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toUpperCamelCase(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toCamelCase -->
         * toCamelCase
         * 
         * - `StringTools.toCamelCase`
         * - `StringTools.fromSlugCase.toCamelCase`
         * - `StringTools.fromSnakeCase.toCamelCase`
         * - `StringTools.fromSpaced.toCamelCase`
         * - `StringTools.fromCamelCase.toCamelCase`
         * 
         * Convert a string to camel case (e.g. `thisIsCamelCase`)
         * @param {string | string[]} input
         * @param {boolean} [capitaliseFirst=false]
         * @returns {string}
         */
        toCamelCase(input: string | string[], capitaliseFirst?: boolean): string;
        /**<!-- DOCS-ALIAS: StringTools.toLowerSlugCase -->
         * toLowerSlugCase
         * 
         * - `StringTools.toLowerSlugCase`
         * - `StringTools.fromSlugCase.toLowerSlugCase`
         * - `StringTools.fromSnakeCase.toLowerSlugCase`
         * - `StringTools.fromSpaced.toLowerSlugCase`
         * - `StringTools.fromCamelCase.toLowerSlugCase`
         * 
         * Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toLowerSlugCase(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toUpperSlugCase -->
         * toUpperSlugCase
         * 
         * - `StringTools.toUpperSlugCase`
         * - `StringTools.fromSlugCase.toUpperSlugCase`
         * - `StringTools.fromSnakeCase.toUpperSlugCase`
         * - `StringTools.fromSpaced.toUpperSlugCase`
         * - `StringTools.fromCamelCase.toUpperSlugCase`
         * 
         * Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toUpperSlugCase(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toSlugCase -->
         * toSlugCase
         * 
         * - `StringTools.toSlugCase`
         * - `StringTools.fromSlugCase.toSlugCase`
         * - `StringTools.fromSnakeCase.toSlugCase`
         * - `StringTools.fromSpaced.toSlugCase`
         * - `StringTools.fromCamelCase.toSlugCase`
         * 
         * Convert a string to camel case (e.g. `this-is-slug-case`)
         * @param {string | string[]} input
         * @param {boolean} [toUpper=false]
         * @returns {string}
         */
        toSlugCase(input: string | string[], toUpper?: boolean): string;
        /**<!-- DOCS-ALIAS: StringTools.toLowerSnakeCase -->
         * toLowerSnakeCase
         * 
         * - `StringTools.toLowerSnakeCase`
         * - `StringTools.fromSlugCase.toLowerSnakeCase`
         * - `StringTools.fromSnakeCase.toLowerSnakeCase`
         * - `StringTools.fromSpaced.toLowerSnakeCase`
         * - `StringTools.fromCamelCase.toLowerSnakeCase`
         * 
         * Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toLowerSnakeCase(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toUpperSnakeCase -->
         * toUpperSnakeCase
         * 
         * - `StringTools.toUpperSnakeCase`
         * - `StringTools.fromSlugCase.toUpperSnakeCase`
         * - `StringTools.fromSnakeCase.toUpperSnakeCase`
         * - `StringTools.fromSpaced.toUpperSnakeCase`
         * - `StringTools.fromCamelCase.toUpperSnakeCase`
         * 
         * Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toUpperSnakeCase(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toSnakeCase -->
         * toSnakeCase
         * 
         * - `StringTools.toSnakeCase`
         * - `StringTools.fromSlugCase.toSnakeCase`
         * - `StringTools.fromSnakeCase.toSnakeCase`
         * - `StringTools.fromSpaced.toSnakeCase`
         * - `StringTools.fromCamelCase.toSnakeCase`
         * 
         * Convert a string to snake case (e.g. `this_is_snake_case`)
         * @param {string | string[]} input
         * @param {boolean} [toUpper=false]
         * @returns {string}
         */
        toSnakeCase(input: string | string[], toUpper?: boolean): string;
        /**<!-- DOCS-ALIAS: StringTools.toLowerSpaced -->
         * toLowerSpaced
         * 
         * - `StringTools.toLowerSpaced`
         * - `StringTools.fromSlugCase.toLowerSpaced`
         * - `StringTools.fromSnakeCase.toLowerSpaced`
         * - `StringTools.fromSpaced.toLowerSpaced`
         * - `StringTools.fromCamelCase.toLowerSpaced`
         * 
         * Convert a string to lower spaced case (e.g. `this is lower spaced case`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toLowerSpaced(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toUpperSpaced -->
         * toUpperSpaced
         * 
         * - `StringTools.toUpperSpaced`
         * - `StringTools.fromSlugCase.toUpperSpaced`
         * - `StringTools.fromSnakeCase.toUpperSpaced`
         * - `StringTools.fromSpaced.toUpperSpaced`
         * - `StringTools.fromCamelCase.toUpperSpaced`
         * 
         * Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toUpperSpaced(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toCapitalisedSpaced -->
         * toCapitalisedSpaced
         * 
         * - `StringTools.toCapitalisedSpaced`
         * - `StringTools.fromSlugCase.toCapitalisedSpaced`
         * - `StringTools.fromSnakeCase.toCapitalisedSpaced`
         * - `StringTools.fromSpaced.toCapitalisedSpaced`
         * - `StringTools.fromCamelCase.toCapitalisedSpaced`
         * 
         * Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)
         * @param {string | string[]} input
         * @returns {string}
         */
        toCapitalisedSpaced(input: string | string[]): string;
        /**<!-- DOCS-ALIAS: StringTools.toSpaced -->
         * toSpaced
         * 
         * - `StringTools.toSpaced`
         * - `StringTools.fromSlugCase.toSpaced`
         * - `StringTools.fromSnakeCase.toSpaced`
         * - `StringTools.fromSpaced.toSpaced`
         * - `StringTools.fromCamelCase.toSpaced`
         * 
         * Convert a string to spaced case (e.g. `this is spaced case`)
         * @param {string | string[]} input
         * @param {boolean} [toUpper=false]
         * @returns {string}
         */
        toSpaced(input: string | string[], toUpper?: boolean): string;
        /**<!-- DOCS-ALIAS: StringTools.toCharacterSeparated -->
         * toCharacterSeparated
         * 
         * - `StringTools.toCharacterSeparated`
         * - `StringTools.fromSlugCase.toCharacterSeparated`
         * - `StringTools.fromSnakeCase.toCharacterSeparated`
         * - `StringTools.fromSpaced.toCharacterSeparated`
         * - `StringTools.fromCamelCase.toCharacterSeparated`
         * 
         * Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)
         * @param {string | string[]} input
         * @param {string} [char=',']
         * @param {boolean} [toUpper=false]
         * @returns {string}
         */
        toCharacterSeparated(input: string | string[], char: string, toUpper?: boolean): string;
    }
    const 
    /**<!-- DOCS-ALIAS: StringTools.toLowerCamelCase -->
     * toLowerCamelCase
     * 
     * - `StringTools.toLowerCamelCase`
     * - `StringTools.fromSlugCase.toLowerCamelCase`
     * - `StringTools.fromSnakeCase.toLowerCamelCase`
     * - `StringTools.fromSpaced.toLowerCamelCase`
     * - `StringTools.fromCamelCase.toLowerCamelCase`
     * 
     * Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toLowerCamelCase: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toUpperCamelCase -->
     * toUpperCamelCase
     * 
     * - `StringTools.toUpperCamelCase`
     * - `StringTools.fromSlugCase.toUpperCamelCase`
     * - `StringTools.fromSnakeCase.toUpperCamelCase`
     * - `StringTools.fromSpaced.toUpperCamelCase`
     * - `StringTools.fromCamelCase.toUpperCamelCase`
     * 
     * Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toUpperCamelCase: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toCamelCase -->
     * toCamelCase
     * 
     * - `StringTools.toCamelCase`
     * - `StringTools.fromSlugCase.toCamelCase`
     * - `StringTools.fromSnakeCase.toCamelCase`
     * - `StringTools.fromSpaced.toCamelCase`
     * - `StringTools.fromCamelCase.toCamelCase`
     * 
     * Convert a string to camel case (e.g. `thisIsCamelCase`)
     * @param {string | string[]} input
     * @param {boolean} [capitaliseFirst=false]
     * @returns {string}
     */
    toCamelCase: (input: string | string[], capitaliseFirst?: boolean) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toLowerSlugCase -->
     * toLowerSlugCase
     * 
     * - `StringTools.toLowerSlugCase`
     * - `StringTools.fromSlugCase.toLowerSlugCase`
     * - `StringTools.fromSnakeCase.toLowerSlugCase`
     * - `StringTools.fromSpaced.toLowerSlugCase`
     * - `StringTools.fromCamelCase.toLowerSlugCase`
     * 
     * Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toLowerSlugCase: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toUpperSlugCase -->
     * toUpperSlugCase
     * 
     * - `StringTools.toUpperSlugCase`
     * - `StringTools.fromSlugCase.toUpperSlugCase`
     * - `StringTools.fromSnakeCase.toUpperSlugCase`
     * - `StringTools.fromSpaced.toUpperSlugCase`
     * - `StringTools.fromCamelCase.toUpperSlugCase`
     * 
     * Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toUpperSlugCase: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toSlugCase -->
     * toSlugCase
     * 
     * - `StringTools.toSlugCase`
     * - `StringTools.fromSlugCase.toSlugCase`
     * - `StringTools.fromSnakeCase.toSlugCase`
     * - `StringTools.fromSpaced.toSlugCase`
     * - `StringTools.fromCamelCase.toSlugCase`
     * 
     * Convert a string to camel case (e.g. `this-is-slug-case`)
     * @param {string | string[]} input
     * @param {boolean} [toUpper=false]
     * @returns {string}
     */
    toSlugCase: (input: string | string[], toUpper?: boolean) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toLowerSnakeCase -->
     * toLowerSnakeCase
     * 
     * - `StringTools.toLowerSnakeCase`
     * - `StringTools.fromSlugCase.toLowerSnakeCase`
     * - `StringTools.fromSnakeCase.toLowerSnakeCase`
     * - `StringTools.fromSpaced.toLowerSnakeCase`
     * - `StringTools.fromCamelCase.toLowerSnakeCase`
     * 
     * Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toLowerSnakeCase: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toUpperSnakeCase -->
     * toUpperSnakeCase
     * 
     * - `StringTools.toUpperSnakeCase`
     * - `StringTools.fromSlugCase.toUpperSnakeCase`
     * - `StringTools.fromSnakeCase.toUpperSnakeCase`
     * - `StringTools.fromSpaced.toUpperSnakeCase`
     * - `StringTools.fromCamelCase.toUpperSnakeCase`
     * 
     * Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toUpperSnakeCase: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toSnakeCase -->
     * toSnakeCase
     * 
     * - `StringTools.toSnakeCase`
     * - `StringTools.fromSlugCase.toSnakeCase`
     * - `StringTools.fromSnakeCase.toSnakeCase`
     * - `StringTools.fromSpaced.toSnakeCase`
     * - `StringTools.fromCamelCase.toSnakeCase`
     * 
     * Convert a string to snake case (e.g. `this_is_snake_case`)
     * @param {string | string[]} input
     * @param {boolean} [toUpper=false]
     * @returns {string}
     */
    toSnakeCase: (input: string | string[], toUpper?: boolean) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toLowerSpaced -->
     * toLowerSpaced
     * 
     * - `StringTools.toLowerSpaced`
     * - `StringTools.fromSlugCase.toLowerSpaced`
     * - `StringTools.fromSnakeCase.toLowerSpaced`
     * - `StringTools.fromSpaced.toLowerSpaced`
     * - `StringTools.fromCamelCase.toLowerSpaced`
     * 
     * Convert a string to lower spaced case (e.g. `this is lower spaced case`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toLowerSpaced: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toUpperSpaced -->
     * toUpperSpaced
     * 
     * - `StringTools.toUpperSpaced`
     * - `StringTools.fromSlugCase.toUpperSpaced`
     * - `StringTools.fromSnakeCase.toUpperSpaced`
     * - `StringTools.fromSpaced.toUpperSpaced`
     * - `StringTools.fromCamelCase.toUpperSpaced`
     * 
     * Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toUpperSpaced: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toCapitalisedSpaced -->
     * toCapitalisedSpaced
     * 
     * - `StringTools.toCapitalisedSpaced`
     * - `StringTools.fromSlugCase.toCapitalisedSpaced`
     * - `StringTools.fromSnakeCase.toCapitalisedSpaced`
     * - `StringTools.fromSpaced.toCapitalisedSpaced`
     * - `StringTools.fromCamelCase.toCapitalisedSpaced`
     * 
     * Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)
     * @param {string | string[]} input
     * @returns {string}
     */
    toCapitalisedSpaced: (input: string | string[]) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toSpaced -->
     * toSpaced
     * 
     * - `StringTools.toSpaced`
     * - `StringTools.fromSlugCase.toSpaced`
     * - `StringTools.fromSnakeCase.toSpaced`
     * - `StringTools.fromSpaced.toSpaced`
     * - `StringTools.fromCamelCase.toSpaced`
     * 
     * Convert a string to spaced case (e.g. `this is spaced case`)
     * @param {string | string[]} input
     * @param {boolean} [toUpper=false]
     * @returns {string}
     */
    toSpaced: (input: string | string[], toUpper?: boolean) => string, 
    /**<!-- DOCS-ALIAS: StringTools.toCharacterSeparated -->
     * toCharacterSeparated
     * 
     * - `StringTools.toCharacterSeparated`
     * - `StringTools.fromSlugCase.toCharacterSeparated`
     * - `StringTools.fromSnakeCase.toCharacterSeparated`
     * - `StringTools.fromSpaced.toCharacterSeparated`
     * - `StringTools.fromCamelCase.toCharacterSeparated`
     * 
     * Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)
     * @param {string | string[]} input
     * @param {string} [char=',']
     * @param {boolean} [toUpper=false]
     * @returns {string}
     */
    toCharacterSeparated: (input: string | string[], char: string, toUpper?: boolean) => string;
    /**<!-- DOCS: StringTools.fromSlugCase #### -->
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
    const fromSlugCase: StringCaseHandler;
    /**<!-- DOCS: StringTools.fromSnakeCase #### -->
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
    const fromSnakeCase: StringCaseHandler;
    /**<!-- DOCS: StringTools.fromSpaced #### -->
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
    const fromSpaced: StringCaseHandler;
    /**<!-- DOCS: StringTools.fromCamelCase #### -->
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
    const fromCamelCase: StringCaseHandler;
    /**<!-- DOCS: StringTools.matchBrackets ### -->
     * matchBrackets
     *
     * Tools for matching corresponding brackets in a string
     */
    namespace matchBrackets {
        /**<!-- DOCS: StringTools.matchBrackets.unique #### @ -->
         * unique
         *
         * - `StringTools.matchBrackets.unique`
         *
         * Replace brackets with symbols and with a unique ID for each bracket pair of each type
         *
         * ```typescript
         * const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
         * const uniqued = matchBrackets.unique(example);
         * uniqued; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'
         * ```
         * @param {string} input
         * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
         * @returns {string}
         */
        const unique: (input: string, replaceSymbols?: Partial<BracketReplaceSymbols>) => string;
        /**<!-- DOCS: StringTools.matchBrackets.depth #### @ -->
         * depth
         *
         * - `StringTools.matchBrackets.depth`
         *
         * Replace brackets with symbols and with a numbers for how deep each bracket pair is for that bracket type
         *
         * ```typescript
         * const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
         * const depthed = matchBrackets.depth(example);
         * depthed; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'
         * ```
         * @param {string} input
         * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
         * @returns {string}
         */
        const depth: (input: string, replaceSymbols?: Partial<BracketReplaceSymbols>) => string;
        /**<!-- DOCS: StringTools.matchBrackets.clean #### @ -->
         * clean
         *
         * - `StringTools.matchBrackets.clean`
         *
         * Return a string that's been matched with `unique` or `depth` and replace the symbols with the original brackets. Also works with substrings of such strings.
         *
         * ```typescript
         * const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
         * const uniqued = matchBrackets.unique(example);
         * uniqued; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'
         *
         * const cleaned = matchBrackets.clean(uniqued);
         * cleaned; // '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}'
         * ```
         * @param {string} input
         * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
         * @returns {string}
         */
        const clean: (input: string, replaceSymbols?: Partial<BracketReplaceSymbols>) => string;
        /**<!-- DOCS: StringTools.matchBrackets.grabDepth #### @ -->
         * grabDepth
         *
         * - `StringTools.matchBrackets.grabDepth`
         *
         * Obtain all the bracketed substrings of the given bracket type from a string at a given depth.
         *
         * ```typescript
         * const example = `[
         *   [
         *     [1, 2, 3],
         *     [4, 5, 6]
         *   ],
         *   [
         *     [7, 8, 9]
         *   ]
         * ]`;
         * const grabbed = matchBrackets.grabDepth(example, 'square', 2);
         * grabbed; // [ '[1, 2, 3]', '[4, 5, 6]', '[7, 8, 9]' ]
         * ```
         * @param {string} input
         * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round']
         * @param {number} [depthID=0]
         * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
         * @returns {string[]}
         */
        const grabDepth: (input: string, bracketType?: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle', depthID?: number, replaceSymbols?: Partial<BracketReplaceSymbols>) => string[];
        /**<!-- DOCS: StringTools.matchBrackets.grabUnique #### @ -->
         * grabUnique
         *
         * - `StringTools.matchBrackets.grabUnique`
         *
         * Obtain all the bracketed substring of the given bracket type from a string with the given unique ID.
         * e.g. if uniqueID is 3, it will return the bracketed substring for the 4th instance of the opening bracket (see StringTools.matchBrackets.unique)
         *
         * ```typescript
         * const example = `[
         *   [
         *     [1, 2, 3],
         *     [4, 5, 6]
         *   ],
         *   [
         *     [7, 8, 9]
         *   ]
         * ]`;
         * const grabbed = matchBrackets.grabUnique(example, 'square', 3);
         * grabbed; // '[4, 5, 6]'
         * ```
         * @param {string} input
         * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round']
         * @param {number} [uniqueID=0]
         * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
         * @returns {string}
         */
        const grabUnique: (input: string, bracketType?: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle', uniqueID?: number, replaceSymbols?: Partial<BracketReplaceSymbols>) => string;
        /**<!-- DOCS: StringTools.matchBrackets.grab #### @ -->
         * grab
         *
         * - `StringTools.matchBrackets.grab`
         *
         * Grab all the bracketed substrings from a string of the given bracket type.
         *
         * ```typescript
         * const example = `[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]`;
         * matchBrackets.grab(example, 'square');
         * // [
         * //   '[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]',
         * //   '[[1, 2, 3], [4, 5, 6]]',
         * //   '[1, 2, 3]',
         * //   '[4, 5, 6]',
         * //   '[[7, 8, 9]]',
         * //   '[7, 8, 9]'
         * // ]
         * ```
         * @param {string} input
         * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round']
         * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
         * @returns {string[]}
         */
        const grab: (input: string, bracketType?: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle', replaceSymbols?: Partial<BracketReplaceSymbols>) => string[];
        /**<!-- DOCS: StringTools.matchBrackets.getReplaceSymbols #### @ -->
         * getReplaceSymbols
         *
         * - `StringTools.matchBrackets.getReplaceSymbols`
         *
         * Get a full set of replace symbols
         *
         * ```typescript
         * matchBrackets.getReplaceSymbols();
         * // {
         * //   END: '✧',
         * //   '(': '❪',
         * //   ')': '❫',
         * //   '[': '❲',
         * //   ']': '❳',
         * //   '{': '❴',
         * //   '}': '❵',
         * //   '<': '❰',
         * //   '>': '❱'
         * // }
         *
         * matchBrackets.getReplaceSymbols({
         *   END: '▣',
         *   '{': 'START_CURLY',
         *   '}': 'END_CURLY'
         * })
         * // {
         * //   END: '▣',
         * //   '(': '❪',
         * //   ')': '❫',
         * //   '[': '❲',
         * //   ']': '❳',
         * //   '{': 'START_CURLY',
         * //   '}': 'END_CURLY',
         * //   '<': '❰',
         * //   '>': '❱'
         * // }
         * ```
         * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
         * @returns {BracketReplaceSymbols}
         */
        const getReplaceSymbols: (replaceSymbols?: Partial<BracketReplaceSymbols>) => BracketReplaceSymbols;
        /**<!-- DOCS: StringTools.matchBrackets.BracketReplaceSymbols #### -->
         * BracketReplaceSymbols
         *
         * - `StringTools.matchBrackets.BracketReplaceSymbols`
         *
         * Type for controlling the symbols used to replace brackets
         *
         * ```typescript
         * {
         *   END: string;
         *   '(': string;
         *   ')': string;
         *   '[': string;
         *   ']': string;
         *   '{': string;
         *   '}': string;
         *   '<': string;
         *   '>': string;
         * }
         * ```
         */
        interface BracketReplaceSymbols {
            END: string;
            '(': string;
            ')': string;
            '[': string;
            ']': string;
            '{': string;
            '}': string;
            '<': string;
            '>': string;
        }
    }
}
/**<!-- DOCS-ALIAS: StringTools.clx -->
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
 * @param {...ClxType} [args]
 * @returns {string}
 */
declare const clx: (...args: ClxType[]) => string;

/**<!-- DOCS: PromiseTools ##! -->
 * PromiseTools
 *
 * A collection of promise utilities
 */
declare namespace PromiseTools {
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
    /**<!-- DOCS: PromiseTools.getDeferred ### @ -->
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
     * @returns {DeferredPromise<T>}
     */
    export const getDeferred: <T extends unknown>() => DeferredPromise<T>;
    /**<!-- DOCS: PromiseTools.all ### @ -->
     * all
     *
     * - `all`
     * - `PromiseTools.all`
     *
     * An alias for Promise.all
     * @param {Promise<T>[]} promises
     * @returns {Promise<any>}
     */
    export const all: <T extends unknown>(promises: Promise<T>[]) => Promise<any>;
    /**<!-- DOCS: PromiseTools.allLimit ### @ -->
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
     * @param {number} limit
     * @param {((index: number) => Promise<T>)[]} items
     * @param {boolean} [noThrow=false]
     * @returns {Promise<T[]>}
     */
    export const allLimit: <T extends unknown>(limit: number, items: ((index: number) => Promise<T>)[], noThrow?: boolean) => Promise<T[]>;
    /**<!-- DOCS: PromiseTools.each ### @ -->
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
     * @param {Ti[]} items
     * @param {(item: Ti, index: number, array: Ti[]) => Promise<any>} func
     * @returns {Promise<any>}
     */
    export const each: <Ti extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
    /**<!-- DOCS: PromiseTools.eachLimit ### @ -->
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
     * @param {number} limit
     * @param {Ti[]} items
     * @param {(item: Ti, index: number, array: Ti[]) => Promise<any>} func
     * @returns {Promise<any>}
     */
    export const eachLimit: <Ti extends unknown>(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
    /**<!-- DOCS: PromiseTools.map ### @ -->
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
     * @param {Ti[]} items
     * @param {(item: Ti, index: number, array: Ti[]) => Promise<To>} func
     * @returns {Promise<To[]>}
     */
    export const map: <Ti extends unknown, To extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>) => Promise<To[]>;
    /**<!-- DOCS: PromiseTools.mapLimit ### @ -->
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
     * @param {number} limit
     * @param {Ti[]} items
     * @param {(item: Ti, index: number, array: Ti[]) => Promise<To>} func
     * @returns {Promise<To[]>}
     */
    export const mapLimit: <Ti extends unknown, To extends unknown>(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>) => Promise<To[]>;
    type UnWrapPromise<T> = T extends Promise<infer U> ? U : T;
    type UnWrapPromiseObject<T> = {
        [K in keyof T]: UnWrapPromise<T[K]>;
    };
    /**<!-- DOCS: PromiseTools.allObj ### @ -->
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
     * @param {T} input
     * @returns {Promise<UnWrapPromiseObject<T>>}
     */
    export const allObj: <T extends Object>(input: T) => Promise<UnWrapPromiseObject<T>>;
    /**<!-- DOCS: PromiseTools.allLimitObj ### @ -->
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
     * @param {number} limit
     * @param {T} input
     * @param {boolean} [noThrow=false]
     * @returns {Promise<UnWrapPromiseObject<T>>}
     */
    export const allLimitObj: <T extends Object>(limit: number, input: T, noThrow?: boolean) => Promise<UnWrapPromiseObject<T>>;
    export {};
}
/**<!-- DOCS-ALIAS: PromiseTools.DeferredPromise -->
 * DeferredPromise
 * 
 * - `DeferredPromise`
 * - `PromiseTools.DeferredPromise`
 * 
 * A deferred promise
 */
declare type DeferredPromise<T> = PromiseTools.DeferredPromise<T>;
/**<!-- DOCS-ALIAS: PromiseTools.getDeferred -->
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
 * @returns {DeferredPromise<T>}
 */
declare const getDeferred: <T extends unknown>() => PromiseTools.DeferredPromise<T>;
/**<!-- DOCS-ALIAS: PromiseTools.all -->
 * all
 * 
 * - `all`
 * - `PromiseTools.all`
 * 
 * An alias for Promise.all
 * @param {Promise<T>[]} promises
 * @returns {Promise<any>}
 */
declare const all: <T extends unknown>(promises: Promise<T>[]) => Promise<any>;
/**<!-- DOCS-ALIAS: PromiseTools.allLimit -->
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
 * @param {number} limit
 * @param {((index: number) => Promise<T>)[]} items
 * @param {boolean} [noThrow=false]
 * @returns {Promise<T[]>}
 */
declare const allLimit: <T extends unknown>(limit: number, items: ((index: number) => Promise<T>)[], noThrow?: boolean) => Promise<T[]>;
/**<!-- DOCS-ALIAS: PromiseTools.each -->
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
 * @param {Ti[]} items
 * @param {(item: Ti, index: number, array: Ti[]) => Promise<any>} func
 * @returns {Promise<any>}
 */
declare const each: <Ti extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
/**<!-- DOCS-ALIAS: PromiseTools.eachLimit -->
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
 * @param {number} limit
 * @param {Ti[]} items
 * @param {(item: Ti, index: number, array: Ti[]) => Promise<any>} func
 * @returns {Promise<any>}
 */
declare const eachLimit: <Ti extends unknown>(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>) => Promise<any>;
/**<!-- DOCS-ALIAS: PromiseTools.map -->
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
 * @param {Ti[]} items
 * @param {(item: Ti, index: number, array: Ti[]) => Promise<To>} func
 * @returns {Promise<To[]>}
 */
declare const map: <Ti extends unknown, To extends unknown>(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>) => Promise<To[]>;
/**<!-- DOCS-ALIAS: PromiseTools.mapLimit -->
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
 * @param {number} limit
 * @param {Ti[]} items
 * @param {(item: Ti, index: number, array: Ti[]) => Promise<To>} func
 * @returns {Promise<To[]>}
 */
declare const mapLimit: <Ti extends unknown, To extends unknown>(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>) => Promise<To[]>;
/**<!-- DOCS-ALIAS: PromiseTools.allObj -->
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
 * @param {T} input
 * @returns {Promise<UnWrapPromiseObject<T>>}
 */
declare const allObj: <T extends Object>(input: T) => Promise<{ [K in keyof T]: T[K] extends infer T_1 ? T_1 extends T[K] ? T_1 extends Promise<unknown> ? unknown : T_1 : never : never; }>;
/**<!-- DOCS-ALIAS: PromiseTools.allLimitObj -->
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
 * @param {number} limit
 * @param {T} input
 * @param {boolean} [noThrow=false]
 * @returns {Promise<UnWrapPromiseObject<T>>}
 */
declare const allLimitObj: <T extends Object>(limit: number, input: T, noThrow?: boolean) => Promise<{ [K in keyof T]: T[K] extends infer T_1 ? T_1 extends T[K] ? T_1 extends Promise<unknown> ? unknown : T_1 : never : never; }>;

/**<!-- DOCS: ErrorTools ##! -->
 * ErrorTools
 *
 * Functions for handling errors.
 */
declare namespace ErrorTools {
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
     * @param {(...args: A) => Promise<T>} func
     * @param {...A} [args]
     * @returns {Promise<T>}
     */
    const tryOr: <T extends unknown, A extends unknown[]>(orValue: T, func: (...args: A) => Promise<T>, ...args: A) => Promise<T>;
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
    const retry: <T extends unknown>(maxTries?: number, delay?: ms, suppress?: boolean, run?: (attemptNumber: any) => T) => Promise<T>;
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
    const retryOr: <T extends unknown>(orValue: T, maxTries?: number, delay?: ms, run?: () => T | Promise<T>) => Promise<T>;
}
/**<!-- DOCS-ALIAS: ErrorTools.tryOr -->
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
 * @param {(...args: A) => Promise<T>} func
 * @param {...A} [args]
 * @returns {Promise<T>}
 */
declare const tryOr: <T extends unknown, A extends unknown[]>(orValue: T, func: (...args: A) => Promise<T>, ...args: A) => Promise<T>;
/**<!-- DOCS-ALIAS: ErrorTools.retry -->
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
declare const retry: <T extends unknown>(maxTries?: number, delay?: ms, suppress?: boolean, run?: (attemptNumber: any) => T) => Promise<T>;
/**<!-- DOCS-ALIAS: ErrorTools.retryOr -->
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
declare const retryOr: <T extends unknown>(orValue: T, maxTries?: number, delay?: ms, run?: () => T | Promise<T>) => Promise<T>;

/**<!-- DOCS: MathsTools ##! -->
 * MathsTools
 *
 * A collection of mathematical functions.
 *
 * > Note: The field is 'Mathematics', and so it is 'MathsTools' not ~'MathTools'~
 */
declare namespace MathsTools {
    /**<!-- DOCS: MathsTools.fixFloat ### @ -->
     * fixFloat
     *
     * - `ff`
     * - `MathsTools.ff`
     * - `MathsTools.fixFloat`
     *
     * Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers
     *
     * Can also be used to round numbers to a given precision
     *
     * > Note: 'fixFloat' is not a great name, but it's what I've always called it, so I'm sticking with it. 'ff' is a shorthand alias.
     *
     * ```typescript
     * 0.1 + 0.2 // 0.30000000000000004
     * MathsTools.fixFloat(0.1 + 0.2) // 0.3
     * ```
     * @param {number} num
     * @returns {number}
     */
    const fixFloat: (num: number, precision?: number) => number;
    /**<!-- DOCS-ALIAS: MathsTools.fixFloat -->
     * fixFloat
     * 
     * - `ff`
     * - `MathsTools.ff`
     * - `MathsTools.fixFloat`
     * 
     * Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers
     * 
     * Can also be used to round numbers to a given precision
     * 
     * > Note: 'fixFloat' is not a great name, but it's what I've always called it, so I'm sticking with it. 'ff' is a shorthand alias.
     * 
     * ```typescript
     * 0.1 + 0.2 // 0.30000000000000004
     * MathsTools.fixFloat(0.1 + 0.2) // 0.3
     * ```
     * @param {number} num
     * @returns {number}
     */
    const ff: (num: number, precision?: number) => number;
    /**<!-- DOCS: MathsTools.addAll ### @ -->
     * addAll
     *
     * - `MathsTools.addAll`
     *
     * Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max
     *
     * ```typescript
     * MathsTools.addAll(1, 2, 3, 4, 5); // 15
     * ```
     * @param {...number} [nums]
     * @returns {number}
     */
    const addAll: (...nums: number[]) => number;
    /**<!-- DOCS: MathsTools.round ### -->
     * round
     */
    /**<!-- DOCS: MathsTools.floorTo #### @ -->
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
     * @param {number} to
     * @param {number} value
     * @returns {number}
     */
    const floorTo: (to: number, value: number) => number;
    /**<!-- DOCS: MathsTools.roundTo #### @ -->
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
     * @param {number} to
     * @param {number} value
     * @returns {number}
     */
    const roundTo: (to: number, value: number) => number;
    /**<!-- DOCS: MathsTools.ceilTo #### @ -->
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
     * @param {number} to
     * @param {number} value
     * @returns {number}
     */
    const ceilTo: (to: number, value: number) => number;
    /**
     * round
     *
     * - `MathsTools.round`
     *
     * A collection of rounding functions.
     */
    namespace round {
        /**<!-- DOCS-ALIAS: MathsTools.floorTo -->
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
         * @param {number} to
         * @param {number} value
         * @returns {number}
         */
        const floorTo: (to: number, value: number) => number;
        /**<!-- DOCS-ALIAS: MathsTools.roundTo -->
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
         * @param {number} to
         * @param {number} value
         * @returns {number}
         */
        const roundTo: (to: number, value: number) => number;
        /**<!-- DOCS-ALIAS: MathsTools.ceilTo -->
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
         * @param {number} to
         * @param {number} value
         * @returns {number}
         */
        const ceilTo: (to: number, value: number) => number;
        /**<!-- DOCS-ALIAS: MathsTools.roundTo -->
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
         * @param {number} to
         * @param {number} value
         * @returns {number}
         */
        const to: (to: number, value: number) => number;
    }
    /**<!-- DOCS: MathsTools.lerp ### @ -->
     * lerp
     *
     * - `MathsTools.lerp`
     *
     * Linearly interpolates between two values.
     *
     * ```typescript
     * MathsTools.lerp(0.5, 0, 10); // 5
     * ```
     * @param {number} progress
     * @param {number} fromVal
     * @param {number} toVal
     * @returns {number}
     */
    const lerp: (progress: number, fromVal: number, toVal: number) => number;
    /**<!-- DOCS: MathsTools.lerpArray ### @ -->
     * lerpArray
     *
     * - `MathsTools.lerpArray`
     *
     * Linearly interpolates between the values of 2 arrays.
     *
     * ```typescript
     * MathsTools.lerpArray(0.5, [0, 0, 0], [10, 100, 1000]) // [5, 50, 500]
     * ```
     * @param {number} progress
     * @param {number[]} fromArr
     * @param {number[]} toArr
     * @returns {number[]}
     */
    const lerpArray: (progress: number, fromArr: number[], toArr: number[]) => number[];
    /**<!-- DOCS: MathsTools.lerpObj ### @ -->
     * lerpObj
     *
     * - `MathsTools.lerpObj`
     *
     * Linearly interpolates between the values of 2 arrays.
     *
     * ```typescript
     * MathsTools.lerpObj(0.5, {'ARS': 0, 'CHE': 0, 'FUL': 0}, {'ARS': 100, 'CHE': 10, 'FUL': 20}) // {'ARS': 50, 'CHE': 5, 'FUL': 10}
     * ```
     * @param {number} progress
     * @param {T} fromObj
     * @param {T} toObj
     * @returns {T}
     */
    const lerpObj: <T extends object>(progress: number, fromObj: T, toObj: T) => T;
    /**<!-- DOCS: MathsTools.clamp ### @ -->
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
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    const clamp: (value: number, min: number, max: number) => number;
    /**<!-- DOCS: MathsTools.getOrdinal ### @ -->
     * getOrdinal
     *
     * - `MathsTools.getOrdinal`
     *
     * Gets the ordinal suffix for a number.
     *
     * Note: all numbers are treated as positive.
     * Note: all decimals are 'th' (e.g. 1.2 is '1.2th') as they are tenth, hundredth, thousandth, etc.
     *
     * ```typescript
     * MathsTools.getOrdinal(1); // 'st'
     * MathsTools.getOrdinal(2); // 'nd'
     * MathsTools.getOrdinal(3); // 'rd'
     * MathsTools.getOrdinal(4); // 'th'
     *
     * MathsTools.getOrdinal(11); // 'th'
     * MathsTools.getOrdinal(12); // 'th'
     * MathsTools.getOrdinal(13); // 'th'
     * MathsTools.getOrdinal(14); // 'th'
     *
     * MathsTools.getOrdinal(21); // 'st'
     * MathsTools.getOrdinal(22); // 'nd'
     * MathsTools.getOrdinal(23); // 'rd'
     * MathsTools.getOrdinal(24); // 'th'
     * ```
     * @param {number} [num=0]
     * @returns {"th" | "st" | "nd" | "rd"}
     */
    const getOrdinal: (num?: number) => "th" | "st" | "nd" | "rd";
}
/**<!-- DOCS-ALIAS: MathsTools.fixFloat -->
 * fixFloat
 * 
 * - `ff`
 * - `MathsTools.ff`
 * - `MathsTools.fixFloat`
 * 
 * Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers
 * 
 * Can also be used to round numbers to a given precision
 * 
 * > Note: 'fixFloat' is not a great name, but it's what I've always called it, so I'm sticking with it. 'ff' is a shorthand alias.
 * 
 * ```typescript
 * 0.1 + 0.2 // 0.30000000000000004
 * MathsTools.fixFloat(0.1 + 0.2) // 0.3
 * ```
 * @param {number} num
 * @returns {number}
 */
declare const ff: (num: number, precision?: number) => number;

/**<!-- DOCS: ColourTools ##! -->
 * ColourTools
 *
 * A collection of functions for working with colours.
 */
declare namespace ColourTools {
    /**<!-- DOCS: ColourTools.ColourValues ### -->
     * ColourValues
     *
     * - `ColourTools.ColourValues`
     *
     * A type with 3 numbers:
     * - red [0-255]
     * - green [0-255]
     * - blue [0-255]
     */
    type ColourValues = [number, number, number];
    /**<!-- DOCS: ColourTools.HSLValues ### -->
     * HSLValues
     *
     * - `ColourTools.HSLValues`
     *
     * A type with 3 numbers:
     * - hue [0-360]
     * - saturation [0-100]
     * - lightness [0-100]
     */
    type HSLValues = [number, number, number];
    /**<!-- DOCS: ColourTools.namedColours ### -->
     * namedColours
     *
     * - `ColourTools.namedColours`
     *
     * A dictionary of different colour names and their RGB values
     *
     * | Name                 | RGB           | Hex     |
     * | -------------------- | ------------- | ------- |
     * | aliceblue            | 240, 248, 255 | #f0f8ff |
     * | antiquewhite         | 250, 235, 215 | #faebd7 |
     * | aqua                 | 0, 255, 255   | #00ffff |
     * | aquamarine           | 127, 255, 212 | #7fffd4 |
     * | azure                | 240, 255, 255 | #f0ffff |
     * | beige                | 245, 245, 220 | #f5f5dc |
     * | bisque               | 255, 228, 196 | #ffe4c4 |
     * | black                | 0, 0, 0       | #000000 |
     * | blanchedalmond       | 255, 235, 205 | #ffebcd |
     * | blue                 | 0, 0, 255     | #0000ff |
     * | blueviolet           | 138, 43, 226  | #8a2be2 |
     * | brown                | 165, 42, 42   | #a52a2a |
     * | burlywood            | 222, 184, 135 | #deb887 |
     * | cadetblue            | 95, 158, 160  | #5f9ea0 |
     * | chartreuse           | 127, 255, 0   | #7fff00 |
     * | chocolate            | 210, 105, 30  | #d2691e |
     * | coral                | 255, 127, 80  | #ff7f50 |
     * | cornflowerblue       | 100, 149, 237 | #6495ed |
     * | cornsilk             | 255, 248, 220 | #fff8dc |
     * | crimson              | 220, 20, 60   | #dc143c |
     * | cyan                 | 0, 255, 255   | #00ffff |
     * | darkblue             | 0, 0, 139     | #00008b |
     * | darkcyan             | 0, 139, 139   | #008b8b |
     * | darkgoldenrod        | 184, 134, 11  | #b8860b |
     * | darkgray             | 169, 169, 169 | #a9a9a9 |
     * | darkgreen            | 0, 100, 0     | #006400 |
     * | darkgrey             | 169, 169, 169 | #a9a9a9 |
     * | darkkhaki            | 189, 183, 107 | #bdb76b |
     * | darkmagenta          | 139, 0, 139   | #8b008b |
     * | darkolivegreen       | 85, 107, 47   | #556b2f |
     * | darkorange           | 255, 140, 0   | #ff8c00 |
     * | darkorchid           | 153, 50, 204  | #9932cc |
     * | darkred              | 139, 0, 0     | #8b0000 |
     * | darksalmon           | 233, 150, 122 | #e9967a |
     * | darkseagreen         | 143, 188, 143 | #8fbc8f |
     * | darkslateblue        | 72, 61, 139   | #483d8b |
     * | darkslategray        | 47, 79, 79    | #2f4f4f |
     * | darkslategrey        | 47, 79, 79    | #2f4f4f |
     * | darkturquoise        | 0, 206, 209   | #00ced1 |
     * | darkviolet           | 148, 0, 211   | #9400d3 |
     * | deeppink             | 255, 20, 147  | #ff1493 |
     * | deepskyblue          | 0, 191, 255   | #00bfff |
     * | dimgray              | 105, 105, 105 | #696969 |
     * | dimgrey              | 105, 105, 105 | #696969 |
     * | dodgerblue           | 30, 144, 255  | #1e90ff |
     * | firebrick            | 178, 34, 34   | #b22222 |
     * | floralwhite          | 255, 250, 240 | #fffaf0 |
     * | forestgreen          | 34, 139, 34   | #228b22 |
     * | fractal              | 128, 128, 128 | #808080 |
     * | fuchsia              | 255, 0, 255   | #ff00ff |
     * | gainsboro            | 220, 220, 220 | #dcdcdc |
     * | ghostwhite           | 248, 248, 255 | #f8f8ff |
     * | gold                 | 255, 215, 0   | #ffd700 |
     * | goldenrod            | 218, 165, 32  | #daa520 |
     * | gray0                | 0, 0, 0       | #000000 |
     * | gray1                | 3, 3, 3       | #030303 |
     * | gray2                | 5, 5, 5       | #050505 |
     * | gray3                | 8, 8, 8       | #080808 |
     * | gray4                | 10, 10, 10    | #0a0a0a |
     * | gray5                | 13, 13, 13    | #0d0d0d |
     * | gray6                | 15, 15, 15    | #0f0f0f |
     * | gray7                | 18, 18, 18    | #121212 |
     * | gray8                | 20, 20, 20    | #141414 |
     * | gray9                | 23, 23, 23    | #171717 |
     * | gray10               | 26, 26, 26    | #1a1a1a |
     * | gray11               | 28, 28, 28    | #1c1c1c |
     * | gray12               | 31, 31, 31    | #1f1f1f |
     * | gray13               | 33, 33, 33    | #212121 |
     * | gray14               | 36, 36, 36    | #242424 |
     * | gray15               | 38, 38, 38    | #262626 |
     * | gray16               | 41, 41, 41    | #292929 |
     * | gray17               | 43, 43, 43    | #2b2b2b |
     * | gray18               | 46, 46, 46    | #2e2e2e |
     * | gray19               | 48, 48, 48    | #303030 |
     * | gray20               | 51, 51, 51    | #333333 |
     * | gray21               | 54, 54, 54    | #363636 |
     * | gray22               | 56, 56, 56    | #383838 |
     * | gray23               | 59, 59, 59    | #3b3b3b |
     * | gray24               | 61, 61, 61    | #3d3d3d |
     * | gray25               | 64, 64, 64    | #404040 |
     * | gray26               | 66, 66, 66    | #424242 |
     * | gray27               | 69, 69, 69    | #454545 |
     * | gray28               | 71, 71, 71    | #474747 |
     * | gray29               | 74, 74, 74    | #4a4a4a |
     * | gray30               | 77, 77, 77    | #4d4d4d |
     * | gray31               | 79, 79, 79    | #4f4f4f |
     * | gray32               | 82, 82, 82    | #525252 |
     * | gray33               | 84, 84, 84    | #545454 |
     * | gray34               | 87, 87, 87    | #575757 |
     * | gray35               | 89, 89, 89    | #595959 |
     * | gray36               | 92, 92, 92    | #5c5c5c |
     * | gray37               | 94, 94, 94    | #5e5e5e |
     * | gray38               | 97, 97, 97    | #616161 |
     * | gray39               | 99, 99, 99    | #636363 |
     * | gray40               | 102, 102, 102 | #666666 |
     * | gray41               | 105, 105, 105 | #696969 |
     * | gray42               | 107, 107, 107 | #6b6b6b |
     * | gray43               | 110, 110, 110 | #6e6e6e |
     * | gray44               | 112, 112, 112 | #707070 |
     * | gray45               | 115, 115, 115 | #737373 |
     * | gray46               | 117, 117, 117 | #757575 |
     * | gray47               | 120, 120, 120 | #787878 |
     * | gray48               | 122, 122, 122 | #7a7a7a |
     * | gray49               | 125, 125, 125 | #7d7d7d |
     * | gray50               | 127, 127, 127 | #7f7f7f |
     * | gray51               | 130, 130, 130 | #828282 |
     * | gray52               | 133, 133, 133 | #858585 |
     * | gray53               | 135, 135, 135 | #878787 |
     * | gray54               | 138, 138, 138 | #8a8a8a |
     * | gray55               | 140, 140, 140 | #8c8c8c |
     * | gray56               | 143, 143, 143 | #8f8f8f |
     * | gray57               | 145, 145, 145 | #919191 |
     * | gray58               | 148, 148, 148 | #949494 |
     * | gray59               | 150, 150, 150 | #969696 |
     * | gray60               | 153, 153, 153 | #999999 |
     * | gray61               | 156, 156, 156 | #9c9c9c |
     * | gray62               | 158, 158, 158 | #9e9e9e |
     * | gray63               | 161, 161, 161 | #a1a1a1 |
     * | gray64               | 163, 163, 163 | #a3a3a3 |
     * | gray65               | 166, 166, 166 | #a6a6a6 |
     * | gray66               | 168, 168, 168 | #a8a8a8 |
     * | gray67               | 171, 171, 171 | #ababab |
     * | gray68               | 173, 173, 173 | #adadad |
     * | gray69               | 176, 176, 176 | #b0b0b0 |
     * | gray70               | 179, 179, 179 | #b3b3b3 |
     * | gray71               | 181, 181, 181 | #b5b5b5 |
     * | gray72               | 184, 184, 184 | #b8b8b8 |
     * | gray73               | 186, 186, 186 | #bababa |
     * | gray74               | 189, 189, 189 | #bdbdbd |
     * | gray75               | 191, 191, 191 | #bfbfbf |
     * | gray76               | 194, 194, 194 | #c2c2c2 |
     * | gray77               | 196, 196, 196 | #c4c4c4 |
     * | gray78               | 199, 199, 199 | #c7c7c7 |
     * | gray79               | 201, 201, 201 | #c9c9c9 |
     * | gray80               | 204, 204, 204 | #cccccc |
     * | gray81               | 207, 207, 207 | #cfcfcf |
     * | gray82               | 209, 209, 209 | #d1d1d1 |
     * | gray83               | 212, 212, 212 | #d4d4d4 |
     * | gray84               | 214, 214, 214 | #d6d6d6 |
     * | gray85               | 217, 217, 217 | #d9d9d9 |
     * | gray86               | 219, 219, 219 | #dbdbdb |
     * | gray87               | 222, 222, 222 | #dedede |
     * | gray88               | 224, 224, 224 | #e0e0e0 |
     * | gray89               | 227, 227, 227 | #e3e3e3 |
     * | gray90               | 229, 229, 229 | #e5e5e5 |
     * | gray91               | 232, 232, 232 | #e8e8e8 |
     * | gray92               | 235, 235, 235 | #ebebeb |
     * | gray93               | 237, 237, 237 | #ededed |
     * | gray94               | 240, 240, 240 | #f0f0f0 |
     * | gray95               | 242, 242, 242 | #f2f2f2 |
     * | gray96               | 245, 245, 245 | #f5f5f5 |
     * | gray97               | 247, 247, 247 | #f7f7f7 |
     * | gray98               | 250, 250, 250 | #fafafa |
     * | gray99               | 252, 252, 252 | #fcfcfc |
     * | gray100              | 255, 255, 255 | #ffffff |
     * | gray                 | 126, 126, 126 | #7e7e7e |
     * | green                | 0, 128, 0     | #008000 |
     * | greenyellow          | 173, 255, 47  | #adff2f |
     * | grey                 | 128, 128, 128 | #808080 |
     * | honeydew             | 240, 255, 240 | #f0fff0 |
     * | hotpink              | 255, 105, 180 | #ff69b4 |
     * | indianred            | 205, 92, 92   | #cd5c5c |
     * | indigo               | 75, 0, 130    | #4b0082 |
     * | ivory                | 255, 255, 240 | #fffff0 |
     * | khaki                | 240, 230, 140 | #f0e68c |
     * | lavender             | 230, 230, 250 | #e6e6fa |
     * | lavenderblush        | 255, 240, 245 | #fff0f5 |
     * | lawngreen            | 124, 252, 0   | #7cfc00 |
     * | lemonchiffon         | 255, 250, 205 | #fffacd |
     * | lightblue            | 173, 216, 230 | #add8e6 |
     * | lightcoral           | 240, 128, 128 | #f08080 |
     * | lightcyan            | 224, 255, 255 | #e0ffff |
     * | lightgoldenrodyellow | 250, 250, 210 | #fafad2 |
     * | lightgray            | 211, 211, 211 | #d3d3d3 |
     * | lightgreen           | 144, 238, 144 | #90ee90 |
     * | lightgrey            | 211, 211, 211 | #d3d3d3 |
     * | lightpink            | 255, 182, 193 | #ffb6c1 |
     * | lightsalmon          | 255, 160, 122 | #ffa07a |
     * | lightseagreen        | 32, 178, 170  | #20b2aa |
     * | lightskyblue         | 135, 206, 250 | #87cefa |
     * | lightslategray       | 119, 136, 153 | #778899 |
     * | lightslategrey       | 119, 136, 153 | #778899 |
     * | lightsteelblue       | 176, 196, 222 | #b0c4de |
     * | lightyellow          | 255, 255, 224 | #ffffe0 |
     * | lime                 | 0, 255, 0     | #00ff00 |
     * | limegreen            | 50, 205, 50   | #32cd32 |
     * | linen                | 250, 240, 230 | #faf0e6 |
     * | magenta              | 255, 0, 255   | #ff00ff |
     * | maroon               | 128, 0, 0     | #800000 |
     * | mediumaquamarine     | 102, 205, 170 | #66cdaa |
     * | mediumblue           | 0, 0, 205     | #0000cd |
     * | mediumorchid         | 186, 85, 211  | #ba55d3 |
     * | mediumpurple         | 147, 112, 219 | #9370db |
     * | mediumseagreen       | 60, 179, 113  | #3cb371 |
     * | mediumslateblue      | 123, 104, 238 | #7b68ee |
     * | mediumspringgreen    | 0, 250, 154   | #00fa9a |
     * | mediumturquoise      | 72, 209, 204  | #48d1cc |
     * | mediumvioletred      | 199, 21, 133  | #c71585 |
     * | midnightblue         | 25, 25, 112   | #191970 |
     * | mintcream            | 245, 255, 250 | #f5fffa |
     * | mistyrose            | 255, 228, 225 | #ffe4e1 |
     * | moccasin             | 255, 228, 181 | #ffe4b5 |
     * | navajowhite          | 255, 222, 173 | #ffdead |
     * | navy                 | 0, 0, 128     | #000080 |
     * | none                 | 0, 0, 0       | #000000 |
     * | oldlace              | 253, 245, 230 | #fdf5e6 |
     * | olive                | 128, 128, 0   | #808000 |
     * | olivedrab            | 107, 142, 35  | #6b8e23 |
     * | orange               | 255, 165, 0   | #ffa500 |
     * | orangered            | 255, 69, 0    | #ff4500 |
     * | orchid               | 218, 112, 214 | #da70d6 |
     * | palegoldenrod        | 238, 232, 170 | #eee8aa |
     * | palegreen            | 152, 251, 152 | #98fb98 |
     * | paleturquoise        | 175, 238, 238 | #afeeee |
     * | palevioletred        | 219, 112, 147 | #db7093 |
     * | papayawhip           | 255, 239, 213 | #ffefd5 |
     * | peachpuff            | 255, 218, 185 | #ffdab9 |
     * | peru                 | 205, 133, 63  | #cd853f |
     * | pink                 | 255, 192, 203 | #ffc0cb |
     * | plum                 | 221, 160, 221 | #dda0dd |
     * | powderblue           | 176, 224, 230 | #b0e0e6 |
     * | purple               | 128, 0, 128   | #800080 |
     * | red                  | 255, 0, 0     | #ff0000 |
     * | rosybrown            | 188, 143, 143 | #bc8f8f |
     * | royalblue            | 65, 105, 225  | #4169e1 |
     * | saddlebrown          | 139, 69, 19   | #8b4513 |
     * | salmon               | 250, 128, 114 | #fa8072 |
     * | sandybrown           | 244, 164, 96  | #f4a460 |
     * | seagreen             | 46, 139, 87   | #2e8b57 |
     * | seashell             | 255, 245, 238 | #fff5ee |
     * | sienna               | 160, 82, 45   | #a0522d |
     * | silver               | 192, 192, 192 | #c0c0c0 |
     * | skyblue              | 135, 206, 235 | #87ceeb |
     * | slateblue            | 106, 90, 205  | #6a5acd |
     * | slategray            | 112, 128, 144 | #708090 |
     * | slategrey            | 112, 128, 144 | #708090 |
     * | snow                 | 255, 250, 250 | #fffafa |
     * | springgreen          | 0, 255, 127   | #00ff7f |
     * | steelblue            | 70, 130, 180  | #4682b4 |
     * | tan                  | 210, 180, 140 | #d2b48c |
     * | teal                 | 0, 128, 128   | #008080 |
     * | thistle              | 216, 191, 216 | #d8bfd8 |
     * | tomato               | 255, 99, 71   | #ff6347 |
     * | turquoise            | 64, 224, 208  | #40e0d0 |
     * | violet               | 238, 130, 238 | #ee82ee |
     * | wheat                | 245, 222, 179 | #f5deb3 |
     * | white                | 255, 255, 255 | #ffffff |
     * | whitesmoke           | 245, 245, 245 | #f5f5f5 |
     * | yellow               | 255, 255, 0   | #ffff00 |
     * | yellowgreen          | 154, 205, 50  | #9acd32 |
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
    const namedColours: {
        aliceblue: ColourValues;
        antiquewhite: ColourValues;
        aqua: ColourValues;
        aquamarine: ColourValues;
        azure: ColourValues;
        beige: ColourValues;
        bisque: ColourValues;
        black: ColourValues;
        blanchedalmond: ColourValues;
        blue: ColourValues;
        blueviolet: ColourValues;
        brown: ColourValues;
        burlywood: ColourValues;
        cadetblue: ColourValues;
        chartreuse: ColourValues;
        chocolate: ColourValues;
        coral: ColourValues;
        cornflowerblue: ColourValues;
        cornsilk: ColourValues;
        crimson: ColourValues;
        cyan: ColourValues;
        darkblue: ColourValues;
        darkcyan: ColourValues;
        darkgoldenrod: ColourValues;
        darkgray: ColourValues;
        darkgreen: ColourValues;
        darkgrey: ColourValues;
        darkkhaki: ColourValues;
        darkmagenta: ColourValues;
        darkolivegreen: ColourValues;
        darkorange: ColourValues;
        darkorchid: ColourValues;
        darkred: ColourValues;
        darksalmon: ColourValues;
        darkseagreen: ColourValues;
        darkslateblue: ColourValues;
        darkslategray: ColourValues;
        darkslategrey: ColourValues;
        darkturquoise: ColourValues;
        darkviolet: ColourValues;
        deeppink: ColourValues;
        deepskyblue: ColourValues;
        dimgray: ColourValues;
        dimgrey: ColourValues;
        dodgerblue: ColourValues;
        firebrick: ColourValues;
        floralwhite: ColourValues;
        forestgreen: ColourValues;
        fractal: ColourValues;
        fuchsia: ColourValues;
        gainsboro: ColourValues;
        ghostwhite: ColourValues;
        gold: ColourValues;
        goldenrod: ColourValues;
        gray0: ColourValues;
        gray1: ColourValues;
        gray2: ColourValues;
        gray3: ColourValues;
        gray4: ColourValues;
        gray5: ColourValues;
        gray6: ColourValues;
        gray7: ColourValues;
        gray8: ColourValues;
        gray9: ColourValues;
        gray10: ColourValues;
        gray11: ColourValues;
        gray12: ColourValues;
        gray13: ColourValues;
        gray14: ColourValues;
        gray15: ColourValues;
        gray16: ColourValues;
        gray17: ColourValues;
        gray18: ColourValues;
        gray19: ColourValues;
        gray20: ColourValues;
        gray21: ColourValues;
        gray22: ColourValues;
        gray23: ColourValues;
        gray24: ColourValues;
        gray25: ColourValues;
        gray26: ColourValues;
        gray27: ColourValues;
        gray28: ColourValues;
        gray29: ColourValues;
        gray30: ColourValues;
        gray31: ColourValues;
        gray32: ColourValues;
        gray33: ColourValues;
        gray34: ColourValues;
        gray35: ColourValues;
        gray36: ColourValues;
        gray37: ColourValues;
        gray38: ColourValues;
        gray39: ColourValues;
        gray40: ColourValues;
        gray41: ColourValues;
        gray42: ColourValues;
        gray43: ColourValues;
        gray44: ColourValues;
        gray45: ColourValues;
        gray46: ColourValues;
        gray47: ColourValues;
        gray48: ColourValues;
        gray49: ColourValues;
        gray50: ColourValues;
        gray51: ColourValues;
        gray52: ColourValues;
        gray53: ColourValues;
        gray54: ColourValues;
        gray55: ColourValues;
        gray56: ColourValues;
        gray57: ColourValues;
        gray58: ColourValues;
        gray59: ColourValues;
        gray60: ColourValues;
        gray61: ColourValues;
        gray62: ColourValues;
        gray63: ColourValues;
        gray64: ColourValues;
        gray65: ColourValues;
        gray66: ColourValues;
        gray67: ColourValues;
        gray68: ColourValues;
        gray69: ColourValues;
        gray70: ColourValues;
        gray71: ColourValues;
        gray72: ColourValues;
        gray73: ColourValues;
        gray74: ColourValues;
        gray75: ColourValues;
        gray76: ColourValues;
        gray77: ColourValues;
        gray78: ColourValues;
        gray79: ColourValues;
        gray80: ColourValues;
        gray81: ColourValues;
        gray82: ColourValues;
        gray83: ColourValues;
        gray84: ColourValues;
        gray85: ColourValues;
        gray86: ColourValues;
        gray87: ColourValues;
        gray88: ColourValues;
        gray89: ColourValues;
        gray90: ColourValues;
        gray91: ColourValues;
        gray92: ColourValues;
        gray93: ColourValues;
        gray94: ColourValues;
        gray95: ColourValues;
        gray96: ColourValues;
        gray97: ColourValues;
        gray98: ColourValues;
        gray99: ColourValues;
        gray100: ColourValues;
        gray: ColourValues;
        green: ColourValues;
        greenyellow: ColourValues;
        grey: ColourValues;
        honeydew: ColourValues;
        hotpink: ColourValues;
        indianred: ColourValues;
        indigo: ColourValues;
        ivory: ColourValues;
        khaki: ColourValues;
        lavender: ColourValues;
        lavenderblush: ColourValues;
        lawngreen: ColourValues;
        lemonchiffon: ColourValues;
        lightblue: ColourValues;
        lightcoral: ColourValues;
        lightcyan: ColourValues;
        lightgoldenrodyellow: ColourValues;
        lightgray: ColourValues;
        lightgreen: ColourValues;
        lightgrey: ColourValues;
        lightpink: ColourValues;
        lightsalmon: ColourValues;
        lightseagreen: ColourValues;
        lightskyblue: ColourValues;
        lightslategray: ColourValues;
        lightslategrey: ColourValues;
        lightsteelblue: ColourValues;
        lightyellow: ColourValues;
        lime: ColourValues;
        limegreen: ColourValues;
        linen: ColourValues;
        magenta: ColourValues;
        maroon: ColourValues;
        mediumaquamarine: ColourValues;
        mediumblue: ColourValues;
        mediumorchid: ColourValues;
        mediumpurple: ColourValues;
        mediumseagreen: ColourValues;
        mediumslateblue: ColourValues;
        mediumspringgreen: ColourValues;
        mediumturquoise: ColourValues;
        mediumvioletred: ColourValues;
        midnightblue: ColourValues;
        mintcream: ColourValues;
        mistyrose: ColourValues;
        moccasin: ColourValues;
        navajowhite: ColourValues;
        navy: ColourValues;
        none: ColourValues;
        oldlace: ColourValues;
        olive: ColourValues;
        olivedrab: ColourValues;
        orange: ColourValues;
        orangered: ColourValues;
        orchid: ColourValues;
        palegoldenrod: ColourValues;
        palegreen: ColourValues;
        paleturquoise: ColourValues;
        palevioletred: ColourValues;
        papayawhip: ColourValues;
        peachpuff: ColourValues;
        peru: ColourValues;
        pink: ColourValues;
        plum: ColourValues;
        powderblue: ColourValues;
        purple: ColourValues;
        red: ColourValues;
        rosybrown: ColourValues;
        royalblue: ColourValues;
        saddlebrown: ColourValues;
        salmon: ColourValues;
        sandybrown: ColourValues;
        seagreen: ColourValues;
        seashell: ColourValues;
        sienna: ColourValues;
        silver: ColourValues;
        skyblue: ColourValues;
        slateblue: ColourValues;
        slategray: ColourValues;
        slategrey: ColourValues;
        snow: ColourValues;
        springgreen: ColourValues;
        steelblue: ColourValues;
        tan: ColourValues;
        teal: ColourValues;
        thistle: ColourValues;
        tomato: ColourValues;
        turquoise: ColourValues;
        violet: ColourValues;
        wheat: ColourValues;
        white: ColourValues;
        whitesmoke: ColourValues;
        yellow: ColourValues;
        yellowgreen: ColourValues;
    };
    /**<!-- DOCS: ColourTools.parse ### @ -->
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
     * @param {string} input
     * @returns {ColourValues}
     */
    const parse: (input: string) => ColourValues;
    /**<!-- DOCS: ColourTools.toHex ### @ -->
     * toHex
     *
     * - `ColourTools.toHex`
     *
     * Convert a colour object (RGB array) to a hex string
     *
     * ```typescript
     * ColourTools.toHex([255, 0, 0]) // '#FF0000'
     * ```
     * @param {ColourValues} colour
     * @returns {string}
     */
    const toHex: (colour: ColourValues) => string;
    /**<!-- DOCS: ColourTools.getLuminance ### @ -->
     * getLuminance
     *
     * - `ColourTools.getLuminance`
     *
     * IMPORTANT: This is not the same as the HSL lightness value.
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
     * @param {ColourValues} rgb
     * @returns {number}
     */
    const getLuminance: (rgb: ColourValues) => number;
    /**<!-- DOCS: ColourTools.toYUV ### @ -->
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
     * @param {ColourValues} rgb
     * @returns {ColourValues}
     */
    const toYUV: (rgb: ColourValues) => ColourValues;
    /**<!-- DOCS: ColourTools.toHSL ### @ -->
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
     * @param {ColourValues} colour
     * @param {boolean} [round=true]
     * @returns {HSLValues}
     */
    const toHSL: (colour: ColourValues, round?: boolean) => HSLValues;
    /**<!-- DOCS: ColourTools.fromHSL ### @ -->
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
     * @param {HSLValues} hsl
     * @param {boolean} [round=true]
     * @returns {ColourValues}
     */
    const fromHSL: (hsl: HSLValues, round?: boolean) => ColourValues;
    /**<!-- DOCS: ColourTools.invertColour ### @ -->
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
     * @param {ColourValues} rgb
     * @returns {ColourValues}
     */
    const invertColour: (rgb: ColourValues) => ColourValues;
    /**<!-- DOCS: ColourTools.getContrastedColour ### @ -->
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
     * @param {ColourValues} colour
     * @returns {ColourValues}
     */
    const getContrastedColour: (colour: ColourValues) => ColourValues;
    /**<!-- DOCS: ColourTools.getLimitedColour ### @ -->
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
     * @param {ColourValues} colour
     * @param {(hsl: HSLValues) => boolean} checkFn
     * @param {(hsl: HSLValues) => HSLValues} adjustFn
     * @returns {ColourValues}
     */
    const getLimitedColour: (colour: ColourValues, checkFn: (hsl: HSLValues) => boolean, adjustFn: (hsl: HSLValues) => HSLValues) => ColourValues;
}

/**<!-- DOCS: TimeTools ##! -->
 * TimeTools
 *
 * A collection of time-related utility functions.
 */
declare namespace TimeTools {
    /**<!-- DOCS: TimeTools.toReadableDuration ### @ -->
     * toReadableDuration
     *
     * - `TimeTools.toReadableDuration`
     *
     * Converts a duration in milliseconds to a human readable string.
     *
     * ```typescript
     * TimeTools.toReadableDuration(20); // '20ms'
     * TimeTools.toReadableDuration(seconds(59)); // '59s'
     * TimeTools.toReadableDuration(seconds(60)); // '1m'
     * TimeTools.toReadableDuration(hours(23)); // '23h'
     * TimeTools.toReadableDuration(hours(24)); // '1d'
     * TimeTools.toReadableDuration(days(10)); // '10d'
     *
     * TimeTools.toReadableDuration(20, true) // '20 milliseconds'
     * TimeTools.toReadableDuration(seconds(59), true) // '59 seconds'
     * TimeTools.toReadableDuration(seconds(60), true) // '1 minute'
     * TimeTools.toReadableDuration(hours(23), true) // '23 hours'
     * TimeTools.toReadableDuration(hours(24), true) // '1 day'
     * TimeTools.toReadableDuration(days(10), true) // '10 days'
     *
     * const realisticDuration = days(10) + hours(2) + seconds(31) + 512; // 871231512
     * TimeTools.toReadableDuration(realisticDuration, true, 4) // '10 days, 2 hours, 31 seconds & 512 milliseconds'
     * TimeTools.toReadableDuration(realisticDuration, true) // '10 days, 2 hours & 31 seconds'
     * TimeTools.toReadableDuration(realisticDuration, true, 2) // '10 days & 2 hours'
     * ```
     * @param {ms} duration
     * @param {boolean} [longNames=false]
     * @param {number} [maxUnits=3]
     * @returns {string}
     */
    const toReadableDuration: (duration: ms, longNames?: boolean, maxUnits?: number) => string;
}

/**<!-- DOCS: symbols ##! -->
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
/**<!-- DOCS: superscript ### @ -->
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
 * @param {number | string} num
 * @returns {string}
 */
declare const superscript: (num: number | string) => string;

/**<!-- DOCS: queue ##! -->
 * queue
 *
 * A way of managing queues from different parts of the code.
 */
/**<!-- DOCS: queue.QueueManager ### -->
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
    /**<!-- DOCS: queue.setDefaultPauseTime #### @ -->
     * setDefaultPauseTime
     *
     * - `queue.setDefaultPauseTime`
     * - `new QueueManager().setDefaultPauseTime`
     *
     * Sets the default pause time for pauses between queue items.
     * @param {number} time
     * @returns {void}
     */
    setDefaultPauseTime(time: number): void;
    /**<!-- DOCS: queue.setPauseTime #### @ -->
     * setPauseTime
     *
     * - `queue.setPauseTime`
     * - `new QueueManager().setPauseTime`
     *
     * Sets the pause time for pauses between queue items for the specified queue.
     * @param {string} id
     * @param {number} time
     * @returns {void}
     */
    setPauseTime(id: string, time: number): void;
    /**<!-- DOCS: queue.add #### @ -->
     * add
     *
     * - `queue.add`
     * - `new QueueManager().add`
     *
     * Adds a function to the queue.
     * @param {string} id
     * @param {() => Promise<T>} fn
     * @returns {Promise<T>}
     */
    add<T>(id: string, fn: () => Promise<T>): Promise<T>;
    /**<!-- DOCS: queue.new #### @ -->
     * new
     *
     * - `queue.new`
     * - `new QueueManager().new`
     *
     * Creates a new QueueManager instance.
     * @param {number} [defaultPauseTime]
     * @returns {QueueManager}
     */
    new(defaultPauseTime?: number): QueueManager;
}
/**<!-- DOCS: queue.queue ### -->
 * queue
 *
 * - `queue`
 *
 * An instance of QueueManager
 *
 * See QueueManager for more information.
 */
declare const queue: QueueManager;

/**<!-- DOCS: safe ##! -->
 * safe
 *
 * A series of simple functions for ensuring that a value is safe to use.
 *
 * Used internally for input validation.
 */
declare namespace safe {
    /**<!-- DOCS: safe.num ### @ -->
     * num
     *
     * - `safe.num`
     *
     * Process a number value, ensuring that it is safe to use.
     *
     * ```typescript
     * safe.num(10); // 10
     * safe.num(10000); // 10000
     * safe.num(-1); // -1
     * safe.num(true); // 0
     * safe.num('123'); // 0
     * safe.num(NaN); // 0
     * safe.num(Infinity); // 0
     * safe.num(null); // 0
     * safe.num(undefined); // 0
     *
     * safe.num(10, true, 0, 100, 99); // 10
     * safe.num(10000, true, 0, 100, 99); // 100
     * safe.num(-1, true, 0, 100, 99); // 0
     * safe.num(true, true, 0, 100, 99); // 99
     * safe.num('123', true, 0, 100, 99); // 99
     * safe.num(NaN, true, 0, 100, 99); // 99
     * safe.num(Infinity, true, 0, 100, 99); // 100
     * safe.num(null, true, 0, 100, 99); // 99
     * safe.num(undefined, true, 0, 100, 99); // 99
     * ```
     * @param {number} input
     * @param {boolean} [isInt=false]
     * @param {number} [min]
     * @param {number} [max]
     * @param {number} [fallback=0]
     * @returns {number}
     */
    const num: (input: number, isInt?: boolean, min?: number, max?: number, fallback?: number) => number;
    /**<!-- DOCS: safe.str ### @ -->
     * str
     *
     * - `safe.str`
     *
     * Process a string value, ensuring that it is safe to use.
     *
     * ```typescript
     * safe.str('foo'); // 'foo'
     * safe.str(''); // ''
     * safe.str(123); // ''
     * safe.str(true); // ''
     * safe.str({foo: 'bar'}); // ''
     * safe.str([]); // ''
     * safe.str(null); // ''
     * safe.str(undefined); // ''
     *
     * safe.str('foo', true, 'bar'); // 'foo'
     * safe.str('', true, 'bar'); // ''
     * safe.str(123, true, 'bar'); // '123'
     * safe.str(true, true, 'bar'); // 'true'
     * safe.str({foo: 'bar'}, true, 'bar'); // 'bar'
     * safe.str([], true, 'bar'); // 'bar'
     * safe.str(null, true, 'bar'); // 'bar'
     * safe.str(undefined, true, 'bar'); // 'bar'
     * ```
     * @param {string} input
     * @param {boolean} [allowBasicStringify=false]
     * @param {string} [fallback='']
     * @returns {string}
     */
    const str: (input: string, allowBasicStringify?: boolean, fallback?: string) => string;
    /**<!-- DOCS: safe.bool ### @ -->
     * bool
     *
     * - `safe.bool`
     *
     * Process a boolean value, ensuring that it is safe to use.
     *
     * ```typescript
     * safe.bool(true); // true
     * safe.bool(false); // false
     * safe.bool(1); // true
     * safe.bool(0); // false
     * safe.bool(123); // false
     * safe.bool('true'); // true
     * safe.bool('false'); // false
     * safe.bool('foobar'); // false
     * safe.bool({foo: 'bar'}); // false
     * safe.bool([]); // false
     * safe.bool(null); // false
     * safe.bool(undefined); // false
     *
     * safe.bool(true, true); // true
     * safe.bool(false, true); // false
     * safe.bool(1, true); // true
     * safe.bool(0, true); // false
     * safe.bool(123, true); // true
     * safe.bool('true', true); // true
     * safe.bool('false', true); // false
     * safe.bool('foobar', true); // true
     * safe.bool({foo: 'bar'}, true); // true
     * safe.bool([], true); // true
     * safe.bool(null, true); // true
     * safe.bool(undefined, true); // true
     * @param {boolean} input
     * @param {boolean} [fallback=false]
     * @returns {boolean}
     */
    const bool: (input: boolean, fallback?: boolean) => boolean;
    /**<!-- DOCS: safe.func ### @ -->
     * func
     *
     * - `safe.func<T>`
     *
     * Process a function value, ensuring that it is safe to use.
     *
     * ```typescript
     * safe.func((p: number) => 123); // (p: number) => 123
     * safe.func(true); // (() => {})
     * safe.func(false); // (() => {})
     * safe.func(123); // (() => {})
     * safe.func('foobar'); // (() => {})
     * safe.func({foo: 'bar'}); // (() => {})
     * safe.func([1, 2, 3]); // (() => {})
     * safe.func(null); // (() => {})
     * safe.func(undefined); // (() => {})
     *
     * safe.func((p: number) => 123, (q: number) => 456); // (p: number) => 123
     * safe.func(true, (q: number) => 456); // (q: number) => 456
     * safe.func(false, (q: number) => 456); // (q: number) => 456
     * safe.func(123, (q: number) => 456); // (q: number) => 456
     * safe.func('foobar', (q: number) => 456); // (q: number) => 456
     * safe.func({foo: 'bar'}, (q: number) => 456); // (q: number) => 456
     * safe.func([1, 2, 3], (q: number) => 456); // (q: number) => 456
     * safe.func(null, (q: number) => 456); // (q: number) => 456
     * safe.func(undefined, (q: number) => 456); // (q: number) => 456
     * ```
     * @param {T} input
     * @param {T} [fallback=(() => {}) as unknown as T]
     * @returns {T}
     */
    const func: <T extends Function>(input: T, fallback?: T) => T;
    /**<!-- DOCS: safe.obj ### @ -->
     * obj
     *
     * - `safe.obj<T>`
     *
     * Process an object value, ensuring that it is safe to use.
     *
     * ```typescript
     * safe.obj({foo: 'bar'}); // {foo: 'bar'}
     * safe.obj([1, 2, 3]); // [1, 2, 3]
     * safe.obj(true); // {}
     * safe.obj(false); // {}
     * safe.obj(123); // {}
     * safe.obj('foobar'); // {}
     * safe.obj(null); // {}
     * safe.obj(undefined); // {}
     *
     * safe.obj({foo: 'bar'}, {baz: 123}); // {foo: 'bar'}
     * safe.obj([1, 2, 3], {baz: 123}); // [1, 2, 3]
     * safe.obj(true, {baz: 123}); // {baz: 123}
     * safe.obj(false, {baz: 123}); // {baz: 123}
     * safe.obj(123, {baz: 123}); // {baz: 123}
     * safe.obj('foobar', {baz: 123}); // {baz: 123}
     * safe.obj(null, {baz: 123}); // {baz: 123}
     * safe.obj(undefined, {baz: 123}); // {baz: 123}
     * ```
     * @param {T} input
     * @param {T} [fallback={} as T]
     * @returns {T}
     */
    const obj: <T extends unknown>(input: T, fallback?: T) => T;
    /**<!-- DOCS: safe.arr ### @ -->
     * arr
     *
     * - `safe.arr<T>`
     *
     * Process an array value, ensuring that it is safe to use.
     *
     * ```typescript
     * safe.arr([1, 2, 3]); // [ 1, 2, 3 ]
     * safe.arr(true); // []
     * safe.arr(false); // []
     * safe.arr(123); // []
     * safe.arr('foobar'); // []
     * safe.arr({foo: 'bar'}); // []
     * safe.arr(null); // []
     * safe.arr(undefined); // []
     *
     * safe.arr([1, 2, 3], [4, 5, 6]); // [ 1, 2, 3 ]
     * safe.arr(true, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arr(false, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arr(123, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arr('foobar', [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arr({foo: 'bar'}, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arr(null, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arr(undefined, [4, 5, 6]); // [ 4, 5, 6 ]
     * ```
     * @param {T[]} input
     * @param {T[]} [fallback=[]]
     * @param {number} [minLength=0]
     * @param {number} [maxLength=Infinity]
     * @returns {T[]}
     */
    const arr: <T extends unknown>(input: T[], fallback?: T[], minLength?: number, maxLength?: number) => T[];
    /**<!-- DOCS: safe.prop ### @ -->
     * prop
     *
     * - `safe.prop`
     *
     * Process a value (string or number) that is expected to be used as a property name, ensuring that it is safe to use.
     *
     * Equivalent to `typeof value === 'number' ? safe.num(value) : safe.str(value, true, '')`
     *
     * ```typescript
     * safe.prop('foo'); // 'foo'
     * safe.prop(''); // ''
     * safe.prop(123); // 123
     * safe.prop(true); // 'true'
     * safe.prop({foo: 'bar'}); // ''
     * safe.prop([]); // ''
     * safe.prop(null); // ''
     * safe.prop(undefined); // ''
     *
     * safe.prop('foo', 'bar'); // 'foo'
     * safe.prop('', 'bar'); // ''
     * safe.prop(123, 'bar'); // 123
     * safe.prop(true, 'bar'); // 'true'
     * safe.prop({foo: 'bar'}, 'bar'); // 'bar'
     * safe.prop([], 'bar'); // 'bar'
     * safe.prop(null, 'bar'); // 'bar'
     * safe.prop(undefined, 'bar'); // 'bar'
     * ```
     * @param {string | number} input
     * @param {string | number} [fallback='']
     * @returns {string | number}
     */
    const prop: (input: string | number, fallback?: string | number) => string | number;
    /**<!-- DOCS: safe.arrOf ### -->
     * arrOf
     *
     * A series of functions for processing arrays of values.
     */
    namespace arrOf {
        /**<!-- DOCS: safe.arrOf.num #### @ -->
         * num
         *
         * - `safe.arrOf.num`
         *
         * Process an array of numbers, ensuring that they are safe to use.
         *
         * ```typescript
         * safe.arrOf.num([1, 2, 3]); // [ 1, 2, 3 ]
         * safe.arrOf.num(['foo', 1, true, null, undefined, [], {}]); // [ 0, 1, 0, 0, 0, 0, 0 ]
         * safe.arrOf.num(true); // []
         * safe.arrOf.num(false); // []
         * safe.arrOf.num(123); // []
         * safe.arrOf.num('foobar'); // []
         * safe.arrOf.num({foo: 'bar'}); // []
         * safe.arrOf.num(null); // []
         * safe.arrOf.num(undefined); // []
         *
         * safe.arrOf.num([1, 2, 3], true, 0, 100, 99, [4, 5, 6]); // [ 1, 2, 3 ]
         * safe.arrOf.num(['foo', 1, true, null, undefined, [], {}], true, 0, 100, 99, [4, 5, 6]); // [ 99, 1, 99, 99, 99, 99, 99 ]
         * safe.arrOf.num(true, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
         * safe.arrOf.num(false, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
         * safe.arrOf.num(123, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
         * safe.arrOf.num('foobar', true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
         * safe.arrOf.num({foo: 'bar'}, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
         * safe.arrOf.num(null, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
         * safe.arrOf.num(undefined, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
         * ```
         * @param {number[]} input
         * @param {boolean} [isInt=false]
         * @param {number} [min]
         * @param {number} [max]
         * @param {number} [fallback]
         * @param {number[]} [fallbackArr=[]]
         * @param {number} [arrMinLength=0]
         * @param {number} [arrMaxLength=Infinity]
         * @returns {number[]}
         */
        const num: (input: number[], isInt?: boolean, min?: number, max?: number, fallback?: number, fallbackArr?: number[], arrMinLength?: number, arrMaxLength?: number) => number[];
        /**<!-- DOCS: safe.arrOf.str #### @ -->
         * str
         *
         * - `safe.arrOf.str`
         *
         * Process an array of strings, ensuring that they are safe to use.
         *
         * ```typescript
         * safe.arrOf.str(['foo', 'bar', 'baz']); // [ 'foo', 'bar', 'baz' ]
         * safe.arrOf.str(['foo', 1, true, null, undefined, [], {}]); // [ 'foo', '', '', '', '', '', '' ]
         * safe.arrOf.str(true); // []
         * safe.arrOf.str(false); // []
         * safe.arrOf.str(123); // []
         * safe.arrOf.str('foobar'); // []
         * safe.arrOf.str({foo: 'bar'}); // []
         * safe.arrOf.str(null); // []
         * safe.arrOf.str(undefined); // []
         *
         * safe.arrOf.str(['foo', 'bar', 'baz'], true, 'LOREM', ['IPSUM']); // [ 'foo', 'bar', 'baz' ]
         * safe.arrOf.str(['foo', 1, true, null, undefined, [], {}], true, 'LOREM', ['IPSUM']); // [ 'foo', '1', 'true', 'LOREM', 'LOREM', 'LOREM', 'LOREM' ]
         * safe.arrOf.str(true, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.str(false, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.str(123, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.str('foobar', true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.str({foo: 'bar'}, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.str(null, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.str(undefined, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
         * ```
         * @param {string[]} input
         * @param {boolean} [allowStringify=false]
         * @param {string} [fallback]
         * @param {string[]} [fallbackArr=[]]
         * @param {number} [arrMinLength=0]
         * @param {number} [arrMaxLength=Infinity]
         * @returns {string[]}
         */
        const str: (input: string[], allowStringify?: boolean, fallback?: string, fallbackArr?: string[], arrMinLength?: number, arrMaxLength?: number) => string[];
        /**<!-- DOCS: safe.arrOf.bool #### @ -->
         * bool
         *
         * - `safe.arrOf.bool`
         *
         * Process an array of booleans, ensuring that they are safe to use.
         *
         * ```typescript
         * safe.arrOf.bool([false, true, false]); // [ false, true, false ]
         * safe.arrOf.bool(['foo', 123, true, null, undefined, [], {}]); // [ false, false, true, false, false, false, false ]
         * safe.arrOf.bool(true); // []
         * safe.arrOf.bool(false); // []
         * safe.arrOf.bool(123); // []
         * safe.arrOf.bool('foobar'); // []
         * safe.arrOf.bool({foo: 'bar'}); // []
         * safe.arrOf.bool(null); // []
         * safe.arrOf.bool(undefined); // []
         *
         * safe.arrOf.bool([false, true, false], true, [true, true]); // [ false, true, false ]
         * safe.arrOf.bool(['foo', 123, true, null, undefined, [], {}], true, [true, true]); // [ true, true, true, true, true, true, true ]
         * safe.arrOf.bool(true, true, [true, true]); // [ true, true ]
         * safe.arrOf.bool(false, true, [true, true]); // [ true, true ]
         * safe.arrOf.bool(123, true, [true, true]); // [ true, true ]
         * safe.arrOf.bool('foobar', true, [true, true]); // [ true, true ]
         * safe.arrOf.bool({foo: 'bar'}, true, [true, true]); // [ true, true ]
         * safe.arrOf.bool(null, true, [true, true]); // [ true, true ]
         * safe.arrOf.bool(undefined, true, [true, true]); // [ true, true ]
         * ```
         * @param {boolean[]} input
         * @param {boolean} [fallback]
         * @param {boolean[]} [fallbackArr=[]]
         * @param {number} [arrMinLength=0]
         * @param {number} [arrMaxLength=Infinity]
         * @returns {boolean[]}
         */
        const bool: (input: boolean[], fallback?: boolean, fallbackArr?: boolean[], arrMinLength?: number, arrMaxLength?: number) => boolean[];
        /**<!-- DOCS: safe.arrOf.func #### @ -->
         * func
         *
         * - `safe.arrOf.func<T>`
         *
         * Process an array of functions, ensuring that they are safe to use.
         *
         * ```typescript
         * safe.arrOf.func([(p) => 1]); // [(p) => 1]
         * safe.arrOf.func(['foo', 1, true, null, undefined, [], {}]); // [() => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}]
         * safe.arrOf.func(true); // []
         * safe.arrOf.func(false); // []
         * safe.arrOf.func(123); // []
         * safe.arrOf.func('foobar'); // []
         * safe.arrOf.func({foo: 'bar'}); // []
         * safe.arrOf.func(null); // []
         * safe.arrOf.func(undefined); // []
         *
         * safe.arrOf.func([(p) => 1], (q) => 2, [(r) => 3]); // [(p) => 1]
         * safe.arrOf.func(['foo', 1, true, null, undefined, [], {}], (q) => 2, [(r) => 3]); // [(q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2]
         * safe.arrOf.func(true, (q) => 2, [(r) => 3]); //  [(r) => 3]
         * safe.arrOf.func(false, (q) => 2, [(r) => 3]); //  [(r) => 3]
         * safe.arrOf.func(123, (q) => 2, [(r) => 3]); //  [(r) => 3]
         * safe.arrOf.func('foobar', (q) => 2, [(r) => 3]); //  [(r) => 3]
         * safe.arrOf.func({foo: 'bar'}, (q) => 2, [(r) => 3]); //  [(r) => 3]
         * safe.arrOf.func(null, (q) => 2, [(r) => 3]); //  [(r) => 3]
         * safe.arrOf.func(undefined, (q) => 2, [(r) => 3]); //  [(r) => 3]
         * ```
         * @param {T[]} input
         * @param {T} [fallback]
         * @param {T[]} [fallbackArr=[]]
         * @param {number} [arrMinLength=0]
         * @param {number} [arrMaxLength=Infinity]
         * @returns {T[]}
         */
        const func: <T extends Function>(input: T[], fallback?: T, fallbackArr?: T[], arrMinLength?: number, arrMaxLength?: number) => T[];
        /**<!-- DOCS: safe.arrOf.obj #### @ -->
         * obj
         *
         * - `safe.arrOf.obj<T>`
         *
         * Process an array of objects, ensuring that they are safe to use.
         *
         * ```typescript
         * safe.arrOf.obj([{foo: 1}, {bar: 2}]); // [ { foo: 1 }, { bar: 2 } ]
         * safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}]); // [ {}, {}, {}, {}, {}, [], {} ]
         * safe.arrOf.obj(true); // []
         * safe.arrOf.obj(false); // []
         * safe.arrOf.obj(123); // []
         * safe.arrOf.obj('foobar'); // []
         * safe.arrOf.obj({foo: 'bar'}); // []
         * safe.arrOf.obj(null); // []
         * safe.arrOf.obj(undefined); // []
         *
         * safe.arrOf.obj([{foo: 1}, {bar: 2}], {l: 3}, [{i: 4}]); // [ { foo: 1 }, { bar: 2 } ]
         * safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}], {l: 3}, [{i: 4}]); // [ { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, [], { } ]
         * safe.arrOf.obj(true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
         * safe.arrOf.obj(false, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
         * safe.arrOf.obj(123, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
         * safe.arrOf.obj('foobar', {l: 3}, [{i: 4}]); // [ { i: 4 } ]
         * safe.arrOf.obj({foo: 'bar'}, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
         * safe.arrOf.obj(null, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
         * safe.arrOf.obj(undefined, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
         * ```
         * @param {T[]} input
         * @param {T} [fallback]
         * @param {T[]} [fallbackArr=[]]
         * @param {number} [arrMinLength=0]
         * @param {number} [arrMaxLength=Infinity]
         * @returns {T[]}
         */
        const obj: <T extends unknown>(input: T[], fallback?: T, fallbackArr?: T[], arrMinLength?: number, arrMaxLength?: number) => T[];
        /**<!-- DOCS: safe.arrOf.arr #### @ -->
         * arr
         *
         * - `safe.arrOf.arr<T>`
         *
         * Process an array of arrays, ensuring that they are safe to use.
         *
         * ```typescript
         * safe.arrOf.arr([['foo'], ['bar']]); // [ [ 'foo' ], [ 'bar' ] ]
         * safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}]); // [ [], [], [], [], [], [], [] ]
         * safe.arrOf.arr(true); // []
         * safe.arrOf.arr(false); // []
         * safe.arrOf.arr(123); // []
         * safe.arrOf.arr('foobar'); // []
         * safe.arrOf.arr({foo: 'bar'}); // []
         * safe.arrOf.arr(null); // []
         * safe.arrOf.arr(undefined); // []
         *
         * safe.arrOf.arr([['foo'], ['bar']], ['baz'], [['IPSUM']]); // [ [ 'foo' ], [ 'bar' ] ]
         * safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}], ['baz'], [['IPSUM']]); // [ [ 'baz' ], [ 'baz' ], [ 'baz' ], [ 'baz' ], [ 'baz' ], [], [ 'baz' ] ]
         * safe.arrOf.arr(true, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
         * safe.arrOf.arr(false, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
         * safe.arrOf.arr(123, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
         * safe.arrOf.arr('foobar', ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
         * safe.arrOf.arr({foo: 'bar'}, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
         * safe.arrOf.arr(null, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
         * safe.arrOf.arr(undefined, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
         * ```
         * @param {T[][]} input
         * @param {T[]} [fallback]
         * @param {T[][]} [fallbackArr=[]]
         * @param {number} [arrMinLength=0]
         * @param {number} [arrMaxLength=Infinity]
         * @returns {T[][]}
         */
        const arr: <T extends unknown>(input: T[][], fallback?: T[], fallbackArr?: T[][], arrMinLength?: number, arrMaxLength?: number) => T[][];
        /**<!-- DOCS: safe.arrOf.prop #### @ -->
         * prop
         *
         * - `safe.arrOf.prop`
         *
         * Process an array of values that can be used as properties (string or number), ensuring that they are safe to use.
         *
         * ```typescript
         * safe.arrOf.prop([['foo'], ['bar']]); // [ '', '' ]
         * safe.arrOf.prop(['foo', 1, true, null, undefined, [], {}]); // [ 'foo', 1, 'true', '', '', '', '' ]
         * safe.arrOf.prop(true); // []
         * safe.arrOf.prop(false); // []
         * safe.arrOf.prop(123); // []
         * safe.arrOf.prop('foobar'); // []
         * safe.arrOf.prop({foo: 'bar'}); // []
         * safe.arrOf.prop(null); // []
         * safe.arrOf.prop(undefined); // []
         *
         * safe.arrOf.prop([['foo'], ['bar']], ['baz'], ['IPSUM']); // [ [ 'baz' ], [ 'baz' ] ]
         * safe.arrOf.prop(['foo', 1, true, null, undefined, [], {}], ['baz'], ['IPSUM']); // [ 'foo', 1, 'true', [ 'baz' ], [ 'baz' ], [ 'baz' ],[ 'baz' ] ]
         * safe.arrOf.prop(true, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.prop(false, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.prop(123, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.prop('foobar', ['baz'], ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.prop({foo: 'bar'}, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.prop(null, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
         * safe.arrOf.prop(undefined, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
         * ```
         * @param {(string | number)[]} input
         * @param {string | number} [fallback]
         * @param {(string | number)[]} [fallbackArr=[]]
         * @param {number} [arrMinLength=0]
         * @param {number} [arrMaxLength=Infinity]
         * @returns {(string | number)[]}
         */
        const prop: (input: (string | number)[], fallback?: string | number, fallbackArr?: (string | number)[], arrMinLength?: number, arrMaxLength?: number) => (string | number)[];
    }
}

export { ArrayTools, CENTURY, ClxType, ColourTools, CustomEntryDict, DAY, DECADE, DeferredPromise, ErrorTools, HOUR, ITimer, KeysOnly, MILLENNIUM, MILLISECOND, MINUTE, MONTH, MathsTools, Numbered, ObjOfType, ObjectTools, OfType, Partial$1 as Partial, ProgressBar, ProgressBarOptions, PromiseTools, QueueManager, RemapOf, SECOND, StringTools, TimeTools, WEEK, YEAR, all, allLimit, allLimitObj, allObj, centuries, century, clx, create, day, days, decade, decades, each, eachLimit, entries, everys, ff, filled, filters, fn, getDeferred, getProgressBar, getTimer, group, groupObj, hour, hours, interval, map, mapLimit, maps, millennium, millenniums, milliseconds, minute, minutes, month, months, ms, partition, printLn, progressBar, queue, randomise, range, reduces, repeat, retry, retryOr, reverse, roll, safe, second, seconds, sortByMapped, sortNumberedText, sorts, stopInterval, superscript, symbols, timer, times, tryOr, wait, waitEvery, waitFor, waitUntil, waiters, week, weeks, year, years, zip, zipMax };
