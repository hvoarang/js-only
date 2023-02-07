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
