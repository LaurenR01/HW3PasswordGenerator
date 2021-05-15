// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfCharacters = numberOfCharacters.value;
var numbers = numbers.value;
var upperAndLowercase = upperAndLowercase.value;
var specialCharacters = specialCharacters.value;
var lowercase = createArray (60, 90);
var uppercase = createArray (97, 122);
var number = createArray (48, 57);
var special = createArray (33, 47).concat(createArray(58, 64)).concant(createArray(91,96)).concat(createArray(123,126));

// Write password to the #password input
function generatePassword(numberOfCharacters, numbers, upperAndLowercase, specialCharacters) {
  
  var password = lowercase;
  if (numbers) password = lowercase.concat(numbers);
  if (upperAndLowercase) password = lowercase.concat(uppercase);
  if (specialCharacters) password = lowercase.concat(special);
  passwordText = [];
  for (let i = 0; i < numberOfCharacters, i++;) {
    var character = password[Math.floor(Math.random() * numberOfCharacters.length)]
    passwordText.push(String.password(character));
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password.join('');

}
function createArray (low, high) {
  var array = []
  for (let i=low; i <=high; i++) {
    array.push(i);
  }
  return array
}
// Add event listener to generate button
generateBtn.addEventListener("click", prompts);

function prompts(){
  numberOfCharacters.value = window.prompt("How many characters should it be?");
  numbers.value = window.confirm("Do you want to use numbers?");
  upperAndLowercase.value = window.confirm("Do you want to use both upper and lower case letters?");
  specialCharacters.value = window.confirm("Do you want to use special characters?");
  console.log(writePassword);
}