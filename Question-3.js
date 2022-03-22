/*
biggestNumber is a function that receives 3 numbers (a , b ,c).
 function will return the biggest number.
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
