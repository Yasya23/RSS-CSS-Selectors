class EventEmitter {
  private events: Map<string, ((...args: string[]) => void)[]>;

  constructor() {
    this.events = new Map();
  }

  addEventListener(event: string, listener: (...args: string[]) => void) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)?.push(listener);
  }

  // removeEventListener(event: string, listener: (...args: string[]) => void) {
  //   const listeners = this.events.get(event);
  //   if (listeners) {
  //     const index = listeners.indexOf(listener);
  //     if (index !== -1) {
  //       listeners.splice(index, 1);
  //     }
  //     if (listeners.length === 0) {
  //       this.events.delete(event);
  //     }
  //   }
  // }

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
