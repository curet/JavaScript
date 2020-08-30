// JOSE C.S. CURET

// [1]. a function countBs that takes a string as its only argument
// and returns a number that indicates how many uppercase “B” characters

let word = "BfBjBBkB";

function countBs (word) {

    let count = 0;

    for(let i = 0; i < word.length; i++){

        if(word[i] == 'B') count++;

    }
    return count;
}

console.log(countBs(word));


// [2]. a function called countChar that behaves like countBs, except it takes
// a second argument that indicates the character that is to be counted

let findWord = 'j';

function countChar (word, findWord) {

    let count = 0;

    for(let i = 0; i < word.length; i++){

        if(word[i] == findWord) count++;

    }
    return count;
}

console.log(countChar(word, findWord));