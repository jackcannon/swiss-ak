export * from './tools/types';
export * from './tools/times';
export * from './tools/waiters';
export * from './tools/timer';
export * from './tools/progressBar';
export * from './tools/errorHandling';
export * from './tools/PromiseUtils';
export * from './tools/ArrayUtils';
export * from './tools/ObjectUtils';
export * from './tools/symbols';

import * as times from './tools/times';
import * as waiters from './tools/waiters';
import * as progressBar from './tools/progressBar';
import * as ColourUtils from './tools/ColourUtils';

export { times, waiters, progressBar, ColourUtils };

// Higher order functions
import * as fn from './tools/fn';

const { filters, maps, sorts, reduces, everys } = fn;
export { fn, filters, maps, sorts, reduces, everys };
