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

var password_length;

var optionsDict = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  specials: false
}

// Function to prompt user for password options
function getPasswordOptions() {
  do {
    password_length = prompt("How long do you want your password to be? \nMust be between 10 - 64 characters!");
  } while (!((password_length >= 10) && (password_length <= 64)));

  do {
  alert("What characters would you like to include in your password? Pick at least one of the following options.")
  optionsDict.lowercase = confirm("Would you like to include lowercase characters in your password?");
  optionsDict.uppercase = confirm("Would you like to include uppercase characters in your password?");
  optionsDict.numeric = confirm("Would you like to include numeric characters in your password?");
  optionsDict.specials = confirm("Would you like to include special characters in your password?");
} while (!(optionsDict.lowercase || optionsDict.uppercase || optionsDict.numeric || optionsDict.specials));
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  var password_options = [];
  var password = "";
  if (optionsDict.lowercase) {
    password_options = password_options.concat(lowerCasedCharacters);
  }
  if(optionsDict.uppercase) {
    password_options = password_options.concat(upperCasedCharacters);
  }
  if (optionsDict.numeric) {
    password_options = password_options.concat(numericCharacters);
  }
  if(optionsDict.specials) {
    password_options = password_options.concat(specialCharacters);
  }

  for(var i = 0; i < password_length; i++) {
    password += getRandom(password_options);
  }
  return password;
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
