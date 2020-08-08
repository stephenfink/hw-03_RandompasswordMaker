
var generateBtn = document.querySelector("#generate");
//possible content arrays I can make each letter/number into a unit
generateBtn.addEventListener("click", writePassword);
//WHEN I click the button to generate a password
// Assignment Code

var symbolLetters = "!@#$%^&*(){}"
var password = ""
var lengthPass

var symbolCase 

// Write password to the #password input
// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
function generatePassword() {
  var passLength = prompt("how long you want the password between 8 and 128");
  var upperCase = prompt("do you want upper case? yes or no");
  var lowerCase = prompt("do you want lower case? yes or no");
  var numCase = prompt("do you want numbers? yes or no");
  var symbolCase = prompt("do you want symbols? yes or no");
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  if(passLength.value <8 || >128){
    alert("must be between the numbers of 8 and 128")
  }
  else {passLength.value = lengthPass }
    //when we click the button it it should
    //prompt for how long of password

    
    //if i want ...
    // upper case
    
    function getRandomUpper(){
      return String.fromCharCode(Math.floor(Math.random()* 26)+97)
    }
    //lower case
    
    //this function is for the random number for lower case without use of var lowercase letters
    function getRandomLower(){
      return String.fromCharCode(Math.floor(Math.random()*26)+97)
    }
    //numbers
  
    function getRandomNumber(){
      return String.fromCharCode(Math.floor(Math.random()* 10)+48)
    }
    //symbols
    
    function getRandomSymbols(){
      var symbolLetters = Math.floor(Math.random() * 10) + 1
      for(i = 0; i <= symbolLetters.length; i++){}
    }
    //then it will use the length of password to fill in with the cases i used
    
  
//prompts set up


