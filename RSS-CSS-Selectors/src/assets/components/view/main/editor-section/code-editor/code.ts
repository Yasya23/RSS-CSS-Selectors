import { HtmlEditorData } from '../../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';
import { Highlight } from '../../../actions/highlite';

class Code {
  private wrapper: HTMLElement;
  private codeArray: HTMLElement[];

  constructor() {
    const { htmlViewerCode, codeWrapper, codeOpen, codeClose } = HtmlEditorData;
    this.wrapper = new CreateHTMLElement(htmlViewerCode).getElement();
    const wrapperCode = new CreateHTMLElement(codeWrapper).getElement();
    const codeOpenTag = new CreateHTMLElement(codeOpen).getElement();
    const codeCloseTag = new CreateHTMLElement(codeClose).getElement();

    this.wrapper.append(codeOpenTag, wrapperCode, codeCloseTag);

    this.codeArray = new Highlight().getCodeArray();

    wrapperCode.append(...this.codeArray);
  }

  getElement() {
    return this.wrapper;
  }
}

export { Code };
