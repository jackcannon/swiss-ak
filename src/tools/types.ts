//<!-- DOCS: 1000 -->
/**<!-- DOCS: types ##! -->
 * Helper Types
 *
 * Some commonly used types
 */

/**<!-- DOCS: types.Partial ### -->
 * Partial<T>
 *
 * - `Partial`
 *
 * Makes all properties in T optional.
 *
 * ```typescript
 * interface ITest {
 *   a: string,
 *   b: boolean
 * };
 * type PartialTest = Partial<ITest>; // { a?: string, b?: boolean }
 * ```
 */
export type Partial<T> = {
  [K in keyof T]?: T[K];
};

/**<!-- DOCS: types.KeysOnly ### -->
 * KeysOnly<T>
 *
 * - `KeysOnly`
 *
 * Makes all the values equal to the keys of T
 *
 * ```typescript
 * interface ITest {
 *   a: string,
 *   b: boolean
 * };
 * type KeysOnlyTest = KeysOnly<ITest>; // { a: 'a', b: 'b' }
 * ```
 */
export type KeysOnly<T> = {
  [K in keyof T]: K;
};

/**<!-- DOCS: types.Numbered ### -->
 * Numbered<T>
 *
 * - `Numbered`
 *
 * Makes all the values numbers
 *
 * ```typescript
 * interface ITest {
 *   a: string,
 *   b: boolean
 * };
 * type NumberedTest = Numbered<ITest>; // { a: number, b: number }
 * ```
 */
export type Numbered<T> = {
  [K in keyof T]: number;
};

/**<!-- DOCS: types.OfType ### -->
 * OfType<T, U>
 *
 * - `OfType`
 *
 * Makes all the properties of object T have type U
 */
export type OfType<T, U> = {
  [K in keyof T]: U;
};

/**<!-- DOCS: types.ObjOfType ### -->
 * ObjOfType<T>
 *
 * - `ObjOfType`
 *
 * An object with any properties of type T
 */
export type ObjOfType<T = string> = {
  [key: string]: T;
};

/**<!-- DOCS: types.RemapOf ### -->
 * RemapOf<O, T>
 *
 * - `RemapOf`
 *
 * Remap a given interface (O) with all properties of type T
 */
export type RemapOf<O = Object, T = string> = {
  [K in keyof O]: T;
};
