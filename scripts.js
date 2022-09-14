//global and query stuf ------------------------->

var hexArray = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']  //does this need to be inside Color class?

var currentPalette
var randomHex

var colorDisplay = document.querySelector('.color-display')
var colorBox = document.querySelectorAll('.color-box')

//event listeners -------------------->
window.addEventListener('load', displayRandomPalette)
// on page load, create new instance of Palette

// window.addEventListener('click', function () {
//   currentPalette.lockColor();
// });
// ^^^^replace window with new variable and uncomment


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

class Palette {
  constructor() {
    this.color1 = new Color(makeRandomHex())
    this.color2 = new Color(makeRandomHex())
    this.color3 = new Color(makeRandomHex())
    this.color4 = new Color(makeRandomHex())
    this.color5 = new Color(makeRandomHex())
    this.ID = Date.now()
  }
  lockColor() {
    var targetColorID = event.target.id
    var paletteKeys = Object.keys(this)
    // console.log(Object.keys(this));
    // console.log(paletteKeys[0]);
    // console.log(this["color1"]);
    // console.log(this.color1);
    // console.log(this["box1"].locked);
    // console.log(targetColorID);
    for (var i = 0; i < paletteKeys.length-1; i++) {
      if (targetColorID === paletteKeys[i]) {
        // console.log(targetColorID === paletteKeys[i]);
        // console.log(i);
        // console.log(targetColorID);
        // console.log(paletteKeys[i]);
        // console.log(this[paletteKeys[i]].locked);
        this[paletteKeys[i]].locked = true;
      }
    }
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

function displayRandomPalette() {
  currentPalette = new Palette()
  var colors = Object.keys(currentPalette)

  colorDisplay.innerHTML = ''
   for (var i = 0; i < 5; i++) {
    console.log(currentPalette[colors[i]].hexCode)
    colorDisplay.innerHTML += `
    <div class="color-hex-lock" id="section${i + 1}">
    <section class="color-box" id="${colors[i]}"></section>
    <div class="hex-lock">
      <p class="hex-value" id="hex${i+1}">${currentPalette[colors[i]].hexCode}</p>
      <button class="lock-button" id="unlock${i+1}">🔓</button>
    </div>
    </div>
    ` 
  }



}