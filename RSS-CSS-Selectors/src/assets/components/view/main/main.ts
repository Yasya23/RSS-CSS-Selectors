import { MainData } from '../../data/page-elements/main/main';
import { CreateHTMLElement } from '../actions/createHTMLelement';
import { DeskSection } from './desk-section/desk-section';
import { EditorSection } from './editor-section/editor';

class Main {
  private container: HTMLElement;
  private mainWrapper: HTMLElement;

  constructor() {
    const { main, wrapper } = MainData;

    this.container = new CreateHTMLElement(main).getElement();
    this.mainWrapper = new CreateHTMLElement(wrapper).getElement();

    const mainDeskSection = new DeskSection().getElement();
    const mainEditorSection = new EditorSection().getElement();

    this.mainWrapper.append(mainDeskSection, mainEditorSection);
    this.container.append(this.mainWrapper);
  }

  getElement() {
    return this.container;
  }
}

export { Main };
