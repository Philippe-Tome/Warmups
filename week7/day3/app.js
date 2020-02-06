// Filter Out the Geese
// Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.


var removeGeeseWordIndex = []

var gooseFilter = function (array) {
    for (i = 0; i < array.length; i++) {
        if (geese.indexOf(array[i]) != -1) {
            removeGeeseWordIndex.push(i)
        }
    }
    gooseRemove(array);
    console.log(array);
}

var gooseRemove = function (array) {
    for (var j = removeGeeseWordIndex.length -1; j >= 0; j-- ) {
    array.splice(removeGeeseWordIndex[j], 1)
    }
}


gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])



// var tempArray = testArray.filter(function(item) {
//     return !geese.includes(item);
// });
// console.log(tempArray)