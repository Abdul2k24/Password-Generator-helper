// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var UppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var LowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var NumbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var SpecialcharacterArray = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var returnArray = [];
  var inputArray = [];
  
  UppercaseArray [1]
  
    var numCharacter = prompt ("How many Characters do you want between 8 and 128?");
    var numbers = confirm (" Would you like numbers in your password?");
    var uppercases = confirm ("Would you like to include uppercases in your password?");
    var lowercases = confirm ("Would yoou like to include owercases in your password?");
    var Specialcharacters = confirm ("Would you like to include special characters in your password?");
  
  if (numbers)
  returnArray = returnArray.concat(NumbArray);
 
  if (uppercases){
    returnArray = returnArray.concat(UppercaseArray);
  
  }
  
  if (lowercases){
    returnArray = returnltArray.concat(LowercaseArray);
  
  }
  if (Specialcharacters){
    returnArray = returnArray.concat(SpecialcharacterArray);
  }
  console.log(resultArray) 
}

