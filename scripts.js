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
    for (var i = 0; i < paletteKeys.length-1; i++) {
      if (targetColorID === paletteKeys[i] && this[paletteKeys[i]].locked === false) {
        this[paletteKeys[i]].locked = true;
        lockButtons[i].innerText = '🔐'
      } else if (targetColorID === paletteKeys[i] && this[paletteKeys[i]].locked === true) {
        this[paletteKeys[i]].locked = false;
        lockButtons[i].innerText = '🔓'
      }

    }
  }

}

function displayRandomPalette() {
  currentPalette = new Palette()
  var colors = Object.keys(currentPalette)

  colorDisplay.innerHTML = ''
   for (var i = 0; i < 5; i++) {
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
