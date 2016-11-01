function rollDie(dice){
  var rolls = [];

  for (var i = 0; i < dice; i++) {
    rolls[i] = Math.ceil(Math.random() * 6);
  }

  return rolls;
}

var toRoll = process.argv.slice(2);
console.log("Rolled " + toRoll + " die: " + rollDie(toRoll).join(", "));