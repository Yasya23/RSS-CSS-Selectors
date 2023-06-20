import { deskContainer } from '../../../../page-elements/main/desk.section/deskWrapper';
import { CreateHTMLElement } from '../../createHTMLelement';
import { Desk } from './desk';

class DeskSection {
  private container: HTMLElement;
  private heading: HTMLElement;
  private wrapper: HTMLElement;
  private desk: HTMLElement;
  constructor() {
    const { container, heading, wrapper } = deskContainer;
    this.container = new CreateHTMLElement(container).getElement();
    this.heading = new CreateHTMLElement(heading).getElement();
    this.wrapper = new CreateHTMLElement(wrapper).getElement();
    this.desk = new Desk().getElement();

    this.container.append(this.heading, this.wrapper);
    this.wrapper.append(this.desk);
  }

  getElement() {
    return this.container;
  }
}

export { DeskSection };
