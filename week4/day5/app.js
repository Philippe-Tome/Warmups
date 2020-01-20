// can you break the secret code?
// Write a program to decode this message:

// NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.

// This is a form of cryptography known as the Caesar Ciper. It has a shift parameter of 3.

// The alphabet is normally:

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// The alphabet with the shift parameter of 3 is now as follows:

// DEFGHIJKLMNOPQRSTUVWXYZABC
// which means if the original message is HELLO. The encrypted message will be KHOOR

// H -> K
// E -> H
// L -> O
// L -> O
// O -> R
// decode the second secret message:
// ERQXV ILIWHHQ PLQXWHV EUHDN

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var decrypt = function (secret) {
    var secretArray = Array.from(secret);
    var discoveredSecretIndex = [];
    var discoveredSecretArray = [];
    for(var i = 0; i < secretArray.length; i++) {
        discoveredSecretIndex.push(alphabet.indexOf(secretArray[i]) - 3);
        if(discoveredSecretIndex[i] < 0 ){
            discoveredSecretIndex[i] += 26;
        }
    }
    for(var j = 0; j < discoveredSecretIndex.length; j++){
        discoveredSecretArray.push(alphabet[(discoveredSecretIndex[j])]);
    }
    console.log(secretArray)
    console.log(discoveredSecretIndex)
    console.log(discoveredSecretArray.join(''))
    console.log(discoveredSecretArray)
}



decrypt("ERQXV ILIWHHQ PLQXWHV EUHDN");
decrypt("DEFGHIJKLMNOPQRSTUVWXYZABC");