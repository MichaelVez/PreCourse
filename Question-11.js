/*
minNumberInArr function receive 1 argument 'arr' 
the function return the min val in arr
*/
const minNumberInArr = (arr) => {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) minNum = arr[i];
  }

  return minNum;
};
