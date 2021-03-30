const parseInput = (string) => {
    let adapters = string.split("\n")
        .map(s => Number(s));

    //The charging outlet has an effective rating of 0 jolts
    adapters.push(0);

    adapters.sort((a, b) => a - b);
    //your device's built-in adapter is always 3 higher than the highest adapter
    adapters.push(adapters[adapters.length - 1] + 3);

    return adapters;
}

export const problem1 = (inputString) => {
    const adapters = parseInput(inputString);

    let result = { ones: 0, threes: 0 };

    for (let i = 0; i < adapters.length; i++) {
        const difference = adapters[i + 1] - adapters[i];
        if(difference === 1)
            result.ones++;
        else if (difference === 3)
            result.threes++;
    }

    return result.ones * result.threes;

}

const getTribonacci = (n, memo) => {
    if(memo[n]) return memo[n];

    if(n === 0 || n === 1)
        return 0;
    else if(n === 2)
        return 1;

    memo[n] = getTribonacci(n - 3, memo)
            + getTribonacci(n - 2, memo)
            + getTribonacci(n - 1, memo);

    return memo[n];
}

export const problem2 = (inputString) => {
    const adapters = parseInput(inputString);

    let reducibleChainLength = 0;
    let chains = [], memo = [];

    for (let i = 1; i < adapters.length; i++) {
        const diff = adapters[i] - adapters[i - 1];

        if(diff === 1)
            reducibleChainLength++;
        else if(diff === 3) {
            chains.push(getTribonacci(reducibleChainLength + 2, memo));
            reducibleChainLength = 0;
        }
    }

    return chains.reduce((a, b) => a * b);
}

/*
One row where all are adapters are present:
(0), 1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19, (22)
(0), 1, 4, 5, 6, 7, 10,     12, 15, 16, 19, (22)
(0), 1, 4, 5,    7, 10, 11, 12, 15, 16, 19, (22)
(0), 1, 4, 5,    7, 10,     12, 15, 16, 19, (22)
(0), 1, 4,    6, 7, 10, 11, 12, 15, 16, 19, (22)
(0), 1, 4,    6, 7, 10,     12, 15, 16, 19, (22)
(0), 1, 4,       7, 10, 11, 12, 15, 16, 19, (22)
One row where everything unneeded is not present:
(0), 1, 4,       7, 10,     12, 15, 16, 19, (22)

For each *unnecessary* element we add, that is an element with a difference of 1...
    ...the number of possible combinations increases according to the Tribonnaci sequence.
    That is, a fibonnaci sequence where you take the previous three elements instead of two.

    By counting these chains of reducible elements,
        getting the number of permutations they add (according to this principle),
        and multiplying the chain of permutations together,
    the result can be found in constant time!
 */
