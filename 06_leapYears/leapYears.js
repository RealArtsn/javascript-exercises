function isDivisible(n, d)
{
    return !(n % d);
}

const leapYears = function(year) {
    if (!isDivisible(year, 4)) return false;
    if (isDivisible(year, 100) && !isDivisible(year, 400)) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
