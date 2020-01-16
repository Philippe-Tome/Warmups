// Time to fool some archaeologists
// You are a villain trying to trap an adventuring archaeologist. Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.

// makeFakeMap(5, 5);

// // Sample outputs:

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// makeFakeMap(5, 5);

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","X"],
// ["A","A","A","A","A"]
// ];

// makeFakeMap(5, 5);

// [
// ["A","A","A","A","A"],
// ["A","A","A","X","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// var array = [[],[],[],[],[]];


// var makeFakeMap = function (arr1, arr2) {
//     var random = Math.floor(Math.random()*(arr1 - 1));
//     var random2 = Math.floor(Math.random()*(arr2 - 1))
//     for(var i = 0; i < arr1; i++){
//         for(var j = 0; j < arr2; j++) {
//             array[j].push('A');
//         }
//     }
//     array[random][random2] = 'X';
//     console.log(array);
// }

// makeFakeMap(5, 5);


//***********************************************************************************************************************

var array = [];

var makeFakeMap = function (arr1, arr2) {
    var random = Math.floor(Math.random()*(arr1 - 1));
    var random2 = Math.floor(Math.random()*(arr2 - 1))
    array = new Array(arr1).fill([])
    console.log(array);
    for(var i = 0; i < arr1; i++){
        array[i].push('A');
        // for(var j = 0; j < arr2; j++) {
        //     array[j].push('A');
        // }
    }
    array[random][random2] = 'X';
    console.log(array);
}

makeFakeMap(5, 5);