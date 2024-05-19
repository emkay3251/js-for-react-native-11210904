// arrayManipulation.js

// Student ID: 11210904

/**
 * Task 1: Manipulate an array of numbers
 * - Takes an array of numbers as an argument.
 * - Returns a new array where each even number is squared and each odd number is tripled.
 */
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

/**
 * Task 2: Transform an array of strings based on corresponding numbers
 * - Takes two arrays as arguments:
 *   - An array of strings.
 *   - An array of numbers processed by manipulateArray.
 * - Modifies each string based on its corresponding number:
 *   - Capitalizes the entire string if the number is even.
 *   - Converts the string to lowercase if the number is odd.
 */
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

/**
 * Task 3: Generate user profiles
 * - Takes an array of names and the array of modified names from Task 2.
 * - Returns an array of objects, each containing originalName, modifiedName, and id (auto-incremented starting from 1).
 */
function generateUserProfiles(names, modifiedNames) {
    if (!Array.isArray(names) || !Array.isArray(modifiedNames) || names.length !== modifiedNames.length) {
        throw new Error('Both arguments must be arrays of the same length');
    }

    return names.map((name, idx) => ({
        originalName: name,
        modifiedName: modifiedNames[idx],
        id: idx + 1
    }));
}

// Example usage:
const sampleNames = ["Alice", "Bob", "Charlie"];
const transformedNumbers = manipulateArray([1, 2, 3]);
const modifiedStrings = transformStringArray(sampleNames, transformedNumbers);
const userProfiles = generateUserProfiles(sampleNames, modifiedStrings);
console.log(userProfiles);
// Output: [
//   { originalName: 'Alice', modifiedName: 'alice', id: 1 },
//   { originalName: 'Bob', modifiedName: 'BOB', id: 2 },
//   { originalName: 'Charlie', modifiedName: 'charlie', id: 3 }
// ]

// Export the functions for use in other modules
module.exports = {
    manipulateArray,
    transformStringArray,
    generateUserProfiles
};
