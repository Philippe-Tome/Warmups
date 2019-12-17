// // 1. Drinking age?
// // Ask the user for their age. -Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
// // If age is less than 18, print an appropriate message.
// // If the age is equal to or over 18, print a different message.

// const age = Number(prompt('What is your age?')); 
// if(age >== 18){
//     alert('Welcome inside!');
// } else {
//     alert('Come back when you are above 18');
// }

//===============================================================================================================================================================================

// //2. Air Conditioning
// // Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
// // If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
// // If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
// // If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

// const actualTemp = Number(prompt('What temperature is it?'));
// const airCondFunctional = prompt('Is the Air Conditionning fucntional');
// const wishedTtemp = Number(prompt('What temperature do you wish?'));

// if(airCondFunctional === 'yes' && actualTemp > wishedTtemp){
//     alert('Turn on the A/C Please')
// } else if (airCondFunctional === 'no' && actualTemp > wishedTtemp){
//     alert(`Fix the A/C now! It's hot!`);
// } else {
//     alert(`Fix the A/C whenever you have the chance... It's cool...`)
// }

//===============================================================================================================================================================================

// 3. Melbourne Suburbs
// Create a program that asks what suburbs you live in.
// Depending on the answer, print an appropriate response of your choosing

const subList = ['Brighton', 'Caulfield', 'Elwood', 'South Yarra']
const whatSuburb = prompt(`What suburb do you live in?`);

if (whatSuburb === `Saint Kilda`){
    alert(`That's exaclty where I live`);
}   else if(subList.indexOf(whatSuburb) === -1){
    alert(`That's far`);
}   else if(subList.indexOf(whatSuburb) >= 0){
    alert(`That's close to where I live!`);
}
