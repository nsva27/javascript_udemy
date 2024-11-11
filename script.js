'use strict';

// Записываем ответ пользователя в переменную
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// // Персональная база фильмов
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// // Выводим сообщение в зависимости от количества просмотренных фильмов
// if (personalMovieDB.count <= 10) {
//   console.log('Просмотрено довольно мало фильмов.');
// } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//   console.log('Вы классический зритель.');
// } else if (personalMovieDB.count > 30) {
//   console.log('Вы киноман!');
// } else {
//   console.log('Произошла ошибка.');
// }

// // Повторяем вопросы пользователю, если его ответ не подходит по условию
// for (let i = 0; i < 2; i++) {
//   const movieTitle = prompt('Один из последних просмотренных фильмов', '');
//   const movieRate = +prompt('На сколько оцените его?', '');

//   if (movieTitle !== '' && movieRate !== '' && movieTitle !== null && movieRate !== null && movieTitle.length <= 50) {
//     personalMovieDB.movies[movieTitle] = movieRate;
//   } else {
//     i--;
//   }
// }

// console.log(personalMovieDB);

// Tasks (practice)

// task: make figure using loop
// let result = '';
// let strLength = 7;

// for (let i = 1; i < strLength; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);
// result must be->
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

// task 2: make figure using loop

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
// result must be->
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// Functions

function showFirstMessage(message) {
  console.log(message);
}

showFirstMessage('Hello world');


const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
  return amount * curr;
}

function promotion(result) {
  console.log(result * discount);
}

promotion(convert(500, eurCurr));


// task 3
function getMathResult(num, count) {
  let str = '';

  if (typeof count !== 'number' || count <= 0) {
    return num;
  }

  for (let i = 1; i <= count; i++) {
    if (i !== count) {
      str += `${num * i}---`;
    } else {
      str += `${num * i}`;
    }
  }
  return str;
}

console.log(getMathResult(5, 10));


// Udemy 27. Методы строк и чисел.
const str = 'test';
const fruit = 'some fruit';
const logg = 'Hello world!';
const test = '12.2px';

console.log(str.toUpperCase());
console.log(fruit.indexOf('fruit'));
console.log(logg.slice(0, 5));
console.log(parseInt(test));
console.log(parseFloat(test));
