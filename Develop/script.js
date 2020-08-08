
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
  var  passLength 
  var  upperCase
  var lowerCase
  var numCase
  var symbolCase

    //when we click the button it it should
    //prompt for how long of password
    var passLength = prompt("how long you want the password between 8 and 128")
    //if i want ...
    // upper case
    var upperCase = prompt("do you want upper case? yes or no")
    function getRandomUpper{
      return String.fromCharCode(Math.floor(Math.random()* 26)+97)
    }
    //lower case
    var lowerCase = prompt("do you want lower case? yes or no")
    //this function is for the random number for lower case without use of var lowercase letters
    function getRandomLower(){
      return String.fromCharCode(Math.floor(Math.random()*26)+97)
    }
    //numbers
    var numCase = prompt("do you want numbers? yes or no")
    function getRandomNumber{
      return String.fromCharCode(Math.floor(Math.random()* 10)+48)
    }
    //symbols
    var symbolCase = prompt("do you want symbols? yes or no")
    //then it will use the length of password to fill in with the cases i used
    passwordText.value = password;
}

//prompts set up
generateBtn.addEventListener("click", writePassword);