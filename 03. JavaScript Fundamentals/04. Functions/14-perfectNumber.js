function perfectNumber(number) {
    let sum = 0;
    let result = '';
    for(let i = 1; i < number; i++) {
        if(number % i === 0) {
            sum += i;
        }
    }
    if(sum === number) {
        result = 'We have a perfect number!';
    } else {
        result = "It's not so perfect.";
    }
    console.log(result);
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);

/*
Tema: Write a function that receive a number and return if this number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
*/
