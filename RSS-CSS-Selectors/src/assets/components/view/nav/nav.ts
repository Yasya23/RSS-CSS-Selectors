import { navigationData } from '../../data/page-elements/nav';
import { CreateHTMLElement } from '../actions/createHTMLelement';

class Navigation {
  private navElement: HTMLElement;

  constructor() {
    const { nav } = navigationData;
    this.navElement = new CreateHTMLElement(nav).getElement();
  }

  getElement() {
    return this.navElement;
  }
}

export { Navigation };
