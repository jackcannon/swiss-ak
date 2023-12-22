import { safe as safeOriginal } from '../';

const DEBUG = false;

const core = {
  describe: ((name, func) => func()) as jest.Describe,
  it: ((name, func) => func((() => {}) as any)) as jest.It,
  expect: ((actual) => {}) as jest.Expect
};

export const register = (newCore: Partial<typeof core>) => {
  Object.assign(core, newCore);
};

/**
 * Helper to test multiple items with the same test function
 */
export const multiTest = <T extends unknown>(items: [T, string][], run: (item: T, name: string) => void) => {
  items.forEach(([item, name]) => {
    core.describe(name, () => {
      run(item, name);
    });
  });
};

/**
 * Helper to test a single item with a test function
 *
 * Follows similar pattern to multiTest for consistency
 */
export const singleTest = <T extends unknown>(item: T, name: string, run: (item: T, name: string) => void) => {
  core.describe(name, () => {
    run(item, name);
  });
};

export const stringifyValue = (value: any) => {
  if (typeof value === 'function') {
    const lines = value
      .toString()
      .split(/\n\s*/gm)
      .filter((line) => line.trim().length);
    return (lines.length > 2 ? [...lines.slice(0, 2), lines.length > 3 ? '...' : undefined, lines.at(-1)] : lines.slice(0, 2))
      .filter((l) => l)
      .join(' ');
  }
  if (typeof value === 'undefined') {
    return 'undefined';
  }

  const json = JSON.stringify(value);
  if (json === 'null' && value !== null) {
    // values such as NaN and Infinity are not valid JSON, so we need to handle them separately
    return value + '';
  }

  return json;
};
/**
 * ```typescript
 * it(should` return a thing`, () => { ... })
 * ```
 */
export const should = (strings: TemplateStringsArray, ...exps: any[]) => {
  const prefix = 'should' + ((strings[0] || '').startsWith(' ') ? '' : ' ');
  const output = [...exps.flatMap((exp, i) => [strings[i], stringifyValue(exp)]), [...strings].at(-1)];
  return prefix + output.join('');
};

const runKitchenSink = <Ti extends unknown, To extends unknown>(
  checkType: 'toBe' | 'toEqual',
  name: string,
  sink: (value: Ti) => To | Promise<To>,
  normaliser: (value: any) => Ti,
  testInputs: any[]
) => {
  testInputs.forEach((input) => {
    const normalised = normaliser(input);
    core.it(should` handle ${name} being ${input}   \u001b[2m(as ${normalised})\u001b[22m`, async () => {
      const actual = await sink(input);
      const expected = await sink(normalised);

      if (DEBUG) console.log();
      if (DEBUG) console.log('input:', stringifyValue(input), '->', stringifyValue(normalised));
      if (DEBUG) console.log('value:', actual, '==', expected);
      if (DEBUG) console.log();

      if (checkType === 'toBe') {
        core.expect(actual).toBe(expected);
      } else {
        core.expect(actual).toEqual(expected);
      }
    });
  });
};

type KitchenSinkTestFunction = <Ti extends unknown, To extends unknown>(
  name: string,
  sink: (value: Ti) => To | Promise<To>,
  normaliser: (value: any) => Ti,
  testInputs?: any[]
) => void;

const kitchenSinkTesters: {
  toBe: KitchenSinkTestFunction;
  toEqual: KitchenSinkTestFunction;
} = {
  toBe<Ti extends unknown, To extends unknown>(
    name: string,
    sink: (value: Ti) => To | Promise<To>,
    normaliser: (value: any) => Ti,
    testInputs: any[] = kitchenSink.general
  ) {
    return runKitchenSink('toBe', name, sink, normaliser, testInputs);
  },
  toEqual<Ti extends unknown, To extends unknown>(
    name: string,
    sink: (value: Ti) => To | Promise<To>,
    normaliser: (value: any) => Ti,
    testInputs: any[] = kitchenSink.general
  ) {
    return runKitchenSink('toEqual', name, sink, normaliser, testInputs);
  }
};

const kitchenSinkSamples = {
  num: [0, 1.5, 2.25, -1, -15, NaN, undefined, null, Infinity, -Infinity, '123', 'a string', true, false, { foo: 'bar' }, ['foo', 'bar']],
  general: [undefined, null, NaN, Infinity, '123', 'a string', true, false, 123, 0, { foo: 'bar' }, ['foo', 'bar']]
};

const kitchenSinkSafe = {
  safe: {
    num:
      (defaultValue: number, isInt: boolean = false, min?: number, max?: number, fallback: number = 0) =>
      (input: number = defaultValue): number =>
        safeOriginal.num(input, isInt, min, max, fallback),
    str:
      (defaultValue: string, allowBasicStringify: boolean = false, fallback: string = '') =>
      (input: string = defaultValue): string =>
        safeOriginal.str(input, allowBasicStringify, fallback),
    bool:
      (defaultValue: boolean, fallback: boolean = false) =>
      (input: boolean = defaultValue): boolean =>
        safeOriginal.bool(input, fallback),
    func:
      <T extends Function>(defaultValue: T, fallback: T = (() => {}) as unknown as T) =>
      (input: T = defaultValue): T =>
        safeOriginal.func(input, fallback),
    obj:
      <T extends unknown>(defaultValue: T, fallback: T = {} as T) =>
      (input: T = defaultValue): T =>
        safeOriginal.obj(input, fallback),
    arr:
      <T extends unknown>(defaultValue: T[], fallback: T[] = []) =>
      (input: T[] = defaultValue): T[] =>
        safeOriginal.arr(input, fallback),
    prop:
      (defaultValue: string | number, fallback: string | number = '') =>
      (input: string | number = defaultValue): string | number =>
        safeOriginal.prop(input, fallback),

    arrOf: {
      num:
        (
          defaultValue: number[],
          isInt: boolean = false,
          min?: number,
          max?: number,
          fallback?: number,
          fallbackArr: number[] = [],
          arrMinLength: number = 0,
          arrMaxLength: number = Infinity
        ) =>
        (input: number[] = defaultValue): number[] =>
          safeOriginal.arrOf.num(input, isInt, min, max, fallback, fallbackArr),
      str:
        (
          defaultValue: string[],
          allowStringify: boolean = false,
          fallback?: string,
          fallbackArr: string[] = [],
          arrMinLength: number = 0,
          arrMaxLength: number = Infinity
        ) =>
        (input: string[] = defaultValue): string[] =>
          safeOriginal.arrOf.str(input, allowStringify, fallback, fallbackArr),
      bool:
        (defaultValue: boolean[], fallback?: boolean, fallbackArr: boolean[] = [], arrMinLength: number = 0, arrMaxLength: number = Infinity) =>
        (input: boolean[] = defaultValue): boolean[] =>
          safeOriginal.arrOf.bool(input, fallback, fallbackArr),
      func:
        <T extends Function>(defaultValue: T[], fallback?: T, fallbackArr: T[] = [], arrMinLength: number = 0, arrMaxLength: number = Infinity) =>
        (input: T[] = defaultValue): T[] =>
          safeOriginal.arrOf.func(input, fallback, fallbackArr),
      obj:
        <T extends unknown>(defaultValue: T[], fallback?: T, fallbackArr: T[] = [], arrMinLength: number = 0, arrMaxLength: number = Infinity) =>
        (input: T[] = defaultValue): T[] =>
          safeOriginal.arrOf.obj(input, fallback, fallbackArr),
      arr:
        <T extends unknown>(
          defaultValue: T[][],
          fallback?: T[],
          fallbackArr: T[][] = [],
          arrMinLength: number = 0,
          arrMaxLength: number = Infinity
        ) =>
        (input: T[][] = defaultValue): T[][] =>
          safeOriginal.arrOf.arr(input, fallback, fallbackArr),
      prop:
        (
          defaultValue: (string | number)[],
          fallback?: string | number,
          fallbackArr: (string | number)[] = [],
          arrMinLength: number = 0,
          arrMaxLength: number = Infinity
        ) =>
        (input: (string | number)[] = defaultValue): (string | number)[] =>
          safeOriginal.arrOf.prop(input, fallback, fallbackArr)
    }
  }
};
export const kitchenSink = {
  ...kitchenSinkTesters,
  ...kitchenSinkSamples,
  ...kitchenSinkSafe
};
