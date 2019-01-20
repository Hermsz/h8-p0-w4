
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

function countProfit(shoppers) {
  
    let listProduct = [ 
      ['Sepatu Stacattu', 1500000, 10], 
      ['Baju Zoro', 500000, 2], 
      ['Sweater Uniklooh', 175000, 1] 
    ]

    var finalAns = []

    for( var i = 0; i <= listProduct.length - 1; i++ ) {
        // var productName = ("product: " + listProduct[i][0]) 
        // var shoppers = []
        // var shopperList = ("shoppers: " + shoppers)
        // var leftOver = 0
        // var remainder = ("leftOver: " + leftOver)
        // var totalProfit = 0
        // var profit = ("totalProfit: " + totalProfit)
        // finalAns.push( [productName,  shopperList, remainder, profit ] )
        for( var j = 0; j <= shoppers.length - 1; j++) {
            
        }



    }

    return finalAns


    
  }
  

  
  
  // TEST CASES

  console.log(countProfit(
     [ ['Windi', 'Sepatu Stacattu', 2],
       ['Vanessa', 'Sepatu Stacattu', 3], 
       [ 'Rani', 'Sweater Uniklooh', 2] ]))
