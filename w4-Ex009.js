
/*

//W4-009 - Logic Challenge - Check AB

Problem
Diberikan sebuah function checkAB(num) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

*/

function checkAB(num) {


  var positionA = []
  var positionB = []

  for( var i = 0; i <= num.length - 1; i++ ) {
    if( num[i] === "a" ) {
      positionA.push(i)
    } 
    if( num[i] === "b" ) {
      positionB.push(i)
    }
  }

  for( var j = 0; j <= positionA.length - 1; j++ ) {
    for( var k = 0; k <= positionB.length - 1; k++ ) {
      if( (Math.abs(positionA[j] - positionB[k])) === 4 ) {
        return true
      } 
    }
  }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false