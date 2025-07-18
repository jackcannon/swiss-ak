import { safe } from './safe';
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
   * @param {T} obj - Object to remodel
   * @param {(entries: [string, V][]) => [string, W][]} func - Function to apply to the entries array
   * @returns {O} - Remodeled object
   */
  export const remodel = <T extends object, V = any, W = any, O = OfType<T, W>>(obj: T, func: (entries: [string, V][]) => [string, W][]): O => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (entries: [string, V][]) => entries as unknown as [string, W][])
    };
    return Object.fromEntries(args.func(Object.entries(args.obj)) ?? Object.entries(args.obj)) as O;
  };

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
   * @param {T} obj - Object to remodel
   * @param {(entry: [string, Vi], index: number, entries: [string, Vi][]) => [string, Vo]} func - Function to apply to each of the entries
   * @returns {O} - Remodeled object
   */
  export const remodelEach = <T extends object, Vi = any, Vo = any, O = OfType<T, Vo>>(
    obj: T,
    func: (entry: [string, Vi], index: number, entries: [string, Vi][]) => [string, Vo]
  ): O => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (entry) => entry as unknown as [string, Vo])
    };
    return Object.fromEntries(Object.entries(args.obj).map((entry, index, entries) => args.func(entry, index, entries) ?? entry)) as O;
  };

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
   * @param {T} obj - Object to map
   * @param {(key: string, value: Vi, index: number) => [string, Vo]} func - Function to apply to each of the entries
   * @returns {any} - Mapped object
   */
  export const map = <T extends object, Vi, Vo>(obj: T, func: (key: string, value: Vi, index: number) => [string, Vo]): OfType<T, Vo> => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (key, value) => [key, value] as unknown as [string, Vo])
    };
    return remodel(args.obj, (entries) => entries.map(([key, value], index) => args.func(key, value, index))) as OfType<T, Vo>;
  };

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
   * @param {T} obj - Object to map
   * @param {(key: string, value: Vi, index: number) => Vo} func - Function to apply to each of the entries
   * @returns {any} - Mapped object
   */
  export const mapValues = <T extends object, Vi, Vo>(obj: T, func: (key: string, value: Vi, index: number) => Vo): OfType<T, Vo> => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (key, value) => value as unknown as Vo)
    };
    return remodel(args.obj, (entries) => entries.map(([key, value], index) => [key, args.func(key, value, index)])) as OfType<T, Vo>;
  };

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
   * @param {T} obj - Object to map
   * @param {(key: string, value: V, index: number) => string} func - Function to apply to each of the entries
   * @returns {T} - Mapped object
   */
  export const mapKeys = <T extends object, V>(obj: T, func: (key: string, value: V, index: number) => string): T => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (key) => key)
    };
    return remodel(args.obj, (entries) => entries.map(([key, value], index) => [args.func(key, value, index), value])) as T;
  };

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
   * @param {T} obj - Object to filter
   * @param {(key: string, value: V, index: number) => boolean} func - Function to apply to each of the entries
   * @returns {O} - Filtered object
   */
  export const filter = <T extends object, V, O extends Partial<T>>(obj: T, func: (key: string, value: V, index: number) => boolean): O => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, () => true)
    };
    return remodel(args.obj, (entries) => entries.filter(([key, value], index) => args.func(key, value, index))) as O;
  };

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
   * @param {T} obj - Object to clean
   * @returns {O} - Cleaned object
   */
  export const clean = <T extends object, O extends Partial<T>>(obj: T): O => {
    const args = {
      obj: safe.obj(obj)
    };
    return filter(args.obj, (key, value) => value !== undefined) as O;
  };

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
   * @param {T} obj - Object to invert
   * @returns {O} - Inverted object
   */
  export const invert = <T extends object, O extends ObjOfType<string>>(obj: T): O => {
    const args = {
      obj: safe.obj(obj)
    };
    return remodelEach(args.obj, ([key, value]) => {
      const newKey = value?.toString?.() ?? value + '';
      return [newKey, key];
    });
  };
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE
