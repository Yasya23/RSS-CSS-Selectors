import { NavigationData } from '../../data/page-elements/nav/nav';
import { CreateHTMLElement } from '../actions/createHTMLelement';

class Navigation {
  private navElement: HTMLElement;

  constructor() {
    const { nav } = NavigationData;
    this.navElement = new CreateHTMLElement(nav).getElement();
  }

  getElement() {
    return this.navElement;
  }
}

export { Navigation };
