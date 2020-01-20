function solve() {
    let isEnd = false;
    for(let i = 1; i <= 3; i++) {
        if(isEnd === false) {
            for (let j = 3; j >= 1; j--) {
                if(i+j === 2) {
                    isEnd = true;
                    break;
                }
                console.log(`${i} ${j}`);
            }
        }
    }
}

solve();