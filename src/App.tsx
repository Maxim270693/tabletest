import React, {useEffect, useState} from 'react';
import './App.css';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {postThunk} from "./bll/thunkCreators/postThunk";
import Posts from "./components/Posts/Posts";
import Input from "./components/Input/Input";
import {PostType, RootStateType} from "./types/types";
import Spinner from "./components/Spinner/Spinner";
import {setCurrentPageAC} from "./bll/actions/actions";
import Footer from "./components/Footer/Footer";

function App() {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const posts = useSelector<RootStateType, PostType[]>(state => state.post.post);
    const isLoading = useSelector<RootStateType, boolean>(state => state.post.isLoading);
    const currentPage = useSelector<RootStateType, number>(state => state.post.currentPage);
    const perPage = useSelector<RootStateType, number>(state => state.post.perPage);

    const lastPostIndex = currentPage * perPage;
    const firstPostIndex = lastPostIndex - perPage;
    const currentPost = posts.slice(firstPostIndex, lastPostIndex);

    const paginate = (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber));

    const sortedPosts = currentPost.filter(post => post.title.toLowerCase().includes(searchValue));

    useEffect(() => {
        // @ts-ignore
        dispatch(postThunk())
    }, []);

    return (
        <div className="App">
            <div className="container">
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
                <Footer currentPage={currentPage}
                        paginate={paginate}
                        perPage={perPage}
                        totalPosts={posts.length}
                />
            </div>
        </div>
    );
}

export default App;
