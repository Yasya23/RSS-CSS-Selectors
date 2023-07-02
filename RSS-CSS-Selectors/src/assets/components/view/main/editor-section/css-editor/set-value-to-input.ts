class SetValue {
  set(inputField: HTMLElement, answer: string): void {
    const input = inputField as HTMLInputElement;
    input.value = '';
    const value = answer;
    let index = 0;
    input.focus();
    const typeEffect = setInterval(() => {
      if (index >= value.length) {
        clearInterval(typeEffect);
        return;
      }

      const currentInputValue = input.value;
      const nextChar = value.charAt(index);
      input.value = currentInputValue + nextChar;
      index++;
    }, 200);
  }
}

export { SetValue };
