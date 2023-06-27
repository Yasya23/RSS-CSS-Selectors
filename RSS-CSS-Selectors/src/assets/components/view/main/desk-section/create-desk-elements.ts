// import { DeskData } from '../../../data/desk-elements';
// import { ElementsCode } from '../../../data/elements-code';
import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { ElementsIds } from '../../actions/addElement-id';
import { ElementStructure } from '../../../interfaces/page-elements';
import { deskIds } from '../../../data/elements-levels';
import {
  tooltip,
  tooltipTextcontent,
} from '../../../data/tooltip-desk-elemets';

class DeskElements {
  private elementsArray: HTMLElement[];

  constructor(elementNames: ElementStructure[]) {
    this.elementsArray = [];

    if (Array.isArray(elementNames)) {
      this.elementsArray = elementNames.map(
        (elementName: ElementStructure, index: number): HTMLElement => {
          // return new CreateHTMLElement(elementName).getElement();
          const element = new CreateHTMLElement(elementName).getElement();
          const tooltipElement = new CreateHTMLElement(tooltip).getElement();
          tooltipElement.textContent = tooltipTextcontent[0][index];
          element.append(tooltipElement);
          return element;
        }
      );
    }

    ElementsIds.assignUniqueIds(this.elementsArray, deskIds[0], 'desk');
  }

  getElementsArray() {
    return this.elementsArray;
  }
}

// class DeskElements {
//   private elementsArray: HTMLElement[];
//   private tooltip: HTMLElement;

//   constructor() {
//     const { apple } = DeskData;
//     const { apple: appleCode } = ElementsCode;

//     const appleFruitOne = new CreateHTMLElement(apple).getElement();
//     const appleFruitTwo = new CreateHTMLElement(apple).getElement();
//     const appleFruitThree = new CreateHTMLElement(apple).getElement();

//     this.tooltip = new CreateHTMLElement(appleCode).getElement();
//     this.tooltip.classList.add(
//       'invisible',
//       'w-max',
//       'h-max',
//       'p-2',
//       'bg-slate-100',
//       'absolute',
//       'text-center',
//       'align-middle',
//       'rounded-sm',
//       'bottom-14',
//       'drop-shadow-md'
//     );

//     appleFruitOne.append(this.tooltip);
//     this.elementsArray = [appleFruitOne, appleFruitTwo, appleFruitThree];
//     ElementsIds.assignUniqueIds(this.elementsArray, 'desk');
//   }

//   getElementsArray() {
//     return this.elementsArray;
//   }
// }

export { DeskElements };
