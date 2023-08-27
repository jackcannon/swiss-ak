import { ArrayTools } from './ArrayTools';

//<!-- DOCS: 130 -->
/**<!-- DOCS: MathsTools ##! -->
 * MathsTools
 *
 * A collection of mathematical functions.
 *
 * > Note: The field is 'Mathematics', and so it is 'MathsTools' not ~'MathTools'~
 */
export namespace MathsTools {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: MathsTools.fixFloat ### -->
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
  export const fixFloat = (num: number, precision = 6): number => Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);

  /** <!-- DOCS-ALIAS: MathsTools.fixFloat  --> */
  export const ff = fixFloat;

  /**<!-- DOCS: MathsTools.addAll ### -->
   * addAll
   *
   * - `MathsTools.addAll`
   *
   * Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max
   *
   * ```typescript
   * MathsTools.addAll(1, 2, 3, 4, 5); // 15
   * ```
   * @param {...number} [args]
   * @returns {number}
   */
  export const addAll = (...args: number[]): number => args.reduce((acc, num) => acc + num, 0);

  /**<!-- DOCS: MathsTools.round ### -->
   * round
   */
  /**<!-- DOCS: MathsTools.floorTo #### -->
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
  export const floorTo = (to: number, value: number) => fixFloat(Math.floor(value / to) * to);

  /**<!-- DOCS: MathsTools.roundTo #### -->
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
  export const roundTo = (to: number, value: number) => fixFloat(Math.round(value / to) * to);

  /**<!-- DOCS: MathsTools.ceilTo #### -->
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
  export const ceilTo = (to: number, value: number) => fixFloat(Math.ceil(value / to) * to);

  /**
   * round
   *
   * - `MathsTools.round`
   *
   * A collection of rounding functions.
   */
  export namespace round {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    /** <!-- DOCS-ALIAS: MathsTools.floorTo  --> */
    export const floorTo = MathsTools.floorTo;
    /** <!-- DOCS-ALIAS: MathsTools.roundTo  --> */
    export const roundTo = MathsTools.roundTo;
    /** <!-- DOCS-ALIAS: MathsTools.ceilTo  --> */
    export const ceilTo = MathsTools.ceilTo;
    /** <!-- DOCS-ALIAS: MathsTools.roundTo  --> */
    export const to = MathsTools.roundTo;
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

  /**<!-- DOCS: MathsTools.lerp ### -->
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
  export const lerp = (progress: number, fromVal: number, toVal: number): number => fromVal + (toVal - fromVal) * progress;

  /**<!-- DOCS: MathsTools.lerpArray ### -->
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
  export const lerpArray = (progress: number, fromArr: number[], toArr: number[]): number[] =>
    ArrayTools.zip(fromArr, toArr).map(([fromVal, toVal]) => lerp(progress, fromVal, toVal));

  /**<!-- DOCS: MathsTools.lerpObj ### -->
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
  export const lerpObj = <T extends object>(progress: number, fromObj: T, toObj: T): T => {
    const entries = Object.entries(fromObj);
    const lerped = entries.map(([key, fromVal]) => (typeof fromVal === 'number' ? [key, lerp(progress, fromVal, toObj[key])] : [key, fromVal]));
    return Object.fromEntries(lerped) as T;
  };

  /**<!-- DOCS: MathsTools.clamp ### -->
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
  export const clamp = (value: number, min: number, max: number) => Math.max(Math.min(min, max), Math.min(value, Math.max(min, max)));

  /**<!-- DOCS: MathsTools.getOrdinal ### -->
   * getOrdinal
   *
   * - `MathsTools.getOrdinal`
   *
   * Gets the ordinal suffix for a number.
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
  export const getOrdinal = (num: number = 0) => {
    const lastDigit = num % 10;

    if ([11, 12, 13].includes(num)) {
      return 'th';
    }
    if (lastDigit === 1) {
      return 'st';
    }
    if (lastDigit === 2) {
      return 'nd';
    }
    if (lastDigit === 3) {
      return 'rd';
    }
    return 'th';
  };
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: MathsTools.fixFloat  --> */
export const ff = MathsTools.fixFloat;
