import { getListsStart, getListsFailure, getListsSuccess, deleteListFailure, deleteListStart, deleteListSuccess, createListFailure, createListStart, createListSuccess } from './ListActions'
import { axiosInstance } from '../../config'

// getlist
export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const res = await axiosInstance.get('/lists', {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getListsSuccess(res.data))
    } catch (err) {
        dispatch(getListsFailure())
    }
}

//create
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axiosInstance.post("/lists", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch (err) {
        dispatch(createListFailure());
    }
};


//delete
export const deleteLists = async (id, dispatch) => {
    dispatch(deleteListStart())
    try {
        await axiosInstance.delete('/lists/' + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteListSuccess(id))
    } catch (err) {
        dispatch(deleteListFailure())
    }
}

