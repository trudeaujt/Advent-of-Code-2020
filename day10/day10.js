const parseInput = (string) => {
    return string.split("\n")
        .map(elem => parseInt(elem));
}

export const problem1 = (inputString) => {
    const adapters = parseInput(inputString);
    adapters.sort((a, b) => a - b);

    //The charging outlet has an effective rating of 0 jolts
    adapters.unshift(0);
    //your device's built-in adapter is always 3 higher than the highest adapter
    adapters.push(adapters[adapters.length - 1] + 3);

    let oneDifferenceCount = 0, threeDifferenceCount = 0;

    for (let i = 0; i < adapters.length; i++) {
        const difference = adapters[i + 1] - adapters[i];
        if(difference === 1)
            oneDifferenceCount++;
        else if (difference === 3)
            threeDifferenceCount++;
    }

    return oneDifferenceCount * threeDifferenceCount;

}

export const problem2 = () => {
    const input = parseInput(inputString);

}