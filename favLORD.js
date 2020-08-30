// JOSE C.S. CURET
// This program will display favorite The Lord of The Ring movie of the 3
// from a random group of imaginary people
// displaying 0's on the front to have a balance on how the display looks like

function favLORD (first, second, third){

    let firstString = String(first);
    while(firstString.length < 5){
        firstString = "0" + firstString;
    }
    console.log(firstString);

    let secondString = String(first);
    while(secondString.length < 5){
        secondString = "0" + secondString;
    }
    console.log(secondString);

    let thirdString = String(third);
    while(thirdString.length < 5){
        thirdString = "0" + thirdString;
    }
    console.log(thirdString);
}

favLORD(20,10,12);
