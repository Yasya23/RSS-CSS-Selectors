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
  private level: number;

  constructor(level: number, elementNames: ElementStructure[]) {
    this.level = level;
    this.elementsArray = [];

    if (Array.isArray(elementNames)) {
      this.elementsArray = elementNames.map(
        (elementName: ElementStructure, index: number): HTMLElement => {
          const element = new CreateHTMLElement(elementName).getElement();
          element.classList.add(animatedElements[this.level][index]);
          const tooltipElement = new CreateHTMLElement(tooltip).getElement();
          tooltipElement.textContent = tooltipTextcontent[level][index];
          element.append(tooltipElement);
          return element;
        }
      );
    }

    ElementsIds.assignUniqueIds(
      this.elementsArray,
      deskIds[this.level],
      'desk'
    );
  }

  getElementsArray() {
    return this.elementsArray;
  }
}

export { DeskElements };
