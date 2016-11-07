var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:
// to Refactor later to reduce code...
// consider taking parameters for tracks vs. playlists
function addToPrint (key, content) {
  // console.log(key);
  var output = [];
  var list;

  if (key.id.includes('t')){
    output.push(key.id + ": "
      + key.name + " by "
      + key.artist
      + " (" + key.album + ")");
  }
  if (key.id.includes('p')){
    output.push(key.id + ": "
      + key.name + " - "
      + key.tracks.length +  " tracks");
  }

  // originally using content as only parameter
  // for (var key in content){
  //   // output[key] = content[key];
  //   for (var value in content[key]) {
  //     if(value.hasOwnProperty) {
  //       // console.log(content[key][value]);
  //       output[key] += content[key][value];
  //     }
  //   }
  // }
  return output;
  // console.log(output);
}
// addToPrint('p01');

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var playlist = library.playlists;
  var output = [];

  for (var items in playlist) {
    output.push(addToPrint(playlist[items]));
  }

  output.forEach(function(key, i) {
    console.log(output[i].toString());
  });
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var trackList = library.tracks;
  var output = [];

  for (var items in trackList) {
    output.push(addToPrint(trackList[items]));
  }

  output.forEach(function(key, i) {
    console.log(output[i].toString());
  });
}
printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var tracks = library.playlists[playlistId].tracks;
  var output = [];
  // console.log(tracks);


}

// printPlaylist('p01');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}