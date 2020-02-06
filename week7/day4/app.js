var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];
    
var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];


var treasureFinder = function (map) {
    var result = []
    for (var i = 0; i < map.length; i++){
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] === "X") {
                result.push(i, j)
            }
        }
    }
    return result;
}


console.log(treasureFinder(map1));
console.log(treasureFinder(map2));
console.log(treasureFinder(map3));
console.log(treasureFinder(map4));

