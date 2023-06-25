import { Data } from '../../../../interfaces/page-elements';

const containerData: Data = {
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
};

const cssEditor: Data = {
  wrapper: {
    element: 'div',
    classes: ['flex', 'w-1/2', 'h-full', 'bg-slate-100'],
  },
  submenu: {
    element: 'div',
    classes: ['flex', 'justify-between', 'basis-1/2', 'p-4'],
  },

  submenuTitleCss: {
    element: 'span',
    classes: ['text-slate-300'],
    textContent: 'CSS editor',
  },

  subtitleCss: {
    element: 'span',
    classes: ['text-slate-500'],
    textContent: 'style.css',
  },

  editorWrapper: {
    element: 'div',
    classes: ['flex', 'w-1/2', 'h-full', 'bg-slate-100'],
  },

  editorNumbers: {
    element: 'div',
    classes: [
      'flex',
      'flex-col',
      'items-center',
      'w-8',
      'p-2',
      'text-slate-400',
      'bg-slate-200',
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
    classes: ['flex', 'justify-between', 'flex-wrap', 'w-full'],
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
    classes: ['text-slate-300', 'grow'],
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
    ],
    textContent: "Help, I'm stuck",
  },
};

export { containerData, cssEditor };
