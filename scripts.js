var hexArray = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']  //does this need to be inside Color class?

var currentPalette
var randomHex

//event listeners
// on page load, create new instance of Palette

function makeRandomNumber(array) {
  return Math.floor(Math.random() * hexArray.length);
}

function makeRandomHex() {
  var randomHex = ['#'];
  for (var i = 0; i < 6; i++) {
    randomHex.push(hexArray[makeRandomNumber(hexArray)]);
  }
  return randomHex.join('')
}

class Color {
  constructor(hexFunction) {
    this.locked = false;
    this.hexCode = hexFunction;
  }
  // makeRandomHex() {
  //   var randomHex = ['#'];
  //   for (var i = 0; i < 6; i++) {
  //     randomHex.push(hexArray[makeRandomNumber(hexArray)]);
  //     this.hexCode = randomHex.join('');
  //   }
  // }
}

class Palette { //WIP - not sure right direction
  constructor() {
    this.color1 = new Color(makeRandomHex())
    this.color2 = new Color(makeRandomHex())
    this.color3 = new Color(makeRandomHex())
    this.color4 = new Color(makeRandomHex())
    this.color5 = new Color(makeRandomHex())
    this.ID = Date.now()
  }
  lockColor(event) {
    var paletteKeys = Object.keys(this)
    console.log(paletteKeys);
    console.log(this["color1"]);
    console.log(this["color1"].locked);
    // for (var i = 0; i < paletteKeys.length-1; i++) {
    //   if (event.target.id === paletteKeys[i]) {
    //     this[paletteKeys[i].locked] = true;
    //   }
    // }
    // ^^^ incomplete - still need the event target on 'click' event to access the ID of the node to match to the color key, may need HTML update
  }
  addHexToColors() {
    this.color1.makeRandomHex();
    this.color2.makeRandomHex();
    this.color3.makeRandomHex();
    this.color4.makeRandomHex();
    this.color5.makeRandomHex();
  }
  addNewColors() {
    if (this.color1.locked === false) {
      this.color1 = new Color(makeRandomHex())
    }
    if (this.color2.locked === false) {
      this.color2 = new Color(makeRandomHex())
    }
    if (this.color3.locked === false) {
      this.color3 = new Color(makeRandomHex())
    }
    if (this.color4.locked === false) {
      this.color4 = new Color(makeRandomHex())
    }
    if (this.color5.locked === false) {
      this.color5 = new Color(makeRandomHex())
    }
  }

}
