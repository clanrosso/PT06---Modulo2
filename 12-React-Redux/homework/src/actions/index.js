export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=d1dcdf9c&s=" + titulo)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({ type: "GET_MOVIES", payload: movies });
      });
  };
}

export const getMovieDetail = (id) => {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=d1dcdf9c&i=" + id)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: movies });
      });
  };
};

export const addMovieFavorite = (movie) => {
  return { type: "ADD_MOVIE_FAVORITE", payload: movie };
};

export const removeMovieFavorite = (id) => {
  return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
};
