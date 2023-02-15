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

const defoultSettings = {
  theme: 'light',
  showNotification: 'true',
  hideSideBar: 'false',
};
const userSettings = {
  showNotification: 'false',
  hideSideBar: 'true',
};
const finalSettings = {
  ...defoultSettings,
  ...userSettings,
};

console.log('finalSettings:', finalSettings);
