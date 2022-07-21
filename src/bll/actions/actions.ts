import {GET_POST, SET_IS_LOADING} from "../../constants/constants";
import {PostType} from "../../types/types";

export const getPostAC = (payload: PostType[]) => ({type: GET_POST, payload} as const);
export const setIsLoadingAC = (payload: boolean) => ({type: SET_IS_LOADING, payload} as const);