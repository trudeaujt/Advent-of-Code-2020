// @flow

function removeElement(array, number) {
    const index = array.indexOf(number);
    if(index > -1) {
        array.splice(index, 1);
        return array;
    } else {
        throw new Error(`Element ${number} not found.`)
    }
}

export const problem1 = (inputString, preamble) => {
    const input = inputString.split("\n")
        .map(elem => parseInt(elem));
    let slice = input.slice(0, preamble);
    slice.sort();
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
}

export const problem2 = (input) => {

}
