import { ArrayTools } from './ArrayTools';
import { safe } from './safe';

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
   * @param {number} num - Number to fix
   * @param {number} [precision=6] - Precision to round to
   * @returns {number}
   */
  export const fixFloat = (num: number, precision: number = 6): number => {
    const args = {
      num: safe.num(num),
      precision: safe.num(precision, true, 0)
    };
    return Math.round(args.num * Math.pow(10, args.precision)) / Math.pow(10, args.precision);
  };

  /** <!-- DOCS-ALIAS: MathsTools.fixFloat  --> */
  export const ff = fixFloat;

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
   * @param {...number} [nums] - Numbers to add
   * @returns {number}
   */
  export const addAll = (...nums: number[]): number => {
    const args = {
      nums: safe.arrOf.num(nums, false, undefined, undefined, 0, [0], 1)
    };
    return args.nums.reduce((acc, num) => acc + num, 0);
  };

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
   * @param {number} to - Target to floor to
   * @param {number} value - Number to floor
   * @returns {number}
   */
  export const floorTo = (to: number, value: number) => {
    const args = {
      to: safe.num(to),
      value: safe.num(value)
    };
    return fixFloat(Math.floor(args.value / args.to) * args.to);
  };

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
   * @param {number} to - Target to round to
   * @param {number} value - Number to round
   * @returns {number}
   */
  export const roundTo = (to: number, value: number) => {
    const args = {
      to: safe.num(to),
      value: safe.num(value)
    };
    return fixFloat(Math.round(args.value / args.to) * args.to);
  };

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
   * @param {number} to - Target to ceil to
   * @param {number} value - Number to ceil
   * @returns {number}
   */
  export const ceilTo = (to: number, value: number) => {
    const args = {
      to: safe.num(to),
      value: safe.num(value)
    };
    return fixFloat(Math.ceil(args.value / args.to) * args.to);
  };

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
   * @param {number} progress - Progress to interpolate (`0`-`1`)
   * @param {number} fromVal - Start value (what the progress is at `0`)
   * @param {number} toVal - End value (what the progress is at `1`)
   * @returns {number}
   */
  export const lerp = (progress: number, fromVal: number, toVal: number): number => {
    const args = {
      progress: safe.num(progress),
      fromVal: safe.num(fromVal),
      toVal: safe.num(toVal)
    };
    return fixFloat(args.fromVal + (args.toVal - args.fromVal) * args.progress);
  };

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
   * @param {number} progress - Progress to interpolate (`0`-`1`)
   * @param {number[]} fromArr - Start values (what the progress is at `0`)
   * @param {number[]} toArr - End values (what the progress is at `1`)
   * @returns {number[]}
   */
  export const lerpArray = (progress: number, fromArr: number[], toArr: number[]): number[] => {
    const args = {
      progress: safe.num(progress),
      fromArr: safe.arrOf.num(fromArr),
      toArr: safe.arrOf.num(toArr)
    };
    return ArrayTools.zip(args.fromArr, args.toArr).map(([fromVal, toVal]) => lerp(args.progress, fromVal, toVal));
  };

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
   * @param {number} progress - Progress to interpolate (`0`-`1`)
   * @param {T} fromObj - Start values (what the progress is at `0`)
   * @param {T} toObj - End values (what the progress is at `1`)
   * @returns {T}
   */
  export const lerpObj = <T extends object>(progress: number, fromObj: T, toObj: T): T => {
    const args = {
      progress: safe.num(progress),
      fromObj: safe.obj(fromObj),
      toObj: safe.obj(toObj)
    };
    const entries = Object.entries(args.fromObj);
    const lerped = entries.map(([key, fromVal]) =>
      typeof fromVal === 'number' ? [key, lerp(args.progress, fromVal, args.toObj[key])] : [key, fromVal]
    );
    return Object.fromEntries(lerped) as T;
  };

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
   * @param {number} value - Value to clamp
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {number}
   */
  export const clamp = (value: number, min: number, max: number) => {
    const args = {
      value: safe.num(value),
      min: safe.num(min),
      max: safe.num(max)
    };
    const realMin = Math.min(args.min, args.max);
    const realMax = Math.max(args.min, args.max);
    return Math.max(realMin, Math.min(args.value, realMax));
  };

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
   * @param {number} [num=0] - Number to get the ordinal for
   * @returns {"th" | "st" | "nd" | "rd"}
   */
  export const getOrdinal = (num: number = 0) => {
    const args = {
      num: safe.num(num)
    };
    const lastDigit = Math.abs(args.num) % 10;
    const isDecimal = args.num % 1 !== 0;

    if (isDecimal) {
      return 'th';
    }

    if ([11, 12, 13].includes(args.num)) {
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
