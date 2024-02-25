// . Базові операції з DOM
// отримай body елемент і виведи його в консоль;
// отримай елемент id="title" і виведи його в консоль;
// отримай елемент class="list" і виведи його в консоль;
// отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// який елемент є сусідом для h1? Знайти і виведи його в консоль;
// по тегу h3 знайти всі заголовки та виведи їх у консоль;
// для кожного елмента h3 додай class="active", який змінить колів заголовка на червоний колір
// знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// видали елемент li в якому знаходиться заголовок, який має class="completed"
// після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// очисти список

// const bodyEl = document.querySelector('body');
// console.log(bodyEl)
// const titleEl = document.querySelector('#title');
// console.log(titleEl);
// const listEl = document.querySelector('.list');
// console.log(listEl);
// const itemsEl = document.querySelectorAll('[data-topic]');
// console.log(itemsEl);
// // const firstElSibling = titleEl.nextElementSibling;
// // console.log(firstElSibling);
// const firstItemEl = itemsEl[0];
// console.log(firstItemEl);
// const lastItemEl = itemsEl[itemsEl.length - 1];
// console.log(lastItemEl)
// const titlesEl = document.querySelectorAll('h3');
// console.log(titlesEl);
// titlesEl.forEach(element => {
//     console.log(element);
//     element.classList.add('active');
// })


// const topicNav = document.querySelector('[data-topic="navigation"]');
// console.log(topicNav);


//TODO:=========task-02=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

// const listEl = document.querySelector('.list');
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const divContainer = document.createElement('div');
// divContainer.classList.add('number-container');
// const blocks = 100;

// for (let i = 0; i < blocks; i += 1) {
//     const div = document.createElement('div');
//     div.classList.add('number');
//     div.textContent = randomNumber(); 
//     if (div.textContent % 2 === 0) {
//         div.classList.add('even');
//     } else {
//         div.classList.add('odd');
//     }
//     divContainer.appendChild(div);
               
// }
// listEl.after(divContainer);



