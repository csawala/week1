var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var posit = -1;

  return function (){
    //console.log(posit);
    posit += 1;
    return list[posit];
  }
  // return cheatUp(posit);
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6