import * as swissak from '../dist';

describe('TimeTools', () => {
  describe('TimeTools.toReadableDuration', () => {
    it(`exists as 'TimeTools.toReadableDuration'`, () => {
      expect(swissak.TimeTools.toReadableDuration).toBeDefined();
    });
  });
});
