function solve(radius, height) {
    let r = Number(radius);
    let h = Number(height);
    let volume = 1 / 3 * Math.PI * r * r * h;
    let area = Math.PI * r * (r + Math.sqrt(r * r + h * h));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

solve(3, 5);
solve(3.3, 7.8);

/*
Task: Write a function to calculate a cone’s volume and total surface area by given height and radius at the base.
The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result. The result should be formatted to the fourth decimal point
*/
