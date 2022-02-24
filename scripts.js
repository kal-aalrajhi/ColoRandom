// Global Variables
var hexCharacters =[
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "A", "B", "C", "D", "E", "F"
];
var savedPalettes = []

var currentPalette = new Palette();

var buttonNewPalette = document.querySelector('#new-palette-button');
var buttonSavePalette = document.querySelector('#save-palette-button')
var displayPalette = document.querySelector('.current-palette');


// Event Listeners
window.addEventListener('load', makeNewPalette);
buttonNewPalette.addEventListener('click', makeNewPalette);
displayPalette.addEventListener('click', function(){
  lockColor(event);
});
buttonSavePalette.addEventListener('click', savePalette)
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
  displayCurrentPalette();
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

function displayCurrentPalette() {
  for (var i = 0; i < 5; i++) {
    var currentHex = currentPalette[`color${i + 1}`].hexCode;
    var currentBox = document.querySelector(`#box${i + 1}`);
    currentBox.style.backgroundColor = currentHex;
    var currentCode = document.querySelectorAll(`p`);
    currentCode[i].innerText = currentHex;
  }
}

function savePalette() {
  tempPalette = new Palette(
    currentPalette.color1,
    currentPalette.color2,
    currentPalette.color3,
    currentPalette.color4,
    currentPalette.color5
    );
  savedPalettes.push(tempPalette)
  displayMiniPalette();

  //   if(!savedPalettes.includes(tempPalette)){
  //     savedPalettes.push(tempPalette)
  //  }
}

var savedPalettesSection = document.querySelector('.saved-palettes');
function displayMiniPalette() {
  var miniPalette = document.createElement("div");
  miniPalette.classList.add("mini-palette");
  savedPalettesSection.appendChild(miniPalette);

  for(var i = 0; i < 5; i++) {
    var miniBox = document.createElement("div");
    miniBox.classList.add("mini-box");
    miniPalette.appendChild(miniBox);
  }
  var trashIcon = document.createElement("img");
  trashIcon.src = 'assets/delete_icon.png';
  miniPalette.appendChild(trashIcon);
}

// function displayMiniPalette() {
//   var miniDiv = document.createElement("div");
//   miniDivsSection.appendChild(miniDiv);

//   for (var i = 0; i < 5; i++) {
//     var miniColor = document.createElement("div");
//     miniColor.classList.add("mini-box");
//     miniDiv.appendChild(miniColor);
//   }
// }



// var miniDiv = document.createElement("div");
// var miniColor = document.createElement("div");
// miniColor.classList.add("mini-box");
// savedPalettesSection.appendChild(miniDiv).appendChild(miniColor);

// displayMiniPalette();

