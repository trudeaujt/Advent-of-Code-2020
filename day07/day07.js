export const parseInput = (input) => input.split('\n');

const traverse = (bag, graph, target) => {

}

export const problem1 = (input) => {
 
    const target = 'shiny gold bag';

    var bagGraph = input.reduce((graph, entry) => {
        var [bag, contains] = entry
            .replace(/bags/g,'bag')
            .replace('.','')
            .split(' contain ');

        contains = contains.split(', ');

        contains.forEach(element => {
            if(element === 'no other bag') {
                graph[bag] = false;
                return graph;
            }
            const [, quantity, innerBag] = /(\d)\s(.*)/.exec(element);
            if(graph[bag])  graph[bag].push([innerBag, quantity])
            else            graph[bag] =   [[innerBag, quantity]]
        });

        return graph;
    }, {}); //start as object

    debugger;
    Object.keys(bagGraph).forEach(bag => {

    });

}

export const problem2 = (input) => {

}