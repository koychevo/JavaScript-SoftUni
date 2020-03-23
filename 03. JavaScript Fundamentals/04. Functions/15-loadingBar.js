function loadingBar(number) {
    let result = '';
    let loadingBar = '[';
    let num = number / 10;
    
    for(let i = 1; i <= num; i++) {
        loadingBar += '%';
    }

    for(let i = num + 1; i <= 10; i++) {
        loadingBar += '.';
    }

    loadingBar += ']';

    if(num === 100) {
        result = `100% Complete!\n${loadingBar}`;
    } else {
        result = `${number}% ${loadingBar}\nStill loading...`;
    }
    console.log(result);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);

/*
Task: You will receive a single number between 0 and 100 which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualize a loading bar depending on that number you have received in the input.
Examples
Input	Output
30  	30% [%%%.......]
        Still loading...
50	    50% [%%%%%.....]
        Still loading...
100	    100% Complete!
        [%%%%%%%%%%]
*/
