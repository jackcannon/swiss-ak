import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

const QUEUE_INSTANCE = new swissak.QueueManager();

describe('queue', () => {
  describe('queue', () => {
    singleTest(swissak.queue, 'queue', (queue, name) => {
      it(should` exist as ${name}`, () => {
        expect(queue).toBeDefined();
      });
    });
  });
  describe('QueueManager', () => {
    singleTest(swissak.QueueManager, 'QueueManager', (QueueManager, name) => {
      it(should` exist as ${name}`, () => {
        expect(QueueManager).toBeDefined();
      });
    });
  });

  describe('setDefaultPauseTime', () => {
    multiTest(
      [
        [swissak.queue.setDefaultPauseTime, 'queue.setDefaultPauseTime'],
        [QUEUE_INSTANCE.setDefaultPauseTime, 'setDefaultPauseTime on a queue instance']
      ],
      (setDefaultPauseTime, name) => {
        it(should` exist as ${name}`, () => {
          expect(setDefaultPauseTime).toBeDefined();
        });
      }
    );
  });

  describe('setPauseTime', () => {
    multiTest(
      [
        [swissak.queue.setPauseTime, 'queue.setPauseTime'],
        [QUEUE_INSTANCE.setPauseTime, 'setPauseTime on a queue instance']
      ],
      (setPauseTime, name) => {
        it(should` exist as ${name}`, () => {
          expect(setPauseTime).toBeDefined();
        });
      }
    );
  });

  describe('add', () => {
    multiTest(
      [
        [swissak.queue.add, 'queue.add'],
        [QUEUE_INSTANCE.add, 'add on a queue instance']
      ],
      (add, name) => {
        it(should` exist as ${name}`, () => {
          expect(add).toBeDefined();
        });
      }
    );
  });

  describe('new', () => {
    multiTest(
      [
        [swissak.queue.new, 'queue.new'],
        [QUEUE_INSTANCE.new, 'new on a queue instance']
      ],
      (newQueue, name) => {
        it(should` exist as ${name}`, () => {
          expect(newQueue).toBeDefined();
        });
      }
    );
  });
});
