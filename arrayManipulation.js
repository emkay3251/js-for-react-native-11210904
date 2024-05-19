function manipulateArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array of numbers');
    }

    return arr.map(element => {
        if (typeof element !== 'number') {
            throw new Error('Array must contain only numbers');
        }
        return element % 2 === 0 ? element * element : element * 3;
    });
}

const sampleArray = [1, 2, 3, 4, 5];
const transformedArray = manipulateArray(sampleArray);
console.log(transformedArray);
module.exports = manipulateArray;

function manipulateArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array of numbers');
    }

    return arr.map(element => {
        if (typeof element !== 'number') {
            throw new Error('Array must contain only numbers');
        }
        return element % 2 === 0 ? element * element : element * 3;
    });
}

function transformStringArray(strings, numbers) {
    if (!Array.isArray(strings) || !Array.isArray(numbers) || strings.length !== numbers.length) {
        throw new Error('Both arguments must be arrays of the same length');
    }

    return strings.map((str, idx) => {
        const num = numbers[idx];
        if (typeof num !== 'number') {
            throw new Error('Second argument must be an array of numbers');
        }

        return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

const sampleStrings = ["Hello", "World", "Node.js"];
const processedNums = manipulateArray([1, 2, 3]);
const modifiedStrings = transformStringArray(sampleStrings, processedNums);
console.log(modifiedStrings); 
module.exports = {
    manipulateArray,
    transformStringArray
};
