It belongs in a museum!

You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

// Sample output:

treasureFinder(map1) // should return [2, 2];
You can assume that the size of the treasure map will be the same.

Some additional maps:
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