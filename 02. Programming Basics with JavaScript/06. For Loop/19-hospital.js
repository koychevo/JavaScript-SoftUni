function solve(input) {
    let days = Number(input.shift());
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    for(let i = 1; i <= days; i++) {
        if(i % 3 === 0 && untreatedPatients > doctors) {
            doctors++;
        }
        let patients = Number(input.shift());
        treatedPatients += (patients < doctors) ? patients : doctors;
        if(patients - doctors > 0) {
            untreatedPatients += patients - doctors;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

solve([4, 7, 27, 9, 1]);
solve([6, 25, 25, 25, 25, 25, 2]);
solve([3, 7, 7, 7]);
