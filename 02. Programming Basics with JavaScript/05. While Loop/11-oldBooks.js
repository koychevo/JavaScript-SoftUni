function solve(input) {
    let bookName = input.shift();
    let books = Number(input.shift());
    let counter = 0;
    let isFound = false;
    while(!isFound && counter < books) {
        let currentBook = input.shift();
        counter++;
        if(currentBook === bookName) {
            isFound = true;
        }
    }
    if(isFound) {
        console.log(`You checked ${counter - 1} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${books} books.`);
    }
}

solve(["Troy", 8, "Stronger", "Life Style", "Troy"]);
solve(["The Spot", 4, "Hunger Games", "Harry Potter", "Torronto", "Spotify"]);
solve(["Bourne", 32, "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Stronger", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);

