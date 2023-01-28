// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Манго');

// function calcNum(price) {
//   const numValue = Math.rondom() > 0.5;

//   if (!numValue) {
//     console.log(`what num${price} wait!`);
//   } else {
//     console.log(`Num is${price}`);
//   }
// }
// calcNum('price');

// const add = function (a, b, c) {
//   console.log('total:');
//   return a + b + c;
// };

// const add1 = add(1, 2, 3);
// console.log('add1:', add1);

// const add2 = add((1, 2, 3) * 2);
// console.log('add2:', add2);

// const loginPassword = function (admin, user) {
//   const ADMIN_PASSWORD = "";
//   let i = 0;
//   for (let i = 0; i >= ADMIN_PASSWORD.length; i++)

// };

// // стек вызовов функций

// const fnA = function () {
//   console.log('Total one:');
//   return fnB();
// };
// const fnB = function () {
//   console.log('Total two:');
//   return fnC();
// };
// const fnC = function () {
//   console.log('Total three:');
// };
// fnA();

//  сложение массива
// const totalPrice = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// const t1 = totalPrice([21, 34, 123]);
// const t2 = totalPrice([12, 12, 1223]);
// const t3 = totalPrice([15, 23, 123]);

// console.log('t1:', t1);
// console.log('t2:', t2);
// console.log('t3:', t3);

// функция "name" для перебора и логирования

// const logItems = function (items) {
//   let total = 0;
//   for (const item of items) {
//     console.log(items);
//   }
// };

// logItems(['one', 'two', 'three']);
// logItems([4, 5, 6]);
// logItems(['seven', 'eght', 'nine']);

// напиши функцию findLogin(allLogins, login) для поиска логина
//  если логина нет, вывести сообщение "пользователь `${login}` не найден"
//  если логин найден, вывести сообщение "пользователь `${login}` найден"

// const logins = ['123f1f', '12f23f2', 'f132134', '1324f1f3', '12f1f34f'];
// const findLogin = '12f1f34f';

// const message = logins.includes(findLogin)
//   ? `Найден ${findLogin}`
//   : `не найден ${findLogin}`;

// console.log(message);

// const findToLogin = function (allLogins, findLogin) {
//   console.log(allLogins);
// };

// console.log(findToLogin(logins, '123f1f'));
// console.log(findToLogin(logins, '12f23f2'));
// console.log(findToLogin(logins, 'f132134'));
// console.log(findToLogin(logins, '1324f1f3'));
// console.log(findToLogin(logins, '12f1f34f'));

// набор паролей
const logins = ['21f1f412421', '21f112321', '21f12321', '21f1f3f1'];
const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `pass  ${loginToFind} access`;
    }
  }
  return `pass ${loginToFind} denied`;
};
// логируем массив в "()" указываем 2 параметра
console.log(findLogin(logins, '21f1f4212421'));
console.log(findLogin(logins, '21f112321'));
console.log(findLogin(logins, '21f12321'));
console.log(findLogin(logins, '21f1f3f1'));
