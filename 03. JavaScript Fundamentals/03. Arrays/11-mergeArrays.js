function solve(firstArr, secondArr) {
    let resultArr = [];
    for(let index in firstArr) {
        resultArr[index] = (index % 2 === 0) ?
                        Number(firstArr[index]) + Number(secondArr[index]) :
                        firstArr[index] + secondArr[index];  
    }
    console.log(resultArr.join(' - '));
}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);

/*
Tesk : Write a function which receives two string arrays and merges them into a third array.  
•	If the index of the element is even, add into the third array the sum of both elements at that index
•	If the index of the element is odd, add the concatenation of both elements at that index
Input
As input you will receive two string arrays.
Output
As output you should print the resulting third array, each element separated by " - ".
*/
