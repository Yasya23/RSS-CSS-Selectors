import { htmlEditorData } from '../../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';
import { Highlight } from '../../highlite-when-mouseover';
import { EventEmitter } from '../../../eventEmitter';

class Code {
  private wrapper: HTMLElement;
  private codeArray: HTMLElement[];

  constructor() {
    const eventEmitter = new EventEmitter();

    const { htmlViewerCode, codeWrapper, codeOpen, codeClose } = htmlEditorData;
    this.wrapper = new CreateHTMLElement(htmlViewerCode).getElement();
    const codeOpenTag = new CreateHTMLElement(codeOpen).getElement();
    const wrapperCode = new CreateHTMLElement(codeWrapper).getElement();
    const codeCloseTag = new CreateHTMLElement(codeClose).getElement();

    this.wrapper.append(codeOpenTag, wrapperCode, codeCloseTag);

    this.codeArray = new Highlight(eventEmitter).getCodeArray();

    wrapperCode.append(...this.codeArray);
  }

  getElement() {
    return this.wrapper;
  }
}

export { Code };
