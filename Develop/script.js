// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {


  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialcharacterArray = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var returnArray = [];
  var inputArray = [];
  
  uppercaseArray [1]
  
    var numCharacter = prompt ("How many Characters do you want between 8 and 128?");
    var numbers = confirm (" Would you like numbers in your password?");
    var uppercases = confirm ("Would you like to include uppercases in your password?");
    var lowercases = confirm ("Would yoou like to include owercases in your password?");
    var specialcharacters = confirm ("Would you like to include special characters in your password?");
  
  if (numbers)
  returnArray = returnArray.concat(numbArray);
 
  if (uppercases){
    returnArray = returnArray.concat(uppercaseArray);
  
  }
  
  if (lowercases){
    returnArray = returnArray.concat(lowercaseArray);
  
  }
  if (Specialcharacters){
    returnArray = returnArray.concat(specialcharacterArray);
  }
  console.log(resultArray) 

  for (var i = 0; i< numCharacter; i++) {

    inputArray.push (returnArray[Math.floor(Math.random() * returnArray.length)]);
  }

  return inputArray.join("") ;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
