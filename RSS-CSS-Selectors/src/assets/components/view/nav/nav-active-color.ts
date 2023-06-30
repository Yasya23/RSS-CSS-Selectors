class NavClassName {
  private previousActiveElement: Element | null = null;

  colorActiveElement(level: number): void {
    const element = document.getElementById(`level-${level}`);
    const elementClass = '!text-orange-300';

    if (this.previousActiveElement !== null) {
      this.previousActiveElement.classList.remove(elementClass);
    }
    if (element) {
      element.classList.add(elementClass);
    }
    this.previousActiveElement = element;
  }
}

export { NavClassName };
