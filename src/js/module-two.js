const playList = {
  name: 'mine track',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
  trackCount: 3,
  changeName(newName) {
    console.log('this input NewName', this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTackCount() {
    return this.tracks.length;
  },
};

console.log(playList.getTackCount());

playList.changeName('new name');

playList.addTrack('track-5');
console.log(playList.getTackCount());

playList.addTrack('track-6');
console.log(playList.getTackCount());

playList.updateRating(6);

console.log(playList);

// получаем массив ключей
const feedback = {
  good: 4,
  netural: 10,
  bad: 2,
};
let totalFeedback = 0;
// массив ключей
const keys = Object.keys(feedback);
console.log(keys);
for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedback += feedback[key];
}
console.log('totalFeedback:', totalFeedback);

// перебор значений
const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

const friends = [
  { name: 'Aana', online: false },
  { name: 'Bana', online: true },
  { name: 'Cana', online: false },
  { name: 'Dana', online: true },
  { name: 'Eana', online: true },
];

console.table(friends);

// for (const friend of friends) {
// }

// const findFriendByname = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === name) {
//       return 'find!';
//     }
//   }
//   return 'not found!';
// };

// console.log(findFriendByname(friends, 'Aana'));

// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }
//   console.log(names);
// };

// console.log(getAllNames(friends));

// const genOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     // console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//       console.log(`${friend} В Сети!`);
//     }
//     if (!friend.online) {
//       console.log(`${friend} Не в сети!`);
//     }
//   }
// };
// console.log(genOnlineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    const key = friend.onlin ? 'online' : 'offline';
    friendsByStatus[key].push(friend);
  }
  return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));

const x = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(Object.keys(x).length);
