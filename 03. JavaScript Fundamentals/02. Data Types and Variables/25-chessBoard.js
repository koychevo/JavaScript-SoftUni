function solve(n) {
    let result = '<div class="chessboard">\n';
    let color = '';
    for(let row = 0; row < n; row++) {
        result += '  <div>\n';
        color = row % 2 === 0 ? 'black' : 'white'; 
        for(let col = 0; col < n; col++) {
            result += `    <span class="${color}"></span>\n`;
            color = color === 'white' ? 'black' : 'white';
        }
        result += '  </div>\n';
    }
    result += '</div>';
    console.log(result);
}

solve(3);

/*
Task: Write a function to print a chessboard of size n X n. See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.

Examples
Input	Output
3	<div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
</div>
*/
