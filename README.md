# swiss-ak (Swiss Army Knife)

A collection of useful little things that I like to reuse across projects

<!-- DOCS: TOC START -->

  - [Table of Contents](#)
    - [times](#times)
    - [waiters](#waiters)
      - [wait](#wait)
      - [waitUntil](#waituntil)
      - [waitFor](#waitfor)
      - [waitEvery](#waitevery)
      - [stopInterval](#stopinterval)
      - [interval](#interval)
    - [fn](#fn)
      - [noop](#noop)
      - [noact](#noact)
      - [result](#result)
      - [resolve](#resolve)
      - [reject](#reject)
      - [filters](#filters)
        - [exists](#exists)
        - [isTruthy](#istruthy)
        - [isFalsy](#isfalsy)
        - [isEmpty](#isempty)
        - [isNotEmpty](#isnotempty)
        - [isEqual](#isequal)
        - [isNotEqual](#isnotequal)
        - [dedupe](#dedupe)
        - [dedupeMapped](#dedupemapped)
      - [maps](#maps)
        - [toString](#tostring)
        - [toNumber](#tonumber)
        - [toBool](#tobool)
        - [toProp](#toprop)
        - [toFixed](#tofixed)
      - [sorts](#sorts)
        - [asc](#asc)
        - [desc](#desc)
        - [byProp](#byprop)
        - [nearestTo](#nearestto)
        - [furthestFrom](#furthestfrom)
        - [arrayAsc](#arrayasc)
        - [arrayDesc](#arraydesc)
      - [reduces](#reduces)
        - [combine](#combine)
        - [combineProp](#combineprop)
        - [mode](#mode)
        - [modeMapped](#modemapped)
      - [everys](#everys)
        - [isAllEqual](#isallequal)
    - [ArrayTools](#arraytools)
      - [range](#range)
      - [zip](#zip)
      - [zipMax](#zipmax)
      - [sortByMapped](#sortbymapped)
      - [randomise](#randomise)
      - [reverse](#reverse)
      - [entries](#entries)
      - [repeat](#repeat)
      - [roll](#roll)
      - [sortNumberedText](#sortnumberedtext)
      - [partition](#partition)
      - [groupObj](#groupobj)
      - [group](#group)
    - [ObjectTools](#objecttools)
      - [remodel](#remodel)
      - [remodelEach](#remodeleach)
      - [map](#map)
      - [mapValues](#mapvalues)
      - [mapKeys](#mapkeys)
      - [filter](#filter)
      - [clean](#clean)
    - [StringTools](#stringtools)
      - [capitalise](#capitalise)
      - [angloise](#angloise)
      - [clean](#clean)
      - [StringCaseHandler](#stringcasehandler)
        - [toLowerCamelCase](#tolowercamelcase)
        - [toUpperCamelCase](#touppercamelcase)
        - [toCamelCase](#tocamelcase)
        - [toLowerSlugCase](#tolowerslugcase)
        - [toUpperSlugCase](#toupperslugcase)
        - [toSlugCase](#toslugcase)
        - [toLowerSnakeCase](#tolowersnakecase)
        - [toUpperSnakeCase](#touppersnakecase)
        - [toSnakeCase](#tosnakecase)
        - [toLowerSpaced](#tolowerspaced)
        - [toUpperSpaced](#toupperspaced)
        - [toCapitalisedSpaced](#tocapitalisedspaced)
        - [toSpaced](#tospaced)
        - [toCharacterSeparated](#tocharacterseparated)
      - [fromSlugCase](#fromslugcase)
      - [fromSnakeCase](#fromsnakecase)
      - [fromSpaced](#fromspaced)
      - [fromCamelCase](#fromcamelcase)
    - [MathsTools](#mathstools)
      - [fixFloat](#fixfloat)
      - [addAll](#addall)
      - [round](#round)
        - [floorTo](#floorto)
        - [roundTo](#roundto)
        - [ceilTo](#ceilto)
      - [lerp](#lerp)
      - [lerpArray](#lerparray)
      - [lerpObj](#lerpobj)
      - [clamp](#clamp)
    - [PromiseTools](#promisetools)
      - [getDeferred](#getdeferred)
      - [all](#all)
      - [allLimit](#alllimit)
      - [each](#each)
      - [eachLimit](#eachlimit)
      - [map](#map)
      - [mapLimit](#maplimit)
      - [allObj](#allobj)
      - [allLimitObj](#alllimitobj)
    - [ColourTools](#colourtools)
      - [ColourValues](#colourvalues)
      - [HSLValues](#hslvalues)
      - [namedColours](#namedcolours)
      - [parse](#parse)
      - [toHex](#tohex)
      - [getLuminance](#getluminance)
      - [toYUV](#toyuv)
      - [toHSL](#tohsl)
      - [fromHSL](#fromhsl)
      - [invertColour](#invertcolour)
      - [getContrastedColour](#getcontrastedcolour)
      - [getLimitedColour](#getlimitedcolour)
    - [TimeTools](#timetools)
      - [toReadableDuration](#toreadableduration)
    - [Error Handling](#error-handling)
      - [tryOr](#tryor)
      - [retry](#retry)
      - [retryOr](#retryor)
    - [progressBar](#progressbar)
      - [printLn](#println)
      - [Options](#options)
      - [getProgressBar](#getprogressbar)
        - [update](#update)
        - [next](#next)
        - [set](#set)
        - [reset](#reset)
        - [start](#start)
        - [finish](#finish)
    - [symbols](#symbols)
      - [superscript](#superscript)
    - [queue](#queue)
      - [QueueManager](#queuemanager)
        - [setDefaultPauseTime](#setdefaultpausetime)
        - [setPauseTime](#setpausetime)
        - [add](#add)
        - [new](#new)
      - [queue](#queue)
    - [timer](#timer)
      - [getTimer](#gettimer)
      - [timer](#timer)
    - [Helper Types](#helper-types)
      - [Partial<T>](#partialt)
      - [KeysOnly<T>](#keysonlyt)
      - [Numbered<T>](#numberedt)
      - [OfType<T, U>](#oftypet-u)
      - [ObjOfType<T>](#objoftypet)
      - [ObjOfType<T>](#objoftypet)

<!-- DOCS: TOC END -->

<!-- DOCS: MAIN START -->

## times
A collection of Tools for calculating simple times.
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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## waiters
Async functions that return promises at or after a given time.

'Accurate/pinged' waiters ping at intermediary points to resolve at a more accurate time.

| Name      | Description                                          | Example                                         |
| --------- | ---------------------------------------------------- | ----------------------------------------------- |
| wait      | Standard wait promise (using setTimeout)             | `minutes(2)` = in 2 minutes                     |
| waitFor   | Accurate (pinged) wait the given ms                  | `minutes(2)` = in 2 minutes                     |
| waitUntil | Accurate (pinged) wait until given time              | `Date.now() + minutes(2)` = in 2 minutes        |
| waitEvery | Accurate (pinged) wait for next 'every X' event      | `hours(1)` = next full hour (e.g. 17:00, 22:00) |
| interval  | Accurate (pinged) interval for every 'every X' event | `hours(1)` = every hour, on the hour            |

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### wait
- `wait`
- `waiters.wait`

Standard wait promise (using setTimeout)

```typescript
import { wait } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await wait(minutes(2));
console.log(new Date().toTimeString()); // 12:32:10
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### waitUntil
- `waitUntil`
- `waiters.waitUntil`

Accurate (pinged) wait until given time

```typescript
import { waitUntil } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitUntil(Date.now() + minutes(10));
console.log(new Date().toTimeString()); // 12:40:10
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### waitFor
- `waitFor`
 - `waiters.waitFor`

Accurate (pinged) wait the given ms

```typescript
import { waitFor } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitFor(minutes(5));
console.log(new Date().toTimeString()); // 12:35:10
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### waitEvery
- `waitEvery`
 - `waiters.waitEvery`

Accurate (pinged) wait for next 'every X' event

```typescript
import { waitEvery } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitEvery(hours(2));
console.log(new Date().toTimeString()); // 14:00:00
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### stopInterval
- `stopInterval`
 - `waiters.stopInterval`

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### interval
- `interval`
 - `waiters.interval`

Accurate (pinged) interval for every 'every X' event

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## fn
A collection of useful higher-order functions.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### noop
- `fn.noop`

No operation. Do nothing, return nothing.

```typescript
const run = condition ? doSomething : fn.noop;
run();
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### noact
- `fn.noact`

No action. Returns the first argument it receives.

```typescript
const items = stuff
  .map(condition ? mapSomething : fn.noact)
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### result
- `fn.result`

Returns a function that returns a function that returns the first argument.

```typescript
const items = stuff
  .filter(condition ? mapSomething : fn.result(true))
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### resolve
- `fn.resolve`

Returns an async function that resolves to the first argument

Like fn.result, but wrapped in a Promise

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### reject
- `fn.reject`

Returns an async function that rejects with the first argument

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### filters

#### exists
- `fn.exists`
- `fn.filters.exists`

Returns true if item isn't null or undefined.

```typescript
[null, 1, undefined, 2].filter(fn.exists); // [1, 2]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isTruthy
- `fn.isTruthy`
- `fn.filters.isTruthy`

Returns true if item is truthy.

```typescript
[0, 1, 2].filter(fn.isTruthy); // [1, 2]
['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isFalsy
- `fn.isFalsy`
- `fn.filters.isFalsy`

Returns true if item is falsy.

```typescript
[0, 1, 2].filter(fn.isFalsy); // [0]
['', 'a', 'b'].filter(fn.isFalsy); // ['']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isEmpty
- `fn.isEmpty`
- `fn.filters.isEmpty`

Returns true if item's length is 0

```typescript
['', 'a', 'b'].filter(fn.isEmpty); // ['']
[[], [1], [2]].filter(fn.isEmpty); // [[]]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isNotEmpty
- `fn.isNotEmpty`
- `fn.filters.isNotEmpty`

Returns true if item's length is 1 or more

```typescript
['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
[[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isEqual
- `fn.isEqual`
- `fn.filters.isEqual`

Returns a function that returns true if the item is equal to provided value.

```typescript
[0, 1, 2].filter(fn.isEqual(1)); // [1]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isNotEqual
- `fn.isNotEqual`
- `fn.filters.isNotEqual`

Returns a function that returns true if the item is not equal to provided value.

```typescript
[0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### dedupe
- `fn.dedupe`
- `fn.filters.dedupe`

Removes duplicate items from an array.

```typescript
[0, 1, 2, 1, 0].filter(fn.dedupe); // [0, 1, 2]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### dedupeMapped
- `fn.dedupeMapped`
- `fn.filters.dedupeMapped`

Removes duplicate items from an array based on a mapped value.

```typescript
[2, 4, 6, 8, 10, 12].filter(fn.dedupeMapped((v) => v % 3)); // [ 2, 4, 6 ] (maps to [ 2, 1, 0, 2, 1, 0 ])
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### maps

#### toString
- `fn.toString`
- `fn.maps.toString`

Maps the item to a string.

```typescript
[0, 1, 2].map(fn.toString); // ['0', '1', '2']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toNumber
- `fn.toNumber`
- `fn.maps.toNumber`

Maps the item to a number.

```typescript
['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toBool
- `fn.toBool`
- `fn.maps.toBool`

Maps the item to a boolean.

```typescript
[0, 1, 2].map(fn.toBool); // [false, true, true]
['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toProp
- `fn.toProp`
- `fn.maps.toProp`

Maps the item to a given property of the item

```typescript
[{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toFixed
- `fn.toFixed`
- `fn.maps.toFixed`

Map the items (numbers) of an array to a fixed precision.

```typescript
[1.234, 5.678, 9.012].map(fn.toFixed(2)); // [1.23, 5.68, 9.01]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### sorts

#### asc
- `fn.asc`
- `fn.sorts.asc`

Sort ascending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### desc
- `fn.desc`
- `fn.sorts.desc`

Sort descending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### byProp
- `fn.byProp`
- `fn.sorts.byProp`

Sort by a given property.

```typescript
const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### nearestTo
- `fn.nearestTo`
- `fn.sorts.nearestTo`

Sort by the nearest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### furthestFrom
- `fn.furthestFrom`
- `fn.sorts.furthestFrom`

Sort by the furthest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### arrayAsc
- `fn.arrayAsc`
- `fn.sorts.arrayAsc`

Sort an array of arrays in ascending order

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### arrayDesc
- `fn.arrayDesc`
- `fn.sorts.arrayDesc`

Sort an array of arrays in descending order

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### reduces

#### combine
- `fn.combine`
- `fn.reduces.combine`

Adds or concats the items

```typescript
[1, 2, 3].reduce(fn.combine); // 6
['a', 'b', 'c'].reduce(fn.combine); // 'abc'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### combineProp
- `fn.combineProp`
- `fn.reduces.combineProp`

Adds or concats the given property of the items

```typescript
const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
people.reduce(fn.combineProp('age')); // 6
people.reduce(fn.combineProp('name')); // 'abc'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### mode
- `fn.mode`
- `fn.reduces.mode`

Returns the most common value in an array.

```typescript
[1, 2, 3, 2, 1, 1].reduce(fn.mode); // 1
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### modeMapped
- `fn.modeMapped`
- `fn.reduces.modeMapped`

Returns the most common value in an array, based on a given map function.

```typescript
[2, 4, 6, 8, 9, 12].reduce(fn.modeMapped((v) => v % 3)); // 6 (maps to [ 2, 1, 0, 2, 0, 0 ])
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### everys

#### isAllEqual
- `fn.isAllEqual`
- `fn.everys.isAllEqual`

Returns if all the items are equal to one another.

```typescript
[1, 1, 1].every(fn.isAllEqual); // true
[1, 2, 1].every(fn.isAllEqual); // false
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## ArrayTools
A collection of useful array functions.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### range
- `range`
- `ArrayTools.range`

Returns an array of the given length, where each value is equal to it's index
e.g. [0, 1, 2, ..., length]

```typescript
ArrayTools.range(3);  // [0, 1, 2]
ArrayTools.range(5);  // [0, 1, 2, 3, 4]
ArrayTools.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

ArrayTools.range(3, 2);  // [0, 2, 4]
ArrayTools.range(5, 2);  // [0, 2, 4, 6, 8]
ArrayTools.range(10, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### zip
- `zip`
- `ArrayTools.zip`

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Limited to the length of the shortest provided array

Inspired by python's 'zip'

```typescript
ArrayTools.zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### zipMax
- `zipMax`
- `ArrayTools.zipMax`

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Unlike `zip`, it will match the length of the longest provided array, filling in any missing values with `undefined`

Inspired by python's 'zip'

```typescript
ArrayTools.zipMax([1, 2, 3, 4], ['a', 'b', 'c']); //[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, undefined ] ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### sortByMapped
- `sortByMapped`
- `ArrayTools.sortByMapped`

Sort an array by a mapped form of the values, but returning the initial values

```typescript
ArrayTools.sortByMapped(['2p', '3p', '1p'], (v) => Number(v.replace('p', ''))); // ['1p', '2p', '3p']
ArrayTools.sortByMapped(
  ['2p', '3p', '1p'],
  (v) => Number(v.replace('p', '')),
  (a, b) => b - a
); // ['3p', '2p', '1p']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### randomise
- `randomise`
- `ArrayTools.randomise`

Returns a clone of the provided array with it's items in a random order

```typescript
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### reverse
- `reverse`
- `ArrayTools.reverse`

Returns a new array with the order reversed without affecting original array

```typescript
const arr1 = [1, 2, 3];
arr1            // [1, 2, 3]
arr1.reverse(); // [3, 2, 1]
arr1            // [3, 2, 1]

const arr2 = [1, 2, 3];
arr2            // [1, 2, 3]
ArrayTools.reverse(arr2);  // [3, 2, 1]
arr2            // [1, 2, 3]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### entries
- `entries`
- `ArrayTools.entries`

Returns array of 'tuples' of index/value pairs

```typescript
const arr = ['a', 'b', 'c'];
ArrayTools.entries(arr); // [ [0, 'a'], [1, 'b'], [2, 'c'] ]

for (let [index, value] of entries(arr)) {
 console.log(index); // 0, 1, 2
 console.log(value); // 'a', 'b', 'c'
}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### repeat
- `repeat`
- `ArrayTools.repeat`

Returns an array with the given items repeated

```typescript
ArrayTools.repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
ArrayTools.repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### roll
- `roll`
- `ArrayTools.roll`

'Roll' the array by a given amount so that is has a new first item. Length and contents remain the same, but the order is changed

```typescript
ArrayTools.roll(1, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7, 0 ]
ArrayTools.roll(4, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 4, 5, 6, 7, 0, 1, 2, 3 ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### sortNumberedText
- `sortNumberedText`
- `ArrayTools.sortNumberedText`

Alphabetically sorts a list of strings, but keeps multi-digit numbers in numerical order (rather than alphabetical)

```typescript
const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
names.sort(); // [ 'foo10', 'foo20', 'foo9', 'name1', 'name10', 'name2' ]
ArrayTools.sortNumberedText(names); // [ 'foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10' ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### partition
- `partition`
- `ArrayTools.partition`

Breaks an array into smaller arrays of a given size

```typescript
ArrayTools.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### groupObj
- `groupObj`
- `ArrayTools.groupObj`

Group items from an array into an object of arrays, based on a given map function.

```typescript
const arr = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 1, name: 'c' },
];
ArrayTools.groupObj(arr, item => item.id); // {
//   1: [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
//   2: [ { group: 2, name: 'b' } ]
// }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### group
- `group`
- `ArrayTools.group`

Group items from an array into an array of arrays, based on a given map function.

```typescript
const arr = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 1, name: 'c' },
];
ArrayTools.groupObj(arr, item => item.id); // [
//   [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
//   [ { group: 2, name: 'b' } ]
// ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## ObjectTools
A collection of functions for working with objects

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### remodel
- `ObjectTools.remodel`

Apply a function to the entries of an object

```typescript
const input = {'foo': 2, 'bar': 1, 'baz': 4}
ObjectTools.remodel(input, (entries) => entries.filter(([k, v]) => v % 2 === 0)) // { foo: 2, baz: 4 }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### remodelEach
- `ObjectTools.remodelEach`

Apply a function to each of the entries of an object

Note: similar to ObjectTools.map, but the function parameters are different. Prefer ObjectTools.map where possible.

```typescript
const input = {'foo': 2, 'bar': 1, 'baz': 4}
ObjectTools.remodelEach(input, ([k, v]) => [k, v * 2]) // { foo: 4, bar: 2, baz: 8 }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### map
- `ObjectTools.map`

Maps the keys and values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => [key, key + value]); // {a: 'a1', b: 'b2', c: 'c3'}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### mapValues
- `ObjectTools.mapValues`

Maps the values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### mapKeys
- `ObjectTools.mapKeys`

Maps the values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### filter
- `ObjectTools.filter`

Removes entries from an object based on a predicate function

```typescript
ObjectTools.filter({a: 1, b: 2, c: 3}, (k, v) => v % 2 === 0) // { b: 2 }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### clean
- `ObjectTools.clean`

Removes properties with undefined values

```typescript
ObjectTools.clean({a: 1, b: undefined, c: 3}) // { a: 1, c: 3 }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## StringTools
A collection of string utilities

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### capitalise
- `StringTools.capitalise`

Capitalises the first letter of each word in a string

```typescript
StringTools.capitalise('hello world'); // 'Hello World'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### angloise
- `StringTools.angloise`

Remove accents from a string

```typescript
StringTools.angloise('éèêë'); // 'eeee'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### clean
- `StringTools.clean`

Remove accents and non alphanumerics from a string

```typescript
StringTools.clean('éèêë_--ab0'); // 'eeeeab0'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### StringCaseHandler

#### toLowerCamelCase
- `StringTools.toLowerCamelCase`
- `StringTools.fromSlugCase.toLowerCamelCase`
- `StringTools.fromSnakeCase.toLowerCamelCase`
- `StringTools.fromSpaced.toLowerCamelCase`
- `StringTools.fromCamelCase.toLowerCamelCase`

Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toUpperCamelCase
- `StringTools.toUpperCamelCase`
- `StringTools.fromSlugCase.toUpperCamelCase`
- `StringTools.fromSnakeCase.toUpperCamelCase`
- `StringTools.fromSpaced.toUpperCamelCase`
- `StringTools.fromCamelCase.toUpperCamelCase`

Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toCamelCase
- `StringTools.toCamelCase`
- `StringTools.fromSlugCase.toCamelCase`
- `StringTools.fromSnakeCase.toCamelCase`
- `StringTools.fromSpaced.toCamelCase`
- `StringTools.fromCamelCase.toCamelCase`

Convert a string to camel case (e.g. `thisIsCamelCase`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toLowerSlugCase
- `StringTools.toLowerSlugCase`
- `StringTools.fromSlugCase.toLowerSlugCase`
- `StringTools.fromSnakeCase.toLowerSlugCase`
- `StringTools.fromSpaced.toLowerSlugCase`
- `StringTools.fromCamelCase.toLowerSlugCase`

Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toUpperSlugCase
- `StringTools.toUpperSlugCase`
- `StringTools.fromSlugCase.toUpperSlugCase`
- `StringTools.fromSnakeCase.toUpperSlugCase`
- `StringTools.fromSpaced.toUpperSlugCase`
- `StringTools.fromCamelCase.toUpperSlugCase`

Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toSlugCase
- `StringTools.toSlugCase`
- `StringTools.fromSlugCase.toSlugCase`
- `StringTools.fromSnakeCase.toSlugCase`
- `StringTools.fromSpaced.toSlugCase`
- `StringTools.fromCamelCase.toSlugCase`

Convert a string to camel case (e.g. `this-is-slug-case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toLowerSnakeCase
- `StringTools.toLowerSnakeCase`
- `StringTools.fromSlugCase.toLowerSnakeCase`
- `StringTools.fromSnakeCase.toLowerSnakeCase`
- `StringTools.fromSpaced.toLowerSnakeCase`
- `StringTools.fromCamelCase.toLowerSnakeCase`

Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toUpperSnakeCase
- `StringTools.toUpperSnakeCase`
- `StringTools.fromSlugCase.toUpperSnakeCase`
- `StringTools.fromSnakeCase.toUpperSnakeCase`
- `StringTools.fromSpaced.toUpperSnakeCase`
- `StringTools.fromCamelCase.toUpperSnakeCase`

Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toSnakeCase
- `StringTools.toSnakeCase`
- `StringTools.fromSlugCase.toSnakeCase`
- `StringTools.fromSnakeCase.toSnakeCase`
- `StringTools.fromSpaced.toSnakeCase`
- `StringTools.fromCamelCase.toSnakeCase`

Convert a string to snake case (e.g. `this_is_snake_case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toLowerSpaced
- `StringTools.toLowerSpaced`
- `StringTools.fromSlugCase.toLowerSpaced`
- `StringTools.fromSnakeCase.toLowerSpaced`
- `StringTools.fromSpaced.toLowerSpaced`
- `StringTools.fromCamelCase.toLowerSpaced`

Convert a string to lower spaced case (e.g. `this is lower spaced case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toUpperSpaced
- `StringTools.toUpperSpaced`
- `StringTools.fromSlugCase.toUpperSpaced`
- `StringTools.fromSnakeCase.toUpperSpaced`
- `StringTools.fromSpaced.toUpperSpaced`
- `StringTools.fromCamelCase.toUpperSpaced`

Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toCapitalisedSpaced
- `StringTools.toCapitalisedSpaced`
- `StringTools.fromSlugCase.toCapitalisedSpaced`
- `StringTools.fromSnakeCase.toCapitalisedSpaced`
- `StringTools.fromSpaced.toCapitalisedSpaced`
- `StringTools.fromCamelCase.toCapitalisedSpaced`

Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toSpaced
- `StringTools.toSpaced`
- `StringTools.fromSlugCase.toSpaced`
- `StringTools.fromSnakeCase.toSpaced`
- `StringTools.fromSpaced.toSpaced`
- `StringTools.fromCamelCase.toSpaced`

Convert a string to spaced case (e.g. `this is spaced case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toCharacterSeparated
- `StringTools.toCharacterSeparated`
- `StringTools.fromSlugCase.toCharacterSeparated`
- `StringTools.fromSnakeCase.toCharacterSeparated`
- `StringTools.fromSpaced.toCharacterSeparated`
- `StringTools.fromCamelCase.toCharacterSeparated`

Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromSlugCase
Has the following methods:
- `StringTools.fromSlugCase.toLowerCamelCase`
- `StringTools.fromSlugCase.toUpperCamelCase`
- `StringTools.fromSlugCase.toCamelCase`
- `StringTools.fromSlugCase.toLowerSlugCase`
- `StringTools.fromSlugCase.toUpperSlugCase`
- `StringTools.fromSlugCase.toSlugCase`
- `StringTools.fromSlugCase.toLowerSnakeCase`
- `StringTools.fromSlugCase.toUpperSnakeCase`
- `StringTools.fromSlugCase.toSnakeCase`
- `StringTools.fromSlugCase.toLowerSpaced`
- `StringTools.fromSlugCase.toUpperSpaced`
- `StringTools.fromSlugCase.toCapitalisedSpaced`
- `StringTools.fromSlugCase.toSpaced`
- `StringTools.fromSlugCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromSnakeCase
Has the following methods:
- `StringTools.fromSnakeCase.toLowerCamelCase`
- `StringTools.fromSnakeCase.toUpperCamelCase`
- `StringTools.fromSnakeCase.toCamelCase`
- `StringTools.fromSnakeCase.toLowerSlugCase`
- `StringTools.fromSnakeCase.toUpperSlugCase`
- `StringTools.fromSnakeCase.toSlugCase`
- `StringTools.fromSnakeCase.toLowerSnakeCase`
- `StringTools.fromSnakeCase.toUpperSnakeCase`
- `StringTools.fromSnakeCase.toSnakeCase`
- `StringTools.fromSnakeCase.toLowerSpaced`
- `StringTools.fromSnakeCase.toUpperSpaced`
- `StringTools.fromSnakeCase.toCapitalisedSpaced`
- `StringTools.fromSnakeCase.toSpaced`
- `StringTools.fromSnakeCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromSpaced
Has the following methods:
- `StringTools.fromSpaced.toLowerCamelCase`
- `StringTools.fromSpaced.toUpperCamelCase`
- `StringTools.fromSpaced.toCamelCase`
- `StringTools.fromSpaced.toLowerSlugCase`
- `StringTools.fromSpaced.toUpperSlugCase`
- `StringTools.fromSpaced.toSlugCase`
- `StringTools.fromSpaced.toLowerSnakeCase`
- `StringTools.fromSpaced.toUpperSnakeCase`
- `StringTools.fromSpaced.toSnakeCase`
- `StringTools.fromSpaced.toLowerSpaced`
- `StringTools.fromSpaced.toUpperSpaced`
- `StringTools.fromSpaced.toCapitalisedSpaced`
- `StringTools.fromSpaced.toSpaced`
- `StringTools.fromSpaced.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromCamelCase
Has the following methods:
- `StringTools.fromCamelCase.toLowerCamelCase`
- `StringTools.fromCamelCase.toUpperCamelCase`
- `StringTools.fromCamelCase.toCamelCase`
- `StringTools.fromCamelCase.toLowerSlugCase`
- `StringTools.fromCamelCase.toUpperSlugCase`
- `StringTools.fromCamelCase.toSlugCase`
- `StringTools.fromCamelCase.toLowerSnakeCase`
- `StringTools.fromCamelCase.toUpperSnakeCase`
- `StringTools.fromCamelCase.toSnakeCase`
- `StringTools.fromCamelCase.toLowerSpaced`
- `StringTools.fromCamelCase.toUpperSpaced`
- `StringTools.fromCamelCase.toCapitalisedSpaced`
- `StringTools.fromCamelCase.toSpaced`
- `StringTools.fromCamelCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## MathsTools
A collection of mathematical functions.

> Note: The field is 'Mathematics', and so it is 'MathsTools' not ~'MathTools'~

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fixFloat
- `MathsTools.fixFloat`

Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers

Can also be used to round numbers to a given precision

> Note: It's not a great name, but it's what I've always called it, so I'm sticking with it. May create an alias

```typescript
0.1 + 0.2 // 0.30000000000000004
MathsTools.fixFloat(0.1 + 0.2) // 0.3
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### addAll
- `MathsTools.addAll`

Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max

```typescript
MathsTools.addAll(1, 2, 3, 4, 5); // 15
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### round

#### floorTo
- `MathsTools.floorTo`
- `MathsTools.round.floorTo`

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.floorTo(10, 102); // 100
MathsTools.round.floorTo(5, 53); // 50
MathsTools.round.floorTo(0.1, 0.25); // 0.2
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### roundTo
- `MathsTools.round.to`
- `MathsTools.roundTo`
- `MathsTools.round.roundTo`

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.to(10, 102); // 100
MathsTools.round.to(5, 53); // 55
MathsTools.round.to(0.1, 0.25); // 0.3
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### ceilTo
- `MathsTools.ceilTo`
- `MathsTools.round.ceilTo`

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.ceilTo(10, 102); // 110
MathsTools.round.ceilTo(5, 53); // 55
MathsTools.round.ceilTo(0.1, 0.25); // 0.3
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### lerp
- `MathsTools.lerp`

Linearly interpolates between two values.

```typescript
MathsTools.lerp(0.5, 0, 10); // 5
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### lerpArray
- `MathsTools.lerpArray`

Linearly interpolates between the values of 2 arrays.

```typescript
MathsTools.lerpArray(0.5, [0, 0, 0], [10, 100, 1000]) // [5, 50, 500]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### lerpObj
- `MathsTools.lerpObj`

Linearly interpolates between the values of 2 arrays.

```typescript
MathsTools.lerpObj(0.5, {'ARS': 0, 'CHE': 0, 'FUL': 0}, {'ARS': 100, 'CHE': 10, 'FUL': 20}) // {'ARS': 50, 'CHE': 5, 'FUL': 10}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### clamp
- `MathsTools.clamp`

Clamps a value between a min and max.

```typescript
MathsTools.clamp(5, 0, 10); // 5
MathsTools.clamp(-5, 0, 10); // 0
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## PromiseTools
A collection of promise utilities

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getDeferred
- `getDeferred`
- `PromiseTools.getDeferred`

A deferred promise

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### all
- `all`
- `PromiseTools.all`

An alias for Promise.all

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### allLimit
- `allLimit`
- `PromiseTools.allLimit`

Like Promise.all, but limits the numbers of concurrently running items.

Takes an array of functions (that return Promises), rather than an array of Promises

```typescript
import { PromiseTools, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allLimit', 'a', 'b', 'c', 'd');

const results = PromiseTools.allLimit<number>(2, [
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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### each
- `each`
- `PromiseTools.each`

Run an async function against each item in an array

```typescript
import { PromiseTools, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

await PromiseTools.each<number>(arr, async (val: number) => {
  await wait(seconds(2));
  sendToSomewhere(val);
});
console.log(''); // after 2 seconds
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### eachLimit
- `eachLimit`
- `PromiseTools.eachLimit`

Run an async function against each item in an array, limiting the number of items that can run concurrently.

See PromiseTools.allLimit for information about limited functions.

```typescript
import { PromiseTools, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

await PromiseTools.eachLimit<number>(2, arr, async (val: number) => {
  await wait(seconds(2));
  sendToSomewhere(val);
});
console.log(''); // after 4 seconds
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### map
- `map`
- `PromiseTools.map`

Run an async map function against each item in an array, mapping the results to a returned array

```typescript
import { PromiseTools, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

const mapped = await PromiseTools.map<number>(arr, async (val: number) => {
  await wait(seconds(2));
  return val * 2;
});

console.log(mapped); // [2, 4, 6, 8] (after 2 seconds)
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### mapLimit
- `mapLimit`
- `PromiseTools.mapLimit`

Run an async map function against each item in an array, mapping the results to a returned array, and limiting the number of items that can run concurrently.

See PromiseTools.allLimit for information about limited functions.

```typescript
import { PromiseTools, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

const mapped = await PromiseTools.mapLimit<number>(2, arr, async (val: number) => {
  await wait(seconds(2));
  return val * 2;
});

console.log(mapped); // [2, 4, 6, 8] (after 4 seconds)
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### allObj
- `allObj`
- `PromiseTools.allObj`

Like Promise.all, but pass/receive objects rather than arrays

```typescript
import { PromiseTools, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allObj', 'a', 'b', 'c');

const results = PromiseTools.allObj<number>({
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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### allLimitObj
- `allLimitObj`
- `PromiseTools.allLimitObj`

A mix of allObj and allLimit.

Takes an array of functions (that return Promises), and limits the numbers of concurrently running items.

```typescript
import { PromiseTools, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allLimitObj', 'a', 'b', 'c', 'd');

const results = PromiseTools.allLimitObj<number>(2, {
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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## ColourTools
A collection of functions for working with colours.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### ColourValues
- `ColourTools.ColourValues`

A type with 3 numbers:
- red [0-255]
- green [0-255]
- blue [0-255]

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### HSLValues
- `ColourTools.HSLValues`

A type with 3 numbers:
- hue [0-360]
- saturation [0-100]
- lightness [0-100]

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### namedColours
- `ColourTools.namedColours`

A dictionary of different colour names and their RGB values

```typescript
ColourTools.namedColours.blue // [0, 0, 255]
ColourTools.namedColours.red // [255, 0, 0]
ColourTools.namedColours.green // [0, 255, 0]

ColourTools.namedColours.azure // [240, 255, 255]
ColourTools.namedColours.darkorange // [255, 140, 0]
ColourTools.namedColours.dodgerblue // [30, 144, 255]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### parse
- `ColourTools.parse`

Parse a string into a colour object (RGB array)
Not extensive. Currently limited to:
- 3 char hexes
- 6 char hexes
- comma separated RGB values
- named colours (from namedColours dictionary)

```typescript
ColourTools.parse('#FF0000') // [255, 0, 0]
ColourTools.parse('rgb(255, 0, 0)') // [255, 0, 0]
ColourTools.parse('red') // [255, 0, 0]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toHex
- `ColourTools.toHex`

Convert a colour object (RGB array) to a hex string

```typescript
ColourTools.toHex([255, 0, 0]) // '#FF0000'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getLuminance
- `ColourTools.getLuminance`

IMPORTANT: This is not the same as the HSL luminance value.

Get the luminance value of a given colour.

Between 0 and 255. Calculated using the formula:
 (RED × 0.299) + (GREEN × 0.587) + (BLUE × 0.114)

Is the Y (Luma) component of the YUV444 color model.

```typescript
ColourTools.getLuminance([255, 0, 0]); // 76.245
ColourTools.getLuminance([0, 255, 0]); // 149.685
ColourTools.getLuminance([0, 0, 255]); // 29.07
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toYUV
- `ColourTools.toYUV`

Convert a colour object (RGB array) to a YUV array.

See https://en.wikipedia.org/wiki/YUV#Y%E2%80%B2UV444_to_RGB888_conversion

```typescript
ColourTools.toYUV([255, 0, 0]); // [76.245, 112.439, -38.094]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toHSL
- `ColourTools.toHSL`

Convert a RGB array to a HSL array.

Adapted from https://www.30secondsofcode.org/js/s/rgb-to-hsl

```typescript
ColourTools.toHSL([255, 0, 0]); // [0, 100, 50]
ColourTools.toHSL([0, 255, 0]); // [120, 100, 50]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromHSL
- `ColourTools.fromHSL`

Convert a HSL array to a RGB array.

Adapted from https://www.30secondsofcode.org/js/s/hsl-to-rgb

```typescript
ColourTools.fromHSL([0, 100, 50]); // [255, 0, 0]
ColourTools.fromHSL([120, 100, 50]); // [0, 255, 0]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### invertColour
- `ColourTools.invertColour`

Get the opposite colour of a given colour.

```typescript
ColourTools.invertColour([255, 0, 0]); // [0, 255, 255]
ColourTools.invertColour([0, 255, 0]); // [ 255, 0, 255 ]
ColourTools.invertColour([0, 0, 255]); // [ 255, 255, 0 ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getContrastedColour
- `ColourTools.getContrastedColour`

Get the colour that contrasts the most with a given colour. (White or black)

Returned colour can be used as a text colour on top of the provided colour

```typescript
ColourTools.getContrastedColour([255, 0, 0]); // [255, 255, 255]
ColourTools.getContrastedColour([255, 255, 0]); // [0, 0, 0]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getLimitedColour
- `ColourTools.getLimitedColour`

Adjust a colour if a certain condition is met.
Used for lightening/darkening colours that are too light/dark

All values in functions are HSL

```typescript
ColourTools.getLimitedColour([255, 255, 255], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 230, 230, 230 ]
ColourTools.getLimitedColour([128, 128, 128], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 128, 128, 128 ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## TimeTools
A collection of time-related utility functions.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toReadableDuration
- `TimeTools.toReadableDuration`

Converts a duration in milliseconds to a human readable string.

```typescript
TimeTools.toReadableDuration(20); // '20ms'
TimeTools.toReadableDuration(seconds(59)); // '59s'
TimeTools.toReadableDuration(seconds(60)); // '1m'
TimeTools.toReadableDuration(hours(23)); // '23h'
TimeTools.toReadableDuration(hours(24)); // '1d'
TimeTools.toReadableDuration(days(10)); // '10d'

TimeTools.toReadableDuration(20, true) // '20 milliseconds'
TimeTools.toReadableDuration(seconds(59), true) // '59 seconds'
TimeTools.toReadableDuration(seconds(60), true) // '1 minute'
TimeTools.toReadableDuration(hours(23), true) // '23 hours'
TimeTools.toReadableDuration(hours(24), true) // '1 day'
TimeTools.toReadableDuration(days(10), true) // '10 days'

const realisticDuration = days(10) + hours(2) + seconds(31) + 512; // 871231512
TimeTools.toReadableDuration(realisticDuration, true, 4) // '10 days, 2 hours, 31 seconds & 512 milliseconds'
TimeTools.toReadableDuration(realisticDuration, true) // '10 days, 2 hours & 31 seconds'
TimeTools.toReadableDuration(realisticDuration, true, 2) // '10 days & 2 hours'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## Error Handling
Functions for handling errors.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### tryOr
- `tryOr`

Try to execute a function and return its result if it succeeds, or return the default value if it fails.

```typescript
const result = tryOr('default', () => getSomething());
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### retry
- `retry`

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds.

```typescript
const result = tryOr(5, seconds(1),, true, () => getSomething());
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### retryOr
- `retryOr`

Combination of retry and tryOr.

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds. Return the default value if it fails too many times

```typescript
const result = retryOr('default', 5, seconds(1), true, () => getSomething());
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## progressBar
A progress bar that can be used in the terminal.

> NOTE: This is eventually be moved to `swiss-node`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### printLn
- `printLn`
- `progressBar.printLn`

Can use instead of console.log

Overwrites the previous line if possible (i.e. node);

Usage
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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### Options
- `ProgressBarOptions`
- `progressBar.ProgressBarOptions`

All options are optional.

| Property         | Default                           | Description                                            |
| ---------------- | --------------------------------- | ------------------------------------------------------ |
| prefix           | `''`                              | String to show to left of progress bar                 |
| prefixWidth      | `1`                               | Min width of prefix - `10` => `Example˽˽˽`             |
| maxWidth         | `process.stdout.columns` or `100` | The maximum width the entire string may extend         |
| wrapperFn        | nothing                           | function to wrap the printed string (eg `chalk.cyan)`  |
| barWrapFn        | nothing                           | function to wrap the bar                               |
| barProgWrapFn    | nothing                           | function to wrap the 'complete' segment of the bar     |
| barCurrentWrapFn | nothing                           | function to wrap the 'current' segment of the bar      |
| barEmptyWrapFn   | nothing                           | function to wrap the empty/track part of the line      |
| showCount        | `true`                            | Show numerical values of the count - `[11 / 15]`       |
| showPercent      | `false`                           | Show percentage completed - `( 69%)`                   |
| countWidth       | `0`                               | Min width of nums for showCount - `3` => `[˽˽1 / ˽15]` |
| progChar         | `'█'`                             | Character to use for progress section of bar           |
| emptyChar        | `' '`                             | Character to use for empty (rail) section of bar       |
| startChar        | `'▕'`                             | Character to start the progress bar with               |
| endChar          | `'▏'`                             | Character to end the progress bar with                 |
| showCurrent      | `'▏'`                             | Show the 'current' segment of the bar seperately       |
| currentChar      | `'▏'`                             | Character to use the the 'current' segment             |

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getProgressBar
- `getProgressBar`
- `progressBar.getProgressBar`

Usage:
```typescript
import chalk from 'chalk'
import {getProgressBar} from 'swiss-ak';

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### update
- `getProgressBar().update`

Trigger the progress bar to update/rerender

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### next
- `getProgressBar().next`

Set the progress bar to the next value

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### set
- `getProgressBar().set`

Set the progress bar to a specific value

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### reset
- `getProgressBar().reset`

Set the progress bar to 0

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### start
- `getProgressBar().start`

Start displaying the progress bar

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### finish
- `getProgressBar().finish`

Stop displaying the progress bar

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## symbols
- `symbols`

A series of characters that can be used for display symbols

| Name                    |                                   | Symbol |
| :---------------------- | :-------------------------------- | :----: |
| TAB                     | `symbols.TAB`                     |  ` `   |
| TICK                    | `symbols.TICK`                    |   ✔    |
| CROSS                   | `symbols.CROSS`                   |   ✖    |
| PLUS                    | `symbols.PLUS`                    |   +    |
| MINUS                   | `symbols.MINUS`                   |   -    |
| TIMES                   | `symbols.TIMES`                   |   ×    |
| DIVIDE                  | `symbols.DIVIDE`                  |   ÷    |
| ELLIPSIS                | `symbols.ELLIPSIS`                |   …    |
| BULLET                  | `symbols.BULLET`                  |   •    |
| EJECT                   | `symbols.EJECT`                   |   ⏏    |
| TILDE                   | `symbols.TILDE`                   |   ~    |
| HOME                    | `symbols.HOME`                    |   ~    |
| CHEV_LFT                | `symbols.CHEV_LFT`                |   ‹    |
| CHEV_RGT                | `symbols.CHEV_RGT`                |   ›    |
| TRI_UPP                 | `symbols.TRI_UPP`                 |   ▲    |
| TRI_DWN                 | `symbols.TRI_DWN`                 |   ▼    |
| TRI_RGT                 | `symbols.TRI_RGT`                 |   ▶    |
| TRI_LFT                 | `symbols.TRI_LFT`                 |   ◀    |
| ARROW_UPP               | `symbols.ARROW_UPP`               |   ↑    |
| ARROW_DWN               | `symbols.ARROW_DWN`               |   ↓    |
| ARROW_RGT               | `symbols.ARROW_RGT`               |   →    |
| ARROW_LFT               | `symbols.ARROW_LFT`               |   ←    |
| ARROW_UPP_RGT           | `symbols.ARROW_UPP_RGT`           |   ↗    |
| ARROW_DWN_RGT           | `symbols.ARROW_DWN_RGT`           |   ↘    |
| ARROW_DWN_LFT           | `symbols.ARROW_DWN_LFT`           |   ↙    |
| ARROW_UPP_LFT           | `symbols.ARROW_UPP_LFT`           |   ↖    |
| ARROW_STILL             | `symbols.ARROW_STILL`             |   •    |
| ARROW_FLIP_H            | `symbols.ARROW_FLIP_H`            |   ↔    |
| ARROW_FLIP_V            | `symbols.ARROW_FLIP_V`            |   ↕    |
| ARROW_ROTATE_UPP        | `symbols.ARROW_ROTATE_UPP`        |   ⤴    |
| ARROW_ROTATE_DWN        | `symbols.ARROW_ROTATE_DWN`        |   ⤵    |
| ARROW_ROTATE_LFT        | `symbols.ARROW_ROTATE_LFT`        |   ⤶    |
| ARROW_ROTATE_RGT        | `symbols.ARROW_ROTATE_RGT`        |   ⤷    |
| ARROW_ROTATE_CLOCK      | `symbols.ARROW_ROTATE_CLOCK`      |   ↻    |
| ARROW_ROTATE_ANTI_CLOCK | `symbols.ARROW_ROTATE_ANTI_CLOCK` |   ↺    |
| FRACTION_1_4            | `symbols.FRACTION_1_4`            |   ¼    |
| FRACTION_1_2            | `symbols.FRACTION_1_2`            |   ½    |
| FRACTION_3_4            | `symbols.FRACTION_3_4`            |   ¾    |
| SUPERSCRIPT             | `symbols.SUPERSCRIPT['1']`        |   ¹    |
|                         | `symbols.SUPERSCRIPT['2']`        |   ²    |
|                         | `symbols.SUPERSCRIPT['3']`        |   ³    |
|                         | `symbols.SUPERSCRIPT['4']`        |   ⁴    |
|                         | `symbols.SUPERSCRIPT['5']`        |   ⁵    |
|                         | `symbols.SUPERSCRIPT['6']`        |   ⁶    |
|                         | `symbols.SUPERSCRIPT['7']`        |   ⁷    |
|                         | `symbols.SUPERSCRIPT['8']`        |   ⁸    |
|                         | `symbols.SUPERSCRIPT['9']`        |   ⁹    |
|                         | `symbols.SUPERSCRIPT['0']`        |   ⁰    |
|                         | `symbols.SUPERSCRIPT['-']`        |   ⁻    |
|                         | `symbols.SUPERSCRIPT['+']`        |   ⁺    |
|                         | `symbols.SUPERSCRIPT['=']`        |   ⁼    |
|                         | `symbols.SUPERSCRIPT['(']`        |   ⁽    |
|                         | `symbols.SUPERSCRIPT[')']`        |   ⁾    |
|                         | `symbols.SUPERSCRIPT['i']`        |   ⁱ    |
|                         | `symbols.SUPERSCRIPT['n']`        |   ⁿ    |
|                         | `symbols.SUPERSCRIPT['o']`        |   °    |
|                         | `symbols.SUPERSCRIPT['*']`        |   °    |

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### superscript
- `superscript`

Converts a number to superscript

```typescript
superscript(219) // '²¹⁹'
superscript(1234567890) // '¹²³⁴⁵⁶⁷⁸⁹⁰'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## queue
A way of managing queues from different parts of the code.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### QueueManager
- `QueueManager`

Allows you to queue up functions to be executed in order.

Importantly, it allows you to add to the queue from another part of the code, without needing to access a promise directly.

```typescript
const printDocument = async (id: number) => {
  // do something
  await wait(seconds(5));
}

const queue = new QueueManager();

const start = Date.now();

// happening async/concurrently
PromiseTools.each(range(5), async (i) => {
  await wait(seconds(Math.random() * 1));
  console.log(Date.now() - start, ' - trigger:', i, );
  await queue.add('printer', () => printDocument(i))
  console.log(Date.now() - start, ' - printed:', i);
})

// Output:

// 184 ' - trigger:' 0
// 355 ' - trigger:' 2
// 435 ' - trigger:' 4
// 448 ' - trigger:' 1
// 487 ' - trigger:' 3
// 5190 ' - printed:' 0
// 10195 ' - printed:' 2
// 15200 ' - printed:' 4
// 20205 ' - printed:' 1
// 25208 ' - printed:' 3
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### setDefaultPauseTime
- `queue.setDefaultPauseTime`
- `new QueueManager().setDefaultPauseTime`

Sets the default pause time for pauses between queue items.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### setPauseTime
- `queue.setPauseTime`
- `new QueueManager().setPauseTime`

Sets the pause time for pauses between queue items for the specified queue.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### add
- `queue.add`
- `new QueueManager().add`

Adds a function to the queue.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### new
- `queue.new`
- `new QueueManager().new`

Creates a new QueueManager instance.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### queue
- `queue`

An instance of QueueManager

See QueueManager for more information.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## timer
A debug tool for measuring the duration of code blocks.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getTimer
- `getTimer`

Usage:
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
	Action 1: 4s
	Action 2: 6s
	⎯⎯⎯⎯⎯⎯⎯
	TOTAL:    10s
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### timer
- `timer`

Global timer

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## Helper Types
Some commonly used types

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### Partial<T>
- `Partial`

Makes all properties in T optional.

```typescript
interface ITest {
  a: string,
  b: boolean
};
type PartialTest = Partial<ITest>; // { a?: string, b?: boolean }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### KeysOnly<T>
- `KeysOnly`

Makes all the values equal to the keys of T

```typescript
interface ITest {
  a: string,
  b: boolean
};
type KeysOnlyTest = KeysOnly<ITest>; // { a: 'a', b: 'b' }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### Numbered<T>
- `Numbered`

Makes all the values numbers

```typescript
interface ITest {
  a: string,
  b: boolean
};
type NumberedTest = Numbered<ITest>; // { a: number, b: number }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### OfType<T, U>
- `OfType`

Makes all the properties of object T have type U

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### ObjOfType<T>
- `ObjOfType`

An object with any properties of type T

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### ObjOfType<T>
- `ObjOfType`

An object with any properties of type T

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

<!-- DOCS: MAIN END -->

# Notes

> These are used in non-vital personal projects and scripts.

> Need to be better tested before being used in prod.

> Failing/erroring/rejected promises may not behave as expected.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>
