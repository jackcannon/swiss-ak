import { ms } from './times';

export const wait = (time: ms) => new Promise((resolve) => setTimeout(resolve, time));

// a certain percentage of the different between now and given time
const PING_RATIO = 0.75;
const ROUND_AMOUNT = 1.5;
const getPingDuration = (time: ms, now: ms = Date.now()): ms => Math.ceil(((time - now) * PING_RATIO) / ROUND_AMOUNT) * ROUND_AMOUNT;

// accurate (pinged) wait until given time
export const waitUntil = async (time: ms): Promise<null> => {
  while (Date.now() < time) {
    await wait(getPingDuration(time));
  }
  return null;
};

// accurate (pinged) wait the given ms
export const waitFor = async (time: ms): Promise<null> => waitUntil(Date.now() + time);

// get the time (ms) until the next 'every X' event
const getNextEvery = (timing: ms, offset: ms = 0): ms => {
  const now = Date.now();
  const result = timing - ((now - offset) % timing);
  return result <= 10 ? timing : result;
};

// accurate (pinged) wait for next 'every X' event
export const waitEvery = (timing: ms, offset?: ms): Promise<null> => waitFor(getNextEvery(timing, offset));

const stopped: number[] = [];
export const stopInterval = (intID: number) => stopped.push(intID);

// accurate (pinged) interval for every 'X' event
export const interval = (action: Function, timing: ms): number => {
  const intID = Math.floor(Math.random() * Math.pow(10, 10));
  const run = async () => {
    await waitEvery(timing);
    if (stopped.includes(intID)) {
      return;
    }
    action();
    run();
  };
  run();
  return intID;
};
