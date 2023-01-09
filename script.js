// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var password = {
  passwordLength: 0,
 containsUpper: false,
 containsSpecial: false,
 containsLower: false,
containsNumeric: false,

}
var password;
var promptUser = prompt("How long do you want your password to be?");
password.passwordLength = promptUser;
if(promptUser )
// Function to prompt user for password options

function getPasswordOptions() {
var hasUpper = confirm("Do you want your password to contain upper case letters?");
var hasLower = confirm("Do you want your password to contain lower case letters?");
var hasSpec = confirm("Do you want your password to contain special symbols?");
var hasNumb = confirm("Do you want your password to contain numbers?");
switch(hasUpper){
  case true:
    password.containsUpper = true;
    break;
    case false:
      password.containsUpper = false;
      break;
}
switch(hasLower){
  case true:
    password.containsLower = true;
    break;
    case false:
      password.containsLower = false;
      break;
}
switch(hasSpec){
  case true:
    password.containsSpecial = true;
    break;
    case false:
      password.containsSpecial = false;
      break;
}
switch(hasNumb){
  case true:
    password.containsNumeric = true;
    break;
    case false:
      password.containsNumeric = false;
      break;
}
return;
}

getPasswordOptions();


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandom(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {
var passw = "";

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);