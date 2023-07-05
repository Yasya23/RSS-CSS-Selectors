const htmlEditorData = {
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
    classes: ['pl-3', 'm-0'],
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
};

export { htmlEditorData };
