var movie = [
{title: '"in Bruges"',
rating: "5",
hasWatched: true
},
{
title: '"Frozen"',
rating: "4.5",
hasWatched: false
},

{
title: '"Mad Max Fury Road"',
rating: "5",
hasWatched: false
},

{	
title: '"Les Miserables"',
rating: "3.5",
hasWatched: false
}
,
{
title: '"Titanic"',
rating: "5",
hasWatched: true
},

{
title: '"Moana"',
rating: "5",
hasWatched: false
}

];

for (i= 0; i < movie.length; i++)
{
	if(movie[i].hasWatched === true)
	{

	console.log("You have watched " + movie[i].title + " - " + movie[i].rating+ " stars" );

}
else{

	console.log("You have not watched " + movie[i].title + " - " + movie[i].rating+ " stars" );
}
};

