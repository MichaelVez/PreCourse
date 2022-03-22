/*
getWordByNumber is a function that get a argument 'num', num is a number between 0-9.
The function should return the number in words, i.e. if 'num=3' will return “three”.
if the argument is out of range return 'invalid'.
*/
const countOddFromZeroToNum = (num) => {
  var oddCount = 0;
  while (num != 0) {
    if (num % 2 == 1) oddCount++;
    num--;
  }
  return oddCount;
};
