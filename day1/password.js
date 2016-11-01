var password = "audaciously";

function obfuscate(secure){
  var newPass = "";

  for (var i = 0; i < secure.length; i++) {
    switch(secure.charAt(i)){
      case "a":
        newPass += "4"
        break;
      case "e":
        newPass += "3"
        break;
      case "o":
        newPass += "0"
        break;
      case "l":
        newPass += "1"
        break;
      default:
        newPass += secure.charAt(i);
    }
  }

  return newPass;
}

console.log(obfuscate(password));