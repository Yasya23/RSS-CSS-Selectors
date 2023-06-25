import { headerData } from '../../data/page-elements/header';
import { CreateHTMLElement } from '../actions/createHTMLelement';

class Header {
  static initialize(): HTMLElement {
    const { container, title, titleSpan } = headerData;
    const headerContainer = new CreateHTMLElement(container).getElement();
    const headerTitle = new CreateHTMLElement(
      Object.values({ title, titleSpan })
    ).getElement();

    headerContainer.append(headerTitle);

    return headerContainer;
  }
}

export { Header };
