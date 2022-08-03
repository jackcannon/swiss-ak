import { ms, SECOND } from './times';
import { KeysOnly } from './types';

// Hacky little display function
const formatDuration = (duration: ms) => {
  const seconds = duration / SECOND;
  let extra = '';
  let secsEx = Math.round(seconds);

  let minsEx = Math.floor(secsEx / 60);
  if (minsEx >= 1) {
    secsEx %= 60;
    extra = `${minsEx}m ${secsEx}s`;

    let hoursEx = Math.floor(minsEx / 60);
    if (hoursEx >= 1) {
      minsEx %= 60;
      extra = `${hoursEx}h ${minsEx}m ${secsEx}s`;
    }
  }

  return `${extra}${extra ? ` (${seconds}s)` : `${seconds}s`}`;
};

interface INames {
  [k: string]: string;
}

interface ITimer<TName> {
  start(...labelArr: string[]): void;
  end(...labelArr: string[]): void;
  switch(endLabel: string | string[], startLabel: string | string[]): void;
  log(prefix?: string): void;
  reset(): void;
  names: KeysOnly<TName>;
  displayNames: TName;
}

/**
 * Usage:
 * ```typescript
 * const timer = getTimer('Example', false, {
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
 * 	TOTAL: 10s
 * 	Action 1: 4s
 * 	Action 2: 6s
 * ```
 */
export const getTimer = <TName extends INames>(name?: string, verbose: boolean = false, displayNames?: TName): ITimer<TName> & KeysOnly<TName> => {
  let startTimes: { [label: string]: ms } = {};
  let endTimes: { [label: string]: ms } = {};

  let dispNames = (displayNames || { TOTAL: 'TOTAL' }) as TName;
  const names = Object.fromEntries(Object.keys(dispNames).map((key) => [key, key])) as KeysOnly<TName>;

  const logLine = (label: string, prefix: string = '') => {
    const start = startTimes[label];
    const end = endTimes[label] || Date.now();
    const duration = end - start;
    console.log(`${prefix}${dispNames[label] || label}: ${formatDuration(duration)}`);
  };

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
    log(prefix?: string) {
      console.log('');
      console.log([prefix, name, 'Times:'].filter((x) => x && x.trim()).join(' '));
      for (let label of Object.keys(startTimes)) {
        logLine(label, '	');
      }
      console.log('');
    },
    reset() {
      startTimes = {};
      endTimes = {};
    },
    names,
    displayNames: dispNames
  };
};

/**
 * Global timer
 */
export const timer = getTimer();
