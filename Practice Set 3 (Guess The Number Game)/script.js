//Q1
for (let count=0; count<=100; count++) {
    console.log("Number is:",count);
}

//Q2
for (let count=0; count<=100; count++) {
    if (count%2 === 0) {
        console.log("Even number:",count);
    }
}

//Q3
let sum = 0;
for (var i=0; i<=100; i++) {
    if (i%2 === 0) {
        sum = sum + i;
    }
}
console.log('The sum of all even numbers from 0 to 100 is:',sum);

//Q4 (Guess The Number Game)
let gameNum = 84;
let guess = false;
while (guess === false) {
    var userGuess = prompt("Guess a number between 1 to 100:")
    if (userGuess == gameNum) {
        console.log("You guessed the right number");
        guess = true;
    }
    else {
        console.log("Nope, the number is wrong");
    }
}