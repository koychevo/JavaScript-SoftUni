function solve([arg1, arg2]) {
    let labLength = parseFloat(arg1);
    let labWidth = parseFloat(arg2);
    const workspaceLength = 1.2;
    const workspaceWidth = 0.7;
    const floorWidth = 1;
    let rows = Math.floor(labLength / workspaceLength);
    let cols = Math.floor((labWidth - floorWidth) / workspaceWidth);
    let workplaces = rows * cols - 3;
    console.log(workplaces);
}

solve([15, 8.9]);
solve([8.4, 5.2]);
