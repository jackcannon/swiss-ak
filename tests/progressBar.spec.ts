import * as swissak from '../';

describe('progress bar', () => {
  describe('printLn', () => {
    it(`exists as 'printLn'`, () => {
      expect(swissak.printLn).toBeDefined();
    });
    it(`exists as 'progressBar.printLn'`, () => {
      expect(swissak.progressBar.printLn).toBeDefined();
    });
  });

  describe('getProgressBar', () => {
    it(`exists as 'getProgressBar'`, () => {
      expect(swissak.getProgressBar).toBeDefined();
    });
    it(`exists as 'progressBar.getProgressBar'`, () => {
      expect(swissak.progressBar.getProgressBar).toBeDefined();
    });
  });

  const GENERIC_PROGRESS_BAR = swissak.getProgressBar(100);
  describe('Progress Bar object', () => {
    describe('update', () => {
      it(`exists as 'update' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.update).toBeDefined();
      });
    });
    describe('next', () => {
      it(`exists as 'next' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.next).toBeDefined();
      });
    });
    describe('set', () => {
      it(`exists as 'set' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.set).toBeDefined();
      });
    });
    describe('reset', () => {
      it(`exists as 'reset' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.reset).toBeDefined();
      });
    });
    describe('start', () => {
      it(`exists as 'start' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.start).toBeDefined();
      });
    });
    describe('finish', () => {
      it(`exists as 'finish' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.finish).toBeDefined();
      });
    });
  });
});
