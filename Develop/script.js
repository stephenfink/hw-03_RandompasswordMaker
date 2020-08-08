
var generateBtn = document.querySelector("#generate");
//possible content arrays I can make each letter/number into a unit
generateBtn.addEventListener("click", writePassword);
//WHEN I click the button to generate a password
// Assignment Code
var caseUpper = String.fromCharCode(Math.floor(Math.random()* 26)+97)
var caseLower = String.fromCharCode(Math.floor(Math.random()*26)+97)
var caseNum = String.fromCharCode(Math.floor(Math.random()* 10)+48)
var symbolLetters = Math.floor(Math.random() * 12)
      for(i = 0; i <= symbolLetters.length; i++){}

var symbolLetters = "!@#$%^&*(){}"
var userInput = ""
var  passLength 
var password
var symbolCase 
var lengthPass
var PWChoice = ""
// Write password to the #password input
// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
function generatePassword() {
  passWordLength();
  passAskUpper();
  getRandomLower();
  getRandomNumber();
  getRandomSymbols();
  
  
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  function passWordLength() {
    while(true){
    var passLength = prompt("how long you want the password between 8 and 128");
    if (passLength == null){
      alert("Exiting Password Generator")
    }else{
    if((passLength <8) || (passLength > 128)){
      alert("you need at least 8 or less than 128 characters")}
    
    else{return parseInt(passLength)}
    };
  };
  }
  function passAskUpper() {
    while(true){
    var upperCase = prompt("do you want upper case? yes or no");
    if (upperCase == null){
      PWChoice = PWChoice
    }else{
    if(upperCase === yes){
      PWChoice = PWChoice + caseUpper
    }
    else { PWChoice = PWChoice}
  }
  }
  }
  function passAskLower() {
    while(true){
    var lowerCase = prompt("do you want lower case? yes or no");
    if(lowerCase == null){
      PWChoice = PWChoice
    }else{
    if(lowerCase === yes){
      PWChoice = PWChoice + caseLower
    }
    else{
      PWChoice = PWChoice
    };
  };
  };
}
  function passAskNum() {
    while(true){
    var numCase = prompt("do you want numbers? yes or no");
    if(numCase == null){
      PWChoice = PWChoice
    }else{
    if(numCase === yes){
      PWChoice = PWChoice + caseNum
    }
    else{
      PWChoice = PWChoice
    };
  };
  };
}
  function passAskSym(params) {
    while(true){
    var symbolCase = prompt("do you want symbols? yes or no");
    if(symbolCase == null){
      PWChoice = PWChoice
    }else{
    if(symbolCase === yes){
      PWChoice += PWChoice
    }
    else{PWChoice + PWChoice}
    };
  };
  }



