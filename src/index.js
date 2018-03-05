module.exports = function getZerosCount(number) {
    let zeroCount = 0;
    while(number > 0) {
        number = Math.floor(number  / 5);
        zeroCount += number;
    }
    return zeroCount;
};
