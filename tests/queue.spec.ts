import * as swissak from '../';

const QUEUE_INSTANCE = new swissak.QueueManager();

describe('queue', () => {
  describe('queue', () => {
    it(`exists as 'queue'`, () => {
      expect(swissak.queue).toBeDefined();
    });
  });
  describe('QueueManager', () => {
    it(`exists as 'QueueManager'`, () => {
      expect(swissak.QueueManager).toBeDefined();
    });
  });

  describe('setDefaultPauseTime', () => {
    it(`exists as 'queue.setDefaultPauseTime'`, () => {
      expect(swissak.queue.setDefaultPauseTime).toBeDefined();
    });
    it(`exists as 'setDefaultPauseTime' on a queue instance`, () => {
      expect(QUEUE_INSTANCE.setDefaultPauseTime).toBeDefined();
    });
  });

  describe('setPauseTime', () => {
    it(`exists as 'queue.setPauseTime'`, () => {
      expect(swissak.queue.setPauseTime).toBeDefined();
    });
    it(`exists as 'setPauseTime' on a queue instance`, () => {
      expect(QUEUE_INSTANCE.setPauseTime).toBeDefined();
    });
  });

  describe('add', () => {
    it(`exists as 'queue.add'`, () => {
      expect(swissak.queue.add).toBeDefined();
    });
    it(`exists as 'add' on a queue instance`, () => {
      expect(QUEUE_INSTANCE.add).toBeDefined();
    });
  });

  describe('new', () => {
    it(`exists as 'queue.new'`, () => {
      expect(swissak.queue.new).toBeDefined();
    });
    it(`exists as 'new' on a queue instance`, () => {
      expect(QUEUE_INSTANCE.new).toBeDefined();
    });
  });
});
