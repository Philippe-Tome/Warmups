
var fs = require("fs");
var textByline = fs.readFileSync('secret.txt').toString().split("\n");


key = textByline.shift().split(',')
transformed_data = {}

textByline.forEach(item => {
    elem = item.split(',')
    inner_array_decoration = []
    transformed_inner = {}
    transformed_inner[key[1]] = elem[1]
    transformed_inner["unitPrice"] = elem[2]
    transformed_inner[key[3]] = elem[3]
    inner_array_decoration.push(transformed_inner)
    transformed_data[elem[0]] = inner_array_decoration
})

console.log(transformed_data)