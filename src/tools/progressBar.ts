import { fn } from './fn';

//<!-- DOCS: 600 -->

export interface ProgressBar {
  /** <!-- DOCS-ALIAS: progressBar.next  --> */
  next: () => string;
  /** <!-- DOCS-ALIAS: progressBar.set  --> */
  set: (newCurrent: number) => string;
  /** <!-- DOCS-ALIAS: progressBar.reset  --> */
  reset: () => string;
  /** <!-- DOCS-ALIAS: progressBar.update  --> */
  update: () => string;
  /** <!-- DOCS-ALIAS: progressBar.start  --> */
  start: () => string;
  /** <!-- DOCS-ALIAS: progressBar.finish  --> */
  finish: () => string;
  /** <!-- DOCS-ALIAS: progressBar.max  --> */
  readonly max: number;
}

/**<!-- DOCS: progressBar ##! -->
 * progressBar
 *
 * A progress bar that can be used in the terminal.
 *
 * > NOTE: This is eventually be moved to `swiss-node`
 */
export namespace progressBar {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: progressBar.printLn ### -->
   * printLn
   *
   * - `printLn`
   * - `progressBar.printLn`
   *
   * Can use instead of console.log
   *
   * Overwrites the previous line if possible (i.e. node);
   *
   * Usage
   * ```javascript
   * import { printLn } from 'swiss-ak';
   *
   * printLn('A');
   * printLn('B'); // Replaces the 'A' line
   * printLn('C'); // Replaces the 'B' line
   * printLn(); // Jumps a line
   * printLn('D'); // Replaces the empty line
   * ```
   *
   * Output
   * ```
   * C
   * D
   * ```
   * @param {...any} [text]
   * @returns {void}
   */
  export const printLn = (...text: any[]) => {
    if (process?.stdout?.clearLine && process?.stdout?.cursorTo) {
      if (!text.length) {
        process.stdout.write('\n');
      } else {
        const output = text.map((item) => item.toString()).join(' ');
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(0);
        process.stdout.write(output);
        process.stdout.write('\n');
      }
    } else {
      console.log(...text);
    }
  };

  const print = (text?: string, wrapperFn: any = fn.noact) => {
    const wrapped = wrapperFn(text || '');
    printLn(wrapped);
  };

  const getCharWidth = (num: number, max: number, width: number) => Math.round(width * (Math.max(0, Math.min(num / max, 1)) / 1));
  const getBarString = (current: number, max: number, width: number, opts: ProgressBarOptionsFull) => {
    const { progChar, emptyChar, startChar, endChar, showCurrent, currentChar } = opts;
    const numProgChars = getCharWidth(current, max, width);
    const numNextChars = getCharWidth(current + 1, max, width);
    const numCurrentChars = showCurrent ? numNextChars - numProgChars : 0;
    const numEmptyChars = width - numProgChars - numCurrentChars;

    const prog = opts.barProgWrapFn(progChar.repeat(numProgChars));
    const curr = opts.barCurrentWrapFn(currentChar.repeat(numCurrentChars));
    const empt = opts.barEmptyWrapFn(emptyChar.repeat(numEmptyChars));

    const body = opts.barWrapFn(`${prog}${curr}${empt}`);

    return `${startChar}${body}${endChar}`;
  };

  const getSuffix = (current: number, maxNum: number, isMaxKnown: boolean, opts: ProgressBarOptionsFull) => {
    let items = [''];
    if (opts.showCount) {
      const pad = Math.max(maxNum.toString().length, opts.countWidth);
      items.push(`[${current.toString().padStart(pad, ' ')} / ${(isMaxKnown ? maxNum.toString() : '?').padStart(pad, ' ')}]`);
    }
    if (opts.showPercent) {
      const percent = Math.round((current / Math.max(1, maxNum)) * 100);
      items.push(`(${percent.toString().padStart('100'.toString().length, ' ')}%)`);
    }
    const joined = items.filter((x) => x).join(' ');
    return joined.length ? ' ' + joined : '';
  };

  interface ProgressBarOptionsFull {
    prefix: string;
    prefixWidth: number;
    maxWidth: number;
    wrapperFn: any;
    barWrapFn: any;
    barProgWrapFn: any;
    barCurrentWrapFn: any;
    barEmptyWrapFn: any;
    showCount: boolean;
    showPercent: boolean;
    countWidth: number;
    progChar: string;
    emptyChar: string;
    startChar: string;
    endChar: string;
    showCurrent: boolean;
    currentChar: string;
  }
  /**<!-- DOCS: progressBar.ProgressBarOptions ### -->
   * Options
   *
   * - `ProgressBarOptions`
   * - `progressBar.ProgressBarOptions`
   *
   * All options are optional.
   *
   * | Property         | Default                           | Description                                            |
   * | ---------------- | --------------------------------- | ------------------------------------------------------ |
   * | prefix           | `''`                              | String to show to left of progress bar                 |
   * | prefixWidth      | `1`                               | Min width of prefix - `10` => `Example˽˽˽`             |
   * | maxWidth         | `process.stdout.columns` or `100` | The maximum width the entire string may extend         |
   * | wrapperFn        | nothing                           | function to wrap the printed string (eg `chalk.cyan)`  |
   * | barWrapFn        | nothing                           | function to wrap the bar                               |
   * | barProgWrapFn    | nothing                           | function to wrap the 'complete' segment of the bar     |
   * | barCurrentWrapFn | nothing                           | function to wrap the 'current' segment of the bar      |
   * | barEmptyWrapFn   | nothing                           | function to wrap the empty/track part of the line      |
   * | showCount        | `true`                            | Show numerical values of the count - `[11 / 15]`       |
   * | showPercent      | `false`                           | Show percentage completed - `( 69%)`                   |
   * | countWidth       | `0`                               | Min width of nums for showCount - `3` => `[˽˽1 / ˽15]` |
   * | progChar         | `'█'`                             | Character to use for progress section of bar           |
   * | emptyChar        | `' '`                             | Character to use for empty (rail) section of bar       |
   * | startChar        | `'▕'`                             | Character to start the progress bar with               |
   * | endChar          | `'▏'`                             | Character to end the progress bar with                 |
   * | showCurrent      | `'▏'`                             | Show the 'current' segment of the bar seperately       |
   * | currentChar      | `'▏'`                             | Character to use the the 'current' segment             |
   */
  export type ProgressBarOptions = Partial<ProgressBarOptionsFull>;
  const getFullOptions = (opts: ProgressBarOptions = {}): ProgressBarOptionsFull => ({
    prefix: '',
    prefixWidth: 1,
    maxWidth: process?.stdout?.columns ? process.stdout.columns : 100,
    wrapperFn: fn.noact,
    barWrapFn: fn.noact,
    barProgWrapFn: fn.noact,
    barCurrentWrapFn: fn.noact,
    barEmptyWrapFn: fn.noact,
    showCount: true,
    showPercent: false,
    countWidth: 0,
    progChar: '█',
    emptyChar: ' ',
    startChar: '▕',
    endChar: '▏',
    showCurrent: false,
    currentChar: '▞',
    ...opts
  });

  /**<!-- DOCS: progressBar.getProgressBar ### -->
   * getProgressBar
   *
   * - `getProgressBar`
   * - `progressBar.getProgressBar`
   *
   * Usage:
   * ```typescript
   * import chalk from 'chalk'
   * import {getProgressBar} from 'swiss-ak';
   *
   * console.log('-'.repeat(20) + ' < 20 Chars');
   *
   * const progress = getProgressBar(5, {
   *   prefix: 'ABC',
   *   maxWidth: 20,
   *   chalk,
   *   wrapperFn: chalk.green
   * });
   * for (let i = 1; i <= 5; i++) {
   *   progress.set(i);
   * }
   * progress.finish();
   * ```
   *
   * Output:
   * ```
   * -------------------- < 20 Chars
   * ABC ▕      ▏ [0 / 5]
   * ABC ▕█     ▏ [1 / 5]
   * ABC ▕██    ▏ [2 / 5]
   * ABC ▕████  ▏ [3 / 5]
   * ABC ▕█████ ▏ [4 / 5]
   * ABC ▕██████▏ [5 / 5]
   * ```
   * @param {number} max
   * @param {ProgressBarOptions} [options={}]
   * @returns {ProgressBar}
   */
  export const getProgressBar = (max: number, options: ProgressBarOptions = {}): ProgressBar => {
    const opts = getFullOptions(options);
    const { prefix, prefixWidth, maxWidth, wrapperFn, startChar, endChar } = opts;
    let current = 0;
    let finished = false;

    const maxNum = typeof max === 'number' ? max : 1;
    const isMaxKnown = typeof max === 'number';

    /**<!-- DOCS: progressBar.update #### -->
     * update
     *
     * - `getProgressBar().update`
     *
     * Trigger the progress bar to update/rerender
     */
    const update = () => {
      const suffix = getSuffix(current, maxNum, isMaxKnown, opts);
      const fullPrefix = prefix.padEnd(prefixWidth);
      const output = `${fullPrefix}${getBarString(
        current,
        Math.max(1, maxNum),
        Math.max(0, maxWidth - [fullPrefix, suffix, startChar, endChar].join('').length),
        opts
      )}${suffix}`;

      print(output, wrapperFn);
      return output;
    };

    /**<!-- DOCS: progressBar.next #### -->
     * next
     *
     * - `getProgressBar().next`
     *
     * Set the progress bar to the next value
     */
    const next = (): string => {
      if (finished) return '';
      current++;
      return update();
    };

    /**<!-- DOCS: progressBar.set #### -->
     * set
     *
     * - `getProgressBar().set`
     *
     * Set the progress bar to a specific value
     */
    const set = (newCurrent: number): string => {
      if (finished) return '';
      current = newCurrent;
      return update();
    };

    /**<!-- DOCS: progressBar.reset #### -->
     * reset
     *
     * - `getProgressBar().reset`
     *
     * Set the progress bar to 0
     */
    const reset = (): string => {
      return set(0);
    };

    /**<!-- DOCS: progressBar.start #### -->
     * start
     *
     * - `getProgressBar().start`
     *
     * Start displaying the progress bar
     */
    const start = (): string => {
      printLn(); // blank/new line
      return update();
    };

    /**<!-- DOCS: progressBar.finish #### -->
     * finish
     *
     * - `getProgressBar().finish`
     *
     * Stop displaying the progress bar
     */
    const finish = (): string => {
      finished = true;
      const output = update();
      printLn(); // blank/new line
      return output;
    };

    return {
      next,
      set,
      reset,
      update,
      start,
      finish,

      /**<!-- DOCS: progressBar.max #### -->
       * max
       *
       * - `getProgressBar().max`
       *
       * Readonly number value of the max value (provided to getProgressBar as first argument)
       */
      max
    };
  };
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: progressBar.ProgressBarOptions  --> */
export type ProgressBarOptions = progressBar.ProgressBarOptions;
/** <!-- DOCS-ALIAS: progressBar.printLn  --> */
export const printLn = progressBar.printLn;
/** <!-- DOCS-ALIAS: progressBar.getProgressBar  --> */
export const getProgressBar = progressBar.getProgressBar;
