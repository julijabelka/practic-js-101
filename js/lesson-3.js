//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

// task2

//Створити статистику - об'єкт, у якому вказується кількість тегів

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const statistic = {};

// tweets
//   .flatMap((tweet) => tweet.tags)
//   .forEach((tag) => {
//     if (statistic[tag]) {
//       statistic[tag] += 1;
//     } else {
//       statistic[tag] = 1;
//     }
//   });

// console.log(statistic);

// const statistic = tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce((stat, tag) => {
//     return { ...stat, [tag]: stat[tag] ? stat[tag] + 1 : 1 };
//   }, {});

// console.log(statistic);

// const statistic = tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce((stat, tag) => {
//     stat[tag] = (stat[tag] || 0) + 1;
//     return stat;
//   }, {});

// console.log(statistic);


// ================================================


//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат (з перевіркою на наявніст властивостей в об'єкті)

// const calculator = {
//   read(a, b) { 
//     this.valueA = a;
//     this.valueB = b;
//   },
// sum(){
//   if(this.valueA && this.valueB) {
//     return this.valueA + this.valueB
//   } 
//   return `Not found`
// },
// mult() {
//   if(this.valueA && this.valueB) {
//     return this.valueA * this.valueB
//   } 
//   return `Not found`
// },
// };
// console.log(calculator.read(5, 8));
// console.log(calculator.sum());
// console.log(calculator.mult());



// ==================================================


/// Даний словник із міст та дат виступів рок-групи
/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Київ", "Умань", "Одеса"]

// const concerts = {
//   Київ: new Date("2024-04-01"),
//   Умань: new Date("2024-07-02"),
//   Вінниця: new Date("2023-04-21"),
//   Одеса: new Date("2024-07-15"),
//   Хмельницький: new Date("2023-04-18"),
//   Харків: new Date("2023-07-10"),
// };

// function sortedConcerts (object) {
//  const keys = Object.keys(object);
//  return keys.filter(city => object[city] > new Date()).toSorted((a, b) => object[a] - object[b]);

 

// }
// console.log(sortedConcerts(concerts));