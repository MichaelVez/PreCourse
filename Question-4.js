/*
countOddFromZeroToNum function get argument num , the argument 'num' is a positive number.
the function returns the amount of the odd numbers from 0 to num (inclusive).
*/
const countOddFromZeroToNum = (num) => {
  var oddCount = 0;
  while (num != 0) {
    if (num % 2 == 1) oddCount++;
    num--;
  }
  return oddCount;
};
