import { Main } from './main/main';
import { Navigation } from './nav/nav';

class View {
  private container: HTMLDivElement;
  private wrapper: HTMLDivElement;
  private main: Main;
  private nav: Navigation;

  constructor() {
    document.body.classList.add('font-sans', 'bg-gray-800');

    this.container = document.createElement('div');
    document.body.append(this.container);
    this.container.classList.add('flex');

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('container', 'mx-auto', 'p-4');
    this.main = new Main();
    this.wrapper.append(this.main.getElement());
    this.nav = new Navigation();
    this.container.append(this.wrapper, this.nav.getElement());
  }

  getElement() {
    return this.container;
  }
}

export { View };
