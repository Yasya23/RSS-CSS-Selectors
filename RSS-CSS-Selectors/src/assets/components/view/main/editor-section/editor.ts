class EditorSection {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('section');
    this.container.classList.add('w-screen', 'md:w-10/12');

    const heading = document.createElement('h2');
    heading.classList.add('sr-only');
    this.container.appendChild(heading);

    const outerDiv = document.createElement('div');
    outerDiv.classList.add(
      'bg-slate-900',
      'border-8',
      'border-slate-950',
      'rounded',
      'shadow-md',
      'shadow-slate-900'
    );
    this.container.appendChild(outerDiv);

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('flex', 'justify-between');
    outerDiv.append(innerDiv);

    const cssEditorDiv = document.createElement('div');
    cssEditorDiv.classList.add('flex', 'justify-between', 'basis-1/2', 'p-4');
    innerDiv.append(cssEditorDiv);

    const cssEditorLabel = document.createElement('span');
    cssEditorLabel.classList.add('text-slate-300');
    cssEditorLabel.textContent = 'CSS editor';
    cssEditorDiv.append(cssEditorLabel);

    const cssEditorFileName = document.createElement('span');
    cssEditorFileName.classList.add('text-slate-500');
    cssEditorFileName.textContent = 'style.css';
    cssEditorDiv.append(cssEditorFileName);

    const htmlViewerDiv = document.createElement('div');
    htmlViewerDiv.classList.add('flex', 'justify-between', 'basis-1/2', 'p-4');
    innerDiv.append(htmlViewerDiv);

    const htmlViewerLabel = document.createElement('span');
    htmlViewerLabel.classList.add('text-slate-300');
    htmlViewerLabel.textContent = 'HTML viewer';
    htmlViewerDiv.append(htmlViewerLabel);

    const htmlViewerFileName = document.createElement('span');
    htmlViewerFileName.classList.add('text-slate-500');
    htmlViewerFileName.textContent = 'table.html';
    htmlViewerDiv.append(htmlViewerFileName);

    const editorFlexDiv = document.createElement('div');
    editorFlexDiv.classList.add('flex');
    outerDiv.append(editorFlexDiv);

    const cssEditorPanel = document.createElement('div');
    cssEditorPanel.classList.add('flex', 'w-2/4', 'h-full', 'bg-slate-100');
    editorFlexDiv.append(cssEditorPanel);

    const cssEditorNumbers = document.createElement('div');
    cssEditorNumbers.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'w-8',
      'p-2',
      'text-slate-400',
      'bg-slate-200'
    );
    cssEditorNumbers.innerHTML = getEditorNumbersHTML();
    cssEditorPanel.append(cssEditorNumbers);

    const cssEditorForm = document.createElement('div');
    cssEditorForm.classList.add(
      'flex',
      'flex-col',
      'gap-1.5',
      'w-full',
      'px-2',
      'py-2'
    );
    cssEditorPanel.append(cssEditorForm);

    const cssEditorInput = document.createElement('input');
    cssEditorInput.classList.add(
      'bg-cyan-100',
      'outline-0',
      'grow',
      'animate-pulse',
      'focus:animate-none',
      'focus:bg-slate-100'
    );
    cssEditorInput.setAttribute('type', 'text');
    cssEditorInput.setAttribute('placeholder', 'Type your CSS here');
    cssEditorForm.append(cssEditorInput);

    const cssEditorButton = document.createElement('button');
    cssEditorButton.classList.add(
      'transition',
      'ease-in-out',
      'bg-stone-300',
      'hover:bg-stone-400',
      'text-stone-600',
      'px-2',
      'rounded-sm'
    );
    cssEditorButton.textContent = 'Enter';
    cssEditorForm.appendChild(cssEditorButton);

    const cssEditorHelp = document.createElement('p');
    cssEditorHelp.classList.add('text-slate-300', 'grow');
    cssEditorHelp.textContent = 'Click Help';
    cssEditorForm.appendChild(cssEditorHelp);

    const cssEditorHelpButton = document.createElement('button');
    cssEditorHelpButton.classList.add(
      'transition',
      'ease-in-out',
      'bg-stone-300',
      'hover:bg-stone-400',
      'text-stone-600',
      'px-2',
      'rounded-sm'
    );
    cssEditorHelpButton.textContent = "Help, I'm stuck";
    cssEditorForm.append(cssEditorHelpButton);

    const htmlViewerPanel = document.createElement('div');
    htmlViewerPanel.classList.add('flex', 'w-2/4', 'bg-slate-800');
    editorFlexDiv.append(htmlViewerPanel);

    const htmlViewerNumbers = document.createElement('div');
    htmlViewerNumbers.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'text-slate-800',
      'w-8',
      'bg-slate-700',
      'p-2'
    );
    htmlViewerNumbers.innerHTML = getEditorNumbersHTML();
    htmlViewerPanel.appendChild(htmlViewerNumbers);

    const htmlViewerCode = document.createElement('div');
    htmlViewerCode.classList.add(
      'w-full',
      'flex',
      'flex-col',
      'pt-2',
      'text-xs',
      'md:text-base'
    );
    htmlViewerPanel.append(htmlViewerCode);

    const codePre = document.createElement('pre');
    codePre.classList.add('p-0', 'm-0');
    htmlViewerCode.append(codePre);

    const codeBlock = document.createElement('code');
    codeBlock.classList.add('language-html');
    codeBlock.textContent = `<div class="1"></div>
<div class="1"></div>
<div id="1"></div>`;
    codePre.append(codeBlock);

    this.container.append(outerDiv);
  }

  getElement() {
    return this.container;
  }
}

function getEditorNumbersHTML() {
  let numbersHTML = '';
  for (let i = 1; i <= 20; i++) {
    numbersHTML += `<span>${i}</span>`;
  }
  return numbersHTML;
}

export { EditorSection };
