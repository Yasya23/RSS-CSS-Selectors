class NavClassName {
  private previousActiveElement: Element | null = null;

  colorActiveElement(el: Element): void {
    if (this.previousActiveElement !== null) {
      this.previousActiveElement.classList.remove('text-orange-500');
    }
    el.classList.add('text-orange-500');
    this.previousActiveElement = el;
    console.log(this.previousActiveElement);
  }
}

export { NavClassName };
