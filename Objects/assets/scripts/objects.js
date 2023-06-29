// access th the add and search buttons.
const addMoviesBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('li').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
    if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {

        return;
    }
    const newMovie = {

        info:{
            info: title,
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(newMovie);
};


addMoviesBtn.addEventListener('click', addMovieHandler );
