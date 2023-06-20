import { navigation } from '../../../page-elements/nav/nav';
import { CreateHTMLElement } from '../createHTMLelement';

class Navigation {
  private navElement: HTMLElement;

  constructor() {
    const { nav } = navigation;
    this.navElement = new CreateHTMLElement(nav).getElement();
  }

  getElement() {
    return this.navElement;
  }
}

export { Navigation };
