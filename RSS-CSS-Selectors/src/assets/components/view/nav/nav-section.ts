import { navigationData } from '../../data/page-elements/nav';
import { CreateHTMLElement } from '../elements-actions/createHTMLelement';
import { EventEmitter } from '../event-emitter/event-emitter';

import { EventManager } from '../event-emitter/event-manager';
import { NavList } from './create-nav-list';
import { NavClassName } from './nav-color-elements';
import { PassedLevels } from './passed-levels';
import { View } from '../view';

class Navigation {
  private wrapper: HTMLElement;
  private list: HTMLElement;
  private resetButton: HTMLElement;
  private eventEmitter: EventEmitter;
  private navInstance: NavClassName;
  private passedLevels: PassedLevels;

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
    this.passedLevels = new PassedLevels();

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
    this.handleMoveToNextLevel();
  }

  getElement() {
    return this.wrapper;
  }

  private handleLevelClick(e: Event) {
    const element = e.target as HTMLElement;
    const el = element.closest('[id]');

    if (el) {
      const level = Number(el.id.split('-')[1]);
      this.eventEmitter.emit('levelChanged', `${level}`);
    }
  }

  private handleMoveToNextLevel(): void {
    const listener = (action: string) => {
      const level = new View().getLevel();
      action === 'help'
        ? this.colorHelpUsedElement(level)
        : this.colorCorrectAnswerElement(level);
      this.moveToNextLevel(level);
    };

    this.eventEmitter.addEventListener('moveToNextLevel', listener);
  }

  private moveToNextLevel(level: number): void {
    if (this.passedLevels.checkLevels()) {
      this.winMessage();
      return;
    }
    const nextLevel = this.passedLevels.nextLevel(level);
    console.log(nextLevel);
    setTimeout(() => {
      this.eventEmitter.emit('levelChanged', `${nextLevel}`);
    }, 500);
  }

  private colorHelpUsedElement(level: number): void {
    this.navInstance.colorHelpElement(level);
    this.saveElementToPassed('!text-red-300', level);
  }

  private colorCorrectAnswerElement(level: number): void {
    this.navInstance.colorWinElement(level);
    this.saveElementToPassed('!text-green-300', level);
  }

  private saveElementToPassed(colorClass: string, level: number) {
    this.passedLevels.addLevel(level, colorClass);
  }

  private winMessage() {
    console.log('Ololo');
  }
}

export { Navigation };
