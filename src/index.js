// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }
    const na = matrix.map((el, index) => {
        if (index % 2 === 0) {
            return el;
        }
        return el.reverse();
    });
    return na.flat();
};
