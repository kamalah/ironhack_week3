module.exports = [fileactions, lowest_rated];

function fileactions(err, file){ 
    if (err) {
        throw err;
    } else {
    	var episodes = JSON.parse(file);
	    episodes = sort_episodes(episodes);
	   	print_episodes(filter_stars,episodes);
	   	//print_episodes(searchFor(episodes, "Jon"));
    }

}

function print_episodes (filter, episodes) {
	 episodes = filter(episodes, 8.5);
	 for (var i = 0; i < episodes.length; i++) {
    	console.log("Title: " + episodes[i].title + " Episode #" + episodes[i].episode_number);
    	console.log(episodes[i].description);
    	var star_string = Array(Math.floor(episodes[i].rating)).join("*"); 
    	console.log("Rating: " + episodes[i].rating + " " + star_string);
    };
}

function lowest_rated (err, file) {
	if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);
    episodes = filter_stars(episodes);
    //episodes = searchFor(episodes, "Jon");
    print_episodes(episodes);

}

function get_stars(rating) {
	var star_string = " ";
	for (var i = 0; i < rating; i++) {
		star_string +="*";
	};
	return star_string;
}

function sort_episodes (episodes) {
	return episodes.sort(function(a,b) {
		return (a.episode_number - b.episode_number)});
}

function filter_stars (episodes,minRating) {
	return episodes.filter(function(episode){ 
		return (episode.rating >= minRating);});
}

function searchFor(episodes,name) {
	var find_name = episodes.filter(function(episode) {
		return (episode.description.indexOf(name) != -1);
	});
	return find_name;
}


