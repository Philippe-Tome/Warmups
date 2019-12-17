// const currentYear = 2019;
// const birthYear = 1982;

// console.log('You are either ' + (currentYear - birthYear) + ' or ' + 
// (currentYear - currentYear) + ' years old.');


// for(let i = 1; i <= 200; i++){
//     if(i % 7 == 0){
//         console.log(i);
//     }
// }

// for(let i = 0; i <= 100; i++){
//     if(i % 4 == 0){
//         console.log(i);
//     }
// }

let oddNumber = [];

for(let i = 100; i <= 200; i++){
    if(i % 2 == 1){
       oddNumber.push(i);
           for(let j = 0; j < oddNumber.length; j++)
            if(j % 2 == 0){
                console.log(oddNumber[j]);
        }
    }
}
