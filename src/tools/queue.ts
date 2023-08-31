import { wait } from './waiters';

//<!-- DOCS: 800 -->
/**<!-- DOCS: queue ##! -->
 * queue
 *
 * A way of managing queues from different parts of the code.
 */

/**<!-- DOCS: queue.QueueManager ### -->
 * QueueManager
 *
 * - `QueueManager`
 *
 * Allows you to queue up functions to be executed in order.
 *
 * Importantly, it allows you to add to the queue from another part of the code, without needing to access a promise directly.
 *
 * ```typescript
 * const printDocument = async (id: number) => {
 *   // do something
 *   await wait(seconds(5));
 * }
 *
 * const queue = new QueueManager();
 *
 * const start = Date.now();
 *
 * // happening async/concurrently
 * PromiseTools.each(range(5), async (i) => {
 *   await wait(seconds(Math.random() * 1));
 *   console.log(Date.now() - start, ' - trigger:', i, );
 *   await queue.add('printer', () => printDocument(i))
 *   console.log(Date.now() - start, ' - printed:', i);
 * })
 *
 * // Output:
 *
 * // 184 ' - trigger:' 0
 * // 355 ' - trigger:' 2
 * // 435 ' - trigger:' 4
 * // 448 ' - trigger:' 1
 * // 487 ' - trigger:' 3
 * // 5190 ' - printed:' 0
 * // 10195 ' - printed:' 2
 * // 15200 ' - printed:' 4
 * // 20205 ' - printed:' 1
 * // 25208 ' - printed:' 3
 * ```
 */
export class QueueManager {
  promises: Map<string, Promise<any>> = new Map<string, Promise<any>>();
  pauseTimes: Map<string, number> = new Map<string, number>();
  defaultPauseTime: number = 0;

  constructor(defaultPauseTime?: number) {
    if (defaultPauseTime) this.setDefaultPauseTime(defaultPauseTime);
  }

  getPromise(id: string): Promise<any> {
    const existing = this.promises.get(id);

    if (existing) return existing;

    const promise = Promise.resolve();
    this.promises.set(id, promise);
    return promise;
  }

  /**<!-- DOCS: queue.setDefaultPauseTime #### @ -->
   * setDefaultPauseTime
   *
   * - `queue.setDefaultPauseTime`
   * - `new QueueManager().setDefaultPauseTime`
   *
   * Sets the default pause time for pauses between queue items.
   * @param {number} time
   * @returns {void}
   */
  setDefaultPauseTime(time: number) {
    this.defaultPauseTime = time;
  }

  /**<!-- DOCS: queue.setPauseTime #### @ -->
   * setPauseTime
   *
   * - `queue.setPauseTime`
   * - `new QueueManager().setPauseTime`
   *
   * Sets the pause time for pauses between queue items for the specified queue.
   * @param {string} id
   * @param {number} time
   * @returns {void}
   */
  setPauseTime(id: string, time: number) {
    this.pauseTimes.set(id, time);
  }

  /**<!-- DOCS: queue.add #### @ -->
   * add
   *
   * - `queue.add`
   * - `new QueueManager().add`
   *
   * Adds a function to the queue.
   * @param {string} id
   * @param {() => Promise<T>} fn
   * @returns {Promise<T>}
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

  /**<!-- DOCS: queue.new #### @ -->
   * new
   *
   * - `queue.new`
   * - `new QueueManager().new`
   *
   * Creates a new QueueManager instance.
   * @param {number} [defaultPauseTime]
   * @returns {QueueManager}
   */
  new(defaultPauseTime?: number) {
    return new QueueManager(defaultPauseTime);
  }
}

/**<!-- DOCS: queue.queue ### -->
 * queue
 *
 * - `queue`
 *
 * An instance of QueueManager
 *
 * See QueueManager for more information.
 */
export const queue = new QueueManager();
