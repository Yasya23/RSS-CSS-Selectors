import { data } from '../../data/page-elements/page-elements';
import { CreateHTMLElement } from '../elements-actions/createHTMLelement';

class Header {
  static initialize(): HTMLElement {
    const { container, title, titleSpan } = data.header;
    const headerContainer = new CreateHTMLElement(container).getElement();
    const headerTitle = new CreateHTMLElement(
      Object.values({ title, titleSpan })
    ).getElement();

    headerContainer.append(headerTitle);

    return headerContainer;
  }
}

export { Header };
