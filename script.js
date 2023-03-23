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

var password = ""


// Function to prompt user for password options

function getPassOptions(){
  userInput = {};

  while(true){
    const newPass = parseInt(prompt("Please enter the length of your password between 10 and 64 characters."));

    if(newPass >=10 && newPass <= 64){
      userInput["length"] = newPass;
      break;
    } else if(newPass == NaN){
         alert("please enter a number between 10-64.");
    }
  }


// while loop to get user to confirm characters for their pass

while(Object.values(userInput).includes(true) == false){

  // using prompts to write to userInput object
  let numbers = confirm("Include numbers in your password?");
  userInput["numbers"] = numbers;

  let lowercase = confirm("Include lowercase characters in your password?");
  userInput["lowercase"] = lowercase;

  let uppercase = confirm("Include upperchase characters in your password?");
  userInput["uppercase"] = uppercase;

  let special = confirm("Would you like special characters in your password?");
  userInput["special"] = special;
}

// returning the input to be used  
return userInput;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}



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