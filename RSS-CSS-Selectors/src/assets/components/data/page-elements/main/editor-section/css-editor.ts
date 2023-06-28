const cssEditorData = {
  wrapper: {
    element: 'div',
    classes: ['flex', 'w-1/2', 'h-full', 'bg-slate-100'],
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
      'bg-cyan-100',
      'outline-0',
      'grow',
      'animate-pulse',
      'focus:animate-none',
      'focus:bg-slate-100',
    ],

    setAttribute: {
      type: 'text',
      placeholder: 'Type your CSS here',
      value: 'h',
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
    textContent: 'Click Help',
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
};

export { cssEditorData };
