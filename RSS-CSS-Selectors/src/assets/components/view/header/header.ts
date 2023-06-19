class Header {
  private container: HTMLElement;
  private title: HTMLElement;

  constructor() {
    this.container = document.createElement('header');
    this.container.classList.add('mb-9');
    this.title = document.createElement('h1');
    this.title.classList.add('text-xl', 'text-yellow-400');
    this.title.innerHTML = '<span class="text-amber-600">CSS </span>Diner';
    this.container.appendChild(this.title);
  }
}

export { Header };
