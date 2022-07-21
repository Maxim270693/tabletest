import {rootReducer} from "../bll/store/store";
import {initialState} from "../bll/reducers/postReducer";
import {getPostAC, setIsLoadingAC} from "../bll/actions/actions";

// type Store
export type RootStateType = ReturnType<typeof rootReducer>;

// type initialState
export type InitialStateType = typeof initialState;


// type post
export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string,
};

// type action
export type ActionsType = GetPostsActionType | SetIsLoadingActionType

export type GetPostsActionType = ReturnType<typeof getPostAC>;
export type SetIsLoadingActionType = ReturnType<typeof setIsLoadingAC>;