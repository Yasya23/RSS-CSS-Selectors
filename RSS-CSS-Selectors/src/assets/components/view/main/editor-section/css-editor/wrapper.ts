import { CssEditorData } from '../../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../../createHTMLelement';
import { EditorNumbersList } from '../numbers-list';

class EditorCss {
  private submenu: HTMLElement;
  private editorWrapper: HTMLElement;

  constructor() {
    const {
      submenu,
      submenuTitleCss,
      subtitleCss,
      editorWrapper,
      editorNumbers,
    } = CssEditorData;

    this.submenu = new CreateHTMLElement(submenu).getElement();
    const title = new CreateHTMLElement(submenuTitleCss).getElement();
    const subtitle = new CreateHTMLElement(subtitleCss).getElement();

    this.editorWrapper = new CreateHTMLElement(editorWrapper).getElement();
    const numbersWrapper = new CreateHTMLElement(editorNumbers).getElement();

    const numbersList = EditorNumbersList.getEditorNumbersHTML();
    numbersWrapper.innerHTML = numbersList;

    this.submenu.append(title, subtitle);
    this.editorWrapper.append(numbersWrapper);
  }

  getSubmenu() {
    return this.submenu;
  }

  getEditorWrapper() {
    return this.editorWrapper;
  }
}

export { EditorCss };
