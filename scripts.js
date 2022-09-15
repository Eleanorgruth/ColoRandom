//global and query stuf ------------------------->

var hexArray = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']  //does this need to be inside Color class?

var currentPalette
//this is our data model
var randomHex
var savedPalettes = []

var colorDisplay = document.querySelector('.color-display')
var colorBox = document.querySelectorAll('.color-box')
var newPaletteButton = document.querySelector('#new-palette')
var savePaletteButton =  document.querySelector('#save-palette')
var savedPaletteSection = document.querySelector('.saved-palette-display')
// var lockButtons = document.querySelectorAll('.lock-button')

//event listeners -------------------->
window.addEventListener('load', displayRandomPalette)
// on page load, create new instance of Palette
newPaletteButton.addEventListener('click', function() {
  newColorSet(currentPalette)
})

savePaletteButton.addEventListener('click', displaySavedPalette)
colorDisplay.addEventListener('click', function () {
  currentPalette.lockColor();
});
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
    var lockButtons = document.querySelectorAll('.lock-button')  //still does not make sense to us
    // console.log(Object.keys(this));
    // console.log(paletteKeys[0]);
    // console.log(this["color1"]);
    // console.log(this.color1);
    // console.log(this["box1"].locked);
    // console.log(event.target);
    for (var i = 0; i < paletteKeys.length-1; i++) {
      if (targetColorID === paletteKeys[i]) {
        // console.log(targetColorID === paletteKeys[i]);
        // console.log(i);
        // console.log(targetColorID);
        // console.log(paletteKeys[i]);
        // console.log(this[paletteKeys[i]].locked);
        this[paletteKeys[i]].locked = true;
        lockButtons[i].innerText = '🔐'
      }

    }
  }
  //
  // addNewColors() {
  //   if (this.color1.locked === false) {
  //     this.color1 = new Color(makeRandomHex())
  //   }
  //   if (this.color2.locked === false) {
  //     this.color2 = new Color(makeRandomHex())
  //   }
  //   if (this.color3.locked === false) {
  //     this.color3 = new Color(makeRandomHex())
  //   }
  //   if (this.color4.locked === false) {
  //     this.color4 = new Color(makeRandomHex())
  //   }
  //   if (this.color5.locked === false) {
  //     this.color5 = new Color(makeRandomHex())
  //   }
  // }

}

function displayRandomPalette() {
  currentPalette = new Palette()
  var colors = Object.keys(currentPalette)

  colorDisplay.innerHTML = ''
   for (var i = 0; i < 5; i++) {
    // console.log(currentPalette[colors[i]].hexCode)
    colorDisplay.innerHTML += `
    <div class="color-hex-lock" id="section${i + 1}">
    <section class="color-box ${colors[i]}" style="background:${currentPalette[colors[i]].hexCode}" id="${colors[i]}"></section>
    <div class="hex-lock">
      <p class="hex-value" id="hex${i+1}">${currentPalette[colors[i]].hexCode}</p>
      <button class="lock-button" id="unlock${i+1}">🔓</button>
    </div>
    </div>
    `
    // colorBox[i].styles.backgroundColor = `${currentPalette[colors[i]].hexCode}`
    // console.log(colorBox[i].style.backgroundColor)
    // console.log(`${currentPalette[colors[i]].hexCode}`)
    // console.log(`before: ${colorBox[i].id.background}`)
    // colorBox[i].id.background = `${currentPalette[colors[i]].hexCode}`
    // console.log(colorBox[i].id.background)

  }
}

function newColorSet(currentPalette) {

  if (currentPalette.color1.locked === false){
  currentPalette.color1 = new Color(makeRandomHex())
  }
  if (currentPalette.color2.locked === false) {
  currentPalette.color2 = new Color(makeRandomHex())
  }
  if (currentPalette.color3.locked === false) {
  currentPalette.color3 = new Color(makeRandomHex())
  }
  if (currentPalette.color4.locked === false) {
  currentPalette.color4 = new Color(makeRandomHex())
  }
  if (currentPalette.color5.locked === false) {
  currentPalette.color5 = new Color(makeRandomHex())
  }

  var colors = Object.keys(currentPalette)

  colorDisplay.innerHTML = ''
   for (var i = 0; i < 5; i++) {
    // console.log(currentPalette[colors[i]].hexCode)
    colorDisplay.innerHTML += `
    <div class="color-hex-lock" id="section${i + 1}">
    <section class="color-box ${colors[i]}" style="background:${currentPalette[colors[i]].hexCode}" id="${colors[i]}"></section>
    <div class="hex-lock">
      <p class="hex-value" id="hex${i+1}">${currentPalette[colors[i]].hexCode}</p>
      <button class="lock-button" id="unlock${i+1}">🔓</button>
    </div>
    </div>
    `
}
}

function displaySavedPalette() {
  savedPalettes.push(currentPalette)
  savedPaletteSection.innerHTML = ""
  for (var i = 0; i < savedPalettes.length; i++) {
  savedPaletteSection.innerHTML +=
  `<div class="palette-group">
  <section class="color-box mini-palette" style="background:${savedPalettes[i].color1.hexCode}"></section>
  <section class="color-box mini-palette" style="background:${savedPalettes[i].color2.hexCode}"></section>
  <section class="color-box mini-palette" style="background:${savedPalettes[i].color3.hexCode}"></section>
  <section class="color-box mini-palette" style="background:${savedPalettes[i].color4.hexCode}"></section>
  <section class="color-box mini-palette" style="background:${savedPalettes[i].color5.hexCode}"></section>
  <button class="delete-button lock-button mini-palette">🗑</button>
  </div>`
}

displayRandomPalette()
}


//when user clicks the savedPalette button, there are duplicates - revisit

    // `<section class="color-box ${colors[i]} mini-palette" style="background:${currentPalette[colors[i]].hexCode}"></section>

//if a user clicks savePaletteButton, we want the palette to add mini palette
// to its class list. THEN display to savedPaletteSection
