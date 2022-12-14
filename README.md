# swiss-ak (Swiss Army Knife)

A collection of useful little things that I like to reuse across projects

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
    - [fn.resolve](#fnresolve)
    - [fn.reject](#fnreject)
    - [fn.fixFloat](#fnfixfloat)
    - [fn.addAll](#fnaddall)
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
    - [fn.sorts.nearestTo / fn.nearestTo](#fnsortsnearestto--fnnearestto)
    - [fn.sorts.furthestFrom / fn.furthestFrom](#fnsortsfurthestfrom--fnfurthestfrom)
    - [fn.sorts.arrayAsc / fn.arrayAsc](#fnsortsarrayasc--fnarrayasc)
    - [fn.sorts.arrayDesc/ fn.arrayDesc](#fnsortsarraydesc-fnarraydesc)
  - [Reduces](#reduces)
    - [fn.reduces.combine / fn.combine](#fnreducescombine--fncombine)
    - [fn.reduces.combineProp / fn.combineProp](#fnreducescombineprop--fncombineprop)
  - [Everys](#everys)
    - [fn.everys.isAllEqual / fn.isAllEqual](#fneverysisallequal--fnisallequal)
  - [Round](#round)
    - [fn.round.floorTo / fn.floorTo](#fnroundfloorto--fnfloorto)
    - [fn.round.to / fn.round.roundTo / fn.roundTo](#fnroundto--fnroundroundto--fnroundto)
    - [fn.round.ceilTo / fn.ceilTo](#fnroundceilto--fnceilto)
- [Error handling](#error-handling)
    - [tryOr](#tryor)
    - [retry](#retry)
    - [retryOr](#retryor)
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
  - [roll](#roll)
  - [sortNumberedText](#sortnumberedtext)
- [ObjectUtils](#objectutils)
  - [ObjectUtils.map](#objectutilsmap)
  - [ObjectUtils.mapValues](#objectutilsmapvalues)
  - [ObjectUtils.mapKeys](#objectutilsmapkeys)
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
- [ColourUtils](#colourutils)
  - [ColourUtils.namedColours](#colourutilsnamedcolours)
  - [ColourUtils.parse](#colourutilsparse)
  - [ColourUtils.toHex](#colourutilstohex)
  - [ColourUtils.getLuminance](#colourutilsgetluminance)
  - [ColourUtils.invertColour](#colourutilsinvertcolour)
  - [ColourUtils.getContrastedColour](#colourutilsgetcontrastedcolour)
- [progressBar](#progressbar)
  - [Options](#options)
  - [Usage (progressBar)](#usage-progressbar)
  - [printLn](#println)
- [symbols](#symbols)
- [Types](#types)
  - [Partial<T>](#partialt)
  - [KeysOnly<T>](#keysonlyt)
  - [Numbered<T>](#numberedt)
  - [OfType<T, U>](#oftypet-u)
  - [ObjOfType<T>](#objoftypet)
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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Usage (waiters)

### wait

```typescript
import { wait } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await wait(minutes(2));
console.log(new Date().toTimeString()); // 12:32:10
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### waitFor

```typescript
import { waitFor } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitFor(minutes(5));
console.log(new Date().toTimeString()); // 12:35:10
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### waitUntil

```typescript
import { waitUntil } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitUntil(Date.now() + minutes(10));
console.log(new Date().toTimeString()); // 12:40:10
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### waitEvery

```typescript
import { waitEvery } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitEvery(hours(2));
console.log(new Date().toTimeString()); // 14:00:00
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# fn (Higher Order Functions)

### fn.noop

No operation. Do nothing, return nothing.

```typescript
const run = condition ? doSomething : fn.noop;
run();
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.noact

No action. Returns the first argument it receives.

```typescript
const items = stuff.map(condition ? mapSomething : fn.noact);
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.result

Returns a function that returns a function that returns the first argument.

```typescript
const items = stuff.filter(condition ? mapSomething : fn.result(true));
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.resolve

Returns an async function that resolves to the first argument

Like fn.result, but wrapped in a Promise

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.reject

Returns an async function that rejects with the first argument

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.fixFloat

Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers

```typescript
0.1 + 0.2; // 0.30000000000000004
fixFloat(0.1 + 0.2); // 0.3
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.addAll

Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max

```typescript
addAll(1, 2, 3, 4, 5); // 15
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Filters

### fn.filters.exists / fn.exists

Returns true if item isn't null or undefined.

```typescript
[null, 1, undefined, 2].filter(fn.exists); // [1, 2]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.filters.isTruthy / fn.isTruthy

Returns true if item is truthy.

```typescript
[0, 1, 2].filter(fn.isTruthy); // [1, 2]
['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.filters.isFalsy / fn.isFalsy

Returns true if item is falsy.

```typescript
[0, 1, 2].filter(fn.isFalsy); // [0]
['', 'a', 'b'].filter(fn.isFalsy); // ['']
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.filters.isEmpty / fn.isEmpty

Returns true if item's length is 0

```typescript
['', 'a', 'b'].filter(fn.isEmpty); // ['']
[[], [1], [2]].filter(fn.isEmpty); // [[]]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.filters.isNotEmpty / fn.isNotEmpty

Returns true if item's length is 1 or more

```typescript
['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
[[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.filters.isEqual / fn.isEqual

Returns a function that returns true if the item is equal to provided value.

```typescript
[0, 1, 2].filter(fn.isEqual(1)); // [1]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.filters.isNotEqual / fn.isNotEqual

Returns a function that returns true if the item is not equal to provided value.

```typescript
[0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Maps

### fn.maps.toString / fn.toString

Maps the item to a string.

```typescript
[0, 1, 2].map(fn.toString); // ['0', '1', '2']
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.maps.toNumber / fn.toNumber

Maps the item to a number.

```typescript
['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.maps.toBool / fn.toBool

Maps the item to a boolean.

```typescript
[0, 1, 2].map(fn.toBool); // [false, true, true]
['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.maps.toProp / fn.toProp

Maps the item to a given property of the item

```typescript
[{ name: 'Jack' }, { name: 'Jill' }].map(fn.toProp('name')); // ['Jack', 'Jill']
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Sorts

### fn.sorts.asc / fn.asc

Sort ascending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.sorts.desc / fn.desc

Sort descending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.sorts.byProp / fn.byProp

Sort by a given property.

```typescript
const people = [{ age: 2 }, { age: 4 }, { age: 3 }, { age: 1 }];
people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.sorts.nearestTo / fn.nearestTo

Sort by the nearest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.sorts.furthestFrom / fn.furthestFrom

Sort by the furthest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.sorts.arrayAsc / fn.arrayAsc

Sort an array of arrays in ascending order

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.sorts.arrayDesc/ fn.arrayDesc

Sort an array of arrays in descending order

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Reduces

### fn.reduces.combine / fn.combine

Adds or concats the items

```typescript
[1, 2, 3].reduce(fn.combine); // 6
['a', 'b', 'c'].reduce(fn.combine); // 'abc'
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Everys

### fn.everys.isAllEqual / fn.isAllEqual

Returns if all the items are equal to one another.

```typescript
[1, 1, 1].every(fn.isAllEqual); // true
[1, 2, 1].every(fn.isAllEqual); // false
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Round

### fn.round.floorTo / fn.floorTo

Floors a number down to the nearest multiple of the given number.

```typescript
fn.round.floorTo(10, 102); // 100
fn.round.floorTo(5, 53); // 50
fn.round.floorTo(0.1, 0.25); // 0.2
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.round.to / fn.round.roundTo / fn.roundTo

Floors a number down to the nearest multiple of the given number.

```typescript
fn.round.to(10, 102); // 100
fn.round.to(5, 53); // 55
fn.round.to(0.1, 0.25); // 0.3
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### fn.round.ceilTo / fn.ceilTo

Floors a number down to the nearest multiple of the given number.

```typescript
fn.round.ceilTo(10, 102); // 110
fn.round.ceilTo(5, 53); // 55
fn.round.ceilTo(0.1, 0.25); // 0.3
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# Error handling

### tryOr

Try to execute a function and return its result if it succeeds, or return the default value if it fails.

```typescript
const result = tryOr('default', () => getSomething());
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### retry

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds.

```typescript
const result = tryOr(5, seconds(1),, true, () => getSomething());
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

### retryOr

Combination of retry and tryOr.

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds. Return the default value if it fails too many times

```typescript
const result = retryOr('default', 5, seconds(1), true, () => getSomething());
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# getTimer

A handy little tool for tracking how long things are taking

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## timer

There is also a global instance for smaller projects/scripts

```typescript
import { timer } from 'swiss-ak';

timer.start(timer.TOTAL);
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# ArrayUtils

## range

Returns an array of the given length, where each value is equal to it's index
e.g. [0, 1, 2, ..., length]

```typescript
range(3); // [0, 1, 2]
range(5); // [0, 1, 2, 3, 4]
range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(3, 2); // [0, 2, 4]
range(5, 2); // [0, 2, 4, 6, 8]
range(10, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## zip

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Limited to the length of the shortest provided array

Inspired by python's 'zip'

```typescript
zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## randomise

Returns a clone of the provided array with it's items in a random order

```typescript
randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## repeat

Returns an array with the given items repeated

```typescript
repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## roll

'Roll' the array by a given amount so that is has a new first item. Length and contents remain the same, but the order is changed

```typescript
roll(1, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7, 0 ]
roll(4, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 4, 5, 6, 7, 0, 1, 2, 3 ]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## sortNumberedText

Alphabetically sorts a list of strings, but keeps multi-digit numbers in numerical order (rather than alphabetical)

```typescript
const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
names.sort(); // [ 'foo10', 'foo20', 'foo9', 'name1', 'name10', 'name2' ]
sortNumberedText(names); // [ 'foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10' ]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# ObjectUtils

## ObjectUtils.map

Maps the keys and values of an object in a similar way to Array.map

```typescript
ObjectUtils.map({ a: 1, b: 2, c: 3 }, (key, value) => [key, key + value]); // {a: 'a1', b: 'b2', c: 'c3'}
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## ObjectUtils.mapValues

Maps the values of an object in a similar way to Array.map

```typescript
ObjectUtils.map({ a: 1, b: 2, c: 3 }, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## ObjectUtils.mapKeys

Maps the values of an object in a similar way to Array.map

```typescript
ObjectUtils.map({ a: 1, b: 2, c: 3 }, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## PromiseUtils.all

An alias for Promise.all

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# ColourUtils

## ColourUtils.namedColours

A dictionary of different colour names and their RGB values

```typescript
ColourUtils.namedColours.blue; // [0, 0, 255]
ColourUtils.namedColours.red; // [255, 0, 0]
ColourUtils.namedColours.green; // [0, 255, 0]

ColourUtils.namedColours.azure; // [240, 255, 255]
ColourUtils.namedColours.darkorange; // [255, 140, 0]
ColourUtils.namedColours.dodgerblue; // [30, 144, 255]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## ColourUtils.parse

Parse a string into a colour object (RGB array)
Not extensive. Currently limited to:

- 3 char hexes
- 6 char hexes
- comma separated RGB values
- named colours (from namedColours dictionary)

```typescript
ColourUtils.parse('#FF0000'); // [255, 0, 0]
ColourUtils.parse('rgb(255, 0, 0)'); // [255, 0, 0]
ColourUtils.parse('red'); // [255, 0, 0]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## ColourUtils.toHex

Convert a colour object (RGB array) to a hex string

```typescript
ColourUtils.toHex([255, 0, 0]); // '#FF0000'
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## ColourUtils.getLuminance

Get the luminance value of a given colour.

Between 0 and 255. Calculated using the formula:
(RED ?????0.299) + (GREEN ?? 0.587) + (BLUE ?? 0.114)

```typescript
getLuminance([255, 0, 0]); // 76.245
getLuminance([0, 255, 0]); // 149.685
getLuminance([0, 0, 255]); // 29.07
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## ColourUtils.invertColour

Get the opposite colour of a given colour.

```typescript
invertColour([255, 0, 0]); // [0, 255, 255]
invertColour([0, 255, 0]); // [ 255, 0, 255 ]
invertColour([0, 0, 255]); // [ 255, 255, 0 ]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## ColourUtils.getContrastedColour

Get the colour that contrasts the most with a given colour. (White or black)

Returned colour can be used as a text colour on top of the provided colour

```typescript
getContrastedColour([255, 0, 0]); // [255, 255, 255]
getContrastedColour([255, 255, 0]); // [0, 0, 0]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# progressBar

A util for creating a 'visual' progress bar for better representing progress of multiple operations.

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Options

All options are optional.

| Property    | Default                           | Description                                            |
| ----------- | --------------------------------- | ------------------------------------------------------ |
| prefix      | `''`                              | String to show to left of progress bar                 |
| prefixWidth | `1`                               | Min width of prefix - `10` => `Example??????`             |
| maxWidth    | `process.stdout.columns` or `100` | The maximum width the entire string may extend         |
| chalk       | nothing                           | the `chalk` module, if available                       |
| wrapperFn   | nothing                           | function to wrap the printed string (eg `chalk.cyan)`  |
| showPercent | `false`                           | Show percentage completed - `( 69%)`                   |
| showCount   | `true`                            | Show numerical values of the count - `[11 / 15]`       |
| countWidth  | `0`                               | Min width of nums for showCount - `3` => `[????1 / ??15]` |
| progChar    | `'???'`                             | Character to use for progress section of bar           |
| emptyChar   | `' '`                             | Character to use for empty (rail) section of bar       |
| startChar   | `'???'`                             | Character to start the progress bar with               |
| endChar     | `'???'`                             | Character to end the progress bar with                 |

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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
ABC ???      ??? [0 / 5]
ABC ??????     ??? [1 / 5]
ABC ?????????    ??? [2 / 5]
ABC ???????????????  ??? [3 / 5]
ABC ?????????????????? ??? [4 / 5]
ABC ???????????????????????? [5 / 5]
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# symbols

A series of characters that can be used for display symbols

| Key                             | Symbol |
| :------------------------------ | :----: |
| symbols.TAB                     |  ` `   |
| symbols.TICK                    |   ???    |
| symbols.CROSS                   |   ???    |
| symbols.PLUS                    |   +    |
| symbols.MINUS                   |   -    |
| symbols.TIMES                   |   ??    |
| symbols.DIVIDE                  |   ??    |
| symbols.ELLIPSIS                |   ???    |
| symbols.BULLET                  |   ???    |
| symbols.EJECT                   |   ???    |
| symbols.TILDE                   |   ~    |
| symbols.HOME                    |   ~    |
| symbols.CHEV_LFT                |   ???    |
| symbols.CHEV_RGT                |   ???    |
| symbols.TRI_UPP                 |   ???    |
| symbols.TRI_DWN                 |   ???    |
| symbols.TRI_RGT                 |   ???    |
| symbols.TRI_LFT                 |   ???    |
| symbols.ARROW_UPP               |   ???    |
| symbols.ARROW_DWN               |   ???    |
| symbols.ARROW_RGT               |   ???    |
| symbols.ARROW_LFT               |   ???    |
| symbols.ARROW_UPP_RGT           |   ???    |
| symbols.ARROW_DWN_RGT           |   ???    |
| symbols.ARROW_DWN_LFT           |   ???    |
| symbols.ARROW_UPP_LFT           |   ???    |
| symbols.ARROW_STILL             |   ???    |
| symbols.ARROW_FLIP_H            |   ???    |
| symbols.ARROW_FLIP_V            |   ???    |
| symbols.ARROW_ROTATE_UPP        |   ???    |
| symbols.ARROW_ROTATE_DWN        |   ???    |
| symbols.ARROW_ROTATE_LFT        |   ???    |
| symbols.ARROW_ROTATE_RGT        |   ???    |
| symbols.ARROW_ROTATE_CLOCK      |   ???    |
| symbols.ARROW_ROTATE_ANTI_CLOCK |   ???    |
| symbols.FRACTION_1_4            |   ??    |
| symbols.FRACTION_1_2            |   ??    |
| symbols.FRACTION_3_4            |   ??    |
| symbols.SUPERSCRIPT['1']        |   ??    |
| symbols.SUPERSCRIPT['2']        |   ??    |
| symbols.SUPERSCRIPT['3']        |   ??    |
| symbols.SUPERSCRIPT['4']        |   ???    |
| symbols.SUPERSCRIPT['5']        |   ???    |
| symbols.SUPERSCRIPT['6']        |   ???    |
| symbols.SUPERSCRIPT['7']        |   ???    |
| symbols.SUPERSCRIPT['8']        |   ???    |
| symbols.SUPERSCRIPT['9']        |   ???    |
| symbols.SUPERSCRIPT['0']        |   ???    |
| symbols.SUPERSCRIPT['-']        |   ???    |
| symbols.SUPERSCRIPT['+']        |   ???    |
| symbols.SUPERSCRIPT['=']        |   ???    |
| symbols.SUPERSCRIPT['(']        |   ???    |
| symbols.SUPERSCRIPT[')']        |   ???    |
| symbols.SUPERSCRIPT['i']        |   ???    |
| symbols.SUPERSCRIPT['n']        |   ???    |
| symbols.SUPERSCRIPT['o']        |   ??    |
| symbols.SUPERSCRIPT['*']        |   ??    |

[??? Back to top ???](#swiss-ak-swiss-army-knife)

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

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## KeysOnly<T>

Makes all the values equal to the keys of T

```typescript
interface ITest {
  a: string;
  b: boolean;
}
type KeysOnlyTest = KeysOnly<ITest>; // { a: 'a', b: 'b' }
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## Numbered<T>

Makes all the values numbers

```typescript
interface ITest {
  a: string;
  b: boolean;
}
type NumberedTest = Numbered<ITest>; // { a: number, b: number }
```

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## OfType<T, U>

Makes all the properties of object T have type U

[??? Back to top ???](#swiss-ak-swiss-army-knife)

## ObjOfType<T>

An object with any properties of type T

[??? Back to top ???](#swiss-ak-swiss-army-knife)

# Notes

> These are used in non-vital personal projects and scripts.

> Need to be better tested before being used in prod.

> Failing/erroring/rejected promises may not behave as expected.

[??? Back to top ???](#swiss-ak-swiss-army-knife)
