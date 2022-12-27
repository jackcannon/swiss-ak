import { OfType } from './types';

/**
 * ObjectUtils.map
 *
 * Maps the keys and values of an object in a similar way to Array.map
 *
 * ```typescript
 * ObjectUtils.map({a: 1, b: 2, c: 3}, (key, value) => [key, key + value]); // {a: 'a1', b: 'b2', c: 'c3'}
 * ```
 */
const map = <T extends Object, V extends any, W extends any>(obj: T, func: (key: string, value: V) => [string, W]): OfType<T, W> =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => func(key, value))) as OfType<T, W>;

/**
 * ObjectUtils.mapValues
 *
 * Maps the values of an object in a similar way to Array.map
 *
 * ```typescript
 * ObjectUtils.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
 * ```
 */
const mapValues = <T extends Object, V extends any, W extends any>(obj: T, func: (key: string, value: V) => W): OfType<T, W> =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, func(key, value)])) as OfType<T, W>;

/**
 * ObjectUtils.mapKeys
 *
 * Maps the values of an object in a similar way to Array.map
 *
 * ```typescript
 * ObjectUtils.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
 * ```
 */
const mapKeys = <T extends Object, V extends any>(obj: T, func: (key: string, value: V) => string): T =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [func(key, value), value])) as T;

// TODO docs
// removes properties with undefined values
const clean = <T extends Object>(obj: T): Partial<T> =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== undefined)) as Partial<T>;

export const ObjectUtils = {
  map,
  mapValues,
  mapKeys,
  clean
};
