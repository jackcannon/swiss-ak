export * from './tools/types';
export * from './tools/times';
export * from './tools/waiters';
export * from './tools/timer';
export * from './tools/progressBar';
export * from './tools/errorHandling';
export * from './tools/PromiseTools';
export * from './tools/ArrayTools';
export * from './tools/ObjectTools';
export * from './tools/TimeTools';
export * from './tools/symbols';
export * from './tools/queue';

import * as times from './tools/times';
import * as waiters from './tools/waiters';
import * as progressBar from './tools/progressBar';
import * as ColourTools from './tools/ColourTools';
export * as StringTools from './tools/StringTools';

export { clx, ClxType } from './tools/StringTools';

import * as MathsTools from './tools/MathsTools';
export { MathsTools };
// an alias
export const MathTools = MathsTools;

export { times, waiters, progressBar, ColourTools };

// Higher order functions
import * as fn from './tools/fn';

const { filters, maps, sorts, reduces, everys } = fn;
export { fn, filters, maps, sorts, reduces, everys };
