function solve(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let result = "No";
    if(a + b === c) {
        result = `${Math.min(a, b)} + ${Math.max(a, b)} = ${c}`;
    }
    if(a + c === b) {
        result = `${Math.min(a, c)} + ${Math.max(a, c)} = ${b}`;
    } 
    if(c + b === a) {
        result = `${Math.min(b, c)} + ${Math.max(b, c)} = ${a}`;
    }
    console.log(result);
}

solve([3, 5, 2]);
solve([2, 2, 4]);
solve([1, 1, 5]);
solve([2, 6, 3]);
