import { ElementsCode } from '../../data/elements-code';
import { CreateHTMLElement } from './createHTMLelement';

import { DeskElements } from '../main/desk-section/create-desk-elements';
class Highlight {
  private codeArray: HTMLElement[];
  private deskElements: HTMLElement[];

  constructor() {
    const { apple, plateOpen, plateClose } = ElementsCode;

    const codeAppleOne = new CreateHTMLElement(apple).getElement();
    const codePlateOneOpen = new CreateHTMLElement(plateOpen).getElement();
    const codeAppleTwo = new CreateHTMLElement(apple).getElement();
    const codePlateOneClose = new CreateHTMLElement(plateClose).getElement();
    codeAppleTwo.classList.add('pl-2');

    this.codeArray = [
      codeAppleOne,
      codePlateOneOpen,
      codeAppleTwo,
      codePlateOneClose,
    ];

    this.deskElements = new DeskElements().getElementsArray();

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

    const tooltip = deskElement.getElementsByTagName('div')[0];
    tooltip?.classList.toggle('invisible');

    deskElement.classList.toggle('ring-4');
    codeElement.classList.toggle('text-white');
  }

  getCodeArray() {
    return this.codeArray;
  }

  getElementsArray() {
    return this.deskElements;
  }
}

export { Highlight };
