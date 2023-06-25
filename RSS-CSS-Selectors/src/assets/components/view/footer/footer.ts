import { FooterData } from '../../data/page-elements/footer/footer';
import { CreateHTMLElement } from '../actions/createHTMLelement';

class Footer {
  static initialize(): HTMLElement {
    const { container, year, rsLink, rsLogo, githubLink } = FooterData;
    const createHTMLElement = new CreateHTMLElement(container);
    const footerContainer = createHTMLElement.getElement();
    const yearElement = new CreateHTMLElement(year).getElement();
    const rsSchoolLinkElement = new CreateHTMLElement(rsLink).getElement();
    const rsSchoolLogoElement = new CreateHTMLElement(rsLogo).getElement();
    const githubLinkElement = new CreateHTMLElement(githubLink).getElement();

    rsSchoolLinkElement.append(rsSchoolLogoElement);
    footerContainer.append(yearElement, rsSchoolLinkElement, githubLinkElement);

    return footerContainer;
  }
}

export { Footer };
