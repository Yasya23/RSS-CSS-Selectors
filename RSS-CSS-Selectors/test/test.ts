import { PassedLevels } from '../src/assets/components/view/nav/passed-levels';
import { History } from '../src/assets/components/view/nav/game-history';
import { ElementsIds } from '../src/assets/components/view/elements-actions/add-data-id';
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

// Jest test for the History class

describe('Array with classes exist', () => {
  const history = History.getArray();
  test('Return array from LocalStorage or create new with length equal to 10', () => {
    expect(history.length).toEqual(10);
  });
});

// Jest test for checking if the given object is an instance of PassedLevels class

describe('Object is an instance of PassedLevels class', () => {
  const pastLevels = new PassedLevels([]);
  test('Return true or false', () => {
    expect(pastLevels).toBeInstanceOf(PassedLevels);
  });
});

// Jest test for checking if ids assign to elements

describe('ElementsIds', () => {
  describe('assignUniqueIds', () => {
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
});
