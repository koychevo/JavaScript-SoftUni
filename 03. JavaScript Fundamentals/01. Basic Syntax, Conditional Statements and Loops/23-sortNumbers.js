function solve(a, b, c) {
    let result = '';
    if(a <= b && b <= c) {
        result = `${c}\n${b}\n${a}`;
    } else if(a <= c && c <= b) {
        result = `${b}\n${c}\n${a}`;
    } else if(b <= a && a <= c) {
        result = `${c}\n${a}\n${b}`;
    } else if(b <= c && c <= a) {
        result = `${a}\n${c}\n${b}`;
    } else if(c <= a && a <= b) {
        result = `${b}\n${a}\n${c}`;
    } else if(c <= b && b <= a) {
        result = `${a}\n${b}\n${c}`;
    }
    console.log(result);
}

solve(2, 1, 3);
solve(-2, 1, 3);
solve(0, 0, 2);

/*
Task: Receive three numbers and sort them in descending order. Print each number on a new line.
*/
