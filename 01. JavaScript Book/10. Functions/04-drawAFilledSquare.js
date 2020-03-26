function drawSquare(number) {
    num = Number(number);
    for(let i = 1; i <= num; i++) {
        if(i === 1 || i === num) {
            printHeaderFooter(num);
        } else {
            printLine(num);        
        }
    }
    
    function printHeaderFooter(n) {
        let line = '-'.repeat(2 * n);
        console.log(line);
    }
    function printLine(n) {
        let line = '';
        for (let i = 0; i < 2 * n; i++) {
            let char = '';
            if (i === 0 || i === 2 * n - 1) {
                char = '-';
            } else {
                if(i % 2 === 0) {
                    char = '/';
                } else {
                    char = '\\';
                }
            }
            line += char;
        }
        console.log(line);
    }
}

drawSquare(5);
