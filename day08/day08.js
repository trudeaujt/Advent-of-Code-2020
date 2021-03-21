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
    let index = 0;

    while(!loopDetected) {
        let cur = input[index];
        if(cur === undefined) {
            break;
        } else if(cur.visited === true) {
            loopDetected = true;
        } else if(cur.op === ops.NOP) {
            ++index;
        } else if(cur.op === ops.ACC) {
            accumulator += cur.val * cur.sign;
            ++index;
        } else if(cur.op === ops.JMP) {
            index += cur.val * cur.sign;
        }
        if(index >= input.length) {
            break;
        }
        cur.visited = true;
    }
    return {accumulator, index};
}

export const problem2 = (input) => {

    for (let i = 0; i < input.length; i++) {
        if(input[i].sign !== ops.ACC) {
            let modifiedInput = input.map(code => ({...code}));
            let modifiedCode = modifiedInput[i];
            modifiedCode.op = modifiedCode.op === ops.JMP ? ops.NOP : ops.JMP;
            let result = problem1(modifiedInput)
            if((result.index) >= input.length) {
                return result.accumulator;
            }
        }
    }

}