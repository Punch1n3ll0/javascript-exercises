const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0) return "ERROR";
    if (typeof n1 !== 'number' || typeof n2 !== 'number') return "ERROR";
    let lowerBound = Math.min(n1, n2);
    let upperBound = Math.max(n1, n2);
    let sum = 0;

    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
