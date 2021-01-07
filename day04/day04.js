export const parseInput = (input) => input.split('\n\n')
    .map(str => str.replace(/\n/g, " "));

const validate = {
    byr: (value) => parseInt(value).validNumber(1920, 2002, value.length, 4),
    iyr: (value) => parseInt(value).validNumber(2010, 2020, value.length, 4),
    eyr: (value) => parseInt(value).validNumber(2020, 2030, value.length, 4),
    hgt: (value) => /^(5[9]|6[\d]|7[0-6])in|1([5-8][\d]|9[0-3])cm$/.test(value),
    hcl: (value) => /^#([\d]|[a-f]){6}$/.test(value),
    ecl: (value) => /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value),
    pid: (value) => /^[\d]{9}$/.test(value),
    cid: (value) => /./.test(value)
}

Number.prototype.validNumber = function (a, b, length, expected) {
    return this >= a && this <= b && length === expected;
};

export const problem1 = (passports) => {
    return passports.filter(passport => {
        var fields = passport.split(':');
        if (
            fields.length === 9 || 
            (fields.length === 8 && (!passport.includes('cid:')))      
        ) {
            return true;
        }
    }).length;
}

export const problem2 = (passports) => {
    var requiredEntries = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

    return passports.filter(passport => {

        //accumulate each entry into a dictionary Object
        var entries = passport.split(' ').reduce((dictionary, entry) => {

            /**define two constants at the same time, 
               but we don't need the first one (the regex).
               equivalent to field = result[1] and value = result[2]**/
            const [, field, value] = /(\w+):(.*)/.exec(entry);
            dictionary[field] = value;
            return dictionary;
        }, {});

        //iterate over the required fields, making sure each is present in our passport
        if(!requiredEntries.every(entry => Object.keys(entries).includes(entry))) {
            return false;
        }

        //verify passport entries are within valid ranges
        return Object.keys(entries).every (key => validate[key](entries[key]));

    }).length;
}