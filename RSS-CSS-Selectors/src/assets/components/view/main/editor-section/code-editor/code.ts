import { htmlEditorData } from '../../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';

class Code {
  private wrapper: HTMLElement;
  private codeArray: HTMLElement[];
  constructor(codeArray: HTMLElement[]) {
    this.codeArray = codeArray;

    const { htmlViewerCode, codeWrapper, codeOpen, codeClose } = htmlEditorData;
    this.wrapper = new CreateHTMLElement(htmlViewerCode).getElement();
    const codeOpenTag = new CreateHTMLElement(codeOpen).getElement();
    const wrapperCode = new CreateHTMLElement(codeWrapper).getElement();
    const codeCloseTag = new CreateHTMLElement(codeClose).getElement();

    this.wrapper.append(codeOpenTag, wrapperCode, codeCloseTag);

    wrapperCode.append(...this.codeArray);
  }

  getElement() {
    return this.wrapper;
  }
}

export { Code };
