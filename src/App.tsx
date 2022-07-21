import React, {useEffect, useState} from 'react';
import './App.css';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {postThunk} from "./bll/thunkCreators/postThunk";
import Posts from "./components/Posts";
import Input from "./components/Input/Input";
import {PostType, RootStateType} from "./types/types";
import Spinner from "./components/Spinner/Spinner";

function App() {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const posts = useSelector<RootStateType, PostType[]>(state => state.post.post);
    const isLoading = useSelector<RootStateType, boolean>(state => state.post.isLoading);

    const sortedPosts = posts.filter(post => post.title.toLowerCase().includes(searchValue));

    useEffect(() => {
        // @ts-ignore
        dispatch(postThunk())
    }, []);

    return (
        <div className="App">
            <Input searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Table bordered>
                <thead>
                <tr className="AppHeader">
                    <th>ID</th>
                    <th>Заголовок</th>
                    <th>Описание</th>
                </tr>
                </thead>
                {
                    isLoading
                        ? <Spinner/>
                        : <Posts posts={sortedPosts}/>
                }
            </Table>
        </div>
    );
}

export default App;
