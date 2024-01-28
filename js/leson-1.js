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

//  const age = prompt("Enter your age");

// function isAdult(age) {
//     if (age<18) {
//         return confirm("Are you adult?")
//     } else {return parseInt(age) >= 18;}
// //   return parseInt(age) >= 18;
// }

// console.log(isAdult(age));


// Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b

// function min(a, b) {
//     const checkA = Number(a)
//     if (Number.isNaN(checkA)){
//         return "not a number"
//     }
//   return Math.min(a, b);
// }
// console.log(min("qwwerty" , 1))
// console.log(min(10, 20));

// Введи значення в prompt і перевір чи є воно числом

// const answer = Number(prompt("Enter value"));
// console.log(`${answer} - ${!Number.isNaN(answer)}`);

// Оголоси функцію favoriteLanguage, яка буде повертати повідомлення
// "I love <language>! I have been studying it for <years> years."
// де language і years - це параметри, які очікує функція, мова (рядок)
// і роки (число).

// function favoriteLanguage (language, years) {
//   return `I love ${language}! I have been studying it for ${years} years.`;
// }
// console.log(favoriteLanguage("English", 5));

// Запитай користувача про його ім'я та прізвище,
// а потім виведb вітання, об'єднуючи ці дані в один рядок.

// const userName = prompt("What is your name")
// const userSurname = prompt("What is your surname")
// alert(`Hello ${userName} ${userSurname}`)


// Запитуй у користувача число в prompt.
// Створи функцію, яка буде приймати це число і возводити його в його ж ступінь
// Функція має повертати рядок "<число> в ступені <число> дорівнює <число возведено в ступінь>"

// const number = prompt("Enter number")
// function numberInDegree(number) {
//     // const number2 = number ** number
//     const number2 = Math.pow(number, number)
//     return `${number} в ступені ${number} дорівнює ${number2}`
// }
// console.log(numberInDegree(number))

// Який результат буде виведено в консоль?
// console.log(typeof typeof 1);

// Що відобразиться в консолі:
// console.log(Number(undefined));

// console.log("10" - 8 + true);
// console.log(5 + 5 + "5");

// const a = 10;
// function check() {
//     const a = 20;
//   console.log(a);
// }
// check();


//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const userAnswer = prompt("Яка офіційна назва JavaScript?")
// if(userAnswer==="ECMAScript"){
//     alert("Вірно!")
// }
// else{
//     alert("Не знаєте? ECMAScript!")
// }

