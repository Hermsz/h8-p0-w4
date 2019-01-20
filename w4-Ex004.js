/*

//W4-004 - Logic Challenge - Mencari Modus

Problem
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.

*/
function cariModus(arr) {
  var unique = [];
  var counter = 1;

  for (var i = 0; i <= arr.length - 1; i++) {
    var check = true;

    // untuk check terhadap unique
    for (var j = 0; j <= unique.length - 1; j++) {
      if (arr[i] === unique[j][0]) {
        unique[j][1] += 1;
        check = false;
      }
    }

    // kalo unik kita push
    if (check === true) {
      unique.push([arr[i], counter]);
    }
  }

  var max = unique[0][1];
  var modeResult = unique[0][0];

  for (var k = 1; k <= unique.length - 1; k++) {
    if (unique[k][1] > max) {
      max = unique[k][1];
      modeResult = unique[k][0];
    }
  }

  if (unique.length === 1 || max === 1) {
    modeResult = -1;
  }

  return modeResult;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4, 11])); // 4
console.log();
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log()
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log()
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log()
console.log(cariModus([7, 7, 7, 7, 7])); // -1

//----- MENCOBA MODUS PAKE CARA OBJECT (BLM SLESAI 18 Jan 2019) -----

// function cariModus(arr) {
//   var object = {};
//   for (var i = 0; i <= arr.length - 1; i++) {
//     var number = arr[i];

//     if (!object[number]) {
//       object[number] = 0;
//     }
//     console.log(object);

//     object[number] += 1;
//   }

//   return object[4];
// }
