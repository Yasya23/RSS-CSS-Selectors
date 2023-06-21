import { CssEditorData } from '../../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';

class EditorInput {
  private form: HTMLElement;

  constructor() {
    const { cssEditorForm, cssEditorInput, cssEnterButton } = CssEditorData;

    this.form = new CreateHTMLElement(cssEditorForm).getElement();
    const input = new CreateHTMLElement(cssEditorInput).getElement();
    const button = new CreateHTMLElement(cssEnterButton).getElement();

    this.form.append(input, button);
  }

  getElement() {
    return this.form;
  }
}

export { EditorInput };
