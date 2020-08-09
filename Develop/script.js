
var generateBtn = document.querySelector("#generate");
//possible content arrays I can make each letter/number into a unit
generateBtn.addEventListener("click", writePassword);
//WHEN I click the button to generate a password

// Assignment Code
var caseUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var caseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caseNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


var symbolLetters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-"];
var password;
var passLength;
var lengthPass = [];
var PWChoice = [];
// Write password to the #password input
// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  
  passLength = (prompt("how long you want the password between 8 and 128"));
  if ((passLength => 8 && passLength <=128)) {
  }
  else {alert("must color between the lines")
return};



upperCase = confirm("do you want upper case? yes or no");
if (upperCase === true) {
  PWChoice = PWChoice + caseUpper
}
else {PWChoice = PWChoice}


lowerCase = confirm("do you want lower case? yes or no");
if (lowerCase === true) {
  PWChoice = PWChoice + caseLower
}
else {
  PWChoice = PWChoice
};


numCase = confirm("do you want numbers? yes or no");
if (numCase === true) {
  PWChoice = PWChoice + caseNum
}
else {
  PWChoice = PWChoice
};


var symbolCase = confirm("do you want symbols? yes or no");
if (symbolCase === true) {
  PWChoice = PWChoice + symbolCase
}
else {PWChoice + PWChoice}




// Add event listener to generate button



  var password = ""
  for (var i = 1; i <= lengthPass; i++) {
    var RNGen = PWChoice[Math.floor(Math.random() * PWChoice.length)]
    password = RNGen + password;
  }
  return password;
  
}
