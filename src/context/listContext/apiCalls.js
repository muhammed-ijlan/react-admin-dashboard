import { getListsStart, getListsFailure, getListsSuccess, deleteListFailure, deleteListStart, deleteListSuccess } from './ListActions'
import axios from 'axios'

// getlist
export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const res = await axios.get('/lists', {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getListsSuccess(res.data))
    } catch (err) {
        dispatch(getListsFailure())
    }
}

// //create
// export const createMovie = async (movie, dispatch) => {
//     dispatch(createMovieStart());
//     try {
//         const res = await axios.post("/movies", movie, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });
//         dispatch(createMovieSuccess(res.data));
//     } catch (err) {
//         dispatch(createMovieFailure());
//     }
// };


//delete
export const deleteLists = async (id, dispatch) => {
    dispatch(deleteListStart())
    try {
        await axios.delete('/lists/' + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteListSuccess(id))
    } catch (err) {
        dispatch(deleteListFailure())
    }
}

