/*
sumArray function receive 1 argument 'arr' 
the function return sum of arr
*/
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
