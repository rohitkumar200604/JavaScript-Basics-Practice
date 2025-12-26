//Q1
function vowels(str) {
    var count = 0;
    for (let letter of str) {
        let char = letter.toLowerCase();
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count += 1;
        }
    }
    return count;
}

str = prompt("Enter the word:");
n = vowels(str);
console.log(`The number of vowels in ${str} is ${n}`);

//Q2
const vowel = (str) => {
    var count = 0;
    for (let letter of str) {
        let char = letter.toLowerCase();
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count += 1;
        }
    }
    return count;
}
str = prompt("Enter the word:");
n = vowel(str);
console.log(`The number of vowels in ${str} is ${n}`);