
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

    //when we click the button it it should
    //prompt for how long of password
    prompt("how long you want the password between 8 and 128")
    //if i want ...
    // upper case
    prompt("do you want upper case? yes or no")
    //lower case
    prompt("do you want lower case? yes or no")
    //numbers
    prompt("do you want numbers? yes or no")
    //symbols
    prompt("do you want symbols? yes or no")
    //then it will use the length of password to fill in with the cases i used


//prompts set up
generateBtn.addEventListener("click", writePassword);