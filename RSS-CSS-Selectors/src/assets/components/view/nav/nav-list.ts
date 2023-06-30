import { ElementStructure } from '../../types/page-elements-structure';
import { CreateHTMLElement } from '../actions/createHTMLelement';
import { levelsDescription } from '../../data/page-elements/nav';

class NavList {
  private array: HTMLElement[];

  constructor(
    listElement: ElementStructure,
    elementWrapper: ElementStructure,
    elementSign: ElementStructure,
    elementLevelNumber: ElementStructure
  ) {
    const array = Array.from({ length: 10 }, (_, index) => {
      const level = index + 1;
      const element = new CreateHTMLElement(listElement).getElement();
      element.id = `level-${index}`;
      const wrapper = new CreateHTMLElement(
        Object.values({ elementWrapper, elementSign })
      ).getElement();
      const number = new CreateHTMLElement(elementLevelNumber).getElement();
      number.textContent = `${level} ${levelsDescription[index]}`;
      wrapper.append(number);
      element.append(wrapper);
      return element;
    });
    this.array = array;
  }

  getElementsArray(): HTMLElement[] {
    return this.array;
  }
}

export { NavList };
