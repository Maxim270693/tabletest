import {ActionsType, InitialStateType, PostType} from "../../types/types";
import {GET_POST, SET_IS_LOADING} from "../../constants/constants";

export const initialState = {
    post: [] as PostType[],
    isLoading: false,
}

export const postReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case GET_POST:
            return {...state, post: action.payload}
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
};