import { mainContainer } from '../../../page-elements/main/main';
import { CreateHTMLElement } from '../createHTMLelement';
import { DeskSection } from './desk-section/desk-section';
import { EditorSection } from './editor-section/editor';

class Main {
  private container: HTMLElement;
  private wrapper: HTMLElement;
  private deskSection: HTMLElement;
  private editorSection: HTMLElement;

  constructor() {
    const { main, wrapper } = mainContainer;

    this.container = new CreateHTMLElement(main).getElement();
    this.wrapper = new CreateHTMLElement(wrapper).getElement();

    this.deskSection = new DeskSection().getElement();
    this.editorSection = new EditorSection().getElement();

    this.wrapper.append(this.deskSection, this.editorSection);
    this.container.append(this.wrapper);
  }

  getElement() {
    return this.container;
  }
}

export { Main };
