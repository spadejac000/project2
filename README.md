# project2

Summary:

This project is a full stack application where you can search for any movie and put it in a list of movies you own or movies you want, and you can write a review for each movie as well. I grab the information of each movie using the OMDB API. Clicking on a movie will display the plot, a list of the main actors, director, release date, genre, rating, and movie runtime.

Technologies:

HTML, CSS, JavaScript, Express, Sequelize, Materialize, OMDB API

Approach:

The first thing I did to create this project was map out my sites using the wireframe technique. Creating the wireframes helped out a lot because it gave me a better idea of what I want to show users and how I want them to be able to interact with the application. After that I started creating my database models and migrated them. Next, I started creating the RESTful routes and ejs files (by referencing my wirefames on what exactly I needed). After all the routes and ejs file were completed, I styled the app using Materialize and custom CSS. Finally, after all of that was completed I deployed the application onto the web using Heroku.

Issues during development:

I had major trouble trying to request API info the way I wanted it to. My original goal was to have the front page displaying movies according to genre, however, the OMDB API did not provide a way to do that. In the end I just hard coded 9 movies on to the front page of the website. In addition, displaying comments on my info page was a bit of a challenge as well but eventually I managed to get it working.

Current Issues:

The app is currently not responsive.
I still have not fixed the problem of when something that is typed in the search bar that is not a movie you get a error.


Deployment:

This app has been deployed on the Heroku cloud platform.

Authors:

Jacob Spade

Acknowlegments:

I would like to thank Steve Peters, Kyle Van Bergen, Jay Hathaway, and Michael Shull.
