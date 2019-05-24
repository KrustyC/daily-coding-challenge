const findKSum = (array, k) => {
  return array.some((num, i) => {
    const diff = k - num;
    /**
     * If On the number to the right, there is one equal to the difference,
     * then we found our solution
     */
    return array.slice(i).includes(diff);
  });
};

export default findKSum;
