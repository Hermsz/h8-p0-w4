
/*

//W4-015 - Logic Challenge: Highest Score

Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}

*/
  function highestScore (students) {

    if( students.length === 0 ) {
      return []
    }

    var finalAns = []
    topInClass = {}

    for( var i = 0; i <= students.length - 1; i++ ) {
      
      var className = students[i].class //reassign nama kelas ke variable className
      var studentScore = students[i].score //reassign score student ke variable studentScore
      var studentName = students[i].name

      // Jika tidak ada object dgn key students[i].class (a.k.a className ) eg : foxes
      if(!topInClass[className]) { 
        topInClass[className] = { // tampilkan object class tersebut
          name : "", // Karna nama adalah string assign string kosong dulu
          score : 0 // karana score adalah number assign number 0 dulu 
        }
      }
      // console.log(topInClass) ==> ini utk ngetest apakah object topInClass terpenuhi
      // tapi ini di dll looping !!!
  
      // if score di awal lebih besar dari pada score dalam object topInClass
      if(topInClass[className].score < studentScore ) { 
        topInClass[className] = {
          name : studentName, // kalau kondisi diatas terpenuhi assign nama dgn nama dgn score yg lebih tinggi
          score : studentScore // kalau kondisi diatas terpenuhi assign nilai score dgn score yg lebih tinggi
        }
        // cara lain 
        // topInClass[className].name = studentName
        // topinClass[studentScore].score = studentScore
      }
  }
  finalAns.push(topInClass)
  return finalAns
}
  
  
  // TEST CASE

  console.log()
  console.log("---Test Case 1---")
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  console.log()
  console.log("---Test Case 2---")
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // // {
  // //   foxes: { name: 'Alexander', score: 100 },
  // //   wolves: { name: 'Alisa', score: 76 },
  // //   tigers: { name: 'Viktor', score: 80 }
  // // }
  
  console.log()
  console.log("---Test Case 3---")
  console.log(highestScore([])); //{}