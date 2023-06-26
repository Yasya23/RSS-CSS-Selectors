interface ElementStructure {
  element: string;
  classes?: Array<string>;
  textContent?: string;
  href?: string;
  src?: string;
  alt?: string;
  setAttribute?: SetAttribute;
  id?: string;
}

interface SetAttribute {
  type?: string;
  placeholder?: string;
  value?: string;
}

interface Data {
  [key: string]: ElementStructure;
}

export { ElementStructure, Data };
