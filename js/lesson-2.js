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

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = parseInt(prompt("Enter Number:"));
// let result = "";
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "лето";
//     break;
//   case 4:
//     result = "осень";
//     break;
//   default:
//     result = "Должно быть число от 1 до 4";
// }

// console.log(result);

// const checkSeason = function (num) {
//   let result = "";
//   switch (num) {
//     case 1:
//       result = "зима";
//       break;
//     case 2:
//       result = "весна";
//       break;
//     case 3:
//       result = "лето";
//       break;
//     case 4:
//       result = "осень";
//       break;
//     default:
//       result = "Должно быть число от 1 до 4";
//   }
//   return result;
// };

// console.log(checkSeason(5));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

const sumNumbers = function (array) {
  const newArray = [];
  for (let index = 0; index < array.length - 1; index++) {
    newArray.push(array[index] + array[index + 1]);
  }
  return newArray;
};

console.log(sumNumbers(someArr));
