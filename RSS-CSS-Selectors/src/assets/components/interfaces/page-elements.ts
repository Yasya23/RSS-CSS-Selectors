interface ElementStructure {
  element: string;
  classes?: Array<string>;
  textContent?: string;
  href?: string;
  src?: string;
  alt?: string;
  setAttribute?: SetAttribute;
}

interface SetAttribute {
  type?: string;
  placeholder?: string;
}

interface Data {
  [key: string]: ElementStructure;
}

export { ElementStructure, Data };
