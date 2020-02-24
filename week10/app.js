let qs = "?title=jaws&apikey=123456&page=5"
let strObj = {}

let queryStringToObject = function (qs) {
    strObj.title = (qs.match(/=([^0-9]*)\&/g))
    strObj.title = strObj.title.pop()
    strObj.title = strObj.title.slice(0, -1)
    strObj.title = strObj.title.slice(1)
    
    console.log(strObj)
}



queryStringToObject(qs)



// var str = "The rain in SPAIN stays mainly in the plain";
// var res = str.match(/ain/g);