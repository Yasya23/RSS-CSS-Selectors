class EditorNumbersList {
  static createEditorNumbers(): HTMLSpanElement[] {
    const numbers = [];
    for (let i = 1; i <= 20; i++) {
      const span = document.createElement('span');
      span.textContent = `${i}`;
      numbers.push(span);
    }
    return numbers;
  }
}

export { EditorNumbersList };
