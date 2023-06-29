// access th the add and search buttons.
const addMoviesBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

//rendring the movie element in tthe list wich have the movie-list id.

const renderMovies = () => {

    const movieList = document.getElementById('movie-list');
    if(movies.length === 0) {
 movieList.classList.remove('visible');
    }
    else{
        movieList.classList.add('visible');

    }
   
    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
         movieList.innerHTML = '';
    });
};

// add the movie in the movies list
const addMovieHandler = () => {
    const title = document.getElementById('title').value;
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
    renderMovies();
};


addMoviesBtn.addEventListener('click', addMovieHandler );

