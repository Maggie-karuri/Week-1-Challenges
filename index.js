<<<<<<< HEAD
function speedDetector(speed) {
    const allowedSpeedLimit = 70;
    const speedingDemeritRange = 5;
    const demeritPoints = 1;
    const speedResults = document.getElementById('speedResults');
    
    if (speed <= allowedSpeedLimit) {
        return("Ok");
    }
    else {
        const speedingRange = speed - allowedSpeedLimit;
        const accumulatedDemerit = Math.floor(speedingRange / speedingDemeritRange);
        if (accumulatedDemerit > 12) {
            return(`You have: ${accumulatedDemerit} points\nLicense Suspended!`)
        } 
        else {
            return("Demerit points: " + accumulatedDemerit);
        }
        
    }
}
function calculateSpeed() {
    const speedEntered = document.getElementById('speedInput').value; 
    const speed = parseFloat(speedEntered);

    speedResults.textContent = speedDetector(speed);
=======
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
