let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

console.log(protoArray1.includes(','));
console.log(protoArray1.includes(';'));
console.log(protoArray1.includes(' '));
console.log("\n"),
console.log(protoArray2.includes(','));
console.log(protoArray2.includes(';'));
console.log(protoArray2.includes(' '));
console.log("\n"),
console.log(protoArray3.includes(','));
console.log(protoArray3.includes(';'));
console.log(protoArray3.includes(' '));
console.log("\n"),
console.log(protoArray4.includes(','));
console.log(protoArray4.includes(';'));
console.log(protoArray4.includes(' '));

//strings.includes(' ');
//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
let protoArrayOne = [];
protoArrayOne = protoArray1.split(',').reverse();
protoArray1 = protoArrayOne.join(',');
console.log(protoArray1);


//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.



//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.



//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
