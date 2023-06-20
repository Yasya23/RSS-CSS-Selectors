import { Data } from '../../../../interfaces/data';

const DeskWrapperData: Data = {
  container: {
    element: 'section',
    classes: ['mb-9'],
  },
  heading: {
    element: 'h2',
    classes: ['sr-only'],
    textContent: 'Desk with elements for choosing',
  },
  wrapper: {
    element: 'div',
    classes: [
      'relative',
      'w-screen',
      'sm:w-[32rem]',
      'h-32',
      'flex',
      'justify-center',
      'items-center',
    ],
  },
};

export { DeskWrapperData };
