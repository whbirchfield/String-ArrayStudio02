let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

console.log(protoArray1.includes(','));
console.log(protoArray1.includes(';'));
console.log(protoArray1.includes(' '));
console.log("\n");
console.log(protoArray2.includes(','));
console.log(protoArray2.includes(';'));
console.log(protoArray2.includes(' '));
console.log("\n");
console.log(protoArray3.includes(','));
console.log(protoArray3.includes(';'));
console.log(protoArray3.includes(' '));
console.log("\n");
console.log(protoArray4.includes(','));
console.log(protoArray4.includes(';'));
console.log(protoArray4.includes(' '));

//strings.includes(' ');
//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
let protoArrayOne = [];
protoArrayOne = protoArray1.split(',').reverse();
protoArray1 = protoArrayOne.join(',');
console.log(protoArrayOne)
console.log(protoArray1);
console.log("\n");

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
let protoArrayTwo = [];
protoArrayTwo = protoArray2.split(';').sort();
console.log(protoArrayTwo)
protoArray2 = protoArrayTwo.join(',');
console.log(protoArray2);
console.log("\n");


//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
let protoArrayThree = [];
protoArrayThree = protoArray3.split(' ').sort();
console.log(protoArrayThree);
protoArray3 = protoArrayThree.join(' ');
console.log(protoArray3);
console.log("\n");


//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
let protoArrayFour = [];
protoArrayFour = protoArray4.split(', ').reverse();
protoArray4 = protoArrayFour.join(',');
console.log(protoArrayFour);
console.log(protoArray4);