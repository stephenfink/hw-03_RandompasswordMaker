
var generateBtn = document.querySelector("#generate");
//possible content arrays I can make each letter/number into a unit
var passNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var passUCase = ["A", "B", "C", "D","E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X" , "Y", "Z"]
var passLCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var passSCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ">", "<","/", "{", "}"]
var userInput = []
var passULNS = [passUCase + passLCase + passNum + passSCase]
var passULN = [passUCase + passLCase + passNum]
var passULS = [passUCase + passLCase + passSCase]
var passUL = [passUCase + passLCase]
var passUN = [passUCase + passNum]
var passUS = [passUCase + passSCase]
var passLNS = [passLCase + passNum + passSCase]
var passLS = [passLCase + passSCase]
var passLN = [passLCase + passNum]
var passNS = [passNum + passSCase]


//WHEN I click the button to generate a password
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompts set up

var lengthPass = prompt("How long of password between 8 and 128 characters")
  if(lengthPass.value => 8){
    lengthPass = passLength //then it should go to next prompt
  }  
  if else (lengthPass.value <= 128){
    lengthPass = passLength
  } //then it should go to next prompt
  else {
    alert("Must select between 8-128")
  }  
var upperCase = prompt("Uppercase? yes or no")
  if(upperCase = yes){
    //adds the U part of the var list to the RNG
  }
  else {
    //does not add the U part of the var list
  }
var lowerCase = prompt("Uppercase? yes or no")
  if(lowerCase = yes){
    //adds the L part of the var list to the RNG
  }
  else {
    //does not add the L part of the var list
  }
var numCase = prompt("Uppercase? yes or no")
  if(numCase = yes){
    //adds the N part of the var list to the RNG
  }
  else {
    //does not add the N part of the var list
  }
var smybCase = prompt("Uppercase? yes or no")
  if(smybCase = yes){
    //adds the S part of the var list to the RNG
  }
  else {
    //does not add the S part of the var list
  }



//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password



// a length of at least 8 characters and no more than 128 characters

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered

