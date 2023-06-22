import { DeskWrapperData } from '../../../data/page-elements/main/desk-section/deskWrapper';
import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { Desk } from './desk';
import { DeskElements } from './desk-elements';

class DeskSection {
  private container: HTMLElement;
  private deskElements: HTMLElement;

  constructor() {
    const { container, heading, wrapper } = DeskWrapperData;
    this.container = new CreateHTMLElement(container).getElement();
    const title = new CreateHTMLElement(heading).getElement();
    const deskWrapper = new CreateHTMLElement(wrapper).getElement();
    const desk = new Desk().getElement();
    this.deskElements = new DeskElements().getElement();

    this.container.append(title, deskWrapper);
    deskWrapper.append(desk, this.deskElements);
  }

  getElement() {
    return this.container;
  }
}

export { DeskSection };
