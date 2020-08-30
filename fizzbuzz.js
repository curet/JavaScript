// JOSE C.S. CURET
// displaying Fizz if N | 3
// displaying Buzz if N | 5
// displaying FizzBuzz if N | 5 && N | 3
// else display the number

const limit = 100;
let init = 1;

while(init <= limit){
    
    if(init % 3 != 0 && init % 5 != 0) console.log(init);
    else if(init % 3 == 0 && init % 5 == 0) console.log("FizzBuzz");
    else if (init % 3 == 0) console.log("Fizz");
    else console.log("Buzz");
    

    init++;
}