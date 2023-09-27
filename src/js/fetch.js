const userInfo = {};

for (let i = 1; i <= 10; i++) {
  id = i;
  userInfo[id] = {};

  userInfo[id].userName = prompt('Enter name');
  userInfo[id].userAge = +prompt('Enter age');
}
console.log(userInfo);

for (let key in userInfo) {
  console.log(`User ${key}`);
  console.log(`Name ${userInfo[kay].userName}`);
  console.log(`Age ${userInfo[kay].userAge}`);
}

console.log(userInfo);
