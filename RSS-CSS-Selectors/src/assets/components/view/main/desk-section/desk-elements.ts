import { ElementsWrapperData } from '../../../data/page-elements/main/desk-section/elementsOnDeskWrapper';
import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { Highlight } from '../../actions/highlite';

class DeskElements {
  private elementsWrapper: HTMLElement;
  private elementsArray: HTMLElement[];

  constructor() {
    const { wrapper } = ElementsWrapperData;

    this.elementsWrapper = new CreateHTMLElement(wrapper).getElement();
    this.elementsArray = new Highlight().getElementsArray();
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
