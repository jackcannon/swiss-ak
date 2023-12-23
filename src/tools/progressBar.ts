import { option } from '../utils/optionUtils';
import { fn } from './fn';
import { safe } from './safe';

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

  /**<!-- DOCS: progressBar.printLn ### @ -->
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

  const printWrapped = (text?: string, wrapperFn: any = fn.noact, printFn: any = printLn) => {
    const wrapped = wrapperFn(text || '');
    printFn(wrapped);
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
    print: boolean;
    printFn: any;
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
   * | prefixWidth      | `0`                               | Min width of prefix - `10` => `Example˽˽˽`             |
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
   * | print            | `true`                            | Whether or not to print/output/log the progress bar    |
   * | printFn          | progressBar.printLn               | Function to use to print the progress bar              |
   */
  export type ProgressBarOptions = Partial<ProgressBarOptionsFull>;
  export const getFullOptions = (opts: ProgressBarOptions = {}): ProgressBarOptionsFull => ({
    prefix: option(opts.prefix, '', (v, dflt) => safe.str(v, true, dflt)),
    prefixWidth: option(opts.prefixWidth, 0, (v, dflt) => safe.num(v, true, 0, undefined, dflt)),
    maxWidth: option(opts.maxWidth, process?.stdout?.columns !== undefined ? process.stdout.columns : 100, (v, dflt) =>
      safe.num(v, true, 0, undefined, dflt)
    ),
    wrapperFn: option(opts.wrapperFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
    barWrapFn: option(opts.barWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
    barProgWrapFn: option(opts.barProgWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
    barCurrentWrapFn: option(opts.barCurrentWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
    barEmptyWrapFn: option(opts.barEmptyWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
    showCount: option(opts.showCount, true, (v, dflt) => safe.bool(v, dflt)),
    showPercent: option(opts.showPercent, false, (v, dflt) => safe.bool(v, dflt)),
    countWidth: option(opts.countWidth, 0, (v, dflt) => safe.num(v, true, 0, undefined, dflt)),
    progChar: option(opts.progChar, '█', (v, dflt) => safe.str(v, false, dflt)),
    emptyChar: option(opts.emptyChar, ' ', (v, dflt) => safe.str(v, false, dflt)),
    startChar: option(opts.startChar, '▕', (v, dflt) => safe.str(v, false, dflt)),
    endChar: option(opts.endChar, '▏', (v, dflt) => safe.str(v, false, dflt)),
    showCurrent: option(opts.showCurrent, false, (v, dflt) => safe.bool(v, dflt)),
    currentChar: option(opts.currentChar, '▞', (v, dflt) => safe.str(v, false, dflt)),
    print: option(opts.print, true, (v, dflt) => safe.bool(v, dflt)),
    printFn: option(opts.printFn, progressBar.printLn, (v, dflt) => safe.func(v, dflt))
  });

  /**<!-- DOCS: progressBar.getProgressBar ### @ -->
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
   * @param {number} [max]
   * @param {ProgressBarOptions} [options={}]
   * @returns {ProgressBar}
   */
  export const getProgressBar = (max?: number, options: ProgressBarOptions = {}): ProgressBar => {
    const args = {
      max: safe.num(max, true, -1, undefined, -1),
      options: safe.obj(options, {})
    };
    const opts = getFullOptions(args.options);
    const { prefix, prefixWidth, maxWidth, wrapperFn, startChar, endChar, print, printFn } = opts;
    let current = 0;
    let finished = false;

    const isMaxKnown = args.max !== -1;

    /**<!-- DOCS: progressBar.update #### -->
     * update
     *
     * - `getProgressBar().update`
     *
     * Trigger the progress bar to update/rerender
     * @returns {string} The output string
     */
    const update = (): string => {
      const suffix = getSuffix(current, args.max, isMaxKnown, opts);

      const idealMinBarWidth = Math.min(5, maxWidth - [suffix, startChar, endChar].join('').length);
      const maxPrefixWidth = maxWidth - ([suffix, startChar, endChar].join('').length + idealMinBarWidth);

      const fullPrefix = prefix.padEnd(prefixWidth).substring(0, maxPrefixWidth);

      const output = `${fullPrefix}${getBarString(
        current,
        Math.max(1, args.max),
        Math.max(0, maxWidth - [fullPrefix, suffix, startChar, endChar].join('').length),
        opts
      )}${suffix}`;

      if (print) printWrapped(output, wrapperFn, printFn);
      return output;
    };

    /**<!-- DOCS: progressBar.next #### -->
     * next
     *
     * - `getProgressBar().next`
     *
     * Set the progress bar to the next value
     * @returns {string} The output string
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
     * @param {number} newCurrent
     * @returns {string} The output string
     */
    const set = (newCurrent: number): string => {
      const args = {
        newCurrent: safe.num(newCurrent, true, 0, undefined)
      };
      if (finished) return '';
      current = args.newCurrent;
      return update();
    };

    /**<!-- DOCS: progressBar.reset #### -->
     * reset
     *
     * - `getProgressBar().reset`
     *
     * Set the progress bar to 0
     * @returns {string} The output string
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
     * @returns {string} The output string
     */
    const start = (): string => {
      if (opts.print) opts.printFn(); // blank/new line
      return update();
    };

    /**<!-- DOCS: progressBar.finish #### -->
     * finish
     *
     * - `getProgressBar().finish`
     *
     * Stop displaying the progress bar
     * @returns {string} The output string
     */
    const finish = (): string => {
      finished = true;
      const output = update();
      if (opts.print) opts.printFn(); // blank/new line
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
      max: args.max === -1 ? undefined : args.max
    };
  };
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE

/** <!-- DOCS-ALIAS: progressBar.ProgressBarOptions  --> */
export type ProgressBarOptions = progressBar.ProgressBarOptions;
/** <!-- DOCS-ALIAS: progressBar.printLn  --> */
export const printLn = progressBar.printLn;
/** <!-- DOCS-ALIAS: progressBar.getProgressBar  --> */
export const getProgressBar = progressBar.getProgressBar;
