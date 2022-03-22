/*
capitalize function receive 1 argument 'word'
the function return word that capitalize all vowel letters (a, e, i, o, u,y)
*/
const capitalize = (word) => {
  let newWord = "";
  let newArray = [];
  for (let i = 0; i < word.length; i++) {
    newArray.push(word[i]);
    if (
      newArray[i] === "a" ||
      newArray[i] === "e" ||
      newArray[i] === "i" ||
      newArray[i] === "o" ||
      newArray[i] === "u" ||
      newArray[i] === "y"
    )
      newArray[i] = newArray[i].toUpperCase();
  }
  for (let i = 0; i < word.length; i++) {
    newWord = newWord + newArray[i];
  }
  return newWord;
};
