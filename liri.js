//this calls the .env file that's holding the keys (hidden)
require("dotenv").config();


//vars
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api'); 
var spotify = new Spotify(keys.spotify);
var request = require("request");
var liriReturn = process.argv[2];
var input = process.argv[3];
// var momemnt = require('moment');
// moment().format();
/// moment needed for bands in town? I did not add this. Noted for future dev
var chalk = require('chalk');




//switch/case statements

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

    //this should DEFAULT when inputting 'node liri.js'

default: console.log(chalk.blue("\n" + "To use this LIRI CLI, type any of the following commands below after 'node liri.js': "+ "\n") +
    (chalk.magenta.bgWhite ("1. spotify-this-song 'any song title' " + "\n" +
    "2. movie-this 'any movie title' " + "\n" +
    "3. do-what-it-says " + "\n" +
    "4.Use quotes for titles with more than one word. GO!")));
};

//Spotify function

function spotifyThisSong(trackName) {
    var trackName = process.argv[3]; {
    if (!trackName) {
        trackName = "The Sign Ace of Base";

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
                        "Song: " + trackInfo[i].name + "\n" +
                        "Preview URL: " + trackInfo[i].preview_url + "\n" +
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

// Trying out the IMDB function (crosses fingers)
function movieThis(){
	if(input === null){
		input = 'mr nobody';
	}
    var params = input;
    request("http://www.omdbapi.com/?t=" + params + "&y=&plot=short&apikey=trilogy",  
    function (error, response, body) {
		if (!error && response.statusCode == 200) {
           
			var movieResults =
			chalk.blue.bgWhite("~~~~~~~~~~~~~~~Movie Results~~~~~~~~~~~~~~~") + "\r\n" +
			chalk.cyan("Title: ") + JSON.parse(body).Title +"\r\n"+
			chalk.magenta("Year: ") + JSON.parse(body).Year +"\r\n"+
            chalk.cyan("Imdb Rating: ") + JSON.parse(body).imdbRating +"\r\n"+
            chalk.magenta("Rotten Tomatoes Rating: ") + JSON.parse(body).tomatoRating +"\r\n"+
			chalk.cyan("Country: ") + JSON.parse(body).Country +"\r\n"+
			chalk.magenta("Language: ") + JSON.parse(body).Language +"\r\n"+
			chalk.cyan("Plot: ") + JSON.parse(body).Plot + "\r\n"+
			chalk.magenta("Actors: ") + JSON.parse(body).Actors +"\r\n`"+
			chalk.blue.bgWhite("~~~~~~~~~~~~~End of Movie Results ~~~~~~~~~~~") + "\r\n";
			console.log(movieResults);
			log(movieResults); // all movie inputs are printed to the log.txt file....COOL! IT WORKED B-)
			} else {
				console.log("Error :"+ error);
				return;  
			}
    });
    
}
// Reads and prints what is in the random.txt file 
function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(error, data){
		if (error) {
            console.log("Error occurred" + error);
        } else {
            var doWhatItSays = data.split(",");
                if (doWhatItSays[0] === 'spotify-this-song') {
                input = doWhatItSays[1];
                params = input;
                console.log("The song to search is: " + params);
				spotifyThisSong(params);
				log(params); 
				}
        }
	});
}

//The log function that records the results into log.txt
function log(logResults) {
	fs.appendFile("log.txt", logResults, (error) => {
	    if(error) {
			throw error;
	    }
    });
}



