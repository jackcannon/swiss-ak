import { ms, MILLISECOND, SECOND, MINUTE, HOUR, DAY, MONTH, YEAR, CENTURY, MILLENNIUM } from './times';

//<!-- DOCS: 150 -->
/**<!-- DOCS: ## -->
 * TimeUtils
 *
 * A collection of time-related utility functions.
 */

interface DurationUnitLabel {
  singular: string;
  plural: string;
}
interface DurationUnit {
  value: ms;
  short: DurationUnitLabel;
  long: DurationUnitLabel;
}

const units: DurationUnit[] = [
  {
    value: MILLENNIUM,
    short: { singular: 'mill', plural: 'mills' },
    long: { singular: ' millennium', plural: ' millenniums' }
  },
  {
    value: CENTURY,
    short: { singular: 'cent', plural: 'cents' },
    long: { singular: ' century', plural: ' centuries' }
  },
  {
    value: YEAR,
    short: { singular: 'y', plural: 'y' },
    long: { singular: ' year', plural: ' years' }
  },
  {
    value: MONTH,
    short: { singular: 'mon', plural: 'mons' },
    long: { singular: ' month', plural: ' months' }
  },
  {
    value: DAY,
    short: { singular: 'd', plural: 'd' },
    long: { singular: ' day', plural: ' days' }
  },
  {
    value: HOUR,
    short: { singular: 'h', plural: 'h' },
    long: { singular: ' hour', plural: ' hours' }
  },
  {
    value: MINUTE,
    short: { singular: 'm', plural: 'm' },
    long: { singular: ' minute', plural: ' minutes' }
  },
  {
    value: SECOND,
    short: { singular: 's', plural: 's' },
    long: { singular: ' second', plural: ' seconds' }
  },
  {
    value: MILLISECOND,
    short: { singular: 'ms', plural: 'ms' },
    long: { singular: ' millisecond', plural: ' milliseconds' }
  }
];

/**<!-- DOCS: ### -->
 * toReadableDuration
 *
 * - `TimeUtils.toReadableDuration`
 *
 * Converts a duration in milliseconds to a human readable string.
 *
 * ```typescript
 * TimeUtils.toReadableDuration(20); // '20ms'
 * TimeUtils.toReadableDuration(seconds(59)); // '59s'
 * TimeUtils.toReadableDuration(seconds(60)); // '1m'
 * TimeUtils.toReadableDuration(hours(23)); // '23h'
 * TimeUtils.toReadableDuration(hours(24)); // '1d'
 * TimeUtils.toReadableDuration(days(10)); // '10d'
 *
 * TimeUtils.toReadableDuration(20, true) // '20 milliseconds'
 * TimeUtils.toReadableDuration(seconds(59), true) // '59 seconds'
 * TimeUtils.toReadableDuration(seconds(60), true) // '1 minute'
 * TimeUtils.toReadableDuration(hours(23), true) // '23 hours'
 * TimeUtils.toReadableDuration(hours(24), true) // '1 day'
 * TimeUtils.toReadableDuration(days(10), true) // '10 days'
 *
 * const realisticDuration = days(10) + hours(2) + seconds(31) + 512; // 871231512
 * TimeUtils.toReadableDuration(realisticDuration, true, 4) // '10 days, 2 hours, 31 seconds & 512 milliseconds'
 * TimeUtils.toReadableDuration(realisticDuration, true) // '10 days, 2 hours & 31 seconds'
 * TimeUtils.toReadableDuration(realisticDuration, true, 2) // '10 days & 2 hours'
 * ```
 */
const toReadableDuration = (duration: ms, longNames: boolean = false, maxUnits: number = 3): string => {
  if (duration === 0) return '';

  const allUnitValues = units
    .map((unit, index) => {
      const previousUnitValue = units[index - 1]?.value ?? Infinity;
      const amount = Math.floor((Math.abs(duration) % previousUnitValue) / unit.value);
      return { amount, unit };
    })
    .filter(({ amount }) => amount > 0);

  const results: string[] = allUnitValues.slice(0, maxUnits).map(({ amount, unit }) => {
    const labelObj = longNames ? unit.long : unit.short;
    const label = amount > 1 ? labelObj.plural : labelObj.singular;
    return `${amount}${label}`;
  });

  if (longNames) {
    if (results.length <= 1) {
      return results.join('');
    }
    return [...results.slice(0, -1), '&&&&', ...results.slice(-1)].join(', ').replace('&&&&,', '&').replace(', &', ' &');
  }

  return results.join(' ');
};

export const TimeUtils = {
  toReadableDuration
};
