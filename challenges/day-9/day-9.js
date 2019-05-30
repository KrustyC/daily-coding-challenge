const arrayMax = array => {
  let max = -Infinity;

  array.forEach(x => {
    if (x > max) {
      max = x;
    }
  });

  return max;
};

const largestSumOfNonAdjacent = array => {
  const { length } = array;

  for (let i = length - 3; i >= 0; i--) {
    const maxOfNonAdjacent = arrayMax(array.slice(i + 2));
    array[i] = maxOfNonAdjacent + array[i];
  }

  return array[0] > array[1] ? array[0] : array[1];
};

export default largestSumOfNonAdjacent;