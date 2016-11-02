var input = process.argv.slice(2);

function countLetters(toSort) {
  var splitText = toSort.join("").split("");
  var sortedText = {};


  splitText.forEach(function(letter){
    if (!sortedText.hasOwnProperty(letter)) {
      sortedText[letter] = 1;
    } else {
      sortedText[letter] ++;
    }
  })

  return sortedText;
}

console.log(countLetters(input));