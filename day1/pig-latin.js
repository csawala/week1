var input = process.argv.slice(2);

function pigLatin(igPay){
  var output = [];

  for (var i = 0; i < igPay.length; i++) {
    var current = igPay[i];
    var firstLetter = current[0];
    output[i] = "";

    for (var j = 1; j < current.length; j++) {
      output[i] += current[j];
    }
    output[i] += firstLetter + "ay";
  }

  return output.join(" ");
}

console.log(pigLatin(input));