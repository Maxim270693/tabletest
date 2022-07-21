import axios from "axios";
import {PostType} from "../types/types";

export const postsApi = {
    getPost() {
        return axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts')
    }
}