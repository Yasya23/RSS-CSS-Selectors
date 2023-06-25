import {
  section,
  desk,
  wrapperElements,
} from '../../../data/page-elements/main/desk-section';
import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { Highlight } from '../highlite-when-mouseover';

class DeskSection {
  private container: HTMLElement;
  private elementsContainer: HTMLElement;

  constructor() {
    const { container, heading, wrapper } = section;

    this.container = new CreateHTMLElement(
      Object.values({ container, heading })
    ).getElement();
    const elementsWrapper = new CreateHTMLElement(wrapper).getElement();

    const deskElements = new CreateHTMLElement(
      Object.values(desk)
    ).getElement();

    this.elementsContainer = new CreateHTMLElement(
      wrapperElements.wrapper
    ).getElement();

    const elementsArray = new Highlight().getElementsArray();

    this.container.append(elementsWrapper);
    elementsWrapper.append(deskElements, this.elementsContainer);
    this.elementsContainer.append(...elementsArray);
  }

  getElement() {
    return this.container;
  }

  setElements(elements: HTMLElement[]) {
    this.elementsContainer.append(...elements);
  }
}

export { DeskSection };
