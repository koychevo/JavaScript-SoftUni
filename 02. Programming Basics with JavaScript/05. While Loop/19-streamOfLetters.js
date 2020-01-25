function solve(input) {
    let letter = input.shift();
    let cCounter = oCounter = nCounter = 0;
    let result = "";
    let word = "";
    while(true) {
        if(cCounter > 0 && oCounter > 0 && nCounter > 0) {
            result += word + " ";
            cCounter = oCounter = nCounter = 0;
            word = "";
        }
        if(letter === "End") {
            break;
        }
        let ascii = letter.charCodeAt(0);
        if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            if(ascii === 99 && cCounter === 0) {
                cCounter++;
            } else if(ascii === 110 && nCounter === 0) {
                nCounter++;
            } else if(ascii === 111 && oCounter === 0) {
                oCounter++;
            } else {
                word += letter;
            }
        }
        letter = input.shift();
    }
    console.log(result);
}

solve(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
solve(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);
