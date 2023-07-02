const ElementsCode = {
  apple: {
    element: 'div',
    classes: ['text-pink-500'],
    textContent: '<apple></apple>',
  },
  appleGreen: {
    element: 'div',
    classes: ['text-emerald-400'],
    textContent: '<apple></apple>',
  },
  plate: {
    element: 'div',
    classes: ['text-yellow-300'],
    textContent: '<plate></plate>',
  },
  plateOpen: {
    element: 'div',
    classes: ['text-fuchsia-500'],
    textContent: '<plate>',
  },
  plateClose: {
    element: 'div',
    classes: ['text-fuchsia-500'],
    textContent: '</ plate>',
  },
  plateTwo: {
    element: 'div',
    classes: ['text-red-400'],
    textContent: '<plate></plate>',
  },
  orange: {
    element: 'div',
    classes: ['text-pink-400'],
    textContent: '<orange></orange>',
  },
  napkinOpen: {
    element: 'div',
    classes: ['text-cyan-400'],
    textContent: '<napkin>',
  },
  napkinClose: {
    element: 'div',
    classes: ['text-cyan-400'],
    textContent: '</napkin>',
  },
};

const {
  plateOpen,
  orange,
  plateClose,
  napkinOpen,
  napkinClose,
  plate,
  appleGreen,
  apple,
  plateTwo,
} = ElementsCode;

const levelsCode = [
  [plate, plate],
  [plate, plate],
  [plate, plate],
  [plate, plate],
  [plate, plate],
  [plate, plate],
  [plate, plate],
  [plate, plate],
  [plate, plate],
  [plate, plate],
  [apple, plate, appleGreen, plateTwo],
  [plate, napkinOpen, orange, napkinClose, plateClose, plateOpen],
];

// const answers = [['plate:first-child']];

// const description = [
//   ':first-child styles applied to the first element among a group of sibling elements',
//   ':first-child styles applied to the first element among a group of sibling elements',
//   ':first-child styles applied to the first element among a group of sibling elements',
//   ':first-child styles applied to the first element among a group of sibling elements',
// ];

const levelsCodeIds = [
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['plate1', 'plate2'],
  ['apple1', 'plate1', 'apple2', 'plate2'],
  ['plate1', 'plate1', 'plate2', 'plate2'],
];

export { levelsCode, levelsCodeIds };
