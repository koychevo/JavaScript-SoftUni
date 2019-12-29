function solve(input) {
    let figure = input.shift();
    let area = 0;
    figure = figure.toLowerCase(); 
    if(figure === "square") {
        let a = Number(input.shift());
        area = a * a;
    } else if(figure === "rectangle") {
        area = Number(input.shift()) * Number(input.shift()); 
    } else if(figure === "circle") {
        let r = Number(input.shift());
        area = Math.PI * r * r;
    } else {
        area = Number(input.shift()) * Number(input.shift()) / 2;
    }
    console.log(area.toFixed(3));
}


solve(["square", 5]);
solve(["rectangle", 7, 2.5]);
solve(["circle", 6]);
solve(["triangle", 4.5, 20]);
