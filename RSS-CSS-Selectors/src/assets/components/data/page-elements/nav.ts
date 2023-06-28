const navigationData = {
  nav: {
    element: 'nav',
    classes: [
      'w-2/6',
      'sm:w-3/12',
      'min-h-screen',
      'bg-zinc-950',
      'p-2',
      'sm:p-4',
      'shadow-md',
      'shadow-slate-900',
      'text-xs',
      'sm:text-base',
    ],
  },
  wrapper: {
    element: 'div',
    classes: ['w-full', 'select-none'],
  },
  title: {
    element: 'p',
    classes: ['sm:text-2xl', 'text-slate-400', 'mb-5'],
    textContent: 'Levels',
  },
  list: {
    element: 'ul',
    classes: ['w-full', 'text-slate-400', 'mb-5'],
  },
  listElement: {
    element: 'li',
    classes: [
      'flex',
      'flex-col',
      'justify-between',
      'pb-3',
      'select-none',
      'text-zinc-400',
    ],
  },

  elementWrapper: {
    element: 'a',
    href: '#',
    classes: ['mb-2', 'hover:text-yellow-400', 'transition-all'],
  },

  elementSign: {
    element: 'span',
    classes: ['mr-3'],
    textContent: '✓',
  },

  elementLevelNumber: {
    element: 'span',
    classes: ['font-bold'],
  },

  elementDescription: {
    element: 'p',
    classes: ['text-sm'],
  },

  resetButton: {
    element: 'button',
    classes: [
      'transition',
      'ease-in-out',
      'bg-stone-600',
      'hover:bg-stone-500',
      'text-stone-300',
      'p-2',
      'rounded-sm',
      'w-full',
      'text-xs',
      'md:text-base',
    ],
    textContent: 'Reset Progress',
  },
};

const levelsDescription = [
  'Find all id elements',
  'Find all id elements',
  'Find all id elements',
  'Find all id elements',
  'Find all id elements',
  'Find all id elements',
  'Find all id elements',
  'Find all id elements',
  'Find all id elements',
  'Find all id elements',
];

export { navigationData, levelsDescription };
