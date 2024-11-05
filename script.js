'use strict';

// Записываем ответ пользователя в переменную
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// Персональная база фильмов
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// Выводим сообщение в зависимости от количества просмотренных фильмов
if (personalMovieDB.count <= 10) {
  console.log('Просмотрено довольно мало фильмов.');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель.');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман!');
} else {
  console.log('Произошла ошибка.');
}

// Повторяем вопросы пользователю, если его ответ не подходит по условию
for (let i = 0; i < 2; i++) {
  let movieTitle = prompt('Один из последних просмотренных фильмов', '');
  let movieRate = +prompt('На сколько оцените его?', '');

  if (movieTitle === '' || movieTitle === null || movieTitle.length > 50) {
    i--;
  } else {
    personalMovieDB.movies[movieTitle] = movieRate;
  }
}

console.log(personalMovieDB);

// task loop inside loop
// let result = '';
// let strLength = 7;

// for (let i = 1; i < strLength; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);
// result ->
// *
// **
// ***
// ****
// *****
// ******

// loop marks
// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first; // mark to skip iteration of main loop
//       console.log(`Third level ${k}`);
//     }
//   }
// }

// task: make figure using code

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += ' ';
//   }
//   for (let k = 0; k < i * 2 + 1; k++) {
//     result += "*";
//   }
//   result += '\n';
// }

// console.log(result);
// result ->
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

