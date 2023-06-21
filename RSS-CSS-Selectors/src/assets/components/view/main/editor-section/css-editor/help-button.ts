import { CssEditorData } from '../../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';

class HelpButton {
  private button: HTMLElement;

  constructor() {
    const { cssHelpButton } = CssEditorData;
    this.button = new CreateHTMLElement(cssHelpButton).getElement();

    this.button.addEventListener('click', this.handleClick);
  }

  getElement() {
    return this.button;
  }

  handleClick(): void {
    console.log('1');
    // Add your logic here to handle the click event
  }
}

export { HelpButton };
