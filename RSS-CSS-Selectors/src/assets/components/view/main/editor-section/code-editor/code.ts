import { htmlEditorData } from '../../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';
// import { Highlight } from '../../highlite-when-mouseover';
// import { EventEmitter } from '../../../eventEmitter';
// import { CodeElements } from './create-code-elements';
// import { levelsCode } from '../../../../data/dynamic-data/elements-code';

class Code {
  private wrapper: HTMLElement;
  private codeArray: HTMLElement[];
  constructor(codeArray: HTMLElement[]) {
    this.codeArray = codeArray;
    // const eventEmitter = new EventEmitter();

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
