//Q1
let n1 = parseInt(prompt("Enter number of students:"));
let marks_array = [];
for (let i=0;i<n1;i++) {
    let marks = parseFloat(prompt(`Enter marks of student ${i+1}:`));
    marks_array[i] = marks;
}
let filter_marks = marks_array.filter((val) => {
    return val > 90;
})
console.log("Entered marks array:",marks_array);
console.log("Marks of students greater than 90:",filter_marks);

//Q2
let n2 = parseInt(prompt("Enter the number of number to be entered:"));
let num_array = [];
for (let i=0;i<n2;i++) {
    let num = parseFloat(prompt(`Enter the number ${i+1}:`));
    num_array[i] = num;
}
console.log("Entered numbers array:",num_array);
let add = num_array.reduce((res,curr) => {
    let sum = res + curr;
    return sum;
});
console.log("The sum of all numbers in the given array is:",add);
let mul = num_array.reduce((res,curr) => {
    let pro = res*curr
    return pro;
});
console.log("The product of all numbers in the given array is:",mul);