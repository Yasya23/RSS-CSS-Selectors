import { EditorData } from '../../../data/page-elements/main/editor-section/editor';
import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { EditorCss } from './css-editor/wrapper';

class EditorSection {
  private container: HTMLElement;
  private wrapper: HTMLElement;
  private menuWrapper: HTMLElement;
  private editorWrapper: HTMLElement;

  constructor() {
    const { container, heading, wrapper, menuWrapper, editorWrapper } =
      EditorData;
    this.container = new CreateHTMLElement(container).getElement();
    this.wrapper = new CreateHTMLElement(wrapper).getElement();

    const header = new CreateHTMLElement(heading).getElement();

    this.menuWrapper = new CreateHTMLElement(menuWrapper).getElement();

    this.editorWrapper = new CreateHTMLElement(editorWrapper).getElement();

    const cssMenu = new EditorCss().getSubmenu();
    const cssEditorWrapper = new EditorCss().getEditorWrapper();

    this.container.append(header, this.wrapper);
    this.wrapper.append(this.menuWrapper, this.editorWrapper);
    this.menuWrapper.append(cssMenu);
    this.editorWrapper.append(cssEditorWrapper);
  }

  getElement() {
    return this.container;
  }
}

export { EditorSection };
