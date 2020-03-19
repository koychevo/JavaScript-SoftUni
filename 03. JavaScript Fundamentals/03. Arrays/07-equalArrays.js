function solve(arr1, arr2) {
    let result = '';
    let sum = 0;
    let isEqual = true;
    let index = -1;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            isEqual = false;
            index = i;
            break;
        }
    }
    if(isEqual) {
        for(let i = 0; i < arr1.length; i++) {
            sum += Number(arr1[i]);
        }
        result = `Arrays are identical. Sum: ${sum}`;
    } else {
        result = `Arrays are not identical. Found difference at ${index} index`;
    }
    console.log(result);
}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);

/*
Task: Write a program which receives two string arrays and print on the console whether they are identical or NOT. 
Arrays are identical if their elements are equal. If the arrays are identical find the sum of the first one and print on the console following message: 
'Arrays are identical. Sum: {sum}'
 If the arrays are NOT identical find the first index where the arrays differ and print on the console following message:
 'Arrays are not identical. Found difference at {index} index'.
*/
