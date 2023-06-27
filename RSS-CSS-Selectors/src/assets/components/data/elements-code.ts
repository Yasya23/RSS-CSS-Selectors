const ElementsCode = {
  apple: {
    element: 'div',
    classes: ['text-pink-500'],
    textContent: '<apple></apple>',
  },
  plate: {
    element: 'div',
    classes: ['text-yellow-300'],
    textContent: '<plate>',
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
    textContent: '<apple></apple>',
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
  [plateOpen, plateClose, napkinOpen, orange, napkinClose],
  [plateOpen, plateClose, plateOpen, plateClose],
];

const levelsCodeIds = [
  ['plate1', 'plate2'],
  ['plate', 'plate', 'napkin', 'orange', 'napkin'],
];

export { levelsCode, levelsCodeIds };
