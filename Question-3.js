/*
getWordByNumber is a function that get a argument 'num', num is a number between 0-9.
The function should return the number in words, i.e. if 'num=3' will return “three”.
if the argument is out of range return 'invalid'.
*/
const biggestNumber = (a, b, c) => {
  if (a > b) {
    if (a > c) return a;
    else return c;
  } else {
    if (b > c) return b;
    else return c;
  }
};
