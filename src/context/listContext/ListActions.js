export const getListsStart = () => ({
    type: "GET_MOVIES_START"
})
export const getListsSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies
})
export const getListsFailure = () => ({
    type: "GET_MOVIES_FAILURE"
})

//create
// export const createMovieStart = () => ({
//     type: "CREATE_MOVIE_START"
// })
// export const createMovieSuccess = (movie) => ({
//     type: "CREATE_MOVIE_SUCCESS",
//     payload: movie
// })
// export const createMovieFailure = () => ({
//     type: "CREATE_MOVIE_FAILURE"
// })

// //Update
// export const updateMovieStart = () => ({
//     type: "UPDATE_MOVIE_START"
// })
// export const updateMovieSuccess = (movie) => ({
//     type: "UPDATE_MOVIE_SUCCESS",
//     payload: movie
// })
// export const updateMovieFailure = () => ({
//     type: "UPDATE_MOVIE_FAILURE"
// })


// //delele
// export const deleteMovieStart = () => ({
//     type: "DELETE_MOVIE_FAILURE"
// })
// export const deleteMovieSuccess = (id) => ({
//     type: "DELETE_MOVIE_FAILURE",
//     payload: id
// })
// export const deleteMovieFailure = () => ({
//     type: "DELETE_MOVIE_FAILURE"
// })