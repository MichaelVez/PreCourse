/*
divideOrHasSeven function recieve 2 arguments: 'start' and 'end'. The function return the amount of numbers that have one of:
1. have the number 7 in one of the digits.
2. the number divide by 7.
*/
const divideOrHasSeven = (start, end) => {
  let count = 0;
  let contain7 = false;
  for (let i = start; i < end + 1; i++) {
    var j = String(i);
    for (let k = 0; k < j.length; k++) {
      if (j[k] == 7) contain7 = true;
    }

    if (contain7 || i % 7 == 0) count++;
    contain7 = false;
  }
  return count;
};
