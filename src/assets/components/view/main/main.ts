import { levels } from '../../data/dynamic-data/elements-levels-data';
import { data } from '../../data/page-elements/page-elements';
import { CreateHTMLElement } from '../elements-actions/createHTMLelement';
import { DeskElements } from './desk-section/create-desk-elements';
import { DeskSection } from './desk-section/desk-section';
import { EditorSection } from './editor-section/editor';
import { Highlight } from './highlite-when-mouseover';
import { CodeElements } from './editor-section/html-viewer/create-code-elements';
import { levelsCode } from '../../data/dynamic-data/elements-code';

class Main {
  private container: HTMLElement;
  private mainWrapper: HTMLElement;
  private level: number;

  constructor(level: number) {
    this.level = level;
    const { main, wrapper } = data.main;

    this.container = new CreateHTMLElement(main).getElement();
    this.mainWrapper = new CreateHTMLElement(wrapper).getElement();

    const elementsDesk = new DeskElements(
      level,
      levels[level]
    ).getElementsArray();

    const codeArray = new CodeElements(
      level,
      levelsCode[level]
    ).getElementsArray();
    const array = [...elementsDesk, ...codeArray];
    new Highlight(array);

    const mainDeskSection = new DeskSection(elementsDesk).getElement();

    const editorSection = new EditorSection(this.level, codeArray).getElement();

    this.mainWrapper.append(mainDeskSection, editorSection);

    this.container.append(this.mainWrapper);
  }

  getElement() {
    return this.container;
  }
}

export { Main };
