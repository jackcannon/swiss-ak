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
const cachierFactory = <T>(defaultExpiresIn: ms = Infinity): Cachier<T> => {
  let storedItems: Record<string, { expires: ms; value: T }> = {};
  let defExpiresInVal: ms = defaultExpiresIn;

  const getValidatedValue = (id: string, ignoreExpiry: boolean): ValidatedValue<T> => {
    const item = storedItems[id];
    if (item === undefined) return { hasValidValue: false };
    if (ignoreExpiry) return { hasValidValue: true, value: item.value }; // ignore expiry if requested
    if (item.expires < Date.now()) {
      delete storedItems[id];
      return { hasValidValue: false };
    }
    return { hasValidValue: true, value: item.value };
  };

  const get: Cachier<T>['get'] = (id: string, ignoreExpiry: boolean = false) => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      ignoreExpiry: safe.bool(ignoreExpiry, false)
    };
    const valid = getValidatedValue(args.id, args.ignoreExpiry);
    return valid.hasValidValue ? valid.value : undefined;
  };
  const getOrSave: Cachier<T>['getOrSave'] = (id: string, orValue: T, expiresIn: ms = getDefaultExpiresIn(), ignoreExpiry: boolean = false): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      orValue,
      expiresIn: safe.num(expiresIn, true, undefined, undefined, getDefaultExpiresIn()),
      ignoreExpiry: safe.bool(ignoreExpiry, false)
    };
    try {
      // get
      const valid = getValidatedValue(args.id, args.ignoreExpiry);
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
  const getOrRun: Cachier<T>['getOrRun'] = (
    id: string,
    orFunc: (id?: string) => T,
    expiresIn: ms = getDefaultExpiresIn(),
    ignoreExpiry: boolean = false
  ): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      orFunc: safe.func(orFunc),
      expiresIn: safe.num(expiresIn, true, undefined, undefined, getDefaultExpiresIn()),
      ignoreExpiry: safe.bool(ignoreExpiry, false)
    };
    try {
      // get
      const valid = getValidatedValue(args.id, args.ignoreExpiry);
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
  const getOrRunAsync: Cachier<T>['getOrRunAsync'] = async (
    id: string,
    orFunc: (id?: string) => T | Promise<T>,
    expiresIn: ms = getDefaultExpiresIn(),
    ignoreExpiry: boolean = false
  ): Promise<T> => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      orFunc: safe.func(orFunc),
      expiresIn: safe.num(expiresIn, true, undefined, undefined, getDefaultExpiresIn()),
      ignoreExpiry: safe.bool(ignoreExpiry, false)
    };
    try {
      // get
      const valid = getValidatedValue(args.id, args.ignoreExpiry);
      if (valid.hasValidValue) return valid.value;

      // run
      const newItem = await args.orFunc(args.id);
      storedItems[args.id] = {
        expires: Date.now() + args.expiresIn,
        value: newItem
      };
      return newItem;
    } catch (err) {
      return undefined as unknown as T;
    }
  };
  const save: Cachier<T>['save'] = (id: string, item: T, expiresIn: ms = getDefaultExpiresIn()): T => {
    const args = {
      id: safe.str(id, false, 'NO-ID'),
      item,
      expiresIn: safe.num(expiresIn, true, undefined, undefined, getDefaultExpiresIn())
    };
    storedItems[args.id] = {
      expires: Date.now() + args.expiresIn,
      value: args.item
    };
    return args.item;
  };

  const remove: Cachier<T>['remove'] = (id: string): void => {
    const args = {
      id: safe.str(id, false, 'NO-ID-REMOVE')
    };
    delete storedItems[args.id];
  };

  const clear: Cachier<T>['clear'] = (): void => {
    storedItems = {};
  };

  const getAll: Cachier<T>['getAll'] = (ignoreExpiry: boolean = false): Record<string, T> => {
    const args = {
      ignoreExpiry: safe.bool(ignoreExpiry, false)
    };
    const entries = Object.keys(storedItems)
      .map((id) => [id, getValidatedValue(id, args.ignoreExpiry)] as [string, ValidatedValue<T>])
      .filter(([_, { hasValidValue }]) => hasValidValue)
      .map(([id, { value }]) => [id, value] as [string, T]);

    return Object.fromEntries(entries);
  };

  const getDefaultExpiresIn: Cachier<T>['getDefaultExpiresIn'] = () => defExpiresInVal;
  const setDefaultExpiresIn: Cachier<T>['setDefaultExpiresIn'] = (newValue: ms = Infinity) => {
    const args = {
      newValue: safe.num(newValue, true, undefined, undefined, Infinity)
    };
    defExpiresInVal = args.newValue;
    return defExpiresInVal;
  };

  const create: Cachier<T>['create'] = <U>(defaultExpiresIn: ms = Infinity): Cachier<U> => {
    const args = {
      defaultExpiresIn: safe.num(defaultExpiresIn, true, undefined, undefined, Infinity)
    };
    return cachierFactory<U>(args.defaultExpiresIn);
  };

  return {
    get,
    getOrSave,
    getOrRun,
    getOrRunAsync,
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
 * // Save with expiry (expires in 5 seconds)
 * cachier.save('tmp1', { name: 'tmp1' }, seconds(5)); // { "name": "tmp1" }
 * cachier.get('tmp1'); // { "name": "tmp1" }
 * // After 5 seconds: cachier.get('tmp1'); // undefined
 *
 * // Overwrite
 * cachier.save('foo', { name: 'bar' }); // { "name": "bar" }
 * cachier.get('foo'); // { "name": "bar" }
 *
 * // Get if exists, otherwise save
 * cachier.getOrSave('foo', { name: 'baz' }); // { "name": "bar" }
 * cachier.get('foo'); // { "name": "bar" }
 *
 * // Get if exists, otherwise save with expiry
 * cachier.getOrSave('tmp2', { name: 'tmp2' }, seconds(3)); // { "name": "tmp2" }
 * cachier.get('tmp2'); // { "name": "tmp2" }
 * // After 3 seconds: cachier.get('tmp2'); // undefined
 *
 * // Get if exists, otherwise run function to create and save
 * cachier.getOrRun('foo', () => ({ name: 'qux' })); // { "name": "bar" }
 * cachier.get('foo'); // { "name": "bar" }
 *
 * // Get if exists, otherwise run function with expiry
 * cachier.getOrRun('tmp3', () => ({ name: 'tmp3' }), seconds(2)); // { "name": "tmp3" }
 * cachier.get('tmp3'); // { "name": "tmp3" }
 * // After 2 seconds: cachier.get('tmp3'); // undefined
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
   * @param {string} id - ID of the item to get
   * @param {boolean} [ignoreExpiry=false] - If true, the item will be returned even if it has expired.
   * @returns {T}
   */
  get(id: string, ignoreExpiry?: boolean): T;

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
   *
   * // With expiry (expires in 10 seconds)
   * cachier.getOrSave('bar', { name: 'bar' }, seconds(10)); // { "name": "bar" }
   * cachier.get('bar'); // { "name": "bar" }
   * // After 10 seconds: cachier.get('bar'); // undefined
   * ```
   * @param {string} id - ID of the item to get or save
   * @param {T} orValue - Value to save if the item doesn't exist
   * @param {ms} [expiresIn=getDefaultExpiresIn()] - Expiration time in milliseconds for the item (if saving orValue)
   * @param {boolean} [ignoreExpiry=false] - If true, the item will be returned even if it has expired.
   * @returns {T}
   */
  getOrSave(id: string, orValue: T, expiresIn?: ms, ignoreExpiry?: boolean): T;

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
   *
   * // With expiry (expires in 15 seconds)
   * cachier.getOrRun('baz', () => ({ name: 'baz' }), seconds(15)); // { "name": "baz" }
   * cachier.get('baz'); // { "name": "baz" }
   * // After 15 seconds: cachier.get('baz'); // undefined
   * ```
   * @param {string} id - ID of the item to get or run
   * @param {(id?: string) => T} orFunc - Function to run if the item doesn't exist. What it returns will be saved.
   * @param {ms} [expiresIn=getDefaultExpiresIn()] - Expiration time in milliseconds for the item (if running orFunc)
   * @param {boolean} [ignoreExpiry=false] - If true, the item will be returned even if it has expired.
   * @returns {T}
   */
  getOrRun(id: string, orFunc: (id?: string) => T, expiresIn?: ms, ignoreExpiry?: boolean): T;

  /**<!-- DOCS: cachier.Cachier.getOrRunAsync #### -->
   * getOrRunAsync
   *
   * - `cachier.getOrRunAsync`
   * - `cachier.create().getOrRunAsync`
   *
   * Get a cached item by id, or run an async function to create a new item if it doesn't exist.
   *
   * The created item will be cached and returned.
   *
   * Same as `cachier.getOrRun`, but the function can be async. Return will always be a promise.
   *
   * ```typescript
   * const longFn = async (name) => {
   *   await wait(1000);
   *   return { name };
   * };
   *
   * await cachier.getOrRunAsync('foo', () => longFn('lorem')); // { name: 'lorem' }
   * cachier.get('foo'); // { name: 'lorem' }
   *
   * await cachier.getOrRunAsync('foo', () => longFn('SOMETHING DIFFERENT')); // { name: 'lorem' }
   * cachier.get('foo'); // { name: 'lorem' }
   *
   * // With expiry (expires in 20 seconds)
   * await cachier.getOrRunAsync('qux', () => longFn('qux'), seconds(20)); // { name: 'qux' }
   * cachier.get('qux'); // { name: 'qux' }
   * // After 20 seconds: cachier.get('qux'); // undefined
   * ```
   * @param {string} id - ID of the item to get or run
   * @param {(id?: string) => T | Promise<T>} orFunc - Function to run if the item doesn't exist. What it returns will be saved.
   * @param {ms} [expiresIn=getDefaultExpiresIn()] - Expiration time in milliseconds for the item (if running orFunc)
   * @param {boolean} [ignoreExpiry=false] - If true, the item will be returned even if it has expired.
   * @returns {Promise<T>}
   */
  getOrRunAsync(id: string, orFunc: (id?: string) => T | Promise<T>, expiresIn?: ms, ignoreExpiry?: boolean): Promise<T>;

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
   *
   * // With expiry (expires in 30 seconds)
   * cachier.save('quux', { name: 'quux' }, seconds(30)); // { "name": "quux" }
   * cachier.get('quux'); // { "name": "quux" }
   * // After 30 seconds: cachier.get('quux'); // undefined
   * ```
   * @param {string} id - ID of the item to save
   * @param {T} item - Item to save
   * @param {ms} [expiresIn=getDefaultExpiresIn()] - Expiration time in milliseconds for the item
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
   * @param {string} id - ID of the item to remove
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
   * @param {boolean} [ignoreExpiry=false] - If true, the item will be returned even if it has expired.
   * @returns {Record<string, T>}
   */
  getAll(ignoreExpiry?: boolean): Record<string, T>;

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
   * @param {ms} [newValue=Infinity] - New default expiration time in milliseconds
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
   *
   * // Create cache with default expiry (all items expire in 60 seconds)
   * const tempCache = cachier.create<string>(seconds(60));
   * tempCache.save('foo', 'foo'); // expires in 60 seconds
   * tempCache.save('bar', 'bar', seconds(5)); // overrides default, expires in 5 seconds
   * ```
   *
   * @param {ms} [defaultExpiresIn=Infinity] - Default expiration time in milliseconds for the new cache
   * @returns {Cachier<U>}
   */
  create<U>(defaultExpiresIn?: ms): Cachier<U>;
}
