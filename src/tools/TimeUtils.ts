import { ms, MILLISECOND, SECOND, MINUTE, HOUR, DAY, MONTH, YEAR, CENTURY, MILLENNIUM } from './times';

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

// TODO docs
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
    return [...results.slice(0, -1), '&&&&', ...results.slice(-1)].join(', ').replace('&&&&,', '&');
  }
  return results.join(' ');
};

export const TimeUtils = {
  toReadableDuration
};
