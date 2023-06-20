import { footer } from '../../data/page-elements/footer/footer';
import { CreateHTMLElement } from '../createHTMLelement';

class Footer {
  private container: HTMLElement;
  private year: HTMLElement;
  private rsSchoolLink: HTMLElement;
  private rsSchoolLogo: HTMLElement;
  private githubLink: HTMLElement;

  constructor() {
    const { container, year, rsLink, rsLogo, githubLink } = footer;
    this.container = new CreateHTMLElement(container).getElement();
    this.year = new CreateHTMLElement(year).getElement();
    this.rsSchoolLink = new CreateHTMLElement(rsLink).getElement();
    this.rsSchoolLogo = new CreateHTMLElement(rsLogo).getElement();
    this.githubLink = new CreateHTMLElement(githubLink).getElement();

    this.rsSchoolLink.append(this.rsSchoolLogo);
    this.container.append(this.year, this.rsSchoolLink, this.githubLink);
  }

  getElement() {
    return this.container;
  }
}

export { Footer };
