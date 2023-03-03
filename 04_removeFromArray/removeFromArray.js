const removeFromArray = function(inputArray) {
    for (arg of arguments)
    {
        if (!['string','number'].includes(typeof arg)) continue;
        let idx = inputArray.indexOf(arg);
        if (idx < 0) continue;
        inputArray.splice(idx, 1);
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
