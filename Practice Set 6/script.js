let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
console.log("Original Companies Array:", companies);

companies.shift();
console.log("Array after removing the first company:",companies);

companies.splice(1,1,"Ola");
console.log("Array after replacing:", companies);

companies.push("Amazon");
console.log("Array after adding:",companies);
