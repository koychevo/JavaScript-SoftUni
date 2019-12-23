function solve(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let cloakroomWidth = Number(input.shift());
    let dancerArea = (40 + 7000) /10000;
    let cloakroomArea = cloakroomWidth * cloakroomWidth;
    let hallArea = length * width;
    let benchArea = hallArea / 10;
    let dancers = (hallArea - benchArea - cloakroomArea) / dancerArea;
    console.log(Math.floor(dancers));
 }

solve([50, 25, 2]);
