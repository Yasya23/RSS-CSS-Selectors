import { EventEmitter } from '../../../event-emitter/event-emitter';
import { answers } from '../../../../data/dynamic-data/input-answers';
import { SetValue } from './set-value-to-input';

class HelpButton {
  private level: number;
  private inputField: HTMLInputElement;
  private eventEmitter: EventEmitter;

  constructor(
    level: number,
    inputField: HTMLElement,
    eventEmitter: EventEmitter
  ) {
    this.level = level;
    this.inputField = inputField as HTMLInputElement;
    this.eventEmitter = eventEmitter;
    const answer = answers[this.level][0];
    console.log(answer);
    new SetValue().set(this.inputField, answer);
    const timeToStart = answer.length * 230;

    setTimeout(
      () => this.eventEmitter.emit('moveToNextLevel', 'help'),
      timeToStart
    );
  }
}

export { HelpButton };
