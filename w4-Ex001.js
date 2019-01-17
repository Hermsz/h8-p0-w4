
/*
//W4-001 - Logic Challenge - Angka Prima

Problem
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
Function akan me-return true jika angka tersebut adalah bilangan prima. 
Jika tidak, return false.


*/

function angkaPrima(angka) {

  if( angka <= 1 ) {
    return false
  }

  for( var i = 2; i < angka; i++ ) {
    if( angka % i === 0 )  {
      return false
    } 
  }
    return true
}

// // TEST CASES
// console.log(angkaPrima(3)); // true
// console.log(angkaPrima(7)); // true
// console.log(angkaPrima(6)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(33)); // false

function primeNum(number) {

  if( number === 2 || number === 3 || number === 5 || number === 7 || number === 11 ) {
    return true
  } else if( number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0 || number % 11 === 0) {
    return false
  } else {
    return true
  }
}

// TEST CASES
console.log(primeNum(3)); // true
console.log(primeNum(7)); // true
console.log(primeNum(6)); // false
console.log(primeNum(23)); // true
console.log(primeNum(33)); // false



// function primeNumber(num) {
  
  //   if ( num === 1 ) {
    //     return false;
    //   }
    //   else if( num === 2 ) {
      //     return true;
      //   } else {
        //     for( var i = 2; i < num; i++ ) {
          //       if(num % i === 0) { 
            //         return false;
            //       }
            //     }
            //     return true;  
            //   }
            // }
            
            // console.log(primeNum(35));
            
            
            // if( (Math.floor(angka % 1 === 0) === (angka % 1 === 0)) && (Math.floor(angka % angka === 0) === (angka % angka === 0)) ) {
            //   return true
            // } else {
            //   return false
            // }
