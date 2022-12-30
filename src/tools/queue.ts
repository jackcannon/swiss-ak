import { wait } from './waiters';

/**
 * TODO docs
 */
export class QueueManager {
  promises: Map<string, Promise<any>> = new Map<string, Promise<any>>();
  pauseTimes: Map<string, number> = new Map<string, number>();
  defaultPauseTime: number = 0;

  constructor() {}

  getPromise(id: string): Promise<any> {
    const existing = this.promises.get(id);

    if (existing) return existing;

    const promise = Promise.resolve();
    this.promises.set(id, promise);
    return promise;
  }

  /**
   * TODO docs
   */
  setDefaultPauseTime(time: number) {
    this.defaultPauseTime = time;
  }

  /**
   * TODO docs
   */
  setPauseTime(id: string, time: number) {
    this.pauseTimes.set(id, time);
  }

  /**
   * TODO docs
   */
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
}

/**
 * TODO docs
 */
export const queue = new QueueManager();
