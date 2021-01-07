export const parseInput = (input) => input.split('\n');

export const problem1 = (input) => {
 
    var bagGraph = input.reduce((graph, entry) => {
        var [bag, contains] = entry
            .replace(/bags/g,'bag')
            .replace('.','')
            .split(' contain ');
        contains = contains.split(', ');
        debugger;
    }, {});

}

export const problem2 = (input) => {

}