import { ElementsCode } from '../../../../data/elements-code';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';

class CodeElements {
  private elementsArray: HTMLElement[];

  constructor() {
    const { apple, plateOpen, plateClose } = ElementsCode;

    const codeAppleOne = new CreateHTMLElement(apple).getElement();
    const codePlateOneOpen = new CreateHTMLElement(plateOpen).getElement();
    const codeAppleTwo = new CreateHTMLElement(apple).getElement();
    const codePlateOneClose = new CreateHTMLElement(plateClose).getElement();
    codeAppleTwo.classList.add('pl-2');
    this.elementsArray = [
      codeAppleOne,
      codePlateOneOpen,
      codeAppleTwo,
      codePlateOneClose,
    ];
    this.elementsArray.forEach((element, index) => {
      element.dataset.id = `code-${index}`;
    });
  }

  getElementsArray() {
    return this.elementsArray;
  }
}

export { CodeElements };
