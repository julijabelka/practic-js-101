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

//----------------------------------------
//task-3

//5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостями id, type, amount

// const account = {
//   //поточний баланс рахунка
//   balance: 0,

//   //Історія транзакцій
//   transactions: [],

//   //Метод створює і повертає об'єкт транзакцій
//   //Приймає сумму і тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//     };
//   },
//   //Метод відповідає за додавання сумми к балансу.
//   //Приймає сумму транзакціи.
//   //Визиває createTransaction для створення об'єкта транзакціи
//   //після чого додає його в історію транзакцій
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
//     // transaction.id = Math.random();
//     // this.transactions.push(transaction);
//     this.transactions.push({
//       ...transaction,
//       id: this.transactions.length + 1,
//     });
//   },

//   //Метод відповідає за зняття сумми з балансу.
//   //Приймає сумму транзакціи.
//   //Визиває createTransaction для створення об'єкта транзакціи
//   //після чого додає йогого в історю транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log("Не достатньо грошей на рахунку");
//       return;
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
//     this.transactions.push({
//       ...transaction,
//       id: this.transactions.length + 1,
//     });
//   },

//   //Метод повертає поточний баланс
//   getBalance() {
//     return `Поточний баланс ${this.balance} $`;
//   },

//   //Метод шукає і повертає об'єкт транзакціи по id
//   getTransactionDetails(id) {
//     return (
//       this.transactions.find((transaction) => transaction.id === id) ||
//       "Не знайдено"
//     );
//   },

//   //Метод повертає кількіств коштів вказаного типу
//   //транзакціи зі всієї історії транзакцій
//   getTransactionType(type) {
//     return this.transactions
//       .filter((transaction) => transaction.type === type)
//       .reduce((total, transaction) => total + transaction.amount, 0);
//   },
// };
// console.log(account.deposit(1000));
// console.log(account.deposit(2000));
// console.log(account.deposit(13));
// console.log(account.deposit(50));
// console.log(account.withdraw(50));
// console.log(account.withdraw(510));
// console.log(account.withdraw(5050));
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionType(Transaction.DEPOSIT));


// 6. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// list() - повертає список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

// const phonebook = {
//   contacts: [],
//     add(data) {
//         const newData = {
//             category: 'default',
//             ...data,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newData);
//   },
//     list() {
//         console.table(this.contacts);
//   },
//     filtered(category) {
//   const filteredContacts = this.contacts.filter(contact => contact.category == category);
//      if(filteredContacts.length === 0){
//          return 'Do not found';
//         } 
//         return filteredContacts;  
//   },
//     delete(name) {
//         this.contacts = this.contacts.filter(contact => contact.name !== name);
//   },
//     updateName(oldName, newName) {
//         const contact = this.contacts.find(contact => contact.name === oldName)
//         if (contact) {
//             contact.name = newName;
//         }
//      },
//   generateId() {
//     return "#" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });
// phonebook.add({
//   name: "Katy",
//   email: "katy@hotmail.com",
//   category: "friends",
// });

// phonebook.list();
// console.log(phonebook.filtered('friends'));

// Є масив чисел, наприклад: arr = [1,2,3,4,5]
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Іншими словами, виклик getSums(arr) має повертати новий масив з такої ж
// кількості елементів, в якому на кожній позиції буде сума елементів масива
// до цієї позиції включно

// Наприклад: для arr = [1,2,3,4,5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція не має змінювати вхідний масив
// Використовуйте метод reduce

// function getSums(arr){
//     return arr.reduce((acc, curr, index) => {
//         if(index === 0) {
//             acc.push(curr);
//         } else {
//             acc.push(curr + acc[index - 1])
//         }
//         return acc;
//     }, [])
// }
// console.log(getSums([1,2,3,4,5]));

//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту (використовуючи індекс елемента)

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// fruits.forEach((fruit, index) => {
//     fruit.id = index + 1;
//     fruit.price *= 0.8;
// })

// const discount = fruits.map((fruit, index) =>({
//     ...fruit,
//     id: index + 1,
//     price: fruit.price * 0.8
// }));

// console.log(discount);

// Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.

const data = [10, 20, 30, 40, 50, 60];
const alphData = ["a", "b", "c", "d", "e"];

function reverseArray(arr) {
    // const result = [];
    // for(let i = arr.length - 1; i>=0; i--){
    //     result.push(arr[i]);
    // }
    // return result;

    return arr.reduce((acc, curr) => [curr, ...acc], [])
}

console.log(reverseArray(data));
console.log(reverseArray(alphData));