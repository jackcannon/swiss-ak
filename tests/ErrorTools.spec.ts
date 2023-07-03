import * as swissak from '../dist';

describe('ErrorTools', () => {
  describe('tryOr', () => {
    it(`exists as 'tryOr'`, () => {
      expect(swissak.tryOr).toBeDefined();
    });
    it(`exists as 'ErrorTools.tryOr'`, () => {
      expect(swissak.ErrorTools.tryOr).toBeDefined();
    });
  });
  describe('retry', () => {
    it(`exists as 'retry'`, () => {
      expect(swissak.retry).toBeDefined();
    });
    it(`exists as 'ErrorTools.retry'`, () => {
      expect(swissak.ErrorTools.retry).toBeDefined();
    });
  });
  describe('retryOr', () => {
    it(`exists as 'retryOr'`, () => {
      expect(swissak.retryOr).toBeDefined();
    });
    it(`exists as 'ErrorTools.retryOr'`, () => {
      expect(swissak.ErrorTools.retryOr).toBeDefined();
    });
  });
});
