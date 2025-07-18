import { fn } from './fn';
import { MathsTools } from './MathsTools';
import { safe } from './safe';

//<!-- DOCS: 100 -->
/**<!-- DOCS: ArrayTools ##! -->
 * ArrayTools
 *
 * A collection of useful array functions.
 */
export namespace ArrayTools {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: ArrayTools.create ### @ -->
   * create
   *
   * - `create`
   * - `ArrayTools.create`
   *
   * Create an array of the given length, where each value is the given value
   *
   * ```typescript
   * ArrayTools.create(3); // [ 1, 1, 1 ]
   * ArrayTools.create(3, 'a'); // [ 'a', 'a', 'a' ]
   * ArrayTools.create(3, 1); // [ 1, 1, 1 ]
   * ```
   * @param {number} [length=1] - Length of the array to create
   * @param {T} [value=1 as unknown as T] - Value to fill the array with
   * @returns {T[]} - Array of the given length, full of the given value
   */
  export const create = <T = number>(length: number = 1, value: T = 1 as unknown as T): T[] => {
    const args = {
      length: safe.num(length, true, 0),
      value: value
    };

    return new Array(args.length).fill(args.value);
  };

  /**<!-- DOCS: ArrayTools.filled ### @ -->
   * filled
   *
   * - `filled`
   * - `ArrayTools.filled`
   *
   * Create an array of the given length, where each value is the given value
   *
   * ```typescript
   * ArrayTools.filled(3); // [ 1, 1, 1 ]
   * ArrayTools.filled(3, 'a'); // [ 'a', 'a', 'a' ]
   * ArrayTools.filled(3, 1); // [ 1, 1, 1 ]
   * ```
   * @param {number} [length=1] - Length of the array to create
   * @param {T} value - Value to fill the array with
   * @returns {T[]} - Array of the given length, full of the given value
   */
  export const filled = <T>(length: number = 1, value: T): T[] => {
    const args = {
      length: safe.num(length, true, 0),
      value: value
    };

    return new Array(args.length).fill(args.value);
  };

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
   * @param {number} [length=1] - Length of the array to create
   * @param {number} [multiplier=1] - Multiplier to apply to each value
   * @param {number} [offset=0] - Offset to apply to each value (after the multiplier)
   * @returns {number[]} - Array of the given length, where each value is equal to it's index
   */
  export const range = (length: number = 1, multiplier: number = 1, offset: number = 0): number[] => {
    const args = {
      length: safe.num(length, true, 0),
      multiplier: safe.num(multiplier),
      offset: safe.num(offset)
    };
    return create(length, 1).map((v, i) => MathsTools.fixFloat(i * args.multiplier) + args.offset);
  };

  type UnwrapArray<T> = T extends Array<infer U> ? U : T;
  type ZippedArrays<T extends [...any[]]> = T extends [infer Head, ...infer Tail] ? [UnwrapArray<Head>, ...ZippedArrays<Tail>] : [];

  const zipFn = <T extends [...any[]]>(length: number, arrs: T): ZippedArrays<T>[] =>
    range(length).map((i) => arrs.map((arr) => (arr || [])[i])) as ZippedArrays<T>[];

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
   * @param {...T} [arrs] - Arrays to zip together
   * @returns {ZippedArrays<T>[]} - Array of 'tuples' for each value at the corresponding indexes
   */
  export const zip = <T extends [...any[]]>(...arrs: T): ZippedArrays<T>[] => {
    const input = safe.arrOf.arr(arrs) as T;
    return zipFn(Math.min(...(input.length ? input : [[]]).map((arr) => (arr || []).length)), input);
  };

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
   * @param {...T} [arrs] - Arrays to zip together
   * @returns {ZippedArrays<T>[]} - Array of 'tuples' for each value at the corresponding indexes
   */
  export const zipMax = <T extends [...any[]]>(...arrs: T): ZippedArrays<T>[] => {
    const input = safe.arr(arrs).map((arr) => safe.arr(arr)) as T;
    return zipFn(Math.max(...(input.length ? input : [[]]).map((arr) => (arr || []).length)), input);
  };

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
   * @param {T[]} arr - Array to sort
   * @param {(value: T, index: number, array: T[]) => M} mapFn - Function to map the values to
   * @param {(a: M, b: M) => number} [sortFn=fn.asc] - Function to sort the mapped values by
   * @returns {T[]} - Sorted array (non-mutated)
   */
  export const sortByMapped = <T = string, M = number>(
    arr: T[],
    mapFn: (value: T, index: number, array: T[]) => M,
    sortFn: (a: M, b: M) => number = fn.asc
  ): T[] => {
    const args = {
      arr: safe.arr(arr),
      mapFn: safe.func(mapFn, fn.noact as () => M),
      sortFn: safe.func(sortFn, fn.asc)
    };
    return zip(args.arr, args.arr.map(args.mapFn))
      .sort((a, b) => args.sortFn(a[1] as M, b[1] as M))
      .map(([v]) => v);
  };

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
   * @param {T[]} arr - Array to randomise
   * @returns {T[]} - Randomised array (non-mutated)
   */
  export const randomise = <T = string>(arr: T[]): T[] => {
    const input = safe.arr(arr);
    return sortByMapped(input, () => Math.random());
  };

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
   * arr1            // [3, 2, 1] - mutated
   *
   * const arr2 = [1, 2, 3];
   * arr2            // [1, 2, 3]
   * ArrayTools.reverse(arr2);  // [3, 2, 1]
   * arr2            // [1, 2, 3] - not mutated
   * ```
   * @param {T[]} arr - Array to reverse
   * @returns {T[]} - Reversed array (non-mutated)
   */
  export const reverse = <T = string>(arr: T[]): T[] => {
    const input = safe.arr(arr);
    return [...input].reverse();
  };

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
   * for (let [index, value] of ArrayTools.entries(arr)) {
   *  console.log(index); // 0, 1, 2
   *  console.log(value); // 'a', 'b', 'c'
   * }
   * ```
   * @param {T[]} arr - Array to get entries from
   * @returns {[number, T][]} - Array of 'tuples' of index/value pairs
   */
  export const entries = <T = string>(arr: T[]): [number, T][] => {
    const input = safe.arr(arr);
    return zip(range(input.length), input) as any;
  };

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
   * @param {number} maxLength - Maximum length of the array
   * @param {...T} [items] - Items to repeat
   * @returns {T[]} - Array with the given items repeated
   */
  export const repeat = <T = string>(maxLength: number, ...items: T[]): T[] => {
    const args = {
      maxLength: safe.num(maxLength, true, 0),
      items: safe.arr(items)
    };
    const simple = create(args.maxLength, args.items[0]);
    return args.items.length === 1 ? simple : simple.map((v, i) => args.items[i % args.items.length]);
  };

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
   * @param {number} distance - Distance to roll the array by
   * @param {T[]} arr - Array to roll
   * @returns {T[]} - Rolled array (non-mutated)
   */
  export const roll = <T>(distance: number, arr: T[]): T[] => {
    const args = {
      distance: safe.num(distance, true),
      arr: safe.arr(arr)
    };
    return [...args.arr.slice(args.distance % args.arr.length), ...args.arr.slice(0, args.distance % args.arr.length)];
  };

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
   * @param {string[]} texts - Texts to sort
   * @param {boolean} [ignoreCase=true] - Whether to ignore case when sorting
   * @returns {string[]} - Sorted array (non-mutated)
   */
  export const sortNumberedText = (texts: string[], ignoreCase: boolean = true): string[] => {
    const args = {
      texts: safe.arrOf.str(texts),
      ignoreCase: safe.bool(ignoreCase)
    };
    return sortByMapped(args.texts, utils.partitionNums(args.ignoreCase), (a, b) => {
      for (let i in a) {
        const result = fn.asc(a[i], b[i]);
        if (result !== 0) return result;
      }
      return 0;
    });
  };

  /**<!-- DOCS: ArrayTools.partition ### @ -->
   * partition
   *
   * - `partition`
   * - `ArrayTools.partition`
   *
   * Breaks an array into smaller arrays of a given size
   *
   * ```typescript
   * ArrayTools.partition([1, 2, 3, 4], 3); // [ [ 1, 2, 3 ], [ 4 ] ]
   *
   * ArrayTools.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
   * ArrayTools.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10 ] ]
   * ArrayTools.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5); // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]
   * ```
   * @param {T[]} array - Array to partition
   * @param {number} [partitionSize=Math.ceil(array.length / 2)] - Size of each partition
   * @returns {T[][]} - Array of arrays, each containing a partition of the original array
   */
  export const partition = <T>(array: T[], partitionSize: number = Math.ceil(array.length / 2)): T[][] => {
    const args = {
      array: safe.arr(array),
      partitionSize: safe.num(partitionSize, true, 1)
    };
    const numParts = Math.ceil(args.array.length / args.partitionSize);
    const result: T[][] = [];
    for (let i = 0; i < numParts; i++) {
      result.push(args.array.slice(i * args.partitionSize, (i + 1) * args.partitionSize));
    }
    return result;
  };

  /**<!-- DOCS: ArrayTools.partitionEvenly ### @ -->
   * partitionEvenly
   *
   * - `partitionEvenly`
   * - `ArrayTools.partitionEvenly`
   *
   * Breaks an array into smaller arrays of a given size, but tries to keep the sizes as even as possible
   *
   * ```typescript
   * ArrayTools.partitionEvenly([1, 2, 3, 4], 3); // [ [ 1, 2 ], [ 3, 4 ] ]
   *
   * ArrayTools.partitionEvenly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
   * ArrayTools.partitionEvenly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7 ], [ 8, 9, 10 ] ]
   * ArrayTools.partitionEvenly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5); // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]
   * ```
   * @param {T[]} array - Array to partition
   * @param {number} [maxPartitionSize=Math.ceil(array.length / 2)] - Maximum size of each partition
   * @returns {T[][]} - Array of arrays, each containing a partition of the original array
   */
  export const partitionEvenly = <T>(array: T[], maxPartitionSize: number = Math.ceil(array.length / 2)): T[][] => {
    const args = {
      array: safe.arr(array),
      maxPartitionSize: safe.num(maxPartitionSize, true, 1)
    };
    const numGroups = Math.ceil(args.array.length / args.maxPartitionSize);
    const baseSize = Math.floor(args.array.length / numGroups);
    const remainder = args.array.length % numGroups;
    const result: T[][] = [];
    let start = 0;
    for (let i = 0; i < numGroups; i++) {
      const size = baseSize + (i < remainder ? 1 : 0);
      result.push(array.slice(start, start + size));
      start += size;
    }
    return result;
  };

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
   * @param {T[]} array - Array to group
   * @param {(item: T, index: number, arr: T[]) => string | number} mapFn - Map function to get the group key for each item
   * @returns {{ [id: string]: T[]; [id: number]: T[]; }} - Object with the group keys as keys, and the items as values
   */
  export const groupObj = <T>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number): { [id: string | number]: T[] } => {
    const args = {
      array: safe.arr(array),
      mapFn: safe.func(mapFn, fn.noact as () => string | number)
    };

    const result: { [id: string | number]: T[] } = {};

    args.array.forEach((item, index) => {
      const key = args.mapFn(item, index, args.array);

      if (key === undefined) return;

      if (!result[key]) result[key] = [];
      result[key].push(item);
    });

    return result;
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
   * @param {T[]} array - Array to group
   * @param {(item: T, index: number, arr: T[]) => string | number} mapFn - Map function to get the group key for each item
   * @returns {T[][]} - Array of arrays, each containing a group of the original array
   */
  export const group = <T>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number): T[][] => {
    const args = {
      array: safe.arr(array),
      mapFn: safe.func(mapFn, fn.noact as () => string | number)
    };
    const obj = groupObj(args.array, args.mapFn);
    return Object.values(obj);
  };

  /**<!-- DOCS: ArrayTools.findAndRemove ### @ -->
   * findAndRemove
   *
   * - `ArrayTools.findAndRemove`
   *
   * Find the first item in an array that matches a given predicate, and remove it from the array
   *
   * > **Note:** This function mutates the provided array
   *
   * ```typescript
   * const arr = [1, 2, 3, 4, 5];
   * ArrayTools.findAndRemove(arr, (item) => item === 3); // 3
   * arr; // [1, 2, 4, 5]
   * ```
   * @param {T[]} array - Array to mutate
   * @param {(item: T, index: number, arr: T[]) => any} predicate - Function that returns true/truthy if the item should be removed
   * @param {...T} [insertItems] - Items to insert in place of the removed item
   * @returns {T} - The removed item (undefined if not found)
   */
  export const findAndRemove = <T>(array: T[], predicate: (item: T, index: number, arr: T[]) => any, ...insertItems: T[]): T | undefined => {
    const args = {
      array: safe.arr(array),
      predicate: safe.func(predicate, () => false),
      insertItems: safe.arr(insertItems)
    };
    const index = args.array.findIndex(args.predicate);
    if (index === -1) return undefined;
    return args.array.splice(index, 1, ...args.insertItems)[0];
  };

  /**<!-- DOCS: ArrayTools.findLastAndRemove ### @ -->
   * findLastAndRemove
   *
   * - `ArrayTools.findLastAndRemove`
   *
   * Find the last item in an array that matches a given predicate, and remove it from the array
   *
   * > **Note:** This function mutates the provided array
   *
   * ```typescript
   * const arr = [1, 2, 3, 4, 5];
   * ArrayTools.findLastAndRemove(arr, (item) => item === 3); // 3
   * arr; // [1, 2, 4, 5]
   * ```
   * @param {T[]} array - Array to mutate
   * @param {(item: T, index: number, arr: T[]) => any} predicate - Function that returns true/truthy if the item should be removed
   * @param {...T} [insertItems] - Items to insert in place of the removed item
   * @returns {T} - The removed item (undefined if not found)
   */
  export const findLastAndRemove = <T>(array: T[], predicate: (item: T, index: number, arr: T[]) => any, ...insertItems: T[]): T | undefined => {
    const args = {
      array: safe.arr(array),
      predicate: safe.func(predicate, () => false),
      insertItems: safe.arr(insertItems)
    };
    const reverseIndex = ArrayTools.reverse(args.array).findIndex(args.predicate);
    const index = reverseIndex === -1 ? -1 : args.array.length - 1 - reverseIndex;
    if (index === -1) return undefined;
    return args.array.splice(index, 1, ...args.insertItems)[0];
  };

  /**<!-- DOCS: ArrayTools.filterAndRemove ### @ -->
   * filterAndRemove
   *
   * - `ArrayTools.filterAndRemove`
   *
   * Find the items in an array that matches a given predicate, and remove them from the array
   *
   * > **Note:** This function mutates the provided array
   *
   * ```typescript
   * const arr = [1, 2, 3, 4, 5];
   * ArrayTools.filterAndRemove(arr, (item) => item === 3); // [3]
   * arr; // [1, 2, 4, 5]
   * ```
   * @param {T[]} array - Array to mutate
   * @param {(item: T, index: number, arr: T[]) => any} predicate - Function that returns true/truthy if the item should be removed
   * @returns {T[]} - The removed items
   */
  export const filterAndRemove = <T>(array: T[], predicate: (item: T, index: number, arr: T[]) => any): T[] => {
    const args = {
      array: safe.arr(array),
      predicate: safe.func(predicate, () => false)
    };
    const result = args.array.filter(args.predicate);
    result.forEach((item) => {
      findAndRemove(args.array, (i) => i === item);
    });
    return result;
  };

  /**<!-- DOCS: ArrayTools.utils ### @ -->
   * utils
   *
   * - `ArrayTools.utils`
   *
   * Small helper functions that may help, but aren't important enough to be in ArrayTools directly
   */
  export namespace utils {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    /**<!-- DOCS: ArrayTools.utils.isNumString #### @ -->
     * isNumString
     *
     * - `ArrayTools.utils.isNumString`
     *
     * Returns true if the given string is a number
     *
     * ```typescript
     * ArrayTools.utils.isNumString('123'); // true
     * ArrayTools.utils.isNumString('123a'); // false
     * ```
     * @param {string} text - Text to check if it is a number
     * @returns {boolean} - True if the given string is a number
     */
    export const isNumString = (text: string) => {
      const input = safe.str(text);
      return Boolean(input.match(/^[0-9-.]+$/));
    };

    /**<!-- DOCS: ArrayTools.utils.partitionNums #### @ -->
     * partitionNums
     *
     * - `ArrayTools.utils.partitionNums`
     *
     * Splits a string into an array of strings and numbers
     *
     * ```typescript
     * ArrayTools.utils.partitionNums(true)('123a'); // [ '123', 'a' ]
     * ArrayTools.utils.partitionNums(false)('123a'); // [ '123', 'a' ]
     * ```
     * @param {boolean} ignoreCase - Whether to ignore case
     * @returns {(name: string) => (string | number)[]} - Function to split a string into array of strings & numbers
     */
    export const partitionNums = (ignoreCase: boolean) => {
      const ignoreCaseSafe = safe.bool(ignoreCase);
      return (name: string): (string | number)[] => {
        const args = {
          ignoreCase: ignoreCaseSafe,
          name: safe.str(name, true)
        };
        const baseStr = args.ignoreCase ? args.name.toLowerCase() : args.name;
        return baseStr
          .split(/([0-9]+)/)
          .map((s) => (isNumString(s) ? Number(s) : s))
          .filter((s) => s !== '');
      };
    };
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: ArrayTools.create  --> */
export const create = ArrayTools.create;
/** <!-- DOCS-ALIAS: ArrayTools.filled  --> */
export const filled = ArrayTools.filled;
/** <!-- DOCS-ALIAS: ArrayTools.range  --> */
export const range = ArrayTools.range;
/** <!-- DOCS-ALIAS: ArrayTools.zip  --> */
export const zip = ArrayTools.zip;
/** <!-- DOCS-ALIAS: ArrayTools.zipMax  --> */
export const zipMax = ArrayTools.zipMax;
/** <!-- DOCS-ALIAS: ArrayTools.sortByMapped  --> */
export const sortByMapped = ArrayTools.sortByMapped;
/** <!-- DOCS-ALIAS: ArrayTools.randomise  --> */
export const randomise = ArrayTools.randomise;
/** <!-- DOCS-ALIAS: ArrayTools.reverse  --> */
export const reverse = ArrayTools.reverse;
/** <!-- DOCS-ALIAS: ArrayTools.entries  --> */
export const entries = ArrayTools.entries;
/** <!-- DOCS-ALIAS: ArrayTools.repeat  --> */
export const repeat = ArrayTools.repeat;
/** <!-- DOCS-ALIAS: ArrayTools.roll  --> */
export const roll = ArrayTools.roll;
/** <!-- DOCS-ALIAS: ArrayTools.sortNumberedText  --> */
export const sortNumberedText = ArrayTools.sortNumberedText;
/** <!-- DOCS-ALIAS: ArrayTools.partition  --> */
export const partition = ArrayTools.partition;
/** <!-- DOCS-ALIAS: ArrayTools.partitionEvenly  --> */
export const partitionEvenly = ArrayTools.partitionEvenly;
/** <!-- DOCS-ALIAS: ArrayTools.groupObj  --> */
export const groupObj = ArrayTools.groupObj;
/** <!-- DOCS-ALIAS: ArrayTools.group  --> */
export const group = ArrayTools.group;
