
// // 1. Create an array of the days of the week
// // Create a variable named days_of_the_week as an array of the following:
// // Monday
// // Tuesday
// // Wednesday
// // Thursday
// // Friday
// // Saturday
// // Sunday
// let daysOfTheWeek = [
//     'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
// ];

// 2. My calendar says the first day is Sunday...
// Remove Sunday from the last postion and move it to the first position. Use array methods.

daysOfTheWeek.unshift(daysOfTheWeek.pop())  // From Justin. Pop and Push straight away.

daysOfTheWeek.splice(0, 0, daysOfTheWeek[6])
daysOfTheWeek.splice(7,1)
console.log(daysOfTheWeek);


// 3. Create a new array of the days of the week:
// The first inner array should be the weekdays
// The second inner array should be the weekend days
let daysOfTheWeek2 = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ['Saturday', 'Sunday']
];

// 4. Remove either the weekdays or the weekends
// Your choice...

daysOfTheWeek2[5].splice(0,2);
console.log(daysOfTheWeek2);

// 5. Sort the remaining days alphabetically
daysOfTheWeek2.sort();

