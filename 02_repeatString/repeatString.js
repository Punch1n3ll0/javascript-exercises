function repeatString(str, num) {
    // Input validation
    if (typeof str !== 'string' || typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        return "ERROR"
    }

    return str.repeat(num);
}
// Do not edit below this line
module.exports = repeatString;
