export * from './tools/types';
export * from './tools/times';
export * from './tools/waiters';
export * from './tools/timer';
export * from './tools/progressBar';
export * from './tools/PromiseUtils';
export * from './tools/ArrayUtils';
// export * from './tools/higherOrder';

import * as times from './tools/times';
import * as waiters from './tools/waiters';
import * as progressBar from './tools/progressBar';
import * as ArrayUtils from './tools/ArrayUtils';

export { times, waiters, progressBar, ArrayUtils };

// Higher order functions
import * as fn from './tools/higherOrder';

const { filters, maps, sorts, reduces, everys } = fn;
export { fn, filters, maps, sorts, reduces, everys };
