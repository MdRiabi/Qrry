// access th the add and search buttons.
const addMoviesBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

//rendring the movie element in tthe list wich have the movie-list id.

const renderMovies = (filter = '') => {

    const movieList = document.getElementById('movie-list');
    if(movies.length === 0) {
 movieList.classList.remove('visible');
    }
    else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filtredMovies =!filter ? movies : movies.filter(movie => movie.info.title.includes(filter));
filtredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for(const key in movie.info){
            if(key !== 'title'){
                text+= text + `${key}: ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

// search function for movies

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title');
    renderMovies('filterTerms');
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


addMoviesBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click' , searchMovieHandler);

//14. Understanding Chaining (Property & Method Chaining)