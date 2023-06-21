import { Data } from '../../interfaces/data';

const Body: Data = {
  container: {
    element: 'div',
    classes: ['flex'],
  },
  wrapper: {
    element: 'div',
    classes: [
      'container',
      'mx-auto',
      'p-4',
      'flex',
      'flex-col',
      'justify-between',
      'min-h-screen',
    ],
  },
};

export { Body };
