// ************ A wolf in sheep's clothing ************
// You are a sheep farmer, and are plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the end of the queue/array: [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples:

// warnTheSheep(["sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"
// warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) === "Oi! Sheep number 5! You are about to be eaten by a wolf!"
// warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep", "sheep", "sheep"]) === "Oi! Sheep number 4! You are about to be eaten by a wolf!"


var sheep = ["sheep", "sheep", "sheep", "sheep", "sheep", "sheep"];
var wolfPos = Math.floor(Math.random() * (sheep.length + 1));
console.log(wolfPos);

function warn(){
    sheep.splice(wolfPos, 0, 'Wolf');
    // sheep[wolfPos] = 'Wolf';
    console.log(sheep);
    var warnSheep = (sheep.length - (sheep.indexOf("Wolf") + 1));
    if(warnSheep !== 0) {
        console.log(`Oi! Sheep number ${warnSheep}! You are about the be eaten by a wolf!`);
    } else {
        console.log(`Pls go away and stop eating my sheep`);
    }
}

warn();
