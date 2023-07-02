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
    console.log(levels);
  }

  getLevels(): string[] {
    return this.levels;
  }

  checkLevels(): boolean {
    return !this.levels.includes('no');
  }

  addToLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this.levels));
  }
}

export { PassedLevels };
