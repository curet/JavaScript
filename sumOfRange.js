// JOSE C.S. CURET

// [1].
// Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.

function range(n, m, step = 2){
    
    let arre = [];

    for(let i = n; i <= m; i+= step){
        arre.push(i);
    }

    return arre;
}

console.log(range(-1,5));

// [2].
// Next, write a sum function that takes an array of numbers and
// returns the sum of these numbers.

function sumArre(arre){
    let result = 0;

    for(let a of arre){
        result += a;
    }

    return result;
}

console.log(sumArre(range(1,10)));