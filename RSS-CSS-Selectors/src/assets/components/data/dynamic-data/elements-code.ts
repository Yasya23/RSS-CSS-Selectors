const ElementsCode = {
  apple: {
    element: 'div',
    classes: ['text-pink-500'],
    textContent: '<apple></apple>',
  },
  plate: {
    element: 'div',
    classes: ['text-yellow-300'],
    textContent: '<plate></plate>',
  },
  plateOpen: {
    element: 'div',
    classes: ['text-yellow-500'],
    textContent: '<plate>',
  },
  plateClose: {
    element: 'div',
    classes: ['text-yellow-500'],
    textContent: '</ plate>',
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

const { plateOpen, orange, plateClose, napkinOpen, napkinClose, plate } =
  ElementsCode;

const levelsCode = [
  [plate, plate],
  [plate, napkinOpen, orange, napkinClose],
  [plateOpen, plateClose, plateOpen, plateClose],
];

const levelsCodeIds = [
  ['plate1', 'plate2'],
  ['plate1', 'napkin1', 'orange1', 'napkin1'],
  ['plate1', 'plate1', 'plate2', 'plate2'],
];

export { levelsCode, levelsCodeIds };
