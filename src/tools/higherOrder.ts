// no operation
export const noop = () => {};
export const noact = <T extends unknown>(item: T): T => item;
export const result =
  <T extends unknown>(item: T) =>
  (): T =>
    item;

// filter
export const exists = <T extends unknown>(item: T): boolean => item !== undefined && item !== null;
export const isTruthy = <T extends unknown>(item: T): boolean => Boolean(item);
export const isFalsy = <T extends unknown>(item: T): boolean => !Boolean(item);
export const isEmpty = <T extends unknown>(item: T[] | string): boolean => Boolean(!item || !item.length);
export const isNotEmpty = <T extends unknown>(item: T[] | string): boolean => Boolean(item && item.length);
export const isEqual =
  <T extends unknown>(item: T) =>
  (other: T) =>
    Boolean(item === other);
export const isNotEqual =
  <T extends unknown>(item: T) =>
  (other: T) =>
    Boolean(item !== other);

export const filters = {
  exists
};

// map
export const toString = <T extends unknown>(item: T): string => item + '';
export const toNumber = <T extends unknown>(item: T): number => Number(item);
export const toBool = <T extends unknown>(item: T): boolean => Boolean(item);

export const toProp =
  <T extends unknown, P extends unknown>(propName: string) =>
  (item: T): P =>
    item && item[propName];

export const maps = {
  toString,
  toNumber,
  toBool,
  toProp
};

// sort
export const asc = (a: any, b: any): number => Number(a) - Number(b);
export const desc = (a: any, b: any): number => Number(b) - Number(a);

export const sorts = {
  asc,
  desc
};

// reduce
export const combine = (a: any, b: any): any => a + b;
export const combineProp =
  (propName: string) =>
  (a: any, b: any): any =>
    a[propName] + b[propName];

export const reduces = {
  combine,
  combineProp
};
