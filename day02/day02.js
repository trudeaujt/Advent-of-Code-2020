//Array format: match, first index, second index, char, string
const regExp = /(\d+).(\d+).(\w)..(\w*)/;
//Array offset: A 1 refers to the first index, and so on.
const offset = 1;

Number.prototype.inRange = function (a, b) {
    return this >= a && this <= b;
};

function xor (a, b, char) {
    return (a === char && b !== char) || (b === char && a !== char)
}

export const problem1 = (input) => {
    return input.filter(x => {
        x = regExp.exec(x);
        return (x[4].split(x[3]).length - 1).inRange(x[1], x[2]);
    }).length;
}

export const problem2 = (input) => {
    return input.filter(x => {
        x = regExp.exec(x);
        return xor(x[4].charAt(x[1] - offset), x[4].charAt(x[2] - offset), x[3]);
    }).length;
}