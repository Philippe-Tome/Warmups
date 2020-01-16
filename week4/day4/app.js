// Write a program that creates a string that represents an 8×4 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
// Extension
// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable symbol that generates the board using the specified character instead.

// var str = `# # # # # # # #`;
// var str2 = ` # # # # # # # #`;

// var printPattern = function (x, y) {
//     for(var i = 0; i < y; i++){
//         if(i % 2 === 0){
//             console.log(str)
//         } else {
//             console.log(str2)
//         }
//     }
// }

// printPattern(0, 4)

// #####################################################################

var arr = ['#'];
var arr2 = [' #'];


var printPattern = function (x, y) {
    // X print
    if(x > 1){
        for(var i = 2; i <= x; i++){
            arr.push('#');
            arr2.push('#');
        }
    }
    // Y print
    for(var j = 0; j < y; j++){
        if(j % 2 === 0){
            console.log(arr.toString().replace(/,/g, ' '))
        } else {
            console.log(arr2.toString().replace(/,/g, ' '))
        }
    }
}

printPattern(2, 2)