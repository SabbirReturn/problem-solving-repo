// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    let smallName = names[0]
    for(let name of names){
        if(smallName.length>name.length){
            smallName = name;
        }
    }
    return smallName;
}

let name = smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(name);