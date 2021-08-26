export const START_COUNT = 2;
export const COUNTER = 0;
export enum COLORS {
  red,
  green,
  blue,
  yellow,
}
export const sleep = async time => {
  return new Promise(resolve => setTimeout(resolve, time));
};
