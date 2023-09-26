type ElementStructure = {
  element: string;
  classes?: Array<string>;
  textContent?: string;
  href?: string;
  src?: string;
  alt?: string;
  setAttribute?: SetAttribute;
  id?: string;
};

type SetAttribute = {
  type?: string;
  placeholder?: string;
  value?: string;
};

export { ElementStructure };
