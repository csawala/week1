'use strict';

const fs = require("fs");
const filePath = process.argv.slice(2).toString();
const fileData = "Testing things for asynchronicity.\n";

fs.writeFile(filePath, fileData, function(err) {
  if (err){
    throw err;
  }
  console.log("This did something... I think");
});

console.log(fileData, filePath);