export const getMoviesStart = () => ({
    type: "GET_MOVIES_START"
})
export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies
})
export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE"
})


//
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_FAILURE"
})
export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_FAILURE",
    payload: id
})
export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE"
})