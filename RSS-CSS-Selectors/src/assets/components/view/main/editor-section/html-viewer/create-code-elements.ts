// import { ElementsCode } from '../../../../data/elements-code';
import { CreateHTMLElement } from '../../../elements-actions/createHTMLelement';
import { ElementsIds } from '../../../elements-actions/add-data-id';
import { ElementStructure } from '../../../../types/page-elements-structure';
import { levelsCodeIds } from '../../../../data/dynamic-data/elements-code';

class CodeElements {
  private elementsArray: HTMLElement[];

  constructor(level: number, elementNames: ElementStructure[]) {
    this.elementsArray = elementNames.map((elementName) => {
      return new CreateHTMLElement(elementName).getElement();
    });

    ElementsIds.assignUniqueIds(
      this.elementsArray,
      levelsCodeIds[level],
      'code'
    );
  }

  getElementsArray() {
    return this.elementsArray;
  }
}

export { CodeElements };
