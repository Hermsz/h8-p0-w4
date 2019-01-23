/*
//W4-002 - Logic Challenge - Faktor Persekutuan Terbesar

Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan 
merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

*/

function fpb(angka1, angka2) {
  var factorAngka1 = []; // penampung modulus yg 0 Angka1
  var factorAngka2 = []; // penampung modulus yg 0 Angka2

  for (var i = angka1; i >= 2; i--) {
    if (angka1 % i === 0) {
      //Kondisi dmn Angka1 di modulus i = 0
      factorAngka1.push(i);
    }
  }

  for (var j = angka2; j >= 2; j--) {
    if (angka2 % j === 0) {
      //Kondisi dmn Angka2 di modulus j = 0
      factorAngka2.push(j); //Di push ke array kosong
    }
  }

  for (var k = 0; k <= factorAngka1.length - 1; k++) {
    for (var l = 0; l <= factorAngka2.length - 1; l++) {
      if (factorAngka1[k] === factorAngka2[l]) {
        // kalau ada angka yang sama di push
        return factorAngka1[k];
      }
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1























