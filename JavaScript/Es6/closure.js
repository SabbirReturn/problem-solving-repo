function counter(){
    let count = 0;
    return function(){
        count = count + 1;
        console.log('Counter valu1', count)
    }
}

let innerFunc = counter();
innerFunc()
innerFunc()