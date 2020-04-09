function deleteReapingChars(str) {
    
    return str.split('')
                .filter((el, ind, arr) => el !== arr[ind+1])
                    .join('');
    //let result = '';
    //for (let i = 1; i < str.length; i++) {
    //    if (str[i] !== str[i + 1]) {
    //        result += str[i];
    //    }
    //}
    //return result;
}

console.log(deleteReapingChars('aaaaabbbbbcdddeeeedssaa'));
console.log(deleteReapingChars('qqqwerqwecccwd'));

/*
Task: Write a function that receives a single string and replaces any sequence of the same letters with a single corresponding letter.
*/
