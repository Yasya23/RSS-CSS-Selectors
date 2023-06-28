const sectionDesk = {
  section: {
    container: {
      element: 'section',
      classes: [
        'mb-9',
        'w-full',
        'sm:w-[30rem]',
        'md:w-[32rem]',
        'h-40',
        'py-3',
      ],
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
        'h-full',
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
      'h-full',
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
        'gap-3',
        'md:gap-5',
        'justify-around',
        'items-center',
        'relative',
      ],
    },
  },
};

export { sectionDesk };
