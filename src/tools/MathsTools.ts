import { zip } from './ArrayTools';

//<!-- DOCS: 130 -->
/**<!-- DOCS: ## -->
 * MathsTools
 *
 * A collection of mathematical functions.
 *
 * > Note: The field is 'Mathematics', and so it is 'MathsTools' not ~'MathTools'~
 */

/**<!-- DOCS: ### -->
 * fixFloat
 *
 * - `MathsTools.fixFloat`
 *
 * Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers
 *
 * Can also be used to round numbers to a given precision
 *
 * > Note: It's not a great name, but it's what I've always called it, so I'm sticking with it. May create an alias
 *
 * ```typescript
 * 0.1 + 0.2 // 0.30000000000000004
 * MathsTools.fixFloat(0.1 + 0.2) // 0.3
 * ```
 */
export const fixFloat = (num: number, precision = 6): number => Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);

/**<!-- DOCS: ### -->
 * addAll
 *
 * - `MathsTools.addAll`
 *
 * Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max
 *
 * ```typescript
 * MathsTools.addAll(1, 2, 3, 4, 5); // 15
 * ```
 */
export const addAll = (...args: number[]): number => args.reduce((acc, num) => acc + num, 0);

/**<!-- DOCS: ### -->
 * round
 */
/**<!-- DOCS: #### -->
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
 */
export const floorTo = (to: number, value: number) => fixFloat(Math.floor(value / to) * to);

/**<!-- DOCS: #### -->
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
 */
export const roundTo = (to: number, value: number) => fixFloat(Math.round(value / to) * to);

/**<!-- DOCS: #### -->
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
 */
export const ceilTo = (to: number, value: number) => fixFloat(Math.ceil(value / to) * to);

export const round = {
  floorTo,
  roundTo,
  ceilTo,
  to: roundTo
};

/**<!-- DOCS: ### -->
 * lerp
 *
 * - `MathsTools.lerp`
 *
 * Linearly interpolates between two values.
 *
 * ```typescript
 * MathsTools.lerp(0.5, 0, 10); // 5
 * ```
 */
export const lerp = (progress: number, fromVal: number, toVal: number): number => fromVal + (toVal - fromVal) * progress;

/**<!-- DOCS: ### -->
 * lerpArray
 *
 * - `MathsTools.lerpArray`
 *
 * Linearly interpolates between the values of 2 arrays.
 *
 * ```typescript
 * MathsTools.lerpArray(0.5, [0, 0, 0], [10, 100, 1000]) // [5, 50, 500]
 * ```
 */
export const lerpArray = (progress: number, fromArr: number[], toArr: number[]): number[] =>
  zip(fromArr, toArr).map(([fromVal, toVal]) => lerp(progress, fromVal, toVal));

/**<!-- DOCS: ### -->
 * lerpObj
 *
 * - `MathsTools.lerpObj`
 *
 * Linearly interpolates between the values of 2 arrays.
 *
 * ```typescript
 * MathsTools.lerpObj(0.5, {'ARS': 0, 'CHE': 0, 'FUL': 0}, {'ARS': 100, 'CHE': 10, 'FUL': 20}) // {'ARS': 50, 'CHE': 5, 'FUL': 10}
 * ```
 */
export const lerpObj = <T extends object>(progress: number, fromObj: T, toObj: T): T => {
  const entries = Object.entries(fromObj);
  const lerped = entries.map(([key, fromVal]) => (typeof fromVal === 'number' ? [key, lerp(progress, fromVal, toObj[key])] : [key, fromVal]));
  return Object.fromEntries(lerped) as T;
};

/**<!-- DOCS: ### -->
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
 */
export const clamp = (value: number, min: number, max: number) => Math.max(Math.min(min, max), Math.min(value, Math.max(min, max)));
