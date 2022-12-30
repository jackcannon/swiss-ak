import { wait } from './waiters';

/**
 * TODO docs
 */
export const queue = new (class QueueManager {
  promises: Map<string, Promise<any>> = new Map<string, Promise<any>>();
  pauseTimes: Map<string, number> = new Map<string, number>();

  constructor() {}

  getPromise(id: string): Promise<any> {
    const existing = this.promises.get(id);

    if (existing) return existing;

    const promise = Promise.resolve();
    this.promises.set(id, promise);
    return promise;
  }

  setPauseTime(id: string, time: number) {
    this.pauseTimes.set(id, time);
  }

  add<T>(id: string, fn: () => Promise<T>): Promise<T> {
    const promise = this.getPromise(id).then(async () => {
      const result: T = await fn();
      const pauseTime = this.pauseTimes.get(id) ?? -1;
      if (pauseTime >= 0) await wait(pauseTime);
      return result;
    });

    this.promises.set(id, promise);

    return promise;
  }
})();
