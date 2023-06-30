import { cssEditorData } from '../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../actions/createHTMLelement';

import { description } from '../../../data/dynamic-data/elements-levels-data';

class EditorCss {
  private field: HTMLElement;
  private helpButton: HTMLElement;
  private form: HTMLElement;
  private inputField: HTMLElement;
  private enterButton: HTMLElement;
  private level: number;

  constructor(level: number) {
    this.level = level;
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
    notes.textContent += description[this.level];

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

  private setValue(answer: string): void {
    const input = this.inputField as HTMLInputElement;
    const value = answer;
    let index = 0;
    input.focus();
    const typeEffect = setInterval(() => {
      if (index >= value.length) {
        clearInterval(typeEffect);
        return;
      }

      const currentInputValue = input.value;
      const nextChar = value.charAt(index);
      input.value = currentInputValue + nextChar;
      index++;
    }, 200);
  }
}

export { EditorCss };
