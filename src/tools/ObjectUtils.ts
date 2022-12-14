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
const map = <T extends Object, V extends any, W extends any>(obj: T, func: (key: string, value: V, index: number) => [string, W]): OfType<T, W> =>
  Object.fromEntries(Object.entries(obj).map(([key, value], index) => func(key, value, index))) as OfType<T, W>;

/**
 * ObjectUtils.mapValues
 *
 * Maps the values of an object in a similar way to Array.map
 *
 * ```typescript
 * ObjectUtils.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
 * ```
 */
const mapValues = <T extends Object, V extends any, W extends any>(obj: T, func: (key: string, value: V, index: number) => W): OfType<T, W> =>
  Object.fromEntries(Object.entries(obj).map(([key, value], index) => [key, func(key, value, index)])) as OfType<T, W>;

/**
 * ObjectUtils.mapKeys
 *
 * Maps the values of an object in a similar way to Array.map
 *
 * ```typescript
 * ObjectUtils.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
 * ```
 */
const mapKeys = <T extends Object, V extends any>(obj: T, func: (key: string, value: V, index: number) => string): T =>
  Object.fromEntries(Object.entries(obj).map(([key, value], index) => [func(key, value, index), value])) as T;

// TODO docs
const filter = <T extends Object, V extends any, O extends Partial<T>>(obj: T, func: (key: string, value: V, index: number) => boolean): O =>
  Object.fromEntries(Object.entries(obj).filter(([key, value], index) => func(key, value, index))) as O;

// TODO docs
// removes properties with undefined values
const clean = <T extends Object, O extends Partial<T>>(obj: T): O => filter(obj, (key, value) => value !== undefined) as O;

export const ObjectUtils = {
  map,
  mapValues,
  mapKeys,
  filter,
  clean
};
