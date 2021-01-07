const updatePos = {
    B: (pos) => pos[0] = Math.ceil ((pos[0] + pos[1]) / 2),
    F: (pos) => pos[1] = Math.floor((pos[0] + pos[1]) / 2),
    R: (pos) => pos[2] = Math.ceil ((pos[2] + pos[3]) / 2),
    L: (pos) => pos[3] = Math.floor((pos[2] + pos[3]) / 2)
}

const getIDs = (tickets) => {
    return [...tickets].map(ticket => {
        let pos = [0, 127, 0, 7];
        [...ticket].forEach(c => updatePos[c](pos));
        return pos[0] * 8 + pos[2];
    });
}

Array.prototype.missingNumber = function() {
    this.sort((a, b) => a - b);
    let min = this[0];
    for(let i = 0; i < this.length; ++i) {
        if(this[i] !== i + min) 
            return this[i] - 1;
    }
    return null;
}

export const problem1 = (input) => {
    return Math.max(...getIDs(input));
}

export const problem2 = (input) => {
    return getIDs(input).missingNumber();
}