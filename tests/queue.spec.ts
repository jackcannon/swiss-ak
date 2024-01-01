import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

const timingUnit = 100; // milliseconds
const timingErrorRange = 30; // milliseconds

const QUEUE_INSTANCE = new swissak.QueueManager();

describe('queue', () => {
  describe('queue', () => {
    singleTest(swissak.queue, 'queue', (queue, name) => {
      it(should` exist as ${name}`, () => {
        expect(queue).toBeDefined();
      });

      it(should` have the correct methods`, () => {
        expect(queue.setDefaultPauseTime).toBeDefined();
        expect(queue.setPauseTime).toBeDefined();
        expect(queue.add).toBeDefined();
        expect(queue.new).toBeDefined();
      });
    });
  });
  describe('QueueManager', () => {
    singleTest(swissak.QueueManager, 'QueueManager', (QueueManager, name) => {
      it(should` exist as ${name}`, () => {
        expect(QueueManager).toBeDefined();
      });

      it(should` have the correct methods`, () => {
        const instance = new QueueManager();
        expect(instance.setDefaultPauseTime).toBeDefined();
        expect(instance.setPauseTime).toBeDefined();
        expect(instance.add).toBeDefined();
        expect(instance.new).toBeDefined();
      });
    });
  });

  describe('setDefaultPauseTime', () => {
    multiTest(
      [
        [swissak.queue, 'queue'],
        [QUEUE_INSTANCE, 'a QueueManager instance']
      ],
      (queue, name) => {
        it(should` exist as ${name}`, () => {
          expect(queue.setDefaultPauseTime).toBeDefined();
        });

        it(should` set the default pause time`, () => {
          const value = 45;
          queue.setDefaultPauseTime(value);
          expect(queue.defaultPauseTime).toBe(value);
        });

        it(should` perform the pause when queueing`, async () => {
          const id = 'default-pause-1';
          const value = timingUnit;
          queue.setDefaultPauseTime(value);

          queue.add(id, async () => 123);

          const start = Date.now();
          await queue.getPromise(id);
          const duration = Date.now() - start;
          expect(Math.abs(duration - value)).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'time',
          (v) => {
            queue.setDefaultPauseTime(v);
            return queue.defaultPauseTime;
          },
          kitchenSink.safe.num(undefined, true, 0),
          kitchenSink.samples.num
        );
      }
    );
  });

  describe('setPauseTime', () => {
    multiTest(
      [
        [swissak.queue, 'queue'],
        [QUEUE_INSTANCE, 'a QueueManager instance']
      ],
      (queue, name) => {
        it(should` exist as ${name}`, () => {
          expect(queue.setPauseTime).toBeDefined();
        });

        it(should` set the pause time for a specific queue id`, () => {
          const uniqueId = Math.random().toString(36).slice(2);
          const value = 45;
          queue.setPauseTime(uniqueId, value);
          expect(queue.pauseTimes.get(uniqueId)).toBe(value);
        });

        it(should` perform the pause when queueing`, async () => {
          const id = 'specific-pause-1';
          const value = timingUnit;
          queue.setDefaultPauseTime(0);
          queue.setPauseTime(id, value);

          queue.add(id, async () => 123);

          const start = Date.now();
          await queue.getPromise(id);
          const duration = Date.now() - start;
          expect(Math.abs(duration - value)).toBeLessThanOrEqual(timingErrorRange);
        });

        kitchenSink.toEqual(
          'id',
          (v) => queue.setPauseTime(v, 123),
          kitchenSink.safe.str(undefined, false, Math.random().toString(36).slice(2)),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'time',
          (v) => {
            const uniqueId = Math.random().toString(36).slice(2);
            queue.setPauseTime(uniqueId, v);
            return queue.pauseTimes.get(uniqueId);
          },
          kitchenSink.safe.num(undefined, true, 0),
          kitchenSink.samples.num
        );
      }
    );
  });

  describe('add', () => {
    multiTest(
      [
        [swissak.queue, 'queue'],
        [QUEUE_INSTANCE, 'a QueueManager instance']
      ],
      (queue, name) => {
        it(should` exist as ${name}`, () => {
          expect(queue.add).toBeDefined();
        });

        it(should` add a promise to the given queue - with promises`, async () => {
          const uniqueId = 'example1';
          const promise = queue.add(uniqueId, Promise.resolve(123));

          expect(await promise).toEqual(123);
          expect(await queue.promises.get(uniqueId)).toEqual(123);
        });
        it(should` add a promise to the given queue - with functions`, async () => {
          const uniqueId = 'example1';
          const promise = queue.add(uniqueId, () => Promise.resolve(123));

          expect(await promise).toEqual(123);
          expect(await queue.promises.get(uniqueId)).toEqual(123);
        });
        it(should` add a promise to the given queue - with values`, async () => {
          const uniqueId = 'example1';
          const promise = queue.add(uniqueId, 123);

          expect(await promise).toEqual(123);
          expect(await queue.promises.get(uniqueId)).toEqual(123);
        });

        it(should` queue several promises - with promises`, async () => {
          const uniqueId = 'example2';

          const promise1 = queue.add(uniqueId, Promise.resolve(123));
          const promise2 = queue.add(uniqueId, Promise.resolve(456));
          const promise3 = queue.add(uniqueId, Promise.resolve(789));

          expect(await promise1).toEqual(123);
          expect(await promise2).toEqual(456);
          expect(await promise3).toEqual(789);
          expect(await queue.promises.get(uniqueId)).toEqual(789);
        });
        it(should` queue several promises - with functions`, async () => {
          const uniqueId = 'example2';

          const promise1 = queue.add(uniqueId, () => Promise.resolve(123));
          const promise2 = queue.add(uniqueId, () => Promise.resolve(456));
          const promise3 = queue.add(uniqueId, () => Promise.resolve(789));

          expect(await promise1).toEqual(123);
          expect(await promise2).toEqual(456);
          expect(await promise3).toEqual(789);
          expect(await queue.promises.get(uniqueId)).toEqual(789);
        });
        it(should` queue several promises - with values`, async () => {
          const uniqueId = 'example2';

          const promise1 = queue.add(uniqueId, 123);
          const promise2 = queue.add(uniqueId, 456);
          const promise3 = queue.add(uniqueId, 789);

          expect(await promise1).toEqual(123);
          expect(await promise2).toEqual(456);
          expect(await promise3).toEqual(789);
          expect(await queue.promises.get(uniqueId)).toEqual(789);
        });

        queue.setDefaultPauseTime(0);

        kitchenSink.toEqual(
          'id',
          (v) => {
            queue.setDefaultPauseTime(0);
            queue.setPauseTime(v, 0);
            return queue.add(v, () => Promise.resolve(123));
          },
          kitchenSink.safe.str(undefined, false, Math.random().toString(36).slice(2)),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'promiseItem',
          (v) => {
            const id = Math.random().toString(36).slice(2);
            queue.setDefaultPauseTime(0);
            queue.setPauseTime(id, 0);
            return queue.add(id, v);
          },
          (v) => kitchenSink.safe.func(undefined, async () => v)(v),
          kitchenSink.samples.general
        );
      }
    );
  });

  describe('new', () => {
    multiTest(
      [
        [swissak.queue.new, 'queue.new'],
        [QUEUE_INSTANCE.new, 'new on a queue instance'],
        [swissak.QueueManager.new, 'QueueManager.new']
      ],
      (newQueue, name) => {
        it(should` exist as ${name}`, () => {
          expect(newQueue).toBeDefined();
        });

        it(should` create an entirely new instance`, () => {
          swissak.queue.setDefaultPauseTime(45);
          QUEUE_INSTANCE.setDefaultPauseTime(45);

          const instance = newQueue(99);

          expect(instance.defaultPauseTime).toBe(99);
          expect(swissak.queue.defaultPauseTime).toBe(45);
          expect(QUEUE_INSTANCE.defaultPauseTime).toBe(45);
        });

        kitchenSink.toEqual(
          'defaultPauseTime',
          (v) => {
            const instance = newQueue(v as any);
            return instance.defaultPauseTime;
          },
          kitchenSink.safe.num(0, true, 0),
          kitchenSink.samples.num
        );
      }
    );
  });
});
