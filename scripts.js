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
  constructor(color1, color2, color3, color4, color5) {
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.color4 = color4;
    this.color5 = color5;
    this.ID = '';
  }
}


// potential function, still writing out Palette class
// function makeNewPalette()
//   var color1 = new Color;
//   color1.makeRandomHex()
//
//   currentPalette = new Palette(color1, )
}
