import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('cacher', () => {
  singleTest(swissak.cacher, 'cacher', (cacher, name) => {
    it(should` exist as ${name}`, () => {
      expect(cacher).toBeDefined();
    });
  });

  // TODO tests
});
