var generateBtn = document.querySelector("#generate");


function generatePassword(){
var characterLengthText= prompt("how many charcters would you like your password to contain");
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var length =128;
var myGeneratedPassword = '';
if (characterLengthText != null) {
    for(var i=0, n=characters.length; i < length; ++i) {myGeneratedPassword +=characters.charAt((Math.random()*n));
    }
}

 

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
