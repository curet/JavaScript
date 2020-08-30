// JOSE C.S. CURET
// Just a simple power function, working iteratively

function power(base: number, exponent: number){
    let count = 1;
    let result = 1;
  
    while(count <= exponent){
      result *= base;
      count++
    }
  
    return result;
  }
  
  console.log(power(3, 7));