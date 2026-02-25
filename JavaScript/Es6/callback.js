// function pakhibhai(callMeBack,patro,patri){

//     // console.log('CallMeBack Parameter', callMeBack)
//     // console.log('Value of patro',patro)
//     if(patri){
//         callMeBack(patro)
//     }
//     else{
//         console.log('Tor kopale Bia nai')
//     }
// }

// function callSomeOne(person){
//     console.log('calling', person)
// }
// // callSomeOne('Jodu')

// pakhibhai(callSomeOne,'Jodu','Modu');


function pakhibhai(callMeBack, patro, patri){
    if(patri){
        callMeBack(patro)
    }
    else{
        console.log('tor kopale bia nai')
    }
}

function callSomeOne(person){
    console.log('Calling', person)
}

pakhibhai(callSomeOne,'Jodu','Modu')