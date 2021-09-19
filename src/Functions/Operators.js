const operator = ['+', '-', '/', '*']

/**
 * switch case for handling brackets and produce final string
 * @param {string} data Key press value 
 * @param {string} result Latest final result string
 * @returns {string} Value to be added in final string
 */
export const OperatorFunction = (data, result) => {
    switch (data) {
        case '(':
            if (operator.includes(result.slice(-1)) || result.slice(-1) === '')
                return result.toString() + '(';
            else if (result.slice(-1) === '(')
                return result.toString();
            else
                return result.toString() + '*('
        case ')':
            if (operator.includes(result.slice(-1)) || result.slice(-1) === '(') {
                alert('Use any number before closing the bracket')
                return result.toString();
            }
            else if (bracketCounter(result) === 0) {
                alert('Open first before closing the bracket')
                return result.toString();
            } else {
                return result.toString() + ')'
            }
        case '.':
            var count = 0
            var arr = result.split('')
            for (let i = arr.length; i >= 0; i--) {
                if (arr[i] === '.')
                    count++
                else if (operator.includes(arr[i]))
                    break;
            }
            if (operator.includes(result.slice(-1)) || result.slice(-1) === '(' || result.slice(-1) === '') {
                return result.toString() + '0.';
            }
            else if (result.slice(-1) === ')')
                return result.toString() + '*0.';
            else if (count > 0) {
                return result.toString();
            }
            else {
                return result.toString() + '.'
            }
        default:
            if (result.slice(-1) === ')' && !operator.includes(data)) {
                return result.toString() + '*' + data.toString();
            }
            else if (result === '' && (data === '*' || data === '/')) {
                alert('Insert number first')
                return result.toString();
            }
            else if (result.slice(-1) === '(' && (data === '*' || data === '/')) {
                return result.toString();
            } else {
                return result.toString() + data.toString()
            }
    }
};

/**
 * Count the Open and Closed brackets in the equation
 * @param {string} result Equation String
 * @returns {number} Return number shows the amount of brackets Opened/Closed 
 */
export const bracketCounter = (result) => {
    let num = 0;
    let array = result.split("");

    /* Checking Condition for '(' and ')' */
    array.forEach(arr => {
        if (arr === '(') {
            num++
        } else if (arr === ')')
            num--
    });

    return num;
}