import { CodeElements } from './editor-section/code-editor/create-code-elements';
import { DeskElements } from './desk-section/create-desk-elements';

class Highlight {
  private codeArray: HTMLElement[];
  private deskElements: HTMLElement[];

  constructor() {
    this.deskElements = new DeskElements().getElementsArray();
    this.codeArray = new CodeElements().getElementsArray();

    // this.assignDataIds();
    this.addHoverListeners();
  }

  // private assignDataIds(): void {
  //   this.codeArray.forEach((element, index) => {
  //     element.dataset.id = `code-${index}`;
  //   });

  //   this.deskElements.forEach((element, index) => {
  //     element.dataset.id = `desk-${index}`;
  //   });
  // }

  public addHoverListeners(): void {
    this.codeArray.forEach((element, index: number) => {
      element.addEventListener('mouseover', () => {
        this.highlightClassToggle(index);
      });

      element.addEventListener('mouseleave', () => {
        this.highlightClassToggle(index);
      });
    });

    this.deskElements.forEach((element, index: number) => {
      element.addEventListener('mouseover', () => {
        this.highlightClassToggle(index);
      });

      element.addEventListener('mouseleave', () => {
        this.highlightClassToggle(index);
      });
    });
  }

  private highlightClassToggle(index: number): void {
    const codeElement = this.codeArray[index];
    const deskElement = this.deskElements[index];

    const codeDataId = codeElement.dataset.id;
    const deskDataId = deskElement.dataset.id;

    const getDeskElement = document.querySelector(`[data-id="${deskDataId}"]`);
    const tooltip = getDeskElement?.getElementsByTagName('div')[0];
    tooltip?.classList.toggle('invisible');
    const getCodeElement = document.querySelector(`[data-id="${codeDataId}"]`);

    if (getDeskElement && getCodeElement) {
      getDeskElement.classList.toggle('ring-4');
      getCodeElement.classList.toggle('text-white');
    }
  }

  // public addHoverListeners(): void {
  //   this.codeArray.forEach((element, index: number) => {
  //     this.elementMouseActions(element, index);
  //   });

  //   this.deskElements.forEach((element, index: number) => {
  //     this.elementMouseActions(element, index);
  //   });
  // }

  // private elementMouseActions(element: HTMLElement, index: number): void {
  //   element.addEventListener('mouseover', () => {
  //     this.highlightClassToggle(index);
  //   });

  //   element.addEventListener('mouseleave', () => {
  //     this.highlightClassToggle(index);
  //   });
  // }

  // private highlightClassToggle(index: number): void {
  //   const codeElement = this.codeArray[index];
  //   const deskElement = this.deskElements[index];

  //   const tooltip = deskElement.getElementsByTagName('div')[0];
  //   tooltip?.classList.toggle('invisible');

  //   deskElement.classList.toggle('ring-4');
  //   codeElement.classList.toggle('text-white');
  // }

  getCodeArray() {
    return this.codeArray;
  }

  getElementsArray() {
    return this.deskElements;
  }
}

export { Highlight };
