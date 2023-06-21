import { CssEditorData } from '../../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';
import { EditorNumbersList } from '../create-numbers-list';
import { EditorInput } from './input';
import { EditorNotes } from './notes';
import { HelpButton } from './help-button';

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
      cssField,
    } = CssEditorData;

    this.submenu = new CreateHTMLElement(submenu).getElement();
    const title = new CreateHTMLElement(submenuTitleCss).getElement();
    const subtitle = new CreateHTMLElement(subtitleCss).getElement();

    this.editorWrapper = new CreateHTMLElement(editorWrapper).getElement();
    const numbersWrapper = new CreateHTMLElement(editorNumbers).getElement();

    const numbersList = EditorNumbersList.getEditorNumbersHTML();
    numbersWrapper.innerHTML = numbersList;
    const cssFieldWrapper = new CreateHTMLElement(cssField).getElement();
    const form = new EditorInput().getElement();

    const notes = new EditorNotes().getElement();
    const helpButton = new HelpButton().getElement();

    this.submenu.append(title, subtitle);
    cssFieldWrapper.append(form, notes, helpButton);
    this.editorWrapper.append(numbersWrapper, cssFieldWrapper);
  }

  getSubmenu() {
    return this.submenu;
  }

  getEditorWrapper() {
    return this.editorWrapper;
  }
}

export { EditorCss };