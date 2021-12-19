 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 generateBtn.addEventListener("click",writePassword);
 
 function writePassword() {
   var password = generatePassword(); 
   var passwordText = document.querySelector("#password");
    passwordText.value = password;
 }
 function generatePassword() {
 //Arrays for characters
  var lowercaseChar= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","{","}",":","?","<",">","?"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
//userinput for choice of numbers, letters or characters.
  var numOfChar = prompt ("How many characters do you want between 8 and 128?")
   if  (!(numOfChar >= 8 && numOfChar < 128)) {
     alert("You must choose between 8 and 128 characters!")
     return;
   }
   //  User chooses whether they want lower, upper, special or numbers
   var userInput= [];
   lowercase = confirm("Do you want lowercase letters?"); 
   if (lowercase) {
   userInput=lowercaseChar.concat(userInput);
  }
   uppercase = confirm("Do you want uppercase letters?");
   if (uppercase) {
   userInput=uppercaseChar.concat (userInput); 
  }
 
   special = confirm("Do you want Characters?"); 
   if (special) {
   userInput=specialChar.concat(userInput); 
  }
 
   numbersInput = confirm("Do you want numbers?"); 
   if (numbersInput) {
   userInput=numbers.concat(userInput); 
  }
 
   if(!lowercase && !uppercase && !special && !numbers){
     alert("You must at least choose 1 character type!")
     return; 
   }
 // uses the random math function, to put all of the arrays into a password.
 var passwordGenerator = []; 
   for (var i = 0; i < parseInt(numOfChar); i++) {
     passwordGenerator.push(userInput[Math.floor(Math.random() * userInput.length)]) 
   }
   return password=passwordGenerator.join("");
 }

