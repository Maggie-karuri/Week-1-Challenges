function speedDetector(speed) {
    // definitions
    const allowedSpeedLimit = 70;
    const speedingDemeritRange = 5;
    const demeritPoints = 1;
    // to display results
    const speedResults = document.getElementById('speedResults');
    // condition to check if the speed is below the limit
    if (speed <= allowedSpeedLimit) {
        // return value if condition is met
        return("Ok");
    }
    // condition to calculate if the speed is not within the limit: 70
    // if exceeded: demerit points are calculated
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
    // Convert the entered speed to a floating value
    const speed = parseFloat(speedEntered);

    speedResults.textContent = speedDetector(speed);
}
