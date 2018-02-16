var alphabet = "abcdefghijklmnopqrstuvwxyz";
var rdnLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
//var rdnLetter = ;
var wins = 0;
var loss = 0;
var guessRemain = 10;
var guesses = [];
//for loop that evaluates whether the use selected the same letter as the computer

//check that letter is randomly selected each time
//alert(rdnLetter);

//user selects a letter
userLetter = prompt("Enter a letter from the keyboard");

for (i = 0; i<10; i++){
userLetter = prompt("Enter a letter from the keyboard");

    if(userLetter === rdnLetter){
        //document.write("You Selected the Correct Letter");
        //console.log("You Selected the Correct Letter");
        guesses.push(userLetter);
        console.log(userLetter);
        document.write(userLetter);
        alert("You selected the correct letter");
    
    }else {
        //document.write("You Selected the Wrong Letter");
        //console.log("You Selected the Wrong Letter");
        guesses.push(userLetter);
        console.log(userLetter);
        document.write(userLetter) ;
    }
    
}