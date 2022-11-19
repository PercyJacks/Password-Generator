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

// To store the password length the user chooses
var password_length = 0;

// To store boolean values of the character options the user chooses
var optionsDict = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  specials: false
}

// Function to prompt user for password options
function getPasswordOptions() {
  var counter = 0;
  // Get password length.
  // Make sure user enters a number between 10 and 64 (inclusive)
  do {
    if (counter > 0) {
      alert("You must select a number that is at least 10 and not greater than 64!");
    }
    password_length = prompt("How long do you want your password to be? \nMust be between 10 - 64 characters!");
    counter++;
  } while (!((password_length >= 10) && (password_length <= 64)));

  counter = 0;
  // Make sure user chooses at least 1 character option for their password
  do {
    if (counter > 0) {
      alert("You must pick at least one of the options!");
    }
    alert("Which characters would you like to include in your password? Pick at least one of the following options.")
    optionsDict.lowercase = confirm("Would you like to include lowercase characters in your password?");
    optionsDict.uppercase = confirm("Would you like to include uppercase characters in your password?");
    optionsDict.numeric = confirm("Would you like to include numeric characters in your password?");
    optionsDict.specials = confirm("Would you like to include special characters in your password?");
    counter++;
} while (!(optionsDict.lowercase || optionsDict.uppercase || optionsDict.numeric || optionsDict.specials));
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  // Get the password options
  getPasswordOptions();
  var password_options = [];
  var password = "";
  // If the user wants to include lowercase characters then add them to the array
  if (optionsDict.lowercase) {
    password += getRandom(lowerCasedCharacters);
    password_options = password_options.concat(lowerCasedCharacters);
  }
  // If the user wants to include uppercase characters then add them to the array
  if(optionsDict.uppercase) {
    password += getRandom(upperCasedCharacters);
    password_options = password_options.concat(upperCasedCharacters);
  }
  // If the user wants to include numeric characters then add them to the array
  if (optionsDict.numeric) {
    password += getRandom(numericCharacters);
    password_options = password_options.concat(numericCharacters);
  }
  // If the user wants to include special characters then add them to the array
  if(optionsDict.specials) {
    password += getRandom(specialCharacters);
    password_options = password_options.concat(specialCharacters);
  }

  // Create password with desired length
  while (password.length <= password_length) {
    password += getRandom(password_options);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // Get the generated password
  var password = generatePassword();
  // Query the DOM for the element with the password id
  var passwordText = document.querySelector('#password');
  // Change the text to display the password
  passwordText.value = password;
}

// Add event listener to generate button
// On button click this will display the password in the space!
generateBtn.addEventListener('click', writePassword);
