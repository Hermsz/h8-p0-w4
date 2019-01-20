
/*
//Logic Challenge - Naik Angkot

Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]


*/

function naikAngkot(listPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  if( listPenumpang.length === 0) {
    return []
  }

  var finalAns = []

  for( var i = 0; i <= listPenumpang.length - 1; i++ ) {
    
    var passenger = listPenumpang[i][0]
    var start = listPenumpang[i][1]
    var startPoint = 0
    var end = listPenumpang[i][2]
    var endPoint = 0
    var routePrice = 2000
    var totalPrice = distance * routePrice
   
    
    object = {}
    object.penumpang = passenger
    object.naikDari = start
    object.tujuan = end
    object.bayar = totalPrice
    
    for( var j = 0; j <= rute.length - 1; j++ ) {
      if( object.naikDari === rute[j] ) {
        startPoint = j
      }
      if( object.tujuan === rute[j]) {
        endPoint = j
      }
    }

    var distance = endPoint - startPoint;
    object.bayar = distance * routePrice;

    
    finalAns.push(object)
  }

  return finalAns
}




//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]

