# Team Popcorn - Movie Information Frontend

## Created By

Charles , Jon Damaso, Matthew Hanson, Mrunal Dhangare

## Details

This website is a frontend for <https://www.themoviedb.org/>'s API. It allows a user to search for movies and actors and view information about them. It also displays a list of trending, popular, and upcoming movies. You can also place movies into your own custom watchlist.

## Parts

It is comprised of the following parts

### Pages

- Home
- Actor Details
- Movie Details
- Genre list
- TV Shows

### Components

React Components Include:

- Watchlist - Manages watchlist
- cardRow - Dislays a row of Movie Cards
- Search - Manages search funcitonality.
- dropdown - Dropdown menu for genre list
- card - Displays a movie card
- Header - Displayed header component.

## Installation Instructions

To run this project locally, you will need to do the following:

1. Clone the repository via: `https://github.com/dingbat91/TR_Project_TeamB.git`
2. Install the dependencies via: `npm install`
3. create a .env file in the root directory which takes two entries
   - REACT*APP_APIKEY= *"Your api key here!"\_
   - REACT_APP_BASE_URL= <https://api.themoviedb.org/3>
4. Run the project via: `npm start`

## Instructions

### Home Page

<img src= src\assets\images\readme\Homepage.png width=800/>

The home page displays a list of trending, popular, and upcoming movies. Any of the posters or splash images for a filk cam be clicked to view more information about the movie.

#### Header

<img src="src\assets\images\readme\Header.png" width=800>

The header contains a search bar, and a my watchlist button. You can use the search bar to search for any film and open it by clicking the selection. My Watchlist will bring you to your current watchlist.

#### Search Functionality

-- DETAILS ON SEARCH HERE --

### Genre Page

<img src= src\assets\images\readme\GenrePage.png width=800/>

**_WORK IN PROGRESS_**
-- DETAILS AND IMAGE OF GENRE PAGE HERE --

The Genre page displays a list of movies based on their Genre. The genres are displayed in a dropdown menu.

The Movies are displayed in a grid of cards which can be clicked to view more information about the movie.

### TV Shows

**_WORK IN PROGRESS_**

<img src="src\assets\images\readme\TVShows.png" width=800 />

The Tv Shows page displays a list of popular TV shows.
The shows are displayed in a grid of cards which can be clicked to view more information about the show.

### Movie Details

<img src= src\assets\images\readme\MoviePage.png width=800/>

The movie details page gives detailed information on a selected movie. The details given are:

- Title
- Byline
- Overview
- Release Status
- Genre
- Budget
- Revenue
- Cast
- Trailers

The images of the cast can be selected to get more details about them, and trailers can also be watched from the page by clicking on them.

### Actor Details

<img src= src\assets\images\readme\ActorPage.png width=800/>

The Actor Details page displays informatin on the selected actor. It displays the following information:

- Name
- Biography
- Birth Date
- Birth Place
- Death Date (if applicable)
- Social Media Links (If available)
- Known For Movies
- Trailers for Known movies

Movies can be selected by clicking on the posters. and trailers can also be watched from the page by clicking on them.

### Watchlist

<img src="src\assets\images\readme\Watchlist.png" width=800>

The watchlist page displays a list of movies that have been added to the watchlist. Movies can be removed from the watchlist by clicking the remove button.

Movies can also be selected to view more information about them.
