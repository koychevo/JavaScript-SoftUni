function solve(input) {
    let period = Number(input[0]);
    let countOfDoctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    for(let day = 1; day <= period; day++) {
        if(day % 3 === 0 && untreatedPatients > treatedPatients) {
            countOfDoctors++;
        }
        let currentPatients = Number(input[day]);
        let currentTreatedParients = countOfDoctors;
        if(countOfDoctors > currentPatients) {
            currentTreatedParients = currentPatients;
        }
        treatedPatients += currentTreatedParients;
        let currentuntreatedPatients = currentPatients - countOfDoctors;
        if(currentuntreatedPatients < 0) {
            currentuntreatedPatients = 0;
        }
        untreatedPatients += currentuntreatedPatients;
        
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

solve([4, 7, 27, 9, 1]);
solve([6, 25, 25, 25, 25, 25, 2]);
solve([3, 7, 7, 7]);
