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
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const sumNumbers = function (array) {
//   const newArray = [];
//   for (let index = 0; index < array.length - 1; index++) {
//     newArray.push(array[index] + array[index + 1]);
//   }
//   return newArray;
// };

// console.log(sumNumbers(someArr));

//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// function checkNumber(number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "fizzbuzz";
//   }
//   if (number % 3 === 0) {
//     return "fizz";
//   }
//   if (number % 5 === 0) {
//     return "buzz";
//   }
//   return "Error";
// }
// console.log(checkNumber(15));

// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// const index = styles.indexOf("Блюз");
// styles[index] = "Класика";

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);

// Напишіть if..else, що відповідає наступному switch:

// const browser = prompt("Enter your browser");

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

// const browser = prompt("Enter your browser");

// if (browser === "Edge") {
//     alert("You've got the Edge!");
// } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
//     alert("Okay we support these browsers too");
// }
// else if (browser === "" || browser === null) {
//     alert("Enter something for check");
// }
// else {
//     alert("We hope that this page looks ok!");
// }

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {

//     const login = prompt("Enter your login");

//     // if (array.includes(login)) {
//     //     alert("Доступ дозволено");
//     // } else {
//     //     alert("Користувач не знайден");
//     //  }

//     for (const element of array) {

//         if (element === login) {
//             return alert("Доступ дозволено");
//         }

//     }

//     alert("Користувач не знайден");

// }

// checkLogin(logins);

// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// if (minuteValue <= 15) {
//     console.log(`${minuteValue} - 1 чверть`)
// } else if (minuteValue <= 30) {
//    console.log(`${minuteValue} - 2 чверть`)
// } else if (minuteValue <= 45) {
//     console.log(`${minuteValue} - 3 чверть`)
// } else {
//     console.log(`${minuteValue} - 4 чверть`)
// }

// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];
// function checkFalse(array) {
//     const newArray = [];
//     for (const element of array) {
//         if (element) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// console.log(checkFalse(array));

//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];
// function add(name){
//     if(names.includes(name)){
//         return `${name}- вже існує`;
//     }
//     names.push(name)
//     return names;
// }
// console.log(add("Petro"));
// console.log(add("Sveta"));

// function remove(name) {
// const index = names.indexOf(name);
// if(index === -1){
//     return `${name}- не знайдено`;
// }
// names.splice(index, 1);
// return names;
// }
// console.log(remove("Petro"));
// console.log(remove("Petro"));

// function update(oldName, newName){
//     const index = names.indexOf(oldName);
//     if(index === -1){
//         return `${oldName}- не знайдено`;
//     }
//     // names.splice(index, 1, newName);
//     names[index] = newName;
//     return names;
// }
// console.log(update("Max", "olena"));
// console.log(update("Max", "olena"));

// Напишіть функцію, яка перевіряє, чи є
// рядок (без урахування регістра) паліндромом.
// Паліндром — це слово, число, фраза або інша
// послідовність символів, яка читається як
// в обратному, так і в прямому напрямку, наприклад,
// madam або racecar
// console.log(isPalindrome("Abba"), true);
// console.log(isPalindrome("hello"), false));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage() {
  // const args = arguments;
  let sum = 0;
  let count = 0;

  for (const arg of arguments) {
    if (typeof arg === "number") {
      sum += arg;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return sum / count;
}

console.log(caclculateAverage(1, 2, 3, 4, 5));
console.log(caclculateAverage());
