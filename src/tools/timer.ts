import { ms } from './times';
import { KeysOnly, Numbered } from './types';
import { noChalk, noWrap } from './fakeChalk';
import { TimeTools } from './TimeTools';

//<!-- DOCS: 900 -->
/**<!-- DOCS: ## -->
 * timer
 *
 * A debug tool for measuring the duration of code blocks.
 */

interface INames {
  [k: string]: string;
}

type TimerDurations<TName> = Numbered<
  TName & {
    TOTAL: number;
    [label: string]: number;
  }
>;

export type CustomEntryDict<T, TName> = {
  [K in keyof T]?: (durations: TimerDurations<TName>) => number;
};

interface CustomEntryObj {
  label: string;
  start?: number;
  end?: number;
  duration?: number;
}

export interface ITimer<TName> {
  start(...labelArr: string[]): void;
  end(...labelArr: string[]): void;
  switch(endLabel: string | string[], startLabel: string | string[]): void;
  log(
    prefix?: string,
    customEntries?: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>
  ): number;
  reset(): void;
  names: KeysOnly<TName>;
  displayNames: TName;
}

/**<!-- DOCS: ### -->
 * getTimer
 *
 * - `getTimer`
 *
 * Usage:
 * ```typescript
 * const timer = getTimer('Example', false, chalk.red, chalk, {
 *   TOTAL: 'TOTAL',
 *   INTRO: 'Action 1',
 *   ENDING: 'Action 2'
 * });
 * timer.start(timer.TOTAL, timer.INTRO);

 * await wait(seconds(4)); // do something async

 * timer.switch(timer.INTRO, timer.ENDING); // same as calling end(timer.INTRO) and start(timer.ENDING)

 * await wait(seconds(6)); // do something async

 * timer.end(timer.TOTAL, timer.ENDING);
 * timer.log();
 * ```
 *
 * Output:
 * ```
 * Example Times:
 * 	Action 1: 4s
 * 	Action 2: 6s
 * 	⎯⎯⎯⎯⎯⎯⎯
 * 	TOTAL:    10s
 * ```
 */
export const getTimer = <TName extends INames>(
  name?: string,
  verbose: boolean = false,
  wrapperFn: any = noWrap,
  chalk: any = noChalk,
  displayNames?: TName
): ITimer<TName> & KeysOnly<TName> => {
  let startTimes: { [label: string]: ms } = {};
  let endTimes: { [label: string]: ms } = {};

  let dispNames = {
    ...(displayNames || {})
  } as TName;
  const names = Object.fromEntries(Object.keys(dispNames).map((key) => [key, key])) as KeysOnly<TName>;

  const getDuration = (label: string) => {
    const start = startTimes[label];
    const end = endTimes[label] || Date.now();
    return end - start;
  };

  const logLine = (label: string, prefix: string = '', nameColLength: number = 0, duration: number = getDuration(label)): number => {
    const lineStart = `${dispNames[label] || label}: `.padEnd(nameColLength + 1, ' ');
    const lineEnd = `${TimeTools.toReadableDuration(duration, false, 4)}`;

    const line = chalk.bold(prefix + lineStart) + lineEnd;
    console.log(wrapperFn(line));
    return (prefix + lineStart + lineEnd).replace('	', '').length;
  };

  startTimes.TOTAL = Date.now();

  return {
    ...names,
    start(...labelArr: string[]) {
      for (let label of labelArr) {
        startTimes[label] = Date.now();
      }
    },
    end(...labelArr: string[]) {
      for (let label of labelArr) {
        endTimes[label] = Date.now();
        if (verbose) {
          logLine(label);
          console.log('');
        }
      }
    },
    switch(endLabel: string | string[], startLabel: string | string[]) {
      if (endLabel) this.end(...[endLabel].flat());
      if (startLabel) this.start(...[startLabel].flat());
    },
    log(
      prefix?: string,
      customEntries?: ((durations: Numbered<TName & { TOTAL: number }>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>
    ): number {
      let lc = 0;
      const log = (...args) => {
        lc++;
        console.log(...args);
      };
      const logLine2 = (label: string, prefix?: string, nameColLength?: number, duration?: number) => {
        lc++;
        return logLine(label, prefix, nameColLength, duration);
      };

      const labels = Object.keys(startTimes);

      log('');
      log(wrapperFn(chalk.bold([prefix, name, 'Times:'].filter((x) => x && x.trim()).join(' '))));

      const displayNames = [...labels, ...Object.keys(names)].map((label) => dispNames[label] || label);
      const nameColLength = Math.max(...displayNames.map((text) => `${text}: `.length));

      let longest = 0;

      for (let label of labels) {
        if (label !== 'TOTAL') {
          longest = Math.max(longest, logLine2(label, '	', nameColLength));
        }
      }

      if (customEntries) {
        const durations = Object.fromEntries(labels.map((label) => [label, getDuration(label)])) as Numbered<TName & { TOTAL: number }>;

        let cEntries: CustomEntryObj[] = [];

        if (customEntries instanceof Array) {
          cEntries = customEntries
            .map((func) => func(durations))
            .map((obj) => ({ ...obj, duration: obj.duration || (obj.end || Date.now()) - (obj.start || Date.now()) }));
        } else {
          cEntries = Object.entries(customEntries).map(([label, func]) => ({ label, duration: (func || (() => 0))(durations) || 0 }));
        }

        log(wrapperFn(chalk.dim('	' + '⎯'.repeat(longest))));
        for (let { label, duration } of cEntries) {
          logLine2(label, '	', nameColLength, duration);
        }
      }

      log(wrapperFn(chalk.dim('	' + '⎯'.repeat(longest))));
      logLine2('TOTAL', '	', nameColLength);

      log('');

      return lc;
    },
    reset() {
      startTimes = {};
      endTimes = {};
    },
    names,
    displayNames: dispNames
  };
};

/**<!-- DOCS: ### -->
 * timer
 *
 * - `timer`
 *
 * Global timer
 */
export const timer = getTimer();
