import { elements, positionElements } from './desk-elements';

const { apple, appleGreen, orange, plate, plateTwo, napkin } = elements;

const { orangeRight, appleLeft } = positionElements;

const levels = [
  [plate, plate],
  [plate, apple, plate],
  [napkin, orange, appleGreen],
  [plateTwo, plateTwo],
  [napkin, orange, napkin],
  [plateTwo, plateTwo, plateTwo, plateTwo],
  [apple, apple, apple, apple, apple],
  [plate, appleLeft, plate],
  [plateTwo, plate, orangeRight],
  [napkin, napkin, orangeRight],
];

const deskIds = [
  ['plate1', 'plate2'],
  ['plate1', 'apple', 'plate2'],
  ['napkin', 'orange', 'appleGreen'],
  ['plate1', 'plate2'],
  ['napkin1', 'orange', 'napkin2'],
  ['plate1', 'plate2', 'plate3', 'plate4'],
  ['apple1', 'apple2', 'apple3', 'apple4', 'apple5'],
  ['plate1', 'apple', 'plate2'],
  ['plate1', 'plate2', 'orange'],
  ['napkin1', 'napkin2', 'orange'],
];

const animatedElements = [
  ['animate-topSkew', 'animate-topSkew'],
  ['no', 'animate-topSkew', 'no'],
  ['no', 'animate-topSkew', 'no'],
  ['animate-topSkew', 'no'],
  ['no', 'no', 'animate-topSkew'],
  ['no', 'animate-topSkew', 'no', 'animate-topSkew'],
  ['animate-topSkew', 'no', 'animate-topSkew', 'no', 'animate-topSkew'],
  ['no', 'animate-topSkew', 'no'],
  ['animate-topSkew', 'no', 'no'],
  ['no', 'animate-topSkew', 'animate-topSkew'],
];

export { levels, deskIds, animatedElements };
