const range = (min, max) => {
  let arr = [];
  for (let i = min; i < max; i++) {
    arr = [...arr, i];
  }
  return arr;
};

const createSuperSet = arr => {
  return range(0, Math.pow(2, arr.length)).map(num => {
    let set = [];
    // console.log(num, (num >> 0).toString(2));
    let binary = num.toString(2).split('');
    binary = [...range(0, 3 - binary.length).map(() => 0), ...binary];
    binary.forEach((bit, i) => {
      // console.log(num, bit, i);
      if (parseInt(bit, 10) === 1) {
        set = [...set, arr[i]];
      }
    });
    return set;
  });
};

export default createSuperSet;
