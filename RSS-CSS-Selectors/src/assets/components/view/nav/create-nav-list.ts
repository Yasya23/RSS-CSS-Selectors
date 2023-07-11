import { ElementStructure } from '../../types/page-elements-structure';
import { CreateHTMLElement } from '../elements-actions/createHTMLelement';
import { History } from './game-history';

class NavList {
  private array: HTMLElement[];

  constructor(
    listElement: ElementStructure,
    elementWrapper: ElementStructure,
    elementSign: ElementStructure,
    elementLevelNumber: ElementStructure,
    levelsDescription: string[],
    level: number
  ) {
    const activeLevel = level;

    const array = Array.from({ length: 10 }, (_, index) => {
      const level = index + 1;
      const element = new CreateHTMLElement(listElement).getElement();
      element.id = `level-${index}`;
      const wrapper = new CreateHTMLElement(elementWrapper).getElement();
      const sign = new CreateHTMLElement(elementSign).getElement();
      const number = new CreateHTMLElement(elementLevelNumber).getElement();
      number.textContent = `${level} ${levelsDescription[index]}`;
      const historyArray = History.getArray();
      if (historyArray) {
        element.classList.add(historyArray[index]);
        const usedHelpClass = '!text-red-300';
        if (historyArray[index] === usedHelpClass) sign.textContent = '?';
      }
      if (index === activeLevel) element.classList.add('!text-orange-300');

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
