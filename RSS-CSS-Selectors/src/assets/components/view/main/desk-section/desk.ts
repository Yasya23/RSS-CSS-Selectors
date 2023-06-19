class DeskSection {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('section');
    this.container.classList.add('mb-9');

    const heading = document.createElement('h2');
    heading.classList.add('sr-only');
    heading.textContent = 'Desk with elements for choosing';
    this.container.appendChild(heading);

    const outerDiv = document.createElement('div');
    outerDiv.classList.add(
      'relative',
      'w-screen',
      'sm:w-[32rem]',
      'h-32',
      'flex',
      'justify-center',
      'items-center'
    );
    this.container.appendChild(outerDiv);

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('flex', 'z-10');
    outerDiv.appendChild(innerDiv);

    const redCircle = document.createElement('div');
    redCircle.classList.add(
      'w-14',
      'h-14',
      'flex',
      'justify-center',
      'items-center',
      'bg-red-600',
      'border-red-700',
      'border-b-8',
      'border-r-4',
      'rounded-full'
    );
    innerDiv.appendChild(redCircle);

    const redDot = document.createElement('div');
    redDot.classList.add(
      'w-6',
      'h-6',
      'bg-red-500',
      'rounded-full',
      'animate-bounce'
    );
    redCircle.appendChild(redDot);

    const absoluteDiv = document.createElement('div');
    absoluteDiv.classList.add(
      'absolute',
      'flex',
      'top-0',
      'left-0',
      'justify-center',
      'w-full',
      'sm:w-[32rem]',
      'border-b-8',
      'border-amber-700'
    );
    outerDiv.appendChild(absoluteDiv);

    const skewDiv1 = document.createElement('div');
    skewDiv1.classList.add(
      'w-full',
      'h-32',
      'skew-x-[-10deg]',
      'bg-amber-600',
      'rounded-sm'
    );
    absoluteDiv.appendChild(skewDiv1);

    const halfDiv = document.createElement('div');
    halfDiv.classList.add('w-1/2', 'h-32', 'bg-amber-600', 'absolute');
    absoluteDiv.appendChild(halfDiv);

    const skewDiv2 = document.createElement('div');
    skewDiv2.classList.add(
      'w-full',
      'h-32',
      'skew-x-[10deg]',
      'bg-amber-600',
      'rounded-sm'
    );
    absoluteDiv.appendChild(skewDiv2);

    this.container.appendChild(outerDiv);
  }

  getElement() {
    return this.container;
  }
}

export { DeskSection };
