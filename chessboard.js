// JOSE C.S. CURET
// given height and width 
// a program that creates a string that represents an H×W chess grid

let height = 8;
let width = 8;

const hash = "#", space = " ";
let n_hash = "";
let count = 0;

while(count < (width/2)){
    n_hash += hash + space;
    count++
}
count = 0;

while(count < height){
    if(count % 2 == 0 ) console.log(space + n_hash)
    else console.log(n_hash)

    count++;
}