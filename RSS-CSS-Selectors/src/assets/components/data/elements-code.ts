const ElementsCode = {
  apple: {
    element: 'div',
    classes: ['text-pink-500'],
    textContent: '<apple></apple>',
  },
  plateOpen: {
    element: 'div',
    classes: ['text-pink-100'],
    textContent: '<plate>',
  },
  plateClose: {
    element: 'div',
    classes: ['text-pink-100'],
    textContent: '</ plate>',
  },
};

const { apple, plateClose } = ElementsCode;

const levelsCode = [[apple, plateClose]];

export { ElementsCode, levelsCode };
