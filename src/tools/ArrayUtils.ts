import { sorts } from './fn';

/**
 * Returns an array of the given length, where each value is equal to it's index
 * e.g. [0, 1, 2, ..., length]
 *
 * ```typescript
 * range(3);  // [0, 1, 2]
 * range(5);  // [0, 1, 2, 3, 4]
 * range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 */
export const range = (length: number = 1): number[] => new Array(length).fill(1).map((v, i) => i);

type UnwrapArray<T> = T extends Array<infer U> ? U : T;
type UnwrapArrays<T extends [...any[]]> = T extends [infer Head, ...infer Tail] ? [UnwrapArray<Head>, ...UnwrapArrays<Tail>] : [];

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
export const zip = <T extends [...any[]]>(...arrs: T): UnwrapArrays<T>[] => {
  const length = Math.min(...arrs.map((arr) => (arr || []).length));
  return range(length).map((i) => arrs.map((arr) => (arr || [])[i])) as UnwrapArrays<T>[];
};

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
