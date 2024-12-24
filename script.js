'use strict';

// Персональная база фильмов
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const movieTitle = prompt('Один из последних просмотренных фильмов', '');
      const movieRate = +prompt('На сколько оцените его?', '');
  
      if (movieTitle !== '' && movieRate !== '' && movieTitle !== null && movieRate !== null && movieTitle.length <= 50 && typeof movieRate === 'number' && !isNaN(movieRate)) {
        this.movies[movieTitle] = movieRate;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (this.count <= 10) {
      console.log('Просмотрено довольно мало фильмов.');
    } else if (this.count > 10 && this.count <= 30) {
      console.log('Вы классический зритель.');
    } else if (this.count > 30) {
      console.log('Вы киноман!');
    } else {
      console.log('Произошла ошибка.');
    }
  },
  writeYourGenres: function(genres) {
    for (let i = 0; i < 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
 
      (genre === null || genre == '') ? i-- : genres[i] = genre;
    }
  },
  showMyDB: function(hidden) {
    (!hidden) ? console.log(this) : console.log('Sorry, data base is privat.');
  },
};

personalMovieDB.showMyDB(this.privat);
