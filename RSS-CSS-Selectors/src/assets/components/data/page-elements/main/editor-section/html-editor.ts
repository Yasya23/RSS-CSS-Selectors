import { Data } from '../../../../interfaces/data';

const HtmlEditorData: Data = {
  wrapper: {
    element: 'div',
    classes: ['flex', 'w-1/2', 'h-full', 'bg-slate-800'],
  },

  submenu: {
    element: 'div',
    classes: ['flex', 'justify-between', 'basis-1/2', 'p-4'],
  },

  submenuTitleHtml: {
    element: 'span',
    classes: ['text-slate-300'],
    textContent: 'HTML viewer',
  },

  subtitleHtml: {
    element: 'span',
    classes: ['text-slate-500'],
    textContent: 'table.html',
  },

  editorNumbers: {
    element: 'div',
    classes: [
      'flex',
      'flex-col',
      'items-center',
      'text-slate-800',
      'w-8',
      'bg-slate-700',
      'p-2',
    ],
  },

  htmlViewerCode: {
    element: 'div',
    classes: ['w-full', 'flex', 'flex-col', 'pt-2', 'text-xs', 'md:text-base'],
  },

  codePre: {
    element: 'pre',
    classes: ['p-0', 'm-0'],
  },

  codeBlock: {
    element: 'code',
    classes: ['language-html'],
  },
};

export { HtmlEditorData };
