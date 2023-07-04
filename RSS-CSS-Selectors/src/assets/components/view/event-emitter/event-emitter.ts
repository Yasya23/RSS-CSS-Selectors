class EventEmitter {
  private events: Map<string, ((...args: string[]) => void)[]>;

  constructor() {
    this.events = new Map();
  }

  addEventListener(event: string, listener: (...args: string[]) => void) {
    const maxListeners = 150;

    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    const listeners = this.events.get(event);

    if (listeners && listeners?.length >= maxListeners) {
      listeners?.pop();
    }

    listeners?.unshift(listener);
    // console.log(this.events);
  }

  removeListeners(event: string, listener: (...args: string[]) => void) {
    const listeners = this.events.get(event);

    if (listeners) {
      const filteredListeners = [...listeners].filter((el) => el === listener);
      this.events.set(event, filteredListeners);
    }
  }

  emit(event: string, ...args: string[]) {
    const listeners = this.events.get(event);
    if (listeners) {
      listeners.forEach((listener) => {
        listener(...args);
      });
    }
  }
}

export { EventEmitter };
