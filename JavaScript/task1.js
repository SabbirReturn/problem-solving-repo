// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

let colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseColorName = []
for(let i  =0; i<colors.length; i++){
    let colorName = colors[i]
    reverseColorName.unshift(colorName)
}
console.log(reverseColorName)

