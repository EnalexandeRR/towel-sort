// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    const sortedArray = [];
    for (let i = 0; i < matrix.length; i++) {
        const line = matrix[i];
        for (let j = 0; j < line.length; j++) {
            if (i % 2 === 0) {
                sortedArray.push(line[j]);
            } else {
                sortedArray.push(line[line.length - 1 - j]);
            }
        }
    }
    return sortedArray;
};
