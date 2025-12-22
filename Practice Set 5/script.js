//Q1

let marks = [85,97,44,37,76,60];
let sum = 0;
let length = marks.length;
for (let val of marks) {
    sum = sum + val ;
}

let average = sum/length;
console.log("The average of the given marks of student is:",average);

//Q2
let price = [250,645,300,900,50];
let len = price.length;
console.log("Prices Of Products before discount:",price);
for (let i=0; i<len; i++) {
    val = price[i];
    new_price = val - (val*0.1);
    price[i] = new_price;
}
console.log("Prices Of Products after discount:",price);