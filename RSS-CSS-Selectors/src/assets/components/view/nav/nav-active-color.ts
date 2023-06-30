class NavClassName {
  private previousActiveElement: Element | null = null;

  colorActiveElement(level: number): void {
    const element = document.getElementById(`level-${level}`);

    if (this.previousActiveElement !== null) {
      this.previousActiveElement.classList.remove('text-orange-300');
    }
    if (element) {
      element.classList.add('text-orange-300');
    }
    this.previousActiveElement = element;
  }
}

export { NavClassName };
