function Ship(len) {
  const ship = {
    lenght: len,
    hits: 0,
    isSunk: false,
    cord: [],

    hit() {
      this.hits++;
      if (this.hits === this.lenght) {
        this.isSunk = true;
      }
    },
  };
  return ship;
}
module.exports = Ship;
