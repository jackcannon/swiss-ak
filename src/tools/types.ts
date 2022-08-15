/**
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

/**
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

/**
 * Makes all the values numbers
 *
 * ```typescript
 * interface ITest {
 *   a: string,
 *   b: boolean
 * };
 * type NumberedTest = Numbered<ITest>; // { a: number, b: number }
 */
export type Numbered<T> = {
  [K in keyof T]: number;
};
