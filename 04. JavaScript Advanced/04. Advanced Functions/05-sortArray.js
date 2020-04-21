function sortArray(numbers, criteria) {
    let sortFunc = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return numbers.sort(sortFunc[criteria]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));

/*
Task: unction sortArray(numbers, criteria) {
    let sortFunc = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return numbers.sort(sortFunc[criteria]);
}
*/
