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
// додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" 
// а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// очисти список

// const bodyEl = document.querySelector('body');
// console.log(bodyEl)
const titleEl = document.querySelector('#title');
// console.log(titleEl);
const listEl = document.querySelector('.list');
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








// topicNav.style.backgroundColor = 'blue';

// topicNav.lastElementChild.textContent = 'Я змінив тут текст';

// const pEl = document.createElement('p');
// pEl.textContent = "Об'єктна модель документа (Document Object Model)";

// titleEl.after(pEl);

// const liEl = document.createElement('li');
// const h3El = document.createElement('h3');
// h3El.textContent = "Властивість innerHTML";

// const parEl = document.createElement('p');
// parEl.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"

// liEl.appendChild(h3El);
// liEl.appendChild(parEl);
// console.log(liEl);

// listEl.append(liEl);

// const markup = `
// <li >
//         <h3>Властивість innerHTML</h3>
//         <p>
//         Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
//         </p>
//       </li>
// `
// listEl.insertAdjacentHTML('beforeend', markup);

// listEl.innerHTML = "";

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


// 4. Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.
const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

// Приклад елементу списку
//<li id="${id}">
 //    <img src="${imgUrl}" alt="${title}" />
//     <p>${title}</p>
//</li>

const ulEl = document.querySelector('.galary');
// document.addEventListener('DOMContentLoaded', renderPage);
const watchedFilms = ['film_2', 'film_4', 'film_5'];

function createMarkup(films) {
    return films.map(film => `
    <li id="${film.id}">
     <img src="${film.imgUrl}" alt="${film.title}" />
     <p>${film.title}</p>
</li>`

    ).join('')

}

function renderPage() {
    ulEl.innerHTML = createMarkup(films);
    watchedFilms.forEach(id => {
        const film = ulEl.querySelector(`#${id}`)
        if(film) {
            film.style.opacity = 0.5
        }
    })
}

renderPage();
