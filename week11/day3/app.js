let conversionTable = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
}

let strNumber = ""
let romanNumber = ""

function convNumber(number) {
    strNumber = number.toString()
        if(strNumber.length - 1 < 5 ) {
            for(i = 0; i < strNumber[strNumber.length - 1]; i++) {
                romanNumber = `${ romanNumber }${ conversionTable["1"] }`
            }
        }
        if(strNumber.length - 2 < 50) {
            for(i = 0; i < strNumber[strNumber.length - 2]; i++) {
                romanNumber = `${ conversionTable["10"]}${ romanNumber }`
            }
        }
    console.log(romanNumber) 
}

convNumber(23)