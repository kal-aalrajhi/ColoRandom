// Global Variables
var currentPalette = new Palette();
var hexCharacters =[
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "A", "B", "C", "D", "E", "F"
];
var savedPalettes = [];

var buttonNewPalette = document.querySelector('#new-palette-button');
var buttonSavePalette = document.querySelector('#save-palette-button');
var displayPalette = document.querySelector('.current-palette');
var iconLock = document.querySelectorAll('.lock');
var iconTrash = document.querySelectorAll('.trash');
var savedPalettesSection = document.querySelector('.saved-palettes');

// Event Listeners
buttonNewPalette.addEventListener('click', makeNewPalette);
buttonSavePalette.addEventListener('click', savePalette);
displayPalette.addEventListener('click', function(event){
  lockColor(event);
});
savedPalettesSection.addEventListener('click', function(event) {
  deletePalette(event);
});
window.addEventListener('load', makeNewPalette);

// Functions
function deletePalette(event) {
  var trashId = event.target.id;
  for (var i = 0; i < savedPalettes.length; i++) {
    if(savedPalettes[i].id.toString() === trashId) {
      savedPalettes.splice(i, 1);
    }
  }
  refreshSavedPalettes();
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

function displayMiniPalette(idx) {
  var miniPalette = document.createElement("div");
  miniPalette.classList.add("mini-palette");
  savedPalettesSection.appendChild(miniPalette);

  for(var i = 1; i <= 5; i++) {
    var miniBox = document.createElement("div");
    miniBox.classList.add("mini-box");
    miniBox.style.backgroundColor = savedPalettes[idx][`color${i}`].hexCode;
    miniPalette.appendChild(miniBox);
  }

  var trashIcon = document.createElement("img");
  trashIcon.classList.add("trash");
  trashIcon.id = savedPalettes[idx].id;
  trashIcon.src = 'assets/delete_icon.png';
  miniPalette.appendChild(trashIcon);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function lockColor(event) {
  var colorId = event.target.id;
  for (var i = 0; i < 5; i++) {
    if (colorId === `box${i + 1}` && !currentPalette[`color${i+1}`].locked) {
      currentPalette[`color${i+1}`].locked = true;
      iconLock[i].src = './assets/lock-locked.svg';
    } else if (colorId === `box${i + 1}` && currentPalette[`color${i+1}`].locked){
      currentPalette[`color${i+1}`].locked = false;
      iconLock[i].src = './assets/lock-unlocked.svg';
    }
  }
}

function makeNewHex() {
  var hexCode = "#";
  for (var i = 0; i < 6; i++) {
    hexCode += hexCharacters[getRandomIndex(hexCharacters)];
  }
  return new Color(hexCode);
}

function makeNewPalette() {
  for (var i = 1; i <= 5; i++) {
    if (!currentPalette[`color${i}`].locked) {
      currentPalette[`color${i}`] = makeNewHex();
    }
  }
  displayCurrentPalette();
}

function refreshSavedPalettes() {
  savedPalettesSection.innerHTML = "<h2>saved palettes</h2>";
  for (var i = 0; i < savedPalettes.length; i++) {
    displayMiniPalette(i);
  }
}

function savePalette() {
  tempPalette = new Palette(
    currentPalette.color1,
    currentPalette.color2,
    currentPalette.color3,
    currentPalette.color4,
    currentPalette.color5,
  );
  savedPalettes.push(tempPalette);
  displayMiniPalette(savedPalettes.length - 1);
  makeNewPalette();
}
