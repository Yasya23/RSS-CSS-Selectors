import { Data } from '../interfaces/data';

const DeskData: Data = {
  apple: {
    element: 'div',
    classes: [
      'w-14',
      'h-14',
      'flex',
      'justify-center',
      'items-center',
      'bg-red-600',
      'border-red-700',
      'border-b-[10px]',
      'border-r-[10px]',
      'border-t-[3px]',
      'border-l-[3px]',
      'rounded-full',
      'ring-white',
      'relative',
    ],
  },
  orange: {
    element: 'div',
    classes: [
      'w-14',
      'h-14',
      'flex',
      'justify-center',
      'items-center',
      'bg-red-600',
      'border-red-200',
      'border-b-[10px]',
      'border-r-[10px]',
      'border-t-[3px]',
      'border-l-[3px]',
      'rounded-full',
      'ring-white',
      'relative',
    ],
  },
};

const { apple, orange } = DeskData;
const Levels = [
  [apple, orange, apple],
  [apple, apple, apple],
];

export { DeskData, Levels };
