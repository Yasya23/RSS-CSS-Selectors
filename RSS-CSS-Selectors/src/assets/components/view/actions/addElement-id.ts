class ElementsIds {
  static assignUniqueIds(elementsArray: HTMLElement[], prefix: string): void {
    elementsArray.forEach((element, index) => {
      element.id = `${prefix}-${index}`;
    });
  }
}
export { ElementsIds };
