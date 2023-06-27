const ElementsCode = {
  apple: {
    element: 'div',
    classes: ['text-pink-500'],
    textContent: '<apple></apple>',
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
};

const { plateOpen, apple, plateClose } = ElementsCode;

const levelsCode = [
  [plateOpen, apple, plateClose, apple, plateOpen, plateClose],
];

const levelsCodeIds = [
  ['plate1', 'apple1', 'plate1', 'apple2', 'plate2', 'plate2'],
];

export { levelsCode, levelsCodeIds };
