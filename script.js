//This code is to print hello world
console.log("Hello World");
/*This code prints 
hello world in console*/

//Arithmetic Operators
var Val1 = 5;
var Val2 = 4;
console.log("Val1 =",Val1,"Val2=",Val2);
console.log("Val1 + Val2 =",Val1+Val2);
console.log("Val1 - Val2 =",Val1-Val2);
console.log("Val1*Val2 =",Val1*Val2);
console.log("Val1/Val2 =",Val1/Val2);
console.log("Val1%Val2 =",Val1%Val2);
console.log("Val1 raised to power Val2:",Val1**Val2);


//Unary Operators
//Post Increment/Decrement
var Val3 = 5;
console.log("Value of Val3 =",Val3)
Val3++
console.log("Val3++ =",Val3);
var Val3 = 5;
Val3--
console.log("Val3-- =",Val3);
//Pre Increment/Decrement
var Val4 = 6;
console.log("Value of Val4 =",Val4)
console.log("++Val4 =",++Val4);
var Val4 = 6;
console.log("--Val4=",--Val4);

//Assignment Operators
var Val5 = 11;
console.log("Value Of Val5:",Val5);
console.log("Printing Val5 += 5:",Val5 += 5);
var Val5 = 11;
console.log("Printing Val5 -= 5:",Val5 -= 5);
var Val5 = 11;
console.log("Printing Val5 *= 5:", Val5 *= 5);
var Val5 = 11;
console.log("Printing Val5 /= 5:", Val5 /= 5);
var Val5 = 11;
console.log("Printing Val5 %= 5:", Val5 %= 5);
var Val5 = 11;
console.log("Printing Val5 **= 5:", Val5 **=5);

//Comparison Operators
var Val6 = 16;
var Val7 = 30;
console.log("Value of Val6 =",Val6,"Value Of Val7 =",Val7);
console.log("Val6 == Val7:",Val6 == Val7);
console.log("Val6 != Val7:", Val6 != Val7);
//strict comparison operators
var Val8 = 17;
var Val9 ="17";
console.log("Val7 == Val8:",Val7 == Val8);
console.log("Val7 === Val8:",Val7 === Val8);
//other comparison operators 
var Val10 = 34;
var Val11 = 29;
console.log("Val10 is:",Val10,"Val11 is:",Val11)
console.log("Val10 > Val11:",Val10>Val11);
console.log("Val10 < Val11:",Val10<Val11);
console.log("Val10 >= Val11:",Val10>=Val11);
console.log("Val10 <= Val11:",Val10<=Val11);

//Logical operators
var Val12 = 95;
var Val13 = 58;
cond1 = Val12 > Val13;
cond2 = Val12 === 95;
console.log("cond1 && cond2:",cond1&&cond2);
console.log("cond1 || cond2:",cond1||cond2);
console.log("!cond1",!cond1);

//Conditional Statements
//if Condition
var age = 23;
if (age >= 18) {
  console.log("You Can Vote");
}
if (age < 18) {
  console.log("Sorry You Cannot Vote");
}

//if-else condition
var mode = "dark-mode";
var color;
if (mode === "dark-mode") {
  color = "dark";
} else {
  color = "white";
}
console.log(color);

let number = 25
if (number%2 === 0) {
  console.log(number,"is Even");
} else {
  console.log(number,"is Odd");
}

//else-if condition
var mode = "pink";
var color;
if (mode === "dark") {
  color = "dark";
}
else if (mode === "blue") {
  color = "blue";
}
else if (mode === "pink") {
  color = "pink";
} else {
  color = "white";
}
console.log(color);

//Ternary Operators 
var age = 10;
var output =age > 18 ? "adult":"not adult";
console.log(output);

//switch operator
var fruit = "Papayas";
switch (fruit) {
  case "Oranges":
    console.log("Oranges are $0.59 pound.");
    break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and Papayas are $2.79 pound.")
      break;
    default:
      console.log("Sorry, we are out of",fruit);
}

//for loop
for(let count=1; count<=5; count++) {
  console.log("Hello World");
} 

//Calculate sum from 1 to 100
let sum = 0;
for (let i=1; i<=100; i++) {
  sum =sum + i;
}
console.log("The sum is:",sum);

//while loop
let c = 1;
let s = 0;
while (c<=100) {
  s = s+c;
  c++;
}
console.log("Sum is:",s);

//do-while loop
let a = 1;
do {
  console.log("a = ", a);
  a++
} while (a<=5);

//for-of loop
let word = "HelloWorld";
let len = 0;
for (let char of word) {  //iterator -> characters
  console.log(char);
  len++;
}
console.log("Length of word is:",len);

//for-in loop
let student = {
  name: "Rohan",
  age: 20,
  cgpa: 9,
  isPass: true
};

for (let key in student) {
  console.log("keys =",key, "value =",student[key]);
}

//Strings
let str = "Hello World";
console.log("Entered string is:",str);
let length = str.length;
console.log("Length of string is:",len);
let letter_2 = str[1];
console.log("2nd letter in the string is:",letter_2);

//Template Literals
let specialString = `This is a template literal`;
console.log(specialString);

let obj = {
  item: "pen",
  price: "30 rupees"
};
console.log("The cost of",obj.item, "is:",obj.price); //The Normal Way
console.log(`The cost of ${obj.item} is: ${obj.price}`); //Template Literal

//Escape Characters
console.log("Hello\nWorld");
console.log("Hello\tWorld");

//String Manipulation
let wrd = "    Hello World    "
console.log(wrd.toUpperCase());
console.log(wrd.toLowerCase());
console.log(wrd.trim());
console.log(wrd);
let num = "0123456789"
console.log(num.slice(2,6)); //2345 will return not 6
let str1 = "Hello"
let str2 = "World"
console.log(str1.concat(str2)); //str2 adds to str1
console.log(str1 + str2); //better method
let str3 = "Hello"
console.log(str3.replace("H","Y")); 
console.log(str1.charAt(1));

//Arrays
let marks = [75,96,56,98,23] //Create Array
console.log(marks);

//Looping in Arrays
//for loop
for (let i=0;i<marks.length;i++) {
  console.log(marks[i]);
}

//for-of loop
for (let i of marks) {
  console.log(i);
}

//Array Methods
//1) Push()
let foodItems = ["potato", "apple", "litchi","tomato"];
console.log("Before Push:",foodItems);
foodItems.push("chips");
console.log("After Push 1:",foodItems);
foodItems.push("Paneer", "Burger");
console.log("After Push 2:",foodItems);

//2) Pop()
let deletedItem = foodItems.pop()
console.log("After Pop 1:",foodItems);
console.log("Deleted Item is:",deletedItem);

//3) toString()
console.log("Marks of students:",marks);
console.log("Marks to students converted to strings:",marks.toString());

//4) concat()
let marvel_heroes = ["thor", "spiderman", "ironman"];
let dc_heroes = ["superman","batman"];
let indian_heroes = ["Shaktimaan","Krish", "G-One"];
let heroes = marvel_heroes.concat(indian_heroes,dc_heroes);
console.log("Concat of Heroes:",heroes);
 
//5) unshift()
marvel_heroes.unshift("antman");
console.log("After Unshift()",marvel_heroes);
let removedItem = marvel_heroes.shift();
console.log("After Shift:",marvel_heroes);
console.log("The deleted item is:",removedItem);

//6) slice
marvel_heroes.push("antman","doctor strange","black panther");
console.log("Array before slicing:",marvel_heroes);
let sliceItems = marvel_heroes.slice(3,6);
console.log("Array after slicing:",sliceItems);

//7) splice
let arr = [1,2,3,4,5,6,7];
console.log("Array:",arr);
// Add items
arr.splice(2,0,101)
console.log("Array after adding:",arr);
//Remove items
arr.splice(3,1)
console.log("Array after removing:",arr);
//Replace items
arr.splice(3,1,101)
console.log("Array after replacing",arr);
//Random thing
arr.splice(2,2,101,102)
console.log("Array after random things",arr);
//Splice Function
arr.splice(4);
console.log("Array after slice:",arr);

//User defined function
function Myfunction() {
  console.log("Hello World");
  console.log("We are learning JS");
}
Myfunction();

//Sum function
function summation(a,b) {
  console.log("The sum is:",a+b);
  s = a+b;
  return s;
}
summation(2,3);

//Arrow Functions
const add = (a,b) => {
  console.log("The sum is:",a+b);
  return a+b;
}
add(5,6);

//ForEach Loop
let city = ["mumbai","pune","delhi"];
city.forEach(function printVal(val) {
  console.log(val);
});
city.forEach((val) => {
  console.log(val.toUpperCase());
});

//map
let array = [14,23,87,25];
let newArr = array.map((val) => {
  return val**2;
})
console.log(newArr);

//filter
let filterArray = array.filter((val) => {
  return val%2 === 0;
})
console.log("The filter array is:",filterArray); 

//reduce
let arr1 = [1,2,3,4,5,6,7,8,9];
const addition = arr1.reduce((res,curr) => {
  return res + curr;
});
console.log("The sum of elements in array:",addition);
 
//maximum element
let arr2 = [55,68,84,26,5,75];
let max_value = arr2.reduce((prev,curr) => {
  return prev > curr ? prev : curr;
})
console.log("The maximum element is:",max_value);