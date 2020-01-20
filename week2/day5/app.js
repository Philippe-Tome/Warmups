// CoinFlip
// The Ultimate Life Decider
// Never make a decision again!

// Create a file called decider.js
// Write a function called coinFlip that will console.log HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.


// Head = true; Tails = false:
var coinSide = null;
var flipCoinBtn = document.querySelector('.flipCoin')
var headCounter = 0;
var tailCounter = 0;

function headTail(){
    var flip = Math.floor(Math.random() * 2);
    document.querySelector('.heads').textContent = `Head score is: ${headCounter}`;
    document.querySelector('.tails').textContent = `Tail score is: ${tailCounter}`;
    if(flip) {
        headCounter += 1;
        console.log(`It's HEADS! ${headCounter}`);
        document.querySelector('.heads').textContent = `Head score is: ${headCounter}`;
        document.querySelector('.winner').textContent = ``;
        if(headCounter === 5){
            console.log(`HEADS IS THE WINNER`);
            document.querySelector('.winner').textContent = `The winner is HEADS!`;
            headCounter = 0;
            tailCounter = 0;
            console.log(headCounter);
            console.log(tailCounter);
        }
    } else {
        tailCounter += 1;
        console.log(`It's TAILS! ${tailCounter}`);
        document.querySelector('.tails').textContent = `Tail score is: ${tailCounter}`;
        document.querySelector('.winner').textContent = ``;
        if(tailCounter === 5){
            console.log(`TAILS IS THE WINNER`);
            document.querySelector('.winner').textContent = `The winner is TAILS!`;
            headCounter = 0;
            tailCounter = 0;
            console.log(headCounter);
            console.log(tailCounter);
        }
    }
}

flipCoinBtn.addEventListener('click', headTail);
