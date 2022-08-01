const noChalk = {
  dim: (str: any) => str,
  bold: (str: any) => str
};

const getBarString = (
  current: number,
  max: number,
  width: number = 50,
  progChar: string = '█',
  emptyChar: string = ' ',
  prefix: string = '▕',
  suffix: string = '▏',
  chalk: any = noChalk
) => {
  const numProgChars = Math.round(width * (Math.max(0, Math.min(current / max, 1)) / 1));
  const numEmptyChars = width - numProgChars;
  const body = `${progChar.repeat(numProgChars)}${emptyChar.repeat(numEmptyChars)}`;

  return `${chalk.dim(prefix)}${chalk.bold(body)}${chalk.dim(suffix)}`;
};

/**
 * Usage:
 * ```typescript
 * import chalk from 'chalk'
 * import {getProgressBar} from 'swiss-ak';
 *
 * const progress = getProgressBar(5, 'ABC', 20, chalk);
 *
 * console.log('-'.repeat(20) + ' < 20 Chars');
 *
 * for (let i = 1; i <= 5; i++) {
 *   console.log(progress.set(i));
 * }
 * console.log(progress.finish());
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
 *
 * Tip: use printLn from README.md
 */
export const getProgressBar = (max: number, prefix: string = '', maxWidth: number = 100, chalk: any = noChalk) => {
  let current = 0;
  let finished = false;

  const update = () => {
    if (finished) {
      return;
    }
    const suffix = `[${current.toString().padStart(max.toString().length, ' ')} / ${max}]`;
    const output = `${prefix} ${getBarString(current, max, Math.max(0, maxWidth - (prefix.length + suffix.length + 4)))} ${suffix}`;

    return output;
  };

  const next = () => {
    current++;
    return update();
  };

  const set = (newCurrent: number) => {
    current = newCurrent;
    return update();
  };

  const finish = () => {
    finished = true;
    return update();
  };

  return {
    next,
    set,
    update,
    finish
  };
};
