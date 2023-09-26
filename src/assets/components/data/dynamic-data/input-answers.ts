const answers = [
  ['plate', 'table plate', 'table > plate', 'table + plate', 'table ~ plate'],
  [
    '.red-apple',
    'apple.red-apple',
    'plate .red-apple',
    'plate > .red-apple',
    'plate + .red-apple',
    'plate ~ .red-apple',
  ],
  [
    '#orange',
    'orange#orange',
    'table #orange',
    'table > #orange',
    'table + #orange',
    'table ~ #orange',
  ],
  ['plate:first-child', 'table plate:first-child'],
  ['napkin:last-child', 'table napkin:last-child'],
  [
    'plate:ntn-child(even)',
    'plate:ntn-child(2n)',
    'table plate:nth-child(2n)',
    'table plate:nth-child(even)',
  ],
  ['apple:ntn-of-type(2n+1)', 'table apple:ntn-of-type(2n+1)'],
  [
    'plate:only-child apple',
    'plate:only-child > apple',
    'plate:only-child apple',
    'table plate:only-child apple',
    'table plate:only-child > apple',
  ],
  ['.plate:empty', 'plate:empty', 'table .plate:empty', 'table plate:empty'],
  ['napkin:has(orange)', 'table napkin:has(orange)'],
];

export { answers };
