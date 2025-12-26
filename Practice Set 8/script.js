var num_array = [];
let n = parseInt(prompt("Enter the number of elements in the array:"));
for (let i=0; i<n; i++) {
    let num = parseInt(prompt(`Enter the ${i+1} element:`));
    num_array[i] = num;
}
console.log("Entered array:",num_array);
let changed_array = [];
num_array.forEach((val) => {
    changed_array.push((val)**2);
})
console.log("The changed array with each element squared is:",changed_array);