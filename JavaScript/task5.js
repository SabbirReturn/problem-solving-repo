// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
// Input: [1, 2, 3]
// Expected Output:
// Original: [1, 2, 3] Copy: [99, 2, 3]

let originalArray = [1, 2, 3];
let copy = [...originalArray];
copy[0] = 99;

console.log('Original:',originalArray);
console.log('Copy:',copy)
