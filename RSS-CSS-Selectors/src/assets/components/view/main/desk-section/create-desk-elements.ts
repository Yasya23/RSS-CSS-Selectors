import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { ElementsIds } from '../../actions/add-data-id';
import { ElementStructure } from '../../../types/page-elements-structure';
import {
  deskIds,
  animatedElements,
} from '../../../data/dynamic-data/elements-levels-data';
import {
  tooltip,
  tooltipTextcontent,
} from '../../../data/dynamic-data/tooltip-desk-elemets';

class DeskElements {
  private elementsArray: HTMLElement[];

  constructor(level: number, elementNames: ElementStructure[]) {
    this.elementsArray = [];

    if (Array.isArray(elementNames)) {
      this.elementsArray = elementNames.map(
        (elementName: ElementStructure, index: number): HTMLElement => {
          const element = new CreateHTMLElement(elementName).getElement();
          element.classList.add(animatedElements[0][index]);
          const tooltipElement = new CreateHTMLElement(tooltip).getElement();
          tooltipElement.textContent = tooltipTextcontent[level][index];
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

export { DeskElements };
