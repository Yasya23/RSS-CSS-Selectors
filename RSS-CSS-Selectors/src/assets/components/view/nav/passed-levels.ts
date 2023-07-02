class PassedLevels {
  private levels: string[];

  constructor() {
    const gameHistory = localStorage.getItem('history');
    if (gameHistory) {
      this.levels = JSON.parse(gameHistory);
    } else {
      this.levels = new Array(10).fill('no');
    }
  }

  addLevel(level: number, value: string): void {
    this.levels[level] = value;
    this.addToLocalStorage();
  }

  setLevels(levels: string[]): void {
    this.levels = levels;
  }

  getLevels(): string[] {
    return this.levels;
  }

  checkLevels(): boolean {
    return !this.levels.includes('no');
  }

  nextLevel(currentLevel: number): number {
    const arr = this.levels.slice(currentLevel + 1);
    console.log(arr);
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
}

export { PassedLevels };
