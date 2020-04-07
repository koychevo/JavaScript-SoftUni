function printParkingLot(parkingLot) {
    let cars = new Set();

    for(let car of parkingLot) {
        let [direction, number] = car.split(', ');
        if(direction === 'IN') {
            cars.add(number);
        } else {
            cars.delete(number);
        }
    }

    if(cars.size === 0) {
        console.log('Parking Lot is Empty');
        return;
    }

    let sortedCars = Array.from(cars.values()).sort();
    sortedCars.forEach(car => console.log(car));
}

printParkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
printParkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);

/*
Task: Write function that:
•	Records a car number for every car that enters the  parking lot
•	Removes a car number when the car goes out
•	Input will be array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number
*/
