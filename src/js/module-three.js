// const numbers = [...[1, 2, 3], 4, 5];
// console.log(numbers);

// const temp = [1, 2, 3, 4, 5, 7, 9, 0];

// console.log(Math.max(...temp));
// console.log(Math.min(...temp));

// const a = [1, 34, 5, 6];
// const b = [...a];

// console.log(b);

// const a = [{ d: 1 }, { b: 12 }, { x: 2 }, { n: 112 }];

// const b = [...a];

// // true - так как ссылается на одну ссылку
// console.log(a[0] === b[0]);

// // folse - так как разные ссылки
// console.log(a === b);

// a[0].x = 1000;

// console.log('a:', a, 'b:', b);

// const lastWeekTemp = [1, 2, 3];
// const currentTemp = [4, 5, 6];
// const nextWeekTemp = [7, 8, 9];

// const allTemps = [...lastWeekTemp, ...currentTemp, ...nextWeekTemp];

// console.log(allTemps);

// const a = { d: 1 },{c: 233},
// const b = { b: 12 }, { x: 2 }, { n: 112 };

// console.log("a:", a, "b:", b)

// const numbers = [...1, 2, 3].concat([12, 21, 31], [124, 4123, 512]);
// const temp = [1, 2, 3, 12, 21, 0.31, 124, 4123, 512];

// console.log(Math.max(...temp));
// console.log(Math.min(...temp));

// const defoultSettings = {
//   theme: 'light',
//   showNotification: 'true',
//   hideSideBar: 'false',
// };
// const userSettings = {
//   showNotification: 'false',
//   hideSideBar: 'true',
// };
// const finalSettings = {
//   ...defoultSettings,
//   ...userSettings,
// };

// console.log('finalSettings:', finalSettings);

// const playlist = {
//   name: 'My super plailist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   tracjCount: 3,
//   avatar: 'https:/google.com',
//   stats: {
//     followers: 123,
//     views: 123,
//     likes: 123,
//   },
// };
// деструктуризация объекта
// const { rating, name, tracks, stats, avatar } = playlist;

// console.log(rating, name, tracks, stats, avatar);

// деструктуризация массива
// const authors = {
//   kiwi: 3,
//   poly: 4,
//   ajax: 5,
//   mango: 7,
// };

// const enteries = Object.entries(authors);

// for (const [name, rating] of enteries) {
//   console.log(name, rating);
// }

// const playlist = {
//   name: 'My super plailist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   tracjCount: 3,
//   avatar: 'https:/google.com',
//   stats: {
//     followers: 123,
//     views: 123,
//     likes: 123,
//   },
// };

// const { name, rating, avatsr, ...restProps } = playlist;
// console.log(name, rating, avatsr);
// console.log(restProps);
// console.log(playlist);

// патерн функции

// const showPlaylist = function (userPlaylist) {
//   const {
//     name,
//     rating,
//     tracks,
//     tracjCount,
//     avatar,
//     stats: { followers, views, likes },
//   } = showPlaylist;

//   console.log(name, rating, tracks, tracjCount, avatar, stats);
// };
// showPlaylist(plailist);

// const plailist = {
//   name: 'My super plailist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   tracjCount: 3,
//   avatar: 'https:/google.com',
//   stats: {
//     followers: 123,
//     views: 123,
//     likes: 123,
//   },
// };

// showPlaylist(plailist);

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quatity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quatity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(producteName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (producteName === item.names) {
//         console.log('find this product', producteName);

//         console.log(i);
//         console.log('asdw');
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {},
//   coutTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quatity } of items) {
//       total += price * quatity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };
// console.log(total);
// console.log(cart.getItems());

// cart.add({ name: 'one', prive: 40 });
// cart.add({ name: 'two', prive: 60 });
// cart.add({ name: 'three', prive: 70 });
// cart.add({ name: 'for', prive: 80 });

// console.log(cart.getItems());

// // callback
// const doMath = function (a, b, callback) {
//   // передачал аргументов
//   const result = callback(a, b);

//   console.log('result:', result);
// };

// const add = function (x, y) {
//   return x + y;
// };
// const newNum = function (x, y) {
//   return x * y;
// };

// // инлайн функции
// doMath(2, 5, function (x, y) {
//   return x + y;
// });
// doMath(12, 5, function (x, y) {
//   return x * y;
// });

// const buttonRef = document.querySelector('.js-button');

// const handButtonClick = function () {
//   console.log('Click on button' + Date.now);
// };

// buttonRef.addEventListener('click', handButtonClick);

// const onGetPossitinSusses = function (positin) {
//   console.log('тут onGetPossitinSusses');
//   console.log(positin);
// };
// const onGetPossitinError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPossitinSusses,
//   onGetPossitinError
// );

// const callback = function () {
//   console.log('after 3 sec in callback timeqout');
// };
// console.log('в коде перед таймаутом');

// setTimeout(callback, 2000);

// console.log('в коде после таймаутом');

// const onRequestSucsess = function (respone) {
//   console.log('Call onRequestSucsess after sucsess respone backand ');
//   console.log(respone);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())
//   .then(onRequestSucsess);

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     console.log(test(el));
//   }
//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value => 3;
// };

// const r1 = filter([1, 2, 3, 4, 5, 6, 7], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7], callback2);
// console.log(r2);

// const fruits = [
//   { name: 'apple', quantity: 200, isFresh: true },
//   { name: 'chree', quantity: 500, isFresh: false },
//   { name: 'lime', quantity: 300, isFresh: true },
// ];
// const getFruitWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitWithQuantity);
// console.log(r3);

// замыкание

// const fnA = function (parameter) {
//   const innerVariable = 'value fnA';

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log('call innerFunction');
//   };

//   return innerFunction;
// };

// const fnB = fnA(444);

// fnB();

// console.log('fnB:', fnB);

// const makeShef = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} catch ${dish}`);
//   };
//   return makeDish;
// };

// mango('apple');

// замыкание чисел
// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(5);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.1231));
// console.log(rounder3(3.12312));
// console.log(rounder2(3.1123231));
// console.log(rounder3(3.1231));
// console.log(rounder2(322.1231));
// console.log(rounder3(34.1231));
// console.log(rounder2(143.1212331));

// стрелочные функции

// const numbers = [5, 4, 8, 123, 1232, 3, 21];

// const numbersNew = numbers.map(function (number) {
//   console.log('number:', number);
//   return number * 2;
// });
// console.log('numbers:', numbers);
// console.log('numberNew:', numbersNew);

// const players = [
//   { id: 'player-1', name: 'mango', timePlayed: 110, points: 14, online: false },
//   { id: 'player-2', name: 'poly', timePlayed: 210, points: 24, online: true },
//   { id: 'player-3', name: 'jack', timePlayed: 310, points: 34, online: false },
//   { id: 'player-4', name: 'den', timePlayed: 410, points: 44, online: true },
//   { id: 'player-5', name: 'jon', timePlayed: 510, points: 54, online: false },
// ];
// const isAllOnline = players.every(player => player.oline);

// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline', isAnyOnline);

// const petya = [
//   {
//     name: 'petya',
//     age: 50,
//     heght: 150,
//   },
// ];
// // метод функции "second" с конетекстом this
// const names = {
//   firs: 'omon',
//   second() {
//     console.log('first', this);
//   },
// };

// names.second();

// const foo = function () {
//   console.log('foo -> this', this);
// };
// foo();

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this', this.tag);
// };
// showTag();

// const user = {
//   tag: 'mango',
// };
// user.showUserTag = showTag;
// console.log('user:', user);

// user.showUserTag();

// const counter = {
//   value: 0,
//   increment() {
//     console.log('increment -> this', this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log('decrement -> this', this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//   console.log('decrement -');

//   counter.document() | console.log(counter);
//   valueEl.textContent = counter.value;
// });
// incrementBtn.addEventListener('click', function () {
//   console.log('increment +');

//   counter.document() | console.log(counter);
//   valueEl.textContent = counter.value;
// });

// прототипное наследование
const CounterPlugin = function ({ initialvalue = 0, step = 1 } = {}) {
  this._value = initialvalue;
  this._step = step;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step = this._step;
};
CounterPlugin.prototype.decrement = function () {
  this._value -= this._step = this._step;
};
const counter = new CounterPlugin({ step: 100 });
console.log(counter);
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter);

class Berserc extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}
