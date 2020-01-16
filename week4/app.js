// Exam Results
// A group of students sitting exams every quarter score the following results throughout the year:

// var exam_results = {
//   Greg: {
//     Biology: [90, 75, 23, 60],
//     Maths: [100, 80, 30, 45]
//   },
//   Sarah: {
//     Biology: [70, 65, 80, 95],
//     Maths: [80, 77, 64, 90]
//   },
//   Thomas: {
//     Biology: [40, 60, 75, 98],
//     Maths: [36, 50, 67, 82]
//   }
// }
// Write the code to find:

// How much Greg scored in their first Biology exam.
// How much Sarah scored in their last Maths exam.
// The highest score Thomas achieved in Maths throughout the year.
// The quarter that Greg achieved his lowest score in Biology in the year.
// Extension:
// The average of Sarah's scores in Maths for the whole year.


var exam_results = {
  Greg: {
    Biology: [90, 75, 23, 60],
    Maths: [100, 80, 30, 45]
  },
  Sarah: {
    Biology: [70, 65, 80, 95],
    Maths: [80, 77, 64, 90]
  },
  Thomas: {
    Biology: [40, 60, 75, 98],
    Maths: [36, 50, 67, 82]
  }
}

var gregFirstBiologyExam = exam_results.Greg.Biology[0];
console.log(`Greg's first biology exam's score was ${gregFirstBiologyExam}`);

var sarahLastMathExam = exam_results.Sarah.Maths[3];
console.log(`Sarah's last maths exam's score was ${sarahLastMathExam}`);

var thomasHighestMatchScore = exam_results.Thomas.Maths.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(`Thomas higehst Maths's score was ${thomasHighestMatchScore}`);

var gregMinScoreBiology = exam_results.Greg.Biology.reduce(function(a, b) {
    return Math.min(a, b);
});
console.log(`Greg's lowest score in Biology this year was ${gregMinScoreBiology}`);

var sarahMathsAverageScore = (exam_results.Sarah.Maths.reduce((a, b) => a + b, 0))/exam_results.Sarah.Maths.length;
console.log(`Sarah's Maths average score was ${sarahMathsAverageScore}`);

