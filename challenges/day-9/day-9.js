const maxSum = array => {
  let [prevOne, prevTwo, res] = [0, 0, 0];

  array.forEach((num, i) => {
    if (i === 0) {
      res = num;
    } else if (i === 1) {
      res = Math.max(array[0], num);
    } else {
      res = Math.max(prevTwo + num, prevOne);
    }

    prevTwo = prevOne;
    prevOne = res;
  });

  return res;
};

export default maxSum;
