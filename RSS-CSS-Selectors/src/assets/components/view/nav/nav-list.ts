import { ElementStructure } from '../../types/page-elements-structure';
import { CreateHTMLElement } from '../elements-actions/createHTMLelement';
import { levelsDescription } from '../../data/page-elements/nav';
import { PassedLevels } from './passed-levels';

class NavList {
  private array: HTMLElement[];

  constructor(
    listElement: ElementStructure,
    elementWrapper: ElementStructure,
    elementSign: ElementStructure,
    elementLevelNumber: ElementStructure
  ) {
    const array = Array.from({ length: 10 }, (_, index) => {
      const historyArray = new PassedLevels().getLevels();
      console.log(historyArray.length);
      const level = index + 1;
      const element = new CreateHTMLElement(listElement).getElement();
      element.id = `level-${index}`;
      const wrapper = new CreateHTMLElement(elementWrapper).getElement();
      const sign = new CreateHTMLElement(elementSign).getElement();
      if (historyArray) {
        element.classList.add(historyArray[index]);
      }
      if (historyArray[index] === '!text-red-300') sign.textContent = '?';
      const number = new CreateHTMLElement(elementLevelNumber).getElement();
      number.textContent = `${level} ${levelsDescription[index]}`;
      wrapper.append(sign, number);
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
