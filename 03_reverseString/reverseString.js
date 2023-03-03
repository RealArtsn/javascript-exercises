const reverseString = function(s) {
    let stringArray = s.split('');
    let reverseArray = [];
    for (let i = 0; i < s.length; i++)
    {
        reverseArray[i] = stringArray[s.length - i - 1];
    }
    return reverseArray.join('')
};

// Do not edit below this line
module.exports = reverseString;
