class EventEmitter {
  private events: Map<string, ((...args: string[]) => void)[]>;

  constructor() {
    this.events = new Map();
  }

  addEventListener(event: string, listener: (...args: string[]) => void) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    const listeners = this.events.get(event);

    if (listeners && listeners.length >= 5) {
      listeners.pop();
    }

    listeners?.unshift(listener);
  }

  removeAllListeners() {
    this.events.clear();
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
