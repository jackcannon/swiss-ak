import { sorts, fixFloat } from './fn';

/**
 * Returns an array of the given length, where each value is equal to it's index
 * e.g. [0, 1, 2, ..., length]
 *
 * ```typescript
 * range(3);  // [0, 1, 2]
 * range(5);  // [0, 1, 2, 3, 4]
 * range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * range(3, 2);  // [0, 2, 4]
 * range(5, 2);  // [0, 2, 4, 6, 8]
 * range(10, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
 * ```
 */
export const range = (length: number = 1, multiplier: number = 1, offset: number = 0): number[] =>
  new Array(Math.floor(length)).fill(1).map((v, i) => fixFloat(i * multiplier) + offset);

type UnwrapArray<T> = T extends Array<infer U> ? U : T;
type UnwrapArrays<T extends [...any[]]> = T extends [infer Head, ...infer Tail] ? [UnwrapArray<Head>, ...UnwrapArrays<Tail>] : [];

const zipFn = <T extends [...any[]]>(length: number, arrs: T): UnwrapArrays<T>[] =>
  range(length).map((i) => arrs.map((arr) => (arr || [])[i])) as UnwrapArrays<T>[];

/**
 * Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.
 *
 * Limited to the length of the shortest provided array
 *
 * Inspired by python's 'zip'
 *
 * ```typescript
 * zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
 * ```
 */
export const zip = <T extends [...any[]]>(...arrs: T): UnwrapArrays<T>[] =>
  zipFn(Math.min(...(arrs.length ? arrs : [[]]).map((arr) => (arr || []).length)), arrs);

// TODO docs
export const zipMax = <T extends [...any[]]>(...arrs: T): UnwrapArrays<T>[] =>
  zipFn(Math.max(...(arrs.length ? arrs : [[]]).map((arr) => (arr || []).length)), arrs);

/**
 * Sort an array by a mapped form of the values, but returning the initial values
 *
 * ```typescript
 * sortByMapped(['2p', '3p', '1p'], (v) => Number(v.replace('p', ''))); // ['1p', '2p', '3p']
 * sortByMapped(
 *   ['2p', '3p', '1p'],
 *   (v) => Number(v.replace('p', '')),
 *   (a, b) => b - a
 * ); // ['3p', '2p', '1p']
 * ```
 */
export const sortByMapped = <T = string, M = number>(
  arr: T[],
  mapFn: (value: T, index: number, array: T[]) => M,
  sortFn: (a: M, b: M) => number = sorts.asc
): T[] =>
  zip(arr, arr.map(mapFn))
    .sort((a, b) => sortFn(a[1] as M, b[1] as M))
    .map(([v]) => v);

/**
 * Returns a clone of the provided array with it's items in a random order
 *
 * ```typescript
 * randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
 * randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
 * randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
 * randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
 * randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
 * ```
 */
export const randomise = <T = string>(arr: T[]): T[] => sortByMapped(arr, () => Math.random());

/**
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
 * reverse(arr2);  // [3, 2, 1]
 * arr2            // [1, 2, 3]
 * ```
 */
export const reverse = <T = string>(arr: T[]): T[] => [...arr].reverse();

/**
 * Returns array of 'tuples' of index/value pairs
 *
 * ```typescript
 * const arr = ['a', 'b', 'c'];
 * entries(arr); // [ [0, 'a'], [1, 'b'], [2, 'c'] ]
 *
 * for (let [index, value] of entries(arr)) {
 *  console.log(index); // 0, 1, 2
 *  console.log(value); // 'a', 'b', 'c'
 * }
 * ```
 */
export const entries = <T = string>(arr: T[]): [number, T][] => zip(range(arr.length), arr) as any;

/**
 * ArrayUtils.repeat
 *
 * Returns an array with the given items repeated
 *
 * ```typescript
 * repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
 * repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
 * ```
 */
export const repeat = <T = string>(maxLength: number, ...items: T[]): T[] => {
  const simple = new Array(maxLength).fill(items[0]);
  return items.length === 1 ? simple : simple.map((v, i) => items[i % items.length]);
};

/**
 * ArrayUtils.roll
 *
 * 'Roll' the array by a given amount so that is has a new first item. Length and contents remain the same, but the order is changed
 *
 * ```typescript
 * roll(1, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7, 0 ]
 * roll(4, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 4, 5, 6, 7, 0, 1, 2, 3 ]
 * ```
 */
export const roll = <T extends unknown>(distance: number, arr: T[]): T[] => [
  ...arr.slice(distance % arr.length),
  ...arr.slice(0, distance % arr.length)
];

const isNumString = (text: string) => Boolean(text.match(/^[0-9]+$/));
const partitionNums = (ignoreCase: boolean) => (name: string) =>
  (ignoreCase ? name.toLowerCase() : name).split(/([0-9]+)/).map((s) => (isNumString(s) ? Number(s) : s));

/**
 * ArrayUtils.sortNumberedText
 *
 * Alphabetically sorts a list of strings, but keeps multi-digit numbers in numerical order (rather than alphabetical)
 *
 * ```typescript
 * const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
 * names.sort(); // [ 'foo10', 'foo20', 'foo9', 'name1', 'name10', 'name2' ]
 * sortNumberedText(names); // [ 'foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10' ]
 * ```
 */
export const sortNumberedText = (texts: string[], ignoreCase: boolean = true): string[] => {
  return sortByMapped(texts, partitionNums(ignoreCase), (a, b) => {
    for (let i in a) {
      const result = sorts.asc(a[i], b[i]);
      if (result !== 0) return result;
    }
    return 0;
  });
};

// TODO docs
/**
 * To equal size 2d array
 */
export const partition = <T extends unknown>(array: T[], partitionSize: number = Math.ceil(array.length / 2)): T[][] => {
  const numParts = Math.ceil(array.length / partitionSize);
  const result: T[][] = [];
  for (let i = 0; i < numParts; i++) {
    result.push(array.slice(i * partitionSize, (i + 1) * partitionSize));
  }
  return result;
};

// TODO docs
/**
 * group items into an object of arrays, based on a given map function.
 */
export const groupObj = <T extends unknown>(
  array: T[],
  mapFn: (item: T, index: number, arr: T[]) => string | number
): { [id: string | number]: T[] } => {
  const result: { [id: string | number]: T[] } = {};

  array.forEach((item, index) => {
    const key = mapFn(item, index, array);

    if (key === undefined) return;

    if (!result[key]) result[key] = [];
    result[key].push(item);
  });

  return result;
};

// TODO docs
/**
 * group items into an array of arrays, based on a given map function.
 */
export const group = <T extends unknown>(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number): T[][] => {
  const obj = groupObj(array, mapFn);
  return Object.values(obj);
};

export const ArrayUtils = {
  range,
  zip,
  zipMax,
  sortByMapped,
  randomise,
  reverse,
  entries,
  repeat,
  roll,
  sortNumberedText,
  partition,
  groupObj,
  group,
  utils: {
    isNumString,
    partitionNums
  }
};
