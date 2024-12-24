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


// Задачи, практика.
// Задача. Сделать фигуру, используя циклы.
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

// Loop marks.
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

// Задача. Сделать фигуру 2, используя вложенные циклы.
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

// Функции.
// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//   return amount * curr;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// promotion(convert(500, eurCurr));

// // Task 3
// function getMathResult(num, count) {
//   let str = '';

//   if (typeof count !== 'number' || count <= 0) {
//     return num;
//   }

//   for (let i = 1; i <= count; i++) {
//     if (i !== count) {
//       str += `${num * i}---`;
//     } else {
//       str += `${num * i}`;
//     }
//   }
//   return str;
// }

// console.log(getMathResult(5, 10));

// Udemy 27. Методы строк и чисел.
// const str = 'test';
// const fruit = 'some fruit';
// const logg = 'Hello world!';
// const test = '12.2px';

// console.log(str.toUpperCase());
// console.log(fruit.indexOf('fruit'));
// console.log(logg.slice(0, 5));
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Задача. Вернуть номер купе, по номеру места.
// function getCoupeNumber(placeNumber) {
//   const coupes = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//     [17, 18, 19, 20],
//     [21, 22, 23, 24],
//     [25, 26, 27, 28],
//     [29, 30, 31, 32],
//     [33, 34, 35, 36],
//   ];

//   for (let i = 0; i < coupes.length; i++) {
//     if (placeNumber === 0 || placeNumber > 36) {
//       return "Таких мест в вагоне не существует";
//     } else if (typeof placeNumber !== 'number' || placeNumber < 0 || !Number.isInteger(placeNumber)) {
//       return "Ошибка. Проверьте правильность введенного номера места";
//     } else {
//       for (let j = 0; j < coupes[i].length; j++) {
//         if (coupes[i][j] === placeNumber) {
//           return i + 1;
//         }
//       }
//     }
//   }
// }

// getCoupeNumber(12);

// Задача. Получить целое число, вернуть результат в часах и минутах.
// function getTimeFromMinutes(minutesTotal) {
//   if (typeof minutesTotal !== 'number' || !Number.isInteger(minutesTotal) || minutesTotal < 0) {
//     return "Ошибка, проверьте данные";
//   }

//   const hours = Math.floor(minutesTotal / 60);
//   const minutes = minutesTotal % 60;
//   let hoursStr = '';

//   switch(hours) {
//     case 0:
//       hoursStr = 'часов';
//       break;
//     case 1:
//       hoursStr = 'час';
//       break;
//     case 2:
//     case 3:
//     case 4:
//       hoursStr = 'часа';
//       break;
//     default:
//       hoursStr = 'часов';
//   };

//   return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(190));

// Задача. Вернуть самое большое из четырех чисел.
// function findMaxNumber(a, b, c, d) {
//   if (typeof a !== 'number' ||
//       typeof b !== 'number' ||
//       typeof c !== 'number' ||
//       typeof d !== 'number'
//   ) {
//     return 0;
//   } else {
//     return Math.max(a, b, c, d);
//   }
// }

// console.log(findMaxNumber(21, 4, 7.5, 24));

// Задача. Вернуть строку, в которой выведены числа Фибоначчи.
// function fib(num) {
//   if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
//     return '';
//   }

//   let str = '';
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//       str += `${first}`;
//     } else {
//       str += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }

//   return str;
// }

// console.log(fib(7));
