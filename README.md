# project2

## Summary:

This project is a full stack application where you can search for any movie and put it in a list of movies you own or movies you want, and you can write a review for each movie as well. I grab the information of each movie using the OMDB API. Clicking on a movie will display the plot, a list of the main actors, director, release date, genre, rating, and movie runtime.

## Technologies:

HTML, CSS, JavaScript, Express, Sequelize, Materialize, OMDB API

## Approach:

The first thing I did to create this project was map out my sites using the wireframe technique.

![movieapp-wireframe](https://user-images.githubusercontent.com/34433863/42144646-142428d0-7d71-11e8-8f1f-218133ac0e00.jpg)

Creating the wireframes helped out a lot because it gave me a better idea of what I want to show users and how I want them to be able to interact with the application. After that I started creating my database models and migrated them. Here is a map of my models:

<img width="678" alt="screen shot 2018-06-28 at 11 22 15 am" src="https://user-images.githubusercontent.com/34433863/42144954-ff2e9e54-7d72-11e8-8b77-2603f17c987f.png">

Next, I started creating the RESTful routes and ejs files (by referencing my wirefames on what exactly I needed). After all the routes and ejs file were completed, I styled the app using Materialize and custom CSS. Finally, after all of that was completed I deployed the application onto the web using Heroku.

At this point in development, I was finally able to get the information I wanted from the API displayed to the screen:

<img width="1270" alt="screen shot 2018-06-26 at 4 37 54 pm" src="https://user-images.githubusercontent.com/34433863/42144704-69cf497c-7d71-11e8-9e06-1c093374934b.png">

Getting reviews was a difficult challenge, but I got it working in the end:

<img width="1281" alt="screen shot 2018-06-26 at 4 34 38 pm" src="https://user-images.githubusercontent.com/34433863/42144755-bbd6f99a-7d71-11e8-8b6c-4af95cc959ce.png">

Here is a log of all my RESTful routes:

<img width="501" alt="screen shot 2018-07-01 at 9 29 36 pm" src="https://user-images.githubusercontent.com/34433863/42145389-0fd6a582-7d76-11e8-843f-a6966b79e3b4.png">

## Issues during development:

I had major trouble trying to request API info the way I wanted it to. My original goal was to have the front page displaying movies according to genre, however, the OMDB API did not provide a way to do that. In the end I just hard coded 9 movies on to the front page of the website. In addition, displaying reviews on my info page was a bit of a challenge as well but eventually I managed to get it working.

## Current Issues:

The app is currently not responsive.
I still have not fixed the problem of when something that is typed in the search bar that is not a movie you get a error.


## Deployment:

This app has been deployed on the Heroku cloud platform.

## Authors:

Jacob Spade

## Acknowlegments:

I would like to thank Steve Peters, Kyle Van Bergen, Jay Hathaway, and Michael Shull.

# Link:

https://project2-movieapp-express.herokuapp.com/auth/signup#
