const helper = (string, k, memo) => {
  if (k === 0) {
    return 1;
  }

  const startIndex = string.length - k;
  if (string[startIndex] === '0') {
    return 0;
  }

  if (memo[k] !== null) {
    return memo[k];
  }

  let result = helper(string, k - 1, memo);
  if (k >= 2 && parseInt(string.substring(0, 2), 10) <= 26) {
    result += helper(string, k - 2, memo);
  }

  memo[k] = result;
  return result;
};

const numWays = string => {
  const memo = Array.from(string + ' ').map(x => null);
  return helper(string, string.length, memo);
};

export default numWays;
