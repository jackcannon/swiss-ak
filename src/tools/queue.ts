import { ArrayTools } from './ArrayTools';
import { PromiseTools } from './PromiseTools';
import { safe } from './safe';
import { ms } from './times';
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
  pauseTimes: Map<string, ms> = new Map<string, ms>();
  defaultPauseTime: ms = 0;

  constructor(defaultPauseTime?: ms) {
    const args = {
      defaultPauseTime: safe.num(defaultPauseTime, true, 0) as ms
    };
    this.setDefaultPauseTime(args.defaultPauseTime);
  }

  getPromise(id: string): Promise<any> {
    const args = {
      id: safe.str(id, false, Math.random().toString(36).slice(2))
    };
    const existing = this.promises.get(args.id);

    if (existing) return existing;

    const promise = Promise.resolve();
    this.promises.set(args.id, promise);
    return promise;
  }

  /**<!-- DOCS: queue.setDefaultPauseTime #### @ -->
   * setDefaultPauseTime
   *
   * - `queue.setDefaultPauseTime`
   * - `new QueueManager().setDefaultPauseTime`
   *
   * Sets the default pause time for pauses between queue items.
   * @param {ms} time
   * @returns {void}
   */
  setDefaultPauseTime(time: ms) {
    const args = {
      time: safe.num(time, true, 0) as ms
    };
    this.defaultPauseTime = args.time;
  }

  /**<!-- DOCS: queue.setPauseTime #### @ -->
   * setPauseTime
   *
   * - `queue.setPauseTime`
   * - `new QueueManager().setPauseTime`
   *
   * Sets the pause time for pauses between queue items for the specified queue.
   * @param {string} id
   * @param {ms} time
   * @returns {void}
   */
  setPauseTime(id: string, time: ms) {
    const args = {
      id: safe.str(id, false, Math.random().toString(36).slice(2)),
      time: safe.num(time, true, 0) as ms
    };
    this.pauseTimes.set(args.id, args.time);
  }

  /**<!-- DOCS: queue.add #### @ -->
   * add
   *
   * - `queue.add`
   * - `new QueueManager().add`
   *
   * Adds a function to the queue.
   * @param {string} id
   * @param {PromiseTools.PromiseItem<T>} promiseItem
   * @returns {Promise<T>}
   */
  add<T>(id: string, promiseItem: PromiseTools.PromiseItem<T>): Promise<T> {
    const args = {
      id: safe.str(id, false, Math.random().toString(36).slice(2)),
      promiseItem: safe.func(promiseItem as any, async () => promiseItem as unknown as T) as () => Promise<T> // functionified like functionifyPromiseItem
    };
    const promise = this.getPromise(args.id).then(async () => {
      const result: T = await args.promiseItem();
      const pauseTime = this.pauseTimes.get(args.id) ?? this.defaultPauseTime;
      if (pauseTime >= 0) await wait(pauseTime);
      return result;
    });

    this.promises.set(args.id, promise);

    return promise;
  }

  /**<!-- DOCS: queue.new #### @ -->
   * new
   *
   * - `queue.new`
   * - `new QueueManager().new`
   * - `QueueManager.new`
   *
   * Creates a new QueueManager instance.
   * @param {ms} [defaultPauseTime=0]
   * @returns {QueueManager}
   */
  new(defaultPauseTime: ms = 0) {
    const args = {
      defaultPauseTime: safe.num(defaultPauseTime, true, 0) as ms
    };
    return new QueueManager(args.defaultPauseTime);
  }

  /** <!-- DOCS-ALIAS: queue.new --> */
  static new(defaultPauseTime: ms = 0) {
    const args = {
      defaultPauseTime: safe.num(defaultPauseTime, true, 0) as ms
    };
    return new QueueManager(args.defaultPauseTime);
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
