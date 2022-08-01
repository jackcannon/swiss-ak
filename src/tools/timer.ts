import { ms, SECOND } from './times';

/**
 * Usage:
 * ```typescript
 * const timer = getTimer('Example');
 * timer.start('TOTAL', 'intro');

 * await wait(seconds(4)); // do something async

 * timer.switch('intro', 'ending'); // same as calling end('intro') and start('ending')

 * await wait(seconds(6)); // do something async

 * timer.end('TOTAL', 'ending');
 * timer.log();
 * ```
 *
 * Output:
 * ```
 * Example Times:
 * 	TOTAL: 10s
 * 	intro: 4s
 * 	ending: 6s
 * ```
 */
export const getTimer = (name?: string) => {
  let startTimes: { [label: string]: ms } = {};
  let endTimes: { [label: string]: ms } = {};

  return {
    start(...labelArr: string[]) {
      for (let label of labelArr) {
        startTimes[label] = Date.now();
      }
    },
    end(...labelArr: string[]) {
      for (let label of labelArr) {
        endTimes[label] = Date.now();
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
        const start = startTimes[label];
        const end = endTimes[label] || Date.now();
        const duration = end - start;
        console.log(`	${label}: ${duration / SECOND}s`);
      }
      console.log('');
    },
    reset() {
      startTimes = {};
      endTimes = {};
    }
  };
};

/**
 * Global timer
 */
export const timer = getTimer();
