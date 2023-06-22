import { Data } from '../../../interfaces/data';

const FooterData: Data = {
  container: {
    element: 'footer',
    classes: ['flex', 'justify-between', 'text-slate-500', 'p-4'],
  },
  year: {
    element: 'div',
    textContent: '© 2023',
  },

  rsLink: {
    element: 'a',
    href: 'https://rs.school/js/',
  },

  rsLogo: {
    element: 'img',
    classes: ['w-14'],
    src: 'https://rs.school/images/rs_school_js.svg',
    alt: 'RS School logo',
  },

  githubLink: {
    element: 'a',
    href: 'https://github.com/Yasya23',
    textContent: 'GitHub',
  },
};

export { FooterData };
