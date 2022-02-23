// Global Variables
var hexCharacters =[
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "A", "B", "C", "D", "E", "F"
]
var currentPalette = new Palette();
var buttonNewPalette = document.querySelector('#new-palette-button');
var displayPalette = document.querySelector('.current-palette');

// Event Listeners
window.addEventListener('load', makeNewPalette);
buttonNewPalette.addEventListener('click', makeNewPalette);
displayPalette.addEventListener('click', function(){
  lockColor(event);
});

// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeNewHex() {
  var hexCode = "#";
  for (var i = 0; i < 6; i++) {
    hexCode += hexCharacters[getRandomIndex(hexCharacters)];
  }
   return new Color(hexCode);
}

function makeNewPalette() {
  for (var i = 0; i < 5; i++) {
    if (!currentPalette[`color${i + 1}`].locked) {
      currentPalette[`color${i + 1}`] = makeNewHex();
    }
  }
  console.log(currentPalette);
}

function lockColor(event) {
  var colorId = event.target.id;
  for (var i = 0; i < 5; i++) {
    if (colorId === `box${i + 1}`) {
      currentPalette[`color${i+1}`].locked = true;
    }
  }
  // console.log(colorId);
}