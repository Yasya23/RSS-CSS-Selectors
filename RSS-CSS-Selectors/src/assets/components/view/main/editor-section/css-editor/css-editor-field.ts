import { cssEditorData } from '../../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../../elements-actions/createHTMLelement';

import { description } from '../../../../data/dynamic-data/elements-levels-data';
import { answers } from '../../../../data/dynamic-data/input-answers';
import { EventEmitter } from '../../../event-emitter/event-emitter';
import { EventManager } from '../../../event-emitter/event-manager';
import { SetValue } from './set-value-to-input';

class EditorCss {
  private field: HTMLElement;
  private helpButton: HTMLElement;
  private form: HTMLElement;
  private inputField: HTMLElement;
  private enterButton: HTMLElement;
  private level: number;
  private eventEmitter: EventEmitter;

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

    const eventManager = EventManager.getInstance();
    this.eventEmitter = eventManager.getEventEmitter();

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

    this.form.addEventListener('submit', this.handleSubmitForm.bind(this));
    this.handleWrongAnswer();
  }

  public getEditorField(): HTMLElement {
    return this.field;
  }

  private handleHelpButtonClick(): void {
    const answer = answers[this.level][0];
    new SetValue().set(this.inputField, answer);
    const timeToStart = answer.length * 220;
    setTimeout(
      () => this.eventEmitter.emit('moveToNextLevel', 'help'),
      timeToStart
    );
  }

  private handleSubmitForm(e: Event): void {
    e.preventDefault();
    const input = this.inputField as HTMLInputElement;
    const value = input.value.trim();
    if (value.length > 0) input.focus();
    const answer = answers[this.level];
    if (answer.includes(value)) {
      setTimeout(() => this.eventEmitter.emit('moveToNextLevel', 'win'), 300);
    } else {
      this.handleWrongAnswer();
    }
  }

  handleWrongAnswer() {
    this.eventEmitter.emit('wrongAnswer', 'animate-moveContainer');
  }
}

export { EditorCss };
