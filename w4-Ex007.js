
/*

//W4-007 - Logic Challenge - Mengurutkan Abjad

Problem
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.


*/

function urutkanAbjad(str) {

  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var organised = ""

  for( var i = 0; i <= alphabet.length - 1; i++ ) {
    for( var j = 0; j <= str.length - 1; j++ ) {
      if( str[j] === alphabet[i] ) {
        organised += alphabet[i]
      }
    }
  }
return organised
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'