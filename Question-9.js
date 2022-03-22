/*
longestWord function receive 1 argument 'sentence'
the function return the longest word in the sentence, only letters will be counted (numbers and special signs will be ignored)
*/
const longestWord = (sentence) => {
  let wordsArray = sentence.split(" ");
  //remove all symbols and number from array.
  for (let i = 0; i < wordsArray.length; i++) {
    let newWord = "";
    for (let j = 0; j < wordsArray[i].length; j++) {
      if (wordsArray[i][j].toLowerCase() !== wordsArray[i][j].toUpperCase()) {
        newWord = newWord + wordsArray[i][j];
      }
    }
    wordsArray[i] = newWord;
  }
  // check for longest word;
  let LongestWordIndex = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > wordsArray[LongestWordIndex].length)
      LongestWordIndex = i;
  }
  return wordsArray[LongestWordIndex];
};
