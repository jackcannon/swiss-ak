import { ObjectTools } from './ObjectTools';
import { fn } from './fn';
import { safe } from './safe';

//<!-- DOCS: 120 -->

export type ClxType = string | boolean | { [key: string]: boolean } | ClxType[];

/**<!-- DOCS: StringTools ##! -->
 * StringTools
 *
 * A collection of string utilities
 */
export namespace StringTools {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: StringTools.capitalise ### @ -->
   * capitalise
   *
   * - `StringTools.capitalise`
   *
   * Capitalises the first letter of each word in a string
   *
   * ```typescript
   * StringTools.capitalise('hello world'); // 'Hello World'
   * ```
   * @param {string} [input=''] - String to capitalise
   * @param {boolean} [forceRestToLowerCase=true] - Whether to force the rest of the string to lower case
   * @returns {string}
   */
  export const capitalise = (input: string = '', forceRestToLowerCase: boolean = true): string => {
    const args = {
      input: safe.str(input),
      forceRestToLowerCase: safe.bool(forceRestToLowerCase)
    };
    return args.input
      .split(/\s/)
      .map((word) => word.charAt(0).toUpperCase() + (args.forceRestToLowerCase ? word.slice(1).toLowerCase() : word.slice(1)))
      .join(' ');
  };

  /**<!-- DOCS: StringTools.angloise ### @ -->
   * angloise
   *
   * - `StringTools.angloise`
   *
   * Remove accents from a string
   *
   * ```typescript
   * StringTools.angloise('éèêë'); // 'eeee'
   * ```
   * @param {string} input - String to angloise
   * @returns {string}
   */
  export const angloise = (input: string): string => {
    const inp = safe.str(input);
    return inp.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  /**<!-- DOCS: StringTools.clean ### @ -->
   * clean
   *
   * - `StringTools.clean`
   *
   * Remove accents and non alphanumerics from a string
   *
   * ```typescript
   * StringTools.clean('éèêë_--ab0'); // 'eeeeab0'
   * ```
   * @param {string} [input=''] - String to clean
   * @returns {string}
   */
  export const clean = (input: string = ''): string => {
    const inp = safe.str(input);
    return angloise([inp].flat().join(' '))
      .replace(/\s{1,}/g, ' ')
      .replace(/[^A-Za-z0-9 ]/gi, '');
  };

  /**<!-- DOCS: StringTools.repeat ### @ -->
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
   * @param {number} maxLength - Maximum length of the string
   * @param {string} repeated - String to repeat
   * @returns {string}
   */
  export const repeat = (maxLength: number, repeated: string): string => {
    const args = {
      maxLength: safe.num(maxLength, true),
      repeated: safe.str(repeated)
    };
    return args.repeated.repeat(Math.max(0, args.maxLength));
  };

  /**<!-- DOCS: StringTools.makeRegExpSafe ### @ -->
   * makeRegExpSafe
   *
   * - `StringTools.makeRegExpSafe`
   *
   * Makes a string safe to use in a RegExp
   *
   * ```typescript
   * const textWithSpecChars = '$^*+?.()|{}[]\\';
   * const longText = `A long line with ${textWithSpecChars} in it`; // 'A long line with $^*+?.()|{}[]\ in it'
   *
   * const safeText = makeRegExpSafe(textWithSpecChars); // '\$\^\*\+\?\.\(\)\|\{\}\[\]\\'
   * const regex = new RegExp(safeText);
   * longText.replace(regex, 'foobar'); // 'A long line with foobar in it'
   *
   * longText.replace(new RegExp(makeRegExpSafe(textWithSpecChars)), 'foobar'); // 'A long line with foobar in it'
   * ```
   * @param {string} text - String to make safe for use in a RegExp
   * @returns {string}
   */
  export const makeRegExpSafe = (text: string): string => {
    const args = {
      text: safe.str(text)
    };
    return args.text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  };

  /**<!-- DOCS: StringTools.replaceAll ### @ -->
   * replaceAll
   *
   * - `StringTools.replaceAll`
   *
   * 'Polyfill' replacement for String.prototype.replaceAll, but uses String.prototype.replace (better backwards compatibility)
   *
   * Accepts a string or RegExp as the searchValue, and a string or function as the replacer.
   *
   * ```typescript
   * const input = 'the quick brown fox jumps over the lazy dog';
   *
   * StringTools.replaceAll(input, /A|E|I|O|U/i, (match) => match.toUpperCase()) // 'thE qUIck brOwn fOx jUmps OvEr thE lAzy dOg'
   * StringTools.replaceAll(input, /A|E|I|O|U/i, '#') // 'th# q##ck br#wn f#x j#mps #v#r th# l#zy d#g'
   * StringTools.replaceAll(input, 'o', (match) => match.toUpperCase()) // 'the quick brOwn fOx jumps Over the lazy dOg'
   * StringTools.replaceAll(input, 'o', '#') // 'the quick br#wn f#x jumps #ver the lazy d#g'
   * ```
   * @param {string} text - String to replace in
   * @param {string | RegExp} searchValue - String or RegExp to search for
   * @param {string | ((substring: string, ...args: any[]) => string)} replacer - String or function to replace the search value with
   * @returns {string}
   */
  export const replaceAll = (
    text: string,
    searchValue: string | RegExp,
    replacer: string | ((substring: string, ...args: any[]) => string)
  ): string => {
    const args = {
      text: safe.str(text),
      searchValue: searchValue instanceof RegExp ? searchValue : safe.str(searchValue),
      replacer: typeof replacer === 'function' ? safe.func(replacer) : safe.str(replacer)
    };

    let regex;

    if (args.searchValue instanceof RegExp) {
      regex = new RegExp(args.searchValue, 'g' + args.searchValue.flags.replace(/g/g, ''));
    } else {
      // many characters need to be properly escaped in order to be used in a RegExp
      regex = new RegExp(makeRegExpSafe(args.searchValue), 'g');
    }

    return args.text.replace(regex, args.replacer as any);
  };

  /**<!-- DOCS: StringTools.randomId ### @ -->
   * randomId
   *
   * - `StringTools.randomId`
   *
   * Generate a random ID.
   *
   * Provides a random string of 10 alphanumeric characters, with the option to prefix and/or suffix the string.
   *
   * > __Note:__ This is a very simple random ID generator, and is not suitable for use in security contexts, and does not guarantee uniqueness.
   *
   * ```typescript
   * StringTools.randomId(); // 'du9876optw'
   * StringTools.randomId(); // '7xf8kewrkf'
   * StringTools.randomId(); // 'bums15yb9n'
   * StringTools.randomId(); // '8tcl55y4u1'
   * StringTools.randomId(); // '41pxan1bog'
   * StringTools.randomId(); // '122pa9czh4'
   * StringTools.randomId(); // 'iu7xappxtz'
   *
   * StringTools.randomId('foo-'); // 'foo-xpynpfiz06'
   * StringTools.randomId('', '-bar'); // 'dpyq3i2uwq-bar'
   * StringTools.randomId('foo-', '-bar'); // 'foo-wapluosnf6-bar'
   * ```
   * @param {string} [prefix=''] - Prefix to add to the random ID
   * @param {string} [suffix=''] - Suffix to add to the random ID
   * @returns {string}
   */
  export const randomId = (prefix: string = '', suffix: string = ''): string => {
    const args = {
      prefix: safe.str(prefix, true, ''),
      suffix: safe.str(suffix, true, '')
    };
    return args.prefix + Math.random().toString(36).substr(2, 10).padStart(10, '0') + args.suffix;
  };

  // clx
  const processClxArray = (arr: any): string[] =>
    arr
      .filter(fn.exists)
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

        return undefined;
      })
      .filter(fn.exists)
      .flat();

  /**<!-- DOCS: StringTools.clx ### @ -->
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
   * @param {...ClxType} [args] - Classes (or objects/arrays to compose
   * @returns {string}
   */
  export const clx = (...args: ClxType[]): string => processClxArray(args).join(' ');

  /**<!-- DOCS: StringTools.Case_Manipulators ### -->
   * Case Manipulators
   */
  export interface StringCaseHandler {
    /** <!-- DOCS-ALIAS: StringTools.toLowerCamelCase --> */
    toLowerCamelCase(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toUpperCamelCase --> */
    toUpperCamelCase(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toCamelCase --> */
    toCamelCase(input: string | string[], capitaliseFirst?: boolean): string;
    /** <!-- DOCS-ALIAS: StringTools.toLowerSlugCase --> */
    toLowerSlugCase(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toUpperSlugCase --> */
    toUpperSlugCase(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toSlugCase --> */
    toSlugCase(input: string | string[], toUpper?: boolean): string;
    /** <!-- DOCS-ALIAS: StringTools.toLowerSnakeCase --> */
    toLowerSnakeCase(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toUpperSnakeCase --> */
    toUpperSnakeCase(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toSnakeCase --> */
    toSnakeCase(input: string | string[], toUpper?: boolean): string;
    /** <!-- DOCS-ALIAS: StringTools.toLowerSpaced --> */
    toLowerSpaced(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toUpperSpaced --> */
    toUpperSpaced(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toCapitalisedSpaced --> */
    toCapitalisedSpaced(input: string | string[]): string;
    /** <!-- DOCS-ALIAS: StringTools.toSpaced --> */
    toSpaced(input: string | string[], toUpper?: boolean): string;
    /** <!-- DOCS-ALIAS: StringTools.toCharacterSeparated --> */
    toCharacterSeparated(input: string | string[], char: string, toUpper?: boolean): string;
  }

  type SplittingFn = (input: string | string[]) => string[];

  const safeInput = (v: string | string[]): string | string[] => {
    if (v instanceof Array) return safe.arrOf.str(v);
    return safe.str(v, false, '');
  };

  // SWISS-DOCS-JSDOC-REMOVE-NEXT-LINE
  const caseHandler = (overrideSplitter?: SplittingFn): StringCaseHandler => {
    const getSplit: SplittingFn = (input: string | string[] = ''): string[] => {
      if (overrideSplitter) return overrideSplitter(input);
      const arr = [input].flat();
      return arr
        .map((s) => clean(s.replace(/-|_/g, ' ')).split(' '))
        .flat()
        .filter((s) => s.length);
    };

    /**<!-- DOCS: StringTools.toCamelCase #### @ -->
     * toCamelCase
     *
     * - `StringTools.toCamelCase`
     * - `StringTools.fromSlugCase.toCamelCase`
     * - `StringTools.fromSnakeCase.toCamelCase`
     * - `StringTools.fromSpaced.toCamelCase`
     * - `StringTools.fromCamelCase.toCamelCase`
     *
     * Convert a string to camel case (e.g. `thisIsCamelCase`)
     * @param {string | string[]} input - String or array of strings to convert
     * @param {boolean} [capitaliseFirst=false] - Whether to capitalise the first letter
     * @returns {string}
     */
    const toCamelCase = (input: string | string[], capitaliseFirst: boolean = false): string => {
      const args = {
        input: safeInput(input),
        capitaliseFirst: safe.bool(capitaliseFirst)
      };
      const split = getSplit(args.input);
      return split.map((word, index) => (index === 0 && !args.capitaliseFirst ? word.toLowerCase() : capitalise(word, true))).join('');
    };
    /**<!-- DOCS: StringTools.toLowerCamelCase #### @ -->
     * toLowerCamelCase
     *
     * - `StringTools.toLowerCamelCase`
     * - `StringTools.fromSlugCase.toLowerCamelCase`
     * - `StringTools.fromSnakeCase.toLowerCamelCase`
     * - `StringTools.fromSpaced.toLowerCamelCase`
     * - `StringTools.fromCamelCase.toLowerCamelCase`
     *
     * Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toLowerCamelCase = (input: string | string[]): string => toCamelCase(safeInput(input), false);

    /**<!-- DOCS: StringTools.toUpperCamelCase #### @ -->
     * toUpperCamelCase
     *
     * - `StringTools.toUpperCamelCase`
     * - `StringTools.fromSlugCase.toUpperCamelCase`
     * - `StringTools.fromSnakeCase.toUpperCamelCase`
     * - `StringTools.fromSpaced.toUpperCamelCase`
     * - `StringTools.fromCamelCase.toUpperCamelCase`
     *
     * Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toUpperCamelCase = (input: string | string[]): string => toCamelCase(safeInput(input), true);

    /**<!-- DOCS: StringTools.toCharacterSeparated #### @ -->
     * toCharacterSeparated
     *
     * - `StringTools.toCharacterSeparated`
     * - `StringTools.fromSlugCase.toCharacterSeparated`
     * - `StringTools.fromSnakeCase.toCharacterSeparated`
     * - `StringTools.fromSpaced.toCharacterSeparated`
     * - `StringTools.fromCamelCase.toCharacterSeparated`
     *
     * Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)
     * @param {string | string[]} input - String or array of strings to convert
     * @param {string} [char=','] - Character to separate the words by
     * @param {boolean} [toUpper=false] - Whether to convert the words to upper case
     * @returns {string}
     */
    const toCharacterSeparated = (input: string | string[], char: string = ',', toUpper: boolean = false) => {
      const args = {
        input: safeInput(input),
        char: safe.str(char),
        toUpper: safe.bool(toUpper, false)
      };
      const split = getSplit(args.input);
      return split.map((word, index) => (args.toUpper ? word.toUpperCase() : word.toLowerCase())).join(args.char);
    };

    /**<!-- DOCS: StringTools.toSlugCase #### @ -->
     * toSlugCase
     *
     * - `StringTools.toSlugCase`
     * - `StringTools.fromSlugCase.toSlugCase`
     * - `StringTools.fromSnakeCase.toSlugCase`
     * - `StringTools.fromSpaced.toSlugCase`
     * - `StringTools.fromCamelCase.toSlugCase`
     *
     * Convert a string to camel case (e.g. `this-is-slug-case`)
     * @param {string | string[]} input - String or array of strings to convert
     * @param {boolean} [toUpper=false] - Whether to convert the words to upper case
     * @returns {string}
     */
    const toSlugCase = (input: string | string[], toUpper: boolean = false): string => {
      const args = {
        input: safeInput(input),
        toUpper: safe.bool(toUpper)
      };
      return toCharacterSeparated(args.input, '-', args.toUpper);
    };

    /**<!-- DOCS: StringTools.toLowerSlugCase #### @ -->
     * toLowerSlugCase
     *
     * - `StringTools.toLowerSlugCase`
     * - `StringTools.fromSlugCase.toLowerSlugCase`
     * - `StringTools.fromSnakeCase.toLowerSlugCase`
     * - `StringTools.fromSpaced.toLowerSlugCase`
     * - `StringTools.fromCamelCase.toLowerSlugCase`
     *
     * Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toLowerSlugCase = (input: string | string[]): string => toSlugCase(safeInput(input), false);

    /**<!-- DOCS: StringTools.toUpperSlugCase #### @ -->
     * toUpperSlugCase
     *
     * - `StringTools.toUpperSlugCase`
     * - `StringTools.fromSlugCase.toUpperSlugCase`
     * - `StringTools.fromSnakeCase.toUpperSlugCase`
     * - `StringTools.fromSpaced.toUpperSlugCase`
     * - `StringTools.fromCamelCase.toUpperSlugCase`
     *
     * Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toUpperSlugCase = (input: string | string[]): string => toSlugCase(safeInput(input), true);

    /**<!-- DOCS: StringTools.toSnakeCase #### @ -->
     * toSnakeCase
     *
     * - `StringTools.toSnakeCase`
     * - `StringTools.fromSlugCase.toSnakeCase`
     * - `StringTools.fromSnakeCase.toSnakeCase`
     * - `StringTools.fromSpaced.toSnakeCase`
     * - `StringTools.fromCamelCase.toSnakeCase`
     *
     * Convert a string to snake case (e.g. `this_is_snake_case`)
     * @param {string | string[]} input - String or array of strings to convert
     * @param {boolean} [toUpper=false] - Whether to convert the words to upper case
     * @returns {string}
     */
    const toSnakeCase = (input: string | string[], toUpper: boolean = false): string => {
      const args = {
        input: safeInput(input),
        toUpper: safe.bool(toUpper)
      };
      return toCharacterSeparated(args.input, '_', args.toUpper);
    };

    /**<!-- DOCS: StringTools.toLowerSnakeCase #### @ -->
     * toLowerSnakeCase
     *
     * - `StringTools.toLowerSnakeCase`
     * - `StringTools.fromSlugCase.toLowerSnakeCase`
     * - `StringTools.fromSnakeCase.toLowerSnakeCase`
     * - `StringTools.fromSpaced.toLowerSnakeCase`
     * - `StringTools.fromCamelCase.toLowerSnakeCase`
     *
     * Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toLowerSnakeCase = (input: string | string[]): string => toSnakeCase(safeInput(input), false);

    /**<!-- DOCS: StringTools.toUpperSnakeCase #### @ -->
     * toUpperSnakeCase
     *
     * - `StringTools.toUpperSnakeCase`
     * - `StringTools.fromSlugCase.toUpperSnakeCase`
     * - `StringTools.fromSnakeCase.toUpperSnakeCase`
     * - `StringTools.fromSpaced.toUpperSnakeCase`
     * - `StringTools.fromCamelCase.toUpperSnakeCase`
     *
     * Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toUpperSnakeCase = (input: string | string[]): string => toSnakeCase(safeInput(input), true);

    /**<!-- DOCS: StringTools.toSpaced #### @ -->
     * toSpaced
     *
     * - `StringTools.toSpaced`
     * - `StringTools.fromSlugCase.toSpaced`
     * - `StringTools.fromSnakeCase.toSpaced`
     * - `StringTools.fromSpaced.toSpaced`
     * - `StringTools.fromCamelCase.toSpaced`
     *
     * Convert a string to spaced case (e.g. `this is spaced case`)
     * @param {string | string[]} input - String or array of strings to convert
     * @param {boolean} [toUpper=false] - Whether to convert the words to upper case
     * @returns {string}
     */
    const toSpaced = (input: string | string[], toUpper: boolean = false): string => {
      const args = {
        input: safeInput(input),
        toUpper: safe.bool(toUpper)
      };
      return toCharacterSeparated(args.input, ' ', args.toUpper);
    };

    /**<!-- DOCS: StringTools.toLowerSpaced #### @ -->
     * toLowerSpaced
     *
     * - `StringTools.toLowerSpaced`
     * - `StringTools.fromSlugCase.toLowerSpaced`
     * - `StringTools.fromSnakeCase.toLowerSpaced`
     * - `StringTools.fromSpaced.toLowerSpaced`
     * - `StringTools.fromCamelCase.toLowerSpaced`
     *
     * Convert a string to lower spaced case (e.g. `this is lower spaced case`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toLowerSpaced = (input: string | string[]): string => toSpaced(safeInput(input), false);

    /**<!-- DOCS: StringTools.toUpperSpaced #### @ -->
     * toUpperSpaced
     *
     * - `StringTools.toUpperSpaced`
     * - `StringTools.fromSlugCase.toUpperSpaced`
     * - `StringTools.fromSnakeCase.toUpperSpaced`
     * - `StringTools.fromSpaced.toUpperSpaced`
     * - `StringTools.fromCamelCase.toUpperSpaced`
     *
     * Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toUpperSpaced = (input: string | string[]): string => toSpaced(safeInput(input), true);

    /**<!-- DOCS: StringTools.toCapitalisedSpaced #### @ -->
     * toCapitalisedSpaced
     *
     * - `StringTools.toCapitalisedSpaced`
     * - `StringTools.fromSlugCase.toCapitalisedSpaced`
     * - `StringTools.fromSnakeCase.toCapitalisedSpaced`
     * - `StringTools.fromSpaced.toCapitalisedSpaced`
     * - `StringTools.fromCamelCase.toCapitalisedSpaced`
     *
     * Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)
     * @param {string | string[]} input - String or array of strings to convert
     * @returns {string}
     */
    const toCapitalisedSpaced = (input: string | string[]): string => capitalise(toSpaced(safeInput(input), false));

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
    // SWISS-DOCS-JSDOC-REMOVE-NEXT-LINE
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

  /**<!-- DOCS: StringTools.fromSlugCase #### -->
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

  /**<!-- DOCS: StringTools.fromSnakeCase #### -->
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

  /**<!-- DOCS: StringTools.fromSpaced #### -->
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

  /**<!-- DOCS: StringTools.fromCamelCase #### -->
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
  export const fromCamelCase = caseHandler((input: string | string[]) =>
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

  /**<!-- DOCS: StringTools.matchBrackets ### -->
   * matchBrackets
   *
   * Tools for matching corresponding brackets in a string
   */
  export namespace matchBrackets {
    // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

    const defaultReplaceSymbols: BracketReplaceSymbols = {
      END: '✧',
      '(': '❪',
      ')': '❫',
      '[': '❲',
      ']': '❳',
      '{': '❴',
      '}': '❵',
      '<': '❰',
      '>': '❱'
    };

    const safeSymbols = (symbols: Partial<BracketReplaceSymbols>): Partial<BracketReplaceSymbols> =>
      ObjectTools.filter(safe.obj(symbols), (k) => Object.keys(defaultReplaceSymbols).includes(k));

    const safeBracketType = <T = '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'>(bracketType: T): T => {
      const safed = safe.str(bracketType as unknown as string);
      if (['()', '[]', '{}', '<>', 'round', 'square', 'curly', 'angle'].includes(safed)) {
        return safed as unknown as T;
      }
      return 'round' as unknown as T;
    };

    // make characters safe for regex
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
    const escapePCRE = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const runReplace = (input: string, replaceSymbols: Partial<BracketReplaceSymbols> = {}, outputDepth: boolean = false): string => {
      const fullSyms = getReplaceSymbols(replaceSymbols);

      interface BracketInfo {
        depth: number;
        currentID: number;
        active: [number, number][];
      }
      let infos = {
        round: {
          depth: -1,
          currentID: -1,
          active: []
        },
        square: {
          depth: -1,
          currentID: -1,
          active: []
        },
        curly: {
          depth: -1,
          currentID: -1,
          active: []
        },
        angle: {
          depth: -1,
          currentID: -1,
          active: []
        }
      };

      const updateInfo = (info: BracketInfo, startBr: string, endBr: string, br: string) => {
        let depth: number;
        let id: number;
        if (br === startBr || br === endBr) {
          if (br === startBr) {
            // start pair
            depth = ++info.depth;
            id = ++info.currentID;
            info.active.push([depth, id]);
          } else {
            // end pair
            depth = info.depth--;

            const activeIndex = info.active.findIndex(([d, i]) => d === depth);
            if (activeIndex !== -1) {
              const found = info.active.splice(activeIndex, 1)?.[0];
              if (found) id = found[1];
            }
          }
        }

        return outputDepth ? depth : id;
      };

      return input.replace(/\(|\)|\[|\]|\{|\}|\<|\>/g, (br) => {
        let id =
          updateInfo(infos.round, '(', ')', br) ||
          updateInfo(infos.square, '[', ']', br) ||
          updateInfo(infos.curly, '{', '}', br) ||
          updateInfo(infos.angle, '<', '>', br);

        return fullSyms[br] + (id || '0') + fullSyms.END;
      });
    };

    /**<!-- DOCS: StringTools.matchBrackets.unique #### @ -->
     * unique
     *
     * - `StringTools.matchBrackets.unique`
     *
     * Replace brackets with symbols and with a unique ID for each bracket pair of each type
     *
     * ```typescript
     * const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
     * const uniqued = matchBrackets.unique(example);
     * uniqued; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'
     * ```
     * @param {string} input - String to match brackets in
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}] - Symbols to replace the brackets with
     * @returns {string}
     */
    export const unique = (input: string, replaceSymbols: Partial<BracketReplaceSymbols> = {}): string => {
      const args = {
        input: safe.str(input),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      return runReplace(args.input, args.replaceSymbols, false);
    };

    /**<!-- DOCS: StringTools.matchBrackets.depth #### @ -->
     * depth
     *
     * - `StringTools.matchBrackets.depth`
     *
     * Replace brackets with symbols and with a numbers for how deep each bracket pair is for that bracket type
     *
     * ```typescript
     * const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
     * const depthed = matchBrackets.depth(example);
     * depthed; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'
     * ```
     * @param {string} input - String to match brackets in
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}] - Symbols to replace the brackets with
     * @returns {string}
     */
    export const depth = (input: string, replaceSymbols: Partial<BracketReplaceSymbols> = {}): string => {
      const args = {
        input: safe.str(input),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      return runReplace(args.input, args.replaceSymbols, true);
    };

    /**<!-- DOCS: StringTools.matchBrackets.clean #### @ -->
     * clean
     *
     * - `StringTools.matchBrackets.clean`
     *
     * Return a string that's been matched with `unique` or `depth` and replace the symbols with the original brackets. Also works with substrings of such strings.
     *
     * ```typescript
     * const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
     * const uniqued = matchBrackets.unique(example);
     * uniqued; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'
     *
     * const cleaned = matchBrackets.clean(uniqued);
     * cleaned; // '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}'
     * ```
     * @param {string} input - String to clean
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}] - Symbols to replace the brackets with
     * @returns {string}
     */
    export const clean = (input: string, replaceSymbols: Partial<BracketReplaceSymbols> = {}): string => {
      const args = {
        input: safe.str(input),
        replaceSymbols: getReplaceSymbols(replaceSymbols)
      };
      const invertedSyms = ObjectTools.invert(args.replaceSymbols);

      const { END, ...withoutEND } = args.replaceSymbols;
      const startSyms = Object.values(withoutEND);
      const regex = new RegExp(`(${startSyms.map(escapePCRE).join('|')})[0-9]+${escapePCRE(args.replaceSymbols.END)}`, 'g');
      return args.input.replace(regex, (m, startSym) => invertedSyms[startSym] || '');
    };

    const getBracketSymsForMatch = (
      bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle',
      replaceSymbols: Partial<BracketReplaceSymbols>
    ) => {
      const fullSyms = getReplaceSymbols(replaceSymbols);
      const [openSym, closeSym] = {
        '()': ['(', ')'],
        '[]': ['[', ']'],
        '{}': ['{', '}'],
        '<>': ['<', '>'],
        round: ['(', ')'],
        square: ['[', ']'],
        curly: ['{', '}'],
        angle: ['<', '>']
      }[bracketType].map((s) => fullSyms[s] as string);
      const endSym = fullSyms.END;
      return [openSym, closeSym, endSym];
    };

    const runGrabSearch = (
      fullDirty: string,
      [openSym, closeSym, endSym]: string[],
      findID: string,
      replaceSymbols: Partial<BracketReplaceSymbols>
    ) => {
      const regex = new RegExp(
        `${escapePCRE(openSym)}${findID}${escapePCRE(endSym)}(.|\n)*?${escapePCRE(closeSym)}${findID}${escapePCRE(endSym)}`,
        'g'
      );
      const foundDirty = Array.from(fullDirty.matchAll(regex) || []).map((match) => match[0]);

      const found = foundDirty.map((str) => clean(str, replaceSymbols));
      return found;
    };

    /**<!-- DOCS: StringTools.matchBrackets.grabDepth #### @ -->
     * grabDepth
     *
     * - `StringTools.matchBrackets.grabDepth`
     *
     * Obtain all the bracketed substrings of the given bracket type from a string at a given depth.
     *
     * ```typescript
     * const example = `[
     *   [
     *     [1, 2, 3],
     *     [4, 5, 6]
     *   ],
     *   [
     *     [7, 8, 9]
     *   ]
     * ]`;
     * const grabbed = matchBrackets.grabDepth(example, 'square', 2);
     * grabbed; // [ '[1, 2, 3]', '[4, 5, 6]', '[7, 8, 9]' ]
     * ```
     * @param {string} input - String to match brackets in
     * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round'] - Bracket type to match
     * @param {number} [depthID=0] - Depth ID to match
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}] - Symbols to replace the brackets with
     * @returns {string[]}
     */
    export const grabDepth = (
      input: string,
      bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle' = 'round',
      depthID: number = 0,
      replaceSymbols: Partial<BracketReplaceSymbols> = {}
    ): string[] => {
      const args = {
        input: safe.str(input),
        bracketType: safeBracketType(bracketType),
        depthID: safe.num(depthID, true, 0),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      const syms = getBracketSymsForMatch(args.bracketType, args.replaceSymbols);
      const fullDirty = depth(args.input, args.replaceSymbols);
      return runGrabSearch(fullDirty, syms, args.depthID + '', args.replaceSymbols);
    };

    /**<!-- DOCS: StringTools.matchBrackets.grabUnique #### @ -->
     * grabUnique
     *
     * - `StringTools.matchBrackets.grabUnique`
     *
     * Obtain all the bracketed substring of the given bracket type from a string with the given unique ID.
     * e.g. if uniqueID is 3, it will return the bracketed substring for the 4th instance of the opening bracket (see StringTools.matchBrackets.unique)
     *
     * ```typescript
     * const example = `[
     *   [
     *     [1, 2, 3],
     *     [4, 5, 6]
     *   ],
     *   [
     *     [7, 8, 9]
     *   ]
     * ]`;
     * const grabbed = matchBrackets.grabUnique(example, 'square', 3);
     * grabbed; // '[4, 5, 6]'
     * ```
     * @param {string} input - String to match brackets in
     * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round'] - Bracket type to match
     * @param {number} [uniqueID=0] - Unique ID to match
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}] - Symbols to replace the brackets with
     * @returns {string}
     */
    export const grabUnique = (
      input: string,
      bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle' = 'round',
      uniqueID: number = 0,
      replaceSymbols: Partial<BracketReplaceSymbols> = {}
    ): string => {
      const args = {
        input: safe.str(input),
        bracketType: safeBracketType(bracketType),
        uniqueID: safe.num(uniqueID, true, 0),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      const syms = getBracketSymsForMatch(args.bracketType, args.replaceSymbols);
      const fullDirty = unique(args.input, args.replaceSymbols);
      return runGrabSearch(fullDirty, syms, args.uniqueID + '', args.replaceSymbols)?.[0];
    };

    /**<!-- DOCS: StringTools.matchBrackets.grab #### @ -->
     * grab
     *
     * - `StringTools.matchBrackets.grab`
     *
     * Grab all the bracketed substrings from a string of the given bracket type.
     *
     * ```typescript
     * const example = `[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]`;
     * matchBrackets.grab(example, 'square');
     * // [
     * //   '[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]',
     * //   '[[1, 2, 3], [4, 5, 6]]',
     * //   '[1, 2, 3]',
     * //   '[4, 5, 6]',
     * //   '[[7, 8, 9]]',
     * //   '[7, 8, 9]'
     * // ]
     * ```
     * @param {string} input - String to match brackets in
     * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round'] - Bracket type to match
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}] - Symbols to replace the brackets with
     * @returns {string[]}
     */
    export const grab = (
      input: string,
      bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle' = 'round',
      replaceSymbols: Partial<BracketReplaceSymbols> = {}
    ): string[] => {
      const args = {
        input: safe.str(input),
        bracketType: safeBracketType(bracketType),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      const syms = getBracketSymsForMatch(args.bracketType, args.replaceSymbols);
      const fullDirty = unique(args.input, args.replaceSymbols);

      const [openSym, closeSym, endSym] = syms;
      const regex = new RegExp(`(?:${escapePCRE(openSym)}|${escapePCRE(closeSym)})([0-9]+)${escapePCRE(endSym)}`, 'g');
      const allIDs = Array.from(fullDirty.matchAll(regex) || [])
        .map((match) => Number(match[1]))
        .filter(fn.dedupe);

      const found = allIDs.map((uniqueID) => runGrabSearch(fullDirty, syms, uniqueID + '', args.replaceSymbols)?.[0]);

      return found;
    };

    /**<!-- DOCS: StringTools.matchBrackets.getReplaceSymbols #### @ -->
     * getReplaceSymbols
     *
     * - `StringTools.matchBrackets.getReplaceSymbols`
     *
     * Get a full set of replace symbols
     *
     * ```typescript
     * matchBrackets.getReplaceSymbols();
     * // {
     * //   END: '✧',
     * //   '(': '❪',
     * //   ')': '❫',
     * //   '[': '❲',
     * //   ']': '❳',
     * //   '{': '❴',
     * //   '}': '❵',
     * //   '<': '❰',
     * //   '>': '❱'
     * // }
     *
     * matchBrackets.getReplaceSymbols({
     *   END: '▣',
     *   '{': 'START_CURLY',
     *   '}': 'END_CURLY'
     * })
     * // {
     * //   END: '▣',
     * //   '(': '❪',
     * //   ')': '❫',
     * //   '[': '❲',
     * //   ']': '❳',
     * //   '{': 'START_CURLY',
     * //   '}': 'END_CURLY',
     * //   '<': '❰',
     * //   '>': '❱'
     * // }
     * ```
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}] - Partial set of replace symbols to use
     * @returns {BracketReplaceSymbols}
     */
    export const getReplaceSymbols = (replaceSymbols: Partial<BracketReplaceSymbols> = {}): BracketReplaceSymbols => {
      return safeSymbols({
        ...defaultReplaceSymbols,
        ...replaceSymbols
      }) as BracketReplaceSymbols;
    };

    /**<!-- DOCS: StringTools.matchBrackets.BracketReplaceSymbols #### -->
     * BracketReplaceSymbols
     *
     * - `StringTools.matchBrackets.BracketReplaceSymbols`
     *
     * Type for controlling the symbols used to replace brackets
     *
     * ```typescript
     * {
     *   END: string;
     *   '(': string;
     *   ')': string;
     *   '[': string;
     *   ']': string;
     *   '{': string;
     *   '}': string;
     *   '<': string;
     *   '>': string;
     * }
     * ```
     */
    export interface BracketReplaceSymbols {
      END: string;
      '(': string;
      ')': string;
      '[': string;
      ']': string;
      '{': string;
      '}': string;
      '<': string;
      '>': string;
    }
  } // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: StringTools.clx  --> */
export const clx = StringTools.clx;
