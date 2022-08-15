/**
 * fn.noop
 *
 * No operation. Do nothing, return nothing.
 *
 * ```typescript
 * const run = condition ? doSomething : fn.noop;
 * run();
 * ```
 */
export const noop = () => {};

/**
 * fn.noact
 *
 * No action. Returns the first argument it receives.
 *
 * ```typescript
 * const items = stuff
 *   .map(condition ? mapSomething : fn.noact)
 * ```
 */
export const noact = <T extends unknown>(item: T): T => item;

/**
 * fn.result
 *
 * Returns a function that returns a function that returns the first argument.
 *
 * ```typescript
 * const items = stuff
 *   .filter(condition ? mapSomething : fn.result(true))
 * ```
 */
export const result =
  <T extends unknown>(item: T) =>
  (): T =>
    item;

/**
 * fn.filters.exists / fn.exists
 *
 * Returns true if item isn't null or undefined.
 *
 * ```typescript
 * [null, 1, undefined, 2].filter(fn.exists); // [1, 2]
 * ```
 */
export const exists = <T extends unknown>(item: T): boolean => item !== undefined && item !== null;

/**
 * fn.filters.isTruthy / fn.isTruthy
 *
 * Returns true if item is truthy.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isTruthy); // [1, 2]
 * ['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
 * ```
 */
export const isTruthy = <T extends unknown>(item: T): boolean => Boolean(item);

/**
 * fn.filters.isFalsy / fn.isFalsy
 *
 * Returns true if item is falsy.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isFalsy); // [0]
 * ['', 'a', 'b'].filter(fn.isFalsy); // ['']
 * ```
 */
export const isFalsy = <T extends unknown>(item: T): boolean => !Boolean(item);

/**
 * fn.filters.isEmpty / fn.isEmpty
 *
 * Returns true if item's length is 0
 *
 * ```typescript
 * ['', 'a', 'b'].filter(fn.isEmpty); // ['']
 * [[], [1], [2]].filter(fn.isEmpty); // [[]]
 * ```
 */
export const isEmpty = <T extends unknown>(item: T[] | string): boolean => Boolean(!item || !item.length);

/**
 * fn.filters.isNotEmpty / fn.isNotEmpty
 *
 * Returns true if item's length is 1 or more
 *
 * ```typescript
 * ['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
 * [[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
 * ```
 */
export const isNotEmpty = <T extends unknown>(item: T[] | string): boolean => Boolean(item && item.length);

/**
 * fn.filters.isEqual / fn.isEqual
 *
 * Returns a function that returns true if the item is equal to provided value.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isEqual(1)); // [1]
 * ```
 */
export const isEqual =
  <T extends unknown>(item: T) =>
  (other: T) =>
    Boolean(item === other);

/**
 * fn.filters.isNotEqual / fn.isNotEqual
 *
 * Returns a function that returns true if the item is not equal to provided value.
 *
 * ```typescript
 * [0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
 * ```
 */
export const isNotEqual =
  <T extends unknown>(item: T) =>
  (other: T) =>
    Boolean(item !== other);

export const filters = {
  exists,
  isTruthy,
  isFalsy,
  isEmpty,
  isNotEmpty,
  isEqual,
  isNotEqual
};

/**
 * fn.maps.toString / fn.toString
 *
 * Maps the item to a string.
 *
 * ```typescript
 * [0, 1, 2].map(fn.toString); // ['0', '1', '2']
 * ```
 */
export const toString = <T extends unknown>(item: T): string => item + '';

/**
 * fn.maps.toNumber / fn.toNumber
 *
 * Maps the item to a number.
 *
 * ```typescript
 * ['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
 * ```
 */
export const toNumber = <T extends unknown>(item: T): number => Number(item);

/**
 * fn.maps.toBool / fn.toBool
 *
 * Maps the item to a boolean.
 *
 * ```typescript
 * [0, 1, 2].map(fn.toBool); // [false, true, true]
 * ['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
 * ```
 */
export const toBool = <T extends unknown>(item: T): boolean => item !== 'false' && Boolean(item);

/**
 * fn.maps.toProp / fn.toProp
 *
 * Maps the item to a given property of the item
 *
 * ```typescript
 * [{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
 * ```
 */
export const toProp =
  <T extends unknown, P extends unknown>(prop: string) =>
  (item: T): P =>
    item && item[prop];

// This is a bad idea, as it provides no benefits, but makes code harder to read.
const multimap = <TIn extends unknown, TOut extends unknown>(
  ...mapFns: ((val: any, index: number, arr: any[]) => any)[]
): ((val: TIn, index: number, arr: TIn[]) => TOut) => {
  let mapped;
  return (val, index, arr) => {
    if (!mapped) {
      mapped = arr;
      for (let mapFn of mapFns) {
        mapped = mapped.map(mapFn);
      }
    }
    return mapped[index];
  };
};

export const maps = {
  toString,
  toNumber,
  toBool,
  toProp
};

/**
 * fn.sorts.asc / fn.asc
 *
 * Sort ascending.
 *
 * ```typescript
 * [2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
 * ```
 */
export const asc = (a: any, b: any): number => Number(a) - Number(b);

/**
 * fn.sorts.desc / fn.desc
 *
 * Sort descending.
 *
 * ```typescript
 * [2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
 * ```
 */
export const desc = (a: any, b: any): number => Number(b) - Number(a);

type SortFn<T> = (a: T, b: T) => number;

/**
 * fn.sorts.byProp / fn.byProp
 *
 * Sort by a given property.
 *
 * ```typescript
 * const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
 * people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
 * ```
 */
export const byProp = <T extends unknown, O extends Object>(propName: string, sortFn: SortFn<T> = asc): SortFn<O> => {
  return (a: O, b: O) => sortFn(a[propName] as T, b[propName] as T);
};

export const sorts = {
  asc,
  desc,
  byProp
};

/**
 * fn.reduces.combine / fn.combine
 *
 * Adds or concats the items
 *
 * ```typescript
 * [1, 2, 3].reduce(fn.combine); // 6
 * ['a', 'b', 'c'].reduce(fn.combine); // 'abc'
 * ```
 */
export const combine = (a: any, b: any): any => a + b;

/**
 * fn.reduces.combineProp / fn.combineProp
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

export const reduces = {
  combine,
  combineProp
};

/**
 * fn.everys.isAllEqual / fn.isAllEqual
 *
 * Returns if all the items are equal to one another.
 *
 * ```typescript
 * [1, 1, 1].every(fn.isAllEqual); // true
 * [1, 2, 1].every(fn.isAllEqual); // false
 * ```
 */
export const isAllEqual = <T extends unknown>(val: T, i, arr: T[]): boolean => val === arr[0];

// TODO
const isAllNotEqual = <T extends unknown>(val: T, i, arr: T[]): boolean => val !== arr[0];

export const everys = {
  isAllEqual
};

// export const areEqual = <T extends unknown>(val: T, i, arr: T[]): boolean => val === arr[0];
// export const areNotEqual = <T extends unknown>(val: T, i, arr: T[]): boolean => val !== arr[0];

// export const somes = {
//   areEqual,
//   areNotEqual
// };

// Another bad idea. Don't use it.
const mappedTo = (...hoFns) => {
  const checkFn = hoFns.pop();
  let mapped;
  return (val, index, arr) => {
    if (!mapped) mapped = arr.map(multimap(...hoFns));
    return checkFn(mapped[index], index, mapped);
  };
};
