// var num = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

// var count = {}

// var oddInteger = function (array) {
//     counter = 0
//     for(var i = 0; i < array.length; i++) {
//         if(typeof count[i] === "undefined"){
//             // console.log('test undefined')
//             count[array[i]] = i
//         }// else {
//         //     count[array[i]] += 1;
//         // }
//     }
//     return count
// }

// console.log(oddInteger(num));

// working solution:
var result = {};
var num = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

num.reduce(function(acc, curr) {
    if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
    } else {
        acc[curr] += 1;
    }
    return acc;
}, result);
////////////////////////////////////////////////////////



