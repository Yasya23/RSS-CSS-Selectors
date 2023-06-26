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

const levelsCode = [[plateOpen, apple, plateClose]];

export { ElementsCode, levelsCode };
