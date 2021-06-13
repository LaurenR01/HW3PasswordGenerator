var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


// Click button brings on prompt
function getuserPrompts(){
    var length = parseInt(prompt('How many characters should it be?'),12);
    if (Number.isNaN(length)){
        alert('Password length must be a number');
        return null;
    }
    if (length < 8){
        alert('Password must be at least 8 characters');
        return null;
    } 
    if (length > 128){
        alert('Password must be fewer than 128 characters');
        return null;
    }
// userPrompts();

// Series of prompts, alerts or confirms
// confirm to numbers
var numbersTrue = confirm('Do you want to use numbers?');
// confirm for uppercase
var upperCaseTrue = confirm('Do you want to use upper case letters?');
// / confirm for lowercase
var lowerCaseTrue = confirm('Do you want to use lower case letters?');
// confirm for special characters
var specialCharactersTrue = confirm('Do you want to use special characters?');

if (specialCharactersTrue === false && numbersTrue === false && upperCaseTrue === false && lowerCaseTrue === false){
    alert('Password must include at least one condition');
    return null;
} 

var userPrompts = {
                length:length, 
                numbersTrue: numbersTrue,
                upperCaseTrue: upperCaseTrue,
                lowerCaseTrue: lowerCaseTrue,
                specialCharactersTrue: specialCharactersTrue,
                 };

return userPrompts;
                }
function characters(arr){
 var randomChar = Math.floor(Math.random() * arr.length);
 var randomEl = arr[randomChar];
 return randomEl;
}       
function generatePassword(){
    var passwordText = getuserPrompts();
    var results = [];
    var possibilities = [];
    var chosen = [];

    if(!passwordText) return null;
    if(passwordText.specialCharactersTrue){
        possibilities = possibilities.concat(specialCharacters);
        chosen.push(characters(specialCharacters));
    }
    if(passwordText.numbersTrue){
        possibilities = possibilities.concat(numbers);
        chosen.push(characters(numbers));
    }
     if(passwordText.upperCaseTrue){
        possibilities = possibilities.concat(uppercase);
        chosen.push(characters(uppercase));
    }
     if(passwordText.lowerCaseTrue){
        possibilities = possibilities.concat(lowercase);
        chosen.push(characters(lowercase));
    }
    for (i=0; i < passwordText.length; i++){
        var possibility = characters(possibilities);
        results.push(possibility);
    }
    for (i=0; i < chosen.length; i++){
        results[i] = chosen[i];
    }

    return results.join(' ');
}
let generateBtn = document.querySelector('#generate');

function displayPassword() {
    var password = generatePassword();
    var passwordValue = document.querySelector("#password");
    passwordValue.value = password;
}

generateBtn.addEventListener('click', displayPassword);



