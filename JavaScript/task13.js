// Write a function to convert temperature from Celsius to Fahrenheit.

function convertCelToFar(degree){
    let convert = (degree * (9/5)) + 32;
    return convert
}

let Celsius = convertCelToFar(42)
console.log(Celsius)