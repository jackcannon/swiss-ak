import * as fn from './higherOrder';

/**
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

const getBarString = (current: number, max: number, width: number, opts: ProgressBarOptionsFull) => {
  const { progChar, emptyChar, startChar, endChar } = opts;
  const numProgChars = Math.round(width * (Math.max(0, Math.min(current / max, 1)) / 1));
  const numEmptyChars = width - numProgChars;
  const body = `${progChar.repeat(numProgChars)}${emptyChar.repeat(numEmptyChars)}`;

  return `${startChar}${body}${endChar}`;
};

const getSuffix = (current: number, max: number, opts: ProgressBarOptionsFull) => {
  let items = [''];
  if (opts.showCount) {
    const pad = Math.max(max.toString().length, opts.countWidth);
    items.push(`[${current.toString().padStart(pad, ' ')} / ${max.toString().padStart(pad, ' ')}]`);
  }
  if (opts.showPercent) {
    const percent = Math.round((current / max) * 100);
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
  showCount: boolean;
  showPercent: boolean;
  countWidth: number;
  progChar: string;
  emptyChar: string;
  startChar: string;
  endChar: string;
}
export type ProgressBarOptions = Partial<ProgressBarOptionsFull>;
const getFullOptions = (opts: ProgressBarOptions = {}): ProgressBarOptionsFull => ({
  prefix: '',
  prefixWidth: 1,
  maxWidth: process?.stdout?.columns ? process.stdout.columns : 100,
  wrapperFn: fn.noact,
  showCount: true,
  showPercent: false,
  countWidth: 0,
  progChar: '█',
  emptyChar: ' ',
  startChar: '▕',
  endChar: '▏',
  ...opts
});

/**
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
 */
export const getProgressBar = (max: number, options: ProgressBarOptions = {}) => {
  const opts = getFullOptions(options);
  const { prefix, prefixWidth, maxWidth, wrapperFn, startChar, endChar } = opts;
  let current = 0;
  let finished = false;

  const update = () => {
    const suffix = getSuffix(current, max, opts);
    const fullPrefix = prefix.padEnd(prefixWidth);
    const output = `${fullPrefix}${getBarString(
      current,
      max,
      Math.max(0, maxWidth - [fullPrefix, suffix, startChar, endChar].join('').length),
      opts
    )}${suffix}`;

    print(output, wrapperFn);
    return output;
  };

  const next = (): string => {
    if (finished) return '';
    current++;
    return update();
  };

  const set = (newCurrent: number): string => {
    if (finished) return '';
    current = newCurrent;
    return update();
  };

  const reset = (): string => {
    return set(0);
  };

  const start = (): string => {
    printLn(); // blank/new line
    return update();
  };

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
    finish
  };
};
