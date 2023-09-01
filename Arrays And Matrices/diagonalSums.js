function solve(matrix) {
    let mainDiag = 0;
    let secondDiag = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainDiag += matrix[i][i];
        secondDiag += matrix[i][matrix.length - i - 1];
    }

    console.log(secondDiag, mainDiag);
}
solve([
    [20, 40],
    [10, 60]
]);