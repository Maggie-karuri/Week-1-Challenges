const promptMessage = "Enter marks: ";
let marksEntered = prompt(promptMessage);
let marks = parseFloat(marksEntered);
let grade = studentGrade(marks);

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

function calculateGrade() {
    const gradeResult = document.getElementById('gradeResult');
    gradeResult.textContent = `This student's grade is: ${grade}`;
>>>>>>> origin/main
}
