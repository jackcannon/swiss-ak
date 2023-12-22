import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('timer', () => {
  singleTest(swissak.timer, 'timer', (timer, name) => {
    it(should` exist as ${name}`, () => {
      expect(timer).toBeDefined();
    });
  });
});
describe('getTimer', () => {
  singleTest(swissak.getTimer, 'getTimer', (getTimer, name) => {
    it(should` exist as ${name}`, () => {
      expect(getTimer).toBeDefined();
    });
  });
});
