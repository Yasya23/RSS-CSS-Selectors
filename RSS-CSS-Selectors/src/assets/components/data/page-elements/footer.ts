const footerData = {
  container: {
    element: 'footer',
    classes: [
      'flex',
      'justify-between',
      'text-slate-500',
      'py-3',
      'px-4',
      'text-xs',
      'sm:text-base',
    ],
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
    classes: ['w-8', 'sm:w-14'],
    src: 'https://rs.school/images/rs_school_js.svg',
    alt: 'RS School logo',
  },

  githubLink: {
    element: 'a',
    href: 'https://github.com/Yasya23',
    textContent: 'GitHub',
  },
};

export { footerData };
