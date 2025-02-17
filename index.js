// TASK 1
const findAndSlice = function (arr, value) {
    console.log(
        (newArr =
            arr.indexOf(value) !== -1 ? arr.slice(arr.indexOf(value)) : [])
    );
};

// findAndSlice([1, 2, 3, 4, 5], 3); // [3, 4, 5]
// findAndSlice(['a', 'b', 'c'], 'b'); // ['b', 'c']
// findAndSlice([10, 20, 30], 50); // []

// TASK 2
function removeItems(arr, startIndex, deleteCount) {
    arr.splice(startIndex, deleteCount);
    return arr;
}

// removeItems([1, 2, 3, 4, 5], 2, 2); // [1, 2, 5]
// removeItems(['apple', 'banana', 'cherry'], 1, 1); // ['apple','cherry']
// removeItems([10, 20, 30], 0, 3); // []

// TASK 3
function mergeUnique(arr1, arr2) {
    const uniqueUnion = [];
    for (const element of [...arr1, ...arr2]) {
        !uniqueUnion.includes(element) ? uniqueUnion.push(element) : '';
    }
    return uniqueUnion;
}

// mergeUnique([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
// mergeUnique(['a', 'b'], ['b', 'c', 'd']); // ['a', 'b', 'c', 'd']
// mergeUnique([], [1, 2]); // [1, 2]

// TASK 4
function swapElements(arr, index1, index2) {
    const firstEl = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = firstEl;
    return arr;
}

// swapElements([1, 2, 3, 4], 1, 3); // [1, 4, 3, 2]
// swapElements(['a', 'b', 'c'], 0, 2); // ['c', 'b', 'a']
// swapElements([10, 20, 30], 1, 1); // [10, 20, 30]

// TASK 5
const splitArray = function (arr, size) {
    const subArrays = [];
    for (let index = 0; index < arr.length; index += 1) {
        subArrays.push(arr.splice(0, size));

        if (arr.length < size) subArrays.push(arr.splice(0));
    }
    return subArrays;
};

// splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4);

// TASK 6
function queueOperations(arr, element) {
    arr.push(element);
    arr.shift();
    return arr;
}

// queueOperations([1, 2, 3], 4); // [2, 3, 4]
// queueOperations(['apple', 'banana'], 'cherry'); // ['banana','cherry']
// queueOperations([10], 20); // [20]

// TASK 7
function reverseArray(arr) {
    const reversedArray = [];
    while (arr.length > 0) {
        reversedArray.push(arr.pop());
    }

    return reversedArray;
}

// reverseArray([1, 2, 3, 4]); // [4, 3, 2, 1]
// reverseArray(['a', 'b', 'c']); // ['c', 'b', 'a']
// reverseArray([10, 20, 30, 40]); // [40, 30, 20, 10]
