import { sectionDesk } from '../../../data/page-elements/main/desk-section';

import { CreateHTMLElement } from '../../elements-actions/createHTMLelement';

import { EventEmitter } from '../../event-emitter/event-emitter';
import { EventManager } from '../../event-emitter/event-manager';

class DeskSection {
  private container: HTMLElement;
  private elementsContainer: HTMLElement;
  private array: HTMLElement[];
  private eventEmitter: EventEmitter;

  constructor(array: HTMLElement[]) {
    const eventManager = EventManager.getInstance();
    this.eventEmitter = eventManager.getEventEmitter();
    this.array = array;
    const { section, desk, wrapperElements } = sectionDesk;
    const { container, heading, wrapper } = section;
    this.container = new CreateHTMLElement(
      Object.values({ container, heading })
    ).getElement();
    const elementsWrapper = new CreateHTMLElement(wrapper).getElement();
    const deskElement = new CreateHTMLElement(desk).getElement();
    this.elementsContainer = new CreateHTMLElement(
      wrapperElements.wrapper
    ).getElement();
    this.elementsContainer.append(...this.array);
    this.container.append(elementsWrapper);
    elementsWrapper.append(deskElement, this.elementsContainer);
    this.handleAnswer();
  }

  getElement() {
    return this.container;
  }
  private handleAnswer(): void {
    if (this.eventEmitter) {
      const listener = () => {
        this.elementsContainer.classList.add('animate-moveUpElements');
      };

      this.eventEmitter.addEventListener('moveToNextLevel', listener);
    }
  }
}

export { DeskSection };
