import { ElementStructure } from '../interfaces/page-elements';

type HTMLElementType =
  | HTMLElement
  | HTMLAnchorElement
  | HTMLImageElement
  | HTMLDivElement;

class CreateHTMLElement {
  private htmlElement: HTMLElementType;

  constructor(object: ElementStructure) {
    const { element, classes, textContent, href, src, alt } = object;
    this.htmlElement = document.createElement(element);
    if (classes) {
      this.htmlElement.classList.add(...classes);
    }
    if (textContent !== undefined) {
      this.htmlElement.textContent = textContent;
    }
    if (element === 'a' && href) {
      const anchorElement = this.htmlElement as HTMLAnchorElement;
      anchorElement.href = href;
    }
    if (element === 'img' && (src || alt)) {
      const imageElement = this.htmlElement as HTMLImageElement;
      if (src) imageElement.src = src;
      if (alt) imageElement.alt = alt;
    }
  }

  getElement(): HTMLElementType {
    return this.htmlElement;
  }
}

export { CreateHTMLElement };
