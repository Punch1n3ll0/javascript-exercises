const sumAll = function(num1, num2) {
    // Check if inputs are actually numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    // Check if numbers are whole and positive
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    
    let smaller = Math.min(num1, num2);
    let bigger = Math.max(num1, num2);

    let sum = 0;  // Initialize sum before the loop
    for (let i = smaller; i <= bigger; i++) {
        sum += i; 
    }
    
    return sum;  // Return the sum after the loop
};

// Do not edit below this line
module.exports = sumAll;





