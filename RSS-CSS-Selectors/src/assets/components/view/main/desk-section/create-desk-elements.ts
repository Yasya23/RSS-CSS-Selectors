import { DeskData } from '../../../data/desk-elements';
import { ElementsCode } from '../../../data/elements-code';
import { CreateHTMLElement } from '../../actions/createHTMLelement';

class DeskElements {
  private elementsArray: HTMLElement[];
  private tooltip: HTMLElement;

  constructor() {
    const { apple } = DeskData;
    const { apple: appleCode } = ElementsCode;

    const appleFruitOne = new CreateHTMLElement(apple).getElement();
    const appleFruitTwo = new CreateHTMLElement(apple).getElement();
    const appleFruitThree = new CreateHTMLElement(apple).getElement();

    this.tooltip = new CreateHTMLElement(appleCode).getElement();
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
    this.elementsArray = [appleFruitOne, appleFruitTwo, appleFruitThree];
    this.elementsArray.forEach((element, index) => {
      element.dataset.id = `desk-${index}`;
    });
  }

  getElementsArray() {
    return this.elementsArray;
  }
}

export { DeskElements };
