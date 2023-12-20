import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('symbols', () => {
  it(should` exist as 'symbols'`, () => {
    expect(swissak.symbols).toBeDefined();
  });
});

describe('superscript', () => {
  it(should` exist as 'superscript'`, () => {
    expect(swissak.superscript).toBeDefined();
  });
});
