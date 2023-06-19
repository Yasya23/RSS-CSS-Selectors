import { DeskSection } from './desk-section/desk';
import { EditorSection } from './editor-section/editor';

class Main {
  private container: HTMLElement;
  private wrapper: HTMLElement;
  private deskSection: DeskSection;
  private editorSection: EditorSection;

  constructor() {
    this.container = document.createElement('main');
    this.container.classList.add('flex', 'justify-center', 'mb-9');

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('flex', 'w-full', 'flex-col', 'items-center');

    this.deskSection = new DeskSection();
    this.editorSection = new EditorSection();

    this.wrapper.append(this.deskSection.getElement());
    this.wrapper.append(this.editorSection.getElement());

    this.container.append(this.wrapper);
  }

  getElement() {
    return this.container;
  }
}

export { Main };
