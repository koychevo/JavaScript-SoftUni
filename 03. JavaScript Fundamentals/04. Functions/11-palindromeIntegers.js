function solve(numbers) {
    function isPalindrome(num) {
        let numStr = num.toString();
        let len = numStr.length;
        for(let i = 0; i < len / 2; i++) {
            if(numStr[i] !== numStr[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    for(let number of numbers) {
        console.log(isPalindrome(number));
    }
}

solve([123,323,421,121]);
solve([32,2,232,1010]);

/*
Task: A palindrome is a number which reads the same backward as forward, such as 323 or 1001. Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.
*/
