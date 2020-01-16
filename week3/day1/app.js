var input = prompt("What is your input to test?");
var evenMiddleLetterIndex = [(Math.floor(input.length / 2) - 1), (Math.floor(input.length / 2))];
var oddMiddleLetterIndex = Math.floor(input.length / 2);

var checkEvenPal = function (str) {
    console.log(`entered`)
    if (str[evenMiddleLetterIndex[0]] === str[evenMiddleLetterIndex[1]]) {
        evenMiddleLetterIndex[0] -= 1;
        evenMiddleLetterIndex[1] += 1;
            if (!(evenMiddleLetterIndex[0] < 0) && !(evenMiddleLetterIndex[1] > str.length)) {
                checkEvenPal();
            } else if((evenMiddleLetterIndex[0] = 0) && !(evenMiddleLetterIndex[1] = (str.length - 1))) {
                console.log(`This is a palindrome!`)
            }
    }
}


var palindromeTest = function(str) {
    if (str.length % 2 === 0) {
        console.log (evenMiddleLetterIndex);
        console.log(`input lenght is even`);
        checkEvenPal(str);
        
    } else {
        console.log(oddMiddleLetterIndex);
        console.log(`input lenght is odd`);
    }
}

palindromeTest(input);
