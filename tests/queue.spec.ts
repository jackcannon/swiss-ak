import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

const QUEUE_INSTANCE = new swissak.QueueManager();

describe('queue', () => {
  describe('queue', () => {
    it(should` exist as 'queue'`, () => {
      expect(swissak.queue).toBeDefined();
    });
  });
  describe('QueueManager', () => {
    it(should` exist as 'QueueManager'`, () => {
      expect(swissak.QueueManager).toBeDefined();
    });
  });

  describe('setDefaultPauseTime', () => {
    it(should` exist as 'queue.setDefaultPauseTime'`, () => {
      expect(swissak.queue.setDefaultPauseTime).toBeDefined();
    });
    it(should` exist as 'setDefaultPauseTime' on a queue instance`, () => {
      expect(QUEUE_INSTANCE.setDefaultPauseTime).toBeDefined();
    });
  });

  describe('setPauseTime', () => {
    it(should` exist as 'queue.setPauseTime'`, () => {
      expect(swissak.queue.setPauseTime).toBeDefined();
    });
    it(should` exist as 'setPauseTime' on a queue instance`, () => {
      expect(QUEUE_INSTANCE.setPauseTime).toBeDefined();
    });
  });

  describe('add', () => {
    it(should` exist as 'queue.add'`, () => {
      expect(swissak.queue.add).toBeDefined();
    });
    it(should` exist as 'add' on a queue instance`, () => {
      expect(QUEUE_INSTANCE.add).toBeDefined();
    });
  });

  describe('new', () => {
    it(should` exist as 'queue.new'`, () => {
      expect(swissak.queue.new).toBeDefined();
    });
    it(should` exist as 'new' on a queue instance`, () => {
      expect(QUEUE_INSTANCE.new).toBeDefined();
    });
  });
});
