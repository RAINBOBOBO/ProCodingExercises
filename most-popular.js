// function mostPopular(s) {
//   let ltr_obj = {};
//   let high = 0;
//   let ltr;
//   for (let letter of s) {
//     const count = ltr_obj[letter] || 0;
//     const nc = count + 1;
//     ltr_obj[letter] = nc;
//     if (nc >= high) {
//       high = nc;
//       ltr = letter;
//     }
//   }
//   return ltr;
// }
​
//takes a string and returns the letter with the highest frequency
function mostCommonLetter(string){
  // ""cabba"" {'c':1, 'a':1, 'b':1}
  let letterToFrequency = {};
  let highestLetterCount = 0; 
  let winningLetter = ""; 
​
  for (let letter of string){ 
    const count = letterToFrequency[letter] || 0;
    const letterCount = count + 1;
    letterToFrequency[letter] = letterCount;
    if (letterCount > highestLetterCount){
      highestLetterCount = letterCount;
      winningLetter = letter;
    }
  }
  return char;
}
