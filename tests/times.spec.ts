import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

const testConstant = (name: string, value: number, expected: number) => {
  describe(name, () => {
    it(should` ${name} - be correct milliseconds`, () => {
      expect(value).toBe(expected);
    });
  });
};

const testMultipliers = (name: string, func: Function, baseValue: number, multipliers: number[] = [0, 2, 5, 10, -1, -100]) => {
  describe(name, () => {
    it(should` ${name} - default input to 1`, () => {
      expect(func()).toBe(func(1));
    });

    multipliers.forEach((multiplier) => {
      it(should` ${name} - handle ${multiplier}x`, () => {
        expect(func(multiplier)).toBe(multiplier * baseValue);
      });
    });

    kitchenSink.toEqual(name, (v) => func(v), kitchenSink.safe.num(1), kitchenSink.num);
  });
};

describe('times constants', () => {
  describe('milliseconds', () => {
    multiTest(
      [
        [swissak.MILLISECOND, 'MILLISECOND'],
        [swissak.times.MILLISECOND, 'times.MILLISECOND']
      ],
      (value, name) => {
        testConstant(name, value, 1);
      }
    );
  });
  describe('seconds', () => {
    multiTest(
      [
        [swissak.SECOND, 'SECOND'],
        [swissak.times.SECOND, 'times.SECOND']
      ],
      (value, name) => {
        testConstant(name, value, 1000);
      }
    );
  });
  describe('minutes', () => {
    multiTest(
      [
        [swissak.MINUTE, 'MINUTE'],
        [swissak.times.MINUTE, 'times.MINUTE']
      ],
      (value, name) => {
        testConstant(name, value, 60_000);
      }
    );
  });
  describe('hours', () => {
    multiTest(
      [
        [swissak.HOUR, 'HOUR'],
        [swissak.times.HOUR, 'times.HOUR']
      ],
      (value, name) => {
        testConstant(name, value, 3_600_000);
      }
    );
  });
  describe('days', () => {
    multiTest(
      [
        [swissak.DAY, 'DAY'],
        [swissak.times.DAY, 'times.DAY']
      ],
      (value, name) => {
        testConstant(name, value, 86_400_000);
      }
    );
  });
  describe('weeks', () => {
    multiTest(
      [
        [swissak.WEEK, 'WEEK'],
        [swissak.times.WEEK, 'times.WEEK']
      ],
      (value, name) => {
        testConstant(name, value, 604_800_000);
      }
    );
  });
  describe('months', () => {
    multiTest(
      [
        [swissak.MONTH, 'MONTH'],
        [swissak.times.MONTH, 'times.MONTH']
      ],
      (value, name) => {
        testConstant(name, value, 2_592_000_000);
      }
    );
  });
  describe('years', () => {
    multiTest(
      [
        [swissak.YEAR, 'YEAR'],
        [swissak.times.YEAR, 'times.YEAR']
      ],
      (value, name) => {
        testConstant(name, value, 31_557_600_000);
      }
    );
  });
  describe('decades', () => {
    multiTest(
      [
        [swissak.DECADE, 'DECADE'],
        [swissak.times.DECADE, 'times.DECADE']
      ],
      (value, name) => {
        testConstant(name, value, 315_576_000_000);
      }
    );
  });
  describe('centuries', () => {
    multiTest(
      [
        [swissak.CENTURY, 'CENTURY'],
        [swissak.times.CENTURY, 'times.CENTURY']
      ],
      (value, name) => {
        testConstant(name, value, 3_155_760_000_000);
      }
    );
  });
  describe('millenniums', () => {
    multiTest(
      [
        [swissak.MILLENNIUM, 'MILLENNIUM'],
        [swissak.times.MILLENNIUM, 'times.MILLENNIUM']
      ],
      (value, name) => {
        testConstant(name, value, 31_557_600_000_000);
      }
    );
  });
});

describe('times functions', () => {
  describe('milliseconds', () => {
    multiTest(
      [
        [swissak.milliseconds, 'milliseconds'],
        [swissak.times.milliseconds, 'times.milliseconds']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.MILLISECOND);
      }
    );
  });
  describe('seconds', () => {
    multiTest(
      [
        [swissak.seconds, 'seconds'],
        [swissak.times.seconds, 'times.seconds']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.SECOND);
      }
    );
  });
  describe('minutes', () => {
    multiTest(
      [
        [swissak.minutes, 'minutes'],
        [swissak.times.minutes, 'times.minutes']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.MINUTE);
      }
    );
  });
  describe('hours', () => {
    multiTest(
      [
        [swissak.hours, 'hours'],
        [swissak.times.hours, 'times.hours']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.HOUR);
      }
    );
  });
  describe('days', () => {
    multiTest(
      [
        [swissak.days, 'days'],
        [swissak.times.days, 'times.days']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.DAY);
      }
    );
  });
  describe('weeks', () => {
    multiTest(
      [
        [swissak.weeks, 'weeks'],
        [swissak.times.weeks, 'times.weeks']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.WEEK);
      }
    );
  });
  describe('months', () => {
    multiTest(
      [
        [swissak.months, 'months'],
        [swissak.times.months, 'times.months']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.MONTH);
      }
    );
  });
  describe('years', () => {
    multiTest(
      [
        [swissak.years, 'years'],
        [swissak.times.years, 'times.years']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.YEAR);
      }
    );
  });
  describe('decades', () => {
    multiTest(
      [
        [swissak.decades, 'decades'],
        [swissak.times.decades, 'times.decades']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.DECADE);
      }
    );
  });
  describe('centuries', () => {
    multiTest(
      [
        [swissak.centuries, 'centuries'],
        [swissak.times.centuries, 'times.centuries']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.CENTURY);
      }
    );
  });
  describe('millenniums', () => {
    multiTest(
      [
        [swissak.millenniums, 'millenniums'],
        [swissak.times.millenniums, 'times.millenniums']
      ],
      (func, name) => {
        testMultipliers(name, func, swissak.MILLENNIUM);
      }
    );
  });
});
