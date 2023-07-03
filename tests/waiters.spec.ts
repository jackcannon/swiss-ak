import * as swissak from '../';

describe('waiters', () => {
  describe('wait', () => {
    it(`exists as 'wait'`, () => {
      expect(swissak.wait).toBeDefined();
    });
    it(`exists as 'waiters.wait'`, () => {
      expect(swissak.waiters.wait).toBeDefined();
    });
  });
  describe('waitUntil', () => {
    it(`exists as 'waitUntil'`, () => {
      expect(swissak.waitUntil).toBeDefined();
    });
    it(`exists as 'waiters.waitUntil'`, () => {
      expect(swissak.waiters.waitUntil).toBeDefined();
    });
  });
  describe('waitFor', () => {
    it(`exists as 'waitFor'`, () => {
      expect(swissak.waitFor).toBeDefined();
    });
    it(`exists as 'waiters.waitFor'`, () => {
      expect(swissak.waiters.waitFor).toBeDefined();
    });
  });
  describe('waitEvery', () => {
    it(`exists as 'waitEvery'`, () => {
      expect(swissak.waitEvery).toBeDefined();
    });
    it(`exists as 'waiters.waitEvery'`, () => {
      expect(swissak.waiters.waitEvery).toBeDefined();
    });
  });
  describe('stopInterval', () => {
    it(`exists as 'stopInterval'`, () => {
      expect(swissak.stopInterval).toBeDefined();
    });
    it(`exists as 'waiters.stopInterval'`, () => {
      expect(swissak.waiters.stopInterval).toBeDefined();
    });
  });
  describe('interval', () => {
    it(`exists as 'interval'`, () => {
      expect(swissak.interval).toBeDefined();
    });
    it(`exists as 'waiters.interval'`, () => {
      expect(swissak.waiters.interval).toBeDefined();
    });
  });
});
