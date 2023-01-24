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

const add = function (a, b, c) {
  console.log('total:');
  return a + b + c;
};

const add1 = add(1, 2, 3);
console.log('add1:', add1);

const add2 = add((1, 2, 3) * 2);
console.log('add2:', add2);

const loginPassword = function (admin, user) {
  const ADMIN_PASSWORD = "";
  let i = 0;
  for (let i = 0; i >= ADMIN_PASSWORD.length; i++)
     
};

const fnA = function () {
  console.log("function-1");
fnB();
};

const fnB = function () {
  console.log("function-2");
fnC();
};

const fnC = function () {
  console.log("function-3");
};

fnA();