import { cssEditorData } from '../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../actions/createHTMLelement';

class EditorCss {
  private field: HTMLElement;
  private helpButton: HTMLElement;
  private form: HTMLElement;
  private inputField: HTMLElement;
  private enterButton: HTMLElement;

  constructor() {
    const {
      cssField,
      cssNotes,
      cssHelpButton,
      cssEditorForm,
      cssEditorInput,
      cssEnterButton,
    } = cssEditorData;

    this.field = new CreateHTMLElement(cssField).getElement();
    this.helpButton = new CreateHTMLElement(cssHelpButton).getElement();

    this.form = new CreateHTMLElement(cssEditorForm).getElement();
    this.inputField = new CreateHTMLElement(cssEditorInput).getElement();
    this.enterButton = new CreateHTMLElement(cssEnterButton).getElement();

    this.form.append(this.inputField, this.enterButton);

    const notes = new CreateHTMLElement(cssNotes).getElement();

    this.field.append(this.form, notes, this.helpButton);

    this.helpButton.addEventListener(
      'click',
      this.handleHelpButtonClick.bind(this)
    );
  }

  public getEditorField(): HTMLElement {
    return this.field;
  }

  private handleHelpButtonClick(): void {
    this.setValue('fnjgn');
  }

  private setValue(arg: string): void {
    (this.inputField as HTMLInputElement).value = arg;
  }
}

export { EditorCss };
