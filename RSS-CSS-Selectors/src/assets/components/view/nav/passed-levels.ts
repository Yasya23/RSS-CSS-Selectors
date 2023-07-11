class PassedLevels {
  private levels: string[];

  constructor(history: string[]) {
    this.levels = history;
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

  addToLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this.levels));
  }

  removeFromLocalStorage(): void {
    localStorage.removeItem('history');
  }
}

export { PassedLevels };
