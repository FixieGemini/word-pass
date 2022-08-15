// Assignment code here
// Set some variables
var passwordLength;
var userChoice;
var incNumbers;
var incLowerCase;
var incUpperCase;
var incSpecialChars;
// Password variables
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
chars = ['!', '@', '#', '$', '%', '^', '&', '*'];
// Generate password function
function generatePassword() {
  // Prompt user input
  passwordLength= parseInt(prompt('Choose your passwords length. Enter a number between 8 and 128.'));
  // Make sure a number was entered
  if (!passwordLength) {
    alert('A number is required');
  // Check for a valid number
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Number must be between 8 and 128'));
  // Move on to numbers, lowercase, uppercase, and characters confirmations
  } else {
    incNumbers = confirm('Will your password include numbers?');
    incLowerCase = confirm('Will your password include lowercase letters?');
    incUpperCase = confirm('Will your password include uppercase letters?');
    incSpecialChars = confirm('Will your password include special characters?');
  }
// If no confirmations are made
if (!incNumbers && !incLowerCase && !incUpperCase && !incSpecialChars) {
  userChoice = alert('No selections were made.');
}
// All 4 options
else if (incNumbers && incLowerCase && incUpperCase && incSpecialChars) {
  userChoice = numbers.concat(lowerAlpha, upperAlpha, chars);
}
// 3 options
else if (incLowerCase && incUpperCase && incSpecialChars) {
  userChoice = lowerAlpha.concat(upperAlpha, chars);
}
else if (incNumbers && incLowerCase && incUpperCase) {
  userChoice = numbers.concat(lowerAlpha, upperAlpha);
}
else if (incLowerCase && incUpperCase && incSpecialChars) {
  userChoice = lowerAlpha.concat(upperAlpha, chars);
}
else if (incUpperCase && incNumbers && incSpecialChars){
  userChoice = upperAlpha.concat(numbers, chars);
}
// 2 options
else if (incLowerCase && incUpperCase) {
  userChoice = lowerAlpha.concat(upperAlpha);
}
else if (incNumbers && incLowerCase) {
  userChoice = numbers.concat(lowerAlpha);
}
else if (incNumbers && incUpperCase) {
  userChoice = numbers.concat(upperAlpha);
}
else if (incNumbers && incSpecialChars) {
  userChoice = numbers.concat(chars);
}
else if (incSpecialChars && incLowerCase) {
  userChoice = chars.concat(lowerAlpha);
}
else if (incSpecialChars && incUpperCase) {
  userChoice = chars.concat(upperAlpha);
}
// 1 option
else if (incNumbers) {
  userChoice = numbers;
}
else if (incLowerCase) {
  userChoice = lowerAlpha;
}
else if (incUpperCase) {
  userChoice = upperAlpha;
}
else if (incSpecialChars) {
  userChoice = chars;
}
}
generatePassword();
console.log(userChoice);


// Get references to the #generate element
/* var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */
