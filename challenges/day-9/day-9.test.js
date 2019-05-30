import numWays from './day-7';

const couples = [
  ['111', 3],
  ['1011', 2],
  ['01011', 0],
  ['12020', 1],
  ['1215647', 21],
];

test.each(couples)('.numWays %s', (string, expected) => {
  expect(numWays(string)).toEqual(expected);
});
