import { ObjOfType } from './types';

/**
 * TODO docs
 */
export interface Cacher<T> {
  /**
   * get
   */
  get(id: string): T;
  /**
   * getOrSave
   */
  getOrSave(id: string, orFunc: (id?: string) => T): T;
  /**
   * save
   */
  save(id: string, item: T): T;
  /**
   * getAll
   */
  getAll(): ObjOfType<T>;
  /**
   * create
   */
  create<U>(): Cacher<U>;
}

const cacherFactory = <T extends unknown>(): Cacher<T> => {
  const storedItems: ObjOfType<T> = {};

  const get = (id: string) => storedItems[id];
  const getOrSave = (id: string, orFunc: (id?: string) => T): T => {
    try {
      const existing = storedItems[id];
      if (existing !== undefined) return existing;
      const newItem = orFunc(id);
      storedItems[id] = newItem;
      return newItem;
    } catch (err) {
      return undefined as unknown as T;
    }
  };
  const save = (id: string, item: T): T => {
    storedItems[id] = item;
    return item;
  };
  const getAll = (): ObjOfType<T> => ({ ...storedItems });
  const create = <U>(): Cacher<U> => cacherFactory<U>();

  return {
    get,
    getOrSave,
    save,
    getAll,
    create
  };
};

/**
 * TODO docs
 */
export const cacher = cacherFactory<any>();
