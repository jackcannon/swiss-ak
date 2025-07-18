import { MathsTools } from './MathsTools';
import { safe } from './safe';

//<!-- DOCS: 30 -->
/**<!-- DOCS: fn ##! -->
 * fn
 *
 * A collection of useful higher-order functions.
 */
export namespace fn {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

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
  export const noop = () => {};

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
   * @param {T} [item] - Item to return
   * @returns {T} - The first argument it receives
   */
  export const noact = <T = any>(item?: T): T => item;

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
   * @param {T} [item] - Item to return from the function
   * @returns {() => T} - Function that returns the first argument
   */
  export const result =
    <T = any>(item?: T) =>
    (): T =>
      item;

  /**<!-- DOCS: fn.resolve ### @ -->
   * resolve
   *
   * - `fn.resolve`
   *
   * Returns an async function that resolves to the first argument
   *
   * Like fn.result, but wrapped in a Promise
   *
   * ```typescript
   * await Promise.all(stuff.map(fn.resolve()));
   * ```
   * @param {T} [item] - Item to resolve
   * @returns {() => Promise<T>} - Function that returns a Promise that resolves to the first argument
   */
  export const resolve =
    <T = any>(item?: T) =>
    (): Promise<T> =>
      Promise.resolve(item);

  /**<!-- DOCS: fn.reject ### @ -->
   * reject
   *
   * - `fn.reject`
   *
   * Returns an async function that rejects with the first argument
   *
   * ```typescript
   * await Promise.all(stuff.map(fn.reject()));
   * ```
   * @param {T} [item] - Item to reject
   * @returns {() => Promise<T>} - Function that returns a Promise that rejects with the first argument
   */
  export const reject =
    <T = any>(item?: T) =>
    (): Promise<T> =>
      Promise.reject(item);

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
   * @param {T} item - Item to check if it exists
   * @returns {boolean} - True if item isn't null or undefined
   */
  export const exists = <T = any>(item: T): boolean => item !== undefined && item !== null;

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
   * @param {T} item - Item to check if it is truthy
   * @returns {boolean} - True if item is truthy
   */
  export const isTruthy = <T = any>(item: T): boolean => Boolean(item);

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
   * @param {T} item - Item to check if it is falsy
   * @returns {boolean} - True if item is falsy
   */
  export const isFalsy = <T = any>(item: T): boolean => !Boolean(item);

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
   * @param {T[] | string} item - Item to check if it is empty
   * @returns {boolean} - True if item's length is 0
   */
  export const isEmpty = <T = any>(item: T[] | string): boolean => Boolean(!item || !item.length);

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
   * @param {T[] | string} item - Item to check if it is not empty
   * @returns {boolean} - True if item's length is 1 or more
   */
  export const isNotEmpty = <T = any>(item: T[] | string): boolean => Boolean(item && item.length);

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
   * @param {T} item - Item to check whether each item of the array is equal to
   * @returns {(other: T) => boolean} - Function to use in Array.filter
   */
  export const isEqual =
    <T = any>(item: T) =>
    (other: T) =>
      Boolean(item === other);

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
   * @param {T} item - Item to check whether each item of the array is not equal to
   * @returns {(other: T) => boolean} - Function to use in Array.filter
   */
  export const isNotEqual =
    <T = any>(item: T) =>
    (other: T) =>
      Boolean(item !== other);

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
   * @param {T} item - Given item in array
   * @param {number} index - Index of the given item
   * @param {T[]} array - Array of items
   * @returns {boolean} - True if the item is the first occurrence in the array
   */
  export const dedupe = <T>(item: T, index: number, array: T[]): boolean => array.indexOf(item) === index;

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
   * @param {(value?: T, index?: number, array?: T[]) => U} mapFn - Function to map the item to a new value (will be used to check for duplicates)
   * @returns {(item: T, index: number, array: T[]) => boolean} - Function to use in Array.filter
   */
  export const dedupeMapped = <T, U>(mapFn: (value?: T, index?: number, array?: T[]) => U) => {
    const args = {
      mapFn: safe.func(mapFn, (v: T) => v as unknown as U)
    };
    let mapped: U[];
    return (item: T, index: number, array: T[]): boolean => {
      if (!mapped) mapped = array.map(args.mapFn);
      return mapped.indexOf(mapped[index]) === index;
    };
  };

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
   * @param {T} item - Item in an array
   * @returns {string} - String of the item
   */
  export const toString = <T = any>(item: T): string => item + '';

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
   * @param {T} item - Item in an array
   * @returns {number} - Number of the item
   */
  export const toNumber = <T = any>(item: T): number => Number(item);

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
   * @param {T} item - Item in an array
   * @returns {boolean} - Boolean of the item
   */
  export const toBool = <T = any>(item: T): boolean => (item as any) !== 'false' && Boolean(item);

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
   * @param {keyof O} propName - Property to get from each item
   * @returns {(item: O) => O[keyof O]} - Function to use in Array.map
   */
  export const toProp = <O extends object>(propName: keyof O) => {
    const args1 = {
      propName: safe.prop(propName, '')
    };
    return (item: O): O[keyof O] => {
      const args = {
        item: safe.obj(item, true),
        ...args1
      };
      return args.item && args.item[args.propName];
    };
  };

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
   * @param {number} precision - Number of decimal places to round to
   * @returns {(num: number) => number} - Function to use in Array.map
   */
  export const toFixed = (precision: number) => {
    const args1 = {
      precision: safe.num(precision, true, 0)
    };
    return (num: number): number => {
      const args = {
        num: safe.num(num, false),
        ...args1
      };
      return MathsTools.fixFloat(args.num, args.precision);
    };
  };

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
   * @param {T} a - Item to compare
   * @param {T} b - Item to compare
   * @returns {number} - Number used for sorting
   */
  export const asc = <T>(a: T, b: T): number => {
    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  };

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
   * [2, 4, 3, 1].sort(fn.desc); // [4, 3, 2, 1]
   * ```
   * @param {T} a - Item to compare
   * @param {T} b - Item to compare
   * @returns {number} - Number used for sorting
   */
  export const desc = <T>(a: T, b: T): number => {
    if (a < b) return 1;
    if (b < a) return -1;
    return 0;
  };

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
   * @param {keyof O} propName - Property to sort by
   * @param {SortFn<O[keyof O]>} [sortFn=fn.sorts.asc] - Sort function to use
   * @returns {SortFn<O>} - Function to use in Array.sort
   */
  export const byProp = <O extends object>(propName: keyof O, sortFn: SortFn<O[keyof O]> = fn.sorts.asc): SortFn<O> => {
    const args = {
      propName: safe.prop(propName, ''),
      sortFn: safe.func(sortFn, asc)
    };
    return (a: O, b: O) => args.sortFn(a[args.propName], b[args.propName]);
  };

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
   * @param {number | `${number}`} target - Target value to sort by
   * @returns {(a: number | `${number}`, b: number | `${number}`) => number} - Function to use in Array.sort
   */
  export const nearestTo = (target: number | `${number}`) => (a: number | `${number}`, b: number | `${number}`) => {
    const diffA = Math.abs(Number(target) - Number(a));
    const diffB = Math.abs(Number(target) - Number(b));
    return (Number.isNaN(diffA) ? Infinity : diffA) - (Number.isNaN(diffB) ? Infinity : diffB);
  };

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
   * @param {number | `${number}`} target - Target value to sort by
   * @returns {(a: number | `${number}`, b: number | `${number}`) => number} - Function to use in Array.sort
   */
  export const furthestFrom = (target: number | `${number}`) => (a: number | `${number}`, b: number | `${number}`) => {
    const diffA = Math.abs(Number(target) - Number(a));
    const diffB = Math.abs(Number(target) - Number(b));
    return (Number.isNaN(diffB) ? Infinity : diffB) - (Number.isNaN(diffA) ? Infinity : diffA);
  };

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
   *
   * ```typescript
   * const arr = [[1, 2], [3, 4], [5, 6]];
   * arr.sort(fn.array(fn.asc)); // [[1, 2], [3, 4], [5, 6]]
   * ```
   * @param {SortFn<T>} [sortFn=fn.sorts.asc] - Sort function to use
   * @returns {(a: T[], b: T[]) => number} - Function to use in Array.sort
   */
  export const array =
    <T>(sortFn: SortFn<T> = fn.sorts.asc) =>
    (a: T[], b: T[]) => {
      for (let i in a) {
        const result = sortFn(a[i], b[i]);
        if (result !== 0) return result;
      }
      return 0;
    };

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
   *
   * ```typescript
   * const arr = [[1, 2], [3, 4], [5, 6]];
   * arr.sort(fn.arrayAsc); // [[1, 2], [3, 4], [5, 6]]
   * ```
   * @param {T} a - Item to compare
   * @param {T} b - Item to compare
   * @returns {number} - Number used for sorting
   */
  export const arrayAsc = array(asc);

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
   *
   * ```typescript
   * const arr = [[1, 2], [3, 4], [5, 6]];
   * arr.sort(fn.arrayDesc); // [[5, 6], [3, 4], [1, 2]]
   * ```
   * @param {T} a - Item to compare
   * @param {T} b - Item to compare
   * @returns {number} - Number used for sorting
   */
  export const arrayDesc = array(desc);

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
   * @param {T} a - Item to combine
   * @param {T} b - Item to combine
   * @returns {T} - Combined item
   */
  export const combine = <T = number>(a: T, b: T): T => (a as any) + b;

  /**<!-- DOCS: fn.combineProp #### @ -->
   * combineProp
   *
   * - `fn.combineProp`
   * - `fn.reduces.combineProp`
   * - `reduces.combineProp`
   *
   * Adds or concats the given property of the items
   *
   * > __Note:__ The initial value is required, because the first item is not yet an object.
   *
   * ```typescript
   * const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
   * people.reduce(fn.combineProp('age'), 0); // 6
   * people.reduce(fn.combineProp('name'), ''); // 'abc'
   * ```
   * @param {keyof O} propName - Property to combine
   * @returns {(a: O[keyof O], b: O) => O[keyof O]} - Function to use in Array.reduce
   */
  export const combineProp = <O extends object>(propName: keyof O) => {
    const args = {
      propName: safe.prop(propName, '')
    };
    return (a: O[keyof O], b: O): O[keyof O] => (a[args.propName] ?? a) + b[args.propName];
  };

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
   * @param {T} prev - Previous value
   * @param {T} curr - Current value
   * @param {number} index - Index of the current value
   * @param {T[]} arr - Array of values
   * @returns {T} - Most common value so far
   */
  export const mode = <T>(prev: T, curr: T, index: number, arr: T[]): T => {
    if (index > 1) {
      // First iteration will be index 1, because it will
      // skip index 0, and use value at [0] for first 'prev'.
      return prev;
    }
    const unique = arr.filter(dedupe);
    const counts = unique.map((item) => arr.filter((i) => i === item)).map((a) => a.length);
    const max = Math.max(...counts);

    return unique[counts.indexOf(max)];
  };

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
   * @param {(value: T, index: number, array: T[]) => U} mapFn - Map function to use
   * @returns {(prev: T, curr: T, index: number, arr: T[]) => T} - Function to use in Array.reduce
   */
  export const modeMapped = <T, U>(mapFn: (value: T, index: number, array: T[]) => U) => {
    const args = {
      mapFn: safe.func(mapFn, (v: T) => v as unknown as U)
    };

    let result: T;

    return (prev: T, curr: T, index: number, arr: T[]): T => {
      if (result) return result;

      const mapped: U[] = arr.map(args.mapFn);

      const uniqueU: U[] = mapped.filter(dedupe);
      const uniqueT: T[] = arr.filter(dedupeMapped(args.mapFn));

      const counts: number[] = uniqueU.map((item) => mapped.filter((i) => i === item)).map((a) => a.length);
      const max: number = Math.max(...counts);

      result = uniqueT[counts.indexOf(max)];

      return result;
    };
  };

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
   * @param {T} val - Value to check
   * @param {number} i - Index of the value
   * @param {T[]} arr - Array of values
   * @returns {boolean} - True if all the items are equal to one another so far
   */
  export const isAllEqual = <T = any>(val: T, i: number, arr: T[]): boolean => {
    const args = {
      val,
      i: safe.num(i, true, 0),
      arr: safe.arr(arr)
    };
    return args.val === args.arr[0];
  };

  /**<!-- DOCS: fn.isUnique #### @ -->
   * isUnique
   *
   * - `fn.isUnique`
   * - `fn.everys.isUnique`
   * - `everys.isUnique`
   *
   * Returns true if the item is unique in the array.
   *
   * ```typescript
   * [1, 1, 1].every(fn.isUnique); // false
   * [1, 2, 1].every(fn.isUnique); // false
   * [1, 2, 3].every(fn.isUnique); // true
   * ```
   * @param {T} val - Value to check
   * @param {number} i - Index of the value
   * @param {T[]} arr - Array of values
   * @returns {boolean} - True if the item is unique in the array so far
   */
  export const isUnique = <T>(val: T, i: number, arr: T[]): boolean => {
    const args = {
      val,
      i: safe.num(i, true, 0),
      arr: safe.arr(arr)
    };
    return args.arr.indexOf(args.val) === args.i;
  };

  /**<!-- DOCS: fn.groups ### -->
   * groups
   *
   * - `fn.groups`
   *
   * Collection of functions that can be used with ArrayTools.group
   */

  /**<!-- DOCS: fn.bySize #### @ -->
   * bySize
   *
   * - `fn.bySize`
   * - `fn.groups.bySize`
   * - `groups.bySize`
   *
   * Group an array into groups of a given size.
   *
   * > __Note:__ The last group may be smaller than the given size.
   *
   * > __Note:__ The groups a distributed in order, so the first group will be filled up first, then the next, etc.
   *
   * > __Note:__ Consider using `ArrayTools.partition` instead
   *
   * ```typescript
   * const nums = [1, 2, 3, 4, 5, 6, 7, 8];
   * ArrayTools.group(nums, fn.bySize(3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
   * ```
   * @param {number} size - Size of the groups
   * @returns {(value: T, index: number, array: T[]) => number} - Function to use in ArrayTools.group
   */
  export const bySize = <T>(size: number) => {
    const args = {
      size: safe.num(size, true, 1)
    };
    return (value: T, index: number, array: T[]) => Math.floor(index / args.size);
  };

  /**<!-- DOCS: fn.byNumGroups #### @ -->
   * byNumGroups
   *
   * - `fn.byNumGroups`
   * - `fn.groups.byNumGroups`
   * - `groups.byNumGroups`
   *
   * Group an array into a certain number of groups as evenly as possible.
   *
   * > __Note:__ The groups are distributed in order, so the first group will be filled up first, then the next, etc.
   *
   * ```typescript
   * const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   * ArrayTools.group(nums, fn.byNumGroups(3)); // [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
   * ```
   * @param {number} numGroups - Number of groups to create
   * @returns {(value: T, index: number, array: T[]) => any} - Function to use in ArrayTools.group
   */
  export const byNumGroups = <T>(numGroups: number) => {
    const args = {
      numGroups: safe.num(numGroups, true, 1)
    };
    let size = null;
    let remainder = null;
    return (value: T, index: number, array: T[]) => {
      if (size === null) {
        size = Math.ceil(array.length / args.numGroups);
        remainder = array.length % args.numGroups;
      }
      // Group the initial groups by the largest size
      const largeGroup = Math.floor(index / size);
      if (largeGroup < remainder || remainder === 0) return largeGroup;

      // Group the smaller groups
      return remainder + Math.floor((index - size * remainder) / (size - 1));
    };
  };

  /** <!-- DOCS-ALIAS: fn.filters  --> */
  export namespace filters {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    /** <!-- DOCS-ALIAS: fn.exists  --> */
    export const exists = fn.exists;
    /** <!-- DOCS-ALIAS: fn.isTruthy  --> */
    export const isTruthy = fn.isTruthy;
    /** <!-- DOCS-ALIAS: fn.isFalsy  --> */
    export const isFalsy = fn.isFalsy;
    /** <!-- DOCS-ALIAS: fn.isEmpty  --> */
    export const isEmpty = fn.isEmpty;
    /** <!-- DOCS-ALIAS: fn.isNotEmpty  --> */
    export const isNotEmpty = fn.isNotEmpty;
    /** <!-- DOCS-ALIAS: fn.isEqual  --> */
    export const isEqual = fn.isEqual;
    /** <!-- DOCS-ALIAS: fn.isNotEqual  --> */
    export const isNotEqual = fn.isNotEqual;
    /** <!-- DOCS-ALIAS: fn.dedupe  --> */
    export const dedupe = fn.dedupe;
    /** <!-- DOCS-ALIAS: fn.dedupeMapped  --> */
    export const dedupeMapped = fn.dedupeMapped;
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

  /** <!-- DOCS-ALIAS: fn.maps  --> */
  export namespace maps {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    /** <!-- DOCS-ALIAS: fn.toString  --> */
    export const toString = fn.toString;
    /** <!-- DOCS-ALIAS: fn.toNumber  --> */
    export const toNumber = fn.toNumber;
    /** <!-- DOCS-ALIAS: fn.toBool  --> */
    export const toBool = fn.toBool;
    /** <!-- DOCS-ALIAS: fn.toProp  --> */
    export const toProp = fn.toProp;
    /** <!-- DOCS-ALIAS: fn.toFixed  --> */
    export const toFixed = fn.toFixed;
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

  /** <!-- DOCS-ALIAS: fn.sorts  --> */
  export namespace sorts {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    /** <!-- DOCS-ALIAS: fn.asc  --> */
    export const asc = fn.asc;
    /** <!-- DOCS-ALIAS: fn.desc  --> */
    export const desc = fn.desc;
    /** <!-- DOCS-ALIAS: fn.byProp  --> */
    export const byProp = fn.byProp;
    /** <!-- DOCS-ALIAS: fn.nearestTo  --> */
    export const nearestTo = fn.nearestTo;
    /** <!-- DOCS-ALIAS: fn.furthestFrom  --> */
    export const furthestFrom = fn.furthestFrom;
    /** <!-- DOCS-ALIAS: fn.array  --> */
    export const array = fn.array;
    /** <!-- DOCS-ALIAS: fn.arrayAsc  --> */
    export const arrayAsc = fn.arrayAsc;
    /** <!-- DOCS-ALIAS: fn.arrayDesc  --> */
    export const arrayDesc = fn.arrayDesc;
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

  /** <!-- DOCS-ALIAS: fn.reduces  --> */
  export namespace reduces {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    /** <!-- DOCS-ALIAS: fn.combine  --> */
    export const combine = fn.combine;
    /** <!-- DOCS-ALIAS: fn.combineProp  --> */
    export const combineProp = fn.combineProp;
    /** <!-- DOCS-ALIAS: fn.mode  --> */
    export const mode = fn.mode;
    /** <!-- DOCS-ALIAS: fn.modeMapped  --> */
    export const modeMapped = fn.modeMapped;
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

  /** <!-- DOCS-ALIAS: fn.everys  --> */
  export namespace everys {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    /** <!-- DOCS-ALIAS: fn.isAllEqual  --> */
    export const isAllEqual = fn.isAllEqual;

    /** <!-- DOCS-ALIAS: fn.isUnique  --> */
    export const isUnique = fn.isUnique;
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

  /** <!-- DOCS-ALIAS: fn.groups  --> */
  export namespace groups {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    /** <!-- DOCS-ALIAS: fn.bySize  --> */
    export const bySize = fn.bySize;

    /** <!-- DOCS-ALIAS: fn.byNumGroups  --> */
    export const byNumGroups = fn.byNumGroups;
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: fn  --> */
export const filters = fn.filters;
/** <!-- DOCS-ALIAS: fn.maps  --> */
export const maps = fn.maps;
/** <!-- DOCS-ALIAS: fn.sorts  --> */
export const sorts = fn.sorts;
/** <!-- DOCS-ALIAS: fn.reduces  --> */
export const reduces = fn.reduces;
/** <!-- DOCS-ALIAS: fn.everys  --> */
export const everys = fn.everys;
/** <!-- DOCS-ALIAS: fn.groups  --> */
export const groups = fn.groups;
