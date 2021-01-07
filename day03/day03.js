export const problem1 = (path) => {
    var cursor = 3;
    var width = path[0].length;
    var treeCount = 0;
    for(var i = 1; i < path.length; ++i) {
        if(path[i].charAt(cursor) === '#') {
           treeCount++;
        } 
        cursor = (cursor + 3) % width;
    }
    return treeCount;
}

export const problem2 = (path) => {
    //[current index, distance right to move]
    var cursors = [[1,1], [3,3], [5,5], [7,7], [1,1]];
    var cursorCount = cursors.length;
    var cursorDisabled = true; //whether the 5th cursor should move or not
    var width = path[0].length;
    var treeSums  = [0,0,0,0,0];

    for(var i = 1; i < path.length; ++i) {
        cursorCount = cursorDisabled ? cursors.length - 1 : cursors.length;
        cursorDisabled = !cursorDisabled;

        for(var c = 0; c < cursorCount; ++c) {
            if(path[i].charAt(cursors[c][0]) === '#') {
                treeSums[c]++;
            }
            cursors[c][0] = (cursors[c][0] + cursors[c][1]) % width;
        }
    }
    return treeSums.reduce((a, b) => a * b);
}