let message = "This is a test!"

let encrypt = function (message, n) {
    let oddStr = ''
    let evenStr = ''
    let encryptedMessage = ''
    for(let i = 1; i < _.size(message) - 1; i += 2) {
        oddStr += message[i]
    }
    for(let j = 0; j < _.size(message) - 1; j += 2) {
        evenStr += message[j]
    }
    n--
    encryptedMessage = oddStr + evenStr + message[message.length - 1]
    if (n === 0) {
        // console.log(encryptedMessage)
        return encryptedMessage
    } else {
        return encrypt(encryptedMessage, n)
    }
}

console.log(encrypt(message, 1))
console.log(encrypt(message, 2))
// encrypt(message, 3)
// encrypt(message, 4)
