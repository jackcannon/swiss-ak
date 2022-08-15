# swiss-ak (Swiss Army Knife)

A collection of useful little things that I like to reuse across projects

[Back to top](#swiss-ak-swiss-army-knife)

- [swiss-ak (Swiss Army Knife)](#swiss-ak-swiss-army-knife)
- [times](#times)
  - [Usage (times)](#usage-times)
- [waiters](#waiters)
  - [Usage (waiters)](#usage-waiters)
    - [wait](#wait)
    - [waitFor](#waitfor)
    - [waitUntil](#waituntil)
    - [waitEvery](#waitevery)
    - [interval / stopInterval](#interval--stopinterval)
- [fn (Higher Order Functions)](#fn-higher-order-functions)
    - [fn.noop](#fnnoop)
    - [fn.noact](#fnnoact)
    - [fn.result](#fnresult)
  - [Filters](#filters)
    - [fn.filters.exists / fn.exists](#fnfiltersexists--fnexists)
    - [fn.filters.isTruthy / fn.isTruthy](#fnfiltersistruthy--fnistruthy)
    - [fn.filters.isFalsy / fn.isFalsy](#fnfiltersisfalsy--fnisfalsy)
    - [fn.filters.isEmpty / fn.isEmpty](#fnfiltersisempty--fnisempty)
    - [fn.filters.isNotEmpty / fn.isNotEmpty](#fnfiltersisnotempty--fnisnotempty)
    - [fn.filters.isEqual / fn.isEqual](#fnfiltersisequal--fnisequal)
    - [fn.filters.isNotEqual / fn.isNotEqual](#fnfiltersisnotequal--fnisnotequal)
  - [Maps](#maps)
    - [fn.maps.toString / fn.toString](#fnmapstostring--fntostring)
    - [fn.maps.toNumber / fn.toNumber](#fnmapstonumber--fntonumber)
    - [fn.maps.toBool / fn.toBool](#fnmapstobool--fntobool)
    - [fn.maps.toProp / fn.toProp](#fnmapstoprop--fntoprop)
  - [Sorts](#sorts)
    - [fn.sorts.asc / fn.asc](#fnsortsasc--fnasc)
    - [fn.sorts.desc / fn.desc](#fnsortsdesc--fndesc)
    - [fn.sorts.byProp / fn.byProp](#fnsortsbyprop--fnbyprop)
  - [Reduces](#reduces)
    - [fn.reduces.combine / fn.combine](#fnreducescombine--fncombine)
    - [fn.reduces.combineProp / fn.combineProp](#fnreducescombineprop--fncombineprop)
  - [Everys](#everys)
    - [fn.everys.isAllEqual / fn.isAllEqual](#fneverysisallequal--fnisallequal)
- [getTimer](#gettimer)
  - [Usage (getTimer)](#usage-gettimer)
  - [timer](#timer)
- [ArrayUtils](#arrayutils)
  - [range](#range)
  - [zip](#zip)
  - [sortByMapped](#sortbymapped)
  - [randomise](#randomise)
  - [reverse](#reverse)
  - [entries](#entries)
  - [repeat](#repeat)
- [PromiseUtils](#promiseutils)
  - [DeferredPromise](#deferredpromise)
  - [PromiseUtils.all](#promiseutilsall)
  - [PromiseUtils.allLimit](#promiseutilsalllimit)
  - [PromiseUtils.each](#promiseutilseach)
  - [PromiseUtils.eachLimit](#promiseutilseachlimit)
  - [PromiseUtils.map](#promiseutilsmap)
  - [PromiseUtils.mapLimit](#promiseutilsmaplimit)
  - [PromiseUtils.allObj](#promiseutilsallobj)
  - [PromiseUtils.allLimitObj](#promiseutilsalllimitobj)
- [progressBar](#progressbar)
  - [Options](#options)
  - [Usage (progressBar)](#usage-progressbar)
  - [printLn](#println)
- [Types](#types)
  - [Partial<T>](#partialt)
  - [KeysOnly<T>](#keysonlyt)
  - [Numbered<T>](#numberedt)
- [Notes](#notes)

# times

A collection of utils for calculating simple times.
Each unit (e.g. second) has: a type (`second`), a constant (`SECOND`) and a function for getting multiples (`seconds(x: second) => ms`)

| unit        | type         | constant      | function                           |
| ----------- | ------------ | ------------- | ---------------------------------- |
| millisecond | `ms`         | `MILLISECOND` | `milliseconds(x: ms) => ms`        |
| second      | `second`     | `SECOND`      | `seconds(x: second) => ms`         |
| minute      | `minute`     | `MINUTE`      | `minutes(x: minute) => ms`         |
| hour        | `hour`       | `HOUR`        | `hours(x: hour) => ms`             |
| day         | `day`        | `DAY`         | `days(x: day) => ms`               |
| week        | `week`       | `WEEK`        | `weeks(x: week) => ms`             |
| month       | `month`      | `MONTH`       | `months(x: month) => ms`           |
| year        | `year`       | `YEAR`        | `years(x: year) => ms`             |
| decade      | `decade`     | `DECADE`      | `decades(x: decade) => ms`         |
| century     | `century`    | `CENTURY`     | `centuries(x: century) => ms`      |
| millennium  | `millennium` | `MILLENNIUM`  | `millenniums(x: millennium) => ms` |

## Usage (times)

Examples

```typescript
import { MINUTE, hours, minutes } from 'swiss-ak';

const start = Date.now();
// wait for 2 hours and 12 minutes (132 minutes)
setTimeout(() => {
  const duration = Date.now() - start;
  console.log(`It's been ${duration / MINUTE} mins`); // Result: It's been 132 minutes
}, hours(2) + minutes(12));
```

[Back to top](#swiss-ak-swiss-army-knife)

# waiters

Async functions that return promises at or after a given time.

'Accurate/pinged' waiters ping at intermediary points to resolve at a more accurate time.

| Name      | Description                                          | Example                                         |
| --------- | ---------------------------------------------------- | ----------------------------------------------- |
| wait      | Standard wait promise (using setTimeout)             | `minutes(2)` = in 2 minutes                     |
| waitFor   | Accurate (pinged) wait the given ms                  | `minutes(2)` = in 2 minutes                     |
| waitUntil | Accurate (pinged) wait until given time              | `Date.now() + minutes(2)` = in 2 minutes        |
| waitEvery | Accurate (pinged) wait for next 'every X' event      | `hours(1)` = next full hour (e.g. 17:00, 22:00) |
| interval  | Accurate (pinged) interval for every 'every X' event | `hours(1)` = every hour, on the hour            |

## Usage (waiters)

### wait

```typescript
import { wait } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await wait(minutes(2));
console.log(new Date().toTimeString()); // 12:32:10
```

### waitFor

```typescript
import { waitFor } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitFor(minutes(5));
console.log(new Date().toTimeString()); // 12:35:10
```

### waitUntil

```typescript
import { waitUntil } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitUntil(Date.now() + minutes(10));
console.log(new Date().toTimeString()); // 12:40:10
```

### waitEvery

```typescript
import { waitEvery } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitEvery(hours(2));
console.log(new Date().toTimeString()); // 14:00:00
```

### interval / stopInterval

```typescript
import { interval, stopInterval } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
interval((intID, count) => {
  console.log(new Date().toTimeString()); // 13:00:00, 14:00:00, 15:00:00
  if (count === 3) {
    stopInterval(intID);
  }
}, hours(1));
```

[Back to top](#swiss-ak-swiss-army-knife)

# fn (Higher Order Functions)

### fn.noop

No operation. Do nothing, return nothing.

```typescript
const run = condition ? doSomething : fn.noop;
run();
```

### fn.noact

No action. Returns the first argument it receives.

```typescript
const items = stuff.map(condition ? mapSomething : fn.noact);
```

### fn.result

Returns a function that returns a function that returns the first argument.

```typescript
const items = stuff.filter(condition ? mapSomething : fn.result(true));
```

## Filters

### fn.filters.exists / fn.exists

Returns true if item isn't null or undefined.

```typescript
[null, 1, undefined, 2].filter(fn.exists); // [1, 2]
```

### fn.filters.isTruthy / fn.isTruthy

Returns true if item is truthy.

```typescript
[0, 1, 2].filter(fn.isTruthy); // [1, 2]
['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
```

### fn.filters.isFalsy / fn.isFalsy

Returns true if item is falsy.

```typescript
[0, 1, 2].filter(fn.isFalsy); // [0]
['', 'a', 'b'].filter(fn.isFalsy); // ['']
```

### fn.filters.isEmpty / fn.isEmpty

Returns true if item's length is 0

```typescript
['', 'a', 'b'].filter(fn.isEmpty); // ['']
[[], [1], [2]].filter(fn.isEmpty); // [[]]
```

### fn.filters.isNotEmpty / fn.isNotEmpty

Returns true if item's length is 1 or more

```typescript
['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
[[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
```

### fn.filters.isEqual / fn.isEqual

Returns a function that returns true if the item is equal to provided value.

```typescript
[0, 1, 2].filter(fn.isEqual(1)); // [1]
```

### fn.filters.isNotEqual / fn.isNotEqual

Returns a function that returns true if the item is not equal to provided value.

```typescript
[0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
```

[Back to top](#swiss-ak-swiss-army-knife)

## Maps

### fn.maps.toString / fn.toString

Maps the item to a string.

```typescript
[0, 1, 2].map(fn.toString); // ['0', '1', '2']
```

### fn.maps.toNumber / fn.toNumber

Maps the item to a number.

```typescript
['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
```

### fn.maps.toBool / fn.toBool

Maps the item to a boolean.

```typescript
[0, 1, 2].map(fn.toBool); // [false, true, true]
['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
```

### fn.maps.toProp / fn.toProp

Maps the item to a given property of the item

```typescript
[{ name: 'Jack' }, { name: 'Jill' }].map(fn.toProp('name')); // ['Jack', 'Jill']
```

[Back to top](#swiss-ak-swiss-army-knife)

## Sorts

### fn.sorts.asc / fn.asc

Sort ascending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
```

### fn.sorts.desc / fn.desc

Sort descending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
```

### fn.sorts.byProp / fn.byProp

Sort by a given property.

```typescript
const people = [{ age: 2 }, { age: 4 }, { age: 3 }, { age: 1 }];
people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
```

[Back to top](#swiss-ak-swiss-army-knife)

## Reduces

### fn.reduces.combine / fn.combine

Adds or concats the items

```typescript
[1, 2, 3].reduce(fn.combine); // 6
['a', 'b', 'c'].reduce(fn.combine); // 'abc'
```

### fn.reduces.combineProp / fn.combineProp

Adds or concats the given property of the items

```typescript
const people = [
  { name: 'a', age: 1 },
  { name: 'b', age: 2 },
  { name: 'c', age: 3 }
];
people.reduce(fn.combineProp('age')); // 6
people.reduce(fn.combineProp('name')); // 'abc'
```

[Back to top](#swiss-ak-swiss-army-knife)

## Everys

### fn.everys.isAllEqual / fn.isAllEqual

Returns if all the items are equal to one another.

```typescript
[1, 1, 1].every(fn.isAllEqual); // true
[1, 2, 1].every(fn.isAllEqual); // false
```

[Back to top](#swiss-ak-swiss-army-knife)

# getTimer

A handy little tool for tracking how long things are taking

## Usage (getTimer)

```typescript
const timer = getTimer('Example', false, chalk.red, chalk, {
  TOTAL: 'TOTAL',
  INTRO: 'Action 1',
  ENDING: 'Action 2'
});
timer.start(timer.TOTAL, timer.INTRO);

await wait(seconds(4)); // do something async

timer.switch(timer.INTRO, timer.ENDING); // same as calling end(timer.INTRO) and start(timer.ENDING)

await wait(seconds(6)); // do something async

timer.end(timer.TOTAL, timer.ENDING);
timer.log();
```

Output:

```
Example Times:
	TOTAL: 10s
	Action 1: 4s
	Action 2: 6s
```

## timer

There is also a global instance for smaller projects/scripts

```typescript
import { timer } from 'swiss-ak';

timer.start(timer.TOTAL);
```

[Back to top](#swiss-ak-swiss-army-knife)

# ArrayUtils

## range

Returns an array of the given length, where each value is equal to it's index
e.g. [0, 1, 2, ..., length]

```typescript
range(3); // [0, 1, 2]
range(5); // [0, 1, 2, 3, 4]
range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## zip

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Limited to the length of the shortest provided array

Inspired by python's 'zip'

> Note: The typing of this is messy - needs improvement

```typescript
zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
```

## sortByMapped

Sort an array by a mapped form of the values, but returning the initial values

```typescript
sortByMapped(['2p', '3p', '1p'], (v) => Number(v.replace('p', ''))); // ['1p', '2p', '3p']
sortByMapped(
  ['2p', '3p', '1p'],
  (v) => Number(v.replace('p', '')),
  (a, b) => b - a
); // ['3p', '2p', '1p']
```

## randomise

Returns a clone of the provided array with it's items in a random order

```typescript
randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
```

## reverse

Returns a new array with the order reversed without affecting original array

```typescript
const arr1 = [1, 2, 3];
arr1; // [1, 2, 3]
arr1.reverse(); // [3, 2, 1]
arr1; // [3, 2, 1]

const arr2 = [1, 2, 3];
arr2; // [1, 2, 3]
reverse(arr2); // [3, 2, 1]
arr2; // [1, 2, 3]
```

## entries

Returns array of 'tuples' of index/value pairs

```typescript
const arr = ['a', 'b', 'c'];
entries(arr); // [ [0, 'a'], [1, 'b'], [2, 'c'] ]

for (let [index, value] of entries(arr)) {
  console.log(index); // 0, 1, 2
  console.log(value); // 'a', 'b', 'c'
}
```

## repeat

Returns an array with the given items repeated

```typescript
repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
```

[Back to top](#swiss-ak-swiss-army-knife)

# PromiseUtils

## DeferredPromise

A good old-fashioned (not recommended) deferred promise.

```typescript
import { getDeferred } from 'swiss-ak';

const run = () => {
  const deferred = getDeferred<number>();

  doSomethingWithACallback('a', 'b', (err: Error, result: number) => {
    // callback (just an example - don't actually do this this way)
    if (err) return deferred.reject(err);
    deferred.resolve(result);
  });

  return deferred.promise;
};

const luckyNumber: number = await run();
```

## PromiseUtils.all

An alias for Promise.all

## PromiseUtils.allLimit

Like Promise.all, but limits the numbers of concurrently running items.

Takes an array of functions (that return Promises), rather than an array of Promises

```typescript
import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allLimit', 'a', 'b', 'c', 'd');

const results = PromiseUtils.allLimit<number>(2, [
  give(seconds(5), 1, 'a'),
  give(seconds(5), 2, 'b'),
  give(seconds(5), 3, 'c'),
  give(seconds(5), 4, 'd')
]);

timer.end('allLimit');

console.log(results); // [ 1, 2, 3, 4 ]

timer.log();
// Times:
// 	allLimit: 10s
// 	a: 5s
// 	b: 5s
// 	c: 10s
// 	d: 10s
```

## PromiseUtils.each

Run an async function against each item in an array

```typescript
import { PromiseUtils, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

await PromiseUtils.each<number>(arr, async (val: number) => {
  await wait(seconds(2));
  sendToSomewhere(val);
});
console.log(''); // after 2 seconds
```

## PromiseUtils.eachLimit

Run an async function against each item in an array, limiting the number of items that can run concurrently.

See PromiseUtils.allLimit for information about limited functions.

```typescript
import { PromiseUtils, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

await PromiseUtils.eachLimit<number>(2, arr, async (val: number) => {
  await wait(seconds(2));
  sendToSomewhere(val);
});
console.log(''); // after 4 seconds
```

## PromiseUtils.map

Run an async map function against each item in an array, mapping the results to a returned array

```typescript
import { PromiseUtils, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

const mapped = await PromiseUtils.map<number>(arr, async (val: number) => {
  await wait(seconds(2));
  return val * 2;
});

console.log(mapped); // [2, 4, 6, 8] (after 2 seconds)
```

## PromiseUtils.mapLimit

Run an async map function against each item in an array, mapping the results to a returned array, and limiting the number of items that can run concurrently.

See PromiseUtils.allLimit for information about limited functions.

```typescript
import { PromiseUtils, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

const mapped = await PromiseUtils.mapLimit<number>(2, arr, async (val: number) => {
  await wait(seconds(2));
  return val * 2;
});

console.log(mapped); // [2, 4, 6, 8] (after 4 seconds)
```

## PromiseUtils.allObj

Like Promise.all, but takes/gives an object instead of an array

```typescript
import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allObj', 'a', 'b', 'c');

const results = PromiseUtils.allObj<number>({
  a: give(seconds(10), 1, 'a'),
  b: give(seconds(15), 2, 'b'),
  c: give(seconds(20), 3, 'c')
});

timer.end('allObj');

console.log(results); // { a: 1, b: 2, c: 3 }

timer.log();
// Times:
// 	allObj: 20s
// 	a: 10s
// 	b: 15s
// 	c: 20s
```

## PromiseUtils.allLimitObj

A mix of allObj and allLimit.

Takes an array of functions (that return Promises), and limits the numbers of concurrently running items.

```typescript
import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allLimitObj', 'a', 'b', 'c', 'd');

const results = PromiseUtils.allLimitObj<number>(2, {
  a: give(seconds(5), 1, 'a'),
  b: give(seconds(5), 2, 'b'),
  c: give(seconds(5), 3, 'c'),
  d: give(seconds(5), 4, 'd')
});

timer.end('allLimitObj');

console.log(results); // { a: 1, b: 2, c: 3, d: 4 }

timer.log();
// Times:
// 	allLimitObj: 10s
// 	a: 5s
// 	b: 5s
// 	c: 10s
// 	d: 10s
```

[Back to top](#swiss-ak-swiss-army-knife)

# progressBar

A util for creating a 'visual' progress bar for better representing progress of multiple operations.

## Options

All options are optional.

| Property    | Default                           | Description                                            |
| ----------- | --------------------------------- | ------------------------------------------------------ |
| prefix      | `''`                              | String to show to left of progress bar                 |
| prefixWidth | `1`                               | Min width of prefix - `10` => `Example˽˽˽`             |
| maxWidth    | `process.stdout.columns` or `100` | The maximum width the entire string may extend         |
| chalk       | nothing                           | the `chalk` module, if available                       |
| wrapperFn   | nothing                           | function to wrap the printed string (eg `chalk.cyan)`  |
| showPercent | `false`                           | Show percentage completed - `( 69%)`                   |
| showCount   | `true`                            | Show numerical values of the count - `[11 / 15]`       |
| countWidth  | `0`                               | Min width of nums for showCount - `3` => `[˽˽1 / ˽15]` |
| progChar    | `'█'`                             | Character to use for progress section of bar           |
| emptyChar   | `' '`                             | Character to use for empty (rail) section of bar       |
| startChar   | `'▕'`                             | Character to start the progress bar with               |
| endChar     | `'▏'`                             | Character to end the progress bar with                 |

## Usage (progressBar)

```typescript
import chalk from 'chalk';
import { getProgressBar } from 'swiss-ak';

console.log('-'.repeat(20) + ' < 20 Chars');

const progress = getProgressBar(5, {
  prefix: 'ABC',
  maxWidth: 20,
  chalk,
  wrapperFn: chalk.green
});
for (let i = 1; i <= 5; i++) {
  progress.set(i);
}
progress.finish();
```

Output:

```
-------------------- < 20 Chars
ABC ▕      ▏ [0 / 5]
ABC ▕█     ▏ [1 / 5]
ABC ▕██    ▏ [2 / 5]
ABC ▕████  ▏ [3 / 5]
ABC ▕█████ ▏ [4 / 5]
ABC ▕██████▏ [5 / 5]
```

## printLn

Can use instead of console.log

Overwrites the previous line if possible (i.e. node);

```javascript
import { printLn } from 'swiss-ak';

printLn('A');
printLn('B'); // Replaces the 'A' line
printLn('C'); // Replaces the 'B' line
printLn(); // Jumps a line
printLn('D'); // Replaces the empty line
```

Output

```
C
D
```

[Back to top](#swiss-ak-swiss-army-knife)

# Types

## Partial<T>

Makes all properties in T optional.

```typescript
interface ITest {
  a: string;
  b: boolean;
}
type PartialTest = Partial<ITest>; // { a?: string, b?: boolean }
```

## KeysOnly<T>

Makes all the values equal to the keys of T

```typescript
interface ITest {
  a: string;
  b: boolean;
}
type KeysOnlyTest = KeysOnly<ITest>; // { a: 'a', b: 'b' }
```

## Numbered<T>

Makes all the values numbers

```typescript
interface ITest {
  a: string;
  b: boolean;
}
type NumberedTest = Numbered<ITest>; // { a: number, b: number }
```

[Back to top](#swiss-ak-swiss-army-knife)

# Notes

> These are used in non-vital personal projects and scripts.

> Need to be better tested before being used in prod.

> Failing/erroring/rejected promises may not behave as expected.

[Back to top](#swiss-ak-swiss-army-knife)
