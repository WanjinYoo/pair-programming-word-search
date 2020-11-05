
const verticalJoin = function (letters) {
  let array = [];
  let array2 = [];
  for (let i = 0; i < letters[0].length; i++) {
    let array1 = [];
    for (let j = 0; j < letters.length; j++) {
      array1.push(letters[j][i]);
    }
    array.push(array1);
  }
  // return array;
  for (l of array) {
    array2.push(l.join(""));
  }
  return array2;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const vertical = verticalJoin(letters); //this is the vertical array.
  for (l of horizontalJoin) {
    for (ls of vertical) {
      if (l.includes(word) || ls.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;