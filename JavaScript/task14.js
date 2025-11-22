let numbers = [5,6,11,12,98, 5];

function checkDouble(numbers,findNumber){
    
    let double = []
    for(let number of numbers){
       if(number=== findNumber){
        double.push(number)
       } 
    }
    return double.length;
}


let checker = checkDouble(numbers,55);
console.log(checker)