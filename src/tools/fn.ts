import { MathsTools } from './MathsTools';

//<!-- DOCS: 30 -->
/**<!-- DOCS: ## -->
 * fn
 *
 * A collection of useful higher-order functions.
 */
export namespace fn {
  /**<!-- DOCS: ### -->
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
   */
  export const noop = () => {};

  /**<!-- DOCS: ### -->
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
   */
  export const noact = <T = any>(item: T): T => item;

  /**<!-- DOCS: ### -->
   * result
   *
   * - `fn.result`
   *
   * Returns a function that returns a function that returns the first argument.
   *
   * ```typescript
   * const items = stuff
   *   .filter(condition ? mapSomething : fn.result(true))
   * ```
   */
  export const result =
    <T = any>(item: T) =>
    (): T =>
      item;

  /**<!-- DOCS: ### -->
   * resolve
   *
   * - `fn.resolve`
   *
   * Returns an async function that resolves to the first argument
   *
   * Like fn.result, but wrapped in a Promise
   */
  export const resolve =
    <T = any>(item: T) =>
    (): Promise<T> =>
      Promise.resolve(item);

  /**<!-- DOCS: ### -->
   * reject
   *
   * - `fn.reject`
   *
   * Returns an async function that rejects with the first argument
   */
  export const reject =
    <T = any>(item: T) =>
    (): Promise<T> =>
      Promise.reject(item);

  /**<!-- DOCS: ### -->
   * filters
   *
   * - `fn.filters`
   *
   * Collection of functions that can be used with Array.filter
   */
  /**<!-- DOCS: #### -->
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
   */
  export const exists = <T = any>(item: T): boolean => item !== undefined && item !== null;

  /**<!-- DOCS: #### -->
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
   */
  export const isTruthy = <T = any>(item: T): boolean => Boolean(item);

  /**<!-- DOCS: #### -->
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
   */
  export const isFalsy = <T = any>(item: T): boolean => !Boolean(item);

  /**<!-- DOCS: #### -->
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
   */
  export const isEmpty = <T = any>(item: T[] | string): boolean => Boolean(!item || !item.length);

  /**<!-- DOCS: #### -->
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
   */
  export const isNotEmpty = <T = any>(item: T[] | string): boolean => Boolean(item && item.length);

  /**<!-- DOCS: #### -->
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
   */
  export const isEqual =
    <T = any>(item: T) =>
    (other: T) =>
      Boolean(item === other);

  /**<!-- DOCS: #### -->
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
   */
  export const isNotEqual =
    <T = any>(item: T) =>
    (other: T) =>
      Boolean(item !== other);

  /**<!-- DOCS: #### -->
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
   */
  export const dedupe = <T extends unknown>(item: T, index: number, array: T[]): boolean => array.indexOf(item) === index;

  /**<!-- DOCS: #### -->
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
   */
  export const dedupeMapped = <T extends unknown, U extends unknown>(mapFn: (value: T, index: number, array: T[]) => U) => {
    let mapped: U[];
    return (item: T, index: number, array: T[]): boolean => {
      if (!mapped) mapped = array.map(mapFn);
      return mapped.indexOf(mapped[index]) === index;
    };
  };

  /**<!-- DOCS: ### -->
   * maps
   *
   * - `fn.maps`
   *
   * Collection of functions that can be used with Array.map
   */
  /**<!-- DOCS: #### -->
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
   */
  export const toString = <T = any>(item: T): string => item + '';

  /**<!-- DOCS: #### -->
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
   */
  export const toNumber = <T = any>(item: T): number => Number(item);

  /**<!-- DOCS: #### -->
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
   */
  export const toBool = <T = any>(item: T): boolean => (item as any) !== 'false' && Boolean(item);

  /**<!-- DOCS: #### -->
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
   */
  export const toProp =
    <P = string, O = Object>(prop: string) =>
    (item: O): P =>
      item && item[prop];

  /**<!-- DOCS: #### -->
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
   */
  export const toFixed =
    (precision: number) =>
    (num: number): number =>
      MathsTools.fixFloat(num, precision);

  /**<!-- DOCS: ### -->
   * sorts
   *
   * - `fn.sorts`
   *
   * Collection of functions that can be used with Array.sort
   */
  /**<!-- DOCS: #### -->
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
   */
  export const asc = (a: any, b: any): number => {
    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  };

  /**<!-- DOCS: #### -->
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
   */
  export const desc = (a: any, b: any): number => {
    if (a < b) return 1;
    if (b < a) return -1;
    return 0;
  };

  type SortFn<T = number> = (a: T, b: T) => number;

  /**<!-- DOCS: #### -->
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
   */
  export const byProp = <T = number, O = Object>(propName: string, sortFn: SortFn<T> = asc): SortFn<O> => {
    return (a: O, b: O) => sortFn(a[propName] as T, b[propName] as T);
  };

  /**<!-- DOCS: #### -->
   * nearestTo
   *
   * - `fn.nearestTo`
   * - `fn.sorts.nearestTo`
   * - `sorts.nearestTo`
   *
   * Sort by the nearest value to the given value.
   *
   * ```typescript
   * const people = [2, 4, 3, 1];
   * people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
   * ```
   */
  export const nearestTo =
    <T = number>(target: T) =>
    (a: any, b: any) =>
      Math.abs(Number(target) - Number(a)) - Math.abs(Number(target) - Number(b));

  /**<!-- DOCS: #### -->
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
   */
  export const furthestFrom =
    <T = number>(target: T) =>
    (a: any, b: any) =>
      Math.abs(Number(target) - Number(b)) - Math.abs(Number(target) - Number(a));

  /**<!-- DOCS: #### -->
   * arrayAsc
   *
   * - `fn.arrayAsc`
   * - `fn.sorts.arrayAsc`
   * - `sorts.arrayAsc`
   *
   * Sort an array of arrays in ascending order
   */
  export const arrayAsc = (a: any[], b: any[]) => {
    for (let i in a) {
      const result = asc(a[i], b[i]);
      if (result !== 0) return result;
    }
    return 0;
  };

  /**<!-- DOCS: #### -->
   * arrayDesc
   *
   * - `fn.arrayDesc`
   * - `fn.sorts.arrayDesc`
   * - `sorts.arrayDesc`
   *
   * Sort an array of arrays in descending order
   */
  export const arrayDesc = (a: any[], b: any[]) => {
    for (let i in a) {
      const result = desc(a[i], b[i]);
      if (result !== 0) return result;
    }
    return 0;
  };

  /**<!-- DOCS: ### -->
   * reduces
   *
   * - `fn.reduces`
   *
   * Collection of functions that can be used with Array.reduce
   */

  /**<!-- DOCS: #### -->
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
   */
  export const combine = (a: any, b: any): any => a + b;

  /**<!-- DOCS: #### -->
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
   */
  export const combineProp =
    (propName: string) =>
    (a: any, b: any): any =>
      a[propName] + b[propName];

  /**<!-- DOCS: #### -->
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

  /**<!-- DOCS: #### -->
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
   */
  export const modeMapped = <T extends unknown, U extends unknown>(mapFn: (value: T, index: number, array: T[]) => U) => {
    let result: T;

    return (prev: T, curr: T, index: number, arr: T[]): T => {
      if (result) return result;

      const mapped: U[] = arr.map(mapFn);

      const uniqueU: U[] = mapped.filter(dedupe);
      const uniqueT: T[] = arr.filter(dedupeMapped(mapFn));

      const counts: number[] = uniqueU.map((item) => mapped.filter((i) => i === item)).map((a) => a.length);
      const max: number = Math.max(...counts);

      result = uniqueT[counts.indexOf(max)];

      return result;
    };
  };

  /**<!-- DOCS: ### -->
   * everys
   *
   * - `fn.everys`
   *
   * Collection of functions that can be used with Array.every
   */

  /**<!-- DOCS: #### -->
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
   */
  export const isAllEqual = <T = any>(val: T, i, arr: T[]): boolean => val === arr[0];

  /** ALIAS - filters */
  export namespace filters {
    /** ALIAS - filters.exists */
    export const exists = fn.exists;
    /** ALIAS - filters.isTruthy */
    export const isTruthy = fn.isTruthy;
    /** ALIAS - filters.isFalsy */
    export const isFalsy = fn.isFalsy;
    /** ALIAS - filters.isEmpty */
    export const isEmpty = fn.isEmpty;
    /** ALIAS - filters.isNotEmpty */
    export const isNotEmpty = fn.isNotEmpty;
    /** ALIAS - filters.isEqual */
    export const isEqual = fn.isEqual;
    /** ALIAS - filters.isNotEqual */
    export const isNotEqual = fn.isNotEqual;
    /** ALIAS - filters.dedupe */
    export const dedupe = fn.dedupe;
    /** ALIAS - filters.dedupeMapped */
    export const dedupeMapped = fn.dedupeMapped;
  }

  /** ALIAS - maps */
  export namespace maps {
    /** ALIAS - maps.toString */
    export const toString = fn.toString;
    /** ALIAS - maps.toNumber */
    export const toNumber = fn.toNumber;
    /** ALIAS - maps.toBool */
    export const toBool = fn.toBool;
    /** ALIAS - maps.toProp */
    export const toProp = fn.toProp;
    /** ALIAS - maps.toFixed */
    export const toFixed = fn.toFixed;
  }

  /** ALIAS - sorts */
  export namespace sorts {
    /** ALIAS - sorts.asc */
    export const asc = fn.asc;
    /** ALIAS - sorts.desc */
    export const desc = fn.desc;
    /** ALIAS - sorts.byProp */
    export const byProp = fn.byProp;
    /** ALIAS - sorts.nearestTo */
    export const nearestTo = fn.nearestTo;
    /** ALIAS - sorts.furthestFrom */
    export const furthestFrom = fn.furthestFrom;
    /** ALIAS - sorts.arrayAsc */
    export const arrayAsc = fn.arrayAsc;
    /** ALIAS - sorts.arrayDesc */
    export const arrayDesc = fn.arrayDesc;
  }

  /** ALIAS - reduces */
  export namespace reduces {
    /** ALIAS - reduces.combine */
    export const combine = fn.combine;
    /** ALIAS - reduces.combineProp */
    export const combineProp = fn.combineProp;
    /** ALIAS - reduces.mode */
    export const mode = fn.mode;
    /** ALIAS - reduces.modeMapped */
    export const modeMapped = fn.modeMapped;
  }

  /** ALIAS - everys */
  export namespace everys {
    /** ALIAS - everys.isAllEqual */
    export const isAllEqual = fn.isAllEqual;
  }
}

/** ALIAS - filters */
export const filters = fn.filters;
/** ALIAS - maps */
export const maps = fn.maps;
/** ALIAS - sorts */
export const sorts = fn.sorts;
/** ALIAS - reduces */
export const reduces = fn.reduces;
/** ALIAS - everys */
export const everys = fn.everys;
