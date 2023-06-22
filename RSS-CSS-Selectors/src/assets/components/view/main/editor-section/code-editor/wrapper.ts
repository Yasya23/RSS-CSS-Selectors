import { HtmlEditorData } from '../../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';
import { EditorNumbersList } from '../create-numbers-list';
import { Code } from './code';

class EditorCode {
  private menu: HTMLElement;
  private editorWrapper: HTMLElement;

  constructor() {
    const { wrapper, submenu, submenuTitleHtml, subtitleHtml, editorNumbers } =
      HtmlEditorData;

    this.menu = new CreateHTMLElement(submenu).getElement();
    const title = new CreateHTMLElement(submenuTitleHtml).getElement();
    const subtitle = new CreateHTMLElement(subtitleHtml).getElement();

    this.editorWrapper = new CreateHTMLElement(wrapper).getElement();

    const numbersWrapper = new CreateHTMLElement(editorNumbers).getElement();
    const numbersList = EditorNumbersList.createEditorNumbers();
    numbersWrapper.append(...numbersList);

    const codeField = new Code().getElement();

    this.menu.append(title, subtitle);
    this.editorWrapper.append(numbersWrapper, codeField);
  }

  getSubmenu() {
    return this.menu;
  }

  getEditorWrapper() {
    return this.editorWrapper;
  }
}

export { EditorCode };
