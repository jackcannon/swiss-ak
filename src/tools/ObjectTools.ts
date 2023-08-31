import { ObjOfType, OfType } from './types';

//<!-- DOCS: 110 -->
/**<!-- DOCS: ObjectTools ##! -->
 * ObjectTools
 *
 * A collection of functions for working with objects
 */
export namespace ObjectTools {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: ObjectTools.remodel ### @ -->
   * remodel
   *
   * - `ObjectTools.remodel`
   *
   * Apply a function to the entries of an object
   *
   * ```typescript
   * const input = {'foo': 2, 'bar': 1, 'baz': 4}
   * ObjectTools.remodel(input, (entries) => entries.filter(([k, v]) => v % 2 === 0)) // { foo: 2, baz: 4 }
   * ```
   * @param {T} obj
   * @param {(entries: [string, V][]) => [string, W][]} func
   * @returns {O}
   */
  export const remodel = <T extends Object = Object, V extends any = any, W extends any = any, O extends any = OfType<T, W>>(
    obj: T,
    func: (entries: [string, V][]) => [string, W][]
  ): O => Object.fromEntries(func(Object.entries(obj)) ?? Object.entries(obj)) as O;

  /**<!-- DOCS: ObjectTools.remodelEach ### @ -->
   * remodelEach
   *
   * - `ObjectTools.remodelEach`
   *
   * Apply a function to each of the entries of an object
   *
   * Note: similar to ObjectTools.map, but the function parameters are different. Prefer ObjectTools.map where possible.
   *
   * ```typescript
   * const input = {'foo': 2, 'bar': 1, 'baz': 4}
   * ObjectTools.remodelEach(input, ([k, v]) => [k, v * 2]) // { foo: 4, bar: 2, baz: 8 }
   * ```
   * @param {T} obj
   * @param {(entry: [string, V], index: number, entries: [string, V][]) => [string, W]} func
   * @returns {O}
   */
  export const remodelEach = <T extends Object = Object, V extends any = any, W extends any = any, O extends any = OfType<T, W>>(
    obj: T,
    func: (entry: [string, V], index: number, entries: [string, V][]) => [string, W]
  ): O => Object.fromEntries(Object.entries(obj).map((entry, index, entries) => func(entry, index, entries) ?? entry)) as O;

  /**<!-- DOCS: ObjectTools.map ### @ -->
   * map
   *
   * - `ObjectTools.map`
   *
   * Maps the keys and values of an object in a similar way to Array.map
   *
   * ```typescript
   * ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => [key, key + value]); // {a: 'a1', b: 'b2', c: 'c3'}
   * ```
   * @param {T} obj
   * @param {(key: string, value: V, index: number) => [string, W]} func
   * @returns {any}
   */
  export const map = <T extends Object, V extends any, W extends any>(
    obj: T,
    func: (key: string, value: V, index: number) => [string, W]
  ): OfType<T, W> => remodel(obj, (entries) => entries.map(([key, value], index) => func(key, value, index))) as OfType<T, W>;

  /**<!-- DOCS: ObjectTools.mapValues ### @ -->
   * mapValues
   *
   * - `ObjectTools.mapValues`
   *
   * Maps the values of an object in a similar way to Array.map
   *
   * ```typescript
   * ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
   * ```
   * @param {T} obj
   * @param {(key: string, value: V, index: number) => W} func
   * @returns {any}
   */
  export const mapValues = <T extends Object, V extends any, W extends any>(
    obj: T,
    func: (key: string, value: V, index: number) => W
  ): OfType<T, W> => remodel(obj, (entries) => entries.map(([key, value], index) => [key, func(key, value, index)])) as OfType<T, W>;

  /**<!-- DOCS: ObjectTools.mapKeys ### @ -->
   * mapKeys
   *
   * - `ObjectTools.mapKeys`
   *
   * Maps the values of an object in a similar way to Array.map
   *
   * ```typescript
   * ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
   * ```
   * @param {T} obj
   * @param {(key: string, value: V, index: number) => string} func
   * @returns {T}
   */
  export const mapKeys = <T extends Object, V extends any>(obj: T, func: (key: string, value: V, index: number) => string): T =>
    remodel(obj, (entries) => entries.map(([key, value], index) => [func(key, value, index), value])) as T;

  /**<!-- DOCS: ObjectTools.filter ### @ -->
   * filter
   *
   * - `ObjectTools.filter`
   *
   * Removes entries from an object based on a predicate function
   *
   * ```typescript
   * ObjectTools.filter({a: 1, b: 2, c: 3}, (k, v) => v % 2 === 0) // { b: 2 }
   * ```
   * @param {T} obj
   * @param {(key: string, value: V, index: number) => boolean} func
   * @returns {O}
   */
  export const filter = <T extends Object, V extends any, O extends Partial<T>>(obj: T, func: (key: string, value: V, index: number) => boolean): O =>
    remodel(obj, (entries) => entries.filter(([key, value], index) => func(key, value, index))) as O;

  /**<!-- DOCS: ObjectTools.clean ### @ -->
   * clean
   *
   * - `ObjectTools.clean`
   *
   * Removes properties with undefined values
   *
   * ```typescript
   * ObjectTools.clean({a: 1, b: undefined, c: 3}) // { a: 1, c: 3 }
   * ```
   * @param {T} obj
   * @returns {O}
   */
  export const clean = <T extends Object, O extends Partial<T>>(obj: T): O => filter(obj, (key, value) => value !== undefined) as O;

  /**<!-- DOCS: ObjectTools.invert ### @ -->
   * invert
   *
   * - `ObjectTools.invert`
   *
   * Inverts the keys and values of an object
   *
   * ```typescript
   * ObjectTools.invert({ a: 'foo', b: 'bar' }); // { foo: 'a', bar: 'b'}
   * ```
   * @param {Ti} obj
   * @returns {To}
   */
  export const invert = <Ti extends Object, To extends ObjOfType<string>>(obj: Ti): To =>
    remodelEach(obj, ([key, value]) => {
      const newKey = value?.toString?.() ?? value + '';
      return [newKey, key];
    });
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE
