import { HtmlEditorData } from '../../../../data/page-elements/main/editor-section/html-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';

class Code {
  private wrapper: HTMLElement;
  private code: HTMLElement;
  constructor() {
    const { htmlViewerCode, codePre, codeBlock } = HtmlEditorData;
    this.wrapper = new CreateHTMLElement(htmlViewerCode).getElement();
    const codeWrapper = new CreateHTMLElement(codePre).getElement();
    this.code = new CreateHTMLElement(codeBlock).getElement();
    codeWrapper.append(this.code);
    this.wrapper.append(codeWrapper);
    this.code.innerHTML = `<div>&lt;apple class="1"&gt;&lt;/apple&gt;</div>
    <div>&lt;div class="1"&gt;&lt;/div&gt;</div>
    `;
  }

  getElement() {
    return this.wrapper;
  }
}

export { Code };
