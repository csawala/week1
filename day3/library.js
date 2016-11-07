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

// Custom function to build output based on whether
// a track or playlist is being pushed through
function addToPrint (key, content) {
  var output = [];

  // checks id to determine whether to format output as track or playlist
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

  return output;
}


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


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var tracks = library.playlists[playlistId].tracks;

  // print associated playlist
  console.log(addToPrint(library.playlists[playlistId]).toString());
  // print tracks listed within playlist
  tracks.forEach(function(key,i){
    console.log(addToPrint(library.tracks[key]).toString());
  });
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  library.playlists[playlistId].tracks.sort();
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var listId = [];
  var newId = "";
  // finds next available _tXX_ number
  for (var id in library.tracks){
    listId.push(id);
  }

  listId.forEach(function(key,i){
    if(!listId[i + 1]) {
      newId = listId[i];
      newId = newId.slice(0,-1) + (i + 2);
    }
  });

  // create new track using next available track number
  library.tracks[newId] = {
    id: newId,
    name: name,
    artist: artist,
    album: album
  }
}
addTrack("Motherlover", "The Lonely Island", "Turtleneck & Chain");

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