import { ms } from './times';

/**
 * Standard wait promise (using setTimeout)
 *
 * ```typescript
 * import { wait } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * await wait(minutes(2));
 * console.log(new Date().toTimeString()); // 12:32:10
 * ```
 */
export const wait = (time: ms) => new Promise((resolve) => setTimeout(resolve, time));

// a certain percentage of the difference between now and given time
const PING_RATIO = 0.75;
const ROUND_AMOUNT = 1.5;
const getPingDuration = (time: ms, now: ms = Date.now()): ms => Math.ceil(((time - now) * PING_RATIO) / ROUND_AMOUNT) * ROUND_AMOUNT;

/**
 * Accurate (pinged) wait until given time
 *
 * ```typescript
 * import { waitUntil } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * await waitUntil(Date.now() + minutes(10));
 * console.log(new Date().toTimeString()); // 12:40:10
 * ```
 */
export const waitUntil = async (time: ms): Promise<null> => {
  while (Date.now() < time) {
    await wait(getPingDuration(time));
  }
  return null;
};

/**
 * Accurate (pinged) wait the given ms
 *
 * ```typescript
 * import { waitFor } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * await waitFor(minutes(5));
 * console.log(new Date().toTimeString()); // 12:35:10
 * ```
 */
export const waitFor = async (time: ms): Promise<null> => waitUntil(Date.now() + time);

// get the time (ms) until the next 'every X' event
const getNextEvery = (timing: ms, offset: ms = 0): ms => {
  const now = Date.now();
  const result = timing - ((now - offset) % timing);
  return result <= 10 ? timing : result;
};

/**
 * Accurate (pinged) wait for next 'every X' event
 *
 * ```typescript
 * import { waitEvery } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * await waitEvery(hours(2));
 * console.log(new Date().toTimeString()); // 14:00:00
 * ```
 */
export const waitEvery = (timing: ms, offset?: ms): Promise<null> => waitFor(getNextEvery(timing, offset));

const stopped: number[] = [];
/**
 * ```typescript
 * import { interval, stopInterval } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * interval((intID, count) => {
 *   console.log(new Date().toTimeString()); // 13:00:00, 14:00:00, 15:00:00
 *   if (count === 3) {
 *     stopInterval(intID);
 *   }
 * }, hours(1));
 * ```
 */
export const stopInterval = (intID: number) => stopped.push(intID);

/**
 * Accurate (pinged) interval for every 'every X' event
 *
 * ```typescript
 * import { interval, stopInterval } from 'swiss-ak';
 *
 * console.log(new Date().toTimeString()); // 12:30:10
 * interval((intID, count) => {
 *   console.log(new Date().toTimeString()); // 13:00:00, 14:00:00, 15:00:00
 *   if (count === 3) {
 *     stopInterval(intID);
 *   }
 * }, hours(1));
 * ```
 */
export const interval = (action: (intID?: number, count?: number) => any, timing: ms): number => {
  const intID: number = Math.floor(Math.random() * Math.pow(10, 10));
  let count: number = 0;
  const run = async () => {
    await waitEvery(timing);
    if (stopped.includes(intID)) {
      return;
    }
    action(intID, ++count);
    run();
  };
  run();
  return intID;
};
