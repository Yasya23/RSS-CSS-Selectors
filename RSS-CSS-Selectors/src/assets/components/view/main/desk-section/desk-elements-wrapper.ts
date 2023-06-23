import { ElementsWrapperData } from '../../../data/page-elements/main/desk-section/elementsOnDeskWrapper';
import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { Highlight } from '../../actions/highlite-when-mouseover';
class DeskElementsWrapper {
  private elementsWrapper: HTMLElement;

  constructor() {
    const { wrapper } = ElementsWrapperData;

    this.elementsWrapper = new CreateHTMLElement(wrapper).getElement();
    const elementsArray = new Highlight().getElementsArray();
    this.elementsWrapper.append(...elementsArray);
  }

  getElement() {
    return this.elementsWrapper;
  }
}

export { DeskElementsWrapper };
