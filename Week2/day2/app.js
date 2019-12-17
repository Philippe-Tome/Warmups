// Mini Golf
// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and console.log the total for each player and their combined total.

const bob = [3, 2, 6, 11, 9, 2, 6, 9, 10]
const jimbo =  [5, 12, 9, 22, 13, 7, 16, 10, 11]
const fish = [2, 2, 4, 5, 4, 3, 6, 4, 1]
const par = [3, 4, 5, 5, 3, 3, 4, 3, 5]

const totalScore = function (scoreName){
    return scoreName.reduce(function(a, b){
        return a + b;
    }, 0);
}


console.log(`Bob's total is ${totalScore(bob)}`);
console.log(`Jimbo's total is ${totalScore(jimbo)}`);
console.log(`Fish's total is ${totalScore(fish)}`);
console.log(`The course par is ${totalScore(par)}`);
console.log(`The combined total is ${(totalScore(bob)) + (totalScore(jimbo)) + (totalScore(fish))}`);


// Extension
// Now work out each golfers round compared to the course par.




// Ninja Extension
// Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.