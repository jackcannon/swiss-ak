# swiss-ak (Swiss Army Knife)

A collection of useful little things that I like to reuse across projects

<!-- DOCS: TOC START -->

  - [Table of Contents](#swiss-ak-swiss-army-knife)
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
      - [fixFloat](#fixfloat)
      - [addAll](#addall)
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
      - [round](#round)
        - [floorTo](#floorto)
        - [roundTo](#roundto)
        - [ceilTo](#ceilto)
      - [lerp](#lerp)
      - [lerpArray](#lerparray)
      - [lerpObj](#lerpobj)
      - [clamp](#clamp)
    - [ArrayUtils](#arrayutils)
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
    - [ObjectUtils](#objectutils)
      - [remodel](#remodel)
      - [remodelEach](#remodeleach)
      - [map](#map)
      - [mapValues](#mapvalues)
      - [mapKeys](#mapkeys)
      - [filter](#filter)
      - [clean](#clean)
    - [StringUtils](#stringutils)
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
    - [PromiseUtils](#promiseutils)
      - [getDeferred](#getdeferred)
      - [all](#all)
      - [allLimit](#alllimit)
      - [each](#each)
      - [eachLimit](#eachlimit)
      - [map](#map)
      - [mapLimit](#maplimit)
      - [allObj](#allobj)
      - [allLimitObj](#alllimitobj)
    - [ColourUtils](#colourutils)
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
    - [TimeUtils](#timeutils)
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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## fn
A collection of useful higher-order functions.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### noop
- `fn.noop`

No operation. Do nothing, return nothing.

```typescript
const run = condition ? doSomething : fn.noop;
run();
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### noact
- `fn.noact`

No action. Returns the first argument it receives.

```typescript
const items = stuff
  .map(condition ? mapSomething : fn.noact)
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### result
- `fn.result`

Returns a function that returns a function that returns the first argument.

```typescript
const items = stuff
  .filter(condition ? mapSomething : fn.result(true))
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### resolve
- `fn.resolve`

Returns an async function that resolves to the first argument

Like fn.result, but wrapped in a Promise

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### reject
- `fn.reject`

Returns an async function that rejects with the first argument

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### fixFloat
- `fn.fixFloat`

Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers

```typescript
0.1 + 0.2 // 0.30000000000000004
fixFloat(0.1 + 0.2) // 0.3
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### addAll
- `fn.addAll`

Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max

```typescript
addAll(1, 2, 3, 4, 5); // 15
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### filters

#### exists
- `fn.exists`
- `fn.filters.exists`

Returns true if item isn't null or undefined.

```typescript
[null, 1, undefined, 2].filter(fn.exists); // [1, 2]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### isTruthy
- `fn.isTruthy`
- `fn.filters.isTruthy`

Returns true if item is truthy.

```typescript
[0, 1, 2].filter(fn.isTruthy); // [1, 2]
['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### isFalsy
- `fn.isFalsy`
- `fn.filters.isFalsy`

Returns true if item is falsy.

```typescript
[0, 1, 2].filter(fn.isFalsy); // [0]
['', 'a', 'b'].filter(fn.isFalsy); // ['']
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### isEmpty
- `fn.isEmpty`
- `fn.filters.isEmpty`

Returns true if item's length is 0

```typescript
['', 'a', 'b'].filter(fn.isEmpty); // ['']
[[], [1], [2]].filter(fn.isEmpty); // [[]]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### isNotEmpty
- `fn.isNotEmpty`
- `fn.filters.isNotEmpty`

Returns true if item's length is 1 or more

```typescript
['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
[[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### isEqual
- `fn.isEqual`
- `fn.filters.isEqual`

Returns a function that returns true if the item is equal to provided value.

```typescript
[0, 1, 2].filter(fn.isEqual(1)); // [1]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### isNotEqual
- `fn.isNotEqual`
- `fn.filters.isNotEqual`

Returns a function that returns true if the item is not equal to provided value.

```typescript
[0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### dedupe
- `fn.dedupe`
- `fn.filters.dedupe`

Removes duplicate items from an array.

```typescript
[0, 1, 2, 1, 0].filter(fn.dedupe); // [0, 1, 2]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### dedupeMapped
- `fn.dedupeMapped`
- `fn.filters.dedupeMapped`

Removes duplicate items from an array based on a mapped value.

```typescript
[2, 4, 6, 8, 10, 12].filter(fn.dedupeMapped((v) => v % 3)); // [ 2, 4, 6 ] (maps to [ 2, 1, 0, 2, 1, 0 ])
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### maps

#### toString
- `fn.toString`
- `fn.maps.toString`

Maps the item to a string.

```typescript
[0, 1, 2].map(fn.toString); // ['0', '1', '2']
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toNumber
- `fn.toNumber`
- `fn.maps.toNumber`

Maps the item to a number.

```typescript
['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toBool
- `fn.toBool`
- `fn.maps.toBool`

Maps the item to a boolean.

```typescript
[0, 1, 2].map(fn.toBool); // [false, true, true]
['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toProp
- `fn.toProp`
- `fn.maps.toProp`

Maps the item to a given property of the item

```typescript
[{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toFixed
- `fn.toFixed`
- `fn.maps.toFixed`

Map the items (numbers) of an array to a fixed precision.

```typescript
[1.234, 5.678, 9.012].map(fn.toFixed(2)); // [1.23, 5.68, 9.01]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### sorts

#### asc
- `fn.asc`
- `fn.sorts.asc`

Sort ascending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### desc
- `fn.desc`
- `fn.sorts.desc`

Sort descending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### byProp
- `fn.byProp`
- `fn.sorts.byProp`

Sort by a given property.

```typescript
const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### nearestTo
- `fn.nearestTo`
- `fn.sorts.nearestTo`

Sort by the nearest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### furthestFrom
- `fn.furthestFrom`
- `fn.sorts.furthestFrom`

Sort by the furthest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### arrayAsc
- `fn.arrayAsc`
- `fn.sorts.arrayAsc`

Sort an array of arrays in ascending order

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### arrayDesc
- `fn.arrayDesc`
- `fn.sorts.arrayDesc`

Sort an array of arrays in descending order

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### reduces

#### combine
- `fn.combine`
- `fn.reduces.combine`

Adds or concats the items

```typescript
[1, 2, 3].reduce(fn.combine); // 6
['a', 'b', 'c'].reduce(fn.combine); // 'abc'
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### combineProp
- `fn.combineProp`
- `fn.reduces.combineProp`

Adds or concats the given property of the items

```typescript
const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
people.reduce(fn.combineProp('age')); // 6
people.reduce(fn.combineProp('name')); // 'abc'
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### mode
- `fn.mode`
- `fn.reduces.mode`

Returns the most common value in an array.

```typescript
[1, 2, 3, 2, 1, 1].reduce(fn.mode); // 1
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### modeMapped
- `fn.modeMapped`
- `fn.reduces.modeMapped`

Returns the most common value in an array, based on a given map function.

```typescript
[2, 4, 6, 8, 9, 12].reduce(fn.modeMapped((v) => v % 3)); // 6 (maps to [ 2, 1, 0, 2, 0, 0 ])
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### everys

#### isAllEqual
- `fn.isAllEqual`
- `fn.everys.isAllEqual`

Returns if all the items are equal to one another.

```typescript
[1, 1, 1].every(fn.isAllEqual); // true
[1, 2, 1].every(fn.isAllEqual); // false
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### round

#### floorTo
- `fn.floorTo`
- `fn.round.floorTo`

Floors a number down to the nearest multiple of the given number.

```typescript
fn.round.floorTo(10, 102); // 100
fn.round.floorTo(5, 53); // 50
fn.round.floorTo(0.1, 0.25); // 0.2
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### roundTo
- `fn.round.to`
- `fn.roundTo`
- `fn.round.roundTo`

Floors a number down to the nearest multiple of the given number.

```typescript
fn.round.to(10, 102); // 100
fn.round.to(5, 53); // 55
fn.round.to(0.1, 0.25); // 0.3
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### ceilTo
- `fn.ceilTo`
- `fn.round.ceilTo`

Floors a number down to the nearest multiple of the given number.

```typescript
fn.round.ceilTo(10, 102); // 110
fn.round.ceilTo(5, 53); // 55
fn.round.ceilTo(0.1, 0.25); // 0.3
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### lerp
- `fn.lerp`

Linearly interpolates between two values.

```typescript
fn.lerp(0.5, 0, 10); // 5
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### lerpArray
- `fn.lerpArray`

Linearly interpolates between the values of 2 arrays.

```typescript
fn.lerpArray(0.5, [0, 0, 0], [10, 100, 1000]) // [5, 50, 500]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### lerpObj
- `fn.lerpObj`

Linearly interpolates between the values of 2 arrays.

```typescript
fn.lerpObj(0.5, {'ARS': 0, 'CHE': 0, 'FUL': 0}, {'ARS': 100, 'CHE': 10, 'FUL': 20}) // {'ARS': 50, 'CHE': 5, 'FUL': 10}
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### clamp
- `fn.clamp`

Clamps a value between a min and max.

```typescript
fn.clamp(5, 0, 10); // 5
fn.clamp(-5, 0, 10); // 0
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## ArrayUtils
A collection of useful array functions.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### range
- `range`
- `ArrayUtils.range`

Returns an array of the given length, where each value is equal to it's index
e.g. [0, 1, 2, ..., length]

```typescript
ArrayUtils.range(3);  // [0, 1, 2]
ArrayUtils.range(5);  // [0, 1, 2, 3, 4]
ArrayUtils.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

ArrayUtils.range(3, 2);  // [0, 2, 4]
ArrayUtils.range(5, 2);  // [0, 2, 4, 6, 8]
ArrayUtils.range(10, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### zip
- `zip`
- `ArrayUtils.zip`

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Limited to the length of the shortest provided array

Inspired by python's 'zip'

```typescript
ArrayUtils.zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### zipMax
- `zipMax`
- `ArrayUtils.zipMax`

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Unlike `zip`, it will match the length of the longest provided array, filling in any missing values with `undefined`

Inspired by python's 'zip'

```typescript
ArrayUtils.zipMax([1, 2, 3, 4], ['a', 'b', 'c']); //[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, undefined ] ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### sortByMapped
- `sortByMapped`
- `ArrayUtils.sortByMapped`

Sort an array by a mapped form of the values, but returning the initial values

```typescript
ArrayUtils.sortByMapped(['2p', '3p', '1p'], (v) => Number(v.replace('p', ''))); // ['1p', '2p', '3p']
ArrayUtils.sortByMapped(
  ['2p', '3p', '1p'],
  (v) => Number(v.replace('p', '')),
  (a, b) => b - a
); // ['3p', '2p', '1p']
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### randomise
- `randomise`
- `ArrayUtils.randomise`

Returns a clone of the provided array with it's items in a random order

```typescript
ArrayUtils.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
ArrayUtils.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
ArrayUtils.randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
ArrayUtils.randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
ArrayUtils.randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### reverse
- `reverse`
- `ArrayUtils.reverse`

Returns a new array with the order reversed without affecting original array

```typescript
const arr1 = [1, 2, 3];
arr1            // [1, 2, 3]
arr1.reverse(); // [3, 2, 1]
arr1            // [3, 2, 1]

const arr2 = [1, 2, 3];
arr2            // [1, 2, 3]
ArrayUtils.reverse(arr2);  // [3, 2, 1]
arr2            // [1, 2, 3]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### entries
- `entries`
- `ArrayUtils.entries`

Returns array of 'tuples' of index/value pairs

```typescript
const arr = ['a', 'b', 'c'];
ArrayUtils.entries(arr); // [ [0, 'a'], [1, 'b'], [2, 'c'] ]

for (let [index, value] of entries(arr)) {
 console.log(index); // 0, 1, 2
 console.log(value); // 'a', 'b', 'c'
}
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### repeat
- `repeat`
- `ArrayUtils.repeat`

Returns an array with the given items repeated

```typescript
ArrayUtils.repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
ArrayUtils.repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### roll
- `roll`
- `ArrayUtils.roll`

'Roll' the array by a given amount so that is has a new first item. Length and contents remain the same, but the order is changed

```typescript
ArrayUtils.roll(1, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7, 0 ]
ArrayUtils.roll(4, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 4, 5, 6, 7, 0, 1, 2, 3 ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### sortNumberedText
- `sortNumberedText`
- `ArrayUtils.sortNumberedText`

Alphabetically sorts a list of strings, but keeps multi-digit numbers in numerical order (rather than alphabetical)

```typescript
const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
names.sort(); // [ 'foo10', 'foo20', 'foo9', 'name1', 'name10', 'name2' ]
ArrayUtils.sortNumberedText(names); // [ 'foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10' ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### partition
- `partition`
- `ArrayUtils.partition`

Breaks an array into smaller arrays of a given size

```typescript
ArrayUtils.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### groupObj
- `groupObj`
- `ArrayUtils.groupObj`

Group items from an array into an object of arrays, based on a given map function.

```typescript
const arr = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 1, name: 'c' },
];
ArrayUtils.groupObj(arr, item => item.id); // {
//   1: [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
//   2: [ { group: 2, name: 'b' } ]
// }
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### group
- `group`
- `ArrayUtils.group`

Group items from an array into an array of arrays, based on a given map function.

```typescript
const arr = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 1, name: 'c' },
];
ArrayUtils.groupObj(arr, item => item.id); // [
//   [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
//   [ { group: 2, name: 'b' } ]
// ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## ObjectUtils
A collection of functions for working with objects

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### remodel
- `ObjectUtils.remodel`

Apply a function to the entries of an object

```typescript
const input = {'foo': 2, 'bar': 1, 'baz': 4}
ObjectUtils.remodel(input, (entries) => entries.filter(([k, v]) => v % 2 === 0)) // { foo: 2, baz: 4 }
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### remodelEach
- `ObjectUtils.remodelEach`

Apply a function to each of the entries of an object

Note: similar to ObjectUtils.map, but the function parameters are different. Prefer ObjectUtils.map where possible.

```typescript
const input = {'foo': 2, 'bar': 1, 'baz': 4}
ObjectUtils.remodelEach(input, ([k, v]) => [k, v * 2]) // { foo: 4, bar: 2, baz: 8 }
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### map
- `ObjectUtils.map`

Maps the keys and values of an object in a similar way to Array.map

```typescript
ObjectUtils.map({a: 1, b: 2, c: 3}, (key, value) => [key, key + value]); // {a: 'a1', b: 'b2', c: 'c3'}
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### mapValues
- `ObjectUtils.mapValues`

Maps the values of an object in a similar way to Array.map

```typescript
ObjectUtils.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### mapKeys
- `ObjectUtils.mapKeys`

Maps the values of an object in a similar way to Array.map

```typescript
ObjectUtils.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### filter
- `ObjectUtils.filter`

Removes entries from an object based on a predicate function

```typescript
ObjectUtils.filter({a: 1, b: 2, c: 3}, (k, v) => v % 2 === 0) // { b: 2 }
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### clean
- `ObjectUtils.clean`

Removes properties with undefined values

```typescript
ObjectUtils.clean({a: 1, b: undefined, c: 3}) // { a: 1, c: 3 }
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## StringUtils
A collection of string utilities

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### capitalise
- `StringUtils.capitalise`

Capitalises the first letter of each word in a string

```typescript
StringUtils.capitalise('hello world'); // 'Hello World'
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### angloise
- `StringUtils.angloise`

Remove accents from a string

```typescript
StringUtils.angloise('éèêë'); // 'eeee'
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### clean
- `StringUtils.clean`

Remove accents and non alphanumerics from a string

```typescript
StringUtils.clean('éèêë_--ab0'); // 'eeeeab0'
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### StringCaseHandler

#### toLowerCamelCase
- `StringUtils.toLowerCamelCase`
- `StringUtils.fromSlugCase.toLowerCamelCase`
- `StringUtils.fromSnakeCase.toLowerCamelCase`
- `StringUtils.fromSpaced.toLowerCamelCase`
- `StringUtils.fromCamelCase.toLowerCamelCase`

Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toUpperCamelCase
- `StringUtils.toUpperCamelCase`
- `StringUtils.fromSlugCase.toUpperCamelCase`
- `StringUtils.fromSnakeCase.toUpperCamelCase`
- `StringUtils.fromSpaced.toUpperCamelCase`
- `StringUtils.fromCamelCase.toUpperCamelCase`

Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toCamelCase
- `StringUtils.toCamelCase`
- `StringUtils.fromSlugCase.toCamelCase`
- `StringUtils.fromSnakeCase.toCamelCase`
- `StringUtils.fromSpaced.toCamelCase`
- `StringUtils.fromCamelCase.toCamelCase`

Convert a string to camel case (e.g. `thisIsCamelCase`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toLowerSlugCase
- `StringUtils.toLowerSlugCase`
- `StringUtils.fromSlugCase.toLowerSlugCase`
- `StringUtils.fromSnakeCase.toLowerSlugCase`
- `StringUtils.fromSpaced.toLowerSlugCase`
- `StringUtils.fromCamelCase.toLowerSlugCase`

Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toUpperSlugCase
- `StringUtils.toUpperSlugCase`
- `StringUtils.fromSlugCase.toUpperSlugCase`
- `StringUtils.fromSnakeCase.toUpperSlugCase`
- `StringUtils.fromSpaced.toUpperSlugCase`
- `StringUtils.fromCamelCase.toUpperSlugCase`

Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toSlugCase
- `StringUtils.toSlugCase`
- `StringUtils.fromSlugCase.toSlugCase`
- `StringUtils.fromSnakeCase.toSlugCase`
- `StringUtils.fromSpaced.toSlugCase`
- `StringUtils.fromCamelCase.toSlugCase`

Convert a string to camel case (e.g. `this-is-slug-case`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toLowerSnakeCase
- `StringUtils.toLowerSnakeCase`
- `StringUtils.fromSlugCase.toLowerSnakeCase`
- `StringUtils.fromSnakeCase.toLowerSnakeCase`
- `StringUtils.fromSpaced.toLowerSnakeCase`
- `StringUtils.fromCamelCase.toLowerSnakeCase`

Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toUpperSnakeCase
- `StringUtils.toUpperSnakeCase`
- `StringUtils.fromSlugCase.toUpperSnakeCase`
- `StringUtils.fromSnakeCase.toUpperSnakeCase`
- `StringUtils.fromSpaced.toUpperSnakeCase`
- `StringUtils.fromCamelCase.toUpperSnakeCase`

Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toSnakeCase
- `StringUtils.toSnakeCase`
- `StringUtils.fromSlugCase.toSnakeCase`
- `StringUtils.fromSnakeCase.toSnakeCase`
- `StringUtils.fromSpaced.toSnakeCase`
- `StringUtils.fromCamelCase.toSnakeCase`

Convert a string to snake case (e.g. `this_is_snake_case`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toLowerSpaced
- `StringUtils.toLowerSpaced`
- `StringUtils.fromSlugCase.toLowerSpaced`
- `StringUtils.fromSnakeCase.toLowerSpaced`
- `StringUtils.fromSpaced.toLowerSpaced`
- `StringUtils.fromCamelCase.toLowerSpaced`

Convert a string to lower spaced case (e.g. `this is lower spaced case`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toUpperSpaced
- `StringUtils.toUpperSpaced`
- `StringUtils.fromSlugCase.toUpperSpaced`
- `StringUtils.fromSnakeCase.toUpperSpaced`
- `StringUtils.fromSpaced.toUpperSpaced`
- `StringUtils.fromCamelCase.toUpperSpaced`

Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toCapitalisedSpaced
- `StringUtils.toCapitalisedSpaced`
- `StringUtils.fromSlugCase.toCapitalisedSpaced`
- `StringUtils.fromSnakeCase.toCapitalisedSpaced`
- `StringUtils.fromSpaced.toCapitalisedSpaced`
- `StringUtils.fromCamelCase.toCapitalisedSpaced`

Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toSpaced
- `StringUtils.toSpaced`
- `StringUtils.fromSlugCase.toSpaced`
- `StringUtils.fromSnakeCase.toSpaced`
- `StringUtils.fromSpaced.toSpaced`
- `StringUtils.fromCamelCase.toSpaced`

Convert a string to spaced case (e.g. `this is spaced case`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### toCharacterSeparated
- `StringUtils.toCharacterSeparated`
- `StringUtils.fromSlugCase.toCharacterSeparated`
- `StringUtils.fromSnakeCase.toCharacterSeparated`
- `StringUtils.fromSpaced.toCharacterSeparated`
- `StringUtils.fromCamelCase.toCharacterSeparated`

Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### fromSlugCase
Has the following methods:
- `StringUtils.fromSlugCase.toLowerCamelCase`
- `StringUtils.fromSlugCase.toUpperCamelCase`
- `StringUtils.fromSlugCase.toCamelCase`
- `StringUtils.fromSlugCase.toLowerSlugCase`
- `StringUtils.fromSlugCase.toUpperSlugCase`
- `StringUtils.fromSlugCase.toSlugCase`
- `StringUtils.fromSlugCase.toLowerSnakeCase`
- `StringUtils.fromSlugCase.toUpperSnakeCase`
- `StringUtils.fromSlugCase.toSnakeCase`
- `StringUtils.fromSlugCase.toLowerSpaced`
- `StringUtils.fromSlugCase.toUpperSpaced`
- `StringUtils.fromSlugCase.toCapitalisedSpaced`
- `StringUtils.fromSlugCase.toSpaced`
- `StringUtils.fromSlugCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### fromSnakeCase
Has the following methods:
- `StringUtils.fromSnakeCase.toLowerCamelCase`
- `StringUtils.fromSnakeCase.toUpperCamelCase`
- `StringUtils.fromSnakeCase.toCamelCase`
- `StringUtils.fromSnakeCase.toLowerSlugCase`
- `StringUtils.fromSnakeCase.toUpperSlugCase`
- `StringUtils.fromSnakeCase.toSlugCase`
- `StringUtils.fromSnakeCase.toLowerSnakeCase`
- `StringUtils.fromSnakeCase.toUpperSnakeCase`
- `StringUtils.fromSnakeCase.toSnakeCase`
- `StringUtils.fromSnakeCase.toLowerSpaced`
- `StringUtils.fromSnakeCase.toUpperSpaced`
- `StringUtils.fromSnakeCase.toCapitalisedSpaced`
- `StringUtils.fromSnakeCase.toSpaced`
- `StringUtils.fromSnakeCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### fromSpaced
Has the following methods:
- `StringUtils.fromSpaced.toLowerCamelCase`
- `StringUtils.fromSpaced.toUpperCamelCase`
- `StringUtils.fromSpaced.toCamelCase`
- `StringUtils.fromSpaced.toLowerSlugCase`
- `StringUtils.fromSpaced.toUpperSlugCase`
- `StringUtils.fromSpaced.toSlugCase`
- `StringUtils.fromSpaced.toLowerSnakeCase`
- `StringUtils.fromSpaced.toUpperSnakeCase`
- `StringUtils.fromSpaced.toSnakeCase`
- `StringUtils.fromSpaced.toLowerSpaced`
- `StringUtils.fromSpaced.toUpperSpaced`
- `StringUtils.fromSpaced.toCapitalisedSpaced`
- `StringUtils.fromSpaced.toSpaced`
- `StringUtils.fromSpaced.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### fromCamelCase
Has the following methods:
- `StringUtils.fromCamelCase.toLowerCamelCase`
- `StringUtils.fromCamelCase.toUpperCamelCase`
- `StringUtils.fromCamelCase.toCamelCase`
- `StringUtils.fromCamelCase.toLowerSlugCase`
- `StringUtils.fromCamelCase.toUpperSlugCase`
- `StringUtils.fromCamelCase.toSlugCase`
- `StringUtils.fromCamelCase.toLowerSnakeCase`
- `StringUtils.fromCamelCase.toUpperSnakeCase`
- `StringUtils.fromCamelCase.toSnakeCase`
- `StringUtils.fromCamelCase.toLowerSpaced`
- `StringUtils.fromCamelCase.toUpperSpaced`
- `StringUtils.fromCamelCase.toCapitalisedSpaced`
- `StringUtils.fromCamelCase.toSpaced`
- `StringUtils.fromCamelCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## PromiseUtils
A collection of promise utilities

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### getDeferred
- `getDeferred`
- `PromiseUtils.getDeferred`

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### all
- `all`
- `PromiseUtils.all`

An alias for Promise.all

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### allLimit
- `allLimit`
- `PromiseUtils.allLimit`

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### each
- `each`
- `PromiseUtils.each`

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### eachLimit
- `eachLimit`
- `PromiseUtils.eachLimit`

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### map
- `map`
- `PromiseUtils.map`

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### mapLimit
- `mapLimit`
- `PromiseUtils.mapLimit`

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### allObj
- `allObj`
- `PromiseUtils.allObj`

Like Promise.all, but pass/receive objects rather than arrays

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### allLimitObj
- `allLimitObj`
- `PromiseUtils.allLimitObj`

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## ColourUtils
A collection of functions for working with colours.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### ColourValues
- `ColourUtils.ColourValues`

A type with 3 numbers:
- red [0-255]
- green [0-255]
- blue [0-255]

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### HSLValues
- `ColourUtils.HSLValues`

A type with 3 numbers:
- hue [0-360]
- saturation [0-100]
- lightness [0-100]

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### namedColours
- `ColourUtils.namedColours`

A dictionary of different colour names and their RGB values

```typescript
ColourUtils.namedColours.blue // [0, 0, 255]
ColourUtils.namedColours.red // [255, 0, 0]
ColourUtils.namedColours.green // [0, 255, 0]

ColourUtils.namedColours.azure // [240, 255, 255]
ColourUtils.namedColours.darkorange // [255, 140, 0]
ColourUtils.namedColours.dodgerblue // [30, 144, 255]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### parse
- `ColourUtils.parse`

Parse a string into a colour object (RGB array)
Not extensive. Currently limited to:
- 3 char hexes
- 6 char hexes
- comma separated RGB values
- named colours (from namedColours dictionary)

```typescript
ColourUtils.parse('#FF0000') // [255, 0, 0]
ColourUtils.parse('rgb(255, 0, 0)') // [255, 0, 0]
ColourUtils.parse('red') // [255, 0, 0]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### toHex
- `ColourUtils.toHex`

Convert a colour object (RGB array) to a hex string

```typescript
ColourUtils.toHex([255, 0, 0]) // '#FF0000'
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### getLuminance
- `ColourUtils.getLuminance`

IMPORTANT: This is not the same as the HSL luminance value.

Get the luminance value of a given colour.

Between 0 and 255. Calculated using the formula:
 (RED × 0.299) + (GREEN × 0.587) + (BLUE × 0.114)

Is the Y (Luma) component of the YUV444 color model.

```typescript
ColourUtils.getLuminance([255, 0, 0]); // 76.245
ColourUtils.getLuminance([0, 255, 0]); // 149.685
ColourUtils.getLuminance([0, 0, 255]); // 29.07
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### toYUV
- `ColourUtils.toYUV`

Convert a colour object (RGB array) to a YUV array.

See https://en.wikipedia.org/wiki/YUV#Y%E2%80%B2UV444_to_RGB888_conversion

```typescript
ColourUtils.toYUV([255, 0, 0]); // [76.245, 112.439, -38.094]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### toHSL
- `ColourUtils.toHSL`

Convert a RGB array to a HSL array.

Adapted from https://www.30secondsofcode.org/js/s/rgb-to-hsl

```typescript
ColourUtils.toHSL([255, 0, 0]); // [0, 100, 50]
ColourUtils.toHSL([0, 255, 0]); // [120, 100, 50]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### fromHSL
- `ColourUtils.fromHSL`

Convert a HSL array to a RGB array.

Adapted from https://www.30secondsofcode.org/js/s/hsl-to-rgb

```typescript
ColourUtils.fromHSL([0, 100, 50]); // [255, 0, 0]
ColourUtils.fromHSL([120, 100, 50]); // [0, 255, 0]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### invertColour
- `ColourUtils.invertColour`

Get the opposite colour of a given colour.

```typescript
ColourUtils.invertColour([255, 0, 0]); // [0, 255, 255]
ColourUtils.invertColour([0, 255, 0]); // [ 255, 0, 255 ]
ColourUtils.invertColour([0, 0, 255]); // [ 255, 255, 0 ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### getContrastedColour
- `ColourUtils.getContrastedColour`

Get the colour that contrasts the most with a given colour. (White or black)

Returned colour can be used as a text colour on top of the provided colour

```typescript
ColourUtils.getContrastedColour([255, 0, 0]); // [255, 255, 255]
ColourUtils.getContrastedColour([255, 255, 0]); // [0, 0, 0]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### getLimitedColour
- `ColourUtils.getLimitedColour`

Adjust a colour if a certain condition is met.
Used for lightening/darkening colours that are too light/dark

All values in functions are HSL

```typescript
ColourUtils.getLimitedColour([255, 255, 255], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 230, 230, 230 ]
ColourUtils.getLimitedColour([128, 128, 128], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 128, 128, 128 ]
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## TimeUtils
A collection of time-related utility functions.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### toReadableDuration
- `TimeUtils.toReadableDuration`

Converts a duration in milliseconds to a human readable string.

```typescript
TimeUtils.toReadableDuration(20); // '20ms'
TimeUtils.toReadableDuration(seconds(59)); // '59s'
TimeUtils.toReadableDuration(seconds(60)); // '1m'
TimeUtils.toReadableDuration(hours(23)); // '23h'
TimeUtils.toReadableDuration(hours(24)); // '1d'
TimeUtils.toReadableDuration(days(10)); // '10d'

TimeUtils.toReadableDuration(20, true) // '20 milliseconds'
TimeUtils.toReadableDuration(seconds(59), true) // '59 seconds'
TimeUtils.toReadableDuration(seconds(60), true) // '1 minute'
TimeUtils.toReadableDuration(hours(23), true) // '23 hours'
TimeUtils.toReadableDuration(hours(24), true) // '1 day'
TimeUtils.toReadableDuration(days(10), true) // '10 days'

const realisticDuration = days(10) + hours(2) + seconds(31) + 512; // 871231512
TimeUtils.toReadableDuration(realisticDuration, true, 4) // '10 days, 2 hours, 31 seconds & 512 milliseconds'
TimeUtils.toReadableDuration(realisticDuration, true) // '10 days, 2 hours & 31 seconds'
TimeUtils.toReadableDuration(realisticDuration, true, 2) // '10 days & 2 hours'
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## Error Handling
Functions for handling errors.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### tryOr
- `tryOr`

Try to execute a function and return its result if it succeeds, or return the default value if it fails.

```typescript
const result = tryOr('default', () => getSomething());
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### retry
- `retry`

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds.

```typescript
const result = tryOr(5, seconds(1),, true, () => getSomething());
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### retryOr
- `retryOr`

Combination of retry and tryOr.

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds. Return the default value if it fails too many times

```typescript
const result = retryOr('default', 5, seconds(1), true, () => getSomething());
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## progressBar
A progress bar that can be used in the terminal.

> NOTE: This is eventually be moved to `swiss-node`

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### update
- `getProgressBar().update`

Trigger the progress bar to update/rerender

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### next
- `getProgressBar().next`

Set the progress bar to the next value

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### set
- `getProgressBar().set`

Set the progress bar to a specific value

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### reset
- `getProgressBar().reset`

Set the progress bar to 0

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### start
- `getProgressBar().start`

Start displaying the progress bar

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### finish
- `getProgressBar().finish`

Stop displaying the progress bar

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### superscript
- `superscript`

Converts a number to superscript

```typescript
superscript(219) // '²¹⁹'
superscript(1234567890) // '¹²³⁴⁵⁶⁷⁸⁹⁰'
```

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## queue
A way of managing queues from different parts of the code.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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
PromiseUtils.each(range(5), async (i) => {
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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### setDefaultPauseTime
- `queue.setDefaultPauseTime`
- `new QueueManager().setDefaultPauseTime`

Sets the default pause time for pauses between queue items.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### setPauseTime
- `queue.setPauseTime`
- `new QueueManager().setPauseTime`

Sets the pause time for pauses between queue items for the specified queue.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### add
- `queue.add`
- `new QueueManager().add`

Adds a function to the queue.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

#### new
- `queue.new`
- `new QueueManager().new`

Creates a new QueueManager instance.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### queue
- `queue`

An instance of QueueManager

See QueueManager for more information.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## timer
A debug tool for measuring the duration of code blocks.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### timer
- `timer`

Global timer

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

## Helper Types
Some commonly used types

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### OfType<T, U>
- `OfType`

Makes all the properties of object T have type U

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### ObjOfType<T>
- `ObjOfType`

An object with any properties of type T

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

### ObjOfType<T>
- `ObjOfType`

An object with any properties of type T

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>

<!-- DOCS: MAIN END -->

# Notes

> These are used in non-vital personal projects and scripts.

> Need to be better tested before being used in prod.

> Failing/erroring/rejected promises may not behave as expected.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>
