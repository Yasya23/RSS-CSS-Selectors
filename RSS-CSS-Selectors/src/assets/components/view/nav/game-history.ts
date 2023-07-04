class History {
  static getArray(): string[] {
    const gameHistory = localStorage.getItem('history');
    let result: string[];
    if (gameHistory) {
      result = JSON.parse(gameHistory);
    } else {
      result = new Array(10).fill('no');
    }

    return result;
  }
}

export { History };
