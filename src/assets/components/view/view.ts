import { Header } from './header/header';
import { Main } from './main/main';
import { Navigation } from './nav/nav-section';
import { Footer } from './footer/footer';
import { CreateHTMLElement } from './elements-actions/createHTMLelement';
import { EventManager } from './event-emitter/event-manager';
import { EventEmitter } from './event-emitter/event-emitter';
import { NavClassName } from './nav/nav-color-elements';
import { data } from '../data/page-elements/page-elements';
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

  constructor() {
    const { container, wrapper } = data.body;

    const eventManager = EventManager.getInstance();
    this.eventEmitter = eventManager.getEventEmitter();

    const savedLevel = localStorage.getItem('levelActive');

    this.level = savedLevel ? +JSON.parse(savedLevel) : 0;

    document.body.classList.add('font-sans', 'bg-gray-800');
    this.container = new CreateHTMLElement(container).getElement();
    this.wrapper = new CreateHTMLElement(wrapper).getElement();
    this.header = Header.initialize();
    this.nav = new Navigation(this.level).getElement();
    this.main = new Main(this.level).getElement();
    this.footer = Footer.initialize();

    this.wrapper.append(this.header, this.main, this.footer);
    this.container.append(this.wrapper, this.nav);

    this.navInstance = new NavClassName();
    window.addEventListener('DOMContentLoaded', () => {
      this.navInstance.colorActiveElement(this.level);
    });
    this.handleLevelChange();
  }

  getContainer(): HTMLElement {
    return this.container;
  }

  private handleLevelChange(): void {
    if (this.eventEmitter) {
      this.eventEmitter.addEventListener('levelChanged', (level: string) => {
        this.updateLevel(level);
      });
    }
  }

  private updateLevel(level: string): void {
    if (level === 'reset') this.updateNav(0);
    if (level === 'levelsPassed') {
      this.updateNav(this.level);
    }
    this.level = parseInt(level, 10) || 0;
    this.updateMainElements();
    localStorage.setItem('levelActive', JSON.stringify(this.level));
    this.navInstance.colorActiveElement(this.level);
  }

  private updateMainElements(): void {
    this.main = new Main(this.level).getElement();
    this.wrapper.replaceChild(this.main, this.wrapper.children[1]);
  }

  private updateNav(level: number): void {
    const newNav = new Navigation(level).getElement();
    this.container.replaceChild(newNav, this.nav);
    this.nav = newNav;
  }

  getLevel(): number {
    return this.level;
  }
}

export { View };
