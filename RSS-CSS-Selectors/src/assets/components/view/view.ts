import { body } from '../data/page-elements/body';
import { Header } from './header/header';
import { Main } from './main/main';
import { Navigation } from './nav/nav';
import { Footer } from './footer/footer';
import { CreateHTMLElement } from './elements-actions/createHTMLelement';
import { EventManager } from './event-emitter/event-manager';
import { EventEmitter } from './event-emitter/event-emitter';
import { NavClassName } from './nav/nav-color-elements';
import { PassedLevels } from './nav/passed-levels';

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
  // private passedLevelsArray: string[];
  private passedLevels: PassedLevels;

  constructor() {
    const eventManager = EventManager.getInstance();
    this.passedLevels = new PassedLevels();
    this.eventEmitter = eventManager.getEventEmitter();
    const savedLevel = localStorage.getItem('levelActive');
    // const gameHistory = localStorage.getItem('history');

    if (savedLevel) {
      this.level = +JSON.parse(savedLevel);
    } else {
      this.level = 0;
    }

    // if (gameHistory) {
    //   this.passedLevelsArray = JSON.parse(gameHistory);
    // } else {
    //   this.passedLevelsArray = new Array(10).fill('no');
    // }

    // console.log(this.passedLevelsArray);

    // this.passedLevels.setLevels(this.passedLevelsArray);

    console.log(this.level);
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
        console.log(typeof this.level);
        this.updateMainElement();
        localStorage.setItem('levelActive', JSON.stringify(level));
        this.navInstance.colorActiveElement(this.level);
      });

      this.eventEmitter.addEventListener(
        'moveToNextLevel',
        (action: string) => {
          console.log(action);
          if (action === 'win') {
            this.navInstance.colorWinElement(this.level);
            this.passedLevels.addLevel(this.level, '!text-green-300');
          }
          if (action === 'help') {
            this.navInstance.colorHelpElement(this.level);
            this.passedLevels.addLevel(this.level, '!text-red-300');
          }
          const newLevel: number = this.level + 1;
          this.level = newLevel;
          setTimeout(() => {
            localStorage.setItem('levelActive', JSON.stringify(this.level));
            this.updateMainElement();
            this.navInstance.colorActiveElement(this.level);
          }, 500);
        }
      );
    }
  }

  private updateMainElement(): void {
    this.main = new Main(this.level).getElement();
    this.wrapper.replaceChild(this.main, this.wrapper.children[1]);
  }
}

export { View };
