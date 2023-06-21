import { CssEditorData } from '../../../../data/page-elements/main/editor-section/css-editor';
import { CreateHTMLElement } from '../../../actions/createHTMLelement';

class EditorNotes {
  private notes: HTMLElement;

  constructor() {
    const { cssNotes } = CssEditorData;
    this.notes = new CreateHTMLElement(cssNotes).getElement();
  }

  getElement() {
    return this.notes;
  }
}

export { EditorNotes };
