module.exports = function toReadable (number) {
    let numbWordsArr = [['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'],
    ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']];

if (number < 15) {
    return numbWordsArr[0][number]
} else if (number < 20) {
    return numbWordsArr[1][Math.floor(number - 10) - 2] + 'teen';
} else if (number < 100) {
    let str = numbWordsArr[1][Math.floor(number / 10) - 2] + 'ty';
    return !(number % 10) ? str : str + " " + numbWordsArr[0][number % 10]
} else {
    let str = numbWordsArr[0][Math.floor(number / 100)] + ' ' + 'hundred'
    return !(number % 100) ? str :
        str + " " + toReadable(number % 100)
}
};
