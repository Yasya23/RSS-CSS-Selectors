class NavClassName {
  private previousActiveElement: Element | null = null;

  colorActiveElement(level: number): void {
    console.log(level);
    const element = document.getElementById(`level-${level}`);

    if (this.previousActiveElement !== null) {
      this.previousActiveElement.classList.remove('text-orange-300');
    }
    if (element) {
      element.classList.add('text-orange-300');
    }
    this.previousActiveElement = element;
    console.log(this.previousActiveElement);
  }
}

export { NavClassName };
