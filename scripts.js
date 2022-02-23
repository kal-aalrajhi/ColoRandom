// Global Variables
var hexCharacters =[
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "A", "B", "C", "D", "E", "F"
]

var currentPalette;

// Event Listeners
window.addEventListener('load', makeNewPalette);

// Functions
function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
}

function makeNewHex() {
  var hexCode = "#";
  for(var i = 0; i < 6; i++){
    hexCode += hexCharacters[getRandomIndex(hexCharacters)];
  }
   return new Color(hexCode);
}

function makeNewPalette(){
  currentPalette = new Palette();
  for(var i = 0; i < 5; i++){
    currentPalette[`color${i + 1}`] = makeNewHex();
  }
}
