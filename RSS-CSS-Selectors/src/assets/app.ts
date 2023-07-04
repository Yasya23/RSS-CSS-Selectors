import { View } from './components/view/view';

class App {
  load(): void {
    const view = new View();
    document.body.append(view.getArray());
  }
}

export { App };
