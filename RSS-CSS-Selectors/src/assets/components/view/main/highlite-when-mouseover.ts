import { CodeElements } from './editor-section/code-editor/create-code-elements';
// import { DeskElements } from './desk-section/create-desk-elements';
import { levels } from '../../data/dynamic-data/elements-levels-data';
import { levelsCode } from '../../data/dynamic-data/elements-code';
import { EventEmitter } from '../eventEmitter';
import { DeskElements } from './desk-section/create-desk-elements';

// class Highlight {
//   private codeArray: HTMLElement[];
//   private deskElements: HTMLElement[];
//   private array: HTMLElement[];

//   constructor() {
//     this.deskElements = new DeskElements(0, levels[0]).getElementsArray();
//     this.codeArray = new CodeElements(0, levelsCode[0]).getElementsArray();
//     this.array = [...this.codeArray, ...this.deskElements];

//     this.addHoverListeners();
//   }

//   public addHoverListeners(): void {
//     this.array.forEach((element) => {
//       const dataId = element.getAttribute('data-id') || '';
//       const id = dataId.split('-')[1];
//       this.elementMouseActions(element, id);
//     });
//   }

//   private elementMouseActions(element: HTMLElement, dataId: string): void {
//     element.addEventListener('mouseover', () => {
//       this.highlightClassToggle(dataId);
//     });

//     element.addEventListener('mouseleave', () => {
//       this.highlightClassToggle(dataId);
//     });
//   }

//   private highlightClassToggle(dataId: string): void {
//     const codeElements = document.querySelectorAll(
//       `[data-id="code-${dataId}"]`
//     );
//     codeElements.forEach((elem) => {
//       elem.classList.toggle('mix-blend-luminosity');
//     });

//     const getDeskElement = document.querySelector(`[data-id="desk-${dataId}"]`);
//     const tooltip = getDeskElement?.getElementsByTagName('div')[0];
//     tooltip?.classList.toggle('invisible');
//     getDeskElement?.classList.toggle('ring-4');
//   }

//   getCodeArray() {
//     return this.codeArray;
//   }

//   getElementsArray() {
//     return this.deskElements;
//   }
// }

class Highlight {
  private codeArray: HTMLElement[];
  private deskElements: HTMLElement[];
  private array: HTMLElement[];
  private level: number;
  private eventEmitter: EventEmitter;

  constructor(eventEmitter: EventEmitter) {
    this.eventEmitter = eventEmitter;
    this.level = 0;
    const dataNumber = this.level;
    this.deskElements = new DeskElements(0, levels[0]).getElementsArray();
    this.codeArray = new CodeElements(
      this.level,
      levelsCode[dataNumber]
    ).getElementsArray();
    this.array = [...this.codeArray, ...this.deskElements];
    console.log(this.array);

    this.addHoverListeners();
    this.subscribeToLevelChange();
  }

  public addHoverListeners(): void {
    this.array.forEach((element: HTMLElement) => {
      const dataId = element.getAttribute('data-id') || '';
      console.log(dataId);
      const id = dataId.split('-')[1];
      this.elementMouseActions(element, id);
    });
  }

  private elementMouseActions(element: HTMLElement, dataId: string): void {
    element.addEventListener('mouseover', () => {
      this.highlightClassToggle(dataId);
    });

    element.addEventListener('mouseleave', () => {
      this.highlightClassToggle(dataId);
    });
  }

  private highlightClassToggle(dataId: string): void {
    const codeElements = document.querySelectorAll(
      `[data-id="code-${dataId}"]`
    );
    codeElements.forEach((elem) => {
      elem.classList.toggle('mix-blend-luminosity');
    });

    const getDeskElement = document.querySelector(`[data-id="desk-${dataId}"]`);
    const tooltip = getDeskElement?.getElementsByTagName('div')[0];
    tooltip?.classList.toggle('invisible');
    getDeskElement?.classList.toggle('ring-4');
  }

  private subscribeToLevelChange(): void {
    this.eventEmitter.addEventListener('levelChanged', (level: string) => {
      // Handle the level change event here
      console.log('Level changed:', level);
      this.level = +level;
      // this.updateArrays();
    });
  }

  // private updateArrays(): void {
  //   const dataNumber = this.level;
  //   this.deskElements = new DeskElements(
  //     this.level,
  //     levels[dataNumber]
  //   ).getElementsArray();
  //   this.codeArray = new CodeElements(
  //     this.level,
  //     levelsCode[dataNumber]
  //   ).getElementsArray();
  //   this.array = [...this.codeArray, ...this.deskElements];
  // }

  getCodeArray() {
    return this.codeArray;
  }

  getElementsArray() {
    return this.deskElements;
  }
}

export { Highlight };
