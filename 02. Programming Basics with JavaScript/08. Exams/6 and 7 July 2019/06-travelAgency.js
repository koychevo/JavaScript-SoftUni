function solve(input) {
    let town = input[0];
    let packetType = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    if(days < 1) {
        return 'Days must be positive number!';
    }

    let isTownValid = town === 'Bansko' || town === 'Borovets' || town === 'Varna' || town === 'Burgas';
    let isValidPacket = ((town === 'Bansko' || town === 'Borovets') && (packetType === 'noEquipment' || packetType === 'withEquipment')) || ((town === 'Varna' || town === 'Burgas') && (packetType === 'noBreakfast' || packetType === 'withBreakfast'));
    
    if(!isTownValid || !isValidPacket) {
        return 'Invalid input!';
    }

    let price = 100;
    
    if((town === 'Bansko' || town === 'Borovets') && packetType === 'noEquipment') {
        price = 80;
    }

    if((town === 'Varna' || town === 'Burgas') && packetType === 'withBreakfast') {
        price = 130;
    }

    if(vip === 'yes') {
        if((town === 'Bansko' || town === 'Borovets') && packetType === 'noEquipment') {
            price *= 0.95;
        }
        if((town === 'Bansko' || town === 'Borovets') && packetType === 'withEquipment') {
            price *= 0.9;
        }
        if((town === 'Varna' || town === 'Burgas') && packetType === 'withBreakfast') {
            price *= 0.88;
        }
        if((town === 'Varna' || town === 'Burgas') && packetType === 'noBreakfast') {
            price *= 0.93;
        }
    }

    if(days > 7) {
        days -= 1;
    }

    let expenses = days * price;
    return `The price is ${expenses.toFixed(2)}lv! Have a nice time!`;
}

console.log(solve(['Borovets', 'noEquipment', 'yes', 6]));
console.log(solve(['Bansko', 'withEquipment', 'no', 2]));
console.log(solve(['Varna', 'withBreakfast', 'yes', 5]));
console.log(solve(['Burgas', 'noBreakfast', 'no', 4]));
console.log(solve(['Varna', 'withBreakfast', 'no', 0]));
console.log(solve(['Gabrovo', 'noBreakfast', 'no', 3]));
