import { PassedLevels } from '../src/assets/components/view/nav/passed-levels';
import { History } from '../src/assets/components/view/nav/game-history';
import { ElementsIds } from '../src/assets/components/view/elements-actions/add-data-id';
import { View } from '../src/assets/components/view/view';
import { NavClassName } from '../src/assets/components/view/nav/nav-color-elements';
import 'jest-localstorage-mock';

// Jest test for the PassedLevels method

describe('All Levels are passed', () => {
  test('PassedLevels should return true if there are no "no" values and false if there is at least one "no" value', () => {
    const level1 = ['apple', 'banana', 'apple'];
    const level2 = ['orange', 'no', 'kiwi'];
    const level3 = ['grape', 'mango'];

    const passedLevel1 = new PassedLevels(level1).checkLevels();
    const passedLevel2 = new PassedLevels(level2).checkLevels();
    const passedLevel3 = new PassedLevels(level3).checkLevels();

    expect(passedLevel1).toBe(true);
    expect(passedLevel2).toBe(false);
    expect(passedLevel3).toBe(true);
  });
});

// Jest test for checking if the given object is an instance of PassedLevels class

describe('Object is an instance of PassedLevels class', () => {
  const pastLevels = new PassedLevels([]);
  test('Return true or false', () => {
    expect(pastLevels).toBeInstanceOf(PassedLevels);
  });
});

// Jest test for the PassedLevels method to check if level is not passed (element 'no') an return number

describe('Return level that is not passed', () => {
  const array = [
    'passed',
    'passed',
    'passed',
    'passed',
    'passed',
    'no',
    'passed',
    'passed',
    'no',
    'passed',
  ];
  const passedLevels = new PassedLevels(array);
  const currentLevel1 = 4;
  const currentLevel2 = 6;
  const currentLevel3 = 9;
  test('should return next "no" element index after currentLevel', () => {
    expect(passedLevels.nextLevel(currentLevel1)).toBe(5);
    expect(passedLevels.nextLevel(currentLevel2)).toBe(8);
    expect(passedLevels.nextLevel(currentLevel3)).toBe(5);
  });
});

// Jest test for the PassedLevels method to check if classes added to LocalStorage

describe('Elements added to LocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('addToLocalStorage should save levels to localStorage', () => {
    const levels = ['apple', 'banana', 'kiwi'];
    const passedLevels = new PassedLevels(levels);

    passedLevels.addToLocalStorage();

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'history',
      JSON.stringify(levels)
    );
  });
});

// Jest test for the PassedLevels method to check if classes removed from LocalStorage

describe('Elements removed from LocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('removeFromLocalStorage should remove levels from localStorage', () => {
    localStorage.setItem(
      'history',
      JSON.stringify(['apple', 'banana', 'kiwi'])
    );
    const passedLevels = new PassedLevels([]);

    passedLevels.removeFromLocalStorage();

    expect(localStorage.removeItem).toHaveBeenCalledWith('history');
  });
});

// Jest test for the History class

describe('Array with classes exist', () => {
  const history = History.getArray();
  test('Return array from LocalStorage or create new with length equal to 10', () => {
    expect(history.length).toEqual(10);
  });
});

// Jest test for checking that levels number is less or equal 9 in the View class

describe('Return level number less or equal 9', () => {
  const level = new View().getLevel();
  test('Return true or false', () => {
    expect(level).toBeLessThanOrEqual(9);
  });
});

// Jest test for checking if ids assign to elements in ElementsIds class

describe('AssignUniqueIds to each element', () => {
  test('Should assign unique ids to elements', () => {
    const elementsArray = [
      document.createElement('div'),
      document.createElement('a'),
      document.createElement('img'),
    ];

    const id = ['1', '2', '3'];
    const code = 'code';

    ElementsIds.assignUniqueIds(elementsArray, id, code);

    elementsArray.forEach((element, index) => {
      expect(element.getAttribute('data-id')).toBe(`${code}-${id[index]}`);
    });
  });
});

// Jest test for NavClassName class for adding color to active menu element

describe('Active navigation element is colored', () => {
  let navClassName: NavClassName;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="level-1"></div>
      <div id="level-2"></div>
    `;

    navClassName = new NavClassName();
  });

  test('colorActiveElement should add the correct class to the active element and remove the class from the previous active element if it exists', () => {
    const level = 2;
    const previousActiveElement = document.getElementById('level-1');
    const activeElement = document.getElementById('level-2');

    navClassName.colorActiveElement(level);

    expect(
      previousActiveElement?.classList.contains('!text-orange-300')
    ).toBeFalsy();
    expect(activeElement?.classList.contains('!text-orange-300')).toBeTruthy();
    expect(navClassName['previousActiveElement']).toBe(activeElement);
  });
});

// Jest test for NavClassName class for adding color to passed level menu element

describe('Passed level navigation element is colored', () => {
  let navClassName: NavClassName;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="level-2"></div>
    `;

    navClassName = new NavClassName();
  });

  test('colorWinlement should add the correct class to the passed element', () => {
    const level = 2;
    const winElement = document.getElementById('level-2');
    navClassName.colorWinElement(level);
    expect(winElement?.classList.contains('!text-green-300')).toBeTruthy();
  });
});
