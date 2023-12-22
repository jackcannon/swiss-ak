import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('progress bar', () => {
  describe('printLn', () => {
    multiTest(
      [
        [swissak.printLn, 'printLn'],
        [swissak.progressBar.printLn, 'progressBar.printLn']
      ],
      (printLn, name) => {
        it(should` exist as ${name}`, () => {
          expect(printLn).toBeDefined();
        });

        // TODO tests
      }
    );
  });

  describe('getProgressBar', () => {
    multiTest(
      [
        [swissak.getProgressBar, 'getProgressBar'],
        [swissak.progressBar.getProgressBar, 'progressBar.getProgressBar']
      ],
      (getProgressBar, name) => {
        it(should` exist as ${name}`, () => {
          expect(getProgressBar).toBeDefined();
        });

        // TODO tests
      }
    );
  });

  const GENERIC_PROGRESS_BAR = swissak.getProgressBar(100);
  describe('Progress Bar object', () => {
    describe('update', () => {
      it(should` exist as 'update' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.update).toBeDefined();
      });

      // TODO tests
    });
    describe('next', () => {
      it(should` exist as 'next' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.next).toBeDefined();
      });

      // TODO tests
    });
    describe('set', () => {
      it(should` exist as 'set' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.set).toBeDefined();
      });

      // TODO tests
    });
    describe('reset', () => {
      it(should` exist as 'reset' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.reset).toBeDefined();
      });

      // TODO tests
    });
    describe('start', () => {
      it(should` exist as 'start' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.start).toBeDefined();
      });

      // TODO tests
    });
    describe('finish', () => {
      it(should` exist as 'finish' on a progress bar object`, () => {
        expect(GENERIC_PROGRESS_BAR.finish).toBeDefined();
      });

      // TODO tests
    });
  });
});
