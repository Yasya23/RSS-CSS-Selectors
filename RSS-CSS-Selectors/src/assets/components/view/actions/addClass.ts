class AddClassToElement {
  static add(element: HTMLElement, classes: string[]) {
    element.classList.add(...classes);
  }
}

export { AddClassToElement };
