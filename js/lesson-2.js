//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// let login = prompt("Enter login:");

// console.log(login);

// if (login === "Адмін") {
//   let password = prompt("Enter password:");

//   //   if (password === "Я головний") {
//   //     console.log("Вітаю!");
//   //   } else {
//   //     console.log("Невірний пароль!");
//   //   }

//   console.log(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
// } else if (login === null || login === "") {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 10;
// const min = 1;
// let sum = 0;

// for (let i = max; i >= min; i--) {
//   console.log(i);

//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(`sum: ${sum}`);

// function calculateSumOfEvenNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);

//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(calculateSumOfEvenNumbers(1, 10));
