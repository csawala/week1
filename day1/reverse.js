var input = process.argv.slice(2);

function reversal(toRev){
  var reversed = "";

  for (var i = 0; i < toRev.length; i++) {
    for (var j = toRev[i].length; j >= 0; j--){
      reversed += toRev[i].charAt(j);
    }
    console.log(reversed);
    reversed = "";
  }
}

reversal(input);