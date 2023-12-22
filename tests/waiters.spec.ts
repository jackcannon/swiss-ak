import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('waiters', () => {
  describe('wait', () => {
    multiTest(
      [
        [swissak.wait, 'wait'],
        [swissak.waiters.wait, 'waiters.wait']
      ],
      (wait, name) => {
        it(should` exist as ${name}`, () => {
          expect(wait).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('waitUntil', () => {
    multiTest(
      [
        [swissak.waitUntil, 'waitUntil'],
        [swissak.waiters.waitUntil, 'waiters.waitUntil']
      ],
      (waitUntil, name) => {
        it(should` exist as ${name}`, () => {
          expect(waitUntil).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('waitFor', () => {
    multiTest(
      [
        [swissak.waitFor, 'waitFor'],
        [swissak.waiters.waitFor, 'waiters.waitFor']
      ],
      (waitFor, name) => {
        it(should` exist as ${name}`, () => {
          expect(waitFor).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('waitEvery', () => {
    multiTest(
      [
        [swissak.waitEvery, 'waitEvery'],
        [swissak.waiters.waitEvery, 'waiters.waitEvery']
      ],
      (waitEvery, name) => {
        it(should` exist as ${name}`, () => {
          expect(waitEvery).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('stopInterval', () => {
    multiTest(
      [
        [swissak.stopInterval, 'stopInterval'],
        [swissak.waiters.stopInterval, 'waiters.stopInterval']
      ],
      (stopInterval, name) => {
        it(should` exist as ${name}`, () => {
          expect(stopInterval).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('interval', () => {
    multiTest(
      [
        [swissak.interval, 'interval'],
        [swissak.waiters.interval, 'waiters.interval']
      ],
      (interval, name) => {
        it(should` exist as ${name}`, () => {
          expect(interval).toBeDefined();
        });

        // TODO tests
      }
    );
  });
});
