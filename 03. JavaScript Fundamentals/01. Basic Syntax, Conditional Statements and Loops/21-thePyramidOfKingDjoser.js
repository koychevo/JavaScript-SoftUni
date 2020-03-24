function solve(base, increment) {
    let stone = marble = lapisLazuri = gold = 0;
    let height = 0;
    for(let level = base; level > 0; level-=2) {
        height++;
        if((level === 1 && base % 2 !== 0) ||(level === 2 && base % 2 === 0)) {
            gold += increment * level * level;
            continue;
        }
        stone += (level - 2) * (level - 2) * increment;
        if(height % 5 === 0) {
            lapisLazuri += 4 * (level - 1) * increment;
        } else {
            marble += 4 * (level - 1) * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuri)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);

/*
Task: Write a JS program that calculates how much resources will be required for the construction of a pyramid. It is made out of stone, marble, lapis lazuli and gold. Your program will receive an integer that will be the base width and length of the pyramid and an increment, that is the height of each step. The bulk is made out of stone, while the outer layer is made out of marble. Every fifth step’s outer layer is made out of lapis lazuli instead of marble. The final step is made out of gold.
The pyramid is built with 1x1 blocks with height equal to the given increment. The first step of the pyramid has width and length equal to the given base and every next step is reduced by 2 blocks (1 from each side). The height of every step equals the given increment. See the drawing for an example. White steps are covered in marble, blue steps are covered in lapis lazuli (every fifth layer from the bottom), and yellow steps are made entirely out of gold (top-most step).
 
Since the outer layer of each step is made of a decorative material, to calculate the required stone for one step, reduce the width and length by 2 blocks (one from each side), find it’s area and multiply it by the increment. The rest of the step is made out of lapis lazuli for every fifth step from the bottom and marble for all other steps. To find the amount needed, you may, for example, find its perimeter and reduce it by 4 (to compensate for the overlapping corners) and multiply the result by the increment. See the drawing for details (grey is stone, white is decoration).
Note the top-most layer is made entirely out of gold, with height equal to the given increment. See the examples for complete calculations.
Input
You will receive two number parameters base and increment.
Output
Print on the console on separate lines the total required amounts of each material rounded up and the final height of the pyramid rounded down, as shown in the examples.
Constraints
•	The base will always be an integer greater than zero
•	The increment will always be a number greater than zero
•	Number.MAX_SAFE_INTEGER will never be exceeded for any of the calculations
*/
