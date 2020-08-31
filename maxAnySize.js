// JOSE C.S. CURET
// This function will receive any amount of parameters
// then display the maximum number of the list

function max(...number){
    let maximum = -Infinity;

    for(let n of number){
        if(maximum < n) maximum = n;
    }
    return maximum;
}

console.log(max(3, 1, -2, 4, 8, 12, -17, 2, 4, 6));