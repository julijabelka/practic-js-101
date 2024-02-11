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

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

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

const statistic = tweets
  .flatMap((tweet) => tweet.tags)
  .reduce((stat, tag) => {
    stat[tag] = (stat[tag] || 0) + 1;
    return stat;
  }, {});

console.log(statistic);
