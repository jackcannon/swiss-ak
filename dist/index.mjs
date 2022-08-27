var __defProp = Object.defineProperty;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};

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
var wait = (time) => new Promise((resolve2) => setTimeout(resolve2, time));
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

// src/tools/fn.ts
var fn_exports = {};
__export(fn_exports, {
  asc: () => asc,
  byProp: () => byProp,
  combine: () => combine,
  combineProp: () => combineProp,
  desc: () => desc,
  everys: () => everys,
  exists: () => exists,
  filters: () => filters,
  furthestFrom: () => furthestFrom,
  isAllEqual: () => isAllEqual,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isFalsy: () => isFalsy,
  isNotEmpty: () => isNotEmpty,
  isNotEqual: () => isNotEqual,
  isTruthy: () => isTruthy,
  maps: () => maps,
  nearestTo: () => nearestTo,
  noact: () => noact,
  noop: () => noop,
  reduces: () => reduces,
  reject: () => reject,
  resolve: () => resolve,
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
var resolve = (item) => () => Promise.resolve(item);
var reject = (item) => () => Promise.reject(item);
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
var nearestTo = (target) => (a, b) => Math.abs(Number(target) - Number(a)) - Math.abs(Number(target) - Number(b));
var furthestFrom = (target) => (a, b) => Math.abs(Number(target) - Number(b)) - Math.abs(Number(target) - Number(a));
var sorts = {
  asc,
  desc,
  byProp,
  nearestTo,
  furthestFrom
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

// src/tools/progressBar.ts
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
var print = (text, wrapperFn = noact) => {
  const wrapped = wrapperFn(text || "");
  printLn(wrapped);
};
var getBarString = (current, max, width, opts) => {
  const { progChar, emptyChar, startChar, endChar } = opts;
  const numProgChars = Math.round(width * (Math.max(0, Math.min(current / max, 1)) / 1));
  const numEmptyChars = width - numProgChars;
  const body = `${progChar.repeat(numProgChars)}${emptyChar.repeat(numEmptyChars)}`;
  return `${startChar}${body}${endChar}`;
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
    wrapperFn: noact,
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

// src/tools/errorHandling.ts
var tryOr = async (orValue, func, ...args) => {
  try {
    return await func(...args);
  } catch (err) {
    return orValue;
  }
};
var retry = async (maxTries = 10, delay = 0, suppress = true, run = result(void 0)) => {
  const loop = async (attempt, lastErr) => {
    if (attempt >= maxTries) {
      if (!suppress)
        throw lastErr;
      return void 0;
    }
    try {
      const result2 = await run(attempt);
      return result2;
    } catch (err) {
      if (delay)
        await wait(delay);
      return await loop(attempt + 1, err);
    }
  };
  return await loop(0);
};
var retryOr = async (orValue, maxTries = 10, delay = 0, suppress = true, run = result(orValue)) => tryOr(orValue, () => retry(maxTries, delay, suppress, run));

// src/tools/PromiseUtils.ts
var getDeferred = () => {
  let resolve2, reject2;
  const promise = new Promise((res, rej) => {
    resolve2 = (arg) => {
      res(arg);
      return promise;
    };
    reject2 = (...args) => {
      rej(...args);
      return promise;
    };
  });
  return {
    resolve: resolve2,
    reject: reject2,
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

// src/tools/ObjectUtils.ts
var map2 = (obj, func) => Object.fromEntries(Object.entries(obj).map(([key, value]) => func(key, value)));
var mapValues = (obj, func) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, func(key, value)]));
var mapKeys = (obj, func) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [func(key, value), value]));
var ObjectUtils = {
  map: map2,
  mapValues,
  mapKeys
};

// src/tools/symbols.ts
var symbols = {
  TAB: "	",
  TICK: "\u2714",
  CROSS: "\u2716",
  PLUS: "+",
  MINUS: "-",
  TIMES: "\xD7",
  DIVIDE: "\xF7",
  ELLIPSIS: "\u2026",
  BULLET: "\u2022",
  EJECT: "\u23CF",
  TILDE: "~",
  HOME: "~",
  CHEV_LFT: "\u2039",
  CHEV_RGT: "\u203A",
  TRI_UPP: "\u25B2",
  TRI_DWN: "\u25BC",
  TRI_RGT: "\u25B6",
  TRI_LFT: "\u25C0",
  ARROW_UPP: "\u2191",
  ARROW_DWN: "\u2193",
  ARROW_RGT: "\u2192",
  ARROW_LFT: "\u2190",
  ARROW_UPP_RGT: "\u2197",
  ARROW_DWN_RGT: "\u2198",
  ARROW_DWN_LFT: "\u2199",
  ARROW_UPP_LFT: "\u2196",
  ARROW_STILL: "\u2022",
  ARROW_FLIP_H: "\u2194",
  ARROW_FLIP_V: "\u2195",
  ARROW_ROTATE_UPP: "\u2934",
  ARROW_ROTATE_DWN: "\u2935",
  ARROW_ROTATE_LFT: "\u2936",
  ARROW_ROTATE_RGT: "\u2937",
  ARROW_ROTATE_CLOCK: "\u21BB",
  ARROW_ROTATE_ANTI_CLOCK: "\u21BA",
  FRACTION_1_4: "\xBC",
  FRACTION_1_2: "\xBD",
  FRACTION_3_4: "\xBE",
  SUPERSCRIPT: {
    1: "\xB9",
    2: "\xB2",
    3: "\xB3",
    4: "\u2074",
    5: "\u2075",
    6: "\u2076",
    7: "\u2077",
    8: "\u2078",
    9: "\u2079",
    0: "\u2070",
    "-": "\u207B",
    "+": "\u207A",
    "=": "\u207C",
    "(": "\u207D",
    ")": "\u207E",
    i: "\u2071",
    n: "\u207F",
    o: "\xB0",
    "*": "\xB0"
  }
};
var superscript = (num) => num.toString().split("").map((char) => symbols.SUPERSCRIPT[char] || symbols.SUPERSCRIPT["*"]).join("");

// src/index.ts
var { filters: filters2, maps: maps2, sorts: sorts2, reduces: reduces2, everys: everys2 } = fn_exports;
export {
  ArrayUtils_exports as ArrayUtils,
  CENTURY,
  DAY,
  DECADE,
  HOUR,
  MILLENNIUM,
  MILLISECOND,
  MINUTE,
  MONTH,
  ObjectUtils,
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
  everys2 as everys,
  filters2 as filters,
  fn_exports as fn,
  getDeferred,
  getProgressBar,
  getTimer,
  hours,
  interval,
  map,
  mapLimit,
  maps2 as maps,
  millenniums,
  milliseconds,
  minutes,
  months,
  printLn,
  progressBar_exports as progressBar,
  randomise,
  range,
  reduces2 as reduces,
  repeat,
  retry,
  retryOr,
  reverse,
  seconds,
  sortByMapped,
  sorts2 as sorts,
  stopInterval,
  superscript,
  symbols,
  timer,
  times_exports as times,
  tryOr,
  wait,
  waitEvery,
  waitFor,
  waitUntil,
  waiters_exports as waiters,
  weeks,
  years,
  zip
};
