import { footerData } from '../../data/page-elements/footer';
import { CreateHTMLElement } from '../elements-actions/createHTMLelement';

class Footer {
  static initialize(): HTMLElement {
    const { container, year, rsLink, rsLogo, githubLink } = footerData;
    const footerContainer = new CreateHTMLElement(
      Object.values({ container, year, githubLink })
    ).getElement();

    const logo = new CreateHTMLElement(
      Object.values({ rsLink, rsLogo })
    ).getElement();
    footerContainer.append(logo);

    return footerContainer;
  }
}

export { Footer };
