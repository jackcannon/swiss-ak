//<!-- DOCS: 120 -->

export type ClxType = string | boolean | { [key: string]: boolean } | ClxType[];

/**<!-- DOCS: StringTools ## -->
 * StringTools
 *
 * A collection of string utilities
 */
export namespace StringTools {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: StringTools.capitalise ### -->
   * capitalise
   *
   * - `StringTools.capitalise`
   *
   * Capitalises the first letter of each word in a string
   *
   * ```typescript
   * StringTools.capitalise('hello world'); // 'Hello World'
   * ```
   */
  export const capitalise = (input: string = '') =>
    (input || '')
      .split(/\s/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

  /**<!-- DOCS: StringTools.angloise ### -->
   * angloise
   *
   * - `StringTools.angloise`
   *
   * Remove accents from a string
   *
   * ```typescript
   * StringTools.angloise('éèêë'); // 'eeee'
   * ```
   */
  export const angloise = (input: string): string => input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  /**<!-- DOCS: StringTools.clean ### -->
   * clean
   *
   * - `StringTools.clean`
   *
   * Remove accents and non alphanumerics from a string
   *
   * ```typescript
   * StringTools.clean('éèêë_--ab0'); // 'eeeeab0'
   * ```
   */
  export const clean = (input: string = ''): string =>
    angloise([input].flat().join(' '))
      .replace(/\s{1,}/g, ' ')
      .replace(/[^A-Za-z0-9 ]/gi, '');

  /**<!-- DOCS: StringTools.repeat ### -->
   * repeat
   *
   * - `StringTools.repeat`
   *
   * Repeat the given string n times
   *
   * ```typescript
   * StringTools.repeat(5, '-') // '-----'
   * StringTools.repeat(1, '-') // '-'
   * StringTools.repeat(0, '-') // ''
   * StringTools.repeat(-1, '-') // ''
   * ```
   */
  export const repeat = (maxLength: number, repeated: string) =>
    (repeated && typeof repeated === 'string' ? repeated : '').repeat(Math.max(0, maxLength));

  export type CaseInput = string | string[];
  type SplittingFn = (input: CaseInput) => string[];

  /**<!-- DOCS: StringTools.StringCaseHandler ### -->
   * StringCaseHandler
   */
  export interface StringCaseHandler {
    /**<!-- DOCS: StringTools.toLowerCamelCase #### -->
     * toLowerCamelCase
     *
     * - `StringTools.toLowerCamelCase`
     * - `StringTools.fromSlugCase.toLowerCamelCase`
     * - `StringTools.fromSnakeCase.toLowerCamelCase`
     * - `StringTools.fromSpaced.toLowerCamelCase`
     * - `StringTools.fromCamelCase.toLowerCamelCase`
     *
     * Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)
     */
    toLowerCamelCase(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toUpperCamelCase #### -->
     * toUpperCamelCase
     *
     * - `StringTools.toUpperCamelCase`
     * - `StringTools.fromSlugCase.toUpperCamelCase`
     * - `StringTools.fromSnakeCase.toUpperCamelCase`
     * - `StringTools.fromSpaced.toUpperCamelCase`
     * - `StringTools.fromCamelCase.toUpperCamelCase`
     *
     * Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)
     */
    toUpperCamelCase(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toCamelCase #### -->
     * toCamelCase
     *
     * - `StringTools.toCamelCase`
     * - `StringTools.fromSlugCase.toCamelCase`
     * - `StringTools.fromSnakeCase.toCamelCase`
     * - `StringTools.fromSpaced.toCamelCase`
     * - `StringTools.fromCamelCase.toCamelCase`
     *
     * Convert a string to camel case (e.g. `thisIsCamelCase`)
     */
    toCamelCase(input: CaseInput, capitaliseFirst?: boolean): string;

    /**<!-- DOCS: StringTools.toLowerSlugCase #### -->
     * toLowerSlugCase
     *
     * - `StringTools.toLowerSlugCase`
     * - `StringTools.fromSlugCase.toLowerSlugCase`
     * - `StringTools.fromSnakeCase.toLowerSlugCase`
     * - `StringTools.fromSpaced.toLowerSlugCase`
     * - `StringTools.fromCamelCase.toLowerSlugCase`
     *
     * Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)
     */
    toLowerSlugCase(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toUpperSlugCase #### -->
     * toUpperSlugCase
     *
     * - `StringTools.toUpperSlugCase`
     * - `StringTools.fromSlugCase.toUpperSlugCase`
     * - `StringTools.fromSnakeCase.toUpperSlugCase`
     * - `StringTools.fromSpaced.toUpperSlugCase`
     * - `StringTools.fromCamelCase.toUpperSlugCase`
     *
     * Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)
     */
    toUpperSlugCase(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toSlugCase #### -->
     * toSlugCase
     *
     * - `StringTools.toSlugCase`
     * - `StringTools.fromSlugCase.toSlugCase`
     * - `StringTools.fromSnakeCase.toSlugCase`
     * - `StringTools.fromSpaced.toSlugCase`
     * - `StringTools.fromCamelCase.toSlugCase`
     *
     * Convert a string to camel case (e.g. `this-is-slug-case`)
     */
    toSlugCase(input: CaseInput, toUpper?: boolean): string;

    /**<!-- DOCS: StringTools.toLowerSnakeCase #### -->
     * toLowerSnakeCase
     *
     * - `StringTools.toLowerSnakeCase`
     * - `StringTools.fromSlugCase.toLowerSnakeCase`
     * - `StringTools.fromSnakeCase.toLowerSnakeCase`
     * - `StringTools.fromSpaced.toLowerSnakeCase`
     * - `StringTools.fromCamelCase.toLowerSnakeCase`
     *
     * Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)
     */
    toLowerSnakeCase(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toUpperSnakeCase #### -->
     * toUpperSnakeCase
     *
     * - `StringTools.toUpperSnakeCase`
     * - `StringTools.fromSlugCase.toUpperSnakeCase`
     * - `StringTools.fromSnakeCase.toUpperSnakeCase`
     * - `StringTools.fromSpaced.toUpperSnakeCase`
     * - `StringTools.fromCamelCase.toUpperSnakeCase`
     *
     * Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)
     */
    toUpperSnakeCase(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toSnakeCase #### -->
     * toSnakeCase
     *
     * - `StringTools.toSnakeCase`
     * - `StringTools.fromSlugCase.toSnakeCase`
     * - `StringTools.fromSnakeCase.toSnakeCase`
     * - `StringTools.fromSpaced.toSnakeCase`
     * - `StringTools.fromCamelCase.toSnakeCase`
     *
     * Convert a string to snake case (e.g. `this_is_snake_case`)
     */
    toSnakeCase(input: CaseInput, toUpper?: boolean): string;

    /**<!-- DOCS: StringTools.toLowerSpaced #### -->
     * toLowerSpaced
     *
     * - `StringTools.toLowerSpaced`
     * - `StringTools.fromSlugCase.toLowerSpaced`
     * - `StringTools.fromSnakeCase.toLowerSpaced`
     * - `StringTools.fromSpaced.toLowerSpaced`
     * - `StringTools.fromCamelCase.toLowerSpaced`
     *
     * Convert a string to lower spaced case (e.g. `this is lower spaced case`)
     */
    toLowerSpaced(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toUpperSpaced #### -->
     * toUpperSpaced
     *
     * - `StringTools.toUpperSpaced`
     * - `StringTools.fromSlugCase.toUpperSpaced`
     * - `StringTools.fromSnakeCase.toUpperSpaced`
     * - `StringTools.fromSpaced.toUpperSpaced`
     * - `StringTools.fromCamelCase.toUpperSpaced`
     *
     * Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)
     */
    toUpperSpaced(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toCapitalisedSpaced #### -->
     * toCapitalisedSpaced
     *
     * - `StringTools.toCapitalisedSpaced`
     * - `StringTools.fromSlugCase.toCapitalisedSpaced`
     * - `StringTools.fromSnakeCase.toCapitalisedSpaced`
     * - `StringTools.fromSpaced.toCapitalisedSpaced`
     * - `StringTools.fromCamelCase.toCapitalisedSpaced`
     *
     * Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)
     */
    toCapitalisedSpaced(input: CaseInput): string;
    /**<!-- DOCS: StringTools.toSpaced #### -->
     * toSpaced
     *
     * - `StringTools.toSpaced`
     * - `StringTools.fromSlugCase.toSpaced`
     * - `StringTools.fromSnakeCase.toSpaced`
     * - `StringTools.fromSpaced.toSpaced`
     * - `StringTools.fromCamelCase.toSpaced`
     *
     * Convert a string to spaced case (e.g. `this is spaced case`)
     */
    toSpaced(input: CaseInput, toUpper?: boolean): string;

    /**<!-- DOCS: StringTools.toCharacterSeparated #### -->
     * toCharacterSeparated
     *
     * - `StringTools.toCharacterSeparated`
     * - `StringTools.fromSlugCase.toCharacterSeparated`
     * - `StringTools.fromSnakeCase.toCharacterSeparated`
     * - `StringTools.fromSpaced.toCharacterSeparated`
     * - `StringTools.fromCamelCase.toCharacterSeparated`
     *
     * Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)
     */
    toCharacterSeparated(input: CaseInput, char: string, toUpper?: boolean): string;
  }
  const caseHandler = (overrideSplitter?: SplittingFn): StringCaseHandler => {
    const getSplit: SplittingFn = (input: CaseInput = ''): string[] => {
      if (overrideSplitter) return overrideSplitter(input);
      const arr = [input].flat();
      return arr
        .map((s) => clean(s.replace(/-|_/g, ' ')).split(' '))
        .flat()
        .filter((s) => s.length);
    };

    const toCamelCase = (input: CaseInput, capitaliseFirst: boolean = false): string => {
      const split = getSplit(input);
      return split.map((word, index) => (index === 0 && !capitaliseFirst ? word.toLowerCase() : capitalise(word))).join('');
    };
    const toLowerCamelCase = (input: CaseInput): string => toCamelCase(input, false);
    const toUpperCamelCase = (input: CaseInput): string => toCamelCase(input, true);

    const toCharacterSeparated = (input: CaseInput, char: string, toUpper: boolean = false) => {
      const split = getSplit(input);
      return split.map((word, index) => (toUpper ? word.toUpperCase() : word.toLowerCase())).join(char);
    };

    const toSlugCase = (input: CaseInput, toUpper: boolean = false): string => toCharacterSeparated(input, '-', toUpper);
    const toLowerSlugCase = (input: CaseInput): string => toSlugCase(input, false);
    const toUpperSlugCase = (input: CaseInput): string => toSlugCase(input, true);

    const toSnakeCase = (input: CaseInput, toUpper: boolean = false): string => toCharacterSeparated(input, '_', toUpper);
    const toLowerSnakeCase = (input: CaseInput): string => toSnakeCase(input, false);
    const toUpperSnakeCase = (input: CaseInput): string => toSnakeCase(input, true);

    const toSpaced = (input: CaseInput, toUpper: boolean = false): string => toCharacterSeparated(input, ' ', toUpper);
    const toLowerSpaced = (input: CaseInput): string => toSpaced(input, false);
    const toUpperSpaced = (input: CaseInput): string => toSpaced(input, true);
    const toCapitalisedSpaced = (input: CaseInput): string => capitalise(toSpaced(input, false));

    return {
      toLowerCamelCase,
      toUpperCamelCase,
      toCamelCase,

      toLowerSlugCase,
      toUpperSlugCase,
      toSlugCase,

      toLowerSnakeCase,
      toUpperSnakeCase,
      toSnakeCase,

      toLowerSpaced,
      toUpperSpaced,
      toCapitalisedSpaced,
      toSpaced,

      toCharacterSeparated
    };
  };

  const standardCaseHandler = caseHandler();
  export const {
    /** <!-- DOCS-ALIAS: StringTools.toLowerCamelCase  --> */
    toLowerCamelCase,
    /** <!-- DOCS-ALIAS: StringTools.toUpperCamelCase  --> */
    toUpperCamelCase,
    /** <!-- DOCS-ALIAS: StringTools.toCamelCase  --> */
    toCamelCase,

    /** <!-- DOCS-ALIAS: StringTools.toLowerSlugCase  --> */
    toLowerSlugCase,
    /** <!-- DOCS-ALIAS: StringTools.toUpperSlugCase  --> */
    toUpperSlugCase,
    /** <!-- DOCS-ALIAS: StringTools.toSlugCase  --> */
    toSlugCase,

    /** <!-- DOCS-ALIAS: StringTools.toLowerSnakeCase  --> */
    toLowerSnakeCase,
    /** <!-- DOCS-ALIAS: StringTools.toUpperSnakeCase  --> */
    toUpperSnakeCase,
    /** <!-- DOCS-ALIAS: StringTools.toSnakeCase  --> */
    toSnakeCase,

    /** <!-- DOCS-ALIAS: StringTools.toLowerSpaced  --> */
    toLowerSpaced,
    /** <!-- DOCS-ALIAS: StringTools.toUpperSpaced  --> */
    toUpperSpaced,
    /** <!-- DOCS-ALIAS: StringTools.toCapitalisedSpaced  --> */
    toCapitalisedSpaced,
    /** <!-- DOCS-ALIAS: StringTools.toSpaced  --> */
    toSpaced,

    /** <!-- DOCS-ALIAS: StringTools.toCharacterSeparated  --> */
    toCharacterSeparated
  } = standardCaseHandler;

  /**<!-- DOCS: StringTools.fromSlugCase ### -->
   * fromSlugCase
   *
   * Has the following methods:
   * - `StringTools.fromSlugCase.toLowerCamelCase`
   * - `StringTools.fromSlugCase.toUpperCamelCase`
   * - `StringTools.fromSlugCase.toCamelCase`
   * - `StringTools.fromSlugCase.toLowerSlugCase`
   * - `StringTools.fromSlugCase.toUpperSlugCase`
   * - `StringTools.fromSlugCase.toSlugCase`
   * - `StringTools.fromSlugCase.toLowerSnakeCase`
   * - `StringTools.fromSlugCase.toUpperSnakeCase`
   * - `StringTools.fromSlugCase.toSnakeCase`
   * - `StringTools.fromSlugCase.toLowerSpaced`
   * - `StringTools.fromSlugCase.toUpperSpaced`
   * - `StringTools.fromSlugCase.toCapitalisedSpaced`
   * - `StringTools.fromSlugCase.toSpaced`
   * - `StringTools.fromSlugCase.toCharacterSeparated`
   */
  export const fromSlugCase = standardCaseHandler;

  /**<!-- DOCS: StringTools.fromSnakeCase ### -->
   * fromSnakeCase
   *
   * Has the following methods:
   * - `StringTools.fromSnakeCase.toLowerCamelCase`
   * - `StringTools.fromSnakeCase.toUpperCamelCase`
   * - `StringTools.fromSnakeCase.toCamelCase`
   * - `StringTools.fromSnakeCase.toLowerSlugCase`
   * - `StringTools.fromSnakeCase.toUpperSlugCase`
   * - `StringTools.fromSnakeCase.toSlugCase`
   * - `StringTools.fromSnakeCase.toLowerSnakeCase`
   * - `StringTools.fromSnakeCase.toUpperSnakeCase`
   * - `StringTools.fromSnakeCase.toSnakeCase`
   * - `StringTools.fromSnakeCase.toLowerSpaced`
   * - `StringTools.fromSnakeCase.toUpperSpaced`
   * - `StringTools.fromSnakeCase.toCapitalisedSpaced`
   * - `StringTools.fromSnakeCase.toSpaced`
   * - `StringTools.fromSnakeCase.toCharacterSeparated`
   */
  export const fromSnakeCase = standardCaseHandler;

  /**<!-- DOCS: StringTools.fromSpaced ### -->
   * fromSpaced
   *
   * Has the following methods:
   * - `StringTools.fromSpaced.toLowerCamelCase`
   * - `StringTools.fromSpaced.toUpperCamelCase`
   * - `StringTools.fromSpaced.toCamelCase`
   * - `StringTools.fromSpaced.toLowerSlugCase`
   * - `StringTools.fromSpaced.toUpperSlugCase`
   * - `StringTools.fromSpaced.toSlugCase`
   * - `StringTools.fromSpaced.toLowerSnakeCase`
   * - `StringTools.fromSpaced.toUpperSnakeCase`
   * - `StringTools.fromSpaced.toSnakeCase`
   * - `StringTools.fromSpaced.toLowerSpaced`
   * - `StringTools.fromSpaced.toUpperSpaced`
   * - `StringTools.fromSpaced.toCapitalisedSpaced`
   * - `StringTools.fromSpaced.toSpaced`
   * - `StringTools.fromSpaced.toCharacterSeparated`
   */
  export const fromSpaced = standardCaseHandler;

  /**<!-- DOCS: StringTools.fromCamelCase ### -->
   * fromCamelCase
   *
   * Has the following methods:
   * - `StringTools.fromCamelCase.toLowerCamelCase`
   * - `StringTools.fromCamelCase.toUpperCamelCase`
   * - `StringTools.fromCamelCase.toCamelCase`
   * - `StringTools.fromCamelCase.toLowerSlugCase`
   * - `StringTools.fromCamelCase.toUpperSlugCase`
   * - `StringTools.fromCamelCase.toSlugCase`
   * - `StringTools.fromCamelCase.toLowerSnakeCase`
   * - `StringTools.fromCamelCase.toUpperSnakeCase`
   * - `StringTools.fromCamelCase.toSnakeCase`
   * - `StringTools.fromCamelCase.toLowerSpaced`
   * - `StringTools.fromCamelCase.toUpperSpaced`
   * - `StringTools.fromCamelCase.toCapitalisedSpaced`
   * - `StringTools.fromCamelCase.toSpaced`
   * - `StringTools.fromCamelCase.toCharacterSeparated`
   */
  export const fromCamelCase = caseHandler((input: CaseInput) =>
    [input]
      .flat()
      .map((s) => clean(s))
      .map((s) =>
        s
          .replace(/([A-Z])/g, ' $1')
          .replace(/-|_/g, ' ')
          .trim()
      )
      .map((s) => s.split(' '))
      .flat()
  );

  // clx
  const processClxArray = (arr: any): string[] =>
    arr
      .filter(Boolean)
      .map((item) => {
        if (typeof item === 'string') return item;

        if (item instanceof Array) {
          return processClxArray(item);
        }

        if (typeof item === 'object') {
          return Object.keys(item)
            .filter((key) => item[key])
            .join(' ');
        }
      })
      .flat();

  /**<!-- DOCS: StringTools.clx ### -->
   * clx
   *
   * - `clx`
   * - `StringTools.clx`
   *
   * Composes a className from a list of strings, conditional objects and arrays.
   *
   * Accepts the different ways of supplying classes in AngularJS (ng-class) and returns a single string (so suitable for React).
   *
   * ```typescript
   * clx('hello') // 'hello'
   * clx('foo', 'bar') // 'foo bar'
   * clx('foo', conditionA && 'bar') // 'foo'
   * clx('abc', conditionB && 'def') // 'abc def'
   * clx({'lorem': conditionA, 'ipsum': conditionB}) // 'ipsum'
   * ```
   */
  export const clx = (...args: ClxType[]) => processClxArray(args).join(' ');
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: StringTools.clx  --> */
export const clx = StringTools.clx;
