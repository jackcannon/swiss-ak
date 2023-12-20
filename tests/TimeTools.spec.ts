import * as swissak from '../dist';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('TimeTools', () => {
  describe('TimeTools.toReadableDuration', () => {
    it(should` exist as 'TimeTools.toReadableDuration'`, () => {
      expect(swissak.TimeTools.toReadableDuration).toBeDefined();
    });
  });
});
