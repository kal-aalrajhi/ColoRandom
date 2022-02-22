var hexCharacters =[
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "A", "B", "C", "D", "E", "F"
]

var currentHex = "";

function makeNewHex() {
  var hexCode = "#";
  for(i = 0; i < 6; i++){
    hexCode += hexCharacters[getRandomIndex(hexCharacters)];
  }
  currentHex = hexCode;
}
makeNewHex()

console.log(currentHex)

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
};
