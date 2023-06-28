import { htmlEditorData } from '../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../actions/createHTMLelement';
// import { Highlight } from '../highlite-when-mouseover';
import { ElementsIds } from '../../actions/add-data-id';
import { ElementStructure } from '../../../types/page-elements-structure';
import { levelsCodeIds } from '../../../data/dynamic-data/elements-code';
// import { levelsCode } from '../../../data/dynamic-data/elements-code';

class Code {
  private wrapper: HTMLElement;
  // private codeArray: HTMLElement[];
  private elementsArray: HTMLElement[];
  private level: number;
  private elementNames: ElementStructure[];

  constructor(level: number, elementNames: ElementStructure[]) {
    this.level = level;
    this.elementNames = elementNames;
    const { htmlViewerCode, codeWrapper, codeOpen, codeClose } = htmlEditorData;
    this.wrapper = new CreateHTMLElement(htmlViewerCode).getElement();
    const codeOpenTag = new CreateHTMLElement(codeOpen).getElement();
    const wrapperCode = new CreateHTMLElement(codeWrapper).getElement();
    const codeCloseTag = new CreateHTMLElement(codeClose).getElement();

    this.elementsArray = this.createElementsArray(level, elementNames);

    this.wrapper.append(codeOpenTag, wrapperCode, codeCloseTag);

    // this.codeArray = new Highlight().getCodeArray();

    wrapperCode.append(...this.elementsArray);
  }

  public createElementsArray(
    level: number,
    elementNames: ElementStructure[]
  ): HTMLElement[] {
    this.elementsArray = elementNames.map((elementName) => {
      return new CreateHTMLElement(elementName).getElement();
    });

    ElementsIds.assignUniqueIds(
      this.elementsArray,
      levelsCodeIds[level],
      'code'
    );

    return this.elementsArray;
  }

  getElementsArray() {
    return this.elementsArray;
  }

  getElement() {
    return this.wrapper;
  }
}

export { Code };
