export const parseInput = (input) => input.split('\n\n');

// Sum the number of people that answered YES to each question in each group
export const problem1 = (input) => {
    return input.reduce((sum, group) => {
        let answers = new Set();
        group.split('\n').forEach(person => {
            for(let c of person) {
                answers.add(c);
            }
        })
        return sum + answers.size;
    }, 0)
}

export const problem2 = (input) => {
    let total = 0;

    for(let group of input) {
        let answers = new Map();
        let individualMembers = group.split('\n');

        individualMembers.forEach(person => {
            for(let c of person) {
                answers.set(c, answers.get(c) + 1 || 1);
            }
        })

        let sharedAnswers = 0;
        for (let [, count] of answers) {
            if(count === individualMembers.length) {
                sharedAnswers++;
            }
        };
        total += sharedAnswers;
    }
    return total;
}