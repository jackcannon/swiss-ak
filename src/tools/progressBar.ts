const noWrap = (x: any) => x;
const noChalk = {
  dim: noWrap,
  bold: noWrap
};

const getBarString = (
  current: number,
  max: number,
  width: number = 50,
  chalk: any = noChalk,
  progChar: string = '█',
  emptyChar: string = ' ',
  prefix: string = '▕',
  suffix: string = '▏'
) => {
  const numProgChars = Math.round(width * (Math.max(0, Math.min(current / max, 1)) / 1));
  const numEmptyChars = width - numProgChars;
  const body = `${progChar.repeat(numProgChars)}${emptyChar.repeat(numEmptyChars)}`;

  return `${chalk.dim(prefix)}${chalk.bold(body)}${chalk.dim(suffix)}`;
};

const getDefaultWidth = () => {
  if (process?.stdout) {
    return process.stdout.columns;
  } else {
    return 100;
  }
};

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
  if (process?.stdout) {
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

const print = (text?: string, wrapperFn: any = noWrap) => {
  const wrapped = wrapperFn(text || '');
  printLn(wrapped);
};

/**
 * Usage:
 * ```typescript
 * import chalk from 'chalk'
 * import {getProgressBar} from 'swiss-ak';
 *
 * console.log('-'.repeat(20) + ' < 20 Chars');
 *
 * const progress = getProgressBar(5, 'ABC', 20, chalk, chalk.green);
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
export const getProgressBar = (
  max: number,
  prefix: string = '',
  maxWidth: number = getDefaultWidth(),
  chalk: any = noChalk,
  wrapperFn: any = noChalk
) => {
  let current = 0;
  let finished = false;

  const update = () => {
    const suffix = `[${current.toString().padStart(max.toString().length, ' ')} / ${max}]`;
    const output = `${prefix} ${getBarString(current, max, Math.max(0, maxWidth - (prefix.length + suffix.length + 4)), chalk)} ${suffix}`;

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

  const finish = (): string => {
    finished = true;
    const output = update();
    print(); // blank/new line
    return output;
  };

  return {
    next,
    set,
    reset,
    update,
    finish
  };
};
