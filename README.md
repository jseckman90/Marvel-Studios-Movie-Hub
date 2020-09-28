# Marvel Studios Movie Hub

# URL: 
https://marvelstudiosmoviehub-orcin.vercel.app/

## Marvel Studios Movie Hub:
Is an application that allows the user to scroll through the 3 phases of the MCU and click on a Marvel movie poster within that phase to display movie information such as title, release date, plot, and relevant characters

## Technologies Used
The Movie Database API (https://developers.themoviedb.org/3/getting-started/introduction) to get movie information (title, release date, plot, characters)
Online Movie Database API (http://www.omdbapi.com/) to get movie poster urls
HTML
CSS Flexbox
JavaScript
jQuery
AJAX

## Approach Taken
Started with html to get a basic structure/layout going. 

Used the movie db and omdb apis to retrieve movie id and posters to hardcode and create objects.  The object for each mvoie contains, movie ID from the movie database api, poster from online movie database api, and the mcu phase that the movie is in.

I then created an array of all of the objects

I created a for loop to loop over the movie array.  First, I populated the poster carousel with the movie posters, grouping the movie posters in divs based on the MCU phase. 

Once the posters are added to the DOM, the AJAX request is made from the TMDB API which uses the movie id from the objects in the array to add the correct movie id to the api url.  From there, basic movie info is appended to the movie-info div. within this ajax request, an on.click method is used for the close button appended to the movie-info div to be able to close the movie info div. 

The next AJAX request is made, this time for movie credit information from TMDB API.  using the movie id again to add the correct movie id to the api url.  This request pulls the characters from movies and appends them to the movie-info api.

Another on.click is added for the movie posters so that when a user clicks a movie poster, that movie-info div if toggled to be displayed.





## Unsolved Problems
Trouble with figuring out how to make all movie posters fit on one line as opposed to wrapping and expanding the container.  Phase 3 movies particularly since there are 11 movies.

## Future additions
Pull in super hero biographies from Marvels API or Super Hero API so when you click a characters name, a bio is displayed
Add a search
Add movie trailers to the move info section
