
var generateBtn = document.querySelector("#generate");
//possible content arrays I can make each letter/number into a unit



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


var lengthPass = prompt("How long of password between 8 and 128 characters").value
if (lengthPass == null || lengthPass == ""){
  alert("You must have 8-128 characters")
}
if else(lengthPass.value <8){
  alert("Your password is too short")
}
if else(lengthPass.value > 128)
  alert("Your password is too long")
else {
  lengthPass.value = passLength
}
var upperCase = prompt("Uppercase? yes or no")
  if(upperCase = yes){
    //adds the U part of the var list to the RNG
    function getRandomUpperCase(){
      return String.fromCharCode(Math.floor(Math.random()*26)+65);
    }
  }
  else {
    //does not add the U part of the var list
  }
var lowerCase = prompt("Lowercase? yes or no")
  if(lowerCase = yes){
    //this is from a video used
      function getRandomLowerCase(){
        return String.fromCharCode(Math.floor(Math.random()*26)+97);
      }
    //adds the L part of the var list to the RNG
  }
  else {
    //does not add the L part of the var list
  }
var numCase = prompt("Numbers? yes or no")
  if(numCase = yes){
    function getRandomNumberCase(){
      return String.fromCharCode(Math.floor(Math.random()*10)+48)
    //adds the N part of the var list to the RNG
  }
  else {
    //does not add the N part of the var list
  }
var smybCase = prompt("smybols? yes or no")
  if(smybCase = yes){
    function getRandomSmybol(){
      var passSCase = "!@#$%^&*(){}+=<>.,";
      return passSCase[Math.floor(Math.random()*passSCase.length)];
    }
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

