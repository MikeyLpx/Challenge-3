var generateBtn = document.querySelector("#generate");


function generatePassword(){
var characterLengthText= prompt("how many charcters would you like your password to contain");
var specialTxt= confirm("Click OK to confirm including special characters")
var numbers= confirm("Click OK to confirm including numeric characters")
var lower= confirm("Click OK to confirm including lowercase characters")
var upper= confirm("click OK to confirm including uppercase characters")
var specialPassword= ""
var specialText = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var lowerTxt= "abcdefghijklmnopqrstuvwxyz"
var UpperTxt= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericTxt= "0123456789"
var length =128;
var myGeneratedPassword = '';

if (specialTxt){
  specialPassword = specialPassword + specialText
}
if ( numbers){
  specialPassword= specialPassword + numericTxt
}
if (lower){
  specialPassword = specialPassword + lowerTxt
}
if (upper){
  specialPassword = specialPassword + UpperTxt
}
if (characterLengthText != null){
  for(var i=0, n=specialPassword.length; i < characterLengthText; ++i) {myGeneratedPassword += specialPassword.charAt((Math.random()*n));
  }
};

return myGeneratedPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
