
var generateBtn = document.querySelector("#generate");
//possible content arrays I can make each letter/number into a unit
generateBtn.addEventListener("click", writePassword);
//WHEN I click the button to generate a password
// Assignment Code
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var numerLetters = "1234567890"
var symbolLetters = "!@#$%^&*(){}"
var userInput = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}


  function lengthSize(){
    
  }

//prompts set up
generateBtn.addEventListener("click", writePassword);