// --------1----------
//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
/*const number = prompt("enter number");

let hours = parseInt(number / 60);

let minutes = number % 60;

hours = String(hours).padStart(2, 0);

minutes = String(minutes).padStart(2, 0);
console.log(`${hours}:${minutes}`);*/

// Попроси користувача ввести своє повідомлення в prompt.
// Після чого виведи в консоль довжину цього повідомлення,
// індекс останнього елемента в повідомленні і
// останній елемент, приведений до верхнього регістру

// const message = prompt("enter message");

// console.log(`Message length: ${message.length}`);
// const lastIndex = message.length - 1;
// console.log(`Last element index: ${lastIndex}`);
// console.log(`Last element in UpperCase: ${message[lastIndex].toUpperCase()}`);

// Напиши функцію randomInRange, яка буде приймати два числа (min, max) і повертати
// випадкове число в діапазоні цих двох чисел

// function randomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(randomInRange(10, 20));

// Наступна функція має повертати true, якщо параметр age більше чи дорівнює 18.

const age = prompt("Enter your age");

function isAdult(age) {
  return parseInt(age) >= 18;
}

console.log(isAdult(age));
