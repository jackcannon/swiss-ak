import * as swissak from '../';

const testConstant = (name: string, value: number, expected: number) => {
  describe(name, () => {
    it(`${name} - should be correct milliseconds`, () => {
      expect(value).toBe(expected);
    });
  });
};

const testMultipliers = (name: string, func: Function, baseValue: number, multipliers: number[] = [0, 2, 5, 10, -1, -100]) => {
  describe(name, () => {
    it(`${name} - should default input to 1`, () => {
      expect(func()).toBe(func(1));
    });

    multipliers.forEach((multiplier) => {
      it(`${name} - should handle ${multiplier}x`, () => {
        expect(func(multiplier)).toBe(multiplier * baseValue);
      });
    });
  });
};

describe('times constants', () => {
  describe('milliseconds', () => {
    testConstant('MILLISECOND', swissak.MILLISECOND, 1);
    testConstant('times.MILLISECOND', swissak.times.MILLISECOND, 1);
  });
  describe('seconds', () => {
    testConstant('SECOND', swissak.SECOND, 1000);
    testConstant('times.SECOND', swissak.times.SECOND, 1000);
  });
  describe('minutes', () => {
    testConstant('MINUTE', swissak.MINUTE, 60_000);
    testConstant('times.MINUTE', swissak.times.MINUTE, 60_000);
  });
  describe('hours', () => {
    testConstant('HOUR', swissak.HOUR, 3_600_000);
    testConstant('times.HOUR', swissak.times.HOUR, 3_600_000);
  });
  describe('days', () => {
    testConstant('DAY', swissak.DAY, 86_400_000);
    testConstant('times.DAY', swissak.times.DAY, 86_400_000);
  });
  describe('weeks', () => {
    testConstant('WEEK', swissak.WEEK, 604_800_000);
    testConstant('times.WEEK', swissak.times.WEEK, 604_800_000);
  });
  describe('months', () => {
    testConstant('MONTH', swissak.MONTH, 2_592_000_000);
    testConstant('times.MONTH', swissak.times.MONTH, 2_592_000_000);
  });
  describe('years', () => {
    testConstant('YEAR', swissak.YEAR, 31_557_600_000);
    testConstant('times.YEAR', swissak.times.YEAR, 31_557_600_000);
  });
  describe('decades', () => {
    testConstant('DECADE', swissak.DECADE, 315_576_000_000);
    testConstant('times.DECADE', swissak.times.DECADE, 315_576_000_000);
  });
  describe('centuries', () => {
    testConstant('CENTURY', swissak.CENTURY, 3_155_760_000_000);
    testConstant('times.CENTURY', swissak.times.CENTURY, 3_155_760_000_000);
  });
  describe('millenniums', () => {
    testConstant('MILLENNIUM', swissak.MILLENNIUM, 31_557_600_000_000);
    testConstant('times.MILLENNIUM', swissak.times.MILLENNIUM, 31_557_600_000_000);
  });
});

describe('times functions', () => {
  describe('milliseconds', () => {
    testMultipliers('milliseconds', swissak.milliseconds, swissak.MILLISECOND);
    testMultipliers('times.milliseconds', swissak.times.milliseconds, swissak.MILLISECOND);
  });
  describe('seconds', () => {
    testMultipliers('seconds', swissak.seconds, swissak.SECOND);
    testMultipliers('times.seconds', swissak.times.seconds, swissak.SECOND);
  });
  describe('minutes', () => {
    testMultipliers('minutes', swissak.minutes, swissak.MINUTE);
    testMultipliers('times.minutes', swissak.times.minutes, swissak.MINUTE);
  });
  describe('hours', () => {
    testMultipliers('hours', swissak.hours, swissak.HOUR);
    testMultipliers('times.hours', swissak.times.hours, swissak.HOUR);
  });
  describe('days', () => {
    testMultipliers('days', swissak.days, swissak.DAY);
    testMultipliers('times.days', swissak.times.days, swissak.DAY);
  });
  describe('weeks', () => {
    testMultipliers('weeks', swissak.weeks, swissak.WEEK);
    testMultipliers('times.weeks', swissak.times.weeks, swissak.WEEK);
  });
  describe('months', () => {
    testMultipliers('months', swissak.months, swissak.MONTH);
    testMultipliers('times.months', swissak.times.months, swissak.MONTH);
  });
  describe('years', () => {
    testMultipliers('years', swissak.years, swissak.YEAR);
    testMultipliers('times.years', swissak.times.years, swissak.YEAR);
  });
  describe('decades', () => {
    testMultipliers('decades', swissak.decades, swissak.DECADE);
    testMultipliers('times.decades', swissak.times.decades, swissak.DECADE);
  });
  describe('centuries', () => {
    testMultipliers('centuries', swissak.centuries, swissak.CENTURY);
    testMultipliers('times.centuries', swissak.times.centuries, swissak.CENTURY);
  });
  describe('millenniums', () => {
    testMultipliers('millenniums', swissak.millenniums, swissak.MILLENNIUM);
    testMultipliers('times.millenniums', swissak.times.millenniums, swissak.MILLENNIUM);
  });
});
