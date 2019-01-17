
/*

//W4-005 - Logic Challenge - Ubah Huruf

Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
Function akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.


*/

function ubahHuruf(kata) {

  var alphabet = "abcdefghijklmnopqrstuvwxyz"

  var word = ""

  for( var i = 0; i <= kata.length - 1; i++ ) {
    for( var j = 0; j <= alphabet.length - 1; j++ ) {
      if( kata[i] === alphabet[j] ) {
        word += alphabet[j+1]
      } 
    }
  } 
return word
}

// TEST CASES
console.log(ubahHuruf('wowz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu