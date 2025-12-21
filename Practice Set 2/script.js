//Q1
var num = prompt("Enter a number:");
console.log("Entered number was:",num);
if (num%5 === 0){
    console.log(num,"is divisible by 5");
} else {
    console.log(num,"is NOT divisible by 5");
}


//Q2 
var marks = prompt("Enter student's marks:");
console.log("Entered marks is:",marks);
if (marks>= 90 && marks<=100) {
    console.log("Marks Awarded: A");
}
else if (marks>=70 && marks<= 89) {
    console.log("Marks Awarded: B");
}
else if (marks>=60 && marks<=69) {
    console.log("Marks Awarded: C");
}
else if (marks>=59 && marks<=50) {
    console.log("Marks Awarded: D");
} else {
    console.log("Marks Awarded: F");
}
