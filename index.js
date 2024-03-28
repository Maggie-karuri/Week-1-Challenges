// prompts user to enter marks
const promptMessage = "Enter marks: ";
let marksEntered = prompt(promptMessage);
// convert the marks entered to a floating value
let marks = parseFloat(marksEntered);
// calls the function to determine the grade
let grade = studentGrade(marks);

// condition to place the marks within the grading system.
function studentGrade(marks) {
    if (marks > 79 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else if (marks >= 0 && marks <= 39) {
        return 'E';
    } else if (marks < 0 || marks > 100) {
        return 'Invalid!';
    }
}
// calculation of the grade results.
function calculateGrade() {
    const gradeResult = document.getElementById('gradeResult');
    gradeResult.textContent = `This student's grade is: ${grade}`;

}
