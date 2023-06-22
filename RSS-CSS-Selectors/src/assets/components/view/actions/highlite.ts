import { DeskElements } from '../main/desk-section/desk-elements';
import { Code } from '../main/editor-section/code-editor/code';

class Highlight {
  private deskElements: Element[];
  private codeElements: Element[];

  constructor() {
    this.deskElements = new DeskElements().getElementsArray();
    this.codeElements = new Code().getCodeArray();

    this.addHoverListeners();
    this.showArrays();
  }

  private addHoverListeners(): void {
    this.deskElements.forEach((element, index) => {
      element.addEventListener('mouseover', () => {
        this.highlightElement(index);
      });

      element.addEventListener('mouseleave', () => {
        this.removeHighlight();
      });
    });
  }

  private highlightElement(index: number): void {
    this.codeElements[index].classList.add('highlight');
  }

  private removeHighlight(): void {
    this.codeElements.forEach((element) => {
      element.classList.remove('highlight');
    });
  }

  private showArrays(): void {
    console.log('deskElements:', this.deskElements);
    console.log('codeElements:', this.codeElements);
  }
}

export { Highlight };
