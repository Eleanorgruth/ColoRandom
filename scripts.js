var hexArray = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']  //does this need to be inside Color class?

var currentPalette


//event listeners
// on page load, create new instance of Palette

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

class Palette { //WIP - not sure right direction
  constructor(newColor) {
    this.color1 = new Color()
    this.color2 = new Color()
    this.color3 = new Color()
    this.color4 = new Color()
    this.color5 = new Color()
    this.ID = Date.now()
  }
  addColorToPalette() {
    this.color1.makeRandomHex();
    this.color2.makeRandomHex();
    this.color3.makeRandomHex();
    this.color4.makeRandomHex();
    this.color5.makeRandomHex();
  }
  lockColor1(colorNumber) {
    colorNumber.locked = true
  }


}
