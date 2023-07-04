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
  private winningMessage: HTMLElement;

  constructor(level: number) {
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
      messageWin,
    } = navigationData;
    this.passedLevels = new PassedLevels();

    const eventManager = EventManager.getInstance();
    this.eventEmitter = eventManager.getEventEmitter();
    this.navInstance = new NavClassName();

    this.wrapper = new CreateHTMLElement(
      Object.values({ nav, wrapper, title })
    ).getElement();

    this.list = new CreateHTMLElement(list).getElement();

    const listElements = new NavList(
      listElement,
      elementWrapper,
      elementSign,
      elementLevelNumber,
      level
    ).getElementsArray();

    this.winningMessage = new CreateHTMLElement(messageWin).getElement();
    this.resetButton = new CreateHTMLElement(resetButton).getElement();

    this.list.append(...listElements);
    this.wrapper.append(this.list, this.resetButton, this.winningMessage);

    if (this.passedLevels.checkLevels()) {
      this.winMessage();
    }

    this.list.addEventListener('click', this.handleLevelClick.bind(this));
    this.resetButton.addEventListener('click', () => this.resetLevels());
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
    const listenerNav = (action: string) => {
      const level = new View().getLevel();
      console.log(level);
      if (action === 'help') this.colorAndSaveElement(level, '!text-red-300');
      if (action === 'win') this.colorAndSaveElement(level, '!text-green-300');
    };
    this.eventEmitter.addEventListener('moveToNextLevel', listenerNav);

    setTimeout(
      () => this.eventEmitter.removeListeners('moveToNextLevel', listenerNav),
      300
    );
  }

  private moveToNextLevel(level: number): void {
    if (!this.passedLevels.checkLevels()) {
      const nextLevel = this.passedLevels.nextLevel(level);
      this.eventEmitter.emit('levelChanged', `${nextLevel}`);
    } else {
      this.winMessage();
    }
  }

  private colorAndSaveElement(level: number, classColor: string): void {
    this.navInstance.colorHelpElement(level);
    this.passedLevels.addLevel(level, classColor);
    setTimeout(() => this.moveToNextLevel(level), 300);
    if (this.passedLevels.checkLevels()) {
      this.winMessage();
    }
  }

  private winMessage() {
    this.winningMessage.textContent = 'You passed all levels 🥳';
  }

  private resetLevels() {
    this.winningMessage.textContent = '';
    this.passedLevels.removeFromLocalStorage();
    this.eventEmitter.emit('levelChanged', 'reset');
  }
}

export { Navigation };
