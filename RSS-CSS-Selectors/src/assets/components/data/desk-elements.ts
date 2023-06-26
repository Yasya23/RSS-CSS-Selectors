import { Data } from '../interfaces/page-elements';

const DeskData: Data = {
  apple: {
    element: 'div',
    classes: [
      'relative',
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
      'ring-white/[.55]',
      'shadow-sm',
      'shadow-[0px_4px_2px_0px_rgba(0,0,0,0.25)]',
      'animate-topSkew',
    ],
  },
  appleSmall: {
    element: 'div',
    classes: [
      'relative',
      'w-10',
      'h-10',
      'flex',
      'justify-center',
      'items-center',
      'bg-red-600',
      'border-red-700',
      'border-b-[8px]',
      'border-r-[5px]',
      'border-t-[3px]',
      'border-l-[3px]',
      'rounded-full',
      'ring-white/[.55]',
      'shadow-sm',
      'shadow-[0px_4px_2px_0px_rgba(0,0,0,0.25)]',
      'animate-topSkew',
    ],
  },
  plate: {
    element: 'div',
    classes: [
      'w-24',
      'h-24',
      'flex',
      'justify-center',
      'items-center',
      'bg-white',
      'border-slate-150',
      'border-[20px]',
      'rounded-full',
      'ring-white/[.55]',
      'relative',
      'shadow-[0px_6px_2px_0px_rgba(0,0,0,0.30)]',
      'animate-topSkew',
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
      'ring-white/[.55]',
      'relative',
      'shadow-[0px_6px_2px_0px_rgba(0,0,0,0.30)]',
    ],
  },
};

const { appleSmall, plate, plateTwo } = DeskData;
const Levels = [[appleSmall, plate, plateTwo]];

export { DeskData, Levels };
