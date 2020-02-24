let splitDate = []
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// let odinalDate = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th']

let convertFormat = function (date) {
    date.forEach(element => {
        splitDate.push(element.split("\-"))
    });
    splitDate[0][1] = months[`${Number(splitDate[0][1])}`]
    splitDate[1][1] = months[`${Number(splitDate[1][1])}`]
    // splitDate.forEach(elem)
    if (Number(splitDate[0][2]) > 3 && Number(splitDate[0][2]) < 21) {
        splitDate[0][2] = (`${Number(splitDate[0][2]).toString()}th`);
    } else if (splitDate[0][2] === "01") {
        splitDate[0][2] = "1st"
    } else if (splitDate[0][2] === "02") {
        splitDate[0][2] = "2nd"
    } else if (splitDate[0][2] === "03") {
        splitDate[0][2] = "3rd"
    } else if (splitDate[0][2] === 21 || splitDate[0][2] === 31) {
        splitDate[0][2] = (`${splitDate[0][2]}st`);
    } else if (splitDate[0][2] === 22) {
        splitDate[0][2] = (`${splitDate[0][2]}nd`);
    } else if (splitDate[0][2] === 23) {
        splitDate[0][2] = (`${splitDate[0][2]}rd`);
    } 
    if (Number(splitDate[1][2]) > 3 && Number(splitDate[1][2]) < 21) {
        splitDate[1][2] = (`${Number(splitDate[1][2]).toString()}th`);
    } else if (splitDate[1][2] === "01") {
        splitDate[1][2] = "1st"
    } else if (splitDate[1][2] === "02") {
        splitDate[1][2] = "2nd"
    } else if (splitDate[1][2] === "03") {
        splitDate[1][2] = "3rd"
    } else if (splitDate[1][2] === 21 || splitDate[1][2] === 31) {
        splitDate[1][2] = (`${splitDate[1][2]}st`);
    } else if (splitDate[1][2] === 22) {
        splitDate[1][2] = (`${splitDate[1][2]}nd`);
    } else if (splitDate[1][2] === 23) {
        splitDate[1][2] = (`${splitDate[1][2]}rd`);
    }
    
    printDate(splitDate)
}

let printDate = function (date) {
    let printDate = []
    if (date[0][0] === date[1][0]) {    // same year
        // printDate[0] = date[0][0]
        if (date[0][1] === date[1][1]) {    // same month
            // printDate[1] = date[0][1]
            console.log(date[0][1].toString(), date[0][0])
        }
    }
    // printDate[2] = date
    // console.log(printDate)
}


convertFormat(["2016-07-05", "2016-07-04"])