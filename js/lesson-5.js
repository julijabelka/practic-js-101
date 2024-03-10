//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table = document.getElementById("productTable");
// const details = document.getElementById("productDetails");

// table.addEventListener("click", (event) => {
//   if (event.target.nodeName !== "TD") {
//     return;
//   }

//   const parent = event.target.parentNode;
//   const productName = parent.firstElementChild.textContent;
//   const productPrice = parent.lastElementChild.textContent;

//   details.textContent = `Ви вибрали ${productName} за ${productPrice}`;
// });

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

let sum = 0;
let buttonsClicks = {};

const resultSection = document.getElementById("resultSection");

document.querySelector(".statList").addEventListener("click", ({ target }) => {
  if (!target.classList.contains("calcButton")) {
    return;
  }

  const value = Number(target.dataset.number);
  sum += value;

  const key = target.textContent;
  buttonsClicks[key] = (buttonsClicks[key] || 0) + 1;
});

document.getElementById("resultButton").addEventListener("click", () => {
  let stats = `Sum: ${sum}<br>`;

  Object.entries(buttonsClicks).forEach(([key, value]) => {
    stats += `${key} clicked ${value} counts<br>`;
  });

  resultSection.innerHTML = stats;
  sum = 0;
  buttonsClicks = {};
});
