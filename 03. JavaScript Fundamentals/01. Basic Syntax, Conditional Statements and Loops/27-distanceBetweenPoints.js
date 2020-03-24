function calculateDistance(x1, y1, x2, y2) {
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let distance = Math.sqrt(a * a + b * b);
    console.log(distance);
}

calculateDistance(2, 4, 5, 0);
calculateDistance(2.34, 15.66, -13.55, -2.9985);

/*
Task: Write a JS function that calculates the distance between two points by given x and y coordinates. 
The input comes as four number elements in the format x1, y1, x2, y2. Each pair of elements are the coordinates of a point in 2D space.
*/
