import { HtmlEditorData } from '../../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';
import { Highlight } from '../../../actions/highlite';

class Code {
  private wrapper: HTMLElement;
  private code: HTMLElement;
  private codeArray: HTMLElement[];

  constructor() {
    const { htmlViewerCode, codePre, codeBlock } = HtmlEditorData;
    this.wrapper = new CreateHTMLElement(htmlViewerCode).getElement();
    const codeWrapper = new CreateHTMLElement(codePre).getElement();
    this.code = new CreateHTMLElement(codeBlock).getElement();
    codeWrapper.append(this.code);
    this.wrapper.append(codeWrapper);

    this.codeArray = new Highlight().getCodeArray();
    this.code.append(...this.codeArray);
  }

  getElement() {
    return this.wrapper;
  }
}

export { Code };
