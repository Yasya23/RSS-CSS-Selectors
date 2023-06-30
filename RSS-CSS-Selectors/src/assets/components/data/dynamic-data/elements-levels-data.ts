import { elements, positionElements } from './desk-elements';

const { apple, appleGreen, orange, plate, plateTwo, napkin } = elements;

const { orangeRight, appleLeft } = positionElements;

// const { appleAn, appleLeftAn } = animated;

const levels = [
  [plate, plate],
  [apple, plate, appleGreen, plateTwo],
  [plate, plate, orangeRight],
  [napkin, plateTwo, napkin, plateTwo],
  [apple, plate, orange, plateTwo, apple],
  [plate, appleGreen, plate, plateTwo, appleLeft],
];

const deskIds = [
  ['plate1', 'plate2'],
  ['apple1', 'plate1', 'apple2', 'plate2'],
  ['plate1', 'napkin1', 'orange1'],
  ['plate1', 'plate2'],
];

const animatedElements = [
  ['animate-topSkew', 'no'],
  ['no', 'no', 'no', 'animate-topSkew'],
];

const description = [
  '1:first-child styles applied to the first element among a group of sibling elements',
  '2:first-child styles applied to the first element among a group of sibling elements',
  '3:first-child styles applied to the first element among a group of sibling elements',
  '4:first-child styles applied to the first element among a group of sibling elements',
];

export { levels, deskIds, animatedElements, description };
