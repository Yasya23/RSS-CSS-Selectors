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
    console.log(level, element, this.previousActiveElement);
    this.previousActiveElement = element;
  }

  colorWinElement(level: number): void {
    const element = document.getElementById(`level-${level}`);
    const elementClass = '!text-green-300';
    if (element) {
      element.classList.add(elementClass);
    }
  }

  colorHelpElement(level: number): void {
    const element = document.getElementById(`level-${level}`);
    const sign = element?.getElementsByTagName('a')[0]?.children[0];
    const elementClass = '!text-red-300';
    if (element && sign) {
      element.classList.add(elementClass);
      sign.textContent = '?';
    }
  }
}

export { NavClassName };
