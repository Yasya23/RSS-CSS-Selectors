class Footer {
  private container: HTMLElement;
  private year: HTMLDivElement;
  private rsSchoolLink: HTMLAnchorElement;
  private rsSchoolLogo: HTMLImageElement;
  private githubLink: HTMLAnchorElement;

  constructor() {
    this.container = document.createElement('footer');
    this.container.classList.add('flex', 'justify-between', 'text-slate-500');

    this.year = document.createElement('div');
    this.year.textContent = '© 2023';
    this.container.appendChild(this.year);

    this.rsSchoolLink = document.createElement('a');
    this.rsSchoolLink.href = 'https://rs.school/js/';

    this.rsSchoolLogo = document.createElement('img');
    this.rsSchoolLogo.classList.add('w-14');
    this.rsSchoolLogo.src = 'https://rs.school/images/rs_school_js.svg';
    this.rsSchoolLogo.alt = 'RS School logo';
    this.rsSchoolLink.appendChild(this.rsSchoolLogo);
    this.container.appendChild(this.rsSchoolLink);

    this.githubLink = document.createElement('a');
    this.githubLink.href = 'https://github.com/Yasya23';
    this.githubLink.textContent = 'GitHub';
    this.container.appendChild(this.githubLink);
  }
}

export { Footer };
