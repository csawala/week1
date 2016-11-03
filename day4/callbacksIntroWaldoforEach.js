// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach (function(word,i){
    if (word === "Waldo"){
      found(i);   // execute callback
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);