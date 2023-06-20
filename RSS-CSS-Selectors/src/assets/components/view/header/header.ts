import { HeaderData } from '../../data/page-elements/header/header';
import { CreateHTMLElement } from '../createHTMLelement';

class Header {
  private container: HTMLElement;
  private title: HTMLElement;
  private titleSpan: HTMLElement;
  constructor() {
    const { container, title, titleSpan } = HeaderData;
    this.container = new CreateHTMLElement(container).getElement();
    this.title = new CreateHTMLElement(title).getElement();
    this.titleSpan = new CreateHTMLElement(titleSpan).getElement();

    this.title.append(this.titleSpan);
    this.container.append(this.title);
  }

  getElement() {
    return this.container;
  }
}

export { Header };
