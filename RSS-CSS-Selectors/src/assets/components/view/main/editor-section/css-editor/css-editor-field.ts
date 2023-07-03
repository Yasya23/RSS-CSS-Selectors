import { cssEditorData } from '../../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../../elements-actions/createHTMLelement';
import { answers } from '../../../../data/dynamic-data/input-answers';
import { EventEmitter } from '../../../event-emitter/event-emitter';
import { EventManager } from '../../../event-emitter/event-manager';
import { HelpButton } from './help-button';

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

    const notes = new CreateHTMLElement(cssNotes).getElement();

    this.form.append(this.inputField, this.enterButton);
    this.field.append(this.form, notes, this.helpButton);

    this.helpButton.addEventListener('click', (e: Event) => {
      e.preventDefault();
      new HelpButton(this.level, this.inputField, this.eventEmitter);
    });

    this.form.addEventListener('submit', this.handleSubmitForm.bind(this));
  }

  public getEditorField(): HTMLElement {
    return this.field;
  }

  private handleSubmitForm(e: Event): void {
    e.preventDefault();
    const input = this.inputField as HTMLInputElement;
    const value = input.value.trim();
    if (value.length > 0) input.focus();
    const answer = answers[this.level];
    answer.includes(value)
      ? this.handleCorrectAnswer()
      : this.handleWrongAnswer();
  }

  handleCorrectAnswer(): void {
    setTimeout(() => this.eventEmitter.emit('moveToNextLevel', 'win'), 300);
  }

  handleWrongAnswer(): void {
    this.eventEmitter.emit('wrongAnswer', 'animate-moveContainer');
  }
}

export { EditorCss };
