# Card Row Component

The Card Row Component Takes an Array of the following object (0's can be replaced with anynumber):

The list of Genres come from a useContext on the home page

```
{id:0 genre:[0,0,0]}
```

ID is the movie's ID to be passed to the movie card
Genre is an array of movies that are passed to allow dropdown filter to filter them.

So to call the cardRow with only one movie, Fight club, and to have it show on documentary filter you would need the following lines:

    		<GenreContext.Provider value={genrelist}>
    			<CardRow movies={[{ id: 550, genre: [99] },]}/>
    		</GenreContext.Provider>
