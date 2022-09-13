var hexArray = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']  //does this need to be inside Color class?

function makeRandomNumber(array) {
  return Math.floor(Math.random() * hexArray.length);
}

class Color {
  constructor() {
    this.locked = false;
    this.hexCode = '';
  }
  makeRandomHex() {
    var randomHex = ['#'];
    for (var i = 0; i < 6; i++) {
      randomHex.push(hexArray[makeRandomNumber(hexArray)]);
      this.hexCode = randomHex.join('');
    }
  }

}

class Palette {
  constructor() {

  }
}
