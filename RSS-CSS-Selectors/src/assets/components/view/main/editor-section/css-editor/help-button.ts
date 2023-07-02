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
    console.log(100);
    this.level = level;
    this.inputField = inputField as HTMLInputElement;
    this.eventEmitter = eventEmitter;
    const answer = answers[this.level][0];
    new SetValue().set(this.inputField, answer);
    const timeToStart = answer.length * 220;
    setTimeout(
      () => this.eventEmitter.emit('moveToNextLevel', 'help'),
      timeToStart
    );
  }
}

export { HelpButton };