export type Partial<T> = {
  [K in keyof T]?: T[K];
};

export type KeysOnly<T> = {
  [K in keyof T]: K;
};
