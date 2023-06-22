import { ElementsCode } from '../../data/elements-code';
import { CreateHTMLElement } from './createHTMLelement';
import { DeskData } from '../../data/desk-elements';

class Highlight {
  private codeArray: HTMLElement[];
  private deskElements: HTMLElement[];

  constructor() {
    const { apple } = ElementsCode;
    const { apple: appleImg } = DeskData;

    const codeAppleOne = new CreateHTMLElement(apple).getElement();
    const codeAppleTwo = new CreateHTMLElement(apple).getElement();

    const appleFruitOne = new CreateHTMLElement(appleImg).getElement();
    const appleFruitTwo = new CreateHTMLElement(appleImg).getElement();

    this.codeArray = [codeAppleOne, codeAppleTwo];
    this.deskElements = [appleFruitOne, appleFruitTwo];

    this.assignDataIds();
    this.addHoverListeners();
  }

  private assignDataIds(): void {
    this.codeArray.forEach((element, index) => {
      element.dataset.id = `code-${index}`;
    });

    this.deskElements.forEach((element, index) => {
      element.dataset.id = `desk-${index}`;
    });
  }

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
    const getCodeElement = document.querySelector(`[data-id="${codeDataId}"]`);

    if (getDeskElement && getCodeElement) {
      getDeskElement.classList.toggle('ring-4');
      getCodeElement.classList.toggle('text-white');
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
