export type ms = number;
export type second = number;
export type minute = number;
export type hour = number;
export type day = number;
export type week = number;
export type month = number;

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;
export const MONTH = 30 * DAY;

export const milliseconds = (num: ms): ms => num;
export const seconds = (num: second): ms => num * SECOND;
export const minutes = (num: minute): ms => num * MINUTE;
export const hours = (num: hour): ms => num * HOUR;
export const days = (num: day): ms => num * DAY;
export const weeks = (num: week): ms => num * WEEK;
export const months = (num: month): ms => num * MONTH;

export const isBetween = (v: number, min: number, max: number = min) => v >= Math.min(min, max) && v <= Math.max(min, max);

export const getOffsetTime = (time: ms = Date.now()): ms => {
  const date = new Date(time);
  const offset = minutes(date.getTimezoneOffset());
  return time - offset;
};
