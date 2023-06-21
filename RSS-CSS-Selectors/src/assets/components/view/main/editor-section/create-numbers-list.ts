class EditorNumbersList {
  static getEditorNumbersHTML(): string {
    let numbersHTML = '';
    for (let i = 1; i <= 20; i++) {
      numbersHTML += `<span>${i}</span>`;
    }
    return numbersHTML;
  }
}

export { EditorNumbersList };
