// TODO make public
// TODO add docs

export namespace safe {
  // TODO add docs
  export const num = (input: number, isInt: boolean = false, min?: number, max?: number, fallback: number = 0): number => {
    let result = input;
    if (typeof result !== 'number' || result === undefined || result === null) result = fallback;
    if (Number.isNaN(result)) result = fallback;
    if (isInt) result = Math.floor(result);
    if (min !== undefined && result < min) result = min;
    if (max !== undefined && result > max) result = max;
    return result;
  };

  // TODO add docs
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

  // TODO add docs
  export const bool = (input: boolean, fallback: boolean = false): boolean => {
    let result = input;
    if (typeof result !== 'boolean' || result === undefined || result === null) result = fallback;
    return result;
  };

  // TODO add docs
  export const arr = <T extends unknown>(input: T[], fallback: T[] = []): T[] => {
    let result = input;
    if (result === undefined || result === null) result = fallback;
    if (!Array.isArray(result)) {
      const frommed = Array.from(result) as T[];
      if (Array.isArray(frommed)) {
        result = frommed;
      } else {
        result = fallback;
      }
    }
    return result;
  };

  // TODO add docs
  export const obj = <T extends unknown>(input: T, fallback: T = {} as T): T => {
    let result = input;
    if (typeof result !== 'object' || result === undefined || result === null) result = fallback;
    return result;
  };

  // TODO add docs
  export const func = <T extends unknown>(input: T, fallback: T = (() => {}) as T): T => {
    let result = input;
    if (typeof result !== 'function' || result === undefined || result === null) result = fallback;
    return result;
  };

  export namespace arrOf {
    // TODO add docs
    export const num = (input: number[], isInt: boolean = false, min?: number, max?: number, fallback: number[] = []): number[] => {
      const result = safe.arr(input, fallback);
      return result.map((item) => safe.num(item, isInt, min, max));
    };

    // TODO add docs
    export const str = (input: string[], allowStringify: boolean = false, fallback: string[] = []): string[] => {
      const result = safe.arr(input, fallback);
      return result.map((item) => safe.str(item, allowStringify));
    };

    // TODO add docs
    export const bool = (input: boolean[], fallback: boolean[] = []): boolean[] => {
      const result = safe.arr(input, fallback);
      return result.map((item) => safe.bool(item));
    };

    // TODO add docs
    export const arr = <T extends unknown>(input: T[][], fallback: T[][] = []): T[][] => {
      const result = safe.arr(input, fallback);
      return result.map((item) => safe.arr(item));
    };

    // TODO add docs
    export const obj = <T extends unknown>(input: T[], fallback: T[] = []): T[] => {
      const result = safe.arr(input, fallback);
      return result.map((item) => safe.obj(item));
    };

    // TODO add docs
    export const func = <T extends unknown>(input: T[], fallback: T[] = []): T[] => {
      const result = safe.arr(input, fallback);
      return result.map((item) => safe.func(item));
    };
  }
}
