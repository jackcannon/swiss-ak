//<!-- DOCS: 900 -->

/**<!-- DOCS: safe ##! -->
 * safe
 *
 * A series of simple functions for ensuring that a value is safe to use.
 *
 * Used internally for input validation.
 */
export namespace safe {
  /**<!-- DOCS: safe.num ### @ -->
   * num
   *
   * - `safe.num`
   *
   * Process a number value, ensuring that it is safe to use.
   *
   * ```typescript
   * safe.num(10); // 10
   * safe.num(10000); // 10000
   * safe.num(-1); // -1
   * safe.num(true); // 0
   * safe.num('123'); // 0
   * safe.num(NaN); // 0
   * safe.num(Infinity); // 0
   * safe.num(null); // 0
   * safe.num(undefined); // 0
   *
   * safe.num(10, true, 0, 100, 99); // 10
   * safe.num(10000, true, 0, 100, 99); // 100
   * safe.num(-1, true, 0, 100, 99); // 0
   * safe.num(true, true, 0, 100, 99); // 99
   * safe.num('123', true, 0, 100, 99); // 99
   * safe.num(NaN, true, 0, 100, 99); // 99
   * safe.num(Infinity, true, 0, 100, 99); // 100
   * safe.num(null, true, 0, 100, 99); // 99
   * safe.num(undefined, true, 0, 100, 99); // 99
   * ```
   */
  export const num = (input: number, isInt: boolean = false, min?: number, max?: number, fallback: number = 0): number => {
    let result = input;
    // if (typeof result === 'string' && !Number.isNaN(Number(result))) result = Number(result);
    if (typeof result !== 'number' || result === undefined || result === null) result = fallback;
    if (Number.isNaN(result)) result = fallback;
    if (isInt) result = Math.floor(result);
    if (min !== undefined && result < min) result = min;
    if (max !== undefined && result > max) result = max;
    if (Math.abs(result) === Infinity) result = fallback;
    return result;
  };

  /**<!-- DOCS: safe.str ### @ -->
   * str
   *
   * - `safe.str`
   *
   * Process a string value, ensuring that it is safe to use.
   *
   * ```typescript
   * safe.str('foo'); // 'foo'
   * safe.str(''); // ''
   * safe.str(123); // ''
   * safe.str(true); // ''
   * safe.str({foo: 'bar'}); // ''
   * safe.str([]); // ''
   * safe.str(null); // ''
   * safe.str(undefined); // ''
   *
   * safe.str('foo', true, 'bar'); // 'foo'
   * safe.str('', true, 'bar'); // ''
   * safe.str(123, true, 'bar'); // '123'
   * safe.str(true, true, 'bar'); // 'true'
   * safe.str({foo: 'bar'}, true, 'bar'); // 'bar'
   * safe.str([], true, 'bar'); // 'bar'
   * safe.str(null, true, 'bar'); // 'bar'
   * safe.str(undefined, true, 'bar'); // 'bar'
   * ```
   */
  export const str = (input: string, allowBasicStringify: boolean = false, fallback: string = ''): string => {
    let result = input;
    if (result === undefined || result === null) result = fallback;
    if (typeof result !== 'string') {
      if (allowBasicStringify) {
        if (['number', 'boolean', 'bigint'].includes(typeof result)) {
          result = result + '';
        } else if (['symbol'].includes(typeof result)) {
          result = (result as Symbol).toString?.();
        } else {
          result = fallback;
        }
      } else {
        result = fallback;
      }
    }
    return result;
  };

  /**<!-- DOCS: safe.bool ### @ -->
   * bool
   *
   * - `safe.bool`
   *
   * Process a boolean value, ensuring that it is safe to use.
   *
   * ```typescript
   * safe.bool(true); // true
   * safe.bool(false); // false
   * safe.bool(1); // true
   * safe.bool(0); // false
   * safe.bool(123); // false
   * safe.bool('true'); // true
   * safe.bool('false'); // false
   * safe.bool('foobar'); // false
   * safe.bool({foo: 'bar'}); // false
   * safe.bool([]); // false
   * safe.bool(null); // false
   * safe.bool(undefined); // false
   *
   * safe.bool(true, true); // true
   * safe.bool(false, true); // false
   * safe.bool(1, true); // true
   * safe.bool(0, true); // false
   * safe.bool(123, true); // true
   * safe.bool('true', true); // true
   * safe.bool('false', true); // false
   * safe.bool('foobar', true); // true
   * safe.bool({foo: 'bar'}, true); // true
   * safe.bool([], true); // true
   * safe.bool(null, true); // true
   * safe.bool(undefined, true); // true
   */
  export const bool = (input: boolean, fallback: boolean = false): boolean => {
    let result = input;
    if (result === undefined || result === null) result = fallback;
    if (typeof result !== 'boolean') {
      if (result === 'true' || result === 1) {
        result = true;
      } else if (result === 'false' || result === 0) {
        result = false;
      } else {
        result = fallback;
      }
    }
    return result;
  };

  /**<!-- DOCS: safe.func ### @ -->
   * func
   *
   * - `safe.func<T>`
   *
   * Process a function value, ensuring that it is safe to use.
   *
   * ```typescript
   * safe.func((p: number) => 123); // (p: number) => 123
   * safe.func(true); // (() => {})
   * safe.func(false); // (() => {})
   * safe.func(123); // (() => {})
   * safe.func('foobar'); // (() => {})
   * safe.func({foo: 'bar'}); // (() => {})
   * safe.func([1, 2, 3]); // (() => {})
   * safe.func(null); // (() => {})
   * safe.func(undefined); // (() => {})
   *
   * safe.func((p: number) => 123, (q: number) => 456); // (p: number) => 123
   * safe.func(true, (q: number) => 456); // (q: number) => 456
   * safe.func(false, (q: number) => 456); // (q: number) => 456
   * safe.func(123, (q: number) => 456); // (q: number) => 456
   * safe.func('foobar', (q: number) => 456); // (q: number) => 456
   * safe.func({foo: 'bar'}, (q: number) => 456); // (q: number) => 456
   * safe.func([1, 2, 3], (q: number) => 456); // (q: number) => 456
   * safe.func(null, (q: number) => 456); // (q: number) => 456
   * safe.func(undefined, (q: number) => 456); // (q: number) => 456
   * ```
   */
  export const func = <T extends Function>(input: T, fallback: T = (() => {}) as unknown as T): T => {
    let result = input;
    if (typeof result !== 'function' || result === undefined || result === null) result = fallback;
    return result;
  };

  /**<!-- DOCS: safe.obj ### @ -->
   * obj
   *
   * - `safe.obj<T>`
   *
   * Process an object value, ensuring that it is safe to use.
   *
   * ```typescript
   * safe.obj({foo: 'bar'}); // {foo: 'bar'}
   * safe.obj([1, 2, 3]); // [1, 2, 3]
   * safe.obj(true); // {}
   * safe.obj(false); // {}
   * safe.obj(123); // {}
   * safe.obj('foobar'); // {}
   * safe.obj(null); // {}
   * safe.obj(undefined); // {}
   *
   * safe.obj({foo: 'bar'}, {baz: 123}); // {foo: 'bar'}
   * safe.obj([1, 2, 3], {baz: 123}); // [1, 2, 3]
   * safe.obj(true, {baz: 123}); // {baz: 123}
   * safe.obj(false, {baz: 123}); // {baz: 123}
   * safe.obj(123, {baz: 123}); // {baz: 123}
   * safe.obj('foobar', {baz: 123}); // {baz: 123}
   * safe.obj(null, {baz: 123}); // {baz: 123}
   * safe.obj(undefined, {baz: 123}); // {baz: 123}
   * ```
   */
  export const obj = <T extends unknown>(input: T, fallback: T = {} as T): T => {
    let result = input;
    if (typeof result !== 'object' || result === undefined || result === null) result = fallback;
    return result;
  };

  /**<!-- DOCS: safe.arr ### @ -->
   * arr
   *
   * - `safe.arr<T>`
   *
   * Process an array value, ensuring that it is safe to use.
   *
   * ```typescript
   * safe.arr([1, 2, 3]); // [ 1, 2, 3 ]
   * safe.arr(true); // []
   * safe.arr(false); // []
   * safe.arr(123); // []
   * safe.arr('foobar'); // []
   * safe.arr({foo: 'bar'}); // []
   * safe.arr(null); // []
   * safe.arr(undefined); // []
   *
   * safe.arr([1, 2, 3], [4, 5, 6]); // [ 1, 2, 3 ]
   * safe.arr(true, [4, 5, 6]); // [ 4, 5, 6 ]
   * safe.arr(false, [4, 5, 6]); // [ 4, 5, 6 ]
   * safe.arr(123, [4, 5, 6]); // [ 4, 5, 6 ]
   * safe.arr('foobar', [4, 5, 6]); // [ 4, 5, 6 ]
   * safe.arr({foo: 'bar'}, [4, 5, 6]); // [ 4, 5, 6 ]
   * safe.arr(null, [4, 5, 6]); // [ 4, 5, 6 ]
   * safe.arr(undefined, [4, 5, 6]); // [ 4, 5, 6 ]
   * ```
   */
  export const arr = <T extends unknown>(input: T[], fallback: T[] = [], minLength: number = 0, maxLength: number = Infinity): T[] => {
    let result = input;
    if (result === undefined || result === null) result = fallback;
    if (!Array.isArray(result)) {
      const frommed = Array.from(result) as T[];
      if (!['string', 'number', 'boolean', 'bigint', 'symbol'].includes(typeof result) && Array.isArray(frommed) && frommed.length) {
        result = frommed;
      } else {
        result = fallback;
      }
    }
    if (result.length < minLength) result = [...result, ...fallback.slice(result.length)];
    if (result.length > maxLength) result = result.slice(0, maxLength);
    return result;
  };

  /**<!-- DOCS: safe.arrOf ### -->
   * arrOf
   *
   * A series of functions for processing arrays of values.
   */
  export namespace arrOf {
    /**<!-- DOCS: safe.arrOf.num #### @ -->
     * num
     *
     * - `safe.num`
     *
     * Process an array of numbers, ensuring that they are safe to use.
     *
     * ```typescript
     * safe.arrOf.num([1, 2, 3]); // [ 1, 2, 3 ]
     * safe.arrOf.num(['foo', 1, true, null, undefined, [], {}]); // [ 0, 1, 0, 0, 0, 0, 0 ]
     * safe.arrOf.num(true); // []
     * safe.arrOf.num(false); // []
     * safe.arrOf.num(123); // []
     * safe.arrOf.num('foobar'); // []
     * safe.arrOf.num({foo: 'bar'}); // []
     * safe.arrOf.num(null); // []
     * safe.arrOf.num(undefined); // []
     *
     * safe.arrOf.num([1, 2, 3], true, 0, 100, 99, [4, 5, 6]); // [ 1, 2, 3 ]
     * safe.arrOf.num(['foo', 1, true, null, undefined, [], {}], true, 0, 100, 99, [4, 5, 6]); // [ 99, 1, 99, 99, 99, 99, 99 ]
     * safe.arrOf.num(true, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arrOf.num(false, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arrOf.num(123, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arrOf.num('foobar', true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arrOf.num({foo: 'bar'}, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arrOf.num(null, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
     * safe.arrOf.num(undefined, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
     * ```
     */
    export const num = (
      input: number[],
      isInt: boolean = false,
      min?: number,
      max?: number,
      fallback?: number,
      fallbackArr: number[] = [],
      arrMinLength: number = 0,
      arrMaxLength: number = Infinity
    ): number[] => {
      const result = safe.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe.num(item, isInt, min, max, fallback));
    };

    /**<!-- DOCS: safe.arrOf.str #### @ -->
     * str
     *
     * - `safe.str`
     *
     * Process an array of strings, ensuring that they are safe to use.
     *
     * ```typescript
     * safe.arrOf.str(['foo', 'bar', 'baz']); // [ 'foo', 'bar', 'baz' ]
     * safe.arrOf.str(['foo', 1, true, null, undefined, [], {}]); // [ 'foo', '', '', '', '', '', '' ]
     * safe.arrOf.str(true); // []
     * safe.arrOf.str(false); // []
     * safe.arrOf.str(123); // []
     * safe.arrOf.str('foobar'); // []
     * safe.arrOf.str({foo: 'bar'}); // []
     * safe.arrOf.str(null); // []
     * safe.arrOf.str(undefined); // []
     *
     * safe.arrOf.str(['foo', 'bar', 'baz'], true, 'LOREM', ['IPSUM']); // [ 'foo', 'bar', 'baz' ]
     * safe.arrOf.str(['foo', 1, true, null, undefined, [], {}], true, 'LOREM', ['IPSUM']); // [ 'foo', '1', 'true', 'LOREM', 'LOREM', 'LOREM', 'LOREM' ]
     * safe.arrOf.str(true, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
     * safe.arrOf.str(false, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
     * safe.arrOf.str(123, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
     * safe.arrOf.str('foobar', true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
     * safe.arrOf.str({foo: 'bar'}, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
     * safe.arrOf.str(null, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
     * safe.arrOf.str(undefined, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
     * ```
     */
    export const str = (
      input: string[],
      allowStringify: boolean = false,
      fallback?: string,
      fallbackArr: string[] = [],
      arrMinLength: number = 0,
      arrMaxLength: number = Infinity
    ): string[] => {
      const result = safe.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe.str(item, allowStringify, fallback));
    };

    /**<!-- DOCS: safe.arrOf.bool #### @ -->
     * bool
     *
     * - `safe.bool`
     *
     * Process an array of booleans, ensuring that they are safe to use.
     *
     * ```typescript
     * safe.arrOf.bool([false, true, false]); // [ false, true, false ]
     * safe.arrOf.bool(['foo', 123, true, null, undefined, [], {}]); // [ false, false, true, false, false, false, false ]
     * safe.arrOf.bool(true); // []
     * safe.arrOf.bool(false); // []
     * safe.arrOf.bool(123); // []
     * safe.arrOf.bool('foobar'); // []
     * safe.arrOf.bool({foo: 'bar'}); // []
     * safe.arrOf.bool(null); // []
     * safe.arrOf.bool(undefined); // []
     *
     * safe.arrOf.bool([false, true, false], true, [true, true]); // [ false, true, false ]
     * safe.arrOf.bool(['foo', 123, true, null, undefined, [], {}], true, [true, true]); // [ true, true, true, true, true, true, true ]
     * safe.arrOf.bool(true, true, [true, true]); // [ true, true ]
     * safe.arrOf.bool(false, true, [true, true]); // [ true, true ]
     * safe.arrOf.bool(123, true, [true, true]); // [ true, true ]
     * safe.arrOf.bool('foobar', true, [true, true]); // [ true, true ]
     * safe.arrOf.bool({foo: 'bar'}, true, [true, true]); // [ true, true ]
     * safe.arrOf.bool(null, true, [true, true]); // [ true, true ]
     * safe.arrOf.bool(undefined, true, [true, true]); // [ true, true ]
     * ```
     */
    export const bool = (
      input: boolean[],
      fallback?: boolean,
      fallbackArr: boolean[] = [],
      arrMinLength: number = 0,
      arrMaxLength: number = Infinity
    ): boolean[] => {
      const result = safe.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe.bool(item, fallback));
    };

    /**<!-- DOCS: safe.arrOf.func #### @ -->
     * func
     *
     * - `safe.func<T>`
     *
     * Process an array of functions, ensuring that they are safe to use.
     *
     * ```typescript
     * safe.arrOf.func([(p) => 1]); // [(p) => 1]
     * safe.arrOf.func(['foo', 1, true, null, undefined, [], {}]); // [() => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}]
     * safe.arrOf.func(true); // []
     * safe.arrOf.func(false); // []
     * safe.arrOf.func(123); // []
     * safe.arrOf.func('foobar'); // []
     * safe.arrOf.func({foo: 'bar'}); // []
     * safe.arrOf.func(null); // []
     * safe.arrOf.func(undefined); // []
     *
     * safe.arrOf.func([(p) => 1], (q) => 2, [(r) => 3]); // [(p) => 1]
     * safe.arrOf.func(['foo', 1, true, null, undefined, [], {}], (q) => 2, [(r) => 3]); // [(q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2]
     * safe.arrOf.func(true, (q) => 2, [(r) => 3]); //  [(r) => 3]
     * safe.arrOf.func(false, (q) => 2, [(r) => 3]); //  [(r) => 3]
     * safe.arrOf.func(123, (q) => 2, [(r) => 3]); //  [(r) => 3]
     * safe.arrOf.func('foobar', (q) => 2, [(r) => 3]); //  [(r) => 3]
     * safe.arrOf.func({foo: 'bar'}, (q) => 2, [(r) => 3]); //  [(r) => 3]
     * safe.arrOf.func(null, (q) => 2, [(r) => 3]); //  [(r) => 3]
     * safe.arrOf.func(undefined, (q) => 2, [(r) => 3]); //  [(r) => 3]
     * ```
     */
    export const func = <T extends Function>(
      input: T[],
      fallback?: T,
      fallbackArr: T[] = [],
      arrMinLength: number = 0,
      arrMaxLength: number = Infinity
    ): T[] => {
      const result = safe.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe.func(item, fallback));
    };

    /**<!-- DOCS: safe.arrOf.obj #### @ -->
     * obj
     *
     * - `safe.obj<T>`
     *
     * Process an array of objects, ensuring that they are safe to use.
     *
     * ```typescript
     * safe.arrOf.obj([{foo: 1}, {bar: 2}]); // [ { foo: 1 }, { bar: 2 } ]
     * safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}]); // [ {}, {}, {}, {}, {}, [], {} ]
     * safe.arrOf.obj(true); // []
     * safe.arrOf.obj(false); // []
     * safe.arrOf.obj(123); // []
     * safe.arrOf.obj('foobar'); // []
     * safe.arrOf.obj({foo: 'bar'}); // []
     * safe.arrOf.obj(null); // []
     * safe.arrOf.obj(undefined); // []
     *
     * safe.arrOf.obj([{foo: 1}, {bar: 2}], {l: 3}, [{i: 4}]); // [ { foo: 1 }, { bar: 2 } ]
     * safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}], {l: 3}, [{i: 4}]); // [ { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, [], { } ]
     * safe.arrOf.obj(true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
     * safe.arrOf.obj(false, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
     * safe.arrOf.obj(123, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
     * safe.arrOf.obj('foobar', {l: 3}, [{i: 4}]); // [ { i: 4 } ]
     * safe.arrOf.obj({foo: 'bar'}, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
     * safe.arrOf.obj(null, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
     * safe.arrOf.obj(undefined, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
     * ```
     */
    export const obj = <T extends unknown>(
      input: T[],
      fallback?: T,
      fallbackArr: T[] = [],
      arrMinLength: number = 0,
      arrMaxLength: number = Infinity
    ): T[] => {
      const result = safe.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe.obj(item, fallback));
    };

    /**<!-- DOCS: safe.arrOf.arr #### @ -->
     * arr
     *
     * - `safe.arr<T>`
     *
     * Process an array of arrays, ensuring that they are safe to use.
     *
     * ```typescript
     * safe.arrOf.arr([['foo'], ['bar']]); // [ [ 'foo' ], [ 'bar' ] ]
     * safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}]); // [ [], [], [], [], [], [], [] ]
     * safe.arrOf.arr(true); // []
     * safe.arrOf.arr(false); // []
     * safe.arrOf.arr(123); // []
     * safe.arrOf.arr('foobar'); // []
     * safe.arrOf.arr({foo: 'bar'}); // []
     * safe.arrOf.arr(null); // []
     * safe.arrOf.arr(undefined); // []
     *
     * safe.arrOf.arr([['foo'], ['bar']], ['baz'], [['IPSUM']]); // [ [ 'foo' ], [ 'bar' ] ]
     * safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}], ['baz'], [['IPSUM']]); // [ [ 'baz' ], [ 'baz' ], [ 'baz' ], [ 'baz' ], [ 'baz' ], [], [ 'baz' ] ]
     * safe.arrOf.arr(true, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
     * safe.arrOf.arr(false, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
     * safe.arrOf.arr(123, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
     * safe.arrOf.arr('foobar', ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
     * safe.arrOf.arr({foo: 'bar'}, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
     * safe.arrOf.arr(null, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
     * safe.arrOf.arr(undefined, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
     * ```
     */
    export const arr = <T extends unknown>(
      input: T[][],
      fallback?: T[],
      fallbackArr: T[][] = [],
      arrMinLength: number = 0,
      arrMaxLength: number = Infinity
    ): T[][] => {
      const result = safe.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe.arr(item, fallback));
    };
  }
}
