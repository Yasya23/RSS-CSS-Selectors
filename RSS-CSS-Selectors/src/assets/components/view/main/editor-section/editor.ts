import { containerData } from '../../../data/page-elements/main/editor-section/editor';
import { CreateHTMLElement } from '../../actions/createHTMLelement';
import { EditorCss } from './css-editor-field';
import { cssEditorData } from '../../../data/page-elements/main/editor-section/css-editor';
import { htmlEditorData } from '../../../data/page-elements/main/editor-section/html-editor';
import { Code } from './code-editor/code';
import { ElementStructure } from '../../../interfaces/page-elements';

class EditorSection {
  private container: HTMLElement;

  constructor() {
    const { container, heading, wrapper, menuWrapper, editorWrapper } =
      containerData;
    const {
      menuCss,
      titleCss,
      subtitleCss,
      cssEditorContainer,
      editorNumbersCss,
    } = cssEditorData;

    const {
      wrapperHTML,
      menuHTML,
      titleHtml,
      subtitleHtml,
      editorNumbersHTML,
    } = htmlEditorData;

    this.container = new CreateHTMLElement(container).getElement();
    const header = new CreateHTMLElement(heading).getElement();
    const wrapperSection = new CreateHTMLElement(wrapper).getElement();
    const wrapperMenu = new CreateHTMLElement(menuWrapper).getElement();
    const wrapperEditor = new CreateHTMLElement(editorWrapper).getElement();

    const cssMenu = new CreateHTMLElement(
      Object.values({ menuCss, titleCss, subtitleCss })
    ).getElement();
    const cssWrapper = new CreateHTMLElement(cssEditorContainer).getElement();
    const numbersWrapperCss = this.createEditorMenuNumbers(editorNumbersCss);
    const field = new EditorCss().getEditorField();

    cssWrapper.append(numbersWrapperCss, field);

    const htmlWrapper = new CreateHTMLElement(wrapperHTML).getElement();
    const htmlMenu = new CreateHTMLElement(
      Object.values({ menuHTML, titleHtml, subtitleHtml })
    ).getElement();
    const numbersWrapperHTML = this.createEditorMenuNumbers(editorNumbersHTML);
    const codeField = new Code().getElement();
    htmlWrapper.append(numbersWrapperHTML, codeField);

    wrapperMenu.append(cssMenu, htmlMenu);
    wrapperEditor.append(cssWrapper, htmlWrapper);
    wrapperSection.append(wrapperMenu, wrapperEditor);
    this.container.append(header, wrapperSection);
  }

  getElement() {
    return this.container;
  }

  private createEditorMenuNumbers(wrapper: ElementStructure): HTMLElement {
    const element = new CreateHTMLElement(wrapper).getElement();
    const numbers = [];
    for (let i = 1; i <= 15; i++) {
      const span = document.createElement('span');
      span.textContent = `${i}`;
      numbers.push(span);
    }
    element.append(...numbers);
    return element;
  }
}

export { EditorSection };
