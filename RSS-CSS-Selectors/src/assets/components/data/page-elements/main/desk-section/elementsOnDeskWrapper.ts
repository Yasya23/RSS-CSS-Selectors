import { Data } from '../../../../interfaces/data';

const ElementsWrapperData: Data = {
  wrapper: {
    element: 'div',
    classes: ['flex', 'z-10'],
  },
  element1: {
    element: 'div',
    classes: [
      'w-14',
      'h-14',
      'flex',
      'justify-center',
      'items-center',
      'bg-red-600',
      'border-red-700',
      'border-b-8',
      'border-r-4',
      'rounded-full',
    ],
  },
  element2: {
    element: 'div',
    classes: ['w-6', 'h-6', 'bg-red-500', 'rounded-full', 'animate-bounce'],
  },
};

export { ElementsWrapperData };
