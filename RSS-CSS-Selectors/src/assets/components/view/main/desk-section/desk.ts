import { DeskData } from '../../../data/page-elements/main/desk-section/desk';
import { CreateHTMLElement } from '../../actions/createHTMLelement';

class Desk {
  private wrapper: HTMLElement;
  private skewDiv1: HTMLElement;
  private skewDiv2: HTMLElement;
  private backDiv: HTMLElement;
  constructor() {
    const { wrapper, skewDiv1, skewDiv2, backDiv } = DeskData;
    this.wrapper = new CreateHTMLElement(wrapper).getElement();
    this.skewDiv1 = new CreateHTMLElement(skewDiv1).getElement();
    this.skewDiv2 = new CreateHTMLElement(skewDiv2).getElement();
    this.backDiv = new CreateHTMLElement(backDiv).getElement();
    this.wrapper.append(this.skewDiv1, this.skewDiv2, this.backDiv);
  }

  getElement() {
    return this.wrapper;
  }
}

export { Desk };
