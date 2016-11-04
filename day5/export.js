module.exports = {
  what: "Huh?",
  runFunc: outWhat
};

function outWhat() {
  console.log("Surprise, this is an exported module! " + this.what);
}