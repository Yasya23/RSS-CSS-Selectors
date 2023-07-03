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

const description = [
  'Choose elements using tag example: orange',
  '2:first-child styles applied to the first element among a group of sibling elements',
  '3:first-child styles applied to the first element among a group of sibling elements',
  '4:first-child styles applied to the first element among a group of sibling elements',
  '5:first-child styles applied to the first element among a group of sibling elements',
  '6:first-child styles applied to the first element among a group of sibling elements',
  '7:first-child styles applied to the first element among a group of sibling elements',
  '8:first-child styles applied to the first element among a group of sibling elements',
  '9:first-child styles applied to the first element among a group of sibling elements',
  '10:first-child styles applied to the first element among a group of sibling elements',
];

export { levels, deskIds, animatedElements, description };
