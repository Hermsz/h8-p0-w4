

var data = []

var array = [
  [1, "imam", 21, false, "bakso"],
  [2, "tulus", 22, true, "nasi goreng"],
  [3, "yoga", 23, false, "pecel ayam"]
];

for (var i = 0; i < array.length; i++) {
  var object = {};
  for (var j = 0; j < array[i].length; j++) {
  object.no = array[i][0];
  object.name = array[i][1];
  object.age = array[i][2];
  object.available = array[i][3];
  object.mafa = array[i][4];
  }

  data.push(object);
}
console.log(data);
