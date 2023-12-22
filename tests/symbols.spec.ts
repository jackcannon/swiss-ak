import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('symbols', () => {
  singleTest(swissak.symbols, 'symbols', (symbols, name) => {
    it(should` exist as ${name}`, () => {
      expect(symbols).toBeDefined();
    });
  });
});

describe('superscript', () => {
  singleTest(swissak.superscript, 'superscript', (superscript, name) => {
    it(should` exist as ${name}`, () => {
      expect(superscript).toBeDefined();
    });
  });
});
