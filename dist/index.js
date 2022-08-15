var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc2) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc2 = __getOwnPropDesc(from, key)) || desc2.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ArrayUtils: () => ArrayUtils_exports,
  CENTURY: () => CENTURY,
  DAY: () => DAY,
  DECADE: () => DECADE,
  HOUR: () => HOUR,
  MILLENNIUM: () => MILLENNIUM,
  MILLISECOND: () => MILLISECOND,
  MINUTE: () => MINUTE,
  MONTH: () => MONTH,
  PromiseUtils: () => PromiseUtils,
  SECOND: () => SECOND,
  WEEK: () => WEEK,
  YEAR: () => YEAR,
  all: () => all,
  allLimit: () => allLimit,
  allLimitObj: () => allLimitObj,
  allObj: () => allObj,
  centuries: () => centuries,
  days: () => days,
  decades: () => decades,
  each: () => each,
  eachLimit: () => eachLimit,
  entries: () => entries,
  everys: () => everys2,
  filters: () => filters2,
  fn: () => higherOrder_exports,
  getDeferred: () => getDeferred,
  getProgressBar: () => getProgressBar,
  getTimer: () => getTimer,
  hours: () => hours,
  interval: () => interval,
  map: () => map,
  mapLimit: () => mapLimit,
  maps: () => maps2,
  millenniums: () => millenniums,
  milliseconds: () => milliseconds,
  minutes: () => minutes,
  months: () => months,
  printLn: () => printLn,
  progressBar: () => progressBar_exports,
  randomise: () => randomise,
  range: () => range,
  reduces: () => reduces2,
  repeat: () => repeat,
  reverse: () => reverse,
  seconds: () => seconds,
  sortByMapped: () => sortByMapped,
  sorts: () => sorts2,
  stopInterval: () => stopInterval,
  timer: () => timer,
  times: () => times_exports,
  wait: () => wait,
  waitEvery: () => waitEvery,
  waitFor: () => waitFor,
  waitUntil: () => waitUntil,
  waiters: () => waiters_exports,
  weeks: () => weeks,
  years: () => years,
  zip: () => zip
});
module.exports = __toCommonJS(src_exports);

// src/tools/times.ts
var times_exports = {};
__export(times_exports, {
  CENTURY: () => CENTURY,
  DAY: () => DAY,
  DECADE: () => DECADE,
  HOUR: () => HOUR,
  MILLENNIUM: () => MILLENNIUM,
  MILLISECOND: () => MILLISECOND,
  MINUTE: () => MINUTE,
  MONTH: () => MONTH,
  SECOND: () => SECOND,
  WEEK: () => WEEK,
  YEAR: () => YEAR,
  centuries: () => centuries,
  days: () => days,
  decades: () => decades,
  hours: () => hours,
  millenniums: () => millenniums,
  milliseconds: () => milliseconds,
  minutes: () => minutes,
  months: () => months,
  seconds: () => seconds,
  weeks: () => weeks,
  years: () => years
});
var MILLISECOND = 1;
var SECOND = 1e3 * MILLISECOND;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 30 * DAY;
var YEAR = 365.25 * DAY;
var DECADE = 10 * YEAR;
var CENTURY = 100 * YEAR;
var MILLENNIUM = 1e3 * YEAR;
var milliseconds = (x = 1) => x;
var seconds = (x = 1) => x * SECOND;
var minutes = (x = 1) => x * MINUTE;
var hours = (x = 1) => x * HOUR;
var days = (x = 1) => x * DAY;
var weeks = (x = 1) => x * WEEK;
var months = (x = 1) => x * MONTH;
var years = (x = 1) => x * YEAR;
var decades = (x = 1) => x * DECADE;
var centuries = (x = 1) => x * CENTURY;
var millenniums = (x = 1) => x * MILLENNIUM;

// src/tools/waiters.ts
var waiters_exports = {};
__export(waiters_exports, {
  interval: () => interval,
  stopInterval: () => stopInterval,
  wait: () => wait,
  waitEvery: () => waitEvery,
  waitFor: () => waitFor,
  waitUntil: () => waitUntil
});
var wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
var PING_RATIO = 0.75;
var ROUND_AMOUNT = 1.5;
var getPingDuration = (time, now = Date.now()) => Math.ceil((time - now) * PING_RATIO / ROUND_AMOUNT) * ROUND_AMOUNT;
var waitUntil = async (time) => {
  while (Date.now() < time) {
    await wait(getPingDuration(time));
  }
  return null;
};
var waitFor = async (time) => waitUntil(Date.now() + time);
var getNextEvery = (timing, offset = 0) => {
  const now = Date.now();
  const result2 = timing - (now - offset) % timing;
  return result2 <= 10 ? timing : result2;
};
var waitEvery = (timing, offset) => waitFor(getNextEvery(timing, offset));
var stopped = [];
var stopInterval = (intID) => stopped.push(intID);
var interval = (action, timing) => {
  const intID = Math.floor(Math.random() * Math.pow(10, 10));
  let count = 0;
  const run = async () => {
    await waitEvery(timing);
    if (stopped.includes(intID)) {
      return;
    }
    action(intID, ++count);
    run();
  };
  run();
  return intID;
};

// src/tools/fakeChalk.ts
var noWrap = (x) => x;
var noChalk = {
  dim: noWrap,
  bold: noWrap
};

// src/tools/timer.ts
var formatDuration = (duration) => {
  const seconds2 = duration / SECOND;
  let extra = "";
  let secsEx = Math.round(seconds2);
  let minsEx = Math.floor(secsEx / 60);
  if (minsEx >= 1) {
    secsEx %= 60;
    extra = `${minsEx}m ${secsEx}s`;
    let hoursEx = Math.floor(minsEx / 60);
    if (hoursEx >= 1) {
      minsEx %= 60;
      extra = `${hoursEx}h ${minsEx}m ${secsEx}s`;
    }
  }
  return `${extra}${extra ? ` (${seconds2}s)` : `${seconds2}s`}`;
};
var getTimer = (name, verbose = false, wrapperFn = noWrap, chalk = noChalk, displayNames) => {
  let startTimes = {};
  let endTimes = {};
  let dispNames = {
    ...displayNames || {}
  };
  const names = Object.fromEntries(Object.keys(dispNames).map((key) => [key, key]));
  const getDuration = (label) => {
    const start = startTimes[label];
    const end = endTimes[label] || Date.now();
    return end - start;
  };
  const logLine = (label, prefix = "", nameColLength = 0, duration = getDuration(label)) => {
    const lineStart = `${dispNames[label] || label}: `.padEnd(nameColLength + 1, " ");
    const lineEnd = `${formatDuration(duration)}`;
    const line = chalk.bold(prefix + lineStart) + lineEnd;
    console.log(wrapperFn(line));
    return (prefix + lineStart + lineEnd).replace("	", "").length;
  };
  startTimes.TOTAL = Date.now();
  return {
    ...names,
    start(...labelArr) {
      for (let label of labelArr) {
        startTimes[label] = Date.now();
      }
    },
    end(...labelArr) {
      for (let label of labelArr) {
        endTimes[label] = Date.now();
        if (verbose) {
          logLine(label);
          console.log("");
        }
      }
    },
    switch(endLabel, startLabel) {
      if (endLabel)
        this.end(...[endLabel].flat());
      if (startLabel)
        this.start(...[startLabel].flat());
    },
    log(prefix, customEntries) {
      const labels = Object.keys(startTimes);
      console.log("");
      console.log(wrapperFn(chalk.bold([prefix, name, "Times:"].filter((x) => x && x.trim()).join(" "))));
      const displayNames2 = [...labels, ...Object.keys(names)].map((label) => dispNames[label] || label);
      const nameColLength = Math.max(...displayNames2.map((text) => `${text}: `.length));
      let longest = 0;
      for (let label of labels) {
        if (label !== "TOTAL") {
          longest = Math.max(longest, logLine(label, "	", nameColLength));
        }
      }
      if (customEntries) {
        const durations = Object.fromEntries(labels.map((label) => [label, getDuration(label)]));
        let cEntries = [];
        if (customEntries instanceof Array) {
          cEntries = customEntries.map((func) => func(durations)).map((obj) => ({ ...obj, duration: obj.duration || (obj.end || Date.now()) - (obj.start || Date.now()) }));
        } else {
          cEntries = Object.entries(customEntries).map(([label, func]) => ({ label, duration: (func || (() => 0))(durations) || 0 }));
        }
        console.log(wrapperFn(chalk.dim("	" + "\u23AF".repeat(longest))));
        for (let { label, duration } of cEntries) {
          logLine(label, "	", nameColLength, duration);
        }
      }
      console.log(wrapperFn(chalk.dim("	" + "\u23AF".repeat(longest))));
      logLine("TOTAL", "	", nameColLength);
      console.log("");
    },
    reset() {
      startTimes = {};
      endTimes = {};
    },
    names,
    displayNames: dispNames
  };
};
var timer = getTimer();

// src/tools/progressBar.ts
var progressBar_exports = {};
__export(progressBar_exports, {
  getProgressBar: () => getProgressBar,
  printLn: () => printLn
});
var printLn = (...text) => {
  var _a, _b;
  if (((_a = process == null ? void 0 : process.stdout) == null ? void 0 : _a.clearLine) && ((_b = process == null ? void 0 : process.stdout) == null ? void 0 : _b.cursorTo)) {
    if (!text.length) {
      process.stdout.write("\n");
    } else {
      const output = text.map((item) => item.toString()).join(" ");
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.moveCursor(0, -1);
      process.stdout.clearLine(0);
      process.stdout.write(output);
      process.stdout.write("\n");
    }
  } else {
    console.log(...text);
  }
};
var print = (text, wrapperFn = noWrap) => {
  const wrapped = wrapperFn(text || "");
  printLn(wrapped);
};
var getBarString = (current, max, width, opts) => {
  const { progChar, emptyChar, startChar, endChar, chalk } = opts;
  const numProgChars = Math.round(width * (Math.max(0, Math.min(current / max, 1)) / 1));
  const numEmptyChars = width - numProgChars;
  const body = `${progChar.repeat(numProgChars)}${emptyChar.repeat(numEmptyChars)}`;
  return `${chalk.dim(startChar)}${chalk.bold(body)}${chalk.dim(endChar)}`;
};
var getSuffix = (current, max, opts) => {
  let items = [""];
  if (opts.showCount) {
    const pad = Math.max(max.toString().length, opts.countWidth);
    items.push(`[${current.toString().padStart(pad, " ")} / ${max.toString().padStart(pad, " ")}]`);
  }
  if (opts.showPercent) {
    const percent = Math.round(current / max * 100);
    items.push(`(${percent.toString().padStart("100".toString().length, " ")}%)`);
  }
  const joined = items.filter((x) => x).join(" ");
  return joined.length ? " " + joined : "";
};
var getFullOptions = (opts = {}) => {
  var _a;
  return {
    prefix: "",
    prefixWidth: 1,
    maxWidth: ((_a = process == null ? void 0 : process.stdout) == null ? void 0 : _a.columns) ? process.stdout.columns : 100,
    chalk: noChalk,
    wrapperFn: noWrap,
    showCount: true,
    showPercent: false,
    countWidth: 0,
    progChar: "\u2588",
    emptyChar: " ",
    startChar: "\u2595",
    endChar: "\u258F",
    ...opts
  };
};
var getProgressBar = (max, options = {}) => {
  const opts = getFullOptions(options);
  const { prefix, prefixWidth, maxWidth, wrapperFn, startChar, endChar } = opts;
  let current = 0;
  let finished = false;
  const update = () => {
    const suffix = getSuffix(current, max, opts);
    const fullPrefix = prefix.padEnd(prefixWidth);
    const output = `${fullPrefix}${getBarString(
      current,
      max,
      Math.max(0, maxWidth - [fullPrefix, suffix, startChar, endChar].join("").length),
      opts
    )}${suffix}`;
    print(output, wrapperFn);
    return output;
  };
  const next = () => {
    if (finished)
      return "";
    current++;
    return update();
  };
  const set = (newCurrent) => {
    if (finished)
      return "";
    current = newCurrent;
    return update();
  };
  const reset = () => {
    return set(0);
  };
  const start = () => {
    printLn();
    return update();
  };
  const finish = () => {
    finished = true;
    const output = update();
    printLn();
    return output;
  };
  return {
    next,
    set,
    reset,
    update,
    start,
    finish
  };
};

// src/tools/PromiseUtils.ts
var getDeferred = () => {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = (arg) => {
      res(arg);
      return promise;
    };
    reject = (...args) => {
      rej(...args);
      return promise;
    };
  });
  return {
    resolve,
    reject,
    promise
  };
};
var all = async (promises) => {
  await Promise.all(promises);
};
var allLimit = (limit, items, noThrow = false) => {
  let runningCount = 0;
  let errors = [];
  let remaining = [...items];
  const result2 = [];
  const deferred = getDeferred();
  const update = () => {
    if (remaining.length === 0 && runningCount === 0) {
      if (errors.length && !noThrow) {
        deferred.reject(errors);
        return;
      }
      deferred.resolve(result2);
      return;
    }
    if (runningCount < limit && remaining.length) {
      const next = remaining.shift();
      const index = items.indexOf(next);
      run(next, index);
    }
  };
  const run = async (prom, index) => {
    runningCount++;
    try {
      result2[index] = await prom(index);
    } catch (err) {
      errors.push(err);
    }
    runningCount--;
    update();
  };
  for (let i = 0; i < Math.min(limit, items.length); i++) {
    update();
  }
  if (!items || items.length === 0) {
    deferred.resolve(result2);
  }
  return deferred.promise;
};
var each = async (items, func) => {
  await Promise.all(items.map((item, index, array) => func(item, index, array)));
};
var eachLimit = async (limit, items, func) => {
  await allLimit(
    limit,
    items.map((item, index, array) => () => func(item, index, array))
  );
};
var map = async (items, func) => {
  const result2 = [];
  await Promise.all(
    items.map(async (item, index, array) => {
      const res = await func(item, index, array);
      result2[index] = res;
    })
  );
  return result2;
};
var mapLimit = async (limit, items, func) => await allLimit(
  limit,
  items.map((item, index, array) => () => {
    const res = func(item, index, array);
    return res;
  })
);
var objectify = async (func, input) => {
  const keys = Object.keys(input);
  const results = await func(Object.values(input));
  return Object.fromEntries(keys.map((key, index) => [key, results[index]]));
};
var allObj = async (input) => {
  return objectify(Promise.all, input);
};
var allLimitObj = async (limit, input, noThrow = false) => {
  return objectify((items) => {
    return allLimit(limit, items, noThrow);
  }, input);
};
var PromiseUtils = {
  getDeferred,
  all,
  allLimit,
  each,
  eachLimit,
  map,
  mapLimit,
  allObj,
  allLimitObj
};

// src/tools/ArrayUtils.ts
var ArrayUtils_exports = {};
__export(ArrayUtils_exports, {
  entries: () => entries,
  randomise: () => randomise,
  range: () => range,
  repeat: () => repeat,
  reverse: () => reverse,
  sortByMapped: () => sortByMapped,
  zip: () => zip
});

// src/tools/higherOrder.ts
var higherOrder_exports = {};
__export(higherOrder_exports, {
  asc: () => asc,
  byProp: () => byProp,
  combine: () => combine,
  combineProp: () => combineProp,
  desc: () => desc,
  everys: () => everys,
  exists: () => exists,
  filters: () => filters,
  isAllEqual: () => isAllEqual,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isFalsy: () => isFalsy,
  isNotEmpty: () => isNotEmpty,
  isNotEqual: () => isNotEqual,
  isTruthy: () => isTruthy,
  maps: () => maps,
  noact: () => noact,
  noop: () => noop,
  reduces: () => reduces,
  result: () => result,
  sorts: () => sorts,
  toBool: () => toBool,
  toNumber: () => toNumber,
  toProp: () => toProp,
  toString: () => toString
});
var noop = () => {
};
var noact = (item) => item;
var result = (item) => () => item;
var exists = (item) => item !== void 0 && item !== null;
var isTruthy = (item) => Boolean(item);
var isFalsy = (item) => !Boolean(item);
var isEmpty = (item) => Boolean(!item || !item.length);
var isNotEmpty = (item) => Boolean(item && item.length);
var isEqual = (item) => (other) => Boolean(item === other);
var isNotEqual = (item) => (other) => Boolean(item !== other);
var filters = {
  exists,
  isTruthy,
  isFalsy,
  isEmpty,
  isNotEmpty,
  isEqual,
  isNotEqual
};
var toString = (item) => item + "";
var toNumber = (item) => Number(item);
var toBool = (item) => item !== "false" && Boolean(item);
var toProp = (prop) => (item) => item && item[prop];
var maps = {
  toString,
  toNumber,
  toBool,
  toProp
};
var asc = (a, b) => Number(a) - Number(b);
var desc = (a, b) => Number(b) - Number(a);
var byProp = (propName, sortFn = asc) => {
  return (a, b) => sortFn(a[propName], b[propName]);
};
var sorts = {
  asc,
  desc,
  byProp
};
var combine = (a, b) => a + b;
var combineProp = (propName) => (a, b) => a[propName] + b[propName];
var reduces = {
  combine,
  combineProp
};
var isAllEqual = (val, i, arr) => val === arr[0];
var everys = {
  isAllEqual
};

// src/tools/ArrayUtils.ts
var range = (length = 1) => new Array(length).fill(1).map((v, i) => i);
var zip = (...arrs) => {
  const length = Math.min(...arrs.map((arr) => (arr || []).length));
  return range(length).map((i) => arrs.map((arr) => (arr || [])[i]));
};
var sortByMapped = (arr, mapFn, sortFn = sorts.asc) => zip(arr, arr.map(mapFn)).sort((a, b) => sortFn(a[1], b[1])).map(([v]) => v);
var randomise = (arr) => sortByMapped(arr, () => Math.random());
var reverse = (arr) => [...arr].reverse();
var entries = (arr) => zip(range(arr.length), arr);
var repeat = (maxLength, ...items) => {
  const simple = new Array(maxLength).fill(items[0]);
  return items.length === 1 ? simple : simple.map((v, i) => items[i % items.length]);
};

// src/index.ts
var { filters: filters2, maps: maps2, sorts: sorts2, reduces: reduces2, everys: everys2 } = higherOrder_exports;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrayUtils,
  CENTURY,
  DAY,
  DECADE,
  HOUR,
  MILLENNIUM,
  MILLISECOND,
  MINUTE,
  MONTH,
  PromiseUtils,
  SECOND,
  WEEK,
  YEAR,
  all,
  allLimit,
  allLimitObj,
  allObj,
  centuries,
  days,
  decades,
  each,
  eachLimit,
  entries,
  everys,
  filters,
  fn,
  getDeferred,
  getProgressBar,
  getTimer,
  hours,
  interval,
  map,
  mapLimit,
  maps,
  millenniums,
  milliseconds,
  minutes,
  months,
  printLn,
  progressBar,
  randomise,
  range,
  reduces,
  repeat,
  reverse,
  seconds,
  sortByMapped,
  sorts,
  stopInterval,
  timer,
  times,
  wait,
  waitEvery,
  waitFor,
  waitUntil,
  waiters,
  weeks,
  years,
  zip
});
