/*
getWordByNumber is a function that get a argument 'num', num is a number between 0-9.
The function should return the number in words, i.e. if 'num=3' will return “three”.
 if the argument is out of range return 'invalid'.
 */
const getWordByNumber = (num) => {
  //Your Code Here :-)
  if (num !== parseInt(num)) return "invalid";
  let text = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  if (num >= 0 && num <= 9) return text[num];
  return "invalid";
};
