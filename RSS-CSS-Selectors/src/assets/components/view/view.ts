import { body } from '../data/page-elements/body';
import { Header } from './header/header';
import { Main } from './main/main';
import { Navigation } from './nav/nav-section';
import { Footer } from './footer/footer';
import { CreateHTMLElement } from './elements-actions/createHTMLelement';
import { EventManager } from './event-emitter/event-manager';
import { EventEmitter } from './event-emitter/event-emitter';
import { NavClassName } from './nav/nav-color-elements';
// import { PassedLevels } from './nav/passed-levels';

class View {
  private container: HTMLElement;
  private wrapper: HTMLElement;
  private header: HTMLElement;
  private main: HTMLElement;
  private nav: HTMLElement;
  private footer: HTMLElement;
  private level: number;
  private eventEmitter: EventEmitter;
  private navInstance: NavClassName;
  // private passedLevels: PassedLevels;

  constructor() {
    const eventManager = EventManager.getInstance();
    // this.passedLevels = new PassedLevels();
    this.eventEmitter = eventManager.getEventEmitter();
    const savedLevel = localStorage.getItem('levelActive');

    this.level = savedLevel ? +JSON.parse(savedLevel) : 0;

    const { container, wrapper } = body;
    document.body.classList.add('font-sans', 'bg-gray-800');
    this.container = new CreateHTMLElement(container).getElement();
    this.wrapper = new CreateHTMLElement(wrapper).getElement();
    this.header = Header.initialize();
    this.main = new Main(this.level).getElement();
    this.footer = Footer.initialize();
    this.nav = new Navigation().getElement();

    document.body.append(this.container);
    this.wrapper.append(this.header, this.main, this.footer);
    this.container.append(this.wrapper, this.nav);
    this.handleLevelChange();
    this.navInstance = new NavClassName();
    this.navInstance.colorActiveElement(this.level);
  }

  getElement() {
    return this.container;
  }

  private handleLevelChange(): void {
    if (this.eventEmitter) {
      this.eventEmitter.addEventListener('levelChanged', (level: string) => {
        this.level = parseInt(level, 10);
        this.updateMainElement();
        localStorage.setItem('levelActive', JSON.stringify(this.level));
        this.navInstance.colorActiveElement(this.level);
      });
    }
  }

  private updateMainElement(): void {
    this.main = new Main(this.level).getElement();
    this.wrapper.replaceChild(this.main, this.wrapper.children[1]);
  }

  getLevel(): number {
    return this.level;
  }
}

export { View };
