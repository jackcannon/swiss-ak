import * as swissak from '../dist';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

// SETUP CODE:
// const getMixedUnits = (units: number[]) => {
//   const max = Number('0b' + '1'.repeat(units.length));
//   return ArrayTools.range(max, 1, 1)
//     .map((num) => num.toString(2).padStart(units.length, '0'))
//     .map((binStr) => binStr.split('').map(Number))
//     .sort((a, b) => MathsTools.addAll(...a) - MathsTools.addAll(...b))
//     .map((arr) => arr.map(Boolean))
//     .map((arr) => arr.map((v, i) => (v ? units[i] : 0)))
//     .map((arr) => MathsTools.addAll(...arr))
//     .map((duration) => ({
//       duration,
//       name: TimeTools.toReadableDuration(duration, false, 20),
//       defaultsArgs: TimeTools.toReadableDuration(duration),
//       longNames: ArrayTools.range(units.length + 2).map((v) => TimeTools.toReadableDuration(duration, true, v)),
//       shortNames: ArrayTools.range(units.length + 2).map((v) => TimeTools.toReadableDuration(duration, false, v))
//     }));
// };
// getMixedUnits([times.days(3), times.hours(4), times.minutes(5), times.seconds(6), times.milliseconds(789)]);

const testValues = [
  {
    duration: 789,
    name: '789ms',
    defaultsArgs: '789ms',
    longNames: [
      '789 milliseconds',
      '789 milliseconds',
      '789 milliseconds',
      '789 milliseconds',
      '789 milliseconds',
      '789 milliseconds',
      '789 milliseconds'
    ],
    shortNames: ['789ms', '789ms', '789ms', '789ms', '789ms', '789ms', '789ms']
  },
  {
    duration: 6000,
    name: '6s',
    defaultsArgs: '6s',
    longNames: ['6 seconds', '6 seconds', '6 seconds', '6 seconds', '6 seconds', '6 seconds', '6 seconds'],
    shortNames: ['6s', '6s', '6s', '6s', '6s', '6s', '6s']
  },
  {
    duration: 300000,
    name: '5m',
    defaultsArgs: '5m',
    longNames: ['5 minutes', '5 minutes', '5 minutes', '5 minutes', '5 minutes', '5 minutes', '5 minutes'],
    shortNames: ['5m', '5m', '5m', '5m', '5m', '5m', '5m']
  },
  {
    duration: 14400000,
    name: '4h',
    defaultsArgs: '4h',
    longNames: ['4 hours', '4 hours', '4 hours', '4 hours', '4 hours', '4 hours', '4 hours'],
    shortNames: ['4h', '4h', '4h', '4h', '4h', '4h', '4h']
  },
  {
    duration: 259200000,
    name: '3d',
    defaultsArgs: '3d',
    longNames: ['3 days', '3 days', '3 days', '3 days', '3 days', '3 days', '3 days'],
    shortNames: ['3d', '3d', '3d', '3d', '3d', '3d', '3d']
  },
  {
    duration: 6789,
    name: '6s 789ms',
    defaultsArgs: '6s 789ms',
    longNames: [
      '6 seconds',
      '6 seconds',
      '6 seconds & 789 milliseconds',
      '6 seconds & 789 milliseconds',
      '6 seconds & 789 milliseconds',
      '6 seconds & 789 milliseconds',
      '6 seconds & 789 milliseconds'
    ],
    shortNames: ['6s', '6s', '6s 789ms', '6s 789ms', '6s 789ms', '6s 789ms', '6s 789ms']
  },
  {
    duration: 300789,
    name: '5m 789ms',
    defaultsArgs: '5m 789ms',
    longNames: [
      '5 minutes',
      '5 minutes',
      '5 minutes & 789 milliseconds',
      '5 minutes & 789 milliseconds',
      '5 minutes & 789 milliseconds',
      '5 minutes & 789 milliseconds',
      '5 minutes & 789 milliseconds'
    ],
    shortNames: ['5m', '5m', '5m 789ms', '5m 789ms', '5m 789ms', '5m 789ms', '5m 789ms']
  },
  {
    duration: 306000,
    name: '5m 6s',
    defaultsArgs: '5m 6s',
    longNames: [
      '5 minutes',
      '5 minutes',
      '5 minutes & 6 seconds',
      '5 minutes & 6 seconds',
      '5 minutes & 6 seconds',
      '5 minutes & 6 seconds',
      '5 minutes & 6 seconds'
    ],
    shortNames: ['5m', '5m', '5m 6s', '5m 6s', '5m 6s', '5m 6s', '5m 6s']
  },
  {
    duration: 14400789,
    name: '4h 789ms',
    defaultsArgs: '4h 789ms',
    longNames: [
      '4 hours',
      '4 hours',
      '4 hours & 789 milliseconds',
      '4 hours & 789 milliseconds',
      '4 hours & 789 milliseconds',
      '4 hours & 789 milliseconds',
      '4 hours & 789 milliseconds'
    ],
    shortNames: ['4h', '4h', '4h 789ms', '4h 789ms', '4h 789ms', '4h 789ms', '4h 789ms']
  },
  {
    duration: 14406000,
    name: '4h 6s',
    defaultsArgs: '4h 6s',
    longNames: [
      '4 hours',
      '4 hours',
      '4 hours & 6 seconds',
      '4 hours & 6 seconds',
      '4 hours & 6 seconds',
      '4 hours & 6 seconds',
      '4 hours & 6 seconds'
    ],
    shortNames: ['4h', '4h', '4h 6s', '4h 6s', '4h 6s', '4h 6s', '4h 6s']
  },
  {
    duration: 14700000,
    name: '4h 5m',
    defaultsArgs: '4h 5m',
    longNames: [
      '4 hours',
      '4 hours',
      '4 hours & 5 minutes',
      '4 hours & 5 minutes',
      '4 hours & 5 minutes',
      '4 hours & 5 minutes',
      '4 hours & 5 minutes'
    ],
    shortNames: ['4h', '4h', '4h 5m', '4h 5m', '4h 5m', '4h 5m', '4h 5m']
  },
  {
    duration: 259200789,
    name: '3d 789ms',
    defaultsArgs: '3d 789ms',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 789 milliseconds',
      '3 days & 789 milliseconds',
      '3 days & 789 milliseconds',
      '3 days & 789 milliseconds',
      '3 days & 789 milliseconds'
    ],
    shortNames: ['3d', '3d', '3d 789ms', '3d 789ms', '3d 789ms', '3d 789ms', '3d 789ms']
  },
  {
    duration: 259206000,
    name: '3d 6s',
    defaultsArgs: '3d 6s',
    longNames: ['3 days', '3 days', '3 days & 6 seconds', '3 days & 6 seconds', '3 days & 6 seconds', '3 days & 6 seconds', '3 days & 6 seconds'],
    shortNames: ['3d', '3d', '3d 6s', '3d 6s', '3d 6s', '3d 6s', '3d 6s']
  },
  {
    duration: 259500000,
    name: '3d 5m',
    defaultsArgs: '3d 5m',
    longNames: ['3 days', '3 days', '3 days & 5 minutes', '3 days & 5 minutes', '3 days & 5 minutes', '3 days & 5 minutes', '3 days & 5 minutes'],
    shortNames: ['3d', '3d', '3d 5m', '3d 5m', '3d 5m', '3d 5m', '3d 5m']
  },
  {
    duration: 273600000,
    name: '3d 4h',
    defaultsArgs: '3d 4h',
    longNames: ['3 days', '3 days', '3 days & 4 hours', '3 days & 4 hours', '3 days & 4 hours', '3 days & 4 hours', '3 days & 4 hours'],
    shortNames: ['3d', '3d', '3d 4h', '3d 4h', '3d 4h', '3d 4h', '3d 4h']
  },
  {
    duration: 306789,
    name: '5m 6s 789ms',
    defaultsArgs: '5m 6s 789ms',
    longNames: [
      '5 minutes',
      '5 minutes',
      '5 minutes & 6 seconds',
      '5 minutes, 6 seconds & 789 milliseconds',
      '5 minutes, 6 seconds & 789 milliseconds',
      '5 minutes, 6 seconds & 789 milliseconds',
      '5 minutes, 6 seconds & 789 milliseconds'
    ],
    shortNames: ['5m', '5m', '5m 6s', '5m 6s 789ms', '5m 6s 789ms', '5m 6s 789ms', '5m 6s 789ms']
  },
  {
    duration: 14406789,
    name: '4h 6s 789ms',
    defaultsArgs: '4h 6s 789ms',
    longNames: [
      '4 hours',
      '4 hours',
      '4 hours & 6 seconds',
      '4 hours, 6 seconds & 789 milliseconds',
      '4 hours, 6 seconds & 789 milliseconds',
      '4 hours, 6 seconds & 789 milliseconds',
      '4 hours, 6 seconds & 789 milliseconds'
    ],
    shortNames: ['4h', '4h', '4h 6s', '4h 6s 789ms', '4h 6s 789ms', '4h 6s 789ms', '4h 6s 789ms']
  },
  {
    duration: 14700789,
    name: '4h 5m 789ms',
    defaultsArgs: '4h 5m 789ms',
    longNames: [
      '4 hours',
      '4 hours',
      '4 hours & 5 minutes',
      '4 hours, 5 minutes & 789 milliseconds',
      '4 hours, 5 minutes & 789 milliseconds',
      '4 hours, 5 minutes & 789 milliseconds',
      '4 hours, 5 minutes & 789 milliseconds'
    ],
    shortNames: ['4h', '4h', '4h 5m', '4h 5m 789ms', '4h 5m 789ms', '4h 5m 789ms', '4h 5m 789ms']
  },
  {
    duration: 14706000,
    name: '4h 5m 6s',
    defaultsArgs: '4h 5m 6s',
    longNames: [
      '4 hours',
      '4 hours',
      '4 hours & 5 minutes',
      '4 hours, 5 minutes & 6 seconds',
      '4 hours, 5 minutes & 6 seconds',
      '4 hours, 5 minutes & 6 seconds',
      '4 hours, 5 minutes & 6 seconds'
    ],
    shortNames: ['4h', '4h', '4h 5m', '4h 5m 6s', '4h 5m 6s', '4h 5m 6s', '4h 5m 6s']
  },
  {
    duration: 259206789,
    name: '3d 6s 789ms',
    defaultsArgs: '3d 6s 789ms',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 6 seconds',
      '3 days, 6 seconds & 789 milliseconds',
      '3 days, 6 seconds & 789 milliseconds',
      '3 days, 6 seconds & 789 milliseconds',
      '3 days, 6 seconds & 789 milliseconds'
    ],
    shortNames: ['3d', '3d', '3d 6s', '3d 6s 789ms', '3d 6s 789ms', '3d 6s 789ms', '3d 6s 789ms']
  },
  {
    duration: 259500789,
    name: '3d 5m 789ms',
    defaultsArgs: '3d 5m 789ms',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 5 minutes',
      '3 days, 5 minutes & 789 milliseconds',
      '3 days, 5 minutes & 789 milliseconds',
      '3 days, 5 minutes & 789 milliseconds',
      '3 days, 5 minutes & 789 milliseconds'
    ],
    shortNames: ['3d', '3d', '3d 5m', '3d 5m 789ms', '3d 5m 789ms', '3d 5m 789ms', '3d 5m 789ms']
  },
  {
    duration: 259506000,
    name: '3d 5m 6s',
    defaultsArgs: '3d 5m 6s',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 5 minutes',
      '3 days, 5 minutes & 6 seconds',
      '3 days, 5 minutes & 6 seconds',
      '3 days, 5 minutes & 6 seconds',
      '3 days, 5 minutes & 6 seconds'
    ],
    shortNames: ['3d', '3d', '3d 5m', '3d 5m 6s', '3d 5m 6s', '3d 5m 6s', '3d 5m 6s']
  },
  {
    duration: 273600789,
    name: '3d 4h 789ms',
    defaultsArgs: '3d 4h 789ms',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 4 hours',
      '3 days, 4 hours & 789 milliseconds',
      '3 days, 4 hours & 789 milliseconds',
      '3 days, 4 hours & 789 milliseconds',
      '3 days, 4 hours & 789 milliseconds'
    ],
    shortNames: ['3d', '3d', '3d 4h', '3d 4h 789ms', '3d 4h 789ms', '3d 4h 789ms', '3d 4h 789ms']
  },
  {
    duration: 273606000,
    name: '3d 4h 6s',
    defaultsArgs: '3d 4h 6s',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 4 hours',
      '3 days, 4 hours & 6 seconds',
      '3 days, 4 hours & 6 seconds',
      '3 days, 4 hours & 6 seconds',
      '3 days, 4 hours & 6 seconds'
    ],
    shortNames: ['3d', '3d', '3d 4h', '3d 4h 6s', '3d 4h 6s', '3d 4h 6s', '3d 4h 6s']
  },
  {
    duration: 273900000,
    name: '3d 4h 5m',
    defaultsArgs: '3d 4h 5m',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 4 hours',
      '3 days, 4 hours & 5 minutes',
      '3 days, 4 hours & 5 minutes',
      '3 days, 4 hours & 5 minutes',
      '3 days, 4 hours & 5 minutes'
    ],
    shortNames: ['3d', '3d', '3d 4h', '3d 4h 5m', '3d 4h 5m', '3d 4h 5m', '3d 4h 5m']
  },
  {
    duration: 14706789,
    name: '4h 5m 6s 789ms',
    defaultsArgs: '4h 5m 6s',
    longNames: [
      '4 hours',
      '4 hours',
      '4 hours & 5 minutes',
      '4 hours, 5 minutes & 6 seconds',
      '4 hours, 5 minutes, 6 seconds & 789 milliseconds',
      '4 hours, 5 minutes, 6 seconds & 789 milliseconds',
      '4 hours, 5 minutes, 6 seconds & 789 milliseconds'
    ],
    shortNames: ['4h', '4h', '4h 5m', '4h 5m 6s', '4h 5m 6s 789ms', '4h 5m 6s 789ms', '4h 5m 6s 789ms']
  },
  {
    duration: 259506789,
    name: '3d 5m 6s 789ms',
    defaultsArgs: '3d 5m 6s',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 5 minutes',
      '3 days, 5 minutes & 6 seconds',
      '3 days, 5 minutes, 6 seconds & 789 milliseconds',
      '3 days, 5 minutes, 6 seconds & 789 milliseconds',
      '3 days, 5 minutes, 6 seconds & 789 milliseconds'
    ],
    shortNames: ['3d', '3d', '3d 5m', '3d 5m 6s', '3d 5m 6s 789ms', '3d 5m 6s 789ms', '3d 5m 6s 789ms']
  },
  {
    duration: 273606789,
    name: '3d 4h 6s 789ms',
    defaultsArgs: '3d 4h 6s',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 4 hours',
      '3 days, 4 hours & 6 seconds',
      '3 days, 4 hours, 6 seconds & 789 milliseconds',
      '3 days, 4 hours, 6 seconds & 789 milliseconds',
      '3 days, 4 hours, 6 seconds & 789 milliseconds'
    ],
    shortNames: ['3d', '3d', '3d 4h', '3d 4h 6s', '3d 4h 6s 789ms', '3d 4h 6s 789ms', '3d 4h 6s 789ms']
  },
  {
    duration: 273900789,
    name: '3d 4h 5m 789ms',
    defaultsArgs: '3d 4h 5m',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 4 hours',
      '3 days, 4 hours & 5 minutes',
      '3 days, 4 hours, 5 minutes & 789 milliseconds',
      '3 days, 4 hours, 5 minutes & 789 milliseconds',
      '3 days, 4 hours, 5 minutes & 789 milliseconds'
    ],
    shortNames: ['3d', '3d', '3d 4h', '3d 4h 5m', '3d 4h 5m 789ms', '3d 4h 5m 789ms', '3d 4h 5m 789ms']
  },
  {
    duration: 273906000,
    name: '3d 4h 5m 6s',
    defaultsArgs: '3d 4h 5m',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 4 hours',
      '3 days, 4 hours & 5 minutes',
      '3 days, 4 hours, 5 minutes & 6 seconds',
      '3 days, 4 hours, 5 minutes & 6 seconds',
      '3 days, 4 hours, 5 minutes & 6 seconds'
    ],
    shortNames: ['3d', '3d', '3d 4h', '3d 4h 5m', '3d 4h 5m 6s', '3d 4h 5m 6s', '3d 4h 5m 6s']
  },
  {
    duration: 273906789,
    name: '3d 4h 5m 6s 789ms',
    defaultsArgs: '3d 4h 5m',
    longNames: [
      '3 days',
      '3 days',
      '3 days & 4 hours',
      '3 days, 4 hours & 5 minutes',
      '3 days, 4 hours, 5 minutes & 6 seconds',
      '3 days, 4 hours, 5 minutes, 6 seconds & 789 milliseconds',
      '3 days, 4 hours, 5 minutes, 6 seconds & 789 milliseconds'
    ],
    shortNames: ['3d', '3d', '3d 4h', '3d 4h 5m', '3d 4h 5m 6s', '3d 4h 5m 6s 789ms', '3d 4h 5m 6s 789ms']
  }
];

describe('TimeTools', () => {
  describe('toReadableDuration', () => {
    singleTest(swissak.TimeTools.toReadableDuration, 'TimeTools.toReadableDuration', (toReadableDuration, funcName) => {
      it(should` exist as ${funcName}`, () => {
        expect(toReadableDuration).toBeDefined();
      });

      testValues.forEach((testValue) => {
        const { duration, name, defaultsArgs, longNames, shortNames } = testValue;

        it(should` correctly convert ${duration + 'ms'} (${name}) to a readable duration by default`, () => {
          const result = toReadableDuration(duration);
          expect(result).toEqual(defaultsArgs);
        });

        longNames.forEach((longName, i) => {
          it(should` correctly convert ${duration + 'ms'} (${name}) to a \u001b[4mLONG\u001b[24m readable duration with <= ${i} units`, () => {
            const result = toReadableDuration(duration, true, i);
            expect(result).toEqual(longName);
          });
        });
        shortNames.forEach((shortName, i) => {
          it(should` correctly convert ${duration + 'ms'} (${name}) to a \u001b[4mSHORT\u001b[24m readable duration with <= ${i} units`, () => {
            const result = toReadableDuration(duration, false, i);
            expect(result).toEqual(shortName);
          });
        });
      });

      kitchenSink.toEqual('duration', (v) => toReadableDuration(v as any), kitchenSink.safe.num(undefined, true), kitchenSink.samples.num);
      kitchenSink.toEqual('longNames', (v) => toReadableDuration(0, v as any), kitchenSink.safe.bool(false, false), kitchenSink.samples.general);
      kitchenSink.toEqual(
        'maxUnits',
        (v) => toReadableDuration(0, false, v as any),
        kitchenSink.safe.num(3, true, 1, undefined, 3),
        kitchenSink.samples.num
      );
    });
  });
});
