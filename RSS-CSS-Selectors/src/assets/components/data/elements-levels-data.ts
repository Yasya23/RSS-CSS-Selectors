import { elements, positionElements } from './desk-elements';

const { apple, appleGreen, orange, plate, plateTwo, napkin } = elements;

const { orangeRight, appleLeft } = positionElements;

// const { appleAn, appleLeftAn } = animated;

const levels = [
  [plate, plate],
  [plate, napkin, orangeRight],
  [napkin, plateTwo, napkin, plateTwo],
  [apple, plate, orange, plateTwo, apple],
  [plate, appleGreen, plate, plateTwo, appleLeft],
];

const deskIds = [
  ['plate1', 'plate2'],
  ['plate', 'napkin', 'orange'],
];

const animatedElements = [
  ['animate-topSkew', 'no'],
  ['animate-topSkew', 'no', 'no'],
];

export { levels, deskIds, animatedElements };
