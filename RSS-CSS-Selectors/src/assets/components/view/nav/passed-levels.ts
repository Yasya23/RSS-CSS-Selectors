class PassedLevels {
  private levels: string[];

  constructor() {
    this.levels = [];
  }

  addLevel(level: number, value: string): void {
    this.levels[level] = value;
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
}

export { PassedLevels };
