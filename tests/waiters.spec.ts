import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('waiters', () => {
  describe('wait', () => {
    it(should` exist as 'wait'`, () => {
      expect(swissak.wait).toBeDefined();
    });
    it(should` exist as 'waiters.wait'`, () => {
      expect(swissak.waiters.wait).toBeDefined();
    });
  });
  describe('waitUntil', () => {
    it(should` exist as 'waitUntil'`, () => {
      expect(swissak.waitUntil).toBeDefined();
    });
    it(should` exist as 'waiters.waitUntil'`, () => {
      expect(swissak.waiters.waitUntil).toBeDefined();
    });
  });
  describe('waitFor', () => {
    it(should` exist as 'waitFor'`, () => {
      expect(swissak.waitFor).toBeDefined();
    });
    it(should` exist as 'waiters.waitFor'`, () => {
      expect(swissak.waiters.waitFor).toBeDefined();
    });
  });
  describe('waitEvery', () => {
    it(should` exist as 'waitEvery'`, () => {
      expect(swissak.waitEvery).toBeDefined();
    });
    it(should` exist as 'waiters.waitEvery'`, () => {
      expect(swissak.waiters.waitEvery).toBeDefined();
    });
  });
  describe('stopInterval', () => {
    it(should` exist as 'stopInterval'`, () => {
      expect(swissak.stopInterval).toBeDefined();
    });
    it(should` exist as 'waiters.stopInterval'`, () => {
      expect(swissak.waiters.stopInterval).toBeDefined();
    });
  });
  describe('interval', () => {
    it(should` exist as 'interval'`, () => {
      expect(swissak.interval).toBeDefined();
    });
    it(should` exist as 'waiters.interval'`, () => {
      expect(swissak.waiters.interval).toBeDefined();
    });
  });
});
