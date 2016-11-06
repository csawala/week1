/* ==============================================
================== Synchronous ==================
============================================== */

var fs = require("fs");

var filePath = "/tmp/test_sync.txt";
var fileData = "Testing synchronous file write.\n";

fs.writeFileSync(filePath, fileData);
console.log("successfully wrote to", filePath);


/* ==============================================
================== Asynchronous =================
============================================== */

var fs = require("fs");

var filePath = "/tmp/test_async.txt";
var fileData = "Testing asynchronous file write.\n";

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});