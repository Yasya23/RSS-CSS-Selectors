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
    classes: [
      'w-full',
      'flex',
      'flex-col',
      'pt-2',
      'pl-1',
      'text-xs',
      'md:text-base',
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
    textContent: `<div class="table">`,
  },

  codeClose: {
    element: 'div',
    classes: ['text-slate-500'],
    textContent: `</div>`,
  },
};

export { HtmlEditorData };
