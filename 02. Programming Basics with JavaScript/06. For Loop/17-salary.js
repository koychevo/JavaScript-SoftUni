function solve(input) {
    let tabs = Number(input.shift());
    let salary = Number(input.shift());
    let result = "You have lost your salary.";
    for(i = 0; i < tabs; i++) {
        let url = input.shift().toLowerCase();
        if(url === "facebook") {
            salary -= 150;
        }
        if(url === "instagram") {
            salary -= 100;
        }
        if(url === "reddit") {
            salary -= 50;
        }
        if(salary <= 0) {
            break;
        }
    }
    if(salary > 0) {
        result = salary;
    }
    console.log(result);
}

solve([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
solve([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
solve([3, 500, "Facebook", "Stackoverflow.com", "softuni.bg"]);
