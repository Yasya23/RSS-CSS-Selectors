const elements = {
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
      'ring-white/[.65]',
      'shadow-sm',
      'shadow-[0px_2px_3px_2px_rgba(0,0,0,0.25)]',
    ],
  },
  appleGreen: {
    element: 'div',
    classes: [
      'w-12',
      'h-12',
      'flex',
      'justify-center',
      'items-center',
      'bg-lime-400',
      'border-lime-500',
      'border-b-[8px]',
      'border-r-[5px]',
      'border-t-[3px]',
      'border-l-[3px]',
      'rounded-full',
      'ring-white/[.65]',
      'shadow-sm',
      'shadow-[0px_2px_3px_2px_rgba(0,0,0,0.25)]',
    ],
  },
  orange: {
    element: 'div',
    classes: [
      'w-12',
      'h-12',
      'flex',
      'justify-center',
      'items-center',
      'bg-amber-400',
      'border-amber-500',
      'border-b-[8px]',
      'border-r-[5px]',
      'border-t-[3px]',
      'border-l-[3px]',
      'rounded-full',
      'ring-white/[.65]',
      'shadow-sm',
      'shadow-[0px_2px_2px_2px_rgba(0,0,0,0.25)]',
    ],
  },
  plate: {
    element: 'div',
    classes: [
      'relative',
      'w-24',
      'h-24',
      'flex',
      'justify-center',
      'items-center',
      'bg-white',
      'border-slate-150',
      'border-[20px]',
      'rounded-full',
      'ring-white/[.65]',
      'shadow-[0px_2px_2px_2px_rgba(0,0,0,0.30)]',
    ],
  },
  plateTwo: {
    element: 'div',
    classes: [
      'w-16',
      'h-16',
      'flex',
      'justify-center',
      'items-center',
      'bg-white',
      'border-yellow-300',
      'border-[10px]',
      'rounded-full',
      'ring-white/[.65]',
      'shadow-[0px_2px_2px_1px_rgba(0,0,0,0.30)]',
    ],
  },
  napkin: {
    element: 'div',
    classes: [
      'w-28',
      'h-28',
      'flex',
      'justify-center',
      'items-center',
      'bg-rose-700',
      'border-t-rose-900',
      'border-b-rose-900',
      'border-t-[15px]',
      'border-b-[15px]',
      'border-double',
      'ring-white/[.65]',
      'shadow-[0px_2px_2px_1px_rgba(0,0,0,0.30)]',
    ],
  },
};

const { apple, appleGreen, orange, plate, plateTwo, napkin } = elements;

const positionElements = {
  orangeRight: {
    element: 'div',
    classes: [...orange.classes, 'absolute', 'right-6', 'animate-topSkew'],
  },
  orangeLeft: {
    element: 'div',
    classes: [...orange.classes, 'absolute', 'left-6', 'animate-topSkew'],
  },
  appleLeft: {
    element: 'div',
    classes: [
      ...apple.classes,
      'absolute',
      'left-5',
      'ring-gray-400',
      'animate-topSkew',
    ],
  },
};

const { orangeRight, appleLeft } = positionElements;

const animated = {
  appleAn: {
    element: 'div',
    classes: [...apple.classes, 'animate-topSkew'],
  },
  appleLeftAn: {
    element: 'div',
    classes: [...appleLeft.classes, 'animate-topSkew'],
  },
};

const { appleAn, appleLeftAn } = animated;

const Levels = [
  [plate, appleLeftAn, appleAn, plate],
  [plate, plateTwo, orangeRight],
  [napkin, plateTwo, napkin, plateTwo],
  [apple, plate, orange, plateTwo, apple],
  [plate, appleGreen, plate, plateTwo],
];

export { Levels };
