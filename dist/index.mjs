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

// src/tools/TimeUtils.ts
var units = [
  {
    value: MILLENNIUM,
    short: { singular: "mill", plural: "mills" },
    long: { singular: " millennium", plural: " millenniums" }
  },
  {
    value: CENTURY,
    short: { singular: "cent", plural: "cents" },
    long: { singular: " century", plural: " centuries" }
  },
  {
    value: YEAR,
    short: { singular: "y", plural: "y" },
    long: { singular: " year", plural: " years" }
  },
  {
    value: MONTH,
    short: { singular: "mon", plural: "mons" },
    long: { singular: " month", plural: " months" }
  },
  {
    value: DAY,
    short: { singular: "d", plural: "d" },
    long: { singular: " day", plural: " days" }
  },
  {
    value: HOUR,
    short: { singular: "h", plural: "h" },
    long: { singular: " hour", plural: " hours" }
  },
  {
    value: MINUTE,
    short: { singular: "m", plural: "m" },
    long: { singular: " minute", plural: " minutes" }
  },
  {
    value: SECOND,
    short: { singular: "s", plural: "s" },
    long: { singular: " second", plural: " seconds" }
  },
  {
    value: MILLISECOND,
    short: { singular: "ms", plural: "ms" },
    long: { singular: " millisecond", plural: " milliseconds" }
  }
];
var toReadableDuration = (duration, longNames = false, maxUnits = 3) => {
  if (duration === 0)
    return "";
  const allUnitValues = units.map((unit, index) => {
    var _a;
    const previousUnitValue = ((_a = units[index - 1]) == null ? void 0 : _a.value) ?? Infinity;
    const amount = Math.floor(Math.abs(duration) % previousUnitValue / unit.value);
    return { amount, unit };
  }).filter(({ amount }) => amount > 0);
  const results = allUnitValues.slice(0, maxUnits).map(({ amount, unit }) => {
    const labelObj = longNames ? unit.long : unit.short;
    const label = amount > 1 ? labelObj.plural : labelObj.singular;
    return `${amount}${label}`;
  });
  if (longNames) {
    return [...results.slice(0, -1), "&&&&", ...results.slice(-1)].join(", ").replace("&&&&,", "&");
  }
  return results.join(" ");
};
var TimeUtils = {
  toReadableDuration
};

// src/tools/timer.ts
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
    const lineEnd = `${TimeUtils.toReadableDuration(duration, false, 4)}`;
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
      let lc = 0;
      const log = (...args) => {
        lc++;
        console.log(...args);
      };
      const logLine2 = (label, prefix2, nameColLength2, duration) => {
        lc++;
        return logLine(label, prefix2, nameColLength2, duration);
      };
      const labels = Object.keys(startTimes);
      log("");
      log(wrapperFn(chalk.bold([prefix, name, "Times:"].filter((x) => x && x.trim()).join(" "))));
      const displayNames2 = [...labels, ...Object.keys(names)].map((label) => dispNames[label] || label);
      const nameColLength = Math.max(...displayNames2.map((text) => `${text}: `.length));
      let longest = 0;
      for (let label of labels) {
        if (label !== "TOTAL") {
          longest = Math.max(longest, logLine2(label, "	", nameColLength));
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
        log(wrapperFn(chalk.dim("	" + "\u23AF".repeat(longest))));
        for (let { label, duration } of cEntries) {
          logLine2(label, "	", nameColLength, duration);
        }
      }
      log(wrapperFn(chalk.dim("	" + "\u23AF".repeat(longest))));
      logLine2("TOTAL", "	", nameColLength);
      log("");
      return lc;
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
  addAll: () => addAll,
  arrayAsc: () => arrayAsc,
  arrayDesc: () => arrayDesc,
  asc: () => asc,
  byProp: () => byProp,
  capitalise: () => capitalise2,
  ceilTo: () => ceilTo,
  clamp: () => clamp,
  combine: () => combine,
  combineProp: () => combineProp,
  dedupe: () => dedupe,
  dedupeMapped: () => dedupeMapped,
  desc: () => desc,
  everys: () => everys,
  exists: () => exists,
  filters: () => filters,
  fixFloat: () => fixFloat,
  floorTo: () => floorTo,
  furthestFrom: () => furthestFrom,
  isAllEqual: () => isAllEqual,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isFalsy: () => isFalsy,
  isNotEmpty: () => isNotEmpty,
  isNotEqual: () => isNotEqual,
  isTruthy: () => isTruthy,
  lerp: () => lerp,
  lerpArray: () => lerpArray,
  lerpObj: () => lerpObj,
  maps: () => maps,
  mode: () => mode,
  modeMapped: () => modeMapped,
  nearestTo: () => nearestTo,
  noact: () => noact,
  noop: () => noop,
  reduces: () => reduces,
  reject: () => reject,
  resolve: () => resolve,
  result: () => result,
  round: () => round,
  roundTo: () => roundTo,
  sorts: () => sorts,
  toBool: () => toBool,
  toFixed: () => toFixed,
  toNumber: () => toNumber,
  toProp: () => toProp,
  toString: () => toString
});

// src/tools/ArrayUtils.ts
var range = (length = 1, multiplier = 1, offset = 0) => new Array(Math.floor(length)).fill(1).map((v, i) => fixFloat(i * multiplier) + offset);
var zipFn = (length, arrs) => range(length).map((i) => arrs.map((arr) => (arr || [])[i]));
var zip = (...arrs) => zipFn(Math.min(...(arrs.length ? arrs : [[]]).map((arr) => (arr || []).length)), arrs);
var zipMax = (...arrs) => zipFn(Math.max(...(arrs.length ? arrs : [[]]).map((arr) => (arr || []).length)), arrs);
var sortByMapped = (arr, mapFn, sortFn = sorts.asc) => zip(arr, arr.map(mapFn)).sort((a, b) => sortFn(a[1], b[1])).map(([v]) => v);
var randomise = (arr) => sortByMapped(arr, () => Math.random());
var reverse = (arr) => [...arr].reverse();
var entries = (arr) => zip(range(arr.length), arr);
var repeat = (maxLength, ...items) => {
  const simple = new Array(maxLength).fill(items[0]);
  return items.length === 1 ? simple : simple.map((v, i) => items[i % items.length]);
};
var roll = (distance, arr) => [
  ...arr.slice(distance % arr.length),
  ...arr.slice(0, distance % arr.length)
];
var isNumString = (text) => Boolean(text.match(/^[0-9]+$/));
var partitionNums = (ignoreCase) => (name) => (ignoreCase ? name.toLowerCase() : name).split(/([0-9]+)/).map((s) => isNumString(s) ? Number(s) : s);
var sortNumberedText = (texts, ignoreCase = true) => {
  return sortByMapped(texts, partitionNums(ignoreCase), (a, b) => {
    for (let i in a) {
      const result2 = sorts.asc(a[i], b[i]);
      if (result2 !== 0)
        return result2;
    }
    return 0;
  });
};
var partition = (array, partitionSize = Math.ceil(array.length / 2)) => {
  const numParts = Math.ceil(array.length / partitionSize);
  const result2 = [];
  for (let i = 0; i < numParts; i++) {
    result2.push(array.slice(i * partitionSize, (i + 1) * partitionSize));
  }
  return result2;
};
var groupObj = (array, mapFn) => {
  const result2 = {};
  array.forEach((item, index) => {
    const key = mapFn(item, index, array);
    if (key === void 0)
      return;
    if (!result2[key])
      result2[key] = [];
    result2[key].push(item);
  });
  return result2;
};
var group = (array, mapFn) => {
  const obj = groupObj(array, mapFn);
  return Object.values(obj);
};
var ArrayUtils = {
  range,
  zip,
  zipMax,
  sortByMapped,
  randomise,
  reverse,
  entries,
  repeat,
  roll,
  sortNumberedText,
  partition,
  groupObj,
  group,
  utils: {
    isNumString,
    partitionNums
  }
};

// src/tools/StringUtils.ts
var capitalise = (input = "") => (input || "").split(/\s/).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
var angloise = (input) => input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
var clean = (input = "") => angloise([input].flat().join(" ")).replace(/\s{1,}/g, " ").replace(/[^A-Za-z0-9 ]/gi, "");
var caseHandler = (overrideSplitter) => {
  const getSplit = (input = "") => {
    if (overrideSplitter)
      return overrideSplitter(input);
    const arr = [input].flat();
    return arr.map((s) => clean(s.replace(/-|_/g, " ")).split(" ")).flat().filter((s) => s.length);
  };
  const toCamelCase = (input, capitaliseFirst = false) => {
    const split = getSplit(input);
    return split.map((word, index) => index === 0 && !capitaliseFirst ? word.toLowerCase() : capitalise(word)).join("");
  };
  const toLowerCamelCase = (input) => toCamelCase(input, false);
  const toUpperCamelCase = (input) => toCamelCase(input, true);
  const toCharacterSeparated = (input, char, toUpper = false) => {
    const split = getSplit(input);
    return split.map((word, index) => toUpper ? word.toUpperCase() : word.toLowerCase()).join(char);
  };
  const toSlugCase = (input, toUpper = false) => toCharacterSeparated(input, "-", toUpper);
  const toLowerSlugCase = (input) => toSlugCase(input, false);
  const toUpperSlugCase = (input) => toSlugCase(input, true);
  const toSnakeCase = (input, toUpper = false) => toCharacterSeparated(input, "_", toUpper);
  const toLowerSnakeCase = (input) => toSnakeCase(input, false);
  const toUpperSnakeCase = (input) => toSnakeCase(input, true);
  const toSpaced = (input, toUpper = false) => toCharacterSeparated(input, " ", toUpper);
  const toLowerSpaced = (input) => toSpaced(input, false);
  const toUpperSpaced = (input) => toSpaced(input, true);
  const toCapitalisedSpaced = (input) => capitalise(toSpaced(input, false));
  return {
    toLowerCamelCase,
    toUpperCamelCase,
    toCamelCase,
    toLowerSlugCase,
    toUpperSlugCase,
    toSlugCase,
    toLowerSnakeCase,
    toUpperSnakeCase,
    toSnakeCase,
    toLowerSpaced,
    toUpperSpaced,
    toCapitalisedSpaced,
    toSpaced,
    toCharacterSeparated
  };
};
var standardCaseHandler = caseHandler();
var fromSlugCase = standardCaseHandler;
var fromSnakeCase = standardCaseHandler;
var fromSpaced = standardCaseHandler;
var fromCamelCase = caseHandler(
  (input) => [input].flat().map((s) => clean(s)).map(
    (s) => s.replace(/([A-Z])/g, " $1").replace(/-|_/g, " ").trim()
  ).map((s) => s.split(" ")).flat()
);
var StringUtils = {
  capitalise,
  angloise,
  clean,
  ...standardCaseHandler,
  fromSlugCase,
  fromSnakeCase,
  fromSpaced,
  fromCamelCase
};

// src/tools/fn.ts
var noop = () => {
};
var noact = (item) => item;
var result = (item) => () => item;
var resolve = (item) => () => Promise.resolve(item);
var reject = (item) => () => Promise.reject(item);
var fixFloat = (num, precision = 6) => Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
var addAll = (...args) => args.reduce((acc, num) => acc + num, 0);
var exists = (item) => item !== void 0 && item !== null;
var isTruthy = (item) => Boolean(item);
var isFalsy = (item) => !Boolean(item);
var isEmpty = (item) => Boolean(!item || !item.length);
var isNotEmpty = (item) => Boolean(item && item.length);
var isEqual = (item) => (other) => Boolean(item === other);
var isNotEqual = (item) => (other) => Boolean(item !== other);
var dedupe = (item, index, array) => array.indexOf(item) === index;
var dedupeMapped = (mapFn) => {
  let mapped;
  return (item, index, array) => {
    if (!mapped)
      mapped = array.map(mapFn);
    return mapped.indexOf(mapped[index]) === index;
  };
};
var filters = {
  exists,
  isTruthy,
  isFalsy,
  isEmpty,
  isNotEmpty,
  isEqual,
  isNotEqual,
  dedupe,
  dedupeMapped
};
var toString = (item) => item + "";
var toNumber = (item) => Number(item);
var toBool = (item) => item !== "false" && Boolean(item);
var toProp = (prop) => (item) => item && item[prop];
var toFixed = (precision) => (num) => fixFloat(num, precision);
var maps = {
  toString,
  toNumber,
  toBool,
  toProp,
  toFixed
};
var asc = (a, b) => {
  if (a < b)
    return -1;
  if (b < a)
    return 1;
  return 0;
};
var desc = (a, b) => {
  if (a < b)
    return 1;
  if (b < a)
    return -1;
  return 0;
};
var byProp = (propName, sortFn = asc) => {
  return (a, b) => sortFn(a[propName], b[propName]);
};
var nearestTo = (target) => (a, b) => Math.abs(Number(target) - Number(a)) - Math.abs(Number(target) - Number(b));
var furthestFrom = (target) => (a, b) => Math.abs(Number(target) - Number(b)) - Math.abs(Number(target) - Number(a));
var arrayAsc = (a, b) => {
  for (let i in a) {
    const result2 = sorts.asc(a[i], b[i]);
    if (result2 !== 0)
      return result2;
  }
  return 0;
};
var arrayDesc = (a, b) => {
  for (let i in a) {
    const result2 = sorts.desc(a[i], b[i]);
    if (result2 !== 0)
      return result2;
  }
  return 0;
};
var sorts = {
  asc,
  desc,
  byProp,
  nearestTo,
  furthestFrom,
  arrayAsc,
  arrayDesc
};
var combine = (a, b) => a + b;
var combineProp = (propName) => (a, b) => a[propName] + b[propName];
var mode = (prev, curr, index, arr) => {
  if (index > 1) {
    return prev;
  }
  const unique = arr.filter(filters.dedupe);
  const counts = unique.map((item) => arr.filter((i) => i === item)).map((a) => a.length);
  const max = Math.max(...counts);
  return unique[counts.indexOf(max)];
};
var modeMapped = (mapFn) => {
  let result2;
  return (prev, curr, index, arr) => {
    if (result2)
      return result2;
    const mapped = arr.map(mapFn);
    const uniqueU = mapped.filter(filters.dedupe);
    const uniqueT = arr.filter(filters.dedupeMapped(mapFn));
    const counts = uniqueU.map((item) => mapped.filter((i) => i === item)).map((a) => a.length);
    const max = Math.max(...counts);
    result2 = uniqueT[counts.indexOf(max)];
    return result2;
  };
};
var reduces = {
  combine,
  combineProp,
  mode,
  modeMapped
};
var isAllEqual = (val, i, arr) => val === arr[0];
var everys = {
  isAllEqual
};
var floorTo = (to, value) => fixFloat(Math.floor(value / to) * to);
var roundTo = (to, value) => fixFloat(Math.round(value / to) * to);
var ceilTo = (to, value) => fixFloat(Math.ceil(value / to) * to);
var round = {
  floorTo,
  roundTo,
  ceilTo,
  to: roundTo
};
var lerp = (progress, fromVal, toVal) => fromVal + (toVal - fromVal) * progress;
var lerpArray = (progress, fromArr, toArr) => zip(fromArr, toArr).map(([fromVal, toVal]) => lerp(progress, fromVal, toVal));
var lerpObj = (progress, fromObj, toObj) => {
  const entries2 = Object.entries(fromObj);
  const lerped = entries2.map(([key, fromVal]) => typeof fromVal === "number" ? [key, lerp(progress, fromVal, toObj[key])] : [key, fromVal]);
  return Object.fromEntries(lerped);
};
var clamp = (value, a, b) => Math.max(Math.min(a, b), Math.min(value, Math.max(a, b)));
var capitalise2 = (str) => {
  console.warn("fn.capitalise is deprecated, use StringUtils.capitalize instead");
  return StringUtils.capitalise(str);
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
var getCharWidth = (num, max, width) => Math.round(width * (Math.max(0, Math.min(num / max, 1)) / 1));
var getBarString = (current, max, width, opts) => {
  const { progChar, emptyChar, startChar, endChar, showCurrent, currentChar } = opts;
  const numProgChars = getCharWidth(current, max, width);
  const numNextChars = getCharWidth(current + 1, max, width);
  const numCurrentChars = showCurrent ? numNextChars - numProgChars : 0;
  const numEmptyChars = width - numProgChars - numCurrentChars;
  const prog = opts.barProgWrapFn(progChar.repeat(numProgChars));
  const curr = opts.barCurrentWrapFn(currentChar.repeat(numCurrentChars));
  const empt = opts.barEmptyWrapFn(emptyChar.repeat(numEmptyChars));
  const body = opts.barWrapFn(`${prog}${curr}${empt}`);
  return `${startChar}${body}${endChar}`;
};
var getSuffix = (current, maxNum, isMaxKnown, opts) => {
  let items = [""];
  if (opts.showCount) {
    const pad = Math.max(maxNum.toString().length, opts.countWidth);
    items.push(`[${current.toString().padStart(pad, " ")} / ${(isMaxKnown ? maxNum.toString() : "?").padStart(pad, " ")}]`);
  }
  if (opts.showPercent) {
    const percent = Math.round(current / Math.max(1, maxNum) * 100);
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
    barWrapFn: noact,
    barProgWrapFn: noact,
    barCurrentWrapFn: noact,
    barEmptyWrapFn: noact,
    showCount: true,
    showPercent: false,
    countWidth: 0,
    progChar: "\u2588",
    emptyChar: " ",
    startChar: "\u2595",
    endChar: "\u258F",
    showCurrent: false,
    currentChar: "\u259E",
    ...opts
  };
};
var getProgressBar = (max, options = {}) => {
  const opts = getFullOptions(options);
  const { prefix, prefixWidth, maxWidth, wrapperFn, startChar, endChar } = opts;
  let current = 0;
  let finished = false;
  const maxNum = typeof max === "number" ? max : 1;
  const isMaxKnown = typeof max === "number";
  const update = () => {
    const suffix = getSuffix(current, maxNum, isMaxKnown, opts);
    const fullPrefix = prefix.padEnd(prefixWidth);
    const output = `${fullPrefix}${getBarString(
      current,
      Math.max(1, maxNum),
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
    finish,
    max
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
  return objectify((arr) => Promise.all(arr), input);
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

// src/tools/ObjectUtils.ts
var remodel = (obj, func) => Object.fromEntries(func(Object.entries(obj)) ?? Object.entries(obj));
var remodelEach = (obj, func) => Object.fromEntries(Object.entries(obj).map((entry, index, entries2) => func(entry, index, entries2) ?? entry));
var map2 = (obj, func) => remodel(obj, (entries2) => entries2.map(([key, value], index) => func(key, value, index)));
var mapValues = (obj, func) => remodel(obj, (entries2) => entries2.map(([key, value], index) => [key, func(key, value, index)]));
var mapKeys = (obj, func) => remodel(obj, (entries2) => entries2.map(([key, value], index) => [func(key, value, index), value]));
var filter = (obj, func) => remodel(obj, (entries2) => entries2.filter(([key, value], index) => func(key, value, index)));
var clean2 = (obj) => filter(obj, (key, value) => value !== void 0);
var ObjectUtils = {
  remodel,
  remodelEach,
  map: map2,
  mapValues,
  mapKeys,
  filter,
  clean: clean2
};

// src/tools/symbols.ts
var symbols = {
  TAB: "	",
  NBSP: " ",
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
  RADIO_EMPTY: "\u25EF",
  RADIO_FULL: "\u25C9",
  CURSOR: "\u276F",
  CHEV_LFT: "\u2039",
  CHEV_RGT: "\u203A",
  CHAIN: "\u2AD8",
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

// src/tools/queue.ts
var QueueManager = class {
  constructor(defaultPauseTime) {
    this.promises = /* @__PURE__ */ new Map();
    this.pauseTimes = /* @__PURE__ */ new Map();
    this.defaultPauseTime = 0;
    if (defaultPauseTime)
      this.setDefaultPauseTime(defaultPauseTime);
  }
  getPromise(id) {
    const existing = this.promises.get(id);
    if (existing)
      return existing;
    const promise = Promise.resolve();
    this.promises.set(id, promise);
    return promise;
  }
  setDefaultPauseTime(time) {
    this.defaultPauseTime = time;
  }
  setPauseTime(id, time) {
    this.pauseTimes.set(id, time);
  }
  add(id, fn) {
    const promise = this.getPromise(id).then(async () => {
      const result2 = await fn();
      const pauseTime = this.pauseTimes.get(id) ?? -1;
      if (pauseTime >= 0)
        await wait(pauseTime);
      return result2;
    });
    this.promises.set(id, promise);
    return promise;
  }
  new(defaultPauseTime) {
    return new QueueManager(defaultPauseTime);
  }
};
var queue = new QueueManager();

// src/tools/ColourUtils.ts
var ColourUtils_exports = {};
__export(ColourUtils_exports, {
  fromHSL: () => fromHSL,
  getContrastedColour: () => getContrastedColour,
  getLimitedColour: () => getLimitedColour,
  getLuminance: () => getLuminance,
  invertColour: () => invertColour,
  namedColours: () => namedColours,
  parse: () => parse,
  toHSL: () => toHSL,
  toHex: () => toHex,
  toYUV: () => toYUV
});
var namedColours = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fractal: [128, 128, 128],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray0: [0, 0, 0],
  gray1: [3, 3, 3],
  gray2: [5, 5, 5],
  gray3: [8, 8, 8],
  gray4: [10, 10, 10],
  gray5: [13, 13, 13],
  gray6: [15, 15, 15],
  gray7: [18, 18, 18],
  gray8: [20, 20, 20],
  gray9: [23, 23, 23],
  gray10: [26, 26, 26],
  gray11: [28, 28, 28],
  gray12: [31, 31, 31],
  gray13: [33, 33, 33],
  gray14: [36, 36, 36],
  gray15: [38, 38, 38],
  gray16: [41, 41, 41],
  gray17: [43, 43, 43],
  gray18: [46, 46, 46],
  gray19: [48, 48, 48],
  gray20: [51, 51, 51],
  gray21: [54, 54, 54],
  gray22: [56, 56, 56],
  gray23: [59, 59, 59],
  gray24: [61, 61, 61],
  gray25: [64, 64, 64],
  gray26: [66, 66, 66],
  gray27: [69, 69, 69],
  gray28: [71, 71, 71],
  gray29: [74, 74, 74],
  gray30: [77, 77, 77],
  gray31: [79, 79, 79],
  gray32: [82, 82, 82],
  gray33: [84, 84, 84],
  gray34: [87, 87, 87],
  gray35: [89, 89, 89],
  gray36: [92, 92, 92],
  gray37: [94, 94, 94],
  gray38: [97, 97, 97],
  gray39: [99, 99, 99],
  gray40: [102, 102, 102],
  gray41: [105, 105, 105],
  gray42: [107, 107, 107],
  gray43: [110, 110, 110],
  gray44: [112, 112, 112],
  gray45: [115, 115, 115],
  gray46: [117, 117, 117],
  gray47: [120, 120, 120],
  gray48: [122, 122, 122],
  gray49: [125, 125, 125],
  gray50: [127, 127, 127],
  gray51: [130, 130, 130],
  gray52: [133, 133, 133],
  gray53: [135, 135, 135],
  gray54: [138, 138, 138],
  gray55: [140, 140, 140],
  gray56: [143, 143, 143],
  gray57: [145, 145, 145],
  gray58: [148, 148, 148],
  gray59: [150, 150, 150],
  gray60: [153, 153, 153],
  gray61: [156, 156, 156],
  gray62: [158, 158, 158],
  gray63: [161, 161, 161],
  gray64: [163, 163, 163],
  gray65: [166, 166, 166],
  gray66: [168, 168, 168],
  gray67: [171, 171, 171],
  gray68: [173, 173, 173],
  gray69: [176, 176, 176],
  gray70: [179, 179, 179],
  gray71: [181, 181, 181],
  gray72: [184, 184, 184],
  gray73: [186, 186, 186],
  gray74: [189, 189, 189],
  gray75: [191, 191, 191],
  gray76: [194, 194, 194],
  gray77: [196, 196, 196],
  gray78: [199, 199, 199],
  gray79: [201, 201, 201],
  gray80: [204, 204, 204],
  gray81: [207, 207, 207],
  gray82: [209, 209, 209],
  gray83: [212, 212, 212],
  gray84: [214, 214, 214],
  gray85: [217, 217, 217],
  gray86: [219, 219, 219],
  gray87: [222, 222, 222],
  gray88: [224, 224, 224],
  gray89: [227, 227, 227],
  gray90: [229, 229, 229],
  gray91: [232, 232, 232],
  gray92: [235, 235, 235],
  gray93: [237, 237, 237],
  gray94: [240, 240, 240],
  gray95: [242, 242, 242],
  gray96: [245, 245, 245],
  gray97: [247, 247, 247],
  gray98: [250, 250, 250],
  gray99: [252, 252, 252],
  gray100: [255, 255, 255],
  gray: [126, 126, 126],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  none: [0, 0, 0],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
var limitValue = (val) => Math.max(0, Math.min(255, val));
var roundMinMax = (value, min = 0, max = 255) => Math.min(max, Math.max(min, Math.round(value)));
var parse = (input) => {
  const trimmed = (input + "").trim();
  if (namedColours[trimmed]) {
    return namedColours[trimmed];
  }
  if (/^rgb/.test(trimmed) || /([0-9]{1,3}(,|\s|\/)+){2}[0-9]{1,3}/.test(trimmed)) {
    const stripped = trimmed.replace(/[^0-9,/]/g, "");
    const [r, g, b] = [...stripped.split(/[^0-9]/).map(Number), 0, 0, 0].map(limitValue);
    return [r, g, b];
  }
  if (/^#/.test(trimmed) || /^([0-9A-F]{3}|[0-9A-F]{6})$/.test(trimmed)) {
    const stripped = trimmed.toUpperCase().replace(/[^0-9A-F]/g, "");
    let hexs = [];
    if (/^[0-9A-F]{3}$/.test(stripped)) {
      hexs = [...stripped.match(/[0-9A-F]{1}/g) || []].map((hex) => parseInt(hex, 16));
      hexs = hexs.map((val) => val * 17);
    }
    if (/^[0-9A-F]{6}$/.test(stripped)) {
      hexs = [...stripped.match(/[0-9A-F]{2}/g) || []].map((hex) => parseInt(hex, 16));
    }
    const [r, g, b] = hexs.map(limitValue);
    return [r, g, b];
  }
  return [0, 0, 0];
};
var toHex = (colour) => {
  const hexs = colour.map((val) => (val ?? 0).toString(16).padStart(2, "0"));
  return `#${hexs.join("")}`;
};
var getLuminance = ([r, g, b]) => {
  const [y, u, v] = toYUV([r, g, b]);
  return y;
};
var toYUV = ([r, g, b]) => {
  const y = fixFloat(0.299 * (r ?? 0) + 0.587 * (g ?? 0) + 0.114 * (b ?? 0));
  const u = fixFloat(-0.14713 * (r ?? 0) - 0.28886 * (g ?? 0) + 0.436 * (b ?? 0));
  const v = fixFloat(0.615 * (r ?? 0) - 0.51499 * (g ?? 0) - 0.10001 * (b ?? 0));
  return [y, u, v];
};
var toHSL = (colour, round2 = true) => {
  const r = colour[0] / 255;
  const g = colour[1] / 255;
  const b = colour[2] / 255;
  const M = Math.max(r, g, b);
  const m = M - Math.min(r, g, b);
  let d = 0;
  if (m) {
    if (M === r) {
      d = (g - b) / m;
    } else {
      if (M === g) {
        d = 2 + (b - r) / m;
      } else {
        d = 4 + (r - g) / m;
      }
    }
  }
  const result2 = [
    60 * d < 0 ? 60 * d + 360 : 60 * d,
    100 * (m ? M <= 0.5 ? m / (2 * M - m) : m / (2 - (2 * M - m)) : 0),
    100 * (2 * M - m) / 2
  ];
  if (round2) {
    return [roundMinMax(result2[0], 0, 360), roundMinMax(result2[1], 0, 100), roundMinMax(result2[2], 0, 100)];
  }
  return result2;
};
var fromHSL = (hsl, round2 = true) => {
  const h = hsl[0];
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const result2 = [255 * f(0), 255 * f(8), 255 * f(4)];
  if (round2) {
    return [roundMinMax(result2[0], 0, 255), roundMinMax(result2[1], 0, 255), roundMinMax(result2[2], 0, 255)];
  }
  return result2;
};
var invertColour = ([r, g, b]) => [255 - r, 255 - g, 255 - b];
var white = [255, 255, 255];
var black = [0, 0, 0];
var getContrastedColour = (colour) => getLuminance(colour) > 186 ? black : white;
var getLimitedColour = (colour, checkFn, adjustFn) => {
  let hsl = toHSL(colour);
  if (checkFn(hsl)) {
    hsl = adjustFn(hsl);
  }
  const out = fromHSL(hsl);
  return out;
};

// src/index.ts
var { filters: filters2, maps: maps2, sorts: sorts2, reduces: reduces2, everys: everys2 } = fn_exports;
export {
  ArrayUtils,
  CENTURY,
  ColourUtils_exports as ColourUtils,
  DAY,
  DECADE,
  HOUR,
  MILLENNIUM,
  MILLISECOND,
  MINUTE,
  MONTH,
  ObjectUtils,
  PromiseUtils,
  QueueManager,
  SECOND,
  StringUtils,
  TimeUtils,
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
  group,
  groupObj,
  hours,
  interval,
  map,
  mapLimit,
  maps2 as maps,
  millenniums,
  milliseconds,
  minutes,
  months,
  partition,
  printLn,
  progressBar_exports as progressBar,
  queue,
  randomise,
  range,
  reduces2 as reduces,
  repeat,
  retry,
  retryOr,
  reverse,
  roll,
  seconds,
  sortByMapped,
  sortNumberedText,
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
  zip,
  zipMax
};
