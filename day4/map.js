// map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
'use strict';

function customMap(input, _callBack){
  const output = [];

  input.forEach(function(current, index){
    const tempVal = _callBack(current);
    output.push(_callBack(current));
  });

  return output;
}

const lyrics = customMap(["ground", "control", "to", "major", "tom"], function(elm){
  return elm.length;
});

console.log(lyrics);