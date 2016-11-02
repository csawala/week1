var input = process.argv.slice(2);

function charPosition(toSort) {
  var splitText = toSort.join("").split("");
  var locateText = {};
  var location = 0;

  splitText.forEach(function(letter){
    if (!locateText.hasOwnProperty(letter)) {
      locateText[letter] = [location];
    } else {
      locateText[letter].push(location);
    }
    location++;
  })


  return locateText;
}

console.log(charPosition(input));