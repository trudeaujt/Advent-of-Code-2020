export const parseInput = (input) => input.split('\n')
.map(function (line) {
    let [op, compound] = line.split(' ');
    return {
        op:      op,
        sign:    compound.substring(0, 1) === '-' ? -1 : 1,
        val:     compound.substring(1),
        visited: false,
        flipped: false
    }
});

const ops = {
    ACC : "acc",
    JMP : "jmp",
    NOP : "nop"
}

export const problem1 = (input) => {
    let accumulator = 0;
    let loopDetected = false;
    let i = 0;

    while(!loopDetected) {
        let cur = input[i];

        if(cur.visited === true) {
            loopDetected = true;
        } else if(cur.op === ops.NOP) {
            ++i;
        } else if(cur.op === ops.ACC) {
            accumulator += cur.val * cur.sign;
            ++i;
        } else if(cur.op === ops.JMP) {
            i += cur.val * cur.sign;
        }
        cur.visited = true;
    }
    return accumulator;
}

export const problem2 = (input) => {



}