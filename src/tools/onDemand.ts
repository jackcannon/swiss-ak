//<!-- DOCS: 620 -->

import { safe } from './safe';

/**<!-- DOCS: onDemand ##! @ -->
 * onDemand
 *
 * - `onDemand<T>`
 *
 * A way of deferring the evaluation of object properties until they are accessed.
 *
 * Provide it with an object where the values are either raw values or functions that return the value, and it will give you back a new object where the values are only evaluated when accessed.
 *
 * ```typescript
 * const demanded = onDemand({
 *   name: () => 'foo',
 *   random: () => Math.floor(Math.random() * 1000),
 *   data: () => ({lorem: 'ipsum'}),
 *   func: () => {
 *     const randomLetter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
 *     return () => {
 *       const randomLetter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
 *       return `${randomLetter1}-${randomLetter2}`;
 *     }
 *   },
 *   age: 30
 * });
 *
 * // access a value
 * demanded.name; // 'foo'
 *
 * // overwrite a value
 * demanded.name = 'bar';
 * demanded.name; // 'bar'
 *
 * // getters are cached, so only execute once, and always return the same value
 * demanded.random // 701
 * demanded.random // 701
 * demanded.data === demanded.data // true
 *
 * // getters can return functions
 * demanded.func(); // 'J-A'
 * demanded.func(); // 'J-M'
 * demanded.func(); // 'J-K'
 * demanded.func(); // 'J-S'
 *
 * // You can also just provide raw values without needing a getter
 * demanded.age; // 30
 *
 * type Example = typeof demanded; // {
 *   //  name: string;
 *   //  random: number;
 *   //  data: {
 *   //      lorem: string;
 *   //  };
 *   //  func: () => string;
 *   //  age: number;
 *   //}
 * ```
 * @param {OnDemandInputObject<T>} input
 * @returns {T}
 */
export const onDemand = <T extends Record<string, any>>(input: OnDemandInputObject<T>): T => {
  const args = {
    input: safe.obj(input, true, {} as T)
  };

  const result = {} as T;
  const cache = {};
  const keys = Object.keys(args.input);

  const get = (key) => () => {
    if (cache[key]) return cache[key];
    const func = args.input[key];
    const r = typeof func === 'function' ? func() : func;
    cache[key] = r;
    return r;
  };

  const set = (key) => (value) => (cache[key] = value);

  for (let key of keys) {
    Object.defineProperty(result, key, {
      enumerable: true,
      get: get(key),
      set: set(key)
    });
  }
  return result;
};

/**<!-- DOCS: onDemand.OnDemandInputObject ### -->
 * OnDemandInputObject
 *
 * - `OnDemandInputObject<T>`
 *
 * A type that takes an object and makes all the values either functions that return the value, or the value itself.
 *
 * Input type for the `onDemand` function.
 */
type OnDemandInputObject<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer R ? () => T[K] : (() => T[K]) | T[K];
};
