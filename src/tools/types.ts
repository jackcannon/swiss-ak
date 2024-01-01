//<!-- DOCS: 1000 -->
/**<!-- DOCS: types ##! -->
 * Types
 *
 * Some commonly used typescript types
 */

/**<!-- DOCS: types.Partial ### -->
 * Partial<T>
 *
 * - `Partial<T>`
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
 * - `KeysOnly<T>`
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
 * - `Numbered<T>`
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
 * OfType<O, T>
 *
 * - `OfType<O, T>`
 *
 * Makes all the properties of object O have type T
 *
 * > **Note:** This is the same as `RemapOf<O, T>`
 *
 * ```typescript
 * interface IExample {
 *   a: string;
 *   b: boolean;
 * }
 * OfType<IExample, number>; // { a: number; b: number; }
 * ```
 */
export type OfType<O, T> = {
  [K in keyof O]: T;
};

/**<!-- DOCS: types.ObjOfType ### -->
 * ObjOfType<T>
 *
 * - `ObjOfType<T>`
 *
 * An object with any properties of type T
 *
 * ```typescript
 * type Example = [number, number];
 * ObjOfType<Example>; // { [key: string]: Example; }
 * ```
 */
export type ObjOfType<T = string> = {
  [key: string]: T;
};

/**<!-- DOCS: types.RemapOf ### -->
 * RemapOf<O, T>
 *
 * - `RemapOf<O, T>`
 *
 * Remap a given interface (O) with all properties of type T
 *
 * > **Note:** This is the same as `OfType<O, T>`
 *
 * ```typescript
 * interface IExample {
 *   a: string;
 *   b: boolean;
 * }
 * RemapOf<IExample, number>; // { a: number; b: number; }
 * ```
 */
export type RemapOf<O = {}, T = string> = {
  [K in keyof O]: T;
};
