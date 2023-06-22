import { Data } from '../../../../interfaces/data';

const DeskData: Data = {
  wrapper: {
    element: 'div',
    classes: [
      'absolute',
      'flex',
      'top-0',
      'left-0',
      'justify-center',
      'w-full',
      'sm:w-[32rem]',
      'border-b-8',
      'border-amber-700',
      'transform',
    ],
  },
  skewDiv1: {
    element: 'div',
    classes: [
      'w-full',
      'h-32',
      'skew-x-[-10deg]',
      'bg-amber-600',
      'rounded-sm',
    ],
  },
  skewDiv2: {
    element: 'div',
    classes: ['w-full', 'h-32', 'skew-x-[10deg]', 'bg-amber-600', 'rounded-sm'],
  },
  backDiv: {
    element: 'div',
    classes: ['w-1/2', 'h-32', 'bg-amber-600', 'absolute'],
  },
};

export { DeskData };
