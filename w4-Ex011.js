
/*
//W4-011 - Logic Challenge - Shopping Time!

Problem
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

- Sepatu brand Stacattu seharga 1,500,000
- Baju brand Zoro seharga 500,000
- Baju brand H&N seharga 250,000
- Sweater brand Uniklooh seharga 175,000
- Casing Handphone seharga 50,000

Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"

Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"

Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

*/
function shoppingTime(memberId, money) {
  if( memberId === undefined || money === '' ) { 
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if( memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if( money < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }
  var listProduct = {  // Data from the question above now displayed as Object
    'Sepatu Stacattu': 1500000,
    'Baju Zoro' : 500000,
    'Baju H&N': 250000,
    'Sweater Unikloooh': 175000,
    'Casing Handphone': 50000
  }
  var arrKey = Object.keys(listProduct) // Extract keys from object above and convert it to Array
  
  var arrValue = Object.values(listProduct) // Extract values from object above and convert it to Array
  
  
    
    var object = {}
    var array = []
    object.memberId = memberId
    object.money = money
    
    for( var i = 0; i <= arrKey.length - 1; i++ ) {
      if( money >= arrValue[i] ) {
        array.push(arrKey[i]) 
        money -= arrValue[i]
      } 
      
      object.listPurchased = array,
      object.changeMoney = money
    }
    return object
}
  


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }

console.log()
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }

console.log()
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja

console.log()
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup

console.log()
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja





      // function shoppingTime (memberId, money) {
      
      //   var products = [
      //     ["Sepatu Stacattu", 1500000],
      //     ["Baju Zoro", 500000],
      //     ["Baju H&N", 250000],
      //     ["Sweater Uniklooh", 175000],
      //     ["Casing Handphone", 50000]
      //   ]
      
      //   var object = {}
      //   var productsBought = []
        
      //   for(var i = 0; i <= products.length - 1; i++) {
      //     if(money >= products[i][1]) {
      //       productsBought.push(products[i][0])
      //       money -= products[i][1]
      //     }
      //   }
        
      //   if(memberId === '') {
      //     return "Mohon maaf, toko X hanya berlaku untuk member saja"
      //   } else if(money < 50000) {
      //     return "Mohon maaf uang anda tidak cukup"
      //   } else {
          
      //     object.money = money,
      //     object.memberId = memberId,
      //     object.listPurchased = productsBought,
      //     object.changeMoney = money
      
      //   }
      //   return object
      
      // }