var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9']


function getPasswordOption() {

  var length = parseInt ( 
    prompt('How many characters would you like your password to contain?')
  );

  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  if (length > 128) {
    alert('Password length must be less than 128 character');
    return;
  }

  var hasSpecialCharacters = confirm(
    'Click ok to confirm including special characters.'
  );

  var hasNumericCharacters = confirm(
    'Click ok to confirm including numeric characters.'
  );

  var hasUpperCasedCharacters = confirm(
    'Click ok to confirm including upper case characters.'
  );

  var hasLowerCasedCharacters = confirm(
    'Click ok to confirm including lower case characters.'
  );

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
  }

  var passwordOptions = {
    length: length,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOption();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
