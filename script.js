// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfCharacters = prompt("How many characters should it be?");
var numbers = confirm("Do you want to use numbers?");
var upperAndLowercase = confirm("Do you want to use both upper and lower case letters?");
var specialCharacters = confirm("Do you want to use special characters?");
var lowercase = createArray (60, 90);
var uppercase = createArray (97, 122);
var number = createArray (48, 57);
// var special = createArray (33, 47).concat(createArray(58, 64)).concant(createArray(91,96)).concat(createArray(123,126));

// Write password to the #password input
function createArray (low, high) {
  var array = []
  for (let i=low; i <=high; i++) {
    array.push(i);
  }
  return array
}

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

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  console.log(password);
})


// var numberOfCharacters = numberOfCharacters.value;
// var numbers = numbers.value;
// var upperAndLowercase = upperAndLowercase.value;
// var specialCharacters = specialCharacters.value;