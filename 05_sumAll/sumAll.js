const sumAll = function(a, b) {
    let args = [a, b].sort();
    if ((typeof args[0] !== 'number' || typeof args[1] !== 'number') || (args[0] < 0 || args[1] < 0))
    {
        return 'ERROR';
    }
    let sum = 0;
    for (let i = args[0]; i <= args[1]; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
