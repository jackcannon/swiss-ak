import { safe } from './safe';
import { ms } from './times';

//<!-- DOCS: 20 -->

/**<!-- DOCS: waiters ##! -->
 * waiters
 *
 * Async functions that return promises at or after a given time.
 *
 * 'Accurate/pinged' waiters ping at intermediary points to resolve at a more accurate time.
 *
 * | Name      | Description                                          | Example                                         |
 * | --------- | ---------------------------------------------------- | ----------------------------------------------- |
 * | wait      | Standard wait promise (using setTimeout)             | `minutes(2)` = in 2 minutes                     |
 * | waitFor   | Accurate (pinged) wait the given ms                  | `minutes(2)` = in 2 minutes                     |
 * | waitUntil | Accurate (pinged) wait until given time              | `Date.now() + minutes(2)` = in 2 minutes        |
 * | waitEvery | Accurate (pinged) wait for next 'every X' event      | `hours(1)` = next full hour (e.g. 17:00, 22:00) |
 * | interval  | Accurate (pinged) interval for every 'every X' event | `hours(1)` = every hour, on the hour            |
 */
export namespace waiters {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: waiters.wait ### @ -->
   * wait
   *
   * - `wait`
   * - `waiters.wait`
   *
   * Standard wait promise (using setTimeout)
   *
   * ```typescript
   * import { wait } from 'swiss-ak';
   *
   * console.log(new Date().toTimeString()); // 12:30:10
   * await wait(minutes(2));
   * console.log(new Date().toTimeString()); // 12:32:10
   * ```
   * @param {ms} time - Time to wait in milliseconds
   * @returns {Promise<unknown>} - Promise that resolves after the given time
   */
  export const wait = (time: ms) => new Promise((resolve) => setTimeout(resolve, safe.num(time, true, 0)));

  // a certain percentage of the difference between now and given time
  const PING_RATIO = 0.75;
  const ROUND_AMOUNT = 1.5;
  const getPingDuration = (time: ms, now: ms = Date.now()): ms => Math.ceil(((time - now) * PING_RATIO) / ROUND_AMOUNT) * ROUND_AMOUNT;

  /**<!-- DOCS: waiters.waitUntil ### @ -->
   * waitUntil
   *
   * - `waitUntil`
   * - `waiters.waitUntil`
   *
   * Accurate (pinged) wait until given time
   *
   * ```typescript
   * import { waitUntil } from 'swiss-ak';
   *
   * console.log(new Date().toTimeString()); // 12:30:10
   * await waitUntil(Date.now() + minutes(10));
   * console.log(new Date().toTimeString()); // 12:40:10
   * ```
   * @param {ms} time - Unix time to wait until
   * @returns {Promise<null>} - Promise that resolves at the given time
   */
  export const waitUntil = async (time: ms): Promise<null> => {
    const args = {
      time: safe.num(time, true, 0)
    };
    while (Date.now() < args.time) {
      await wait(getPingDuration(args.time));
    }
    return null;
  };

  /**<!-- DOCS: waiters.waitFor ### @ -->
   * waitFor
   *
   * - `waitFor`
   * - `waiters.waitFor`
   *
   * Accurate (pinged) wait the given ms
   *
   * ```typescript
   * import { waitFor } from 'swiss-ak';
   *
   * console.log(new Date().toTimeString()); // 12:30:10
   * await waitFor(minutes(5));
   * console.log(new Date().toTimeString()); // 12:35:10
   * ```
   * @param {ms} time - Time to wait in milliseconds
   * @returns {Promise<null>} - Promise that resolves after the given time
   */
  export const waitFor = async (time: ms): Promise<null> => waitUntil(Date.now() + safe.num(time, true, 0));

  // get the time (ms) until the next 'every X' event
  const getNextEvery = (timing: ms, offset: ms = 0): ms => {
    const now = Date.now();
    const result = timing - ((now - offset) % timing);
    return result <= 10 ? timing : result;
  };

  /**<!-- DOCS: waiters.waitEvery ### @ -->
   * waitEvery
   *
   * - `waitEvery`
   * - `waiters.waitEvery`
   *
   * Accurate (pinged) wait for next 'every X' event
   *
   * ```typescript
   * import { waitEvery } from 'swiss-ak';
   *
   * console.log(new Date().toTimeString()); // 12:30:10
   * await waitEvery(hours(2));
   * console.log(new Date().toTimeString()); // 14:00:00
   * ```
   * @param {ms} timing - Timing period in milliseconds
   * @param {ms} [offset] - Offset in milliseconds
   * @returns {Promise<null>} - Promise that resolves at the next 'every X' event
   */
  export const waitEvery = (timing: ms, offset?: ms): Promise<null> => {
    const args = {
      timing: safe.num(timing, true, 0),
      offset: safe.num(offset, true, 0)
    };
    return waitFor(getNextEvery(args.timing, args.offset));
  };

  const stopped: number[] = [];
  /**<!-- DOCS: waiters.stopInterval ### @ -->
   * stopInterval
   *
   * - `stopInterval`
   * - `waiters.stopInterval`
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
   * @param {number} intID - Interval ID
   * @returns {void}
   */
  export const stopInterval = (intID: number): void => {
    const args = {
      intID: safe.num(intID, true, 0)
    };
    stopped.push(args.intID);
  };

  /**<!-- DOCS: waiters.interval ### @ -->
   * interval
   *
   * - `interval`
   * - `waiters.interval`
   *
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
   * @param {(intID?: number, count?: number) => any} action - Action to run on each interval
   * @param {ms} timing - Timing period in milliseconds
   * @returns {number} - Interval ID
   */
  export const interval = (action: (intID?: number, count?: number) => any, timing: ms): number => {
    const args = {
      action: safe.func(action),
      timing: safe.num(timing, true, 1, undefined, 1)
    };
    const intID: number = safe.num(Math.floor(Math.random() * Math.pow(10, 10)), true, 0);
    let count: number = 0;
    const run = async () => {
      await waitEvery(args.timing);
      if (stopped.includes(intID)) {
        return;
      }
      args.action(intID, ++count);
      run();
    };
    run();
    return intID;
  };
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: waiters.wait  --> */
export const wait = waiters.wait;
/** <!-- DOCS-ALIAS: waiters.waitUntil  --> */
export const waitUntil = waiters.waitUntil;
/** <!-- DOCS-ALIAS: waiters.waitFor  --> */
export const waitFor = waiters.waitFor;
/** <!-- DOCS-ALIAS: waiters.waitEvery  --> */
export const waitEvery = waiters.waitEvery;
/** <!-- DOCS-ALIAS: waiters.stopInterval  --> */
export const stopInterval = waiters.stopInterval;
/** <!-- DOCS-ALIAS: waiters.interval  --> */
export const interval = waiters.interval;
