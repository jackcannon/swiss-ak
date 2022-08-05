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

/**
 * Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.
 *
 * Limited to the length of the shortest provided array
 *
 * Inspired by python's 'zip'
 *
 * > Note: The typing of this is messy - needs improvement
 *
 * ```typescript
 * zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
 * ```
 */
export const zip = <T1 = undefined, T2 = undefined, T3 = undefined, T4 = undefined, T5 = undefined>(
  ...arrs: [T1[]?, T2[]?, T3[]?, T4[]?, T5[]?]
): [T1, T2, T3, T4, T5][] => {
  const length = Math.min(...arrs.map((arr) => (arr || []).length));
  return range(length).map((i) => arrs.map((arr) => (arr || [])[i])) as [T1, T2, T3, T4, T5][];
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
export const sortByMapped = <T, M>(
  arr: T[],
  mapFn: (value: T, index: number, array: T[]) => M,
  sortFn: (a: M, b: M) => number = (a, b) => Number(a) - Number(b)
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
export const randomise = <T>(arr: T[]): T[] => sortByMapped(arr, () => Math.random());

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
export const reverse = <T>(arr: T[]): T[] => [...arr].reverse();
