function showMovies(inputMovies) {
    let movies = [];
    for(let movie of inputMovies) {
        movie = movie.split(' ');
        if(movie.includes('addMovie')) {
            let movieName = movie.slice(1).join(' ');
            movies.push({name: movieName});
        } else if(movie.includes('directedBy')) {
            addPropertyToMovie(movie, 'directedBy', 'director', movies)
        } else {
            let index = movie.indexOf('onDate');
            addPropertyToMovie(movie, 'onDate', 'date', movies)
        }
    }
    
    for(let movie of movies) {
        if(movie.hasOwnProperty('name') && movie.hasOwnProperty('date') && movie.hasOwnProperty('director')) {
            console.log(JSON.stringify(movie));
        }
    }

    function addPropertyToMovie(arr, element, property, movies) {
        let index = arr.indexOf(element);
            let movieName = arr.slice(0, index).join(' ');
            for(let movie of movies) {
                if(movieName === movie.name) {
                    movie[property] = arr.slice(index + 1).join(' ');
                }
            }
    }
}

showMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);

/*
Task: Write a function that stores information about movies inside an array. The movies object info must be name, director and date. You can receive several types of input:
•	"addMovie {movie name}" – add the movie
•	"{movie name} directedBy {director}" – check if the movie exists and then add the director
•	"{movie name} onDate {date}" – check if the movie exists and then add the date
At the end print all the movies that have all the info (if the movie has no director, name or date, don’t print it) in JSON format.
*/
