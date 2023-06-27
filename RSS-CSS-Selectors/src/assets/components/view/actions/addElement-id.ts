class ElementsIds {
  static assignUniqueIds(
    elementsArray: HTMLElement[],
    id: string[],
    code: string
  ): void {
    elementsArray.forEach((element, index) => {
      element.setAttribute('data-id', `${code}-${id[index]}`);
    });
  }
}
export { ElementsIds };
