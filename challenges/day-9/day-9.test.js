import largestSumOfNonAdjacent from './day-9';

const couples = [
  [[2, 4, 6, 2, 5], 13],
  [[5, 1, 1, 5], 10],
  [[5, 5, 10, 40, 50, 35], 80],
  [[1, 0, 3, 9, 2], 10],
];

test.each(couples)('largestSumOfNonAdjacent', (array, expected) => {
  expect(largestSumOfNonAdjacent(array)).toEqual(expected);
});
