import { safe as safeOriginal } from '../';

const core = {
  describe: ((name, func) => func()) as jest.Describe,
  it: ((name, func) => func((() => {}) as any)) as jest.It,
  expect: ((actual) => {}) as jest.Expect
};

export const register = (newCore: Partial<typeof core>) => {
  Object.assign(core, newCore);
};

export const multiTest = <T extends unknown>(items: [T, string][], run: (item: T, name: string) => void) => {
  items.forEach(([item, name]) => {
    core.describe(name, () => {
      run(item, name);
    });
  });
};

const runKitchenSink = <Ti extends unknown, To extends unknown>(
  checkType: 'toBe' | 'toEqual',
  name: string,
  sink: (value: Ti) => To | Promise<To>,
  normaliser: (value: any) => Ti,
  testInputs: any[]
) => {
  testInputs.forEach((input) => {
    core.it(`should handle ${name} being ${JSON.stringify(input)}`, async () => {
      const normalised = normaliser(input);
      const actual = await sink(input);
      const expected = await sink(normalised);
      if (checkType === 'toBe') {
        core.expect(actual).toBe(expected);
      } else {
        core.expect(actual).toEqual(expected);
      }
    });
  });
};

export const kitchenSink = {
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
  },
  num: [0, 1.5, 2.25, -1, -15, NaN, undefined, null, Infinity, -Infinity, '123', 'a string', true, false, { foo: 'bar' }, ['foo', 'bar']],
  general: [undefined, null, Infinity, '123', 'a string', true, false, 123, 0, { foo: 'bar' }, ['foo', 'bar']],
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

    arrOf: {
      num:
        (defaultValue: number[], isInt: boolean = false, min?: number, max?: number, fallback?: number, fallbackArr: number[] = []) =>
        (input: number[] = defaultValue): number[] =>
          safeOriginal.arrOf.num(input, isInt, min, max, fallback, fallbackArr),
      str:
        (defaultValue: string[], allowStringify: boolean = false, fallback?: string, fallbackArr: string[] = []) =>
        (input: string[] = defaultValue): string[] =>
          safeOriginal.arrOf.str(input, allowStringify, fallback, fallbackArr),
      bool:
        (defaultValue: boolean[], fallback?: boolean, fallbackArr: boolean[] = []) =>
        (input: boolean[] = defaultValue): boolean[] =>
          safeOriginal.arrOf.bool(input, fallback, fallbackArr),
      func:
        <T extends Function>(defaultValue: T[], fallback?: T, fallbackArr: T[] = []) =>
        (input: T[] = defaultValue): T[] =>
          safeOriginal.arrOf.func(input, fallback, fallbackArr),
      obj:
        <T extends unknown>(defaultValue: T[], fallback?: T, fallbackArr: T[] = []) =>
        (input: T[] = defaultValue): T[] =>
          safeOriginal.arrOf.obj(input, fallback, fallbackArr),
      arr:
        <T extends unknown>(defaultValue: T[][], fallback?: T[], fallbackArr: T[][] = []) =>
        (input: T[][] = defaultValue): T[][] =>
          safeOriginal.arrOf.arr(input, fallback, fallbackArr)
    }
  }
};
