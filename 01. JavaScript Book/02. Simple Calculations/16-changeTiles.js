function solve([N, W, L, M, O]) {
    const time = 0.2;
    let playgroundArea = N * N;
    let tileArea = W * L;
    let benchArea = M * O;
    let tiles = (playgroundArea - benchArea) / tileArea;
    let commonTime = tiles * time;
    console.log(Math.round(tiles * 100) / 100);
    console.log(Math.round(commonTime * 100) / 100);
}

solve([20, 5, 4, 1, 2]);
solve([40, 0.8, 0.6, 3, 5]);
