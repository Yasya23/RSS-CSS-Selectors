const tooltip = {
  element: 'div',
  classes: [
    'invisible',
    'w-max',
    'h-max',
    'p-2',
    'bg-slate-100',
    'absolute',
    'text-center',
    'align-middle',
    'rounded-sm',
    'bottom-20',
    'drop-shadow-md',
    'text-slate-700',
  ],
};

const tooltipTextcontent = [
  ['<plate></plate>', '<plate></plate>'],
  ['<plate></plate>', '<apple class="red-apple"></apple>', '<plate></plate>'],
  ['<napkin></napkin>', '<orange id="orange"></orange>', '<apple></apple>'],
  ['<plate></plate>', '<plate></plate>'],
  ['<napkin></napkin>', '<orange></orange>', '<napkin></napkin>'],
  ['<plate></plate>', '<plate></plate>', '<plate></plate>', '<plate></plate>'],
  [
    '<apple></apple>',
    '<apple></apple>',
    '<apple></apple>',
    '<apple></apple>',
    '<apple></apple>',
  ],
  ['<plate></plate>', '<apple></apple>', '<plate></plate>', '<plate></plate>'],
  [
    '<plate></plate>',
    '<plate></plate>',
    '<orange></orange>',
    '<plate></plate>',
  ],
  [
    '<napkin></napkin>',
    '<napkin></napkin>',
    '<orange></orange>',
    '<napkin></napkin>',
  ],
];

export { tooltip, tooltipTextcontent };
