# Video APP

## Demo link:
Access my site at [https://swawozny.github.io/video-app/](https://swawozny.github.io/video-app/)

## Table of Content:

- [About The App](#about-the-app)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)
- [License](#license)

## About The App
VideoAPP allows users to save videos from various websites such as YouTube or Vimeo. The user can mark movies as favorites, filter them by the date they were added, and watch them without going to the website where the video comes from.

## Features

### Adding a movie 
On the home page, there is an input that allows you to paste a link to the video.

![addingmovie](https://i.postimg.cc/HxqtwFyH/zdj1.png)

Currently, you can add a movie with:
- full youtube or Vimeo link
- Youtube shortcut link
- youtube video ID

However, an interface has been prepared that allows you to add additional options for adding videos from other websites in the future.

### Display a movie 
The Saved Videos page shows all the videos you've saved so far.

![displaymovie](https://i.postimg.cc/CKtC09JD/zdj2.png)

When you click on one of the movies, a modal opens which automatically turns on the movie.

![displaymodal](https://i.postimg.cc/wvmXjFbr/zdj2-2.png)


### Edit a movie
Each video has three options:
- opening it on its home site
- delete from saved
- adding to favorites

![editmovie](https://i.postimg.cc/NGXDsG30/zdj3.png)

### Filtering videos
Above the list of movies there is a bar that allows you to filter by the date of adding or whether the movie has been marked as favorite.

![filtermovie](https://i.postimg.cc/m2NS9X2f/zdj4.png)

It is also possible to change the form of displaying movies from tiles to a list.

![changedisplayform](https://i.postimg.cc/3wWjP3jY/zdj5.png)

### Videos options
The filter bar also has possibility to remove all movies or add examples.

![videosoptions](https://i.postimg.cc/3JHBd5hF/zdj6.png)

After selecting one of the options, it is necessary to confirm your decision by rewriting the underlined text.

![confirmdecision](https://i.postimg.cc/t4qNN3Y1/zdj7.png)

### Pagination bar

The user can select the number of movies displayed on a single page in the filter bar, and at the bottom, there is a bar where he can choose the page that interests him.

![paginationbar](https://i.postimg.cc/wjwcf1mw/zdj8.png)


## Technologies
![TypeScript](https://img.shields.io/badge/-TypeScript-000?&logo=TypeScript&logoColor=ddc508)
![React](https://img.shields.io/badge/-React-000?&logo=React)
![Reactstrap](https://img.shields.io/badge/-Reactstrap-000?&logo=Reactstrap)
![Reactrouter](https://img.shields.io/badge/-Reactrouter-000?&logo=Reactrouter)

## Setup

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  


## Status
[VideoAPP] is done. All tasks have been implemented.

## License

MIT license @ [Sebastian Wąwoźny](sebastianwawozny@wp.pl)
