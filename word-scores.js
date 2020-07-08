function wordScores(wordArray) {
  // let wordScoresArray = [];
  // for (let word of wordArray) {
  //   wordScoresArray.push(wordScore(word));

  // }
  // return wordScoresArray;
  //return wordArray.map(word => wordScore(word));
  return wordArray.map(wordScore);
}

//takes a word and returns a 
function wordScore(word) {
  let wordScore = 0;
  for (let letter of word) {
    if (LETTERS_TO_SCORE[letter.toUpperCase()]) {
      wordScore += LETTERS_TO_SCORE[letter.toUpperCase()];
    } else {
      return null;
    }
  }
  return wordScore;
}

const LETTERS_TO_SCORE = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};
