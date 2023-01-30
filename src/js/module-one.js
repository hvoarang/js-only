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

// напиши функцию findPass(allPass, passFind) для поиска логина
//  если логина нет, вывести сообщение "пользователь `${passFind}` не найден"
//  если логин найден, вывести сообщение "пользователь `${passFind}` найден"

// 1.объявляем переменную с массивом паролей ['','']
const allPass = ['123@%!@##%%%11', '12!@!@#f11', '1rf13f4@33r'];
// 2.объяляем функцию с аргументами (массив паролей, пароль найден)
const findPass = function (allPass, passFind) {
  // 3.через for...of перебираем итерируемые объекты
  for (const pass of allPass) {
    // 4.булевая проверка
    if (pass === passFind) {
      // 5.возвращаем проверку из функции
      return `find ${passFind}`;
    }
  }
  // 6.возврат если проверка не прошла
  return `not find ${passFind}`;
};
// 7.объявляем лог внутри которого(имя функции(имя массива, "один элемент массива"))
console.log(findPass(allPass, '12cvbcvbf11'));
console.log(findPass(allPass, '12!@!@#f11'));
console.log(findPass(allPass, '123@%!@##%%%11'));
