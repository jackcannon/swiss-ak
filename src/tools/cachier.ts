import { safe } from './safe';
import { ms } from './times';

//<!-- DOCS: 610 -->

type ValidatedValue<T> = { hasValidValue: false; value?: undefined } | { hasValidValue: true; value: T };

/**<!-- DOCS: cachier.title ##! -->
 * Cachier
 *
 * A simple caching tool to store and retrieve values by id.
 *
 * Useful for storing values that are expensive to calculate, or that you want to reuse.
 */

/** */
const cachierFactory = <T extends unknown>(defaultExpiresIn: ms = Infinity): Cachier<T> => {
  let storedItems: Record<string, { expires: number; value: T }> = {};
  let defExpiresInVal: ms = defaultExpiresIn;

  const getValidatedValue = (id: string): ValidatedValue<T> => {
    const item = storedItems[id];
    if (item === undefined) return { hasValidValue: false };
    if (item.expires < Date.now()) {
      delete storedItems[id];
      return { hasValidValue: false };
    }
    return { hasValidValue: true, value: item.value };
  };

  const get = (id: string) => {
    const args = {
      id: safe.str(id, false, 'NO-ID')
    };
    const valid = getValidatedValue(args.id);
    return valid.hasValidValue ? valid.value : undefined;
  };
  const getOrSave = (id: string, orValue: T, expiresIn: ms = getDefaultExpiresIn()): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      orValue,
      expiresIn: safe.num(expiresIn, false, undefined, undefined, getDefaultExpiresIn())
    };
    try {
      // get
      const valid = getValidatedValue(args.id);
      if (valid.hasValidValue) return valid.value;

      // save
      storedItems[args.id] = {
        expires: Date.now() + args.expiresIn,
        value: args.orValue
      };
      return args.orValue;
    } catch (err) {
      return undefined as unknown as T;
    }
  };
  const getOrRun = (id: string, orFunc: (id?: string) => T, expiresIn: ms = getDefaultExpiresIn()): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      orFunc: safe.func(orFunc),
      expiresIn: safe.num(expiresIn, false, undefined, undefined, getDefaultExpiresIn())
    };
    try {
      // get
      const valid = getValidatedValue(args.id);
      if (valid.hasValidValue) return valid.value;

      // run
      const newItem = args.orFunc(args.id);
      storedItems[args.id] = {
        expires: Date.now() + args.expiresIn,
        value: newItem
      };
      return newItem;
    } catch (err) {
      return undefined as unknown as T;
    }
  };
  const save = (id: string, item: T, expiresIn: ms = getDefaultExpiresIn()): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      item,
      expiresIn: safe.num(expiresIn, false, undefined, undefined, getDefaultExpiresIn())
    };
    storedItems[args.id] = {
      expires: Date.now() + args.expiresIn,
      value: args.item
    };
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

  const getAll = (): Record<string, T> => {
    const entries = Object.keys(storedItems)
      .map((id) => [id, getValidatedValue(id)] as [string, ValidatedValue<T>])
      .filter(([_, { hasValidValue }]) => hasValidValue)
      .map(([id, { value }]) => [id, value] as [string, T]);

    return Object.fromEntries(entries);
  };

  const getDefaultExpiresIn = () => defExpiresInVal;
  const setDefaultExpiresIn = (newValue: number = Infinity) => {
    const args = {
      newValue: safe.num(newValue, false, undefined, undefined, Infinity)
    };
    defExpiresInVal = args.newValue;
    return defExpiresInVal;
  };

  const create = <U>(defaultExpiresIn: ms = Infinity): Cachier<U> => cachierFactory<U>(defaultExpiresIn);

  return {
    get,
    getOrSave,
    getOrRun,
    save,
    remove,
    clear,
    getAll,
    getDefaultExpiresIn,
    setDefaultExpiresIn,
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
   * @param {ms} [expiresIn=getDefaultExpiresIn()]
   * @returns {T}
   */
  getOrSave(id: string, orValue: T, expiresIn?: ms): T;

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
   * @param {ms} [expiresIn=getDefaultExpiresIn()]
   * @returns {T}
   */
  getOrRun(id: string, orFunc: (id?: string) => T, expiresIn?: ms): T;

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
   * @param {ms} [expiresIn=getDefaultExpiresIn()]
   * @returns {T}
   */
  save(id: string, item: T, expiresIn?: ms): T;

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
   * @returns {Record<string, T>}
   */
  getAll(): Record<string, T>;

  /**<!-- DOCS: cachier.Cachier.getDefaultExpiresIn #### -->
   * getDefaultExpiresIn
   *
   * - `cachier.getDefaultExpiresIn`
   * - `cachier.create().getDefaultExpiresIn`
   *
   * Get the default expiration time for items in the cache.
   *
   * ```typescript
   * cachier.getDefaultExpiresIn(); // Infinity
   * cachier.setDefaultExpiresIn(1000);
   * cachier.getDefaultExpiresIn(); // 1000
   * ```
   * @returns {ms}
   */
  getDefaultExpiresIn(): ms;

  /**<!-- DOCS: cachier.Cachier.setDefaultExpiresIn #### -->
   * setDefaultExpiresIn
   *
   * - `cachier.setDefaultExpiresIn`
   * - `cachier.create().setDefaultExpiresIn`
   *
   * Set the default expiration time for items in the cache.
   *
   * ```typescript
   * cachier.getDefaultExpiresIn(); // Infinity
   * cachier.setDefaultExpiresIn(1000);
   * cachier.getDefaultExpiresIn(); // 1000
   * ```
   *
   * @param {ms} [newValue=Infinity]
   * @returns {ms}
   */
  setDefaultExpiresIn(newValue?: ms): ms;

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
   * @param {ms} [defaultExpiresIn=Infinity]
   * @returns {Cachier<U>}
   */
  create<U>(defaultExpiresIn?: ms): Cachier<U>;
}
