import * as swissak from '../dist';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('TimeTools', () => {
  describe('toReadableDuration', () => {
    singleTest(swissak.TimeTools.toReadableDuration, 'TimeTools.toReadableDuration', (toReadableDuration, name) => {
      it(should` exist as ${name}`, () => {
        expect(toReadableDuration).toBeDefined();
      });
    });
  });
});
