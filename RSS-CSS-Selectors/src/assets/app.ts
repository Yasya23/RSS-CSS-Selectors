import { View } from './components/view/view';

class App {
  load(): void {
    const view = new View();
    document.body.appendChild(view.getElement());
  }
}

export { App };
