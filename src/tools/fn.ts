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
   * @param {T} [item]
   * @returns {T}
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
   * @param {T} [item]
   * @returns {() => T}
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
   * @param {T} [item]
   * @returns {() => Promise<T>}
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
   * @param {T} [item]
   * @returns {() => Promise<T>}
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
   * @param {T} item
   * @returns {boolean}
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
   * @param {T} item
   * @returns {boolean}
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
   * @param {T} item
   * @returns {boolean}
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
   * @param {T[] | string} item
   * @returns {boolean}
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
   * @param {T[] | string} item
   * @returns {boolean}
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
   * @param {T} item
   * @returns {(other: T) => boolean}
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
   * @param {T} item
   * @returns {(other: T) => boolean}
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
   * @param {T} item
   * @param {number} index
   * @param {T[]} array
   * @returns {boolean}
   */
  export const dedupe = <T extends unknown>(item: T, index: number, array: T[]): boolean => array.indexOf(item) === index;

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
  export const dedupeMapped = <T extends unknown, U extends unknown>(mapFn: (value?: T, index?: number, array?: T[]) => U) => {
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
   * @param {T} item
   * @returns {string}
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
   * @param {T} item
   * @returns {number}
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
   * @param {T} item
   * @returns {boolean}
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
   * @param {string | number} prop
   * @returns {(item: O) => P}
   */
  export const toProp = <P = string, O = Object>(prop: string | number) => {
    const args1 = {
      prop: safe.prop(prop, '')
    };
    return (item: O): P => {
      const args = {
        item: safe.obj(item, true),
        ...args1
      };
      return args.item && args.item[args.prop];
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
   * @param {number} precision
   * @returns {(num: number) => number}
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
   * @param {any} a
   * @param {any} b
   * @returns {number}
   */
  export const asc = (a: any, b: any): number => {
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
   * [2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
   * ```
   * @param {any} a
   * @param {any} b
   * @returns {number}
   */
  export const desc = (a: any, b: any): number => {
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
   * @param {string | number} propName
   * @param {SortFn<T>} [sortFn=asc]
   * @returns {SortFn<O>}
   */
  export const byProp = <T = number, O = Object>(propName: string | number, sortFn: SortFn<T> = asc): SortFn<O> => {
    const args = {
      propName: safe.prop(propName, ''),
      sortFn: safe.func(sortFn, asc)
    };
    return (a: O, b: O) => args.sortFn(a[args.propName] as T, b[args.propName] as T);
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
   * @param {T} target
   * @returns {(a: any, b: any) => number}
   */
  export const nearestTo =
    <T = number>(target: T) =>
    (a: any, b: any) => {
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
   * @param {T} target
   * @returns {(a: any, b: any) => number}
   */
  export const furthestFrom =
    <T = number>(target: T) =>
    (a: any, b: any) => {
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
   * @param {SortFn<T>} [sortFn=asc]
   * @returns {(a: T[], b: T[]) => number}
   */
  export const array =
    <T extends unknown>(sortFn: SortFn<T> = asc) =>
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
   * @param {T} a
   * @param {T} b
   * @returns {T}
   */
  export const combine = <T extends unknown = number>(a: T, b: T): T => (a as any) + b;

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
  export const combineProp = <O extends unknown, T extends unknown = number>(propName: string | number) => {
    const args = {
      propName: safe.prop(propName, '')
    };
    return (a: O | T, b: O): T => (a[args.propName] ?? a) + b[args.propName];
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
   * @param {T} prev
   * @param {T} curr
   * @param {number} index
   * @param {T[]} arr
   * @returns {T}
   */
  export const mode = <T extends unknown>(prev: T, curr: T, index: number, arr: T[]): T => {
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
   * @param {(value: T, index: number, array: T[]) => U} mapFn
   * @returns {(prev: T, curr: T, index: number, arr: T[]) => T}
   */
  export const modeMapped = <T extends unknown, U extends unknown>(mapFn: (value: T, index: number, array: T[]) => U) => {
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
   * @param {T} val
   * @param {number} i
   * @param {T[]} arr
   * @returns {boolean}
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
   * @param {T} val
   * @param {number} i
   * @param {T[]} arr
   * @returns {boolean}
   */
  export const isUnique = <T extends unknown>(val: T, i: number, arr: T[]): boolean => {
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
   * ```typescript
   * const nums = [1, 2, 3, 4, 5, 6, 7, 8];
   * ArrayTools.group(nums, fn.bySize(3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
   * ```
   * @param {number} size
   * @returns {(value: T, index: number, array: T[]) => number}
   */
  export const bySize = <T extends unknown>(size: number) => {
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
   * > __Note:__ The groups a distributed in order, so the first group will be filled up first, then the next, etc.
   *
   * ```typescript
   * const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   * ArrayTools.group(nums, byNumGroups(3)); // [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
   * ```
   * @param {number} numGroups
   * @returns {(value: T, index: number, array: T[]) => any}
   */
  export const byNumGroups = <T extends unknown>(numGroups: number) => {
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
