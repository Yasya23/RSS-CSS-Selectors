const data = {
  body: {
    container: {
      element: 'div',
      classes: ['flex', 'w-screen'],
    },
    wrapper: {
      element: 'div',
      classes: [
        'container',
        'mx-auto',
        'flex',
        'flex-col',
        'justify-between',
        'min-h-screen',
        'overflow-hidden',
      ],
    },
  },
  header: {
    container: {
      element: 'header',
      classes: ['mb-1', 'p-4'],
    },
    title: {
      element: 'h1',
      classes: ['text-xl', 'text-yellow-400'],
      textContent: 'CSS',
    },
    titleSpan: {
      element: 'span',
      classes: ['text-amber-600'],
      textContent: ' Diner',
    },
  },
  footer: {
    container: {
      element: 'footer',
      classes: [
        'flex',
        'justify-between',
        'text-slate-500',
        'py-3',
        'px-4',
        'text-xs',
        'sm:text-base',
      ],
    },
    year: {
      element: 'div',
      textContent: '© 2023',
    },

    rsLink: {
      element: 'a',
      href: 'https://rs.school/js/',
    },

    rsLogo: {
      element: 'img',
      classes: ['w-8', 'sm:w-14'],
      src: 'https://rs.school/images/rs_school_js.svg',
      alt: 'RS School logo',
    },

    githubLink: {
      element: 'a',
      href: 'https://github.com/Yasya23',
      textContent: 'GitHub',
    },
  },
  navigation: {
    nav: {
      element: 'nav',
      classes: [
        'w-2/6',
        'sm:w-3/12',
        'min-h-screen',
        'bg-zinc-950',
        'p-1',
        'sm:p-4',
        'shadow-md',
        'shadow-slate-900',
        'text-[10px]',
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
      classes: ['sm:text-2xl', 'text-slate-400', 'mb-2', 'sm:mb-5'],
      textContent: 'Levels',
    },
    list: {
      element: 'ul',
      classes: ['w-full', 'text-slate-400', 'mb-2', 'sm:mb-5'],
    },
    listElement: {
      element: 'li',
      classes: [
        'flex',
        'flex-col',
        'justify-between',
        'pb-1',
        'sm:pb-3',
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
      classes: ['mr-1', 'sm:mr-3'],
      textContent: '✓',
    },

    elementLevelNumber: {
      element: 'span',
      classes: ['font-medium'],
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
    messageWin: {
      element: 'p',
      classes: ['text-green-300', 'text-center', 'py-2'],
    },
    levelsDescription: [
      '(tag)',
      '(.class)',
      '(#id)',
      '(:first-child)',
      '(:last-child)',
      '(:nth-child)',
      '(:nth-of-type)',
      '(:only-child)',
      '(:empty)',
      '(:has)',
    ],
  },
  main: {
    main: {
      element: 'main',
      classes: ['flex', 'justify-center', 'mb-2', 'grow', 'w-full'],
    },
    wrapper: {
      element: 'div',
      classes: [
        'flex',
        'w-full',
        'flex-col',
        'items-center',
        'overflow-hidden',
      ],
    },
  },
  sectionDesk: {
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
        id: 'desk-wrapper',
      },
    },
  },
  editor: {
    container: {
      element: 'section',
      classes: ['w-full', 'md:w-10/12'],
    },

    heading: {
      element: 'h2',
      classes: ['sr-only'],
    },

    wrapper: {
      element: 'div',
      classes: [
        'bg-slate-900',
        'border-8',
        'border-slate-950',
        'rounded',
        'shadow-md',
        'shadow-slate-900',
      ],
    },

    menuWrapper: {
      element: 'div',
      classes: ['flex', 'justify-between'],
    },

    editorWrapper: {
      element: 'div',
      classes: ['flex'],
    },
  },
  htmlEditorData: {
    wrapperHTML: {
      element: 'div',
      classes: ['flex', 'w-1/2', 'h-full', 'bg-slate-800'],
    },

    menuHTML: {
      element: 'div',
      classes: [
        'flex',
        'justify-between',
        'basis-1/2',
        'flex-wrap',
        'p-4',
        'text-xs',
        'sm:text-base',
      ],
    },

    titleHtml: {
      element: 'span',
      classes: ['text-slate-300'],
      textContent: 'HTML viewer',
    },

    subtitleHtml: {
      element: 'span',
      classes: ['text-slate-500'],
      textContent: 'table.html',
    },

    editorNumbersHTML: {
      element: 'div',
      classes: [
        'flex',
        'flex-col',
        'items-center',
        'text-slate-800',
        'bg-slate-700',
        'w-4',
        'sm:w-8',
        'p-2',
        'text-xs',
        'sm:text-base',
      ],
    },

    htmlViewerCode: {
      element: 'div',
      classes: [
        'w-full',
        'flex',
        'flex-col',
        'pt-2',
        'pl-1',
        'text-xs',
        'sm:text-base',
        'overflow-hidden',
      ],
    },

    codeWrapper: {
      element: 'div',
      classes: ['pl-3', 'm-0', 'cursor-default'],
    },

    codeOpen: {
      element: 'div',
      classes: ['text-slate-500'],
      textContent: `<table>`,
    },

    codeClose: {
      element: 'div',
      classes: ['text-slate-500'],
      textContent: `</table>`,
    },
  },
  cssEditorData: {
    wrapper: {
      element: 'div',
      classes: ['flex', 'w-1/2', 'h-full', 'bg-slate-100'],
      id: 'code-wrapper',
    },
    menuCss: {
      element: 'div',
      classes: [
        'flex',
        'justify-between',
        'basis-1/2',
        'flex-wrap',
        'p-4',
        'text-xs',
        'sm:text-base',
      ],
    },

    titleCss: {
      element: 'span',
      classes: ['text-slate-300'],
      textContent: 'CSS editor',
    },

    subtitleCss: {
      element: 'span',
      classes: ['text-slate-500'],
      textContent: 'style.css',
    },

    cssEditorContainer: {
      element: 'div',
      classes: ['flex', 'w-1/2', 'h-full', 'bg-slate-100'],
    },

    editorNumbersCss: {
      element: 'div',
      classes: [
        'flex',
        'flex-col',
        'items-center',
        'text-slate-400',
        'bg-slate-200',
        'w-4',
        'sm:w-8',
        'p-2',
        'text-xs',
        'sm:text-base',
      ],
    },

    cssField: {
      element: 'div',
      classes: [
        'flex',
        'flex-col',
        'gap-1.5',
        'grow',
        'px-2',
        'py-2',
        'overflow-hidden',
      ],
    },

    cssEditorForm: {
      element: 'form',
      classes: [
        'flex',
        'justify-between',
        'flex-wrap',
        'w-full',
        'text-xs',
        'sm:text-base',
      ],
    },

    cssEditorInput: {
      element: 'input',
      classes: [
        'bg-yellow-100',
        'outline-0',
        'grow',
        'animate-pulse',
        'focus:animate-none',
        'focus:bg-slate-100',
        'text-yellow-600',
      ],

      setAttribute: {
        type: 'text',
        placeholder: 'Type your CSS here',
      },
    },

    cssEnterButton: {
      element: 'button',
      classes: [
        'transition',
        'ease-in-out',
        'bg-stone-300',
        'hover:bg-stone-400',
        'text-stone-600',
        'px-2',
        'rounded-sm',
      ],
      textContent: 'Enter',
    },

    cssNotes: {
      element: 'p',
      classes: ['text-slate-300', 'grow', 'text-xs', 'sm:text-base'],
      textContent:
        'Please write your answer in the input field following the rules of the current level',
    },

    cssHelpButton: {
      element: 'button',
      classes: [
        'transition',
        'ease-in-out',
        'bg-stone-300',
        'hover:bg-stone-400',
        'text-stone-600',
        'px-2',
        'rounded-sm',
        'w-full',
        'text-xs',
        'sm:text-base',
      ],
      textContent: "Help, I'm stuck",
    },
  },
};

export { data };
