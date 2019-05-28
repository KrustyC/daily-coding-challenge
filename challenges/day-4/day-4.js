const segregate = array => {
  let i = 0;
  let j = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      j++;
    }
  }

  return { array, end: j };
};

const findFirstMissingpositive = initialArray => {
  const segregatedArray = segregate(initialArray);
  const { array, end } = segregatedArray;

  for (let i = 0; i < end; i++) {
    const x = Math.abs(array[i]);
    if (x > 0 && x <= end) {
      array[x - 1] = Math.abs(array[x - 1]) * -1;
    }
  }

  for (let i = 0; i < end; i++) {
    if (array[i] > 0) {
      return i + 1;
    }
  }

  return end + 1;
};

export default findFirstMissingpositive;
