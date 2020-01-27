// # Switch up
// # Write a function switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

// # switchUp("Switch caSe FoR eVery letter") --> // "sWITCH CAsE fOr EvERY LETTER"

// # Extension
// # If words are separated by spaces or underscores, change them to dashes. For example:

// # switchUp2("js_Was_created_bY BRENdan Eich") --> // "JS-wAS-CREATED-By-brenDAN-eICH"



var switchUp = function (str) {
    var switched_str = "";
    str =  str.split('');
    for(var i = 0; i < str.length; i++){
        if (str[i] == str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase()
        } else {
            str[i] = str[i].toUpperCase()
        } 
    }
    switched_str = str.join('')
    return switched_str.replace(/ /g,"-")
}

console.log(switchUp("sWITCH CAsE fOr EvERY LETTER"));

