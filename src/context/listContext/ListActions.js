export const getListsStart = () => ({
    type: "GET_LISTS_START"
})
export const getListsSuccess = (movies) => ({
    type: "GET_LISTS_SUCCESS",
    payload: movies
})
export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE"
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


//delele
export const deleteListStart = () => ({
    type: "DELETE_LIST_FAILURE"
})
export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_FAILURE",
    payload: id
})
export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE"
})