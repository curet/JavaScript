// JOSE C.S. CURET
// A recursive power function

function power(base, exponent){
    if (exponent == 0) return 1;
    else if (exponent == 1) return base;
    else return base * power(base, exponent - 1);
}

console.log(power(2,7));