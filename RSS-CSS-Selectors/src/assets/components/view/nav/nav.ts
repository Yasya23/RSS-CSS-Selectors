class Navigation {
  private navElement: HTMLElement;

  constructor() {
    this.navElement = document.createElement('nav');
    this.navElement.classList.add(
      'w-3/12',
      'min-h-full',
      'bg-zinc-950',
      'p-4',
      'shadow-md',
      'shadow-slate-900',
      'hidden',
      'md:block'
    );
  }

  getElement() {
    return this.navElement;
  }
}

export { Navigation };
