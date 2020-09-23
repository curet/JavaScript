// JOSE C.S CURET

const { TIMEOUT } = require("dns");

// [1].
// The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order.

function reverseArray(givenArray){
    let newArray = [];

    for(let i = (givenArray.length); i > 0; i--){
         newArray.push(i);
    }
    return newArray;
}
console.log(reverseArray([1,2,3]));


// [2].
// reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument by reversing its elements.

function reverseArrayInPlace(givenArray){
    
    let tempValue;
    let arraySize = givenArray.length-1;
    let beginning = 0;


    do{     
            tempValue = givenArray[beginning];
            givenArray[beginning++] = givenArray[arraySize];
            givenArray[arraySize--] = tempValue;

            beginning++; arraySize--;
            
    }while(beginning <= arraySize);

    return givenArray;
}

console.log(reverseArrayInPlace([1,2,4]));