import { EventEmitter } from './event-emitter';
class EventManager {
  private static instance: EventManager;
  private eventEmitter: EventEmitter;

  private constructor() {
    this.eventEmitter = new EventEmitter();
  }

  public static getInstance(): EventManager {
    if (!EventManager.instance) {
      EventManager.instance = new EventManager();
    }
    return EventManager.instance;
  }

  public getEventEmitter(): EventEmitter {
    return this.eventEmitter;
  }
}

export { EventManager };
