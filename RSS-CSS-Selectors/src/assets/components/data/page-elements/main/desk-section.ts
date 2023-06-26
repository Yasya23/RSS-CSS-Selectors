const sectionDesk = {
  section: {
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
  },
  desk: {
    element: 'div',
    classes: [
      'absolute',
      'flex',
      'top-0',
      'left-0',
      'justify-center',
      'items-center',
      'w-full',
      'sm:w-[32rem]',
      'h-36',
      'bg-amber-600',
      'border-b-[4px]',
      'border-amber-900',
      'transform',
    ],
  },
  wrapperElements: {
    wrapper: {
      element: 'div',
      classes: [
        'flex',
        'z-10',
        'transform',
        'gap-5',
        'pt-3',
        'justify-between',
        'items-center',
        'relative',
      ],
    },
  },
};

export { sectionDesk };
