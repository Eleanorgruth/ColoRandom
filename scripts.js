var currentPalette;
var savedPalettes = [];

var colorDisplay = document.querySelector('.main-color-display')
var colorBox = document.querySelectorAll('.color-box')
var newPaletteButton = document.querySelector('#new-palette')
var savePaletteButton =  document.querySelector('#save-palette')
var savedPaletteDisplay = document.querySelector('.saved-palette-display')


window.addEventListener('load', displayRandomPalette)
newPaletteButton.addEventListener('click', function() {
  newColorSet(currentPalette)
})
savePaletteButton.addEventListener('click', displaySavedPalette)
colorDisplay.addEventListener('click', function () {
  currentPalette.lockColor()
})
savedPaletteDisplay.addEventListener('click', deleteSavedPalette)

function makeRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomHex() {
  var hexArray = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var randomHex = ['#'];
  for (var i = 0; i < 6; i++) {
    randomHex.push(hexArray[makeRandomNumber(hexArray)]);
  } return randomHex.join('')
}

class Color {
  constructor(hexFunction) {
    this.locked = false;
    this.hexCode = hexFunction;
    this.lockSymbol = '🔓'
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
    for (var i = 0; i < 5; i++) {
      if (targetColorID === paletteKeys[i] && !this[paletteKeys[i]].locked) {
        this[paletteKeys[i]].locked = true
        this[paletteKeys[i]].lockSymbol = '🔐'
      } else if (targetColorID === paletteKeys[i] && this[paletteKeys[i]].locked) {
        this[paletteKeys[i]].locked = false
        this[paletteKeys[i]].lockSymbol = '🔓'
      }
    }
    colorDisplay.innerHTML = ''
    var colors = Object.keys(this)
    for (var i = 0; i < 5; i++) {
     colorDisplay.innerHTML +=
     `<div class="color-hex-lock" id="section${i + 1}">
     <section class="color-box ${colors[i]}" style="background:${this[colors[i]].hexCode}" id="${colors[i]}"></section>
     <div class="hex-lock">
       <p class="hex-value" id="hex${i+1}">${this[colors[i]].hexCode}</p>
       <p class="lock-status" id="unlock${i+1}">${this[colors[i]].lockSymbol}</p>
     </div>
     </div>`
   }
  }
}

function displayRandomPalette() {
  currentPalette = new Palette()
  var colors = Object.keys(currentPalette)
  colorDisplay.innerHTML = ''
  for (var i = 0; i < 5; i++) {
    colorDisplay.innerHTML +=
    `<div class="color-hex-lock" id="section${i + 1}">
      <section class="color-box ${colors[i]}" style="background:${currentPalette[colors[i]].hexCode}" id="${colors[i]}"></section>
      <div class="hex-lock">
        <p class="hex-value" id="hex${i+1}">${currentPalette[colors[i]].hexCode}</p>
        <p class="lock-status" id="unlock${i+1}">${currentPalette[colors[i]].lockSymbol}</p>
      </div>
    </div>`
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
    colorDisplay.innerHTML +=
    `<div class="color-hex-lock" id="section${i + 1}">
      <section class="color-box ${colors[i]}" style="background:${currentPalette[colors[i]].hexCode}" id="${colors[i]}"></section>
      <div class="hex-lock">
        <p class="hex-value" id="hex${i+1}">${currentPalette[colors[i]].hexCode}</p>
        <p class="lock-status" id="unlock${i+1}">${currentPalette[colors[i]].lockSymbol}</p>
      </div>
    </div>`
  }
}

function displaySavedPalette() {
  savedPalettes.push(currentPalette)
  savedPaletteDisplay.innerHTML = ""
  for (var i = 0; i < savedPalettes.length; i++) {
    savedPaletteDisplay.innerHTML +=
      `<div class="palette-group" id="${savedPalettes[i].ID}">
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color1.hexCode}"></section>
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color2.hexCode}"></section>
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color3.hexCode}"></section>
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color4.hexCode}"></section>
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color5.hexCode}"></section>
        <button class="delete-button mini-palette" id="deleteButton">🗑</button>
      </div>`
  }
  displayRandomPalette()
}

function deleteSavedPalette(event) {
  var targetDeleteID = event.target.id
  var targetDeleteParent = event.target.parentElement
  for (var i = 0; i < savedPalettes.length; i++) {
    if (targetDeleteID === "deleteButton" && savedPalettes[i].ID.toString() === targetDeleteParent.id) {
      savedPalettes.splice(i, 1)
    }
  }
  savedPaletteDisplay.innerHTML = ""
  for (var i = 0; i < savedPalettes.length; i++) {
    savedPaletteDisplay.innerHTML +=
      `<div class="palette-group" id="${savedPalettes[i].ID}">
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color1.hexCode}"></section>
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color2.hexCode}"></section>
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color3.hexCode}"></section>
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color4.hexCode}"></section>
        <section class="color-box mini-palette" style="background:${savedPalettes[i].color5.hexCode}"></section>
        <button class="delete-button mini-palette" id="deleteButton">🗑</button>
      </div>`
  }
}
