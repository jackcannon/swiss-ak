import { ms } from './times';
import { KeysOnly, Numbered, OfType } from './types';
import { noChalk, noWrap } from './fakeChalk';
import { TimeTools } from './TimeTools';
import { safe } from './safe';

//<!-- DOCS: 900 -->
/**<!-- DOCS: timer ##! -->
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

/**<!-- DOCS: ITimer ### -->
 * Timer Instance
 */
export interface ITimer<TName> {
  /**<!-- DOCS: ITimer.start #### -->
   * start
   *
   * - `timer.start`
   * - `getTimer().start`
   *
   * Start a timer
   * @param {...string} labels
   * @returns {void}
   */
  start(...labels: string[]): void;

  /**<!-- DOCS: ITimer.end #### -->
   * end
   *
   * - `timer.end`
   * - `getTimer().end`
   *
   * End a given timer
   * @param {...string} labels
   * @returns {void}
   */
  end(...labels: string[]): void;

  /**<!-- DOCS: ITimer.switch #### -->
   * switch
   *
   * - `timer.switch`
   * - `getTimer().switch`
   *
   * Switch the timer
   * The same as calling timer.end(endLabel) and timer.start(startLabel)
   *
   * @param {string | string[]} endLabel
   * @param {string | string[]} startLabel
   * @returns {void}
   */
  switch(endLabel: string | string[], startLabel: string | string[]): void;

  /**<!-- DOCS: ITimer.getTable #### -->
   * getTable
   *
   * - `timer.getTable`
   * - `getTimer().getTable`
   *
   * Get the timing table as a string
   *
   * @param {string} [prefix]
   * @param {((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>} [customEntries]
   * @returns {string} - the timing table
   */
  getTable(
    prefix?: string,
    customEntries?: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>
  ): string;

  /**<!-- DOCS: ITimer.log #### -->
   * log
   *
   * - `timer.log`
   * - `getTimer().log`
   *
   * Log the timing table
   *
   * @param {string} [prefix]
   * @param {((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>} [customEntries]
   * @returns {number} - the number of lines logged
   */
  log(
    prefix?: string,
    customEntries?: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>
  ): number;

  /**<!-- DOCS: ITimer.reset #### -->
   * reset
   *
   * - `timer.reset`
   * - `getTimer().reset`
   *
   * Reset the timer
   *
   * @returns {void}
   */
  reset(): void;

  /**<!-- DOCS: ITimer.getDuration #### -->
   * getDuration
   *
   * - `timer.getDuration`
   * - `getTimer().getDuration`
   *
   * Get the duration of a given timer
   *
   * @returns {ms}
   */
  getDuration(label: string): ms;

  /**<!-- DOCS: ITimer.names #### -->
   * names
   *
   * - `timer.names`
   * - `getTimer().names`
   *
   * The names of the timers
   */
  names: KeysOnly<TName>;

  /**<!-- DOCS: ITimer.displayNames #### -->
   * displayNames
   *
   * - `timer.displayNames`
   * - `getTimer().displayNames`
   *
   * The display names of the timers
   */
  displayNames: TName;

  /**<!-- DOCS: ITimer.startTimes #### -->
   * startTimes
   *
   * - `timer.startTimes`
   * - `getTimer().startTimes`
   *
   * The start times of the timers
   */
  startTimes: Partial<OfType<TName, ms>>;

  /**<!-- DOCS: ITimer.endTimes #### -->
   * endTimes
   *
   * - `timer.endTimes`
   * - `getTimer().endTimes`
   *
   * The end times of the timers
   */
  endTimes: Partial<OfType<TName, ms>>;
}

/**<!-- DOCS: timer.getTimer ### @ -->
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
 *
 * await wait(seconds(4)); // do something async
 *
 * timer.switch(timer.INTRO, timer.ENDING); // same as calling end(timer.INTRO) and start(timer.ENDING)
 *
 * await wait(seconds(6)); // do something async
 *
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
 * @param {string} [name]
 * @param {boolean} [verbose=false]
 * @param {any} [wrapperFn=noWrap]
 * @param {any} [chalk=noChalk]
 * @param {TName} [displayNames]
 * @returns {any}
 */
export const getTimer = <TName extends INames>(
  name?: string,
  verbose: boolean = false,
  wrapperFn: any = noWrap,
  chalk: any = noChalk,
  displayNames?: TName
): ITimer<TName> & KeysOnly<TName> => {
  const args = {
    name: safe.str(name),
    verbose: safe.bool(verbose, false),
    wrapperFn: safe.func(wrapperFn, noWrap),
    chalk: safe.objWith(
      chalk,
      {
        bold: {
          fallback: noWrap,
          safeFn: (v, f) => safe.func(v, f)
        },
        dim: {
          fallback: noWrap,
          safeFn: (v, f) => safe.func(v, f)
        }
      },
      false
    ),
    displayNames: safe.obj(displayNames)
  };

  let startTimes: { [label: string]: ms } = {};
  let endTimes: { [label: string]: ms } = {};

  let dispNames = {
    ...(args.displayNames || {})
  } as TName;
  const names = Object.fromEntries(Object.keys(dispNames).map((key) => [key, key])) as KeysOnly<TName>;

  const getDuration = (label: string): ms => {
    if (!startTimes[label]) return 0;
    const start = startTimes[label];
    const end = endTimes[label] || Date.now();
    return end - start;
  };

  const getLogLine = (
    label: string,
    prefix: string = '',
    nameColLength: number = 0,
    duration: number = getDuration(label)
  ): { line: string; width: number } => {
    const lineStart = `${dispNames[label] || label}: `.padEnd(nameColLength + 1, ' ');
    const lineEnd = `${TimeTools.toReadableDuration(duration, false, 4)}`;

    const line = args.chalk.bold(prefix + lineStart) + lineEnd;
    return {
      line: args.wrapperFn(line),
      width: (prefix + lineStart + lineEnd).replace('	', '').length
    };
  };

  startTimes.TOTAL = Date.now();

  return {
    ...names,
    start(...labels: string[]) {
      const args2 = {
        labels: safe.arrOf.str(labels)
      };
      for (let label of args2.labels) {
        startTimes[label] = Date.now();
      }
    },
    end(...labels: string[]) {
      const args2 = {
        labels: safe.arrOf.str(labels)
      };
      for (let label of args2.labels) {
        endTimes[label] = Date.now();
        if (args.verbose) {
          console.log(getLogLine(label) + '\n');
        }
      }
    },
    switch(endLabel: string | string[], startLabel: string | string[]) {
      const args2 = {
        endLabel: endLabel instanceof Array ? safe.arrOf.str(endLabel) : safe.str(endLabel),
        startLabel: startLabel instanceof Array ? safe.arrOf.str(startLabel) : safe.str(startLabel)
      };
      if (args2.endLabel) this.end(...[args2.endLabel].flat());
      if (args2.startLabel) this.start(...[args2.startLabel].flat());
    },
    getTable(
      prefix?: string,
      customEntries?: ((durations: Numbered<TName & { TOTAL: number }>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>
    ): string {
      const args2 = {
        prefix: safe.str(prefix),
        customEntries: customEntries instanceof Array ? safe.arrOf.func(customEntries) : safe.obj(customEntries)
      };

      const output = [];

      const addOutput = (...args) => {
        output.push(args.join(' '));
      };
      const addLogLine = (label: string, prefix?: string, nameColLength?: number, duration?: number) => {
        const result = getLogLine(label, prefix, nameColLength, duration);
        addOutput(result.line);
        return result.width;
      };

      const labels = Object.keys(startTimes);

      addOutput('');
      addOutput(args.wrapperFn(args.chalk.bold([args2.prefix, args.name, 'Times:'].filter((x) => x && x.trim()).join(' '))));

      const displayNames = [...labels, ...Object.keys(names)].map((label) => dispNames[label] || label);
      const nameColLength = Math.max(...displayNames.map((text) => `${text}: `.length));

      let longest = 0;

      for (let label of labels) {
        if (label !== 'TOTAL') {
          longest = Math.max(longest, addLogLine(label, '	', nameColLength));
        }
      }

      if (args2.customEntries) {
        const durations = Object.fromEntries(labels.map((label) => [label, getDuration(label)])) as Numbered<TName & { TOTAL: number }>;

        let cEntries: CustomEntryObj[] = [];

        if (args2.customEntries instanceof Array) {
          cEntries = args2.customEntries
            .map((func) => func(durations))
            .map((obj) => ({ ...obj, duration: obj.duration || (obj.end || Date.now()) - (obj.start || Date.now()) }));
        } else {
          cEntries = Object.entries(args2.customEntries).map(([label, func]) => ({ label, duration: (func || (() => 0))(durations) || 0 }));
        }

        if (cEntries.length) {
          addOutput(args.wrapperFn(args.chalk.dim('	' + '⎯'.repeat(longest))));
          for (let { label, duration } of cEntries) {
            addLogLine(label, '	', nameColLength, duration);
          }
        }
      }

      addOutput(args.wrapperFn(args.chalk.dim('	' + '⎯'.repeat(longest))));
      addLogLine('TOTAL', '	', nameColLength);

      addOutput('');

      return output.join('\n');
    },
    log(
      prefix?: string,
      customEntries?: ((durations: Numbered<TName & { TOTAL: number }>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>
    ): number {
      const args2 = {
        prefix: safe.str(prefix),
        customEntries: customEntries instanceof Array ? safe.arrOf.func(customEntries) : safe.obj(customEntries)
      };
      const table = this.getTable(args2.prefix, args2.customEntries);
      console.log(table);

      let lc = table.split('\n').length;
      return lc;
    },
    reset() {
      Object.keys(startTimes).forEach((key) => {
        delete startTimes[key];
      });
      Object.keys(endTimes).forEach((key) => {
        delete endTimes[key];
      });
      startTimes.TOTAL = Date.now();
    },
    getDuration,
    names,
    displayNames: dispNames,
    startTimes: startTimes as Partial<OfType<TName, ms>>,
    endTimes: endTimes as Partial<OfType<TName, ms>>
  };
};

/**<!-- DOCS: timer.timer ### -->
 * timer
 *
 * - `timer`
 *
 * Usage:
 * ```typescript
 * timer.start('TOTAL', 'Intro');
 *
 * await wait(seconds(4)); // do something async
 *
 * timer.switch('Intro', 'Ending'); // same as calling timer.end('Intro') and timer.start('Ending')
 *
 * await wait(seconds(6)); // do something async
 *
 * timer.end('TOTAL', 'Ending');
 * timer.log();
 * ```
 *
 * Output:
 * ```
 * Times:
 * 	Intro:   4s
 * 	Ending:  6s
 * 	⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
 * 	TOTAL:   10s
 * ```
 */
export const timer = getTimer();
