import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('progress bar', () => {
  describe('printLn', () => {
    it(should` exist as 'printLn'`, () => {
      expect(swissak.printLn).toBeDefined();
    });
    it(should` exist as 'progressBar.printLn'`, () => {
      expect(swissak.progressBar.printLn).toBeDefined();
    });
  });

  describe('getProgressBar', () => {
    it(should` exist as 'getProgressBar'`, () => {
      expect(swissak.getProgressBar).toBeDefined();
    });
    it(should` exist as 'progressBar.getProgressBar'`, () => {
      expect(swissak.progressBar.getProgressBar).toBeDefined();
    });
  });

  const GENERIC_PROGRESS_BAR = swissak.getProgressBar(100);
  describe('Progress Bar object', () => {
    describe('update', () => {
      it(should` exist as 'update' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.update).toBeDefined();
      });
    });
    describe('next', () => {
      it(should` exist as 'next' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.next).toBeDefined();
      });
    });
    describe('set', () => {
      it(should` exist as 'set' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.set).toBeDefined();
      });
    });
    describe('reset', () => {
      it(should` exist as 'reset' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.reset).toBeDefined();
      });
    });
    describe('start', () => {
      it(should` exist as 'start' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.start).toBeDefined();
      });
    });
    describe('finish', () => {
      it(should` exist as 'finish' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.finish).toBeDefined();
      });
    });
  });
});
