'use strict';

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// let a = prompt('Один из последних просмотренных фильмов', ''),
//   b = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;

// console.log(personalMovieDB);

let result = '';
let strLength = 7;

for (let i = 1; i < strLength; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
// result ->
// *
// **
// ***
// ****
// *****
// ******