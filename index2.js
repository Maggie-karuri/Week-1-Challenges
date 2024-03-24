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
}
