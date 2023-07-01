import { navigationData } from '../../data/page-elements/nav';
import { CreateHTMLElement } from '../elements-actions/createHTMLelement';
import { EventEmitter } from '../event-emitter/event-emitter';

import { EventManager } from '../event-emitter/event-manager';
import { NavList } from './nav-list';
class Navigation {
  private wrapper: HTMLElement;
  private list: HTMLElement;
  private resetButton: HTMLElement;
  private eventEmitter: EventEmitter;

  constructor() {
    const {
      nav,
      wrapper,
      title,
      list,
      listElement,
      elementWrapper,
      elementSign,
      elementLevelNumber,
      resetButton,
    } = navigationData;

    const eventManager = EventManager.getInstance();
    this.eventEmitter = eventManager.getEventEmitter();

    this.wrapper = new CreateHTMLElement(
      Object.values({ nav, wrapper, title })
    ).getElement();

    this.list = new CreateHTMLElement(list).getElement();

    const listElements = new NavList(
      listElement,
      elementWrapper,
      elementSign,
      elementLevelNumber
    ).getElementsArray();

    this.resetButton = new CreateHTMLElement(resetButton).getElement();

    this.list.append(...listElements);
    this.wrapper.append(this.list, this.resetButton);

    this.list.addEventListener('click', this.handleLevelClick.bind(this));
  }

  getElement() {
    return this.wrapper;
  }

  handleLevelClick(e: Event) {
    const element = e.target as HTMLElement;
    const el = element.closest('[id]');

    if (el) {
      const level = Number(el.id.split('-')[1]);
      this.eventEmitter.emit('levelChanged', `${level}`);
    }
  }
}

export { Navigation };
