export const parseInput = (input) => input.split('\n')
    .map(function (line) {
        let [op, compound] = line.split(' ');
        return {
            op: op,
            sign: compound.substring(0, 1) === '-' ? -1 : 1,
            val: compound.substring(1),
            visited: false
        }
    });

const ops = {
    ACC: "acc",
    JMP: "jmp",
    NOP: "nop"
}

const run = (input) => {

    let accumulator = 0;
    let loopDetected = false;
    let index = 0;

    while (!loopDetected) {
        let cur = input[index];

        if (cur === undefined) {
            if (index > 10)
                debugger;
            return {accumulator, index};
        } else if (cur.visited === true) {
            loopDetected = true;
            break;
        }

        cur.visited = true;

        switch (cur.op) {
            case ops.NOP:
                ++index;
                break;
            case ops.ACC:
                accumulator += cur.val * cur.sign;
                ++index;
                break;
            case ops.JMP:
                index += cur.val * cur.sign;
                break;
        }

    }
    return {accumulator, index};

}

export const problem1 = (input) => {

    const result = run(input);
    return result.accumulator;

}

export const problem2 = (input) => {

    for (let i = 0; i < input.length; i++) {
        if (input[i].op !== ops.ACC) {
            let modifiedInput = input.map(code => ({...code}));
            let modifiedCode = modifiedInput[i];
            modifiedCode.op = modifiedCode.op === ops.JMP ? ops.NOP : ops.JMP;
            let result = run(modifiedInput)

            if ((result.index) >= input.length) {
                return result.accumulator;
            }
        }
    }

}