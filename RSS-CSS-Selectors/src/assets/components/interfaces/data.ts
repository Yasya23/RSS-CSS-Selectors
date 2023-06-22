import { ElementStructure } from './page-elements';

interface Data {
  [key: string]: ElementStructure;
}

interface DataTwo {
  [key: string]: Data;
}

export { Data, DataTwo };
