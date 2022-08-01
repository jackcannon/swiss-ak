import {
  MILLISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  MONTH,
  YEAR,
  DECADE,
  CENTURY,
  MILLENNIUM,
  milliseconds,
  seconds,
  minutes,
  hours,
  days,
  weeks,
  months,
  years,
  decades,
  centuries,
  millenniums
} from '../src/tools/times';

describe('MILLISECOND', () => {
  it('should be correct milliseconds', () => {
    expect(MILLISECOND).toBe(1);
  });
});
describe('SECOND', () => {
  it('should be correct milliseconds', () => {
    expect(SECOND).toBe(1000);
  });
});
describe('MINUTE', () => {
  it('should be correct milliseconds', () => {
    expect(MINUTE).toBe(60_000);
  });
});
describe('HOUR', () => {
  it('should be correct milliseconds', () => {
    expect(HOUR).toBe(3_600_000);
  });
});
describe('DAY', () => {
  it('should be correct milliseconds', () => {
    expect(DAY).toBe(86_400_000);
  });
});
describe('WEEK', () => {
  it('should be correct milliseconds', () => {
    expect(WEEK).toBe(604_800_000);
  });
});
describe('MONTH', () => {
  it('should be correct milliseconds', () => {
    expect(MONTH).toBe(2_592_000_000);
  });
});
describe('YEAR', () => {
  it('should be correct milliseconds', () => {
    expect(YEAR).toBe(31_557_600_000);
  });
});
describe('DECADE', () => {
  it('should be correct milliseconds', () => {
    expect(DECADE).toBe(315_576_000_000);
  });
});
describe('CENTURY', () => {
  it('should be correct milliseconds', () => {
    expect(CENTURY).toBe(3_155_760_000_000);
  });
});
describe('MILLENNIUM', () => {
  it('should be correct milliseconds', () => {
    expect(MILLENNIUM).toBe(31_557_600_000_000);
  });
});

describe('milliseconds', () => {
  it('should default input to 1', () => {
    expect(milliseconds()).toBe(milliseconds(1));
  });
  it('should handle 2x', () => {
    expect(milliseconds(2)).toBe(2 * MILLISECOND);
  });
  it('should handle 5x', () => {
    expect(milliseconds(5)).toBe(5 * MILLISECOND);
  });
  it('should handle 10x', () => {
    expect(milliseconds(10)).toBe(10 * MILLISECOND);
  });
});
describe('seconds', () => {
  it('should default input to 1', () => {
    expect(seconds()).toBe(seconds(1));
  });
  it('should handle 2x', () => {
    expect(seconds(2)).toBe(2 * SECOND);
  });
  it('should handle 5x', () => {
    expect(seconds(5)).toBe(5 * SECOND);
  });
  it('should handle 10x', () => {
    expect(seconds(10)).toBe(10 * SECOND);
  });
});
describe('minutes', () => {
  it('should default input to 1', () => {
    expect(minutes()).toBe(minutes(1));
  });
  it('should handle 2x', () => {
    expect(minutes(2)).toBe(2 * MINUTE);
  });
  it('should handle 5x', () => {
    expect(minutes(5)).toBe(5 * MINUTE);
  });
  it('should handle 10x', () => {
    expect(minutes(10)).toBe(10 * MINUTE);
  });
});
describe('hours', () => {
  it('should default input to 1', () => {
    expect(hours()).toBe(hours(1));
  });
  it('should handle 2x', () => {
    expect(hours(2)).toBe(2 * HOUR);
  });
  it('should handle 5x', () => {
    expect(hours(5)).toBe(5 * HOUR);
  });
  it('should handle 10x', () => {
    expect(hours(10)).toBe(10 * HOUR);
  });
});
describe('days', () => {
  it('should default input to 1', () => {
    expect(days()).toBe(days(1));
  });
  it('should handle 2x', () => {
    expect(days(2)).toBe(2 * DAY);
  });
  it('should handle 5x', () => {
    expect(days(5)).toBe(5 * DAY);
  });
  it('should handle 10x', () => {
    expect(days(10)).toBe(10 * DAY);
  });
});
describe('weeks', () => {
  it('should default input to 1', () => {
    expect(weeks()).toBe(weeks(1));
  });
  it('should handle 2x', () => {
    expect(weeks(2)).toBe(2 * WEEK);
  });
  it('should handle 5x', () => {
    expect(weeks(5)).toBe(5 * WEEK);
  });
  it('should handle 10x', () => {
    expect(weeks(10)).toBe(10 * WEEK);
  });
});
describe('months', () => {
  it('should default input to 1', () => {
    expect(months()).toBe(months(1));
  });
  it('should handle 2x', () => {
    expect(months(2)).toBe(2 * MONTH);
  });
  it('should handle 5x', () => {
    expect(months(5)).toBe(5 * MONTH);
  });
  it('should handle 10x', () => {
    expect(months(10)).toBe(10 * MONTH);
  });
});
describe('years', () => {
  it('should default input to 1', () => {
    expect(years()).toBe(years(1));
  });
  it('should handle 2x', () => {
    expect(years(2)).toBe(2 * YEAR);
  });
  it('should handle 5x', () => {
    expect(years(5)).toBe(5 * YEAR);
  });
  it('should handle 10x', () => {
    expect(years(10)).toBe(10 * YEAR);
  });
});
describe('decades', () => {
  it('should default input to 1', () => {
    expect(decades()).toBe(decades(1));
  });
  it('should handle 2x', () => {
    expect(decades(2)).toBe(2 * DECADE);
  });
  it('should handle 5x', () => {
    expect(decades(5)).toBe(5 * DECADE);
  });
  it('should handle 10x', () => {
    expect(decades(10)).toBe(10 * DECADE);
  });
});
describe('centuries', () => {
  it('should default input to 1', () => {
    expect(centuries()).toBe(centuries(1));
  });
  it('should handle 2x', () => {
    expect(centuries(2)).toBe(2 * CENTURY);
  });
  it('should handle 5x', () => {
    expect(centuries(5)).toBe(5 * CENTURY);
  });
  it('should handle 10x', () => {
    expect(centuries(10)).toBe(10 * CENTURY);
  });
});
describe('millenniums', () => {
  it('should default input to 1', () => {
    expect(millenniums()).toBe(millenniums(1));
  });
  it('should handle 2x', () => {
    expect(millenniums(2)).toBe(2 * MILLENNIUM);
  });
  it('should handle 5x', () => {
    expect(millenniums(5)).toBe(5 * MILLENNIUM);
  });
  it('should handle 10x', () => {
    expect(millenniums(10)).toBe(10 * MILLENNIUM);
  });
});
