'use strict';

<<<<<<< HEAD
// Personal movie data base
// Количество просмотренных фильмов
let numberOfFilms;

// Записать ответ пользователя в переменную
// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   // Повторить вопрос, если ответ соответствует условию
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// start();

=======
>>>>>>> 6a01c84c4d51d4eb727c316ba74d73382388da9f
// Персональная база фильмов
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
<<<<<<< HEAD
  start: function () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    // Повторить вопрос, если ответ соответствует условию
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  writeYourGenres: function (genres) {
    for (let i = 0; i < 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '').trim();
      (genre === null || genre == '') ? i-- : genres[i] = genre;
    }
  },


};

// Записать в массив любимые жанры фильмов
// function writeYourGenres(genres) {
//   for (let i = 0; i < 3; i++) {
//     const genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '').trim();

//     // if (genre === null || genre === '') {
//     //   i--;
//     // } else {
//     //   genres[i] = genre;
//     // }
//     (genre === null || genre == '') ? i-- : genres[i] = genre;
//   }
// }

// writeYourGenres(personalMovieDB.genres);

// Записать ответы пользователя в объект в формате ключ - значение
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const movieTitle = prompt('Один из последних просмотренных фильмов', '').trim();
    const movieRate = +prompt('На сколько оцените его?', '').trim();

    // Повторить вопросы, если ответ не подходит по условию
    if (movieTitle !== '' && movieRate !== '' && movieTitle !== null && movieRate !== null && movieTitle.length <= 50 && typeof movieRate === 'number' && !isNaN(movieRate)) {
      personalMovieDB.movies[movieTitle] = movieRate;
    } else {
      i--;
    }
  }
}

// rememberMyFilms();

// Определить уровень пользователя
function detectPersonalLevel() {
  // Вывести сообщение в зависимости от количества просмотренных фильмов
  if (personalMovieDB.count <= 10) {
    console.log('Просмотрено довольно мало фильмов.');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель.');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман!');
  } else {
    console.log('Произошла ошибка.');
  }
}

// detectPersonalLevel();

// Показать объект, если он не приватный
function showMyDB(hidden) {
  // if (!hidden) {
  //   console.log(personalMovieDB);
  // } else {
  //   console.log('Sorry, data base is privat.');
  // }
  // То же условие, но с тернарным оператором
  (!hidden) ? console.log(personalMovieDB) : console.log('Sorry, data base is privat.');
}

showMyDB(personalMovieDB.privat);


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
// function showFirstMessage(message) {
//   console.log(message);
// }

// showFirstMessage('Hello world');


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


// // task 3
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


// Udemy 31. Объекты. Деструктурицазия объектов.
// const user = {
//   name: 'Valera',
//   age: 29,
//   isMarried: true,
//   hobbies: {
//     guitar: true,
//     drawing: true,
//   },
// };

// Метод перебора объектов 'for in'.
// for (let key in user) {
//   if (typeof user[key] === 'object') {
//     for (let k in user[key]) {
//       console.log(`Свойство ${k} имеет значение ${user[key][k]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${user[key]}`);
//   }
// }

// // Деструктуризация
// const { guitar, drawing } = user.hobbies;

// console.log(Object.keys(user)); // -> ['name', 'age', 'isMarried', 'hobbies']


// Udemy 32. Массивы, псевдомассивы.
// const arr = [2, 34, 5, 'str', false];

// arr.pop();
// arr.push(240);
// console.log(arr);

// // Метод перебора массивов 'for of'.
// for (let value of arr) {
//   console.log(value);
// }

// Метод перебора массивов 'forEach()'.
// arr.forEach((item, i) => {
//   if (typeof item === 'number') {
//     console.log(`Элемент ${item * 2} под индексом ${i}`);
//   } else {
//     console.log(`Элемент ${item} под индексом ${i}`);
//   }
// });

// const str = 'aaa, fff, ddd, kkkkk, bbb, sss, ccc';
// const arrOfWords = str.split(', '); // Метод split(). Разбивает строку на элементы массива.
// console.log(arrOfWords);

// console.log(arrOfWords.join('; ')); // Метод join(). Склеивает элементы массива в строку.

// console.log(arrOfWords.sort()); // Метод sort(). Сортирует элементы массива.
// // Чтобы метод правильно работал с числами, передаем в него callback.
// const arrOfNumbers = [25, 2, 234, 41, 1, 64, 111, 33];
// function compareNum(a, b) {
//   return a - b;
// }

// console.log(arrOfNumbers.sort(compareNum));


// Udemy 34. Передача по ссылке и по значению.
// По значению (примитивы).
// const numA = 10;
// const numB = numA + 20;
// console.log(`a - ${numA}, b - ${numB}`); // -> a - 10, b - 30

// По ссылке (объекты).
// const user = {
//   name: 'Nik',
//   age: 30,
//   isMarried: true,
//   hobbies: [
//     'guitar',
//     'workout',
//     'books',
//   ],
// };

// Неглубокая копия объекта при помощи for in.
// function makeUserCopy(mainUser) {
//   let userCopy = {};

//   for (let key in mainUser) {
//     userCopy[key] = mainUser[key];
//   }

//   return userCopy;
// }

// const userCopy = makeUserCopy(user);
// userCopy.name = 'Alex';
// console.log(user);
// console.log(userCopy);

// Неглубокая копия объекта при помощи Object.assign().
// const objCopy = Object.assign({}, user);
// objCopy.name = 'Wilson';
// console.log(objCopy);

// Неглубокая копия объекта при помощи spread - оператора.
// const objCopy = { ...user };
// objCopy.name = 'Jack';
// console.log(objCopy);

// Глубокая копия объекта при помощи JSON.
// const userCopy = JSON.parse(JSON.stringify(user));
// userCopy.hobbies[2] = 'running';
// console.log(userCopy);

// Копирование массивов: for, for of, slice(), spread, JSON.
// const arr = [1, 33, 22, 55, 44];
// console.log(arr);

// function makeArrCopy(array) {
//   const copy = [];

//   for (let i = 0; i < array.length; i++) {
//     copy[i] = array[i];
//   }

//   return copy;
// }

// const arrCopy = makeArrCopy(arr);

// const forOfArrCopy = [];
// for (let value of arr) {
//   arrCopy.push(value);
// }

// const sliceArrCopy = arr.slice('');
// const spreadArrCopy = [...arr];
// const arrCopy = JSON.parse(JSON.stringify(arr));

// Task 10.
// const personalPlanPeter = {
//   name: "Peter",
//   age: "30",
//   skills: {
//     languages: ['ru', 'ua'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%'
//     },
//     exp: '1 month'
//   },
// };

// function showExperience(plan) {
//   const { exp } = plan.skills;

//   return exp;
// }

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//   let str = '';
//   const { programmingLangs } = plan.skills;

//   for (let key in programmingLangs) {
//     if (key) {
//       str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     } else {
//       return str;
//     }
//   }
//   return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// Task 11.
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(allCurrencies, absentCurrencies) {
//   let result = 'Доступные валюты:\n';
//   if (allCurrencies.length === 0) {
//     return 'Нет доступных валют';
//   } else {
//     for (let i = 0; i < allCurrencies.length; i++) {
//       if (absentCurrencies && absentCurrencies === allCurrencies[i]) {
//         allCurrencies.splice(i, 1);
//       } else {
//         result += `${allCurrencies[i]}\n`;
//       }
//     }
//     return result;
//   }
// }

// console.log(availableCurr(allCurrencies, 'CNY'));

console.log([1, 2, 3]);
=======
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
>>>>>>> 6a01c84c4d51d4eb727c316ba74d73382388da9f
