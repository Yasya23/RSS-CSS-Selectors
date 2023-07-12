import { PassedLevels } from '../src/assets/components/view/nav/passed-levels';
import { History } from '../src/assets/components/view/nav/game-history';
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
  test('Return array from LocalStorage or create new with length equal to 10', () => {
    const history = History.getArray();
    expect(history.length).toBe(10);
  });
});
