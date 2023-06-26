import { ElementStructure } from '../../interfaces/page-elements';

class CreateHTMLElement {
  private htmlElement: HTMLElement;

  constructor(object: ElementStructure | ElementStructure[]) {
    if (Array.isArray(object)) {
      this.htmlElement = this.createParentElement(object);
    } else {
      this.htmlElement = this.createElement(object);
    }
  }

  private createElement(elementData: ElementStructure) {
    const { element, classes, textContent, href, src, alt, setAttribute } =
      elementData;
    const htmlElement = document.createElement(element);

    if (classes) {
      htmlElement.classList.add(...classes);
    }
    // if (id) {
    //   htmlElement.setAttribute('data-id', id);
    // }
    if (textContent !== undefined) {
      htmlElement.textContent = textContent;
    }
    if (element === 'a' && href) {
      const anchorElement = htmlElement as HTMLAnchorElement;
      anchorElement.href = href;
    }
    if (element === 'img' && (src || alt)) {
      const imageElement = htmlElement as HTMLImageElement;
      if (src) imageElement.src = src;
      if (alt) imageElement.alt = alt;
    }
    if (setAttribute) {
      Object.entries(setAttribute).forEach(([attribute, value]) => {
        htmlElement.setAttribute(attribute, value);
      });
    }

    return htmlElement;
  }

  private createParentElement(elements: ElementStructure[]) {
    const parentElement = this.createElement(elements[0]);

    elements.slice(1).forEach((childElementData) => {
      const childElement = this.createElement(childElementData);
      parentElement.append(childElement);
    });

    return parentElement;
  }

  getElement() {
    return this.htmlElement;
  }
}

export { CreateHTMLElement };
