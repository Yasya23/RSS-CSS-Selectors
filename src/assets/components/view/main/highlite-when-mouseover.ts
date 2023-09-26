class Highlight {
  private array: HTMLElement[];

  constructor(array: HTMLElement[]) {
    this.array = array;

    this.addHoverListeners();
  }

  public addHoverListeners(): void {
    this.array.forEach((element) => {
      const dataId = element.getAttribute('data-id') || '';
      const id = dataId.split('-')[1];
      this.elementMouseActions(element, id);
    });
  }

  private elementMouseActions(element: HTMLElement, dataId: string): void {
    element.addEventListener('mouseover', () => {
      this.highlightClassToggle(dataId);
    });

    element.addEventListener('mouseleave', () => {
      this.highlightClassToggle(dataId);
    });
  }

  private highlightClassToggle<Type>(dataId: Type): void {
    const codeElements = document.querySelectorAll(
      `[data-id="code-${dataId}"]`
    );
    codeElements.forEach((elem) => {
      elem.classList.toggle('mix-blend-luminosity');
    });

    const getDeskElement = document.querySelector(`[data-id="desk-${dataId}"]`);
    const tooltip = getDeskElement?.getElementsByTagName('div')[0];
    tooltip?.classList.toggle('invisible');
    getDeskElement?.classList.toggle('ring-4');
  }
}

export { Highlight };
