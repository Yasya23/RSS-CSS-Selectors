import { CodeElements } from './editor-section/code-editor/create-code-elements';
import { DeskElements } from './desk-section/create-desk-elements';
import { Levels } from '../../data/desk-elements-levels';
import { levelsCode } from '../../data/elements-code';

class Highlight {
  private codeArray: HTMLElement[];
  private deskElements: HTMLElement[];

  constructor() {
    this.deskElements = new DeskElements(Levels[0]).getElementsArray();
    this.codeArray = new CodeElements(levelsCode[0]).getElementsArray();

    this.addHoverListeners();
  }

  public addHoverListeners(): void {
    this.codeArray.forEach((element, index: number) => {
      this.elementMouseActions(element, index);
    });

    this.deskElements.forEach((element, index: number) => {
      this.elementMouseActions(element, index);
    });
  }

  private elementMouseActions(element: HTMLElement, index: number): void {
    element.addEventListener('mouseover', () => {
      this.highlightClassToggle(index);
    });

    element.addEventListener('mouseleave', () => {
      this.highlightClassToggle(index);
    });
  }

  private highlightClassToggle(index: number): void {
    const codeElement = this.codeArray[index];
    const deskElement = this.deskElements[index];

    const getDeskElement = document.getElementById(`${deskElement.id}`);
    const tooltip = getDeskElement?.getElementsByTagName('div')[0];
    tooltip?.classList.toggle('invisible');
    const getCodeElement = document.getElementById(`${codeElement.id}`);

    if (getDeskElement && getCodeElement) {
      getDeskElement.classList.toggle('ring-4');
      getCodeElement.classList.toggle('mix-blend-hard-light');
    }
  }

  getCodeArray() {
    return this.codeArray;
  }

  getElementsArray() {
    return this.deskElements;
  }
}

export { Highlight };
