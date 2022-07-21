import {Dispatch} from "redux";
import {getPostAC, setIsLoadingAC} from "../actions/actions";
import {postsApi} from "../../api/api";


export const postThunk = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsLoadingAC(true))
        const res = await postsApi.getPost();
        dispatch(getPostAC(res.data));
    } catch (e) {

    } finally {
        dispatch(setIsLoadingAC(false))
    }
};