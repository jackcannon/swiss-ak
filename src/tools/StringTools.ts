import { ObjectTools } from './ObjectTools';
import { fn } from './fn';

//<!-- DOCS: 120 -->

export type ClxType = string | boolean | { [key: string]: boolean } | ClxType[];

/**<!-- DOCS: StringTools ##! -->
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
   * @param {string} [input='']
   * @returns {string}
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
   * @param {string} input
   * @returns {string}
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
   * @param {string} [input='']
   * @returns {string}
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
   * @param {number} maxLength
   * @param {string} repeated
   * @returns {string}
   */
  export const repeat = (maxLength: number, repeated: string) =>
    (repeated && typeof repeated === 'string' ? repeated : '').repeat(Math.max(0, maxLength));

  type SplittingFn = (input: string | string[]) => string[];

  /**<!-- DOCS: StringTools.StringCaseHandler ### -->
   * StringCaseHandler
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
     * @param {string | string[]} input
     * @param {boolean} [capitaliseFirst=false]
     * @returns {string}
     */
    const toCamelCase = (input: string | string[], capitaliseFirst: boolean = false): string => {
      const split = getSplit(input);
      return split.map((word, index) => (index === 0 && !capitaliseFirst ? word.toLowerCase() : capitalise(word))).join('');
    };
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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toLowerCamelCase = (input: string | string[]): string => toCamelCase(input, false);

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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toUpperCamelCase = (input: string | string[]): string => toCamelCase(input, true);

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
     * @param {string | string[]} input
     * @param {string} char
     * @param {boolean} [toUpper=false]
     * @returns {string}
     */
    const toCharacterSeparated = (input: string | string[], char: string, toUpper: boolean = false) => {
      const split = getSplit(input);
      return split.map((word, index) => (toUpper ? word.toUpperCase() : word.toLowerCase())).join(char);
    };

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
     * @param {string | string[]} input
     * @param {boolean} [toUpper=false]
     * @returns {string}
     */
    const toSlugCase = (input: string | string[], toUpper: boolean = false): string => toCharacterSeparated(input, '-', toUpper);

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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toLowerSlugCase = (input: string | string[]): string => toSlugCase(input, false);

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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toUpperSlugCase = (input: string | string[]): string => toSlugCase(input, true);

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
     * @param {string | string[]} input
     * @param {boolean} [toUpper=false]
     * @returns {string}
     */
    const toSnakeCase = (input: string | string[], toUpper: boolean = false): string => toCharacterSeparated(input, '_', toUpper);

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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toLowerSnakeCase = (input: string | string[]): string => toSnakeCase(input, false);

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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toUpperSnakeCase = (input: string | string[]): string => toSnakeCase(input, true);

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
     * @param {string | string[]} input
     * @param {boolean} [toUpper=false]
     * @returns {string}
     */
    const toSpaced = (input: string | string[], toUpper: boolean = false): string => toCharacterSeparated(input, ' ', toUpper);

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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toLowerSpaced = (input: string | string[]): string => toSpaced(input, false);

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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toUpperSpaced = (input: string | string[]): string => toSpaced(input, true);

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
     * @param {string | string[]} input
     * @returns {string}
     */
    const toCapitalisedSpaced = (input: string | string[]): string => capitalise(toSpaced(input, false));

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
   * @param {...ClxType} [args]
   * @returns {string}
   */
  export const clx = (...args: ClxType[]) => processClxArray(args).join(' ');

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

      return input.replaceAll(/\(|\)|\[|\]|\{|\}|\<|\>/g, (br) => {
        let id =
          updateInfo(infos.round, '(', ')', br) ||
          updateInfo(infos.square, '[', ']', br) ||
          updateInfo(infos.curly, '{', '}', br) ||
          updateInfo(infos.angle, '<', '>', br);

        return fullSyms[br] + (id || '0') + fullSyms.END;
      });
    };

    /**<!-- DOCS: StringTools.matchBrackets.unique #### -->
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
     * @param {string} input
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
     * @returns {string}
     */
    export const unique = (input: string, replaceSymbols: Partial<BracketReplaceSymbols> = {}): string => runReplace(input, replaceSymbols, false);

    /**<!-- DOCS: StringTools.matchBrackets.depth #### -->
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
     * @param {string} input
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
     * @returns {string}
     */
    export const depth = (input: string, replaceSymbols: Partial<BracketReplaceSymbols> = {}): string => runReplace(input, replaceSymbols, true);

    /**<!-- DOCS: StringTools.matchBrackets.clean #### -->
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
     * @param {string} input
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
     * @returns {string}
     */
    export const clean = (input: string, replaceSymbols: Partial<BracketReplaceSymbols> = {}): string => {
      const fullSyms = getReplaceSymbols(replaceSymbols);
      const invertedSyms = ObjectTools.invert(fullSyms);

      const { END, ...withoutEND } = fullSyms;
      const startSyms = Object.values(withoutEND);
      const regex = new RegExp(`(${startSyms.map((s) => `\\${s}`).join('|')})[0-9]+${fullSyms.END}`, 'g');
      return input.replaceAll(regex, (m, startSym) => invertedSyms[startSym] || '');
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
      const regex = new RegExp(`${openSym}${findID}${endSym}(.|\n)*?${closeSym}${findID}${endSym}`, 'g');
      const foundDirty = Array.from(fullDirty.matchAll(regex) || []).map((match) => match[0]);

      const found = foundDirty.map((str) => clean(str, replaceSymbols));
      return found;
    };

    /**<!-- DOCS: StringTools.matchBrackets.grabDepth #### -->
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
     * @param {string} input
     * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round']
     * @param {number} [depthID=0]
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
     * @returns {string[]}
     */
    export const grabDepth = (
      input: string,
      bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle' = 'round',
      depthID: number = 0,
      replaceSymbols: Partial<BracketReplaceSymbols> = {}
    ): string[] => {
      const syms = getBracketSymsForMatch(bracketType, replaceSymbols);
      const fullDirty = depth(input, replaceSymbols);
      return runGrabSearch(fullDirty, syms, depthID !== undefined ? depthID + '' : '', replaceSymbols);
    };

    /**<!-- DOCS: StringTools.matchBrackets.grabUnique #### -->
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
     * @param {string} input
     * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round']
     * @param {number} [uniqueID=0]
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
     * @returns {string}
     */
    export const grabUnique = (
      input: string,
      bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle' = 'round',
      uniqueID: number = 0,
      replaceSymbols: Partial<BracketReplaceSymbols> = {}
    ): string => {
      const syms = getBracketSymsForMatch(bracketType, replaceSymbols);
      const fullDirty = unique(input, replaceSymbols);
      return runGrabSearch(fullDirty, syms, uniqueID !== undefined ? uniqueID + '' : '', replaceSymbols)?.[0];
    };

    /**<!-- DOCS: StringTools.matchBrackets.grab #### -->
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
     * @param {string} input
     * @param {'()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle'} [bracketType='round']
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
     * @returns {string[]}
     */
    export const grab = (
      input: string,
      bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle' = 'round',
      replaceSymbols: Partial<BracketReplaceSymbols> = {}
    ): string[] => {
      const syms = getBracketSymsForMatch(bracketType, replaceSymbols);
      const fullDirty = unique(input, replaceSymbols);

      const [openSym, closeSym, endSym] = syms;
      const regex = new RegExp(`(?:${openSym}|${closeSym})([0-9]+)${endSym}`, 'g');
      const allIDs = Array.from(fullDirty.matchAll(regex) || [])
        .map((match) => Number(match[1]))
        .filter(fn.dedupe);

      const found = allIDs.map((uniqueID) => runGrabSearch(fullDirty, syms, uniqueID + '', replaceSymbols)?.[0]);

      return found;
    };

    /**<!-- DOCS: StringTools.matchBrackets.getReplaceSymbols #### -->
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
     * @param {Partial<BracketReplaceSymbols>} [replaceSymbols={}]
     * @returns {BracketReplaceSymbols}
     */
    export const getReplaceSymbols = (replaceSymbols: Partial<BracketReplaceSymbols> = {}): BracketReplaceSymbols => {
      return {
        ...defaultReplaceSymbols,
        ...replaceSymbols
      };
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
