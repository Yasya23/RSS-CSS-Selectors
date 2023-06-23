import { ElementsCode } from '../../data/elements-code';
import { CreateHTMLElement } from './createHTMLelement';
import { DeskData } from '../../data/desk-elements';

class Highlight {
  private codeArray: HTMLElement[];
  private deskElements: HTMLElement[];
  private tooltip: HTMLElement;

  constructor() {
    const { apple, plateOpen, plateClose } = ElementsCode;

    const { apple: appleImg } = DeskData;

    const codeAppleOne = new CreateHTMLElement(apple).getElement();
    const codePlateOneOpen = new CreateHTMLElement(plateOpen).getElement();
    const codeAppleTwo = new CreateHTMLElement(apple).getElement();
    const codePlateOneClose = new CreateHTMLElement(plateClose).getElement();
    codeAppleTwo.classList.add('pl-2');
    const appleFruitOne = new CreateHTMLElement(appleImg).getElement();
    const appleFruitTwo = new CreateHTMLElement(appleImg).getElement();

    this.tooltip = new CreateHTMLElement(apple).getElement();
    this.tooltip.classList.add(
      'invisible',
      'w-max',
      'h-max',
      'p-2',
      'bg-slate-100',
      'absolute',
      'text-center',
      'align-middle',
      'rounded-sm',
      'bottom-14',
      'drop-shadow-md'
    );

    appleFruitOne.append(this.tooltip);

    this.codeArray = [
      codeAppleOne,
      codePlateOneOpen,
      codeAppleTwo,
      codePlateOneClose,
    ];
    this.deskElements = [appleFruitOne, appleFruitTwo];

    this.assignIds();

    this.addHoverListeners();
  }

  private assignIds(): void {
    this.codeArray.forEach((element, index) => {
      element.id = `code-${index}`;
    });

    this.deskElements.forEach((element, index) => {
      element.id = `desk-${index}`;
    });
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
