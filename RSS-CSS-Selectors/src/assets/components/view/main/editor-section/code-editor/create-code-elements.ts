// import { ElementsCode } from '../../../../data/elements-code';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';
import { ElementsIds } from '../../../actions/add-data-id';
import { ElementStructure } from '../../../../types/page-elements-structure';
import { levelsCodeIds } from '../../../../data/dynamic-data/elements-code';

class CodeElements {
  private elementsArray: HTMLElement[];

  constructor(elementNames: ElementStructure[]) {
    this.elementsArray = elementNames.map((elementName) => {
      return new CreateHTMLElement(elementName).getElement();
    });

    ElementsIds.assignUniqueIds(this.elementsArray, levelsCodeIds[0], 'code');
  }

  getElementsArray() {
    return this.elementsArray;
  }
  // private elementsArray: HTMLElement[];

  // constructor() {
  //   const { apple, plateOpen, plateClose } = ElementsCode;

  //   const codeAppleOne = new CreateHTMLElement(apple).getElement();
  //   const codePlateOneOpen = new CreateHTMLElement(plateOpen).getElement();
  //   const codeAppleTwo = new CreateHTMLElement(apple).getElement();
  //   const codePlateOneClose = new CreateHTMLElement(plateClose).getElement();
  //   codeAppleTwo.classList.add('pl-2');
  //   this.elementsArray = [
  //     codeAppleOne,
  //     codePlateOneOpen,
  //     codeAppleTwo,
  //     codePlateOneClose,
  //   ];

  //   ElementsIds.assignUniqueIds(this.elementsArray, 'code');
  // }

  // getElementsArray() {
  //   return this.elementsArray;
  // }
}

export { CodeElements };
