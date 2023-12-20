import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('timer', () => {
  it(should` exist as 'timer'`, () => {
    expect(swissak.timer).toBeDefined();
  });
});
describe('getTimer', () => {
  it(should` exist as 'getTimer'`, () => {
    expect(swissak.getTimer).toBeDefined();
  });
});
