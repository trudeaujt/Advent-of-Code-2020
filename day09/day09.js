function removeElement(array, number) {
    const index = array.indexOf(number);
    if(index > -1) {
        array.splice(index, 1);
        return array;
    } else {
        throw new Error(`Element ${number} not found.`)
    }
}

const parseInput = (string) => {
     return string.split("\n")
        .map(elem => parseInt(elem));
}

export const problem1 = (inputString, preamble) => {
    const input = parseInput(inputString);
    let slice = input.slice(0, preamble);
    slice.sort((a, b) => a - b);
    //Oldest element, used to move the sliding slice window
    let sliceTail = 0;

    for(let sliceHead = preamble; sliceHead < input.length; ++sliceHead) {
        let leftIndex = 0, rightIndex = slice.length - 1;
        let nextValue = input[sliceHead];

        while(leftIndex !== rightIndex) {
            let sum = slice[leftIndex] + slice[rightIndex];
            if(sum === nextValue) {
                break;
            }
            else if(sum > nextValue)
                --rightIndex;
            else if(sum < nextValue)
                ++leftIndex;
        }
        if(leftIndex === rightIndex)
            return nextValue;

        const oldestElement = input[sliceTail];
        removeElement(slice, oldestElement);
        ++sliceTail;
        slice.push(nextValue);
        slice.sort((a, b) => a - b);
    }

    throw new Error('No matching value found.');
}

export const problem2 = (inputString, target) => {
    const input = parseInput(inputString);
    let tail = 0, head = 1, sum = 0;
    while (sum !== target) {
        let slice = input.slice(tail, head + 1);
        sum = slice.reduce((acc, cur) => acc + cur, 0);
        if(sum < target)
            head++;
        else if(sum > target)
            tail++;
        else if(sum === target)
            return Math.min(...slice) + Math.max(...slice);
    }

    throw new Error('No matching value found.');
}
