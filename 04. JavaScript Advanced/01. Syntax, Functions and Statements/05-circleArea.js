function calculateArea(radius) {
    let inputType = typeof radius;
    if(inputType !== 'number') {
        return `We can not calculate the circle area, because we receive a ${inputType}.`;
    }

    let area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
}

console.log(calculateArea(5));
console.log(calculateArea('name'));

/*
Task: Write a function that takes a single argument as an input. 
Check the type of the input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. Print the area rounded to two decimal places.
If the argument type is NOT a number, print the following text on the console: 
'We can not calculate the circle area, because we receive a {type of argument}.'
The input comes as a single argument passed to your function.
The output should be printed on the console.
*/
