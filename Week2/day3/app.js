// # Grandma
// Write a Deaf Grandma program.
// Whatever you say to grandma (whatever you type in), she should respond with
// > HUH?!  SPEAK UP, SONNY!
// unless you shout it (type in all capitals).
// If you shout, she can hear you (or at least she thinks so) and yells back
// > NO, NOT SINCE 1938!
// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.
// You can't stop talking to grandma until you shout BYE.
// ## Extensions
// Please do some research into Git and Github as I will be doing an intro on it after this mornings warmup


function isUpperCase(str){
    return str === str.toUpperCase();
}

function getRandomArbitrary(min, max) {
    return(Math.floor(Math.random() * (max - min) + min));
}

function deafGrandma(){
    do{
        var input = prompt('Say something');
        if(isUpperCase(input) == 0){
            console.log(`HUH? SPEAK UP, SONNY!`);
        } else {
            console.log(`NO, NOT SINCE ${(getRandomArbitrary(1930, 1950))}!`);
        }
    } while(input !== 'BYE')
}

deafGrandma();

