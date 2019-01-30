# LIRI Node App

## Like Siri, this is a Language Interpretation and Recognition Interface.

### npm packages used:
1) `npm init` (initializes `package.json`)
2) `npm i node-spotify-api` (allows accress to Spotify's API keys)
3) `npm i imdb-api` (access to IMDB)
4) `npm i chalk` (styling in the command line)

### The following choices can be made in the Liri app when `node liri.js` is ran in the command line:
``` node liri.js spotify-this-song "song name here" ```

``` node liri.js movie-this "movie name here" ``` 

``` node liri.js do-what-it-says ```

## Preview of the app in action!

The app will be begin with prompt `node liri.js`

![prompt](/images/prompt.gif)

Next, after given input choices, we can now search the Spotify API using `node liri.js spotify-this-song "song name here"`

(*Use quotes for song titles with more than one word.*)

![spotify](/images/spotify.gif)

Using `node liri.js movie-this "movie name here"`, we can search the IMDB API for a desired movie.

(*Use quotes for movie titles with more than one word.*)

![movie](/images/movie.gif)

Finally, we can input `node liri.js do-what-it-says` for the app to read what is hard coded into ```log.txt``` file in our repository. This file also records all input that is given in the CLI

![dowhatitsays](/images/dowhatitsays.gif)
