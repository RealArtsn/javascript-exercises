const palindromes = function (inputString) {
    // remove punctuation
    PUNCTUATION = ['.',',','!', ' ']
    let filteredCharArray = [];
    for (let i = 0; i < inputString.length; i++)
    {
        if (PUNCTUATION.includes(inputString[i])) continue;
        filteredCharArray.unshift(inputString[i].toLowerCase());
    }
    // check equality from front and back until meet in middle
    for (let i = 0; i < (filteredCharArray.length / 2); i++)
    {
        if (filteredCharArray[i] !== filteredCharArray[filteredCharArray.length - 1 - i])
        {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
