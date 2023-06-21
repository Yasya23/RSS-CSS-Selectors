import { Data } from '../../../../interfaces/data';

const CssEditorData: Data = {
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
    classes: ['flex'],
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

  cssEditor: {
    element: 'div',
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
    ],
    textContent: "Help, I'm stuck",
  },
};

export { CssEditorData };
