//this calls the .env file that's holding the keys (hidden)
require("dotenv").config();


//vars
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api'); 
var spotify = new Spotify(keys.Spotify);
var request = require("request");
var movieName = process.argv[3];
var liriReturn = process.argv[2];

//switches

switch(liriReturn) {
    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":
    movieThis();
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;

    //this should default when inputting 'node liri.js'

default: console.log("\n" + "type any of the following commands below after 'node liri.js': "+ "\n" +
    "spotify-this-song 'any song title' " + "\n" +
    "movie-this 'any movie title' " + "/n" +
    "do-what-it-says " + "\n" +
    "Use quotes for titles with more than one word. GO!");
};

//spotify function

function spotifyThisSong(trackName) {
    var trackName = process.argv[3]; {
    if (!trackName) {
        trackName = "Your Body Is a Wonderland";

    };
    songRequest = trackName;
    spotify.search({
        type: "track",
        query: songRequest
    },
        function (err, data) {
            if (!err) {
                var trackInfo = data.tracks.items;
                for (var i = 0; i <5; i++) {
                    if (trackInfo [i] != undefined) {
                        var spotifyResults = 
                        "Artist: " + trackInfo[i].artists[0].name + "\n" +
                        "Song: " + trackInfo[i].name + "/n" +
                        "Preview URL: " + trackInfo[i].preview_url + "/n" +
                        "Album: " + trackInfo[i].album.name + "\n"

                        console.log(spotifyResults);
                        console.log(' ');

                    };
                };
            } else { console.log ("error: " + err);
                return;
            };
        });

    };
};

