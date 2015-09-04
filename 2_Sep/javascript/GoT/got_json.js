var fs = require('fs');
var imported_functions = require('./fileactions');
var fileActions = imported_functions[0];
var lowest_rated = imported_functions[1];

fs.readFile("GoTEpisodes.json", 'utf8', fileActions);

//fs.readFile("GoTEpisodes.json", 'utf8', lowest_rated);