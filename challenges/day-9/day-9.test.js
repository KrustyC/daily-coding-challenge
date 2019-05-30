import maxSumDistantNumbers from './day-9';

const couples = [
  ['111', 3],
  ['1011', 2],
  ['01011', 0],
  ['12020', 1],
  ['1215647', 21],
];

test.each(couples)('.maxSumDistantNumbers', (array, expected) => {
  expect(maxSumDistantNumbers(array)).toEqual(expected);
});
