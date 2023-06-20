import { Header } from './header/header';
import { Main } from './main/main';
import { Navigation } from './nav/nav';
import { Footer } from './footer/footer';

class View {
  private container: HTMLDivElement;
  private wrapper: HTMLDivElement;
  private header: HTMLElement;
  private main: HTMLElement;
  private nav: HTMLElement;
  private footer: HTMLElement;

  constructor() {
    document.body.classList.add('font-sans', 'bg-gray-800');

    this.container = document.createElement('div');
    document.body.append(this.container);
    this.container.classList.add('flex');

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('container', 'mx-auto', 'p-4');
    this.header = new Header().getElement();
    this.main = new Main().getElement();
    this.footer = new Footer().getElement();
    this.wrapper.append(this.header, this.main, this.footer);
    this.nav = new Navigation().getElement();
    this.container.append(this.wrapper, this.nav);
  }

  getElement() {
    return this.container;
  }
}

export { View };
