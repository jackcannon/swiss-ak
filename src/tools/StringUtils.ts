//<!-- DOCS: 120 -->
/**<!-- DOCS: ## -->
 * StringUtils
 *
 * A collection of string utilities
 */

/**<!-- DOCS: ### -->
 * capitalise
 *
 * - `StringUtils.capitalise`
 *
 * Capitalises the first letter of each word in a string
 *
 * ```typescript
 * StringUtils.capitalise('hello world'); // 'Hello World'
 * ```
 */
const capitalise = (input: string = '') =>
  (input || '')
    .split(/\s/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

/**<!-- DOCS: ### -->
 * angloise
 *
 * - `StringUtils.angloise`
 *
 * Remove accents from a string
 *
 * ```typescript
 * StringUtils.angloise('éèêë'); // 'eeee'
 * ```
 */
const angloise = (input: string): string => input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/**<!-- DOCS: ### -->
 * clean
 *
 * - `StringUtils.clean`
 *
 * Remove accents and non alphanumerics from a string
 *
 * ```typescript
 * StringUtils.clean('éèêë_--ab0'); // 'eeeeab0'
 * ```
 */
const clean = (input: string = ''): string =>
  angloise([input].flat().join(' '))
    .replace(/\s{1,}/g, ' ')
    .replace(/[^A-Za-z0-9 ]/gi, '');

export type CaseInput = string | string[];
type SplittingFn = (input: CaseInput) => string[];

/**<!-- DOCS: ### -->
 * StringCaseHandler
 */
export interface StringCaseHandler {
  /**<!-- DOCS: #### -->
   * toLowerCamelCase
   *
   * - `StringUtils.toLowerCamelCase`
   * - `StringUtils.fromSlugCase.toLowerCamelCase`
   * - `StringUtils.fromSnakeCase.toLowerCamelCase`
   * - `StringUtils.fromSpaced.toLowerCamelCase`
   * - `StringUtils.fromCamelCase.toLowerCamelCase`
   *
   * Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)
   */
  toLowerCamelCase(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toUpperCamelCase
   *
   * - `StringUtils.toUpperCamelCase`
   * - `StringUtils.fromSlugCase.toUpperCamelCase`
   * - `StringUtils.fromSnakeCase.toUpperCamelCase`
   * - `StringUtils.fromSpaced.toUpperCamelCase`
   * - `StringUtils.fromCamelCase.toUpperCamelCase`
   *
   * Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)
   */
  toUpperCamelCase(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toCamelCase
   *
   * - `StringUtils.toCamelCase`
   * - `StringUtils.fromSlugCase.toCamelCase`
   * - `StringUtils.fromSnakeCase.toCamelCase`
   * - `StringUtils.fromSpaced.toCamelCase`
   * - `StringUtils.fromCamelCase.toCamelCase`
   *
   * Convert a string to camel case (e.g. `thisIsCamelCase`)
   */
  toCamelCase(input: CaseInput, capitaliseFirst?: boolean): string;

  /**<!-- DOCS: #### -->
   * toLowerSlugCase
   *
   * - `StringUtils.toLowerSlugCase`
   * - `StringUtils.fromSlugCase.toLowerSlugCase`
   * - `StringUtils.fromSnakeCase.toLowerSlugCase`
   * - `StringUtils.fromSpaced.toLowerSlugCase`
   * - `StringUtils.fromCamelCase.toLowerSlugCase`
   *
   * Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)
   */
  toLowerSlugCase(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toUpperSlugCase
   *
   * - `StringUtils.toUpperSlugCase`
   * - `StringUtils.fromSlugCase.toUpperSlugCase`
   * - `StringUtils.fromSnakeCase.toUpperSlugCase`
   * - `StringUtils.fromSpaced.toUpperSlugCase`
   * - `StringUtils.fromCamelCase.toUpperSlugCase`
   *
   * Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)
   */
  toUpperSlugCase(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toSlugCase
   *
   * - `StringUtils.toSlugCase`
   * - `StringUtils.fromSlugCase.toSlugCase`
   * - `StringUtils.fromSnakeCase.toSlugCase`
   * - `StringUtils.fromSpaced.toSlugCase`
   * - `StringUtils.fromCamelCase.toSlugCase`
   *
   * Convert a string to camel case (e.g. `this-is-slug-case`)
   */
  toSlugCase(input: CaseInput, toUpper?: boolean): string;

  /**<!-- DOCS: #### -->
   * toLowerSnakeCase
   *
   * - `StringUtils.toLowerSnakeCase`
   * - `StringUtils.fromSlugCase.toLowerSnakeCase`
   * - `StringUtils.fromSnakeCase.toLowerSnakeCase`
   * - `StringUtils.fromSpaced.toLowerSnakeCase`
   * - `StringUtils.fromCamelCase.toLowerSnakeCase`
   *
   * Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)
   */
  toLowerSnakeCase(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toUpperSnakeCase
   *
   * - `StringUtils.toUpperSnakeCase`
   * - `StringUtils.fromSlugCase.toUpperSnakeCase`
   * - `StringUtils.fromSnakeCase.toUpperSnakeCase`
   * - `StringUtils.fromSpaced.toUpperSnakeCase`
   * - `StringUtils.fromCamelCase.toUpperSnakeCase`
   *
   * Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)
   */
  toUpperSnakeCase(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toSnakeCase
   *
   * - `StringUtils.toSnakeCase`
   * - `StringUtils.fromSlugCase.toSnakeCase`
   * - `StringUtils.fromSnakeCase.toSnakeCase`
   * - `StringUtils.fromSpaced.toSnakeCase`
   * - `StringUtils.fromCamelCase.toSnakeCase`
   *
   * Convert a string to snake case (e.g. `this_is_snake_case`)
   */
  toSnakeCase(input: CaseInput, toUpper?: boolean): string;

  /**<!-- DOCS: #### -->
   * toLowerSpaced
   *
   * - `StringUtils.toLowerSpaced`
   * - `StringUtils.fromSlugCase.toLowerSpaced`
   * - `StringUtils.fromSnakeCase.toLowerSpaced`
   * - `StringUtils.fromSpaced.toLowerSpaced`
   * - `StringUtils.fromCamelCase.toLowerSpaced`
   *
   * Convert a string to lower spaced case (e.g. `this is lower spaced case`)
   */
  toLowerSpaced(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toUpperSpaced
   *
   * - `StringUtils.toUpperSpaced`
   * - `StringUtils.fromSlugCase.toUpperSpaced`
   * - `StringUtils.fromSnakeCase.toUpperSpaced`
   * - `StringUtils.fromSpaced.toUpperSpaced`
   * - `StringUtils.fromCamelCase.toUpperSpaced`
   *
   * Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)
   */
  toUpperSpaced(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toCapitalisedSpaced
   *
   * - `StringUtils.toCapitalisedSpaced`
   * - `StringUtils.fromSlugCase.toCapitalisedSpaced`
   * - `StringUtils.fromSnakeCase.toCapitalisedSpaced`
   * - `StringUtils.fromSpaced.toCapitalisedSpaced`
   * - `StringUtils.fromCamelCase.toCapitalisedSpaced`
   *
   * Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)
   */
  toCapitalisedSpaced(input: CaseInput): string;
  /**<!-- DOCS: #### -->
   * toSpaced
   *
   * - `StringUtils.toSpaced`
   * - `StringUtils.fromSlugCase.toSpaced`
   * - `StringUtils.fromSnakeCase.toSpaced`
   * - `StringUtils.fromSpaced.toSpaced`
   * - `StringUtils.fromCamelCase.toSpaced`
   *
   * Convert a string to spaced case (e.g. `this is spaced case`)
   */
  toSpaced(input: CaseInput, toUpper?: boolean): string;

  /**<!-- DOCS: #### -->
   * toCharacterSeparated
   *
   * - `StringUtils.toCharacterSeparated`
   * - `StringUtils.fromSlugCase.toCharacterSeparated`
   * - `StringUtils.fromSnakeCase.toCharacterSeparated`
   * - `StringUtils.fromSpaced.toCharacterSeparated`
   * - `StringUtils.fromCamelCase.toCharacterSeparated`
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

/**<!-- DOCS: ### -->
 * fromSlugCase
 *
 * Has the following methods:
 * - `StringUtils.fromSlugCase.toLowerCamelCase`
 * - `StringUtils.fromSlugCase.toUpperCamelCase`
 * - `StringUtils.fromSlugCase.toCamelCase`
 * - `StringUtils.fromSlugCase.toLowerSlugCase`
 * - `StringUtils.fromSlugCase.toUpperSlugCase`
 * - `StringUtils.fromSlugCase.toSlugCase`
 * - `StringUtils.fromSlugCase.toLowerSnakeCase`
 * - `StringUtils.fromSlugCase.toUpperSnakeCase`
 * - `StringUtils.fromSlugCase.toSnakeCase`
 * - `StringUtils.fromSlugCase.toLowerSpaced`
 * - `StringUtils.fromSlugCase.toUpperSpaced`
 * - `StringUtils.fromSlugCase.toCapitalisedSpaced`
 * - `StringUtils.fromSlugCase.toSpaced`
 * - `StringUtils.fromSlugCase.toCharacterSeparated`
 */
const fromSlugCase = standardCaseHandler;

/**<!-- DOCS: ### -->
 * fromSnakeCase
 *
 * Has the following methods:
 * - `StringUtils.fromSnakeCase.toLowerCamelCase`
 * - `StringUtils.fromSnakeCase.toUpperCamelCase`
 * - `StringUtils.fromSnakeCase.toCamelCase`
 * - `StringUtils.fromSnakeCase.toLowerSlugCase`
 * - `StringUtils.fromSnakeCase.toUpperSlugCase`
 * - `StringUtils.fromSnakeCase.toSlugCase`
 * - `StringUtils.fromSnakeCase.toLowerSnakeCase`
 * - `StringUtils.fromSnakeCase.toUpperSnakeCase`
 * - `StringUtils.fromSnakeCase.toSnakeCase`
 * - `StringUtils.fromSnakeCase.toLowerSpaced`
 * - `StringUtils.fromSnakeCase.toUpperSpaced`
 * - `StringUtils.fromSnakeCase.toCapitalisedSpaced`
 * - `StringUtils.fromSnakeCase.toSpaced`
 * - `StringUtils.fromSnakeCase.toCharacterSeparated`
 */
const fromSnakeCase = standardCaseHandler;

/**<!-- DOCS: ### -->
 * fromSpaced
 *
 * Has the following methods:
 * - `StringUtils.fromSpaced.toLowerCamelCase`
 * - `StringUtils.fromSpaced.toUpperCamelCase`
 * - `StringUtils.fromSpaced.toCamelCase`
 * - `StringUtils.fromSpaced.toLowerSlugCase`
 * - `StringUtils.fromSpaced.toUpperSlugCase`
 * - `StringUtils.fromSpaced.toSlugCase`
 * - `StringUtils.fromSpaced.toLowerSnakeCase`
 * - `StringUtils.fromSpaced.toUpperSnakeCase`
 * - `StringUtils.fromSpaced.toSnakeCase`
 * - `StringUtils.fromSpaced.toLowerSpaced`
 * - `StringUtils.fromSpaced.toUpperSpaced`
 * - `StringUtils.fromSpaced.toCapitalisedSpaced`
 * - `StringUtils.fromSpaced.toSpaced`
 * - `StringUtils.fromSpaced.toCharacterSeparated`
 */
const fromSpaced = standardCaseHandler;

/**<!-- DOCS: ### -->
 * fromCamelCase
 *
 * Has the following methods:
 * - `StringUtils.fromCamelCase.toLowerCamelCase`
 * - `StringUtils.fromCamelCase.toUpperCamelCase`
 * - `StringUtils.fromCamelCase.toCamelCase`
 * - `StringUtils.fromCamelCase.toLowerSlugCase`
 * - `StringUtils.fromCamelCase.toUpperSlugCase`
 * - `StringUtils.fromCamelCase.toSlugCase`
 * - `StringUtils.fromCamelCase.toLowerSnakeCase`
 * - `StringUtils.fromCamelCase.toUpperSnakeCase`
 * - `StringUtils.fromCamelCase.toSnakeCase`
 * - `StringUtils.fromCamelCase.toLowerSpaced`
 * - `StringUtils.fromCamelCase.toUpperSpaced`
 * - `StringUtils.fromCamelCase.toCapitalisedSpaced`
 * - `StringUtils.fromCamelCase.toSpaced`
 * - `StringUtils.fromCamelCase.toCharacterSeparated`
 */
const fromCamelCase = caseHandler((input: CaseInput) =>
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

export const StringUtils = {
  capitalise,
  angloise,
  clean,
  ...standardCaseHandler,
  fromSlugCase,
  fromSnakeCase,
  fromSpaced,
  fromCamelCase
};
