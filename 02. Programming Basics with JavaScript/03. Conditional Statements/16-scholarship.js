function solve(input) {
    let income = Number(input.shift());
    let grades = Number(input.shift());
    let minEmolument = Number(input.shift());
    let result = "You cannot get a scholarship!";
    if((grades >= 4.5) && (grades < 5.5) && (income < minEmolument)) {
        result = "You get a Social scholarship ${Math.floor(0.35 * minEmolument)} BGN";
    } 
    if(grades >= 5.5) {
        if( Math.floor(0.35 * minEmolument) > Math.floor(grades * 25)) {
            result = `You get a Social scholarship ${Math.floor(0.35 * minEmolument)} BGN`;
        } else {
            result = `You get a scholarship for excellent results ${Math.floor(grades * 25)} BGN`;
        }
    }
    console.log(result);
}

solve([480.00, 4.60, 450.00]);
solve([300.00, 5.65, 420.00]);