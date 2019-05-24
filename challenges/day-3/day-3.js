const productOfOtherNumbers = array => {
  return array.map((num, i) => {
    return [...array.slice(0, i), ...array.slice(i + 1)].reduce(
      (acc, value) => acc * value,
      1
    );
  });
};

export default productOfOtherNumbers;
