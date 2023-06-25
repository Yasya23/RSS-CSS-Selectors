import { Data } from '../../../interfaces/page-elements';

const section: Data = {
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
      'sm:w-[30rem]',
      'md:w-[32rem]',
      'h-32',
      'flex',
      'justify-center',
      'items-center',
      'perspective',
    ],
  },
};

const desk: Data = {
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

const wrapperElements: Data = {
  wrapper: {
    element: 'div',
    classes: ['flex', 'z-10', 'transform'],
  },
};

export { section, desk, wrapperElements };
