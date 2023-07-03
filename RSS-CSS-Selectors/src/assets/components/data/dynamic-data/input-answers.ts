const answers = [
  ['plate'],
  ['.red-apple'],
  ['#orange'],
  ['plate:first-child'],
  ['napkin:last-child'],
  ['plate:ntn-child(even)', 'plate:ntn-child(2n)'],
  ['apple:ntn-of-type(2n+1)'],
  ['plate:only-child'],
  ['plate:empty', '.plate:empty'],
  ['napkin:has(orange)'],
];

export { answers };
