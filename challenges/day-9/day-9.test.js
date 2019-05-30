import maxSumDistantNumbers from './day-9';

const couples = [[[2, 4, 6, 2, 5], 13], [[5, 1, 1, 5], 10]];

test.each(couples)('.maxSumDistantNumbers', (array, expected) => {
  expect(maxSumDistantNumbers(array)).toEqual(expected);
});
