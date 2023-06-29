import { navigationData } from '../../data/page-elements/nav';
import { ElementStructure } from '../../types/page-elements-structure';
import { CreateHTMLElement } from '../actions/createHTMLelement';
import { EventEmitter } from '../event-emitter/event-emitter';
import { NavClassName } from './nav-active-color';

import { EventManager } from '../event-emitter/event-manager';
class Navigation {
  private wrapper: HTMLElement;
  private list: HTMLElement;
  private resetButton: HTMLElement;
  private eventEmitter: EventEmitter;
  private navInstance: NavClassName;

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

    this.navInstance = new NavClassName();

    this.wrapper = new CreateHTMLElement(
      Object.values({ nav, wrapper, title })
    ).getElement();

    this.list = new CreateHTMLElement(list).getElement();

    const listElements = this.createLevelsList(
      listElement,
      elementWrapper,
      elementSign,
      elementLevelNumber
    );

    this.resetButton = new CreateHTMLElement(resetButton).getElement();

    this.list.append(...listElements);
    this.wrapper.append(this.list, this.resetButton);

    this.list.addEventListener('click', this.handleLevelClick.bind(this));
  }

  private createLevelsList(
    listElement: ElementStructure,
    elementWrapper: ElementStructure,
    elementSign: ElementStructure,
    elementLevelNumber: ElementStructure
  ): HTMLElement[] {
    const array = Array.from({ length: 10 }, (_, index) => {
      const level = index + 1;
      const element = new CreateHTMLElement(listElement).getElement();
      element.id = `level-${level}`;
      const wrapper = new CreateHTMLElement(
        Object.values({ elementWrapper, elementSign })
      ).getElement();
      const number = new CreateHTMLElement(elementLevelNumber).getElement();
      number.textContent = `${level}`;
      wrapper.append(number);
      element.append(wrapper);
      return element;
    });
    return array;
  }

  getElement() {
    return this.wrapper;
  }

  handleLevelClick(e: Event) {
    const element = e.target as HTMLElement;
    const el = element.closest('[id]');

    if (el) {
      const level = Number(el.id.split('-')[1]) - 1;
      this.navInstance.colorActiveElement(el);
      this.eventEmitter.emit('levelChanged', `${level}`);
    }
  }
}

export { Navigation };
