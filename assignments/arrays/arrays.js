//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
//document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

//Activity 2 - Map
const grades = ['A', 'B', 'A'];

function gradesNumeric(grade) {
    let point = 0;
    if (grade === 'A') {
        point = 4;
    } else if (grade === 'B') {
        point = 3;
    }
    return point;
}

const gpaPoints = grades.map(gradesNumeric);

console.log("gpa points: " + gpaPoints);

//activity 3 - Reduce

const gpa_cal = gpaPoints.reduce((total, item) => {
    return (total + item);
}, 0);
const gpa = gpa_cal / gpaPoints.length;

console.log("GPA Score: " + gpa)