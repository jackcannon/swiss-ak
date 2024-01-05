import { safe } from './safe';
import { ObjOfType } from './types';

//<!-- DOCS: 610 -->

/**<!-- DOCS: cachier.title ##! -->
 * Cachier
 *
 * A simple caching tool to store and retrieve values by id.
 *
 * Useful for storing values that are expensive to calculate, or that you want to reuse.
 */

/** */
const cachierFactory = <T extends unknown>(): Cachier<T> => {
  let storedItems: ObjOfType<T> = {};

  const get = (id: string) => {
    const args = {
      id: safe.str(id, false, 'NO-ID')
    };
    return storedItems[args.id];
  };
  const getOrSave = (id: string, orValue: T): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      orValue
    };
    try {
      const existing = storedItems[args.id];
      if (existing !== undefined) return existing;
      storedItems[args.id] = args.orValue;
      return args.orValue;
    } catch (err) {
      return undefined as unknown as T;
    }
  };
  const getOrRun = (id: string, orFunc: (id?: string) => T): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      orFunc: safe.func(orFunc)
    };
    try {
      const existing = storedItems[args.id];
      if (existing !== undefined) return existing;
      const newItem = args.orFunc(args.id);
      storedItems[args.id] = newItem;
      return newItem;
    } catch (err) {
      return undefined as unknown as T;
    }
  };
  const save = (id: string, item: T): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      item
    };
    storedItems[args.id] = args.item;
    return args.item;
  };

  const remove = (id: string): void => {
    const args = {
      id: safe.str(id, false, 'NO-ID')
    };
    delete storedItems[args.id];
  };

  const clear = (): void => {
    storedItems = {};
  };

  const getAll = (): ObjOfType<T> => ({ ...storedItems });
  const create = <U>(): Cachier<U> => cachierFactory<U>();

  return {
    get,
    getOrSave,
    getOrRun,
    save,
    remove,
    clear,
    getAll,
    create
  };
};

/**<!-- DOCS: cachier.cachier ### -->
 * cachier
 *
 * - `cachier`
 *
 * A generic cachier object for general purpose caching.
 *
 * Call `cachier.create<T>()` to create a new isolated cachier object with a specific type.
 *
 * ```typescript
 * // Initial save
 * cachier.save('foo', { name: 'foo' }); // { "name": "foo" }
 * cachier.get('foo'); // { "name": "foo" }
 *
 * // Overwrite
 * cachier.save('foo', { name: 'bar' }); // { "name": "bar" }
 * cachier.get('foo'); // { "name": "bar" }
 *
 * // Get if exists, otherwise save
 * cachier.getOrSave('foo', { name: 'baz' }); // { "name": "bar" }
 * cachier.get('foo'); // { "name": "bar" }
 *
 * // Get if exists, otherwise run function to create and save
 * cachier.getOrRun('foo', () => ({ name: 'qux' })); // { "name": "bar" }
 * cachier.get('foo'); // { "name": "bar" }
 *
 * // Remove
 * cachier.remove('foo');
 * cachier.get('foo'); // undefined
 *
 * // Populate
 * cachier.save('foo', { name: 'foo' }); // { "name": "foo" }
 * cachier.save('bar', { name: 'bar' }); // { "name": "bar" }
 * cachier.save('baz', { name: 'baz' }); // { "name": "baz" }
 *
 * // Get all
 * cachier.getAll(); // { "foo": { "name": "foo" }, "bar": { "name": "bar" }, "baz": { "name": "baz" } }
 *
 * // Clear
 * cachier.clear();
 * cachier.getAll(); // {}
 * ```
 */
export const cachier = cachierFactory<any>();

/**<!-- DOCS: cachier.CachierType ### 615 -->
 * Cachier<T>
 *
 * - `Cachier<T>`
 *
 * Type for a cachier object.
 */
export interface Cachier<T> {
  /**<!-- DOCS: cachier.Cachier.get #### -->
   * get
   *
   * - `cachier.get`
   * - `cachier.create().get`
   *
   * Get a cached item by id.
   *
   * ```typescript
   * cachier.save('foo', { name: 'foo' });
   * cachier.get('foo'); // { "name": "foo" }
   * ```
   * @param {string} id
   * @returns {T}
   */
  get(id: string): T;

  /**<!-- DOCS: cachier.Cachier.getOrSave #### -->
   * getOrSave
   *
   * - `cachier.getOrSave`
   * - `cachier.create().getOrSave`
   *
   * Get a cached item by id, or save a new item if it doesn't exist.
   *
   * ```typescript
   * cachier.getOrSave('foo', { name: 'lorem' }); // { "name": "lorem" }
   * cachier.get('foo'); // { "name": "lorem" }
   *
   * cachier.getOrSave('foo', { name: 'SOMETHING DIFFERENT' }); // { "name": "lorem" }
   * cachier.get('foo'); // { "name": "lorem" }
   * ```
   * @param {string} id
   * @param {T} orValue
   * @returns {T}
   */
  getOrSave(id: string, orValue: T): T;

  /**<!-- DOCS: cachier.Cachier.getOrRun #### -->
   * getOrRun
   *
   * - `cachier.getOrRun`
   * - `cachier.create().getOrRun`
   *
   * Get a cached item by id, or run a function to create a new item if it doesn't exist.
   *
   * The created item will be cached and returned.
   *
   * ```typescript
   * cachier.getOrRun('foo', () => ({ name: 'lorem' })); // { "name": "lorem" }
   * cachier.get('foo'); // { "name": "lorem" }
   *
   * cachier.getOrRun('foo', () => ({ name: 'SOMETHING DIFFERENT' })); // { "name": "lorem" }
   * cachier.get('foo'); // { "name": "lorem" }
   * ```
   * @param {string} id
   * @param {(id?: string) => T} orFunc
   * @returns {T}
   */
  getOrRun(id: string, orFunc: (id?: string) => T): T;

  /**<!-- DOCS: cachier.Cachier.save #### -->
   * save
   *
   * - `cachier.save`
   * - `cachier.create().save`
   *
   * Save an item to the cache.
   *
   * ```typescript
   * cachier.save('foo', { name: 'foo' }); // { "name": "foo" }
   * cachier.get('foo'); // { "name": "foo" }
   * ```
   * @param {string} id
   * @param {T} item
   * @returns {T}
   */
  save(id: string, item: T): T;

  /**<!-- DOCS: cachier.Cachier.remove #### -->
   * remove
   *
   * - `cachier.remove`
   * - `cachier.create().remove`
   *
   * Remove an item from the cache.
   *
   * ```typescript
   * cachier.save('foo', { name: 'foo' });
   * cachier.get('foo'); // { "name": "foo" }
   *
   * cachier.remove('foo');
   * cachier.get('foo'); // undefined
   * ```
   * @param {string} id
   * @returns {void}
   */
  remove(id: string): void;

  /**<!-- DOCS: cachier.Cachier.clear #### -->
   * clear
   *
   * - `cachier.clear`
   * - `cachier.create().clear`
   *
   * Clear all items from the cache.
   *
   * ```typescript
   * cachier.save('foo', { name: 'foo' });
   * cachier.getAll(); // { foo: { "name": "foo" } }
   *
   * cachier.clear();
   * cachier.getAll(); // {}
   * ```
   * @returns {void}
   */
  clear(): void;

  /**<!-- DOCS: cachier.Cachier.getAll #### -->
   * getAll
   *
   * - `cachier.getAll`
   * - `cachier.create().getAll`
   *
   * Get all items from the cache.
   *
   * ```typescript
   * cachier.save('foo', { name: 'foo' });
   * cachier.save('bar', { name: 'bar' });
   * cachier.save('baz', { name: 'baz' });
   *
   * cachier.getAll(); // { "foo": { "name": "foo" }, "bar": { "name": "bar" }, "baz": { "name": "baz" } }
   * ```
   * @returns {ObjOfType<T>}
   */
  getAll(): ObjOfType<T>;

  /**<!-- DOCS: cachier.Cachier.create #### -->
   * create
   *
   * - `cachier.create<T>`
   * - `cachier.create().create<T>`
   *
   * Create a new isolated cachier object with a specific type.
   *
   * ```typescript
   * const numCache = cachier.create<number>();
   *
   * numCache.save('bar', 123);
   * cachier.save('foo', { name: 'foo' });
   *
   * numCache.getAll(); // { "bar": 123 }
   * cachier.getAll(); // { "foo": { "name": "foo" } }
   * ```
   *
   * @returns {Cachier<U>}
   */
  create<U>(): Cachier<U>;
}
