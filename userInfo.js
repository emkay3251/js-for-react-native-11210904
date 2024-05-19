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

const sampleNames = ["Alice", "Bob", "Charlie"];
const transformedNumbers = manipulateArray([1, 2, 3]);
const modifiedStrings = transformStringArray(sampleNames, transformedNumbers);
const userProfiles = generateUserProfiles(sampleNames, modifiedStrings);
console.log(userProfiles);

module.exports = {
    manipulateArray,
    transformStringArray,
    generateUserProfiles
};
