var https = require('https');

// console.log("I dudditz!");

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function(response){
  console.log('In response to handler callback');
  console.log('Response: ', response);
};

console.log("I'm about to make a request!");

https.request(options, callback).end();

console.log("I've made the request!");