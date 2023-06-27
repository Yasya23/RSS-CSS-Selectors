import { elements, positionElements, animated } from './desk-elements';

const { apple, appleGreen, orange, plate, plateTwo, napkin } = elements;

const { orangeRight, appleLeft } = positionElements;

const { appleAn, appleLeftAn } = animated;

const Levels = [
  [plate, appleLeftAn, appleAn, plate],
  [plate, plateTwo, orangeRight],
  [napkin, plateTwo, napkin, plateTwo],
  [apple, plate, orange, plateTwo, apple],
  [plate, appleGreen, plate, plateTwo, appleLeft],
];

const deskIds = [['plate1', 'apple1', 'apple2', 'plate2']];

export { Levels, deskIds };
