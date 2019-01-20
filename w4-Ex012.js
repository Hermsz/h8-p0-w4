/*

//W4-012 - Logic Challenge - Toko X

Problem
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). 
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, 
siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut

*/

function countProfit(arr) {
  var listProduct = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];

  if (arr.length === 0) {
    return [];
  }

  var finalAns = [];
  // var object = {} <--- if we put object outside the for loop, the result pushed to the object will only be the last value

  for (var i = 0; i <= listProduct.length - 1; i++) {
    // console.log(listProduct[i]) <--- to test if the loop shows the listProduct

    // below reassign array listProduct to new variable, eg : 'Sepatu Stacattu'
    var theProduct = listProduct[i][0]; // reassign "Sepatu Stacattu to new var theProduct"
    var productPrice = listProduct[i][1]; // reassign 1500000 to new var productPrice
    var productQty = listProduct[i][2]; // reassign 10 to new var productQty
    var qtyBought = 0;
    var buyer = [];

    object = {}; //object is placed inside loop so that it will store the value after every loop
    object.product = theProduct;
    object.shoppers = buyer;

    for (var j = 0; j <= arr.length - 1; j++) {
      // console.log(arr[j]) <--- to test if the loop shows the parameter arr

      if (theProduct === arr[j].product && productQty > arr[j].amount) {
        //if found product in arr & listProduct is the same
        buyer.push(arr[j].name); // push the name of the shoppers to new array buyer set above
        qtyBought += arr[j].amount;
      }

    }
    object.leftOver = productQty - qtyBought;
    object.totalProfit = qtyBought * productPrice;
    finalAns.push(object);
  }
  // finalAns.push(object) <--- if we put object outside the for loop, the result pushed to the object will only be the last value
  return finalAns;
}

// TEST CASES

console.log()
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

// console.log(
//   countProfit([
//     { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
//     { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
//     { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
//     { name: "Devi", product: "Baju Zoro", amount: 1 },
//     { name: "Lisa", product: "Baju Zoro", amount: 1 }
//   ])
// );

// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]


console.log()
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));

// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log()
console.log(countProfit([])); //[]
