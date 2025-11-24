// Generate a random number between 10 to 20.


function randomNumber(num){
    let number = Math.round(Math.random() * num);
    console.log(number)


}
let number = 10
let random = randomNumber(number);
console.log(random)