class PassedLevels {
  private levels: string[];

  constructor(history: string[]) {
    this.levels = history;
  }

  addLevel(level: number, value: string): void {
    // console.log(value, this.levels[level], level, this.levels);
    // this.levels[level] = value;
    this.levels.push(value);
    // console.log(this.levels[level]); //Ok
    console.log(this.levels); ///array is a meth

    this.addToLocalStorage();
  }

  setArray(array: string[]): void {
    this.levels = array;
  }

  checkLevels(): boolean {
    return !this.levels.includes('no');
  }

  nextLevel(currentLevel: number): number {
    const arr = this.levels.slice(currentLevel + 1);
    const index = arr.indexOf('no');
    if (index !== -1) {
      return index + currentLevel + 1;
    } else {
      return this.levels.indexOf('no');
    }
  }

  addToLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this.levels));
  }

  removeFromLocalStorage() {
    // console.log('remove');
    localStorage.removeItem('history');
  }
}

export { PassedLevels };
