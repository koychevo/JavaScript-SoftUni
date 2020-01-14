function solve(input) {
    let str = input.shift().toLowerCase();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        switch (letter) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }
    console.log(sum);
}

solve(["hello"]);
solve(["hi"]);
solve(["bamboo"]);
solve(["beer"]);
