import { sectionDesk } from '../../../data/page-elements/main/desk-section';

import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { Highlight } from '../highlite-when-mouseover';
import { EventEmitter } from '../../eventEmitter';

class DeskSection {
  private container: HTMLElement;
  private elementsContainer: HTMLElement;
  private eventEmitter: EventEmitter;

  constructor() {
    const { section, desk, wrapperElements } = sectionDesk;
    const { container, heading, wrapper } = section;

    this.eventEmitter = new EventEmitter();

    this.container = new CreateHTMLElement(
      Object.values({ container, heading })
    ).getElement();
    const elementsWrapper = new CreateHTMLElement(wrapper).getElement();

    const deskElements = new CreateHTMLElement(desk).getElement();

    this.elementsContainer = new CreateHTMLElement(
      wrapperElements.wrapper
    ).getElement();

    const elementsArray = new Highlight(this.eventEmitter).getElementsArray();

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
