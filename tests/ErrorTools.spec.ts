import * as swissak from '../';
import { multiTest } from './test-utils';

describe('ErrorTools', () => {
  describe('tryOr', () => {
    multiTest(
      [
        [swissak.tryOr, 'tryOr'],
        [swissak.ErrorTools.tryOr, 'ErrorTools.tryOr']
      ],
      (tryOr, name) => {
        it(`exists as '${name}'`, () => {
          expect(tryOr).toBeDefined();
        });
      }
    );
  });
  describe('retry', () => {
    multiTest(
      [
        [swissak.retry, 'retry'],
        [swissak.ErrorTools.retry, 'ErrorTools.retry']
      ],
      (retry, name) => {
        it(`exists as '${name}'`, () => {
          expect(retry).toBeDefined();
        });
      }
    );
  });
  describe('retryOr', () => {
    multiTest(
      [
        [swissak.retryOr, 'retryOr'],
        [swissak.ErrorTools.retryOr, 'ErrorTools.retryOr']
      ],
      (retryOr, name) => {
        it(`exists as '${name}'`, () => {
          expect(retryOr).toBeDefined();
        });
      }
    );
  });
});
