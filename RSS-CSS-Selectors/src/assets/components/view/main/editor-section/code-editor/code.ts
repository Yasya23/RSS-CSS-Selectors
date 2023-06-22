import { HtmlEditorData } from '../../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';
import { ElementsCode } from '../../../../data/elements-code';

class Code {
  private wrapper: HTMLElement;
  private code: HTMLElement;
  private codeArray: HTMLElement[];
  constructor() {
    const { htmlViewerCode, codePre, codeBlock } = HtmlEditorData;
    const { apple } = ElementsCode;
    this.wrapper = new CreateHTMLElement(htmlViewerCode).getElement();
    const codeWrapper = new CreateHTMLElement(codePre).getElement();
    this.code = new CreateHTMLElement(codeBlock).getElement();
    codeWrapper.append(this.code);
    this.wrapper.append(codeWrapper);
    const codeAppleOne = new CreateHTMLElement(apple).getElement();

    const arr = new Array(5).fill(codeAppleOne);

    this.codeArray = [...arr];
    this.code.append(...this.codeArray);
  }

  getElement() {
    return this.wrapper;
  }

  getCodeArray() {
    return this.codeArray;
  }
}

export { Code };
