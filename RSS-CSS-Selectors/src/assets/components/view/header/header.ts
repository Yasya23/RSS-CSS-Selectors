import { HeaderData } from '../../data/page-elements/header/header';
import { CreateHTMLElement } from '../actions/createHTMLelement';

class Header {
  static initialize(): HTMLElement {
    const { container, title, titleSpan } = HeaderData;
    const headerContainer = new CreateHTMLElement(container).getElement();
    const headerTitle = new CreateHTMLElement(title).getElement();
    const headerTitleSpan = new CreateHTMLElement(titleSpan).getElement();

    headerTitle.append(headerTitleSpan);
    headerContainer.append(headerTitle);

    return headerContainer;
  }
}

export { Header };
