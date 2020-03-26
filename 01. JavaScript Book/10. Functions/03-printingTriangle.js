function printTriangle(num) {

    for(let i = 1; i <= num; i++) {
        printLine(i);
    }

    for(let i = num - 1; i > 0; i--) {
        printLine(i);
    }

    function printLine(end) {
        let line = '';
        for(let i = 1; i <= end; i++) {
            line += `${i} `;
        }
        console.log(line);
    }
}

printTriangle(4);