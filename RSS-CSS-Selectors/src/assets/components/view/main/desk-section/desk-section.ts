import { sectionDesk } from '../../../data/page-elements/main/desk-section';

import { CreateHTMLElement } from '../../elements-actions/createHTMLelement';

class DeskSection {
  private container: HTMLElement;
  private elementsContainer: HTMLElement;
  private array: HTMLElement[];

  constructor(array: HTMLElement[]) {
    this.array = array;
    const { section, desk, wrapperElements } = sectionDesk;
    const { container, heading, wrapper } = section;
    this.container = new CreateHTMLElement(
      Object.values({ container, heading })
    ).getElement();
    const elementsWrapper = new CreateHTMLElement(wrapper).getElement();
    const deskElement = new CreateHTMLElement(desk).getElement();
    this.elementsContainer = new CreateHTMLElement(
      wrapperElements.wrapper
    ).getElement();
    this.elementsContainer.append(...this.array);
    this.container.append(elementsWrapper);
    elementsWrapper.append(deskElement, this.elementsContainer);
  }

  getElement() {
    return this.container;
  }
}

export { DeskSection };
