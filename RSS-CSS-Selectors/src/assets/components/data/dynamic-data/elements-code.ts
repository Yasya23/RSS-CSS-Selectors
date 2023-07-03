const ElementsCode = {
  apple: {
    element: 'div',
    classes: ['text-pink-500'],
    textContent: '<apple></apple>',
  },
  appleClass: {
    element: 'div',
    classes: ['text-pink-500'],
    textContent: '<apple class="red-apple"></apple>',
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
  plateClass: {
    element: 'div',
    classes: ['text-yellow-300'],
    textContent: '<plate class="plate"></plate>',
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
    classes: ['text-orange-500'],
    textContent: '<orange></orange>',
  },
  orangeId: {
    element: 'div',
    classes: ['text-orange-500'],
    textContent: '<orange id="orange"></orange>',
  },
  napkin: {
    element: 'div',
    classes: ['text-cyan-400'],
    textContent: '<napkin></napkin>',
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
  plate,
  plateOpen,
  plateClose,
  plateClass,
  plateTwo,
  orange,
  orangeId,
  napkin,
  napkinOpen,
  napkinClose,
  appleGreen,
  apple,
  appleClass,
} = ElementsCode;

const levelsCode = [
  [plate, plateTwo],
  [plate, appleClass, plate],
  [napkin, orangeId, appleGreen],
  [plateTwo, plate],
  [napkin, orange, napkin],
  [plate, plateTwo, plate, plateTwo],
  [appleGreen, apple, appleGreen, apple, appleGreen],
  [plateOpen, apple, plateClose, plate],
  [plateClass, plateOpen, orange, plateClose],
  [napkin, napkinOpen, orange, napkinClose],
];

const levelsCodeIds = [
  ['plate1', 'plate2'],
  ['plate1', 'apple', 'plate2'],
  ['napkin', 'orange', 'appleGreen'],
  ['plate1', 'plate2'],
  ['napkin1', 'orange', 'napkin2'],
  ['plate1', 'plate2', 'plate3', 'plate4'],
  ['apple1', 'apple2', 'apple3', 'apple4', 'apple5'],
  ['plate1', 'apple', 'plate1', 'plate2'],
  ['plate1', 'plate2', 'orange', 'plate2'],
  ['napkin1', 'napkin2', 'orange', 'napkin2'],
];

export { levelsCode, levelsCodeIds };
