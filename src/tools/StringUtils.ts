// TODO docs for this whole file

// TODO docs
const capitalise = (input: string = '') =>
  (input || '')
    .split(/\s/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

// TODO docs
const angloise = (input: string): string => input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// TODO docs
const clean = (input: string = ''): string =>
  angloise([input].flat().join(' '))
    .replace(/\s{1,}/g, ' ')
    .replace(/[^A-Za-z0-9 ]/gi, '');

// TODO docs
export type CaseInput = string | string[];
type SplittingFn = (input: CaseInput) => string[];

// TODO docs
export interface StringCaseHandler {
  // TODO docs
  toLowerCamelCase(input: CaseInput): string;
  // TODO docs
  toUpperCamelCase(input: CaseInput): string;
  // TODO docs
  toCamelCase(input: CaseInput, capitaliseFirst?: boolean): string;

  // TODO docs
  toLowerSlugCase(input: CaseInput): string;
  // TODO docs
  toUpperSlugCase(input: CaseInput): string;
  // TODO docs
  toSlugCase(input: CaseInput, toUpper?: boolean): string;

  // TODO docs
  toLowerSnakeCase(input: CaseInput): string;
  // TODO docs
  toUpperSnakeCase(input: CaseInput): string;
  // TODO docs
  toSnakeCase(input: CaseInput, toUpper?: boolean): string;

  // TODO docs
  toLowerSpaced(input: CaseInput): string;
  // TODO docs
  toUpperSpaced(input: CaseInput): string;
  // TODO docs
  toCapitalisedSpaced(input: CaseInput): string;
  // TODO docs
  toSpaced(input: CaseInput, toUpper?: boolean): string;

  // TODO docs
  toCharacterSeparated(input: CaseInput, char: string, toUpper?: boolean): string;
}
const caseHandler = (overrideSplitter?: SplittingFn): StringCaseHandler => {
  const getSplit: SplittingFn = (input: CaseInput): string[] => {
    if (overrideSplitter) return overrideSplitter(input);
    const arr = [input].flat();
    return arr.map((s) => clean(s.replace(/-|_/g, ' ')).split(' ')).flat();
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

// TODO docs
const fromSlugCase = standardCaseHandler;

// TODO docs
const fromSnakeCase = standardCaseHandler;

// TODO docs
const fromSpaced = standardCaseHandler;

// TODO docs
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
