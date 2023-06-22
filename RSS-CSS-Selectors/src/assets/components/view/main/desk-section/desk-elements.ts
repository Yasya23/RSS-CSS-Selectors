import { DeskData } from '../../../data/desk-elements';
import { ElementsWrapperData } from '../../../data/page-elements/main/desk-section/elementsOnDeskWrapper';
import { CreateHTMLElement } from '../../actions/createHTMLelement';

class DeskElements {
  private elementsWrapper: HTMLElement;
  private elementsArray: HTMLElement[];

  constructor() {
    const { apple } = DeskData;
    const { wrapper } = ElementsWrapperData;

    this.elementsWrapper = new CreateHTMLElement(wrapper).getElement();
    const appleFruitOne = new CreateHTMLElement(apple).getElement();
    this.elementsArray = [appleFruitOne];
    console.log(this.elementsArray);
    this.elementsWrapper.append(...this.elementsArray);
  }

  getElement() {
    return this.elementsWrapper;
  }

  getElementsArray() {
    return this.elementsArray;
  }
}

export { DeskElements };
